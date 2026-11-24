import os
import json

OUT_DIR = r"Cuoi_Ky\He_Thong_On_Thi_ISTQB"
GFORMS_DIR = os.path.join(OUT_DIR, "Google_Forms_Scripts")
os.makedirs(GFORMS_DIR, exist_ok=True)

with open(os.path.join(OUT_DIR, "questions_data.json"), encoding="utf-8") as f:
    ALL_Q = json.load(f)

SETS = [
    ("01_De_Thi_Thu_01", "de_01", "Đề thi thử 01 (Giải chi tiết TV)"),
    ("02_De_Thi_Thu_02", "de_02", "Đề thi thử 02 (Giải chi tiết TV)"),
    ("03_De_Thi_Thu_03", "de_03", "Đề thi thử 03 (Giải chi tiết TV)"),
    ("04_De_Thi_Thu_04", "de_04", "Đề thi thử 04 (Giải chi tiết TV)"),
    ("05_De_Thi_Thu_05", "de_05", "Đề thi thử 05 (Giải chi tiết TV)"),
    ("06_De_Thi_Thu_06", "de_06", "Đề thi thử 06 (Giải chi tiết TV)"),
    ("07_De_Thi_Thu_07", "de_07", "Đề thi thử 07 (Giải chi tiết TV)"),
    ("08_De_Thi_Thu_08", "de_08", "Đề thi thử 08 (Giải chi tiết TV)"),
    ("09_De_Thi_Thu_09", "de_09", "Đề thi thử 09 (Giải chi tiết TV)"),
    ("10_De_Thi_Thu_10", "de_10", "Đề thi thử 10 (Giải chi tiết TV)"),
    ("11_ISTQB_Sample_Exam_A", "istqb_a", "ISTQB Sample Exam A (40 câu chuẩn)"),
    ("12_ISTQB_Sample_Exam_A_Additional", "istqb_a_add", "ISTQB Sample Exam A — Additional (26 câu)"),
    ("13_ISTQB_Sample_Exam_B", "istqb_b", "ISTQB Sample Exam B (40 câu chuẩn)"),
    ("14_ISTQB_Sample_Exam_C", "istqb_c", "ISTQB Sample Exam C (40 câu chuẩn)"),
    ("15_ISTQB_Sample_Exam_D", "istqb_d", "ISTQB Sample Exam D (40 câu chuẩn)"),
    ("16_ASTQB_Sample_Exam_3", "astqb_3", "ASTQB Sample Exam #3 (40 câu chuẩn)"),
    ("17_ASTQB_Sample_Exam_4", "astqb_4", "ASTQB Sample Exam #4 (40 câu chuẩn)"),
]

for fname, exam_id, title in SETS:
    qs = [q for q in ALL_Q if q["exam_id"] == exam_id]
    payload = []
    for i, q in enumerate(qs):
        payload.append(
            {
                "n": i + 1,
                "ref": f"{q['q_num']}{(' [' + q['lo'] + ']') if q['lo'] else ''}",
                "stem": q["stem"]
                + (
                    "\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]"
                    if q.get("images")
                    else ""
                ),
                "opts": [
                    {"k": o["key"], "t": f"{o['key'].upper()}) {o['text']}"}
                    for o in q["options"]
                ],
                "ans": q["correct"],
                "multi": q["multi"],
                "exp": (
                    q["explanation"]
                    + (
                        f"\n📌 Kiến thức: {q['knowledge_ref']}"
                        if q.get("knowledge_ref")
                        else ""
                    )
                )[:1800],
            }
        )

    code = f"""/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: {title} ({len(qs)} câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {{
  var formTitle = {json.dumps("ISTQB CTFL v4.0 — " + title, ensure_ascii=False)};
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 ({len(qs)} câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = {json.dumps(payload, ensure_ascii=False, indent=2)};

  for (var i = 0; i < questions.length; i++) {{
    var q = questions[i];
    var itemTitle = "Câu " + q.n + " (" + q.ref + "):\\n" + q.stem;
    var item = q.multi ? form.addCheckboxItem() : form.addMultipleChoiceItem();
    item.setTitle(itemTitle);
    item.setPoints(1);
    item.setRequired(false);

    var choices = [];
    for (var j = 0; j < q.opts.length; j++) {{
      var opt = q.opts[j];
      var isCorrect = q.ans.indexOf(opt.k) !== -1;
      choices.push(item.createChoice(opt.t, isCorrect));
    }}
    item.setChoices(choices);

    if (q.exp) {{
      var feedback = FormApp.createFeedback()
        .setText("ĐÁP ÁN ĐÚNG: " + q.ans.join(", ").toUpperCase() + "\\n\\n" + q.exp)
        .build();
      item.setFeedbackForCorrect(feedback);
      item.setFeedbackForIncorrect(feedback);
    }}
  }}

  Logger.log("==========================================");
  Logger.log("✅ ĐÃ TẠO GOOGLE FORM THÀNH CÔNG: " + formTitle);
  Logger.log("👉 Link làm bài (Published URL): " + form.getPublishedUrl());
  Logger.log("👉 Link chỉnh sửa (Edit URL): " + form.getEditUrl());
  Logger.log("==========================================");
}}
"""
    with open(os.path.join(GFORMS_DIR, f"{fname}.gs"), "w", encoding="utf-8") as out_f:
        out_f.write(code)

print(f"Generated {len(SETS)} Google Apps Script files in {GFORMS_DIR}")
