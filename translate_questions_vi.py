import os
import re
import json
import time
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

OUT_DIR = r"Cuoi_Ky\He_Thong_On_Thi_ISTQB"
JSON_PATH = os.path.join(OUT_DIR, "questions_data.json")
JS_PATH = os.path.join(OUT_DIR, "questions_data.js")

# Terminology refinements so translated Vietnamese reads like natural ISTQB Vietnamese
TERM_REPLACEMENTS = [
    (r"\bthực hiện thử nghiệm\b", "thực thi kiểm thử"),
    (r"\bthực thi thử nghiệm\b", "thực thi kiểm thử"),
    (r"\bquá trình thử nghiệm\b", "quá trình kiểm thử"),
    (r"\bhoạt động thử nghiệm\b", "hoạt động kiểm thử"),
    (r"\bcác thử nghiệm\b", "các bài kiểm thử"),
    (r"\btrường hợp thử nghiệm\b", "test case (ca kiểm thử)"),
    (r"\bcác trường hợp thử nghiệm\b", "các test case"),
    (r"\bbộ thử nghiệm\b", "test suite (bộ kiểm thử)"),
    (r"\bđối tượng thử nghiệm\b", "test object (đối tượng kiểm thử)"),
    (r"\bcơ sở thử nghiệm\b", "test basis (cơ sở kiểm thử)"),
    (r"\bmôi trường thử nghiệm\b", "môi trường kiểm thử"),
    (r"\bkế hoạch thử nghiệm\b", "kế hoạch kiểm thử (test plan)"),
    (r"\bchiến lược thử nghiệm\b", "chiến lược kiểm thử"),
    (r"\bcách tiếp cận thử nghiệm\b", "cách tiếp cận kiểm thử"),
    (r"\bphương pháp thử nghiệm\b", "phương pháp kiểm thử"),
    (r"\bngười thử nghiệm\b", "tester (kiểm thử viên)"),
    (r"\bnhững người thử nghiệm\b", "các tester"),
    (r"\bquản lý thử nghiệm\b", "test manager (quản lý kiểm thử)"),
    (r"\bnhóm thử nghiệm\b", "nhóm kiểm thử"),
    (r"\btự động hóa thử nghiệm\b", "tự động hóa kiểm thử (test automation)"),
    (r"\bcấp độ thử nghiệm\b", "cấp độ kiểm thử (test level)"),
    (r"\bloại thử nghiệm\b", "loại kiểm thử (test type)"),
    (r"\bkỹ thuật thử nghiệm\b", "kỹ thuật kiểm thử (test technique)"),
    (r"\bthử nghiệm tĩnh\b", "kiểm thử tĩnh (static testing)"),
    (r"\bthử nghiệm động\b", "kiểm thử động (dynamic testing)"),
    (r"\bthử nghiệm hộp trắng\b", "kiểm thử hộp trắng (white-box)"),
    (r"\bthử nghiệm hộp đen\b", "kiểm thử hộp đen (black-box)"),
    (r"\bthử nghiệm thăm dò\b", "kiểm thử thăm dò (exploratory testing)"),
    (r"\bthử nghiệm hồi quy\b", "kiểm thử hồi quy (regression testing)"),
    (r"\bthử nghiệm xác nhận\b", "kiểm thử xác nhận (confirmation testing)"),
    (r"\bthử nghiệm thành phần\b", "kiểm thử thành phần (component testing)"),
    (r"\bthử nghiệm tích hợp\b", "kiểm thử tích hợp (integration testing)"),
    (r"\bthử nghiệm hệ thống\b", "kiểm thử hệ thống (system testing)"),
    (r"\bthử nghiệm chấp nhận\b", "kiểm thử chấp nhận (acceptance testing)"),
    (r"\bthử nghiệm bảo trì\b", "kiểm thử bảo trì (maintenance testing)"),
    (r"\bphạm vi chi nhánh\b", "độ phủ nhánh (branch coverage)"),
    (r"\bđộ bao phủ chi nhánh\b", "độ phủ nhánh (branch coverage)"),
    (r"\bphạm vi câu lệnh\b", "độ phủ câu lệnh (statement coverage)"),
    (r"\bđộ bao phủ câu lệnh\b", "độ phủ câu lệnh (statement coverage)"),
    (r"\btiêu chí nhập\b", "tiêu chí đầu vào (entry criteria)"),
    (r"\btiêu chí thoát\b", "tiêu chí đầu ra (exit criteria)"),
    (r"\bkhuyết tật\b", "khiếm khuyết (defect)"),
    (r"\bbáo cáo khiếm khuyết\b", "báo cáo lỗi (defect report)"),
    (r"\bkim tự tháp thử nghiệm\b", "tháp kiểm thử (test pyramid)"),
    (r"\bgóc phần tư thử nghiệm\b", "tứ phân vị kiểm thử (testing quadrants)"),
    (r"\bđiều lệ thử nghiệm\b", "test charter"),
    (r"\bphần mềm thử nghiệm\b", "testware (chế phẩm kiểm thử)"),
    (r"\bthử nghiệm\b", "kiểm thử"),
]


