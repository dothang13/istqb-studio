import os
import re
import json
import pymupdf

BASE_DIR = r"Cuoi_Ky\Ôn tập"
OUT_DIR = r"Cuoi_Ky\He_Thong_On_Thi_ISTQB"
IMG_DIR = os.path.join(OUT_DIR, "images")
os.makedirs(IMG_DIR, exist_ok=True)

CHAPTER_NAMES = {
    1: "Chương 1: Nền tảng Kiểm thử (Fundamentals of Testing)",
    2: "Chương 2: Kiểm thử trong vòng đời PM (Testing Throughout the SDLC)",
    3: "Chương 3: Kiểm thử tĩnh (Static Testing)",
    4: "Chương 4: Phân tích & Thiết kế Test (Test Analysis and Design)",
    5: "Chương 5: Quản lý hoạt động Kiểm thử (Managing the Test Activities)",
    6: "Chương 6: Công cụ Kiểm thử (Test Tools)",
}


def save_cropped_region(page, rect, filename, dpi=180):
    pad = 6
    clip = pymupdf.Rect(
        max(0, rect.x0 - pad),
        max(0, rect.y0 - pad),
        min(page.rect.width, rect.x1 + pad),
        min(page.rect.height, rect.y1 + pad),
    )
    pix = page.get_pixmap(clip=clip, dpi=dpi)
    out_path = os.path.join(IMG_DIR, filename)
    pix.save(out_path)
    return f"images/{filename}"


