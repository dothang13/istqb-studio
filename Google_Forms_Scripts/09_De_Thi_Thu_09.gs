/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 09 (Giải chi tiết TV) (24 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 09 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (24 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-4.4.2]",
    "stem": "Which of the following is, BY DEFINITION, a reactive test approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) Risk-based testing"
      },
      {
        "k": "b",
        "t": "B) Automation of regression tests"
      },
      {
        "k": "c",
        "t": "C) Exploratory testing"
      },
      {
        "k": "d",
        "t": "D) Requirements-based testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Các chiến lược/cách tiếp cận kiểm thử chia theo THỜI ĐIỂM thiết kế test: cách tiếp cận PHÒNG NGỪA/PHÂN TÍCH TRƯỚC (preventative/analytical) thiết kế test SỚM từ test basis — risk-based (a) và requirements-based (d) thuộc nhóm này; còn cách tiếp cận PHẢN ỨNG (reactive) chỉ thiết kế test KHI ĐANG thực thi, phản ứng theo hành vi thực tế của hệ thống và kết quả các test trước — EXPLORATORY TESTING là đại diện điển hình: học – thiết kế – thực thi – đánh giá diễn ra ĐỒNG THỜI ⇒ (c). (b) tự động hóa regression là hướng “regression-averse”, dựa trên test đã có sẵn — không phải reactive. (Đáp án in trong bộ đề gốc là (d) — sai: requirements-based là hướng phân tích trước, đối cực với reactive.)\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.4.2 Exploratory Testing (đối chiếu 2018: test strategies — reactive)."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-4.4.1]",
    "stem": "Consider a document containing a classification of all the defects found during the system test phase and after delivery into the production environment. This document can be considered a TEST BASIS for which of the following categories of test techniques?",
    "opts": [
      {
        "k": "a",
        "t": "A) Structure-based (white-box) testing"
      },
      {
        "k": "b",
        "t": "B) Experience-based testing"
      },
      {
        "k": "c",
        "t": "C) Decision coverage testing"
      },
      {
        "k": "d",
        "t": "D) Specification-based (black-box) testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Mỗi nhóm kỹ thuật có nguồn suy dẫn test riêng: black-box dùng ĐẶC TẢ (yêu cầu, use case); white-box dùng CẤU TRÚC (kiến trúc, mã); còn EXPERIENCE-BASED dùng TRI THỨC VÀ KINH NGHIỆM — trong đó DỮ LIỆU DEFECT/FAILURE trong quá khứ là đầu vào quý giá nhất: bảng phân loại defect từ system test và production chính là nguyên liệu cho ERROR GUESSING (đoán lỗi từ các kiểu sai đã từng xảy ra), cho các FAULT ATTACK có hệ thống và cho checklist kiểm thử ⇒ (b). (c) decision coverage chỉ là một TIÊU CHÍ ĐỘ PHỦ white-box, không phải nhóm kỹ thuật nhận tài liệu này làm cơ sở. (Đáp án in trong bộ đề gốc là (d) — sai: tài liệu defect không phải đặc tả hành vi.)\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.4.1 Error Guessing (test basis của experience-based)."
  },
  {
    "n": 3,
    "ref": "Câu 3 [FL-4.4.2]",
    "stem": "As the last stage of a test cycle for an embedded device, you are performing EXPLORATORY testing. You observe that some characters (A, X and Z) sent via the serial port do not get registered on the device, although they should be. You suspect this could be due to a wrong configuration of the \"bit parity\" parameter. Which of the following items of an incident report would you be UNABLE to fill in, based on the information above?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test setup details"
      },
      {
        "k": "b",
        "t": "B) Actual result"
      },
      {
        "k": "c",
        "t": "C) Expected result"
      },
      {
        "k": "d",
        "t": "D) Test case identifier"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Đặc trưng của exploratory testing: test KHÔNG được đặc tả trước — thiết kế và thực thi diễn ra đồng thời — nên KHÔNG TỒN TẠI mã định danh test case (test case identifier) để điền vào báo cáo ⇒ (d). Các mục còn lại đều viết được từ thông tin đã có: (a) chi tiết thiết lập — thiết bị nhúng, gửi ký tự qua cổng serial, nghi ngờ cấu hình bit parity; (b) KẾT QUẢ THỰC TẾ — các ký tự A, X, Z không được ghi nhận trên thiết bị; (c) KẾT QUẢ MONG ĐỢI — các ký tự gửi đi phải được ghi nhận. Bài này cho thấy exploratory vẫn tạo được defect report đầy đủ giá trị (thậm chí kèm giả thuyết nguyên nhân), chỉ khác là truy vết theo phiên/charter thay vì theo test case ID. (Đáp án in trong bộ đề gốc là (b) — sai hiển nhiên: actual result là điều vừa quan sát được.)\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.4.2 & Chương 5, mục 5.5 Defect Management."
  },
  {
    "n": 4,
    "ref": "Câu 4 [FL-5.5]",
    "stem": "A tester thinks of a LIKELY CAUSE for a specific bug they have just found. Should the tester make a comment about this hypothesis in the bug report?",
    "opts": [
      {
        "k": "a",
        "t": "A) No — such an addition may bias the developers' attitude when they attempt to fix the bug"
      },
      {
        "k": "b",
        "t": "B) No — a bug report must contain only factual information, never any unsupported hypothesis"
      },
      {
        "k": "c",
        "t": "C) Yes — observations and hints that may help correct the bug should be included in the bug report"
      },
      {
        "k": "d",
        "t": "D) Yes — because it will guarantee that the bug fix will not cause any regression"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Defect report tồn tại để GIÚP CHẨN ĐOÁN VÀ SỬA nhanh nhất: mọi quan sát, manh mối, giả thuyết CÓ CƠ SỞ về nguyên nhân (như ở bài trước: “nghi cấu hình bit parity”) đều nên đưa vào — ghi rõ là NHẬN ĐỊNH/GIẢ THUYẾT, tách bạch với phần sự kiện — vì nó có thể tiết kiệm cho developer hàng giờ khoanh vùng ⇒ (c). Ranh giới cần giữ: khác với việc CHỈ ĐỊNH CÁCH SỬA (không phải mục tiêu của bug report — xem Câu 30 – Đề 6), một gợi ý nguyên nhân là thông tin hỗ trợ chẩn đoán hợp lệ. (a) và (b) cứng nhắc quá mức — “khách quan” nghĩa là không phán xét con người và tách sự kiện khỏi suy đoán, chứ không cấm chia sẻ manh mối; (d) hứa hẹn sai — gợi ý nguyên nhân không bảo đảm gì về regression.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.5 Defect Management (nội dung hữu ích của defect report)."
  },
  {
    "n": 5,
    "ref": "Câu 5 [FL-5.5]",
    "stem": "The following incident report was generated during system test of a web application: “Defect detected: 15.8.2010, by Joe Smith. Test level: system test. Test case: Area 5 / TC 98. Build version: 2011-16.2. Description: after filling out all required fields on screen 1, I click ENTER to continue to screen 2. Nothing happens — no system response at all.” What would you suggest as the MOST IMPORTANT improvement to this report?",
    "opts": [
      {
        "k": "a",
        "t": "A) Add an impact analysis"
      },
      {
        "k": "b",
        "t": "B) Add information about which developer should fix the bug"
      },
      {
        "k": "c",
        "t": "C) Add the exact timestamp when the incident happened"
      },
      {
        "k": "d",
        "t": "D) Add information about which web browser was used"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Với ỨNG DỤNG WEB, hành vi “bấm ENTER không có phản hồi” rất thường PHỤ THUỘC TRÌNH DUYỆT (khác engine, khác xử lý sự kiện/JavaScript). Báo cáo hiện thiếu hẳn thông tin MÔI TRƯỜNG CLIENT — thiếu nó developer không thể tái hiện đáng tin: thử trên trình duyệt khác có thể không thấy lỗi và defect bị trả về “not reproducible”. Vậy bổ sung quan trọng nhất là TRÌNH DUYỆT (kèm phiên bản) đã dùng ⇒ (d). (a) phân tích tác động không phải nội dung của incident report; (b) GÁN NGƯỜI SỬA là việc của quy trình triage/quản lý defect, không phải của người báo cáo; (c) timestamp chính xác hữu ích (đối chiếu log server) nhưng kém quan trọng hơn nhiều so với thông tin môi trường phục vụ tái hiện.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.5 Defect Management (thông tin môi trường trong defect report)."
  },
  {
    "n": 6,
    "ref": "Câu 6 [FL-4.3.2]",
    "stem": "Which of the following is NOT a valid use of decision (branch) coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) Checking that all decision outcomes have been exercised in a single program"
      },
      {
        "k": "b",
        "t": "B) Checking that all decision outcomes have been exercised in a business process"
      },
      {
        "k": "c",
        "t": "C) Checking that all calls from one program module to another have been made correctly"
      },
      {
        "k": "d",
        "t": "D) Setting and checking a target such as “at least 50% of decision outcomes exercised by the test suite”"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Decision/branch coverage đo mức độ các KẾT CỤC QUYẾT ĐỊNH (điểm rẽ nhánh) đã được thực thi. Nó áp dụng được cho mọi cấu trúc có điểm quyết định: (a) một chương trình đơn lẻ — cách dùng chuẩn nhất; (b) cả LUỒNG QUY TRÌNH NGHIỆP VỤ — các điểm rẽ nhánh của quy trình cũng là “decision” có thể phủ; (d) đặt NGƯỠNG MỤC TIÊU dưới 100% (ví dụ 50%) làm exit criteria là cách dùng hợp lệ, phổ biến của mọi số đo độ phủ. Riêng (c) — kiểm tra các LỜI GỌI giữa các module — thuộc về độ phủ KHÁC (call coverage / phủ giao diện ở mức integration), không phải decision coverage: một lời gọi hàm không phải là “kết cục quyết định” ⇒ (c).\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.3.2 Branch Testing and Branch Coverage."
  },
  {
    "n": 7,
    "ref": "Câu 7 [FL-4.3.3]",
    "stem": "One of the exit criteria for a software project was defined as “80% statement coverage”. The test manager reports: “We did not measure statement coverage. However, we achieved 80% BRANCH coverage — therefore the exit criterion has been met.” Is the test manager right?",
    "opts": [
      {
        "k": "a",
        "t": "A) No — there is no direct relationship at partial levels: 80% branch coverage does not guarantee 80% statement coverage"
      },
      {
        "k": "b",
        "t": "B) Yes — 50% branch coverage already guarantees 100% statement coverage, so with 80% branch coverage the exit criterion is easily met"
      },
      {
        "k": "c",
        "t": "C) No — the relation works the other way around: 80% statement coverage guarantees 80% branch coverage"
      },
      {
        "k": "d",
        "t": "D) Yes — coverage of 80% of the branches in the control flow guarantees at least 80% statement coverage"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Quan hệ bao hàm giữa branch và statement coverage CHỈ ĐÚNG TẠI MỨC 100%: 100% branch ⇒ 100% statement. Ở các mức MỘT PHẦN, không có bảo đảm toán học nào: 80% số nhánh được đi qua có thể tương ứng với tỷ lệ câu lệnh bất kỳ — ví dụ 20% nhánh chưa phủ lại dẫn vào những khối lệnh RẤT DÀI, khiến statement coverage tụt sâu dưới 80% ⇒ test manager SAI, và exit criterion chưa thể tuyên bố đạt khi chưa đo đúng số đo đã cam kết ⇒ (a). (b) bịa ra quan hệ vô lý; (c) sai chiều — statement là tiêu chí YẾU hơn, không suy ra branch; (d) chính là ngộ nhận cần tránh: quan hệ bao hàm không “tỷ lệ hóa” được xuống dưới mức 100%. Bài học quản lý: exit criteria phải được ĐO ĐÚNG như định nghĩa, không suy diễn thay thế.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.3.3 The Value of White-box Testing (quan hệ statement/branch)."
  },
  {
    "n": 8,
    "ref": "Câu 8 [FL-4.3]",
    "stem": "When testing a mission-critical system, very high coverage should be achieved. Which of the following techniques should be applied as a STRUCTURE-BASED coverage technique in order to achieve the HIGHEST coverage strength?",
    "opts": [
      {
        "k": "a",
        "t": "A) Multiple condition coverage"
      },
      {
        "k": "b",
        "t": "B) Decision table testing"
      },
      {
        "k": "c",
        "t": "C) Use case testing"
      },
      {
        "k": "d",
        "t": "D) Statement coverage"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Trong thang sức mạnh của các tiêu chí độ phủ CẤU TRÚC: statement coverage yếu nhất; decision/branch coverage mạnh hơn (bao hàm statement); và MULTIPLE CONDITION COVERAGE mạnh nhất trong các phương án — đòi thực thi MỌI TỔ HỢP giá trị của các điều kiện con trong mỗi quyết định (2^n tổ hợp cho n điều kiện), do đó bao hàm cả condition lẫn decision coverage. Hệ thống trọng yếu (mission-critical) chấp nhận chi phí kiểm thử cao để đổi lấy mức bảo đảm này ⇒ (a). (b) decision table và (c) use case testing là kỹ thuật BLACK-BOX — bị loại ngay vì đề yêu cầu structure-based; (d) statement là tiêu chí thấp nhất, không phù hợp yêu cầu “độ phủ cao nhất”.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.3 White-box Test Techniques (đối chiếu 2018: các mức độ phủ nâng cao)."
  },
  {
    "n": 9,
    "ref": "Câu 9 [FL-4.2.4]",
    "stem": "A program controls a switch with three buttons: “ON” turns the switch on (or leaves it on); “OFF” turns it off (or leaves it off); “Toggle” changes the current state. The state diagram (2 states, 6 transitions) and the executed test case are shown in the figure: Click ON → switch is ON; Click Toggle → OFF; Click ON → ON; Click OFF → OFF; Click Toggle → ON. The initial state of the switch is unknown. What percentage of the transitions in the diagram is GUARANTEED to be covered by this test case (i.e., in the minimum-coverage case)?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 33%"
      },
      {
        "k": "b",
        "t": "B) 83%"
      },
      {
        "k": "c",
        "t": "C) 50%"
      },
      {
        "k": "d",
        "t": "D) 66%"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Mô hình có 6 chuyển: ON@ON, ON@OFF, OFF@ON, OFF@OFF, Toggle@ON, Toggle@OFF (mỗi nút từ mỗi trạng thái). Vì trạng thái đầu KHÔNG BIẾT, xét cả hai kịch bản — lưu ý chuỗi kết quả mong đợi (ON, OFF, ON, OFF, ON) đều thỏa trong cả hai: • Ban đầu OFF: ON (OFF→ON: phủ ON@OFF) → Toggle (ON→OFF: Toggle@ON) → ON (OFF→ON: LẶP LẠI ON@OFF) → OFF (ON→OFF: OFF@ON) → Toggle (OFF→ON: Toggle@OFF) ⇒ phủ 4/6 ≈ 66%. •\n\nBan đầu ON: ON (ON→ON: ON@ON) → Toggle (Toggle@ON) → ON (ON@OFF) → OFF (OFF@ON) → Toggle (Toggle@OFF) ⇒ 5/6 ≈ 83%. Mức ĐƯỢC BẢO ĐẢM là trường hợp tối thiểu: 4/6 ≈ 66% ⇒ (d). Cả hai kịch bản đều không chạm OFF@OFF. (Đáp án in trong bộ đề gốc là 83% — sai vì lấy kịch bản thuận lợi thay vì kịch bản tối thiểu như chính đề yêu cầu.)\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.2.4 State Transition Testing (valid transitions coverage)."
  },
  {
    "n": 10,
    "ref": "Câu 10 [FL-5.3.1]",
    "stem": "The chart in the figure shows metrics of a project that was successfully completed: line A rises over time and then flattens out; line B falls over time. Which interpretation of the axes and lines is most plausible?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) X – time; Y – percent; A – % of functional tests in the suite; B – % of non-functional tests in the suite"
      },
      {
        "k": "b",
        "t": "B) X – time; Y – cost; A – cost of testing per week; B – cost of finding a single bug per week"
      },
      {
        "k": "c",
        "t": "C) X – time; Y – number of defects; A – number of open defects; B – number of closed defects"
      },
      {
        "k": "d",
        "t": "D) X – time; Y – count; A – total number of executed tests; B – number of open bugs"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Đọc HÌNH DẠNG hai đường theo tiến trình một dự án KẾT THÚC TỐT ĐẸP: A tăng dần rồi đi ngang — đúng dáng đường LŨY KẾ SỐ TEST ĐÃ THỰC THI (chậm lúc khởi động, tăng nhanh giữa kỳ, phẳng dần khi cạn test); B giảm dần về mức thấp — đúng dáng SỐ BUG ĐANG MỞ khi tốc độ sửa vượt tốc độ tìm mới lúc sản phẩm ổn định dần trước release ⇒ (d). Loại trừ: (c) ngược — về cuối dự án số defect ĐÃ ĐÓNG phải TĂNG (hai đường bị hoán vai); (a) hai tỷ trọng của cùng một bộ test phải bù nhau quanh 100%, và chẳng có lý do gì tỷ trọng chức năng tăng liên tục; (b) chi phí tìm MỘT bug thường TĂNG về cuối (bug càng hiếm càng đắt) — ngược chiều đường B. Đây là kỹ năng đọc biểu đồ theo dõi kiểm thử (test monitoring).\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.3.1 Metrics Used in Testing & 5.3.2 Test Reports."
  },
  {
    "n": 11,
    "ref": "Câu 11 [FL-5.1.5]",
    "stem": "You must compile a test execution schedule. The system has these logical dependencies: an ADMIN user must create/amend/delete a STANDARD user, and a standard user is necessary to perform all other actions. The test plan requires: re-tests (previously failed tests) must be performed first, followed by the highest-priority tests; and tests should be scheduled so that they create the test data needed by subsequent tests. The test cases are shown in the figure: (a) log in as standard user and create a customer account — priority 2, previously failed; (b) order one item — priority 3, passed; (c) create an invoice for an order — priority 1, previously failed; (d) order two items or more — priority 3, previously failed; (e) log in as admin user and create a standard user — priority 2, passed. Which schedule meets the test plan requirements and the logical dependencies?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) a, d, c, b, e"
      },
      {
        "k": "b",
        "t": "B) a, c, b, d, e"
      },
      {
        "k": "c",
        "t": "C) e, a, b, c, d"
      },
      {
        "k": "d",
        "t": "D) e, a, d, c, b"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Ràng buộc logic quyết định khung xương: (e) PHẢI CHẠY ĐẦU vì chỉ admin mới tạo được standard user — chưa có standard user thì mọi test khác bất khả thi (loại ngay hai phương án mở màn bằng a). Kế đến (a): đăng nhập standard user và tạo customer account — vừa là re-test (từng fail) vừa TẠO DỮ LIỆU khách hàng cho các bước sau. Nhóm re-test còn lại {c, d} phải đi TRƯỚC test chưa từng fail (b); trong nhóm này, (c) tạo hóa đơn CẦN CÓ ĐƠN HÀNG tồn tại trước — nên (d) “đặt 2+ món” (re-test, sinh dữ liệu đơn hàng) chạy trước (c) dù (c) mang priority 1: PHỤ THUỘC DỮ LIỆU thắng thứ tự ưu tiên, vì không có đơn thì test hóa đơn không thể chạy. Cuối cùng là (b). Vậy e → a → d → c → b ⇒ (d). Phương án (c) sai vì xếp (b) — test chưa fail — chen TRƯỚC hai re-test c, d, vi phạm yêu cầu “re-tests first”. (Đáp án in trong bộ đề gốc là (c) — sai.)\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.5 Test Case Prioritization (kết hợp phụ thuộc & ưu tiên)."
  },
  {
    "n": 12,
    "ref": "Câu 12 [FL-1.3]",
    "stem": "A company that created software for managing libraries has won a contract to write an application for managing inventories in a large hospital pharmacy. The test manager decides that the test policy and all working procedures must be reviewed and updated to meet this new challenge. Which of the following is the BEST explanation for this decision?",
    "opts": [
      {
        "k": "a",
        "t": "A) Large organizations have bigger budgets, and therefore stricter testing is required"
      },
      {
        "k": "b",
        "t": "B) The size of the software in the new project is different from previous ones, and this requires more testing"
      },
      {
        "k": "c",
        "t": "C) Revising the test policy and working procedures need not be done at the beginning of each project"
      },
      {
        "k": "d",
        "t": "D) Different industries have different risks and quality requirements, and this impacts the test process"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Đây là nguyên tắc “TESTING IS CONTEXT DEPENDENT” vận vào quản trị kiểm thử: chuyển từ phần mềm THƯ VIỆN sang phần mềm DƯỢC BỆNH VIỆN nghĩa là bước vào lĩnh vực liên quan AN TOÀN SINH MẠNG, với chuẩn chất lượng, quy định pháp lý và HỒ SƠ RỦI RO hoàn toàn khác (sai tồn kho thuốc có thể gây hại cho bệnh nhân) — vì vậy test policy, mức độ nghiêm ngặt, độ phủ yêu cầu, chuẩn tài liệu và quy trình làm việc đều phải được RÀ SOÁT, CẬP NHẬT cho khớp bối cảnh mới ⇒ (d). (a) và (b) chỉ nhìn vào ngân sách/kích thước — không phải bản chất: một hệ nhỏ trong y tế vẫn đòi kiểm thử ngặt hơn một hệ lớn ít rủi ro; (c) là phát biểu lảng tránh, không giải thích được quyết định.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.3 (nguyên tắc 6) & 1.4.1 Test Process in Context."
  },
  {
    "n": 13,
    "ref": "Câu 13 [FL-1.5.1]",
    "stem": "A software company decides to BUY a commercial off-the-shelf (COTS) application for its accounting operations. As part of the evaluation process, the company assembles a team to test a number of candidate applications. Which team composition would be MOST suitable for this goal?",
    "opts": [
      {
        "k": "a",
        "t": "A) A team from an outsourcing company which specializes in testing accounting software"
      },
      {
        "k": "b",
        "t": "B) A team with a mix of software testers and experts from the accounting department"
      },
      {
        "k": "c",
        "t": "C) A team of end users from the accounting department who will use the application daily"
      },
      {
        "k": "d",
        "t": "D) A team drawn only from the company's own testing team, due to their experience in testing software"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Đánh giá – lựa chọn sản phẩm COTS đòi hỏi ĐỒNG THỜI hai loại tri thức: KỸ NĂNG KIỂM THỬ (thiết kế kịch bản so sánh có hệ thống, phủ các trường hợp biên, ghi nhận khách quan) và TRI THỨC NGHIỆP VỤ KẾ TOÁN CỦA CHÍNH CÔNG TY (quy trình, chuẩn mực, các nghiệp vụ đặc thù mà ứng viên phải đáp ứng). Đội TRỘN tester + chuyên gia kế toán nội bộ có cả hai — tester bảo đảm phương pháp, chuyên gia bảo đảm tiêu chí phù-hợp-mục-đích ⇒ (b). (a) đội thuê ngoài giỏi test phần mềm kế toán nhưng KHÔNG hiểu nghiệp vụ đặc thù của công ty; (c) người dùng cuối hiểu nghiệp vụ nhưng thiếu kỹ năng kiểm thử có hệ thống; (d) tester nội bộ đơn thuần lại thiếu chiều sâu nghiệp vụ kế toán. Tinh thần: thành phần đội kiểm thử là quyết định theo NGỮ CẢNH và mục tiêu — sự pha trộn kỹ năng là sức mạnh.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.5.1 Generic Skills Required for Testing (domain knowledge)."
  },
  {
    "n": 14,
    "ref": "Câu 14 [FL-6.1]",
    "stem": "Which of the following statements about test automation is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) When using data-driven testing, testers create and store the test inputs separately from the test script, allowing the same script to be run with different data sets"
      },
      {
        "k": "b",
        "t": "B) Test management tools should not interface with other testing tools, as they are only required for use by the test manager"
      },
      {
        "k": "c",
        "t": "C) When performing automated static analysis, warning messages that do not stop the code from compiling should simply be ignored"
      },
      {
        "k": "d",
        "t": "D) In keyword-driven testing, specific keywords are included in the script to indicate to the tester that they must manually enter a particular value at that point"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "DATA-DRIVEN testing: DỮ LIỆU test (đầu vào và kết quả mong đợi) được tách khỏi script — lưu trong bảng/tệp riêng — để CÙNG MỘT SCRIPT chạy lặp lại với NHIỀU BỘ DỮ LIỆU khác nhau; đây là mô tả chuẩn xác ⇒ (a). Ba phương án còn lại đều sai: (b) test management tool NÊN tích hợp với các công cụ khác (defect tracking, requirements, execution) để trao đổi dữ liệu và duy trì truy vết — và nhiều vai trò cùng dùng, không riêng manager; (c) CẢNH BÁO của static analysis thường chỉ ra lỗi tiềm ẩn thật (biến chưa gán, code smell) — bỏ qua hàng loạt là đánh mất giá trị công cụ; (d) hiểu sai keyword-driven: từ khóa đại diện HÀNH ĐỘNG được công cụ TỰ ĐỘNG thực thi, không phải điểm dừng chờ người nhập tay. (So sánh với Câu 13 – Đề 8 về keyword-driven.)\n📌 Kiến thức: CTFL v4.0 — Chương 6, mục 6.1 Tool Support for Testing (đối chiếu 2018: scripting approaches). PHẦN BỔ SUNG – CÂU HỎI THEO NỘI DUNG MỚI CỦA CTFL v4.0 10 câu dưới đây được biên soạn mới hoàn toàn theo dạng TÌNH HUỐNG THỰC TIỄN của CTFL v4.0, nhóm chủ đề kỹ thuật và cộng tác: nhận diện BDD qua kịch bản Given/When/Then, lợi ích của CI/DevOps, phân loại hoạt động theo testing quadrants, hành động giảm nhẹ rủi ro bằng kiểm thử, chọn cách viết defect report xây dựng, xử lý phân kỳ trong planning poker, tính độ phủ theo coverage item, phân biệt hoạt động QA/QC, nhóm công cụ container/máy ảo, và cách nâng mức độc lập kiểm thử trong ràng buộc nguồn lực."
  },
  {
    "n": 15,
    "ref": "Câu bổ sung 1 [FL-2.1.3]",
    "stem": "During refinement, a product owner, a developer and a tester together write the following for a user story: \"GIVEN a registered customer with an empty cart, WHEN the customer adds an in- stock item to the cart, THEN the cart shows 1 item and the total price of that item.\" These artifacts are then automated and executed against the application. Which practice is being applied, and what is the main purpose of writing them this way?",
    "opts": [
      {
        "k": "a",
        "t": "A) Behavior-driven development (BDD) — the Given/When/Then scenarios are shared, understandable acceptance criteria that can be turned directly into automated tests"
      },
      {
        "k": "b",
        "t": "B) White-box testing — the scenarios describe the internal structure of the cart component"
      },
      {
        "k": "c",
        "t": "C) Error guessing — the scenarios list the most probable defects of the shopping cart"
      },
      {
        "k": "d",
        "t": "D) Static analysis — the scenarios are rules that a tool checks against the source code without executing it"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Định dạng GIVEN (bối cảnh) – WHEN (hành động) – THEN (kết quả mong đợi) là cú pháp đặc trưng của BDD: ba góc nhìn (nghiệp vụ – phát triển – kiểm thử) CÙNG viết các kịch bản hành vi bằng ngôn ngữ tự nhiên có cấu trúc, dùng chúng làm ACCEPTANCE CRITERIA chung mà mọi người đều hiểu như nhau, rồi chuyển THẲNG thành test tự động — kịch bản vừa là đặc tả, vừa là test, vừa là tài liệu sống ⇒ (a). Lợi ích kép: PHÒNG TRÁNH defect nhờ làm rõ hiểu lầm ngay khi viết (collaboration-based), và test-first định hướng phát triển. (b) sai — kịch bản mô tả HÀNH VI bên ngoài, không đụng cấu trúc trong; (c), (d) gán sai bản chất hoàn toàn.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.3 (BDD) & Chương 4, mục 4.5.2 Acceptance Criteria."
  },
  {
    "n": 16,
    "ref": "Câu bổ sung 2 [FL-2.1.4]",
    "stem": "A team sets up a continuous integration (CI) pipeline: every time a developer commits code, the system automatically builds the software and runs static analysis, unit tests and component integration tests; the developer receives the results within ten minutes. Which testing benefit of DevOps/CI does this scenario BEST illustrate?",
    "opts": [
      {
        "k": "a",
        "t": "A) It removes the need for system testing and acceptance testing"
      },
      {
        "k": "b",
        "t": "B) Fast feedback on code quality: defects and regressions are detected within minutes of being introduced, while the change is still fresh — an application of the early-testing/shift-left principle"
      },
      {
        "k": "c",
        "t": "C) It guarantees that the delivered product will contain no defects at all"
      },
      {
        "k": "d",
        "t": "D) It makes test planning unnecessary, because the pipeline decides what to test"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Giá trị cốt lõi mà CI mang lại cho kiểm thử là VÒNG PHẢN HỒI NHANH: mỗi commit đều được build và kiểm ngay bằng phân tích tĩnh + test tự động mức thấp, nên defect hoặc thoái lui bị PHÁT HIỆN TRONG VÀI PHÚT sau khi sinh ra — lúc developer còn nhớ rõ thay đổi, chi phí chẩn đoán và sửa nhỏ nhất. Đây chính là early testing/shift-left được TỰ ĐỘNG HÓA và lặp lại liên tục ⇒ (b). (a) sai — CI kiểm mức thấp không thay thế được system/acceptance testing (các mức này vẫn cần cho hành vi end-to-end và góc nhìn người dùng); (c) vi phạm nguyên tắc 1 — không gì bảo đảm “hết defect”; (d) pipeline chỉ THỰC THI chiến lược đã hoạch định, không thay thế việc lập kế hoạch kiểm thử.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.4 DevOps and Testing."
  },
  {
    "n": 17,
    "ref": "Câu bổ sung 3 [FL-5.1.7]",
    "stem": "An Agile team uses the TESTING QUADRANTS model to communicate about its tests. Classify the following two activities: (1) automated unit and component integration tests that support the team and are technology-facing; (2) usability testing and exploratory testing sessions that critique the product from the business/user perspective. Which classification is correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) (1) belongs to quadrant Q1 (technology-facing, supporting the team); (2) belongs to quadrant Q3 (business-facing, critiquing the product)"
      },
      {
        "k": "b",
        "t": "B) (1) belongs to quadrant Q4; (2) belongs to quadrant Q2"
      },
      {
        "k": "c",
        "t": "C) Both belong to quadrant Q1, because all tests support the team"
      },
      {
        "k": "d",
        "t": "D) The testing quadrants model classifies defects, not test activities"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Mô hình TESTING QUADRANTS chia hoạt động kiểm thử theo hai trục: HƯỚNG CÔNG NGHỆ hay HƯỚNG NGHIỆP VỤ, và HỖ TRỢ NHÓM (định hướng phát triển) hay PHÊ PHÁN SẢN PHẨM (tìm điểm yếu). (1) unit test và component integration test tự động = Q1: technology-facing + hỗ trợ nhóm — lưới an toàn chạy liên tục trong CI. (2) usability testing và phiên exploratory = Q3: business-facing + phê phán sản phẩm — đánh giá từ góc nhìn người dùng ⇒ (a). Tham chiếu thêm: Q2 = business-facing hỗ trợ nhóm (kiểm thử chức năng từ acceptance criteria, các kịch bản BDD); Q4 = technology-facing phê phán sản phẩm (hiệu năng, bảo mật, độ tin cậy). Giá trị của mô hình: ngôn ngữ chung để bảo đảm chiến lược test cân bằng đủ bốn góc.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.7 Testing Quadrants."
  },
  {
    "n": 18,
    "ref": "Câu bổ sung 4 [FL-5.2.4]",
    "stem": "Product risk analysis identified a HIGH risk: \"incorrect interest calculation in the loan module could cause financial loss and regulatory penalties\". Which of the following sets of actions represents risk MITIGATION through testing for this product risk?",
    "opts": [
      {
        "k": "a",
        "t": "A) Buying insurance against regulatory fines and transferring the risk to a third party"
      },
      {
        "k": "b",
        "t": "B) Selecting rigorous test techniques for the loan module (e.g., decision table testing and boundary value analysis), scheduling its tests as early as possible, assigning experienced testers to it, and performing reviews of the interest calculation specification"
      },
      {
        "k": "c",
        "t": "C) Accepting the risk and releasing without additional testing, to save budget"
      },
      {
        "k": "d",
        "t": "D) Removing the loan module from the risk register so that the report looks better"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Với PRODUCT risk, KIỂM THỬ là công cụ GIẢM NHẸ (mitigate) chủ lực: tăng độ kỹ lưỡng ở đúng vùng rủi ro — chọn KỸ THUẬT MẠNH và phù hợp bản chất rủi ro (decision table cho quy tắc tính lãi nhiều điều kiện, BVA cho các ngưỡng số), kéo kiểm thử vùng đó lên SỚM (rủi ro cao test trước), giao cho người GIÀU KINH NGHIỆM, và bổ sung kiểm thử tĩnh (REVIEW đặc tả công thức lãi) để chặn defect từ gốc ⇒ (b). Các phương án còn lại là các cách XỬ LÝ rủi ro khác hoặc phản thực hành: (a) CHUYỂN GIAO rủi ro (transfer) — hợp lệ về quản trị nhưng không phải “mitigation through testing”; (c) CHẤP NHẬN rủi ro — không phù hợp với rủi ro mức cao có hệ quả pháp lý; (d) xóa khỏi sổ rủi ro là che giấu, vi phạm tính minh bạch của quản lý rủi ro.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.2.4 Product Risk Control (risk mitigation & risk-based testing)."
  },
  {
    "n": 19,
    "ref": "Câu bổ sung 5 [FL-1.5.1]",
    "stem": "A tester has found that the discount calculation is wrong on the checkout page. Which of the following defect report comments follows the communication guidance of CTFL v4.0 BEST?",
    "opts": [
      {
        "k": "a",
        "t": "A) \"Whoever coded this discount logic clearly didn't think at all — please assign it to someone competent this time.\""
      },
      {
        "k": "b",
        "t": "B) \"The checkout is completely broken, nothing works, fix everything as soon as possible.\""
      },
      {
        "k": "c",
        "t": "C) \"On build 3.2.1, adding item P-102 (price $200) with voucher SAVE10: actual discount shown is $2.00, expected $20.00 per pricing rule 4.3. Steps and screenshot attached. This blocks the checkout regression suite, so we would appreciate a fix in this sprint.\""
      },
      {
        "k": "d",
        "t": "D) \"There is a small issue somewhere in pricing; details will follow at some point when I have time.\""
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Giao tiếp defect hiệu quả theo v4.0: PHÊ BÌNH SẢN PHẨM, KHÔNG PHÊ BÌNH CON NGƯỜI; KHÁCH QUAN và CỤ THỂ — sự kiện, bước tái hiện, kết quả thực tế so với mong đợi kèm căn cứ (tham chiếu quy tắc 4.3), bối cảnh (build, dữ liệu), bằng chứng (ảnh chụp), và TÁC ĐỘNG kèm đề nghị mang tính XÂY DỰNG (“chặn bộ regression, mong sửa trong sprint”) — phương án (c) hội đủ ⇒ (c). (a) công kích cá nhân — phá hủy quan hệ hợp tác, chính là điều tâm lý học kiểm thử cảnh báo; (b) cường điệu mơ hồ (“hỏng hết”) — không tái hiện được, dễ bị bác; (d) trì hoãn thông tin — defect report mất giá trị khi thiếu chi tiết lúc còn nóng.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.5.1 (kỹ năng giao tiếp) & Chương 5, mục 5.5."
  },
  {
    "n": 20,
    "ref": "Câu bổ sung 6 [FL-5.1.4]",
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
    "n": 21,
    "ref": "Câu bổ sung 7 [FL-4.1]",
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
    "n": 22,
    "ref": "Câu bổ sung 8 [FL-1.2.2]",
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
    "n": 23,
    "ref": "Câu bổ sung 9 [FL-6.1]",
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
    "n": 24,
    "ref": "Câu bổ sung 10 [FL-1.5.3]",
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