def refine_istqb_vi(text):
    if not text:
        return ""
    res = text
    for pat, repl in TERM_REPLACEMENTS:
        res = re.sub(pat, repl, res, flags=re.IGNORECASE)
    # Ensure first character is capitalized if original starts with letter
    res = res.strip()
    if res and res[0].islower():
        res = res[0].upper() + res[1:]
    return res


def translate_chunk(texts):
    """Translate a list of strings in a single HTTP request using a safe delimiter."""
    delim = "\n[[[SEP]]]\n"
    joined = delim.join(texts)
    url = (
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q="
        + urllib.parse.quote(joined)
    )
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                translated_full = "".join(x[0] for x in data[0] if x and x[0])
                parts = re.split(r"\s*\[\[\[SEP\]\]\]\s*", translated_full)
                if len(parts) == len(texts):
                    return [refine_istqb_vi(p) for p in parts]
        except Exception as e:
            time.sleep(0.5 * (attempt + 1))

    # Fallback: translate one by one if delimiter split mismatched
    out = []
    for t in texts:
        for attempt in range(3):
            try:
                u = (
                    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q="
                    + urllib.parse.quote(t)
                )
                req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
                with urllib.request.urlopen(req, timeout=10) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    tr = "".join(x[0] for x in data[0] if x and x[0])
                    out.append(refine_istqb_vi(tr))
                    break
            except Exception:
                time.sleep(0.4)
        else:
            out.append(t)
    return out


def translate_single_question(q):
    # Collect items to translate for this question: [stem, opt0, opt1, ..., (optional explanation if lang=='en')]
    items = [q["stem"]]
    opt_indices = []
    for i, opt in enumerate(q["options"]):
        # Skip if option is already Vietnamese (e.g. Sample 4 Q27 image placeholder)
        if "Bảng quyết định phương án" in opt["text"]:
            opt["text_vi"] = opt["text"]
        else:
            opt_indices.append(i)
            items.append(opt["text"])

    need_expl = q.get("lang") == "en" and q.get("explanation")
    if need_expl:
        items.append(q["explanation"])

    translated = translate_chunk(items)
    q["stem_vi"] = translated[0]
    ptr = 1
    for oi in opt_indices:
        q["options"][oi]["text_vi"] = translated[ptr]
        ptr += 1

    if need_expl:
        q["explanation_vi"] = translated[ptr]
    else:
        q["explanation_vi"] = q.get("explanation", "")

    return q["id"]


def main():
    with open(JSON_PATH, encoding="utf-8") as f:
        all_q = json.load(f)

    print(f"Translating {len(all_q)} questions (stems, options, and English explanations)...")
    t0 = time.time()
    done = 0
    with ThreadPoolExecutor(max_workers=16) as ex:
        futures = {ex.submit(translate_single_question, q): q for q in all_q}
        for fut in as_completed(futures):
            done += 1
            if done % 100 == 0 or done == len(all_q):
                print(f"  Progress: {done}/{len(all_q)} ({time.time() - t0:.1f}s)")

    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(all_q, f, ensure_ascii=False, indent=2)

    with open(JS_PATH, "w", encoding="utf-8") as f:
        f.write("window.ISTQB_QUESTIONS = ")
        json.dump(all_q, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    # Verify sample translations
    print("Sample 10De Q1:")
    print("  EN:", all_q[0]["stem"])
    print("  VI:", all_q[0]["stem_vi"])
    for o in all_q[0]["options"]:
        print(f"   {o['key']}) {o['text']} -> {o['text_vi']}")

    istqb_q = next(q for q in all_q if q["group"] == "ISTQB_EN")
    print("\nSample ISTQB A Q1:")
    print("  EN:", istqb_q["stem"])
    print("  VI:", istqb_q["stem_vi"])
    print("  Expl VI:", istqb_q["explanation_vi"][:250])


if __name__ == "__main__":
    main()