def parse_10de():
    folder = os.path.join(BASE_DIR, "10De")
    files = sorted(
        os.listdir(folder),
        key=lambda x: int(re.search(r"Đề\s+(\d+)", x).group(1))
        if re.search(r"Đề\s+(\d+)", x)
        else 99,
    )
    all_questions = []

    for fname in files:
        if not fname.endswith(".pdf"):
            continue
        de_num = int(re.search(r"Đề\s+(\d+)", fname).group(1))
        exam_id = f"de_{de_num:02d}"
        exam_title = f"Đề thi thử {de_num:02d} (Giải chi tiết TV)"
        pdf_path = os.path.join(folder, fname)
        doc = pymupdf.open(pdf_path)

        q_positions = []
        for pno, page in enumerate(doc):
            blocks = page.get_text("blocks")
            for b in sorted(blocks, key=lambda x: (x[1], x[0])):
                txt = b[4].strip()
                m = re.match(r"^(Câu(?:\s+bổ\s+sung)?\s+\d+)\b", txt)
                if m:
                    q_positions.append((pno, b[1], m.group(1)))

        full_text_chunks = []
        for pno, page in enumerate(doc):
            t = page.get_text("text")
            t = re.sub(
                r"(?s)^GIẢI CHI TIẾT ĐỀ THI THỬ ISTQB.*?istqbbaodau\.com\s*\n",
                "",
                t,
            )
            full_text_chunks.append(t)
        full_text = "\n".join(full_text_chunks)

        parts = re.split(r"(?m)^(?=Câu(?:\s+bổ\s+sung)?\s+\d+\b)", full_text)
        for idx, pt in enumerate(parts[1:]):
            pt = pt.strip()
            lines = pt.split("\n")
            q_label = lines[0].strip()
            is_bonus = "bổ sung" in q_label.lower()
            rest = "\n".join(lines[1:]).strip()

            m_ans = re.search(r"(?m)^Đáp án\s*:\s*([a-eA-E](?:\s*,\s*[a-eA-E])*)", rest)
            if not m_ans:
                print(f"[WARN] No Đáp án in {fname} {q_label}")
                continue
            q_part = rest[: m_ans.start()].strip()
            ans_raw = m_ans.group(1).lower()
            correct = [x.strip() for x in ans_raw.split(",") if x.strip()]
            after_ans = rest[m_ans.end() :].strip()

            chapter_info = ""
            m_kt = re.search(r"(?m)^Kiến thức\s*:\s*(.*)$", after_ans, re.S)
            if m_kt:
                explanation = after_ans[: m_kt.start()].strip()
                chapter_info = m_kt.group(1).strip().replace("\n", " ")
            else:
                explanation = after_ans

            explanation = re.sub(r"^Giải thích\s*:\s*", "", explanation).strip()
            explanation = re.sub(r"(?<!\n)\n(?!\n)", " ", explanation)

            ch_num = 0
            m_ch = re.search(r"Chương\s+(\d+)", chapter_info)
            if m_ch:
                ch_num = int(m_ch.group(1))
            lo_code = ""
            m_lo = re.search(r"\b(\d+\.\d+(?:\.\d+)?)\b", chapter_info)
            if m_lo:
                lo_code = f"FL-{m_lo.group(1)}"
                if ch_num == 0:
                    ch_num = int(m_lo.group(1).split(".")[0])

            opt_matches = list(re.finditer(r"(?m)^([a-e])\)\s+", q_part))
            if not opt_matches:
                stem = q_part
                options = []
            else:
                stem = q_part[: opt_matches[0].start()].strip()
                options = []
                for oi, om in enumerate(opt_matches):
                    okey = om.group(1).lower()
                    ostart = om.end()
                    oend = (
                        opt_matches[oi + 1].start()
                        if oi + 1 < len(opt_matches)
                        else len(q_part)
                    )
                    otext = q_part[ostart:oend].strip()
                    otext = re.sub(r"\s*\n\s*", " ", otext)
                    options.append({"key": okey, "text": otext})

            stem = re.sub(r"(?<!\n)\n(?!\n)", " ", stem)

            q_images = []
            if idx < len(q_positions):
                p_start, y_start, _ = q_positions[idx]
                if idx + 1 < len(q_positions):
                    p_end, y_end, _ = q_positions[idx + 1]
                else:
                    p_end, y_end = len(doc) - 1, 9999

                for pno in range(p_start, p_end + 1):
                    page = doc[pno]
                    for img_i, info in enumerate(page.get_image_info(xrefs=True)):
                        bbox = pymupdf.Rect(info["bbox"])
                        if (pno == p_start and bbox.y1 < y_start) or (
                            pno == p_end and bbox.y0 >= y_end
                        ):
                            continue
                        if bbox.width > 40 and bbox.height > 25:
                            img_name = f"{exam_id}_q{idx+1}_p{pno+1}_{img_i+1}.png"
                            rel_path = save_cropped_region(page, bbox, img_name)
                            q_images.append(rel_path)

            q_obj = {
                "id": f"{exam_id}_{idx+1:02d}",
                "exam_id": exam_id,
                "exam_title": exam_title,
                "group": "10De_VN",
                "q_num": q_label,
                "is_bonus": is_bonus,
                "chapter": ch_num,
                "lo": lo_code,
                "k_level": "",
                "lang": "vi_explain",
                "stem": stem,
                "images": q_images,
                "options": options,
                "correct": correct,
                "multi": len(correct) > 1 or "select two" in stem.lower(),
                "explanation": explanation,
                "knowledge_ref": chapter_info,
            }
            all_questions.append(q_obj)

    return all_questions


