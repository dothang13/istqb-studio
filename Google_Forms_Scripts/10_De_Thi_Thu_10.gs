/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 10 (Giải chi tiết TV) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 10 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (40 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-2.1.5]",
    "stem": "Which of the following sets of practices BEST illustrates the shift-left approach described in CTFL v4.0?",
    "opts": [
      {
        "k": "a",
        "t": "A) Reviewing the requirement specification before code is written; writing test cases before coding; using CI with automated component tests and static analysis on every commit; performing non-functional testing as early as component level where possible"
      },
      {
        "k": "b",
        "t": "B) Moving all testing to the last two weeks before the release date to test the \"real\" system"
      },
      {
        "k": "c",
        "t": "C) Replacing all testers with an offshore team in a different time zone"
      },
      {
        "k": "d",
        "t": "D) Running only manual exploratory testing after the system is deployed to production"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "SHIFT-LEFT nghĩa là kéo hoạt động kiểm thử/phản hồi chất lượng về PHÍA TRÁI (sớm hơn) trên dòng thời gian dự án. Các thực hành tiêu biểu mà v4.0 liệt kê: REVIEW đặc tả yêu cầu ngay từ góc nhìn kiểm thử; viết test TRƯỚC khi lập trình (test-first); dùng CI để mỗi lần commit đều tự động chạy component test và PHÂN TÍCH TĨNH; thực hiện kiểm thử PHI CHỨC NĂNG sớm ở mức component khi khả thi — đúng trọn gói phương án (a). Lưu ý v4.0: shift-left không có nghĩa bỏ quên giai đoạn sau, và có thể đòi thêm effort đào tạo/công cụ lúc đầu nhưng tiết kiệm lớn về sau. (b) là shift-RIGHT tiêu cực (dồn cuối); (c) là thuê ngoài — không liên quan; (d) chỉ kiểm sau khi lên production — muộn nhất có thể.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.5 Shift-Left Approach."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-2.1.6]",
    "stem": "Which of the following statements about RETROSPECTIVES in CTFL v4.0 is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) A retrospective is held at the beginning of the project to define the test strategy"
      },
      {
        "k": "b",
        "t": "B) A retrospective is typically held at the end of a project or an iteration; participants discuss what was successful and should be retained, what was not successful and could be improved, and how to incorporate improvements — for testing, results may include improved test effectiveness, testware reuse, or better cooperation between testing and development"
      },
      {
        "k": "c",
        "t": "C) Retrospectives should only involve testers, because other roles cannot judge test process problems"
      },
      {
        "k": "d",
        "t": "D) Improvements agreed in a retrospective must not be implemented until the next project starts"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "RETROSPECTIVE là buổi nhìn lại được tổ chức ở CUỐI một chặng — cuối iteration, release hoặc dự án (trong Agile thường là sự kiện cuối mỗi sprint): nhóm cùng phân tích điều gì THÀNH CÔNG cần giữ, điều gì CHƯA TỐT có thể cải thiện, và cách ĐƯA cải tiến vào thực thi ngay các vòng sau — đây là cơ chế CẢI TIẾN QUY TRÌNH LIÊN TỤC. Với kiểm thử, lợi ích điển hình: tăng hiệu quả/hiệu suất kiểm thử, tăng chất lượng testware và khả năng tái sử dụng, gắn kết hơn giữa kiểm thử và phát triển ⇒ (b). (a) nhầm thời điểm (đầu dự án là lập kế hoạch); (c) ngược tinh thần whole-team — mọi vai trò cùng tham gia; (d) vô hiệu hóa giá trị của retrospective — cải tiến áp dụng NGAY iteration kế tiếp.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.6 Retrospectives and Process Improvement."
  },
  {
    "n": 3,
    "ref": "Câu 3 [FL-4.3.2]",
    "stem": "A test suite achieves 100% branch coverage on a component. A colleague claims: \"That means every possible PATH through the code has been executed, so no control-flow test case is missing.\" Is this claim correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) Yes — 100% branch coverage is by definition the same as 100% path coverage"
      },
      {
        "k": "b",
        "t": "B) No — branch coverage only guarantees that each individual branch outcome has been exercised at least once; the number of distinct PATHS (combinations of branches, especially with loops) is usually far larger, so many paths may remain untested"
      },
      {
        "k": "c",
        "t": "C) Yes — but only if the component contains no comments"
      },
      {
        "k": "d",
        "t": "D) No — because branch coverage says nothing about whether the statements were executed"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "BRANCH coverage chỉ yêu cầu MỖI NHÁNH (mỗi kết cục của từng điểm quyết định) được đi qua ÍT NHẤT MỘT LẦN — nó KHÔNG yêu cầu mọi TỔ HỢP nhánh. Số ĐƯỜNG ĐI (path) là tổ hợp các nhánh nối tiếp nhau: với k quyết định độc lập đã có tới 2^k đường, và khi có VÒNG LẶP thì số đường thực tế gần như vô hạn — 100% branch hoàn toàn có thể đạt bằng vài test trong khi vô số đường chưa hề chạy ⇒ (b). Ví dụ: hai IF nối tiếp — 2 test (TT và FF) đủ 100% branch nhưng bỏ sót hai đường TF và FT. (d) sai chiều ngược: 100% branch BAO HÀM 100% statement. Bài học: “độ phủ 100%” luôn phải hỏi “phủ CÁI GÌ” — không tiêu chí nào chứng minh phần mềm hết lỗi (nguyên tắc 1 & 2).\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.3.2 Branch Testing (giới hạn của tiêu chí độ phủ)."
  },
  {
    "n": 4,
    "ref": "Câu 4 [FL-2.3]",
    "stem": "During maintenance of a 15-year-old system, the team must decide how much regression testing is needed for a small change. They attempt an IMPACT ANALYSIS. Which of the following factors typically makes impact analysis DIFFICULT in such a situation?",
    "opts": [
      {
        "k": "a",
        "t": "A) The specifications (e.g., business requirements, user stories) are outdated or missing, testware has not been maintained, and traceability between tests and the test basis has not been kept up to date"
      },
      {
        "k": "b",
        "t": "B) The change is documented in the version control system"
      },
      {
        "k": "c",
        "t": "C) The team has automated regression tests with good coverage"
      },
      {
        "k": "d",
        "t": "D) The system has clear, well-maintained architecture documentation"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "IMPACT ANALYSIS đánh giá các HỆ QUẢ DỰ KIẾN và TÁC DỤNG PHỤ của một thay đổi, đồng thời xác định những vùng bị ảnh hưởng — từ đó chọn phạm vi REGRESSION test cần chạy. v4.0 nêu rõ các yếu tố khiến việc này KHÓ: đặc tả lỗi thời hoặc thất lạc, TESTWARE không được bảo trì, khả năng TRUY VẾT giữa test và test basis không được duy trì, hỗ trợ công cụ yếu hoặc thiếu người hiểu hệ thống — đúng nội dung (a), rất điển hình với hệ thống 15 năm tuổi. Ngược lại (b), (c), (d) đều là những điều kiện LÀM DỄ impact analysis: lịch sử thay đổi rõ, bộ regression tự động phủ tốt, tài liệu kiến trúc được duy trì.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.3 Maintenance Testing (impact analysis)."
  },
  {
    "n": 5,
    "ref": "Câu 5 [FL-1.5.2]",
    "stem": "In a sprint review, the product owner says: \"Quality is the testers' job — developers should just focus on writing features as fast as possible.\" According to the WHOLE-TEAM approach in CTFL v4.0, what is the BEST response?",
    "opts": [
      {
        "k": "a",
        "t": "A) Agree — only testers are responsible for quality, so developers should never test"
      },
      {
        "k": "b",
        "t": "B) Explain that in the whole-team approach, quality is the responsibility of the ENTIRE team: everyone contributes to it (developers test their code and collaborate in reviews, testers coach and share testing knowledge, business representatives clarify acceptance criteria), and anyone can help with testing tasks"
      },
      {
        "k": "c",
        "t": "C) Suggest doubling the size of the test team so that developers never have to think about defects"
      },
      {
        "k": "d",
        "t": "D) Propose removing the testers, since developers can be fully responsible for quality on their own"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "WHOLE-TEAM approach — nền tảng của kiểm thử trong Agile theo v4.0: CHẤT LƯỢNG LÀ TRÁCH NHIỆM CHUNG của cả nhóm, không phải “việc riêng của tester”. Mọi thành viên có kỹ năng cần thiết đều có thể thực hiện nhiệm vụ kiểm thử; tester đóng vai trò lan tỏa tư duy kiểm thử — huấn luyện, chia sẻ kiến thức, cùng developer và đại diện nghiệp vụ làm rõ acceptance criteria (mô hình cộng tác ba góc nhìn) ⇒ (b). Quan niệm “tester lo chất lượng, dev chỉ lo tốc độ” chính là hạn chế kinh điển của độc lập kiểm thử bị đẩy tới cực đoan: developer đánh mất ý thức trách nhiệm về chất lượng. (a), (c) củng cố quan niệm sai; (d) cực đoan chiều ngược lại — vứt bỏ giá trị của góc nhìn kiểm thử độc lập.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.5.2 Whole Team Approach."
  },
  {
    "n": 6,
    "ref": "Câu 6 [FL-4.2.1]",
    "stem": "Which of the following statements about equivalence partitioning according to CTFL v4.0 is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Equivalence partitions may overlap, as long as each partition contains at least one valid value"
      },
      {
        "k": "b",
        "t": "B) The partitions must not overlap and must be non-empty sets; each value must belong to exactly ONE equivalence partition; partitions in which invalid values are processed are called invalid partitions"
      },
      {
        "k": "c",
        "t": "C) Only inputs can be partitioned; outputs and internal values cannot"
      },
      {
        "k": "d",
        "t": "D) If one value in a partition passes the test, all other partitions are also guaranteed to work"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Các tính chất nền tảng của EP theo v4.0: phân vùng được suy ra từ test basis sao cho mọi phần tử TRONG CÙNG một phân vùng được hệ thống XỬ LÝ NHƯ NHAU; các phân vùng phải là tập KHÔNG RỖNG, KHÔNG GIAO NHAU, và MỖI GIÁ TRỊ THUỘC ĐÚNG MỘT phân vùng; phân vùng chứa giá trị hợp lệ gọi là VALID partition, chứa giá trị không hợp lệ gọi là INVALID partition ⇒ (b). (a) vi phạm tính không giao nhau — nếu một giá trị thuộc hai phân vùng, khái niệm “đại diện” sụp đổ. (c) sai — có thể phân vùng cho cả đầu ra, giá trị nội bộ, điều kiện thời gian, tham số giao diện. (d) sai — một đại diện chỉ đại diện cho phân vùng CỦA NÓ, không nói gì về phân vùng khác.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 7,
    "ref": "Câu 7 [FL-4.2.2]",
    "stem": "A field accepts integer values from 1 to 100. The developer accidentally implemented the check as \"input &gt; 1\" instead of \"input &gt;= 1\". Why is the 3-VALUE boundary value analysis more likely than the 2-value BVA to detect this kind of defect?",
    "opts": [
      {
        "k": "a",
        "t": "A) Because 3-value BVA uses three times as many test cases for the whole input domain, so it finds three times as many defects of every kind"
      },
      {
        "k": "b",
        "t": "B) Because for each boundary it also tests BOTH neighbours of the boundary value (e.g., 0, 1 and 2 for the boundary 1), so implementation faults such as a misplaced boundary or a wrong comparison operator, which 2-value BVA can miss, are exposed"
      },
      {
        "k": "c",
        "t": "C) Because 3-value BVA tests only invalid values, which is where all defects are located"
      },
      {
        "k": "d",
        "t": "D) Because 2-value BVA cannot be applied to integer fields at all"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Với biên 1 của miền [1, 100]: BVA 2 ĐIỂM kiểm {0, 1}; BVA 3 ĐIỂM kiểm {0, 1, 2} — thêm hàng xóm BÊN TRONG của biên. Với lỗi cài đặt “> 1” thay vì “>= 1”: giá trị 0 bị từ chối (đúng như mong đợi), giá trị 1 bị từ chối (SAI — lộ lỗi)… thực tế 2 điểm cũng bắt được lỗi này ở giá trị 1; nhưng với lớp lỗi BIÊN BỊ DỊCH CHUYỂN (ví dụ cài “>= 2”): 2-value kiểm 0 (từ chối ✓) và 1 (từ chối — lộ lỗi ✓)… còn trường hợp cài “> 0”: 0 bị nhận? 2-value kiểm 0 → phát hiện. Điểm khác biệt then chốt nằm ở các lỗi mà HAI kết quả của 2 điểm đều “tình cờ đúng” nhưng điểm thứ ba thì sai — ví dụ điều kiện sai kiểu “== 1” thay vì “>= 1”: 0 từ chối ✓, 1 nhận ✓ (2- value đạt hết), nhưng 2 bị TỪ CHỐI — chỉ BVA 3 điểm (kiểm cả 2) mới lộ. Vì vậy v4.0 khuyến nghị dùng 3-value khi rủi ro cao ⇒ (b). (a) sai về logic “nhiều gấp ba”; (c), (d) sai hiển nhiên.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.2.2 Boundary Value Analysis (2-value & 3-value BVA)."
  },
  {
    "n": 8,
    "ref": "Câu 8 [FL-5.5]",
    "stem": "According to CTFL v4.0, after a defect report (an anomaly report) is logged and analyzed, several resolutions are possible. Which of the following is a set of realistic outcomes of defect analysis?",
    "opts": [
      {
        "k": "a",
        "t": "A) Every reported anomaly must always result in a code fix"
      },
      {
        "k": "b",
        "t": "B) The anomaly may be confirmed as a defect to be fixed; or it may be deferred to a later release; or it may be rejected — for example because it is a duplicate, cannot be reproduced, or is not a defect at all (e.g., the test or the test environment was wrong)"
      },
      {
        "k": "c",
        "t": "C) All anomalies must be deleted from the tracking system at the end of each iteration"
      },
      {
        "k": "d",
        "t": "D) The tester alone always decides whether the developer must fix the defect immediately"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Quy trình quản lý defect theo v4.0: GHI NHẬN anomaly (bất thường) → PHÂN TÍCH và PHÂN LOẠI → RA QUYẾT ĐỊNH xử lý → ĐÓNG khi hoàn tất. Không phải anomaly nào cũng thành bản sửa mã: sau phân tích, nó có thể được XÁC NHẬN là defect cần sửa; được HOÃN (defer) sang release sau vì độ ưu tiên thấp; hoặc bị TỪ CHỐI — vì là BẢN SAO (duplicate) của defect đã có, KHÔNG TÁI HIỆN được, hoặc KHÔNG PHẢI DEFECT của sản phẩm (sai ở chính test case, test data hay môi trường — false positive) ⇒ (b). (a) tuyệt đối hóa sai; (c) xóa hồ sơ làm mất dữ liệu chất lượng; (d) quyết định xử lý là của các bên có thẩm quyền (thường qua triage/CCB), không phải của riêng tester.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.5 Defect Management."
  },
  {
    "n": 9,
    "ref": "Câu 9 [FL-4.5]",
    "stem": "According to CTFL v4.0, what is the PRIMARY purpose of collaboration-based test approaches (e.g., collaborative user story writing and acceptance criteria definition), in contrast to the test techniques of sections 4.2–4.4?",
    "opts": [
      {
        "k": "a",
        "t": "A) To measure statement coverage more precisely than white-box techniques"
      },
      {
        "k": "b",
        "t": "B) To AVOID defects from being introduced in the first place, through collaboration and communication among stakeholders, rather than to detect defects that already exist"
      },
      {
        "k": "c",
        "t": "C) To replace all dynamic testing with meetings"
      },
      {
        "k": "d",
        "t": "D) To generate defect reports automatically from user stories"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 phân biệt rõ hai họ: các KỸ THUẬT KIỂM THỬ (black-box, white-box, experience-based ở mục 4.2–4.4) nhằm PHÁT HIỆN defect đã tồn tại trong work product; còn các CÁCH TIẾP CẬN DỰA TRÊN CỘNG TÁC (viết user story cộng tác với 3 góc nhìn business– developer–tester, cùng định nghĩa acceptance criteria…) nhằm PHÒNG TRÁNH defect NGAY TỪ ĐẦU — nhờ trao đổi, làm rõ hiểu lầm, thống nhất kỳ vọng TRƯỚC khi hiện thực ⇒ (b). Đây là tinh thần “phòng hơn chữa” (defect avoidance), bổ sung cho early testing và shift-left. (a), (c), (d) đều gán sai chức năng.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.5 Collaboration-based Test Approaches."
  },
  {
    "n": 10,
    "ref": "Câu 10 [FL-5.2.3]",
    "stem": "According to CTFL v4.0, which of the following are typical techniques for RISK IDENTIFICATION (creating the list of product risks)?",
    "opts": [
      {
        "k": "a",
        "t": "A) Brainstorming, workshops, interviews with stakeholders and expert interviews, cause-effect analysis, using risk checklists, and analyzing lessons learned from past projects"
      },
      {
        "k": "b",
        "t": "B) Statement testing and branch testing"
      },
      {
        "k": "c",
        "t": "C) Boundary value analysis applied to the project budget"
      },
      {
        "k": "d",
        "t": "D) Running the full regression suite twice"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "NHẬN DIỆN RỦI RO — bước đầu của risk analysis — dùng các kỹ thuật huy động tri thức của các bên liên quan: BRAINSTORMING (động não tập thể), WORKSHOP chuyên đề, PHỎNG VẤN các bên liên quan và chuyên gia, phân tích NHÂN – QUẢ (cause-effect), CHECKLIST rủi ro có sẵn của tổ chức, và khai thác BÀI HỌC KINH NGHIỆM/dữ liệu từ các dự án trước ⇒ (a). Càng nhiều góc nhìn tham gia, danh sách rủi ro càng đầy đủ. Sau bước này mới đến RISK ASSESSMENT (phân loại, ước lượng likelihood × impact, xếp ưu tiên — xem Câu 2 – Đề 4 và Câu 6 – Đề 6). (b), (c), (d) là kỹ thuật/hoạt động kiểm thử, không phải kỹ thuật nhận diện rủi ro.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.2.3 Product Risk Analysis (risk identification)."
  },
  {
    "n": 11,
    "ref": "Câu 11 [FL-5.2.2]",
    "stem": "A product risk has been assessed quantitatively: the likelihood of the failure occurring is estimated at 20%, and the financial impact if it occurs is estimated at $50,000. Which risk level (risk exposure) results from a quantitative risk assessment, and what is its value here?",
    "opts": [
      {
        "k": "a",
        "t": "A) Risk level = likelihood + impact = $50,000.20"
      },
      {
        "k": "b",
        "t": "B) Risk level = likelihood × impact = $10,000"
      },
      {
        "k": "c",
        "t": "C) Risk level = impact − likelihood = $49,999.80"
      },
      {
        "k": "d",
        "t": "D) Risk level cannot be calculated; risk levels can only ever be expressed qualitatively (e.g., low/medium/high)"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0: đánh giá rủi ro có thể ĐỊNH LƯỢNG hoặc ĐỊNH TÍNH. Khi định lượng, MỨC RỦI RO (risk level/risk exposure) = XÁC SUẤT xảy ra × TÁC ĐỘNG: 20% × 50.000 $ = 10.000 $ ⇒ (b). Con số này cho phép so sánh và xếp ưu tiên các rủi ro trên cùng một thang. Khi không thể định lượng tin cậy, dùng cách ĐỊNH TÍNH — ma trận likelihood × impact với các mức (thấp/trung bình/cao) — nên (d) sai khi tuyệt đối hóa “chỉ có định tính”. (a) và (c) dùng phép toán sai (cộng/trừ thay vì nhân).\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.2.2 Risk Assessment (& 5.2.1)."
  },
  {
    "n": 12,
    "ref": "Câu 12 [FL-5.4]",
    "stem": "According to CTFL v4.0, what does configuration management (CM) provide in support of testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) It guarantees that all defects are fixed before release"
      },
      {
        "k": "b",
        "t": "B) It ensures that all test items, testware and other work products are uniquely identified, version controlled, tracked for changes, and related to each other and to the versions of the test basis, so that testing is reproducible"
      },
      {
        "k": "c",
        "t": "C) It replaces the need for a defect management process"
      },
      {
        "k": "d",
        "t": "D) It automatically designs regression test cases whenever the code changes"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0: CM hỗ trợ kiểm thử bằng cách bảo đảm mọi CONFIGURATION ITEM — test item (các phần của test object), testware (test plan, test case, script, dữ liệu), báo cáo — được ĐỊNH DANH DUY NHẤT, KIỂM SOÁT PHIÊN BẢN, GHI VẾT THAY ĐỔI và LIÊN KẾT với nhau cũng như với PHIÊN BẢN của test basis; nhờ đó luôn xác định được “bộ test phiên bản nào đã chạy trên test object phiên bản nào” và TÁI LẬP được kết quả ⇒ (b). v4.0 bổ sung: trong DevOps, CM thường được tự động hóa ngay trong pipeline CI/CD. (a) CM không sửa defect; (c) CM và defect management là hai quy trình hỗ trợ khác nhau; (d) CM không sinh test case.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.4 Configuration Management."
  },
  {
    "n": 13,
    "ref": "Câu 13 [FL-6.2]",
    "stem": "Which of the following is a benefit of test automation according to CTFL v4.0?",
    "opts": [
      {
        "k": "a",
        "t": "A) It removes the need for any manual or exploratory testing"
      },
      {
        "k": "b",
        "t": "B) It provides more time in each iteration for testers to design new, deeper tests, gives faster feedback, provides more objective measurement, and increases the consistency and repeatability of test execution"
      },
      {
        "k": "c",
        "t": "C) It guarantees that the automated tests are always maintainable at no cost"
      },
      {
        "k": "d",
        "t": "D) It makes test planning unnecessary, because the tools decide what to test"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Lợi ích của tự động hóa kiểm thử theo v4.0: TIẾT KIỆM THỜI GIAN cho mỗi lần chạy — giải phóng tester để thiết kế các test MỚI, SÂU HƠN (kể cả exploratory); PHẢN HỒI NHANH hơn cho developer (đặc biệt trong CI); tính NHẤT QUÁN và LẶP LẠI ĐƯỢC của việc thực thi; số đo KHÁCH QUAN hơn (độ phủ, thống kê); giảm sai sót thao tác của con người trong công việc lặp lại ⇒ (b). (a) cực đoan sai — tự động hóa BỔ TRỢ chứ không thay thế kiểm thử thủ công/khám phá; (c) sai — bảo trì test tự động là chi phí đáng kể, chính là một RỦI RO nếu xem nhẹ; (d) công cụ không quyết định chiến lược kiểm thử.\n📌 Kiến thức: CTFL v4.0 — Chương 6, mục 6.2 Benefits and Risks of Test Automation."
  },
  {
    "n": 14,
    "ref": "Câu 14 [FL-2.2.2]",
    "stem": "According to CTFL v4.0, non-functional testing evaluates characteristics defined in the ISO/IEC 25010 quality model. Which of the following lists contains ONLY non-functional quality characteristics from that model?",
    "opts": [
      {
        "k": "a",
        "t": "A) Performance efficiency, security, usability, reliability, portability"
      },
      {
        "k": "b",
        "t": "B) Functional correctness, functional completeness, functional appropriateness"
      },
      {
        "k": "c",
        "t": "C) Statement coverage, branch coverage, decision coverage"
      },
      {
        "k": "d",
        "t": "D) Confirmation testing, regression testing, maintenance testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "v4.0 tham chiếu mô hình chất lượng ISO/IEC 25010: ngoài FUNCTIONAL SUITABILITY (thuộc kiểm thử chức năng), các đặc tính PHI CHỨC NĂNG gồm: PERFORMANCE EFFICIENCY (hiệu năng), COMPATIBILITY (tương thích), USABILITY (khả dụng — v4.0 gọi interaction capability), RELIABILITY (tin cậy), SECURITY (bảo mật), MAINTAINABILITY (bảo trì được), PORTABILITY (khả chuyển — flexibility), SAFETY — phương án (a) chỉ gồm các đặc tính phi chức năng ⇒ (a). (b) là ba đặc tính con của FUNCTIONAL suitability — thuộc kiểm thử chức năng; (c) là các tiêu chí độ phủ white-box; (d) là các loại kiểm thử liên quan thay đổi/bảo trì, không phải đặc tính chất lượng.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.2.2 Test Types (non-functional testing & ISO 25010)."
  },
  {
    "n": 15,
    "ref": "Câu 15 [FL-5.3.3]",
    "stem": "According to CTFL v4.0, how should the status of testing be communicated to stakeholders?",
    "opts": [
      {
        "k": "a",
        "t": "A) Always and only as a formal written document, regardless of the project context"
      },
      {
        "k": "b",
        "t": "B) In a way that is tailored to the audience and the project context — for example verbally, via dashboards or electronic communication channels, in Agile settings via task boards and daily stand-ups, or as formal reports where required"
      },
      {
        "k": "c",
        "t": "C) Only at the very end of the project, in the test completion report"
      },
      {
        "k": "d",
        "t": "D) Testers should not communicate test status; only the project manager may do so"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 nhấn mạnh: cách truyền đạt TRẠNG THÁI KIỂM THỬ phải PHÙ HỢP VỚI NGƯỜI NHẬN và BỐI CẢNH dự án — mối quan tâm của ban quản lý khác với của developer hay khách hàng. Hình thức có thể là trao đổi TRỰC TIẾP/verbal, DASHBOARD trực tuyến, kênh liên lạc điện tử, tài liệu chính thức; trong Agile, trạng thái thường hiển thị trên TASK BOARD/burn-down chart và được cập nhật trong DAILY STAND-UP; môi trường có quy định chặt (an toàn, pháp lý) vẫn cần BÁO CÁO VĂN BẢN chính thức ⇒ (b). (a) và (c) cứng nhắc sai; (d) đi ngược vai trò giao tiếp của tester và test management role.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.3.3 Communicating the Status of Testing."
  },
  {
    "n": 16,
    "ref": "Câu 16 [FL-2.2.3]",
    "stem": "A defect found during system testing has been fixed by the development team. According to CTFL v4.0, what does CONFIRMATION testing involve in this situation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Re-running all the test cases of the whole system to prove the system is now defect-free"
      },
      {
        "k": "b",
        "t": "B) Running the test cases that previously failed because of the defect (and possibly tests covering the changes made by the fix), to confirm that the defect has been successfully fixed"
      },
      {
        "k": "c",
        "t": "C) Reviewing the fixed source code without executing it"
      },
      {
        "k": "d",
        "t": "D) Testing the system with completely random inputs to see whether anything else fails"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "CONFIRMATION testing (re-testing) xác nhận một defect ĐÃ ĐƯỢC SỬA THÀNH CÔNG: chạy lại các test trước đó BỊ RỚT vì defect ấy, và có thể bổ sung test mới phủ những thay đổi mà bản sửa tạo ra; nếu thiếu thời gian/ngân sách, tối thiểu phải tái hiện lại đúng các bước từng làm lộ failure và xác nhận failure không còn ⇒ (b). (a) mô tả gần với FULL REGRESSION và mục tiêu “chứng minh hết defect” là bất khả thi (nguyên tắc 1). (c) là kiểm thử tĩnh — không xác nhận được hành vi lúc chạy. (d) là kiểm thử ngẫu nhiên, không nhắm vào defect đã sửa. Sau confirmation thường chạy thêm REGRESSION để bảo đảm bản sửa không gây tác dụng phụ.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.2.3 Confirmation Testing and Regression Testing."
  },
  {
    "n": 17,
    "ref": "Câu 17 [FL-4.2.3]",
    "stem": "A screen contains three independent Boolean conditions (each can only be True or False). If a FULL decision table (before any collapsing) is created for these conditions, how many columns (rules) will it contain?",
    "opts": [
      {
        "k": "a",
        "t": "A) 3"
      },
      {
        "k": "b",
        "t": "B) 6"
      },
      {
        "k": "c",
        "t": "C) 8"
      },
      {
        "k": "d",
        "t": "D) 9"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Bảng quyết định ĐẦY ĐỦ liệt kê MỌI TỔ HỢP giá trị của các điều kiện. Với n điều kiện Boolean, số cột (rule) = 2^n. Ở đây n = 3 → 2³ = 8 cột ⇒ (c). Ghi nhớ nhanh: 2 điều kiện → 4 cột; 3 → 8; 4 → 16 (tăng theo lũy thừa — vì vậy v4.0 giới thiệu kỹ thuật RÚT GỌN bảng: gộp các cột mà một điều kiện không ảnh hưởng kết quả bằng ký hiệu “–” (don't care), gọi là collapsed decision table — như bảng phí sân golf ở Câu 32 phía trên đã dùng “don't care”). (a) là số điều kiện; (b) = 2n; (d) = 3² — các cách tính sai thường gặp.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.2.3 Decision Table Testing."
  },
  {
    "n": 18,
    "ref": "Câu 18 [FL-5.1.2]",
    "stem": "According to CTFL v4.0, testers contribute to both release planning and iteration planning in Agile development. Which of the following is a typical contribution of testers to ITERATION planning?",
    "opts": [
      {
        "k": "a",
        "t": "A) Signing the commercial contract with the customer"
      },
      {
        "k": "b",
        "t": "B) Performing a detailed risk analysis of user stories, estimating the testing effort for the user stories selected, determining the testability of the user stories, and breaking user stories down into tasks (particularly testing tasks)"
      },
      {
        "k": "c",
        "t": "C) Designing the marketing campaign for the release"
      },
      {
        "k": "d",
        "t": "D) Writing the production deployment scripts for the operations team"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 nêu rõ đóng góp của tester ở HAI cấp lập kế hoạch: với RELEASE planning — review và làm rõ user story ở mức khái quát, ước lượng sơ bộ, xác định cách tiếp cận kiểm thử cho release; với ITERATION planning — tham gia PHÂN TÍCH RỦI RO CHI TIẾT của từng user story, ƯỚC LƯỢNG CÔNG SỨC KIỂM THỬ cho các story được chọn, đánh giá TÍNH KIỂM THỬ ĐƯỢC (testability), và TÁCH user story thành các TASK (đặc biệt là task kiểm thử) ⇒ (b). (a), (c), (d) là công việc của kinh doanh, marketing và vận hành — không phải đóng góp kiểm thử trong lập kế hoạch.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.2 Tester's Contribution to Iteration and Release Planning."
  },
  {
    "n": 19,
    "ref": "Câu 19 [FL-5.1.1]",
    "stem": "According to CTFL v4.0, which of the following elements would typically be found in a test plan?",
    "opts": [
      {
        "k": "a",
        "t": "A) The context of testing (scope, objectives, constraints, test basis), assumptions and constraints, stakeholders, communication, the risk register, the test approach, and the budget and schedule"
      },
      {
        "k": "b",
        "t": "B) The complete source code of the system under test"
      },
      {
        "k": "c",
        "t": "C) The individual performance ratings of each tester on the team"
      },
      {
        "k": "d",
        "t": "D) The list of all defects that will be found during test execution"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "v4.0 liệt kê nội dung điển hình của TEST PLAN: BỐI CẢNH kiểm thử (phạm vi, mục tiêu, ràng buộc, test basis); các GIẢ ĐỊNH và RÀNG BUỘC; các BÊN LIÊN QUAN (vai trò, trách nhiệm, nhu cầu tuyển dụng/đào tạo); TRUYỀN THÔNG (hình thức, tần suất, mẫu tài liệu); SỔ RỦI RO (risk register — rủi ro sản phẩm và dự án); CÁCH TIẾP CẬN kiểm thử (test level/type, kỹ thuật, sản phẩm bàn giao, entry/exit criteria, số đo, độc lập kiểm thử…); NGÂN SÁCH và LỊCH TRÌNH ⇒ (a). (b) mã nguồn không thuộc kế hoạch; (c) vi phạm nguyên tắc không dùng tài liệu kiểm thử đánh giá cá nhân; (d) không ai liệt kê trước được defect SẼ tìm thấy — nghịch lý logic.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.1 Purpose and Content of a Test Plan."
  },
  {
    "n": 20,
    "ref": "Câu 20 [FL-6.1]",
    "stem": "CTFL v4.0 groups test tools by the activities they support. Which of the following pairings of tool group and example is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test management tools — a tool that measures branch coverage during test execution"
      },
      {
        "k": "b",
        "t": "B) Static testing tools — a tool that supports reviews and performs static analysis of code"
      },
      {
        "k": "c",
        "t": "C) Test execution tools — a tool used to manage requirements and their traceability"
      },
      {
        "k": "d",
        "t": "D) DevOps tools — a tool used only for drawing state transition diagrams"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 nhóm công cụ theo hoạt động được hỗ trợ: công cụ QUẢN LÝ TESTING & TESTWARE (quản lý test, defect, yêu cầu, truy vết); công cụ KIỂM THỬ TĨNH (hỗ trợ review, PHÂN TÍCH TĨNH mã — đúng như phương án b); công cụ THIẾT KẾ & HIỆN THỰC test (model- based, sinh test data); công cụ THỰC THI TEST & ĐO ĐỘ PHỦ (chạy test tự động, coverage); công cụ KIỂM THỬ PHI CHỨC NĂNG (hiệu năng, bảo mật); công cụ DEVOPS (CI/CD pipeline, build tự động); công cụ CỘNG TÁC; công cụ hỗ trợ khả năng mở rộng/chuẩn hóa (máy ảo, container) ⇒ (b). (a) ghép đo độ phủ vào nhóm quản lý — sai (thuộc nhóm thực thi & coverage); (c) ghép quản lý yêu cầu vào nhóm thực thi — sai; (d) DevOps tools phục vụ pipeline tích hợp/giao hàng liên tục, không phải vẽ sơ đồ.\n📌 Kiến thức: CTFL v4.0 — Chương 6, mục 6.1 Tool Support for Testing."
  },
  {
    "n": 21,
    "ref": "Câu 21 [FL-1.5.3]",
    "stem": "Which of the following is a potential DRAWBACK of test independence?",
    "opts": [
      {
        "k": "a",
        "t": "A) Independent testers are likely to recognize different kinds of failures than developers"
      },
      {
        "k": "b",
        "t": "B) Independent testers can verify, challenge or disprove assumptions made by stakeholders"
      },
      {
        "k": "c",
        "t": "C) Developers may lose their sense of responsibility for the quality of their own work, expecting the independent testers to find all the defects"
      },
      {
        "k": "d",
        "t": "D) Independent testers bring an unbiased view of the test object"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "v4.0 nêu cả lợi ích LẪN hạn chế của tính độc lập. HẠN CHẾ điển hình: tester độc lập có thể bị cô lập khỏi nhóm phát triển (thiếu hợp tác, chậm phản hồi, quan hệ đối đầu); developer có thể ĐÁNH MẤT Ý THỨC TRÁCH NHIỆM về chất lượng vì ỷ lại “đã có tester lo”; tester độc lập có thể bị xem là nút thắt cổ chai hoặc bị đổ lỗi khi phát hành trễ ⇒ (c). Ba phương án còn lại đều là LỢI ÍCH của độc lập: nhận diện các loại failure khác nhau nhờ khác thiên kiến (a), xác minh – thách thức – bác bỏ giả định của các bên (b), góc nhìn không thiên vị (d).\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.5.3 Independence of Testing."
  },
  {
    "n": 22,
    "ref": "Câu 22 [FL-1.4.3]",
    "stem": "According to CTFL v4.0, testware is created as output work products from the test activities. Which of the following correctly matches a test activity with one of its typical work products?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test planning → test log"
      },
      {
        "k": "b",
        "t": "B) Test implementation → test procedures, automated test scripts and test suites"
      },
      {
        "k": "c",
        "t": "C) Test execution → test plan"
      },
      {
        "k": "d",
        "t": "D) Test completion → prioritized test conditions"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 liệt kê testware theo TỪNG hoạt động: test PLANNING tạo ra test plan, lịch trình, risk register, entry/exit criteria; test MONITORING AND CONTROL tạo ra test progress report, tài liệu chỉ đạo kiểm soát; test ANALYSIS tạo ra các test condition được ưu tiên hóa (và kết quả đánh giá defect của test basis); test DESIGN tạo ra test case, test charter, yêu cầu về test data và môi trường; test IMPLEMENTATION tạo ra TEST PROCEDURE, KỊCH BẢN TỰ ĐỘNG, TEST SUITE, test data, phần tử môi trường; test EXECUTION tạo ra test log, defect report; test COMPLETION tạo ra test completion report, các bài học và mục cải tiến ⇒ (b) đúng. (a), (c), (d) đều ghép sai hoạt động với sản phẩm.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.4.3 Testware."
  },
  {
    "n": 23,
    "ref": "Câu 23 [FL-2.1.1]",
    "stem": "Which of the following statements about the impact of the chosen software development lifecycle on testing is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) In sequential development models, dynamic testing of the integrated system can begin during the requirements phase"
      },
      {
        "k": "b",
        "t": "B) In iterative and incremental models, each new increment should be accompanied by regression testing of the growing system, because every change may affect the parts delivered earlier"
      },
      {
        "k": "c",
        "t": "C) The choice of the software development lifecycle has no influence on the scope and timing of test activities"
      },
      {
        "k": "d",
        "t": "D) In Agile development, test documentation must be eliminated completely to keep up with the pace of the iterations"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Mô hình vòng đời ảnh hưởng trực tiếp đến phạm vi, thời điểm và cách tổ chức kiểm thử. Trong phát triển LẶP/TĂNG TRƯỞNG, hệ thống lớn dần qua từng increment; mỗi thay đổi có thể phá vỡ những phần đã bàn giao trước, nên REGRESSION testing ngày càng quan trọng và cần đi kèm mỗi vòng lặp (thường phải tự động hóa) ⇒ (b). (a) sai: trong mô hình tuần tự, kiểm thử ĐỘNG của hệ thống tích hợp chỉ chạy được ở giai đoạn sau khi có phần mềm — giai đoạn yêu cầu chỉ có kiểm thử tĩnh (review) và chuẩn bị. (c) phủ nhận toàn bộ luận điểm của mục 2.1.1. (d) cực đoan sai: Agile tinh gọn tài liệu chứ không xóa bỏ tài liệu kiểm thử.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.1 Impact of the SDLC on Testing."
  },
  {
    "n": 24,
    "ref": "Câu 23 [FL-4.2.4]",
    "stem": "In state transition testing according to CTFL v4.0, which of the following statements about coverage criteria is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Achieving 100% all-states coverage guarantees that all valid transitions have been exercised"
      },
      {
        "k": "b",
        "t": "B) Achieving 100% valid transitions coverage (0-switch coverage) guarantees 100% all-states coverage"
      },
      {
        "k": "c",
        "t": "C) All-states coverage and valid transitions coverage are always achieved by the same number of test cases"
      },
      {
        "k": "d",
        "t": "D) Valid transitions coverage requires every INVALID transition to be exercised at least once"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 định nghĩa các mức phủ cho state transition testing: ALL-STATES coverage — mỗi TRẠNG THÁI được ghé ít nhất một lần (mức yếu); VALID TRANSITIONS coverage (còn gọi 0-SWITCH coverage) — mỗi CHUYỂN TRẠNG THÁI HỢP LỆ được thực thi ít nhất một lần; ALL TRANSITIONS coverage — phủ cả các chuyển KHÔNG hợp lệ được thể hiện trong bảng trạng thái. Vì mọi trạng thái (có thể đạt tới) đều là đầu mút của các chuyển hợp lệ, phủ hết chuyển hợp lệ đương nhiên ghé hết trạng thái: 100% valid transitions ⇒ 100% all-states; chiều ngược lại KHÔNG đúng ⇒ (b). (c) sai — số test thường khác nhau; (d) sai — chuyển không hợp lệ thuộc mức all TRANSITIONS coverage.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.2.4 State Transition Testing."
  },
  {
    "n": 25,
    "ref": "Câu 25 [FL-4.2.1]",
    "stem": "When applying equivalence partitioning to a function with several input parameters, why does CTFL v4.0 recommend that invalid values be tested individually (i.e., not combined with other invalid values in the same test case)?",
    "opts": [
      {
        "k": "a",
        "t": "A) Because invalid values always cause the system to crash, so they must be tested last"
      },
      {
        "k": "b",
        "t": "B) Because combining several invalid values in one test case may cause failures to mask each other, making it impossible to tell which invalid input triggered which behavior"
      },
      {
        "k": "c",
        "t": "C) Because test management tools cannot record test cases that contain more than one invalid value"
      },
      {
        "k": "d",
        "t": "D) Because invalid partitions do not need to be tested if the valid partitions all pass"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Nguyên do là hiện tượng CHE LẤP LỖI (fault/failure masking): nếu một test case chứa NHIỀU giá trị không hợp lệ cùng lúc, hệ thống có thể chỉ phản ứng với giá trị sai đầu tiên (ví dụ chỉ hiện một thông báo lỗi), khiến các giá trị sai còn lại không được kiểm thực sự và khi có failure cũng không xác định được do đầu vào nào gây ra. Vì vậy mỗi test chỉ nên chứa MỘT giá trị không hợp lệ, các tham số còn lại giữ giá trị hợp lệ ⇒ (b). (a) bịa đặt; (c) không liên quan công cụ; (d) sai — phân vùng không hợp lệ bắt buộc phải được kiểm để xác nhận xử lý lỗi đúng.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 26,
    "ref": "Câu 26 [FL-1.4.5]",
    "stem": "The CTFL v4.0 syllabus defines two principal roles in testing. Which of the following pairs are they?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test management role and the testing role"
      },
      {
        "k": "b",
        "t": "B) The test architect role and the test executor role"
      },
      {
        "k": "c",
        "t": "C) The moderator role and the scribe role"
      },
      {
        "k": "d",
        "t": "D) The manual tester role and the automation engineer role"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "v4.0 đơn giản hóa còn HAI vai trò chính: TEST MANAGEMENT ROLE — chịu trách nhiệm tổng thể về quy trình kiểm thử, đội kiểm thử và lãnh đạo các hoạt động kiểm thử (lập kế hoạch, giám sát – kiểm soát, hoàn tất); và TESTING ROLE — chịu trách nhiệm khía cạnh kỹ thuật/kỹ nghệ của kiểm thử (phân tích, thiết kế, hiện thực, thực thi). Syllabus lưu ý: một người có thể đảm nhận cả hai vai trò cùng lúc, và vai trò quản lý có thể do team lead, test manager, development manager… nắm giữ tùy bối cảnh ⇒ (a). (c) moderator/scribe là vai trò TRONG REVIEW, không phải vai trò kiểm thử tổng quát; (b) và (d) không phải cách phân vai của syllabus.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.4.5 Roles in Testing."
  },
  {
    "n": 27,
    "ref": "Câu 27 [FL-5.2.4]",
    "stem": "Which of the following is an example of risk MITIGATION through testing, as part of product risk control?",
    "opts": [
      {
        "k": "a",
        "t": "A) Buying insurance so that the financial consequences of a product failure are transferred to the insurer"
      },
      {
        "k": "b",
        "t": "B) Increasing the intensity and priority of testing for the product areas with the highest risk levels, and selecting testers with the right level of experience for those areas"
      },
      {
        "k": "c",
        "t": "C) Formally accepting the risk and preparing a contingency plan in case the failure occurs in production"
      },
      {
        "k": "d",
        "t": "D) Removing the risky feature from the product scope so that it will not be delivered at all"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Product risk control gồm các cách ĐÁP ỨNG rủi ro: giảm thiểu (mitigation), chấp nhận (acceptance — có thể kèm kế hoạch dự phòng), chuyển giao (transfer, ví dụ mua bảo hiểm), né tránh (avoidance — bỏ tính năng). GIẢM THIỂU BẰNG KIỂM THỬ nghĩa là dùng chính hoạt động kiểm thử để hạ mức rủi ro: tăng cường độ và độ ưu tiên kiểm thử ở vùng rủi ro cao, chọn tester đủ kinh nghiệm, áp mức độc lập phù hợp, thực hiện review/static analysis, áp dụng kỹ thuật và mức độ phủ thích hợp, chạy regression ⇒ (b). (a) là chuyển giao rủi ro; (c) là chấp nhận rủi ro; (d) là né tránh rủi ro — cả ba đều không phải “mitigation THÔNG QUA kiểm thử”.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.2.4 Product Risk Control."
  },
  {
    "n": 28,
    "ref": "Câu 28 [FL-3.2.1]",
    "stem": "Which of the following BEST describes a benefit of early and frequent stakeholder feedback in software development?",
    "opts": [
      {
        "k": "a",
        "t": "A) It eliminates the need for acceptance testing at the end of the project"
      },
      {
        "k": "b",
        "t": "B) Changes in stakeholder needs are understood sooner, so the team can avoid misunderstandings and building the wrong product, and can implement changes at a lower cost"
      },
      {
        "k": "c",
        "t": "C) It guarantees that no defects will be introduced during implementation"
      },
      {
        "k": "d",
        "t": "D) It allows the team to skip writing acceptance criteria, because the stakeholders are always available"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 dành riêng một mục cho lợi ích của phản hồi SỚM và THƯỜNG XUYÊN từ các bên liên quan: giúp truyền đạt sớm các thay đổi trong mong muốn của stakeholder, phòng tránh hiểu lầm về yêu cầu, bảo đảm nhóm đang xây ĐÚNG sản phẩm mà các bên cần; sửa đổi khi phát hiện sớm luôn rẻ hơn nhiều so với khi sản phẩm đã hoàn thiện; đồng thời cải thiện sự tập trung vào các tính năng có giá trị nhất ⇒ (b). (a), (c), (d) đều là phóng đại sai: phản hồi sớm không xóa bỏ acceptance testing, không bảo đảm hết defect, càng không thay thế được acceptance criteria.\n📌 Kiến thức: CTFL v4.0 — Chương 3, mục 3.2.1 Benefits of Early and Frequent Stakeholder Feedback."
  },
  {
    "n": 29,
    "ref": "Câu 29 [FL-4.5.3]",
    "stem": "Which of the following statements about acceptance test-driven development (ATDD) is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) In ATDD, test cases are created from the acceptance criteria of a user story during a collaborative session, before the corresponding implementation begins, and are often automated so that they drive the development"
      },
      {
        "k": "b",
        "t": "B) In ATDD, the product owner writes all the test cases alone after the release, to check whether the delivered software matches the contract"
      },
      {
        "k": "c",
        "t": "C) ATDD requires the acceptance tests to be derived from UML state diagrams supplied by the architects"
      },
      {
        "k": "d",
        "t": "D) ATDD is a white-box technique in which the tests are derived from the control flow of the source code"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "ATDD là cách tiếp cận TEST-FIRST dựa trên cộng tác: ngay từ khi tạo user story (hoặc trong phiên đặc tả chung — specification workshop), các thành viên với góc nhìn khác nhau (khách hàng/PO, developer, tester) cùng suy dẫn test case từ ACCEPTANCE CRITERIA; các test này được viết TRƯỚC khi hiện thực, thường được tự động hóa và trở thành “đặc tả thực thi được” dẫn dắt việc lập trình ⇒ (a). (b) sai cả về thời điểm (sau release) lẫn cách làm (PO làm một mình — mất tính cộng tác). (c) không có yêu cầu nào về UML. (d) sai hoàn toàn: ATDD là kỹ thuật black-box dựa trên acceptance criteria, không dựa trên luồng điều khiển mã nguồn.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.5.3 Acceptance Test-Driven Development (& Chương 2, mục 2.1.3)."
  },
  {
    "n": 30,
    "ref": "Câu 30 [FL-4.3.3]",
    "stem": "Which of the following BEST describes the distinctive value of white-box testing compared to black-box testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) White-box testing proves that the software contains no defects, because all of the code has been executed"
      },
      {
        "k": "b",
        "t": "B) White-box testing makes specifications unnecessary, because the code itself is used as the test basis"
      },
      {
        "k": "c",
        "t": "C) During black-box testing, parts of the implemented code may never be exercised because the specification does not describe them; white-box coverage measures help detect and test such untested code"
      },
      {
        "k": "d",
        "t": "D) White-box testing can only be applied at the component test level, which makes it cheaper than black-box testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Giá trị đặc thù của white-box theo v4.0: kiểm thử black-box chỉ suy dẫn test từ ĐẶC TẢ, nên những phần mã đã được hiện thực nhưng KHÔNG được đặc tả mô tả (nhánh xử lý ngầm, code thừa, hành vi bổ sung) có thể không bao giờ được thực thi; các số đo độ phủ white-box (statement, branch) phát hiện những vùng mã chưa được test đó để bổ sung test — white-box “đo được sự thiếu hụt” mà black-box không nhìn thấy ⇒ (c). (a) vi phạm nguyên tắc 1 — kiểm thử không chứng minh được sự vắng mặt của defect (chạy hết code vẫn có thể sai so với nhu cầu). (b) sai: vẫn cần đặc tả để biết KẾT QUẢ MONG ĐỢI. (d) sai: white-box áp dụng được ở mọi test level.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.3.3 The Value of White-box Testing."
  },
  {
    "n": 31,
    "ref": "Câu 31 [FL-4.5.2]",
    "stem": "Which of the following is a commonly used format for writing acceptance criteria for a user story?",
    "opts": [
      {
        "k": "a",
        "t": "A) The scenario-oriented format, e.g., the Given/When/Then structure used in BDD"
      },
      {
        "k": "b",
        "t": "B) Pseudo-code that outlines the implementation of the user story"
      },
      {
        "k": "c",
        "t": "C) UML sequence diagrams that must be signed off by the product owner"
      },
      {
        "k": "d",
        "t": "D) A list of the source-code modules that will have to be changed"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Hai định dạng phổ biến để viết acceptance criteria theo syllabus: (1) HƯỚNG KỊCH BẢN (scenario-oriented) — điển hình là cấu trúc Given/When/Then của BDD; (2) HƯỚNG QUY TẮC (rule-oriented) — danh sách gạch đầu dòng các điều kiện phải thỏa hoặc bảng ánh xạ đầu vào–đầu ra ⇒ (a). Acceptance criteria là thuộc tính của user story (chữ C thứ ba — Confirmation), gắn với NHU CẦU và hành vi quan sát được, không phải chi tiết hiện thực: (b) pseudo-code và (d) danh sách module phải sửa là góc nhìn cài đặt; (c) sequence diagram là tài liệu thiết kế, không phải định dạng chuẩn của acceptance criteria.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.5.2 Acceptance Criteria (& 4.5.3 ATDD)."
  },
  {
    "n": 32,
    "ref": "Câu 32 [FL-5.1.6]",
    "stem": "Which of the following statements about the test pyramid is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) The top layer of the pyramid contains a large number of small, isolated tests that execute very quickly"
      },
      {
        "k": "b",
        "t": "B) The bottom layer contains many small, isolated, fast unit tests, while the layers closer to the top contain fewer, slower tests that check larger pieces of functionality"
      },
      {
        "k": "c",
        "t": "C) The test pyramid suggests that most of the test effort should be spent on end-to-end tests executed through the user interface"
      },
      {
        "k": "d",
        "t": "D) The test pyramid implies that manual testing should be completely eliminated from the project"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Test pyramid mô hình hóa nguyên tắc phân bổ test tự động theo TẦNG: tầng đáy (unit/component) gồm RẤT NHIỀU test nhỏ, cô lập, chạy nhanh; càng lên cao (integration → system/E2E/UI) số lượng test càng ÍT, phạm vi càng rộng, chạy càng chậm và kém cô lập hơn ⇒ (b). (a) đảo ngược mô hình. (c) ngược khuyến nghị — dồn nỗ lực vào E2E/UI tạo “ice-cream cone” phản mẫu: chậm, mong manh, khó bảo trì. (d) sai: pyramid nói về cơ cấu TEST TỰ ĐỘNG, không phủ định vai trò của kiểm thử thủ công như exploratory testing.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.6 Test Pyramid."
  },
  {
    "n": 33,
    "ref": "Câu 33 [FL-5.1.7]",
    "stem": "According to the testing quadrants, which quadrant contains usability testing, exploratory testing and user acceptance testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Quadrant Q1 (technology facing, supporting the team)"
      },
      {
        "k": "b",
        "t": "B) Quadrant Q2 (business facing, supporting the team)"
      },
      {
        "k": "c",
        "t": "C) Quadrant Q3 (business facing, critiquing the product)"
      },
      {
        "k": "d",
        "t": "D) Quadrant Q4 (technology facing, critiquing the product)"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Testing quadrants (Brian Marick) phân loại test theo hai trục: hướng nghiệp vụ/hướng công nghệ và hỗ trợ nhóm/phê bình sản phẩm. Q3 = business facing + critique the product: các test hướng người dùng thật, thường thủ công — user acceptance testing, usability testing, exploratory testing ⇒ (c). Đối chiếu: Q1 = component/integration test (tự động, hỗ trợ nhóm); Q2 = functional test, ví dụ và kiểm thử API, prototype (kiểm chứng acceptance criteria, thường vừa thủ công vừa tự động); Q4 = smoke test và các test phi chức năng ngoài usability như performance, security (thường tự động, dùng công cụ).\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.7 Testing Quadrants."
  },
  {
    "n": 34,
    "ref": "Câu 34 [FL-5.1.4]",
    "stem": "A tester uses three-point estimation to estimate a testing task. The most optimistic estimate is 2 person-days, the most likely estimate is 5 person-days, and the most pessimistic estimate is 14 person-days. Using the standard formula, what is the final estimate for the task?",
    "opts": [
      {
        "k": "a",
        "t": "A) 5 person-days"
      },
      {
        "k": "b",
        "t": "B) 6 person-days"
      },
      {
        "k": "c",
        "t": "C) 7 person-days"
      },
      {
        "k": "d",
        "t": "D) 8 person-days"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Three-point estimation dùng công thức trung bình có trọng số (phân phối beta/PERT): E = (a + 4m + b) / 6, với a = ước lượng lạc quan nhất, m = khả dĩ nhất, b = bi quan nhất. Thay số: E = (2 + 4×5 + 14) / 6 = (2 + 20 + 14) / 6 = 36 / 6 = 6 person-days ⇒ (b). Có thể tính thêm sai số đo bằng SD = (b − a) / 6 = (14 − 2) / 6 = 2, nghĩa là ước lượng cuối là 6 ± 2 person-days. Ba kỹ thuật ước lượng khác mà v4.0 nêu: dựa trên tỷ số (ratios), ngoại suy (extrapolation) và Wideband Delphi (bao gồm biến thể planning poker).\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.4 Estimation Techniques (three-point estimation)."
  },
  {
    "n": 35,
    "ref": "Câu 35 [FL-2.1.6]",
    "stem": "Which of the following is a typical benefit of retrospectives for testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) They remove the need for test planning in the next iteration, since the team already knows what to do"
      },
      {
        "k": "b",
        "t": "B) Lessons learned lead to the continuous improvement of test effectiveness and efficiency, increased quality of testware and closer team bonding"
      },
      {
        "k": "c",
        "t": "C) They replace defect management, because defects can be discussed verbally at the end of each iteration"
      },
      {
        "k": "d",
        "t": "D) They allow the team to skip the agreed exit criteria whenever all members agree to do so"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Retrospective (họp nhìn lại cuối iteration/release) hỏi ba câu: điều gì thành công nên giữ? điều gì chưa ổn có thể cải thiện? cách cải thiện và giữ thành công như thế nào? Lợi ích điển hình cho kiểm thử theo syllabus: tăng hiệu lực/hiệu suất kiểm thử (ví dụ cải tiến quy trình từ bài học rút ra), tăng chất lượng testware (qua việc cùng rà soát quy trình test), gắn kết nhóm và học hỏi, cải thiện chất lượng test basis, hợp tác dev–test tốt hơn ⇒ (b). (a), (c), (d) đều sai: retrospective KHÔNG thay thế lập kế hoạch, không thay thế quản lý defect và không phải cơ chế để bỏ qua exit criteria.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.6 Retrospectives and Process Improvement."
  },
  {
    "n": 36,
    "ref": "Câu 36 [FL-5.1.4]",
    "stem": "During PLANNING POKER for a testing task, most team members show 5 story points, but one experienced tester shows 13. According to the estimation practice described in CTFL v4.0, what should the team do next?",
    "opts": [
      {
        "k": "a",
        "t": "A) Ignore the outlier and record 5, since the majority is always right"
      },
      {
        "k": "b",
        "t": "B) Record the average of all cards immediately, without any discussion"
      },
      {
        "k": "c",
        "t": "C) Ask the outliers (highest and lowest) to explain their reasoning — the tester may know a hidden complexity — then discuss and re-estimate in further rounds until the team converges on a consensus"
      },
      {
        "k": "d",
        "t": "D) Let the project manager override the team and set the estimate to 3 to meet the deadline"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Giá trị thật của planning poker (một dạng Wideband Delphi) nằm ở BƯỚC THẢO LUẬN sau khi lật bài: khi ước lượng phân kỳ, những người ở HAI CỰC trình bày lý lẽ — con số 13 của tester giàu kinh nghiệm có thể phản ánh một PHỨC TẠP ẨN (dữ liệu khó dựng, môi trường đặc thù, rủi ro regression) mà số đông chưa thấy; nhóm trao đổi, rồi ƯỚC LƯỢNG LẠI qua các vòng đến khi HỘI TỤ ĐỒNG THUẬN ⇒ (c). Cơ chế “giấu bài rồi lật cùng lúc” tồn tại chính là để tri thức thiểu số không bị số đông đè trước khi kịp nói. (a) vứt bỏ đúng thông tin quý nhất; (b) trung bình máy móc né tránh việc HỌC từ chênh lệch; (d) áp đặt từ bên ngoài phá hỏng cả tính chính xác lẫn cam kết của nhóm với con số.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.4 Estimation Techniques (Wideband Delphi & planning poker)."
  },
  {
    "n": 37,
    "ref": "Câu 37 [FL-4.1]",
    "stem": "A tester applies equivalence partitioning to the \"membership level\" input, identifying FOUR partitions: Bronze, Silver, Gold, and invalid value. The test suite executed so far contains test cases exercising Bronze, Silver and one invalid value. According to the coverage concept in CTFL v4.0, what is the current equivalence partition coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 100%, because at least one test was executed"
      },
      {
        "k": "b",
        "t": "B) 75%, because 3 of the 4 identified partitions (coverage items) have been exercised"
      },
      {
        "k": "c",
        "t": "C) 50%, because only valid partitions count towards coverage"
      },
      {
        "k": "d",
        "t": "D) Coverage cannot be calculated for black-box techniques"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 chuẩn hóa: mỗi kỹ thuật xác định các COVERAGE ITEM của nó, và ĐỘ PHỦ = số coverage item ĐÃ ĐƯỢC THỰC THI ÷ TỔNG số coverage item × 100%. Với EP, coverage item = các PHÂN VÙNG đã nhận diện (cả hợp lệ lẫn không hợp lệ). Ở đây 4 phân vùng, đã thực thi 3 (Bronze, Silver, một giá trị không hợp lệ; Gold chưa) → 3/4 = 75% ⇒ (b). Con số này lập tức chỉ ra test còn thiếu: một test cho phân vùng Gold sẽ đưa độ phủ lên 100%. (a) nhầm “có chạy test” với “phủ đủ”; (c) sai — phân vùng KHÔNG hợp lệ cũng là coverage item; (d) sai — black-box hoàn toàn đo được độ phủ theo item của test basis, chỉ khác white-box ở LOẠI item.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.1 & 4.2.1 (coverage items của equivalence partitioning)."
  },
  {
    "n": 38,
    "ref": "Câu 38 [FL-1.2.2]",
    "stem": "Classify the following four activities as quality assurance (QA) or quality control (QC), according to CTFL v4.0: (1) defining and auditing the organization's development process; (2) executing system tests on a release candidate; (3) analyzing process metrics to prevent future defects; (4) reviewing a design document to detect defects in it.",
    "opts": [
      {
        "k": "a",
        "t": "A) QA: 1 and 3; QC: 2 and 4"
      },
      {
        "k": "b",
        "t": "B) QA: 2 and 4; QC: 1 and 3"
      },
      {
        "k": "c",
        "t": "C) All four are QA, because they all improve quality"
      },
      {
        "k": "d",
        "t": "D) All four are QC, because they all involve checking something"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Tiêu chí phân loại của v4.0: QA hướng QUY TRÌNH — thiết lập, tuân thủ và cải tiến quy trình tốt để PHÒNG NGỪA defect; QC hướng SẢN PHẨM — các hoạt động (tĩnh lẫn động) PHÁT HIỆN defect và đo mức chất lượng đạt được. Áp vào: (1) định nghĩa và audit QUY TRÌNH phát triển → QA; (3) phân tích số đo quy trình để phòng ngừa defect tương lai → QA; (2) THỰC THI system test trên bản release candidate → QC (kiểm thử động — một hình thức QC); (4) REVIEW tài liệu thiết kế để tìm defect → QC (kiểm thử tĩnh vẫn là soi SẢN PHẨM). Vậy QA: 1, 3; QC: 2, 4 ⇒ (a). Điểm hay bị nhầm: review là “tĩnh” nhưng vẫn thuộc QC vì đối tượng là work product, không phải quy trình.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.2.2 Testing and Quality Assurance."
  },
  {
    "n": 39,
    "ref": "Câu 39 [FL-6.1]",
    "stem": "A test team uses Docker containers and virtual machines to spin up identical, disposable test environments on demand for every test run in the pipeline. According to the tool classification in CTFL v4.0, which group do these tools belong to, and what problem do they primarily solve?",
    "opts": [
      {
        "k": "a",
        "t": "A) Static testing tools — they analyze code without executing it"
      },
      {
        "k": "b",
        "t": "B) Test design tools — they generate test cases from requirements"
      },
      {
        "k": "c",
        "t": "C) Tools that support scalability and deployment standardization — they ensure consistent, reproducible test environments and allow testing to scale out"
      },
      {
        "k": "d",
        "t": "D) Defect management tools — they track the lifecycle of anomalies"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "v4.0 (mục 6.1) nhóm công cụ theo hoạt động được hỗ trợ, trong đó có nhóm công cụ phục vụ KHẢ NĂNG MỞ RỘNG VÀ CHUẨN HÓA TRIỂN KHAI — điển hình là MÁY ẢO và CONTAINER (Docker): chúng đóng gói môi trường thành đơn vị ĐỒNG NHẤT, TÁI LẬP ĐƯỢC, dựng và hủy theo nhu cầu — giải quyết tận gốc căn bệnh “works on my machine” (kết quả test khác nhau vì môi trường trôi dạt) và cho phép chạy song song nhiều môi trường giống hệt trong pipeline ⇒ (c). Nhờ môi trường nhất quán, kết quả kiểm thử mới TÁI LẬP được — một yêu cầu nền tảng. (a), (b), (d) mô tả các nhóm công cụ khác không khớp kịch bản.\n📌 Kiến thức: CTFL v4.0 — Chương 6, mục 6.1 Tool Support for Testing (scalability & standardization)."
  },
  {
    "n": 40,
    "ref": "Câu 40 [FL-1.5.3]",
    "stem": "In a small product company, developers test only their own code; there are no other checks before release, and escaped defects are increasing. The company cannot hire anyone new this quarter. Which action would MOST increase the degree of independence of testing within the existing constraints?",
    "opts": [
      {
        "k": "a",
        "t": "A) Ask each developer to re-run their own tests twice before release"
      },
      {
        "k": "b",
        "t": "B) Introduce cross-testing within the team: each feature is tested by a DIFFERENT developer from the one who wrote it, and code/test reviews are performed by peers"
      },
      {
        "k": "c",
        "t": "C) Wait until next year and outsource all testing to an external company, doing nothing in the meantime"
      },
      {
        "k": "d",
        "t": "D) Stop testing altogether, since developer testing has proven insufficient"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Thang ĐỘ ĐỘC LẬP của v4.0 đi từ thấp đến cao: (0) tác giả tự test — mức hiện tại của công ty; (1) NGƯỜI KHÁC TRONG CÙNG NHÓM test — chính là cross-testing ở phương án (b); (2) đội test độc lập trong tổ chức; (3) tester ngoài tổ chức. Với ràng buộc không tuyển mới, bước nhảy khả thi ngay là mức (1): đồng nghiệp KHÁC tác giả kiểm thử tính năng và peer review chéo — đưa vào một cặp mắt không mang thiên kiến của tác giả với chi phí gần bằng không ⇒ (b). (a) tác giả tự chạy lại bao nhiêu lần vẫn là mức 0 — thiên kiến không đổi; (c) trì hoãn cả năm trong khi defect đang lọt là bỏ mặc vấn đề; (d) cực đoan vô lý — bỏ kiểm thử làm mọi thứ tồi tệ hơn.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.5.3 Independence of Testing (các mức độc lập)."
  }
];

  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    var itemTitle = "Câu " + q.n + " (" + q.ref + "):\n" + q.stem;
    var item = q.multi ? form.addCheckboxItem() : form.addMultipleChoiceItem();
    item.setTitle(itemTitle);
    item.setPoints(1);
    item.setRequired(false);

    var choices = [];
    for (var j = 0; j < q.opts.length; j++) {
      var opt = q.opts[j];
      var isCorrect = q.ans.indexOf(opt.k) !== -1;
      choices.push(item.createChoice(opt.t, isCorrect));
    }
    item.setChoices(choices);

    if (q.exp) {
      var feedback = FormApp.createFeedback()
        .setText("ĐÁP ÁN ĐÚNG: " + q.ans.join(", ").toUpperCase() + "\n\n" + q.exp)
        .build();
      item.setFeedbackForCorrect(feedback);
      item.setFeedbackForIncorrect(feedback);
    }
  }

  Logger.log("==========================================");
  Logger.log("✅ ĐÃ TẠO GOOGLE FORM THÀNH CÔNG: " + formTitle);
  Logger.log("👉 Link làm bài (Published URL): " + form.getPublishedUrl());
  Logger.log("👉 Link chỉnh sửa (Edit URL): " + form.getEditUrl());
  Logger.log("==========================================");
}