def parse_istqb_answers(ans_pdf_path):
    doc = pymupdf.open(ans_pdf_path)
    # Clean header/footer per page first
    cleaned_pages = []
    for pno, page in enumerate(doc):
        txt = page.get_text("text")
        if pno < 5:
            continue
        # Remove standard ISTQB page header
        lines = txt.split("\n")
        filtered = []
        skip_header = True
        for line in lines:
            s = line.strip()
            if skip_header:
                if (
                    s.startswith("Certified Tester, Foundation Level")
                    or s.startswith("Sample Exam")
                    or s.startswith("Version ")
                    or s.startswith("Page ")
                    or s.startswith("Release ")
                    or "May 2, 2025" in s
                    or "© International Software Testing" in s
                    or s in ("", "Answers", "Answer Key", "Additional Answers")
                ):
                    continue
                else:
                    skip_header = False
            filtered.append(line)
        cleaned = "\n".join(filtered)
        # Remove table column headers
        cleaned = re.sub(
            r"Question\s+Number\s*\(#\)\s+Correct\s+Answer\s+Explanation\s*/\s*Rationale\s+Learning\s+Objective\s*\(LO\)\s+K-Level\s+Number\s+of\s+Points",
            "",
            cleaned,
            flags=re.I,
        )
        cleaned = re.sub(
            r"Question\s+Number\s+Correct\s+Answer\s+Explanation\s*/\s*Rationale\s+Learning\s+Objective\s*\(LO\)\s+K-Level\s+Number\s+of\s+Points",
            "",
            cleaned,
            flags=re.I,
        )
        cleaned_pages.append(cleaned)

    full = "\n".join(cleaned_pages)
    # First parse Answer Key entries (short entries without rationale) and full rationale entries
    # In rationale section, each question ends with FL-x.x.x (or n/a) \n K[123] \n 1
    ans_map = {}
    pattern = re.compile(
        r"(?m)^(\d+|A\d+)\s*\n([a-e](?:\s*,\s*[a-e])*)\s*\n(.*?)\n(FL-[\d.]+|n/a)\s*\n(K[123]|n/a)\s*\n1\b",
        re.S,
    )
    for m in pattern.finditer(full):
        qid = m.group(1).strip()
        corr = [x.strip().lower() for x in m.group(2).split(",") if x.strip()]
        expl = m.group(3).strip()
        lo = m.group(4).strip()
        klevel = m.group(5).strip()
        expl = re.sub(r"(?<!\n)\n(?!\n)", " ", expl)
        # Format option explanations on new lines for readability
        expl = re.sub(r"\s+([a-e]\)\s+Is\s+)", r"\n\1", expl)
        expl = re.sub(r"\s+([ivx]+\.\s+Is\s+)", r"\n\1", expl)
        if qid not in ans_map or len(expl) > len(ans_map[qid]["explanation"]):
            ans_map[qid] = {
                "correct": corr,
                "explanation": expl.strip(),
                "lo": lo,
                "k_level": klevel,
            }
    return ans_map


def parse_istqb():
    configs = [
        (
            "A",
            "ISTQB_CTFL_v4.0_Sample-Exam-A-Questions_v1.7.pdf",
            "ISTQB_CTFL_v4.0_Sample-Exam-A-Answers_v1.7.pdf",
        ),
        (
            "B",
            "ISTQB_CTFL_v4.0_Sample-Exam-B-Questions_v1.7.pdf",
            "ISTQB_CTFL_v4.0_Sample-Exam-B-Answers_v1.7.pdf",
        ),
        (
            "C",
            "ISTQB_CTFL_v4.0_Sample-Exam-C-Questions_v1.6.pdf",
            "ISTQB_CTFL_v4.0_Sample-Exam-C-Answers_v1.6.pdf",
        ),
        (
            "D",
            "ISTQB_CTFL_v4.0_Sample-Exam-D-Questions_v1.5.pdf",
            "ISTQB_CTFL_v4.0_Sample-Exam-D-Answers_v1.5.pdf",
        ),
    ]

    all_questions = []
    for code, q_file, a_file in configs:
        ans_map = parse_istqb_answers(os.path.join(BASE_DIR, a_file))
        doc = pymupdf.open(os.path.join(BASE_DIR, q_file))

        # Locate all Question # headers and their page/y positions (skipping TOC on pages < 7)
        q_positions = []
        for pno in range(5, len(doc)):
            page = doc[pno]
            for b in sorted(page.get_text("blocks"), key=lambda x: (x[1], x[0])):
                txt = b[4].strip()
                m = re.match(r"^Question\s+#([A-Z0-9]+)\s+\(\d+\s+Point\)\s*$", txt, re.M)
                if m and "...." not in txt:
                    q_positions.append((pno, b[1], b[3], m.group(1)))

        # Clean page texts from first question page onwards
        first_pno = q_positions[0][0] if q_positions else 7
        cleaned_pages = []
        for pno in range(first_pno, len(doc)):
            txt = doc[pno].get_text("text")
            lines = txt.split("\n")
            filtered = []
            for line in lines:
                s = line.strip()
                if (
                    s.startswith("Certified Tester, Foundation Level")
                    or s.startswith("Sample Exam")
                    or s.startswith("Version ")
                    or re.match(r"^Page \d+ of \d+$", s)
                    or s.startswith("Release ")
                    or "May 2, 2025" in s
                    or "© International Software Testing" in s
                    or s in ("Questions", "Additional Questions")
                ):
                    continue
                filtered.append(line)
            cleaned_pages.append("\n".join(filtered))

        full_text = "\n".join(cleaned_pages)
        parts = re.split(
            r"(?m)^(?=Question\s+#[A-Z0-9]+\s+\(\d+\s+Point\)\s*$)", full_text
        )

        for idx, pt in enumerate(parts[1:]):
            pt = pt.strip()
            m_hdr = re.match(r"^Question\s+#([A-Z0-9]+)\s+\(\d+\s+Point\)\s*\n(.*)$", pt, re.S)
            if not m_hdr:
                continue
            qid = m_hdr.group(1).strip()
            body = m_hdr.group(2).strip()
            # Remove trailing 'Select ONE option.' / 'Select TWO options.'
            is_two = bool(re.search(r"Select\s+TWO\s+options?", body, re.I))
            body = re.sub(r"(?m)^Select\s+(?:ONE|TWO)\s+options?\.?\s*$", "", body, flags=re.I).strip()

            opt_matches = list(re.finditer(r"(?m)^([a-e])\)\s+", body))
            if not opt_matches:
                stem = body
                options = []
            else:
                stem = body[: opt_matches[0].start()].strip()
                options = []
                for oi, om in enumerate(opt_matches):
                    okey = om.group(1).lower()
                    ostart = om.end()
                    oend = (
                        opt_matches[oi + 1].start()
                        if oi + 1 < len(opt_matches)
                        else len(body)
                    )
                    otext = body[ostart:oend].strip()
                    otext = re.sub(r"\s*\n\s*", " ", otext)
                    options.append({"key": okey, "text": otext})

            stem = re.sub(r"(?<!\n)\n(?!\n)", " ", stem)

            # Check for images or vector tables/diagrams in this question's page region
            q_images = []
            if idx < len(q_positions):
                p_start, y_hdr_top, y_hdr_bot, _ = q_positions[idx]
                if idx + 1 < len(q_positions):
                    p_end, y_end, _, _ = q_positions[idx + 1]
                else:
                    p_end, y_end = len(doc) - 1, 770

                for pno in range(p_start, p_end + 1):
                    page = doc[pno]
                    ymin = y_hdr_bot if pno == p_start else 85
                    ymax = y_end if pno == p_end else 770

                    # 1. Embedded raster images
                    img_rects = []
                    for img_i, info in enumerate(page.get_image_info(xrefs=True)):
                        bbox = pymupdf.Rect(info["bbox"])
                        if bbox.y0 >= ymin - 5 and bbox.y1 <= ymax + 5 and bbox.width > 40 and bbox.height > 25:
                            img_rects.append(bbox)
                            img_name = f"istqb_{code.lower()}_q{qid}_img{img_i+1}.png"
                            q_images.append(save_cropped_region(page, bbox, img_name))

                    # 2. Vector tables / boxes (draws >= 4 in region, if not already covered by an image)
                    draws = [
                        d["rect"]
                        for d in page.get_drawings()
                        if d["rect"].y0 >= ymin - 2
                        and d["rect"].y1 <= ymax + 2
                        and (d["rect"].width > 15 or d["rect"].height > 15)
                    ]
                    if len(draws) >= 4 and not img_rects:
                        u_rect = draws[0]
                        for r in draws[1:]:
                            u_rect |= r
                        if u_rect.width > 80 and u_rect.height > 25:
                            img_name = f"istqb_{code.lower()}_q{qid}_table_p{pno+1}.png"
                            q_images.append(save_cropped_region(page, u_rect, img_name))

            ans_info = ans_map.get(
                qid,
                {"correct": ["a"], "explanation": "", "lo": "", "k_level": ""},
            )
            if qid not in ans_map:
                print(f"[WARN] Missing answer for ISTQB {code} Q#{qid}")

            lo_code = ans_info["lo"]
            ch_num = 0
            m_ch = re.search(r"FL-(\d+)\.", lo_code)
            if m_ch:
                ch_num = int(m_ch.group(1))

            is_add = qid.startswith("A")
            exam_id = f"istqb_{code.lower()}_add" if is_add else f"istqb_{code.lower()}"
            exam_title = (
                f"ISTQB Sample Exam {code} — Additional (26 câu)"
                if is_add
                else f"ISTQB Sample Exam {code} (40 câu chuẩn)"
            )

            all_questions.append(
                {
                    "id": f"istqb_{code.lower()}_{qid}",
                    "exam_id": exam_id,
                    "exam_title": exam_title,
                    "group": "ISTQB_EN",
                    "q_num": f"Question #{qid}",
                    "is_bonus": False,
                    "chapter": ch_num,
                    "lo": lo_code,
                    "k_level": ans_info["k_level"],
                    "lang": "en",
                    "stem": stem,
                    "images": q_images,
                    "options": options,
                    "correct": ans_info["correct"],
                    "multi": len(ans_info["correct"]) > 1 or is_two,
                    "explanation": ans_info["explanation"],
                    "knowledge_ref": f"{lo_code} ({ans_info['k_level']})" if lo_code else "",
                }
            )

    return all_questions


def parse_astqb():
    configs = [
        (
            "3",
            "CTFL-4.0.1_Sample-Questions-3.pdf",
            "CTFL-4.0.1_Sample-Answers-3.pdf",
        ),
        (
            "4",
            "CTFL-4.0.1_Sample-Questions-4.pdf",
            "CTFL-4.0.1_Sample-Answers-4.pdf",
        ),
    ]
    all_questions = []

    for num, q_file, a_file in configs:
        exam_id = f"astqb_{num}"
        exam_title = f"ASTQB Sample Exam #{num} (40 câu chuẩn)"

        # Parse answers & explanations from Answers PDF
        adoc = pymupdf.open(os.path.join(BASE_DIR, a_file))
        a_chunks = []
        for pno in range(1, len(adoc)):
            t = adoc[pno].get_text("text")
            t = re.sub(
                r"(?m)^-\s*\d+\s*-\s*\nCopyright ASTQB.*\nAll Rights Reserved\s*\nISTQB Foundation Level.*Answers\s*\n(?:40 questions, 40 points\s*\n)?",
                "",
                t,
            )
            a_chunks.append(t)
        a_full = "\n".join(a_chunks)

        # Split answers by top-level question number 1..40
        ans_map = {}
        # Find where each question 1..40 starts in Answers PDF
        for qn in range(1, 41):
            # Look for ^#?qn.\s+ followed by options a. b. c. d.
            pat = re.compile(
                rf"(?m)^#?{qn}\.\s+(.*?)(?=^#?{qn+1}\.\s+|\Z)", re.S
            )
            # Some questions (like 28, 29 in Sample 4) have sub-lists 1. 2. 3., so ensure options a. b. c. d. appear
            for m in pat.finditer(a_full):
                chunk = m.group(1)
                if re.search(r"(?m)^a\.\s", chunk):
                    # Extract after option d. (or e.)
                    m_after_d = re.search(
                        r"(?m)^([A-Da-d])\s+is\s+(?:correct|a\s+project\s+risk)\b(.*)$",
                        chunk,
                        re.S,
                    )
                    if m_after_d:
                        corr = [m_after_d.group(1).lower()]
                        expl_raw = (m_after_d.group(1).upper() + " is correct" + m_after_d.group(2)).strip()
                        lo_code = ""
                        k_level = ""
                        m_lo = re.search(r"FL[-\s]+([\d.]+)\s*\((K[123])\)\s*(.*)$", expl_raw, re.S)
                        knowledge_ref = ""
                        if m_lo:
                            lo_code = f"FL-{m_lo.group(1)}"
                            k_level = m_lo.group(2)
                            lo_desc = m_lo.group(3).strip().replace("\n", " ")
                            knowledge_ref = f"{lo_code} ({k_level}) {lo_desc}"
                            expl_raw = expl_raw[: m_lo.start()].strip()
                        expl_raw = re.sub(r"(?<!\n)\n(?!\n)", " ", expl_raw)
                        ans_map[str(qn)] = {
                            "correct": corr,
                            "explanation": expl_raw,
                            "lo": lo_code,
                            "k_level": k_level,
                            "knowledge_ref": knowledge_ref,
                        }
                    break

        # Parse questions & images/tables from Questions PDF
        qdoc = pymupdf.open(os.path.join(BASE_DIR, q_file))
        q_positions = []
        expected_q = 1
        for pno in range(1, len(qdoc)):
            page = qdoc[pno]
            for b in sorted(page.get_text("blocks"), key=lambda x: (x[1], x[0])):
                txt = b[4].strip()
                m = re.match(rf"^({expected_q})\.\s+", txt)
                if m:
                    q_positions.append((pno, b[1], b[3], str(expected_q)))
                    expected_q += 1

        q_chunks = []
        for pno in range(1, len(qdoc)):
            t = qdoc[pno].get_text("text")
            t = re.sub(
                r"(?m)^-\s*\d+\s*-\s*\nCopyright ASTQB.*\nAll Rights Reserved\s*\nISTQB Foundation Level.*Questions\s*\n(?:40 questions, 40 points\s*\n)?",
                "",
                t,
            )
            q_chunks.append(t)
        q_full = "\n".join(q_chunks)

        # Slice q_full sequentially for qn = 1..40
        pos_idx = 0
        for qn in range(1, 41):
            # Find ^qn.\s+ after pos_idx that contains ^a.\s
            pat_start = re.compile(rf"(?m)^{qn}\.\s+")
            m_start = pat_start.search(q_full, pos_idx)
            if not m_start:
                print(f"[WARN] ASTQB #{num} missing Q{qn}")
                continue
            start_content = m_start.end()
            # Find next question qn+1 that is a true question (after option d.)
            m_opt_d = re.search(r"(?m)^d\.\s*", q_full[start_content:])
            search_next_from = start_content + (m_opt_d.end() if m_opt_d else 0)
            if qn < 40:
                m_next = re.search(rf"(?m)^{qn+1}\.\s+", q_full[search_next_from:])
                end_content = (
                    search_next_from + m_next.start() if m_next else len(q_full)
                )
            else:
                end_content = len(q_full)

            pos_idx = end_content
            q_body = q_full[start_content:end_content].strip()

            opt_matches = list(re.finditer(r"(?m)^([a-d])\.\s*", q_body))
            if not opt_matches:
                stem = q_body
                options = []
            else:
                stem = q_body[: opt_matches[0].start()].strip()
                options = []
                for oi, om in enumerate(opt_matches):
                    okey = om.group(1).lower()
                    ostart = om.end()
                    oend = (
                        opt_matches[oi + 1].start()
                        if oi + 1 < len(opt_matches)
                        else len(q_body)
                    )
                    otext = q_body[ostart:oend].strip()
                    otext = re.sub(r"\s*\n\s*", " ", otext)
                    options.append({"key": okey, "text": otext})

            stem = re.sub(r"(?<!\n)\n(?!\n)", " ", stem)

            # Extract images or vector tables for this question
            q_images = []
            idx = qn - 1
            if idx < len(q_positions):
                p_start, y_hdr_top, y_hdr_bot, _ = q_positions[idx]
                if idx + 1 < len(q_positions):
                    p_end, y_end, _, _ = q_positions[idx + 1]
                else:
                    p_end, y_end = len(qdoc) - 1, 710

                for pno in range(p_start, p_end + 1):
                    page = qdoc[pno]
                    ymin = y_hdr_top if pno == p_start else 70
                    ymax = y_end if pno == p_end else 710

                    # 1. Embedded raster images (exclude footer logo at y > 710)
                    img_rects = []
                    for img_i, info in enumerate(page.get_image_info(xrefs=True)):
                        bbox = pymupdf.Rect(info["bbox"])
                        if (
                            bbox.y0 >= ymin - 5
                            and bbox.y1 <= min(ymax + 10, 715)
                            and bbox.width > 40
                            and bbox.height > 25
                        ):
                            img_rects.append(bbox)
                            img_name = f"{exam_id}_q{qn}_p{pno+1}_img{img_i+1}.png"
                            q_images.append(save_cropped_region(page, bbox, img_name))

                    # 2. Vector tables / boxes (exclude footer line at y > 700)
                    draws = [
                        d["rect"]
                        for d in page.get_drawings()
                        if d["rect"].y0 >= ymin - 2
                        and d["rect"].y1 <= min(ymax + 2, 700)
                        and (d["rect"].width > 15 or d["rect"].height > 15)
                    ]
                    if len(draws) >= 6 and not img_rects:
                        u_rect = draws[0]
                        for r in draws[1:]:
                            u_rect |= r
                        if u_rect.width > 80 and u_rect.height > 25:
                            img_name = f"{exam_id}_q{qn}_table_p{pno+1}.png"
                            q_images.append(save_cropped_region(page, u_rect, img_name))

            # Special case: Sample 4 Q27 has 4 decision table images corresponding to options a, b, c, d!
            if num == "4" and qn == 27 and len(q_images) == 4:
                for oi, opt in enumerate(options):
                    opt["text"] = f"Bảng quyết định phương án ({opt['key'].upper()}) — xem hình {oi+1} bên dưới"
                    opt["image"] = q_images[oi]

            ans_info = ans_map.get(
                str(qn),
                {
                    "correct": ["a"],
                    "explanation": "",
                    "lo": "",
                    "k_level": "",
                    "knowledge_ref": "",
                },
            )
            if str(qn) not in ans_map:
                print(f"[WARN] Missing answer for ASTQB #{num} Q{qn}")

            lo_code = ans_info["lo"]
            ch_num = 0
            m_ch = re.search(r"FL-(\d+)\.", lo_code)
            if m_ch:
                ch_num = int(m_ch.group(1))

            all_questions.append(
                {
                    "id": f"{exam_id}_{qn:02d}",
                    "exam_id": exam_id,
                    "exam_title": exam_title,
                    "group": "ASTQB_EN",
                    "q_num": f"Question {qn}",
                    "is_bonus": False,
                    "chapter": ch_num,
                    "lo": lo_code,
                    "k_level": ans_info["k_level"],
                    "lang": "en",
                    "stem": stem,
                    "images": q_images,
                    "options": options,
                    "correct": ans_info["correct"],
                    "multi": len(ans_info["correct"]) > 1,
                    "explanation": ans_info["explanation"],
                    "knowledge_ref": ans_info["knowledge_ref"],
                }
            )

    return all_questions


def annotate_duplicates_and_save(all_q):
    # Normalize stem + sorted options to detect true duplicates across sets
    seen = {}
    dup_count = 0
    for q in all_q:
        norm_stem = re.sub(r"[^a-z0-9]+", " ", q["stem"].lower()).strip()
        opts_norm = "|".join(
            sorted(re.sub(r"[^a-z0-9]+", " ", o["text"].lower()).strip()[:45] for o in q["options"])
        )
        sig = f"{norm_stem[:100]}||{opts_norm}"
        if sig in seen:
            primary_id = seen[sig]
            q["is_duplicate"] = True
            q["duplicate_of"] = primary_id
            dup_count += 1
        else:
            seen[sig] = q["id"]
            q["is_duplicate"] = False
            q["duplicate_of"] = None

    # Save JSON and JS bundle
    json_path = os.path.join(OUT_DIR, "questions_data.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(all_q, f, ensure_ascii=False, indent=2)

    js_path = os.path.join(OUT_DIR, "questions_data.js")
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("window.ISTQB_QUESTIONS = ")
        json.dump(all_q, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Saved {len(all_q)} questions ({dup_count} duplicates detected -> {len(all_q) - dup_count} unique questions).")
    print("Chapters breakdown:", {ch: sum(1 for q in all_q if q["chapter"] == ch) for ch in range(0, 7)})
    print("Missing explanations:", [q["id"] for q in all_q if not q["explanation"]])
    for q in all_q:
        if q["is_duplicate"]:
            print(f"  Dup: {q['id']} ({q['q_num']}) == {q['duplicate_of']}")


if __name__ == "__main__":
    q_10de = parse_10de()
    q_istqb = parse_istqb()
    q_astqb = parse_astqb()
    all_q = q_10de + q_istqb + q_astqb
    print(f"10De: {len(q_10de)} (Main: {sum(1 for q in q_10de if not q['is_bonus'])}, Bonus: {sum(1 for q in q_10de if q['is_bonus'])})")
    print(f"ISTQB A-D: {len(q_istqb)}")
    print(f"ASTQB 3-4: {len(q_astqb)}")
    print(f"TOTAL CORE (565): {sum(1 for q in all_q if not q['is_bonus'])}")
    print(f"TOTAL ALL (610): {len(all_q)}")
    print(f"Total with images/tables: {sum(1 for q in all_q if q['images'])}")
    bad_opts = [(q["id"], len(q["options"])) for q in all_q if len(q["options"]) < 4]
    print(f"Questions with <4 options: {bad_opts}")
    annotate_duplicates_and_save(all_q)
