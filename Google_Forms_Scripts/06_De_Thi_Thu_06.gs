/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 06 (Giải chi tiết TV) (30 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 06 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (30 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-5.6]",
    "stem": "Which of the following details would most likely be included in an incident report? I. Identification of the test item (configuration item) and environment; II. Development process characteristics such as organization stability and the test process used; III. A review of the test basis, such as requirements, design, interfaces; IV. Scope or degree of the impact on the stakeholders' interests.",
    "opts": [
      {
        "k": "a",
        "t": "A) I, II and III"
      },
      {
        "k": "b",
        "t": "B) II and III"
      },
      {
        "k": "c",
        "t": "C) I and IV"
      },
      {
        "k": "d",
        "t": "D) IV and III"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Incident (defect) report cần chứa thông tin phục vụ tái hiện và xử lý: ĐỊNH DANH test item (configuration item) và MÔI TRƯỜNG nơi phát hiện (I) — bắt buộc, vì thiếu nó không biết failure xảy ra trên phiên bản/cấu hình nào; và PHẠM VI/MỨC ĐỘ TÁC ĐỘNG đến lợi ích các bên liên quan (IV) — cơ sở để đánh giá severity/priority. Còn (II) đặc điểm quy trình phát triển của tổ chức và (III) việc review test basis là thông tin bối cảnh dự án/hoạt động kiểm thử tĩnh — không thuộc nội dung một incident report ⇒ I và IV ⇒ (c).\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.6 Defect Management (nội dung defect report)."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-4.2.1]",
    "stem": "Company ABC is going to provide their employees with a bonus based on the employee's length of service: zero if they have been with the company for less than two years, 10% of their salary for two or more but less than five years, 25% for five to less than ten years, and 35% for ten years or more. The interface will not allow a negative value to be input, but it will allow zero. How many equivalence partitions are needed to test the calculation of the bonus?",
    "opts": [
      {
        "k": "a",
        "t": "A) Two equivalence partitions"
      },
      {
        "k": "b",
        "t": "B) Three equivalence partitions"
      },
      {
        "k": "c",
        "t": "C) Four equivalence partitions"
      },
      {
        "k": "d",
        "t": "D) Five equivalence partitions"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Miền đầu vào là số năm thâm niên ≥ 0 (giao diện chặn giá trị âm nên KHÔNG có phân vùng âm không hợp lệ). Quy tắc thưởng chia miền này thành BỐN phân vùng, mỗi phân vùng được xử lý khác nhau: [0, 2) → 0%; [2, 5) → 10%; [5, 10) → 25%; [10, ∞) → 35%. Vậy cần 4 phân vùng tương đương ⇒ (c). Bẫy thường gặp: đếm thêm phân vùng “số âm” thành 5 — sai vì đề nói rõ giao diện không cho nhập giá trị âm, tức giá trị đó không thể xảy ra.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 3,
    "ref": "Câu 9 [FL-4.2.1]",
    "stem": "The following rule must be followed when using the equivalence class partitioning method:",
    "opts": [
      {
        "k": "a",
        "t": "A) The representatives of the valid equivalence classes of the parameters can be combined"
      },
      {
        "k": "b",
        "t": "B) The representatives of the invalid equivalence classes of the parameters shall be combined"
      },
      {
        "k": "c",
        "t": "C) The representatives of the invalid equivalence classes of the parameters must be combined pairwise"
      },
      {
        "k": "d",
        "t": "D) A representative of one invalid equivalence class shall be combined with a representative of another invalid equivalence class"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Quy tắc kết hợp trong EP khi hàm có nhiều tham số: các đại diện của phân vùng HỢP LỆ có thể được KẾT HỢP với nhau trong cùng một test case (một test phủ đồng thời nhiều phân vùng hợp lệ của các tham số khác nhau) ⇒ (a); ngược lại, mỗi giá trị KHÔNG HỢP LỆ phải được kiểm RIÊNG LẺ — một test chỉ chứa một giá trị không hợp lệ, các tham số còn lại giữ giá trị hợp lệ — để tránh hiện tượng CHE LẤP LỖI (failure của giá trị sai này che mất phản ứng với giá trị sai kia). Các phương án (b), (c), (d) đều bắt kết hợp các giá trị không hợp lệ — đi ngược quy tắc. (Xem thêm Câu bổ sung 10 – Đề 4 về lý do fault masking.)\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 4,
    "ref": "Câu 11 [FL-1.4.2]",
    "stem": "Which of the following is NOT a \"Test Analysis and Design\" activity in the (fundamental) test process?",
    "opts": [
      {
        "k": "a",
        "t": "A) Identifying necessary test data to support the test conditions and test cases"
      },
      {
        "k": "b",
        "t": "B) Identifying and prioritizing test conditions based on analysis of the test items, the specification, and the behavior and structure of the software"
      },
      {
        "k": "c",
        "t": "C) Creating bi-directional traceability between the test basis and the test cases"
      },
      {
        "k": "d",
        "t": "D) Creating test suites from the test procedures for efficient test execution"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "TẠO TEST SUITE từ các test procedure (gom nhóm, sắp xếp để thực thi hiệu quả) là nhiệm vụ của TEST IMPLEMENTATION — giai đoạn chuẩn bị chạy — không thuộc phân tích & thiết kế ⇒ (d). Ba phương án còn lại đúng là hoạt động phân tích/thiết kế: nhận diện test data cần thiết cho test condition và test case (a — thiết kế); nhận diện và ưu tiên hóa test condition từ việc phân tích test item, đặc tả, hành vi và cấu trúc phần mềm (b — phân tích); thiết lập truy vết hai chiều giữa test basis và test case (c — xuyên suốt phân tích/thiết kế).\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities and Tasks."
  },
  {
    "n": 5,
    "ref": "Câu 13 [FL-2.3]",
    "stem": "A defect was found during testing: the system crashed when the network got disconnected while receiving data from the server. The defect was fixed by correcting the code which checks network availability during data transfer. The corresponding module had 100% statement coverage with the existing test cases. To verify the fix and to ensure more extensive coverage, some tests were designed and added to the test suite. What types of testing are mentioned above?",
    "opts": [
      {
        "k": "a",
        "t": "A) Functional testing, structural testing, performance testing"
      },
      {
        "k": "b",
        "t": "B) Functional testing, confirmation testing"
      },
      {
        "k": "c",
        "t": "C) Functional testing, confirmation testing, structural testing"
      },
      {
        "k": "d",
        "t": "D) Functional testing, confirmation testing, performance testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Ba loại kiểm thử xuất hiện trong tình huống: (1) FUNCTIONAL testing — kiểm thử hành vi xử lý mất kết nối mạng khi nhận dữ liệu (hệ thống phải xử lý được, không crash); (2) CONFIRMATION testing — chạy lại để XÁC NHẬN bản sửa lỗi hoạt động (“to verify the fix”); (3) STRUCTURAL testing — dùng SỐ ĐO ĐỘ PHỦ (100% statement coverage) và thiết kế thêm test để đạt độ phủ rộng hơn (“ensure more extensive coverage”) — đúng cách dùng white-box để đo và bổ sung độ phủ ⇒ (c). PERFORMANCE testing (thời gian đáp ứng, thông lượng) không hề được nhắc đến — loại (a) và (d).\n📌 Kiến thức: Chương 2 – mục 2.3 Test Types (kết hợp 2.3.1, 2.3.3, 2.3.4)."
  },
  {
    "n": 6,
    "ref": "Câu 15 [FL-2.3.4]",
    "stem": "Given the following types of testing (a. Regression testing; b. Confirmation testing) and the following testing scenarios: 1. Testing to ensure that a new version of the operating system does not have any unintended side-effects on the system; 2. Testing due to the application of a security patch; 3. Testing due to the application of a new version of the database management system; 4. Testing to ensure that the fix to the payroll system truly works. Which of the following correctly matches them?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1 – a, 2 – a, 3 – b, 4 – b"
      },
      {
        "k": "b",
        "t": "B) 1 – b, 2 – b, 3 – a, 4 – a"
      },
      {
        "k": "c",
        "t": "C) 1 – a, 2 – a, 3 – a, 4 – b"
      },
      {
        "k": "d",
        "t": "D) 1 – b, 2 – b, 3 – b, 4 – a"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Tiêu chí phân biệt: kiểm để chắc thay đổi KHÔNG GÂY TÁC DỤNG PHỤ ngoài ý muốn = REGRESSION; kiểm để chắc một defect/vấn đề cụ thể ĐÃ ĐƯỢC SỬA ĐÚNG = CONFIRMATION. (1) nâng cấp hệ điều hành — kiểm side-effect → regression (a); (2) vá bảo mật — kiểm hệ thống không bị ảnh hưởng ngoài ý muốn bởi bản vá → regression (a); (3) nâng phiên bản DBMS — như (1) → regression (a); (4) xác nhận bản sửa của hệ thống lương “thực sự chạy đúng” → confirmation (b). Vậy 1-a, 2-a, 3-a, 4-b ⇒ (c). Ba tình huống đầu chính là các thay đổi MÔI TRƯỜNG điển hình kích hoạt maintenance testing với trọng tâm regression. (Định nghĩa hai loại test: xem Câu 28 – Đề 1.)\n📌 Kiến thức: Chương 2 – mục 2.3.4 Change-related Testing & 2.4 Maintenance Testing."
  },
  {
    "n": 7,
    "ref": "Câu 17 [FL-4.3.1]",
    "stem": "Which of the following is NOT correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) Statement coverage is determined by the number of all executable statements in the code under test"
      },
      {
        "k": "b",
        "t": "B) Decision coverage is determined by the number of all decision outcomes covered by test cases, divided by the number of all possible decision outcomes in the code under test"
      },
      {
        "k": "c",
        "t": "C) Decision coverage is a form of control flow testing, as it follows the specific flows of control through the decision points"
      },
      {
        "k": "d",
        "t": "D) 100% statement coverage guarantees 100% decision coverage"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Phát biểu SAI là (d) vì quan hệ bao hàm đi theo chiều NGƯỢC LẠI: 100% DECISION coverage bảo đảm 100% statement coverage, còn 100% statement KHÔNG bảo đảm 100% decision — ví dụ lệnh “if” không có nhánh else: một test đi qua nhánh true đã chạy hết mọi câu lệnh (100% statement) nhưng kết cục false của quyết định chưa hề được kiểm ⇒ (d). Các phát biểu còn lại đúng: (a) mẫu số của statement coverage là tổng số câu lệnh THỰC THI ĐƯỢC; (b) decision coverage = kết cục quyết định đã phủ ÷ tổng kết cục quyết định; (c) decision testing là một dạng kiểm thử LUỒNG ĐIỀU KHIỂN. (Xem thêm Câu bổ sung 5 – Đề 3 về thuật ngữ branch coverage của v4.0.)\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.1, 4.3.2 & 4.3.3."
  },
  {
    "n": 8,
    "ref": "Câu 18 [FL-5.6]",
    "stem": "Which of the following is NOT a valid objective of incident (defect) reports?",
    "opts": [
      {
        "k": "a",
        "t": "A) To provide developers and other parties with feedback about the problem, to enable identification, isolation and correction as necessary"
      },
      {
        "k": "b",
        "t": "B) To provide ideas for test process improvement"
      },
      {
        "k": "c",
        "t": "C) To provide a vehicle for assessing tester competence"
      },
      {
        "k": "d",
        "t": "D) To provide testers with a means of tracking the quality of the system under test"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Ba mục tiêu hợp lệ của defect report theo syllabus: cung cấp cho developer và các bên liên quan THÔNG TIN về vấn đề để nhận diện, cô lập và sửa chữa (a); cung cấp cho test manager phương tiện THEO DÕI CHẤT LƯỢNG hệ thống và tiến độ kiểm thử (d); cung cấp Ý TƯỞNG CẢI TIẾN quy trình phát triển và kiểm thử (b). Dùng defect report làm công cụ ĐÁNH GIÁ NĂNG LỰC TESTER (c) không phải mục tiêu hợp lệ — đi ngược nguyên tắc không dùng dữ liệu kiểm thử để đánh giá cá nhân, và sẽ bóp méo hành vi báo lỗi ⇒ (c).\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.6 Defect Management."
  },
  {
    "n": 9,
    "ref": "Câu 19 [FL-2.4]",
    "stem": "This testing includes regression testing to parts of the system that have NOT been changed. The scope of this testing is related to the risk of the change, the size of the existing system, and the size of the change. What is this testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Maintenance testing"
      },
      {
        "k": "b",
        "t": "B) Interoperability testing"
      },
      {
        "k": "c",
        "t": "C) Re-testing"
      },
      {
        "k": "d",
        "t": "D) Structural testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Đây là định nghĩa đặc trưng của MAINTENANCE TESTING — kiểm thử khi hệ thống ĐANG VẬN HÀNH bị thay đổi (sửa lỗi, cải tiến, thay đổi môi trường, chuyển đổi): nó gồm kiểm thử phần thay đổi VÀ REGRESSION TESTING trên các phần KHÔNG thay đổi; PHẠM VI được quyết định bởi ba yếu tố: mức RỦI RO của thay đổi, KÍCH THƯỚC hệ thống hiện có và KÍCH THƯỚC của thay đổi ⇒ (a). (b) interoperability là kiểm thử khả năng tương tác giữa các hệ thống; (c) re-testing (confirmation) chỉ kiểm lại defect đã sửa; (d) structural là nhóm kỹ thuật white-box.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.4 Maintenance Testing."
  },
  {
    "n": 10,
    "ref": "Câu 20 [FL-2.2.3]",
    "stem": "Which of the following is NOT about system testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) It may include tests based on risks and/or on requirements specifications, business processes, use cases"
      },
      {
        "k": "b",
        "t": "B) The test environment should correspond to the final target or production environment"
      },
      {
        "k": "c",
        "t": "C) It should investigate functional and non-functional requirements of the system, and data quality characteristics"
      },
      {
        "k": "d",
        "t": "D) It tests the interactions between different systems, or between hardware and software"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Kiểm thử TƯƠNG TÁC GIỮA CÁC HỆ THỐNG khác nhau (hoặc giữa phần cứng và phần mềm) là trọng tâm của INTEGRATION testing — cụ thể là system integration testing — không phải system testing (vốn tập trung vào hành vi của MỘT hệ thống hoàn chỉnh end-to- end) ⇒ (d). Ba phát biểu còn lại đúng với system testing: test basis gồm đặc tả yêu cầu, quy trình nghiệp vụ, use case và các rủi ro (a); môi trường kiểm thử nên tương ứng môi trường đích/production để giảm rủi ro bỏ sót failure đặc thù môi trường (b); phạm vi gồm yêu cầu chức năng, phi chức năng và cả đặc tính chất lượng dữ liệu (c).\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2.3 System Testing."
  },
  {
    "n": 11,
    "ref": "Câu 21 [FL-3.2.5]",
    "stem": "Which of the following is INCORRECT about success factors for reviews?",
    "opts": [
      {
        "k": "a",
        "t": "A) Each review has clear, predefined objectives"
      },
      {
        "k": "b",
        "t": "B) The right people for the review objectives are involved"
      },
      {
        "k": "c",
        "t": "C) Testers should not be involved in reviewing documents"
      },
      {
        "k": "d",
        "t": "D) Defects found are welcomed and expressed objectively"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Phát biểu SAI là (c): syllabus khuyến nghị NGƯỢC LẠI — TESTER là những reviewer có giá trị: họ đóng góp góc nhìn kiểm thử vào tài liệu (yêu cầu, thiết kế), phát hiện sớm vấn đề, đồng thời hiểu sản phẩm để chuẩn bị test sớm hơn ⇒ (c). Ba phương án còn lại là các yếu tố thành công chuẩn của review: mỗi review có MỤC TIÊU rõ ràng được định trước (a); chọn ĐÚNG NGƯỜI phù hợp mục tiêu review — có chuyên môn, đại diện các góc nhìn (b); defect tìm thấy được CHÀO ĐÓN và nêu một cách KHÁCH QUAN — văn hóa không đổ lỗi (d).\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.5 Success Factors for Reviews."
  },
  {
    "n": 12,
    "ref": "Câu 22 [FL-6.2]",
    "stem": "A project to introduce a chosen test tool in an organization would best be run like which of the following alternatives?",
    "opts": [
      {
        "k": "a",
        "t": "A) Pilot project, adaptation of processes, developing adapted rules and standards, training, stepwise introduction, coaching, follow-up of costs and benefits"
      },
      {
        "k": "b",
        "t": "B) Pilot project, adaptation of processes, rules and standards, developing an FAQ, training, introduction, coaching, adaptation of the tool, follow-up of costs and benefits"
      },
      {
        "k": "c",
        "t": "C) Pilot project, stepwise introduction, adaptation of processes, follow-up of costs and benefits"
      },
      {
        "k": "d",
        "t": "D) Pilot project, adaptation of processes, training, stepwise introduction, coaching, follow-up of costs and benefits"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Trình tự triển khai công cụ được khuyến nghị: bắt đầu bằng DỰ ÁN PILOT (học công cụ, đánh giá độ khớp, quyết định cách dùng chuẩn, đánh giá chi phí – lợi ích) → ĐIỀU CHỈNH QUY TRÌNH cho khớp với công cụ → ĐÀO TẠO người dùng → TRIỂN KHAI TĂNG DẦN (stepwise/incremental rollout) sang các nhóm còn lại → KÈM CẶP, HUẤN LUYỆN liên tục (coaching/mentoring) → THEO DÕI CHI PHÍ VÀ LỢI ÍCH thu được ⇒ (d) nêu đúng, đủ và gọn chuỗi này. (a) và (b) chèn thêm các bước không thuộc khuyến nghị chuẩn (xây bộ rules/standards riêng, viết FAQ, chỉnh sửa công cụ); (c) thiếu hẳn đào tạo và coaching — hai yếu tố thành công quan trọng.\n📌 Kiến thức: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.2 (đưa công cụ vào tổ chức)."
  },
  {
    "n": 13,
    "ref": "Câu 23 [FL-2.1.1]",
    "stem": "Which of the following is NOT correct regarding iterative-incremental development?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is the process of establishing requirements, designing, building and testing a system in a series of short development cycles"
      },
      {
        "k": "b",
        "t": "B) This model demonstrates the relationships between each phase of the development lifecycle and its associated phase of testing"
      },
      {
        "k": "c",
        "t": "C) A system that is produced using this model is tested at several test levels during each iteration"
      },
      {
        "k": "d",
        "t": "D) Regression testing is increasingly important on all iterations after the first one"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Phát biểu (b) mô tả V-MODEL — mô hình TUẦN TỰ thể hiện quan hệ giữa từng giai đoạn phát triển với mức kiểm thử tương ứng — chứ không phải mô hình lặp-tăng trưởng ⇒ (b). Ba phát biểu còn lại đúng với iterative-incremental: hệ thống được xây qua CHUỖI CHU KỲ NGẮN gồm xác định yêu cầu – thiết kế – xây dựng – kiểm thử (a); trong MỖI iteration, phần tăng trưởng được kiểm thử ở NHIỀU test level (component, integration, system…) (c); và REGRESSION testing ngày càng quan trọng từ iteration thứ hai trở đi vì mỗi phần mới có thể ảnh hưởng các phần đã bàn giao (d).\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.1.1 Software Development Lifecycle Models."
  },
  {
    "n": 14,
    "ref": "Câu 24 [FL-5.5.2]",
    "stem": "Which of the following alternatives contains typical PROJECT risks to be considered by the test manager?",
    "opts": [
      {
        "k": "a",
        "t": "A) Delays, and especially complex areas in the delivered product"
      },
      {
        "k": "b",
        "t": "B) Low quality of requirements, design, code and tests, as well as failure-prone areas in the delivered product"
      },
      {
        "k": "c",
        "t": "C) Potential failure areas in the software or system"
      },
      {
        "k": "d",
        "t": "D) Supplier problems, organizational factors, and the low quality of the design, code, test data and tests"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "PROJECT risk gồm ba nhóm: vấn đề TỔ CHỨC (thiếu kỹ năng/nhân sự, vấn đề con người, thái độ với kiểm thử…), vấn đề KỸ THUẬT của quá trình thực hiện (yêu cầu không được định nghĩa đúng, CHẤT LƯỢNG THẤP của thiết kế – mã – dữ liệu cấu hình – test data – các test, môi trường không sẵn sàng…), và vấn đề NHÀ CUNG CẤP (bên thứ ba giao trễ, phá sản…). Phương án (d) gộp đúng ba nhóm này ⇒ (d). Các phương án còn lại đều LẪN product risk: “vùng phức tạp/dễ hỏng trong SẢN PHẨM bàn giao” (a, b) và “vùng có khả năng failure trong phần mềm” (c) là rủi ro về chất lượng sản phẩm.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.5.2 Product and Project Risks."
  },
  {
    "n": 15,
    "ref": "Câu 26 [FL-1.3]",
    "stem": "Which of the following are conclusions you could draw from the testing principles? (See the figure for statements A–E.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) A, D and E are reasonable conclusions; the others are not"
      },
      {
        "k": "b",
        "t": "B) B, C and D are reasonable conclusions; the others are not"
      },
      {
        "k": "c",
        "t": "C) B, C and E are reasonable conclusions; the others are not"
      },
      {
        "k": "d",
        "t": "D) B, D and E are reasonable conclusions; the others are not"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "(B) HỢP LÝ: mức độ phủ cần thiết ở tổ chức này có thể không phù hợp tổ chức khác — hệ quả trực tiếp của nguyên tắc “Testing is context dependent”. (C) HỢP LÝ: vì không thể kiểm thử vét cạn (nguyên tắc 2), cần ĐÁNH GIÁ RỦI RO để biết “test bao nhiêu là đủ” cho từng hệ thống. (D) HỢP LÝ: hệ thống safety-critical đòi độ phủ cao hơn hệ thống thường — cũng từ tính phụ thuộc ngữ cảnh + rủi ro. (A) KHÔNG hợp lý: “website không thể kiểm thử được vì tổ hợp quá nhiều” — suy diễn sai từ nguyên tắc 2; vét cạn bất khả thi không có nghĩa không test được, mà phải dùng phân tích rủi ro và độ ưu tiên để tập trung nỗ lực. (E) KHÔNG hợp lý: “hệ thống safety-critical được kiểm thử VÉT CẠN” — mâu thuẫn thẳng với nguyên tắc 2. Vậy B, C, D ⇒ (b).\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.3 Seven Testing Principles (nguyên tắc 2 & 6)."
  },
  {
    "n": 16,
    "ref": "Câu 27 [FL-3.2.2]",
    "stem": "Which of the following CORRECTLY matches the roles and responsibilities in a formal review?",
    "opts": [
      {
        "k": "a",
        "t": "A) Review leader — creates the work product under review"
      },
      {
        "k": "b",
        "t": "B) Scribe — collates potential defects found during the individual review activity"
      },
      {
        "k": "c",
        "t": "C) Author — identifies potential defects in the work product under review"
      },
      {
        "k": "d",
        "t": "D) Facilitator — fixes defects in the work product under review"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "SCRIBE (người ghi chép) có nhiệm vụ TẬP HỢP các defect tiềm ẩn, câu hỏi, điểm mở được tìm thấy trong hoạt động review cá nhân và ghi nhận thông tin mới trong cuộc họp review ⇒ (b). Các cặp còn lại ghép sai: REVIEW LEADER chịu trách nhiệm chung, quyết định ai tham gia, thời gian – địa điểm (không phải người TẠO ra tài liệu — đó là AUTHOR); AUTHOR tạo và SỬA work product (việc “tìm defect” là của REVIEWER); FACILITATOR/moderator điều hành cuộc họp hiệu quả, hòa giải quan điểm (không sửa defect — đó là việc của author).\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.2 Roles and Responsibilities in a Formal Review."
  },
  {
    "n": 17,
    "ref": "Câu 29 [FL-2.3.2]",
    "stem": "Which of the following statements is the BEST example of non-functional testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testing based on the internal structure of a component or system"
      },
      {
        "k": "b",
        "t": "B) Tests related to \"what\" the system should do"
      },
      {
        "k": "c",
        "t": "C) Tests which calculate overtime pay for those employees entitled to such"
      },
      {
        "k": "d",
        "t": "D) Tests which capture the time it takes to save a file"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Kiểm thử PHI CHỨC NĂNG đánh giá “hệ thống vận hành TỐT ĐẾN ĐÂU”: đo THỜI GIAN LƯU MỘT FILE là kiểm thử HIỆU NĂNG (thời gian đáp ứng) — ví dụ non-functional điển hình ⇒ (d). (a) “dựa trên cấu trúc bên trong” là kiểm thử WHITE-BOX/cấu trúc — một chiều phân loại khác. (b) “what the system should do” là định nghĩa của kiểm thử CHỨC NĂNG. (c) tính lương làm thêm giờ là một QUY TẮC NGHIỆP VỤ — kiểm thử nó là functional testing.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.3.2 Non-functional Testing."
  },
  {
    "n": 18,
    "ref": "Câu 30 [FL-5.6]",
    "stem": "Which of the following is NOT a goal of writing an effective problem/bug report?",
    "opts": [
      {
        "k": "a",
        "t": "A) Explaining how to reproduce the problem"
      },
      {
        "k": "b",
        "t": "B) Analyzing the error so you can describe it in a minimum number of steps"
      },
      {
        "k": "c",
        "t": "C) Writing a report that is complete, easy to understand, and non-antagonistic"
      },
      {
        "k": "d",
        "t": "D) Illustrating how to fix the problem"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Bug report hiệu quả nhằm giúp người khác HIỂU và TÁI HIỆN vấn đề: mô tả CÁCH TÁI HIỆN failure (a); phân tích, RÚT GỌN về số bước tối thiểu để tái hiện — càng ngắn gọn càng dễ chẩn đoán (b); viết ĐẦY ĐỦ, DỄ HIỂU và KHÔNG CÔNG KÍCH — phê bình sản phẩm chứ không phê bình con người (c). Còn CHỈ CÁCH SỬA lỗi (d) KHÔNG phải mục tiêu của bug report: chẩn đoán nguyên nhân và quyết định cách sửa là việc của developer (debugging); tester chỉ cung cấp thông tin khách quan về failure ⇒ (d).\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.6 Defect Management (& Chương 1, mục 1.5.1)."
  },
  {
    "n": 19,
    "ref": "Câu 32 [FL-3.3]",
    "stem": "Which is a WRONG explanation about static analysis tools?",
    "opts": [
      {
        "k": "a",
        "t": "A) Static analysis tools measure the complexity of source code"
      },
      {
        "k": "b",
        "t": "B) Static analysis tools measure code coverage and the effectiveness of static testing"
      },
      {
        "k": "c",
        "t": "C) Static analysis tools find defects matching certain patterns in source code"
      },
      {
        "k": "d",
        "t": "D) Static analysis tools measure the level of compliance with coding rules"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Phát biểu SAI là (b): CODE COVERAGE (độ phủ mã) chỉ đo được khi THỰC THI test — đó là việc của COVERAGE MEASUREMENT tool trong kiểm thử ĐỘNG; công cụ phân tích tĩnh không chạy chương trình nên không đo được độ phủ, và cũng không có số đo “hiệu quả của kiểm thử tĩnh” ⇒ (b). Ba phát biểu còn lại đúng về static analysis tool: đo ĐỘ PHỨC TẠP của mã (ví dụ cyclomatic complexity) (a); tìm defect theo các MẪU (pattern) đã biết trong mã — biến chưa gán, mã chết, lỗ hổng bảo mật (c); kiểm tra mức TUÂN THỦ CHUẨN LẬP TRÌNH (coding rules/standards) (d).\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.3 (static analysis) & Chương 6, mục 6.1.1."
  },
  {
    "n": 20,
    "ref": "Câu 33 [FL-5.5.2]",
    "stem": "Which of the following alternatives contains typical PRODUCT risks to be considered by the test manager?",
    "opts": [
      {
        "k": "a",
        "t": "A) Error-prone areas, the potential harm to the user, poor product characteristics"
      },
      {
        "k": "b",
        "t": "B) Low quality of requirements, design, code and tests, as well as error-prone areas"
      },
      {
        "k": "c",
        "t": "C) Political problems, and delays in especially complex areas of the product"
      },
      {
        "k": "d",
        "t": "D) Problems in defining the right requirements, and potential failure areas in the software or system"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "PRODUCT risk là rủi ro về CHẤT LƯỢNG SẢN PHẨM: các VÙNG DỄ LỖI (error/failure-prone areas), KHẢ NĂNG GÂY HẠI cho người dùng (safety), các ĐẶC TÍNH SẢN PHẨM KÉM (chức năng, độ tin cậy, usability, hiệu năng…) — phương án (a) chỉ gồm các mục này ⇒ (a). Các phương án còn lại đều lẫn PROJECT risk: chất lượng thấp của yêu cầu/thiết kế/mã/test (b — vấn đề kỹ thuật của quá trình thực hiện), vấn đề chính trị và chậm trễ (c — vấn đề tổ chức/tiến độ), khó khăn khi xác định đúng yêu cầu (d — vấn đề của dự án). Đối chiếu Câu 24 phía trên (chiều ngược lại — chọn danh sách project risk).\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.5.2 Product and Project Risks."
  },
  {
    "n": 21,
    "ref": "Câu 34 [FL-2.2.4]",
    "stem": "Acceptance testing may occur at more than just a single test level, WITH THE EXCEPTION of which of the following?",
    "opts": [
      {
        "k": "a",
        "t": "A) Acceptance testing after a change has been released to the user community"
      },
      {
        "k": "b",
        "t": "B) Acceptance testing of the usability of a component may be done during component testing"
      },
      {
        "k": "c",
        "t": "C) Acceptance testing of a new functional enhancement may come before system testing"
      },
      {
        "k": "d",
        "t": "D) A COTS software product may be acceptance tested when it is installed or integrated"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Syllabus nêu đúng BA ví dụ acceptance testing xuất hiện ở các thời điểm/mức khác nhau: sản phẩm COTS có thể được acceptance test khi CÀI ĐẶT hoặc TÍCH HỢP (d); USABILITY của một COMPONENT có thể được acceptance test ngay trong component testing (b); acceptance test cho một CẢI TIẾN CHỨC NĂNG mới có thể diễn ra TRƯỚC system testing (c). Phương án (a) — “acceptance testing sau khi thay đổi ĐÃ PHÁT HÀNH đến cộng đồng người dùng” — không thuộc danh sách này: khi phần mềm đã release, việc kiểm thử thuộc phạm trù maintenance testing chứ không phải một hình thức acceptance testing ở mức khác ⇒ (a).\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2.4 Acceptance Testing."
  },
  {
    "n": 22,
    "ref": "Câu 35 [FL-2.3.1]",
    "stem": "Which of the following statements about functional testing is TRUE?",
    "opts": [
      {
        "k": "a",
        "t": "A) Functional testing is primarily concerned with \"what\" a system does, rather than \"how\" it does it"
      },
      {
        "k": "b",
        "t": "B) Control flow models and menu structure models are used primarily in functional testing"
      },
      {
        "k": "c",
        "t": "C) Functional testing includes, but is not limited to, load testing, stress testing and reliability testing"
      },
      {
        "k": "d",
        "t": "D) Functional testing is often referred to as \"structural\" testing by testers and developers"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Kiểm thử CHỨC NĂNG đánh giá các chức năng mà hệ thống PHẢI THỰC HIỆN — trả lời câu hỏi “WHAT” (hệ thống làm gì), trong khi “HOW” (làm thế nào bên trong) là địa hạt của kiểm thử cấu trúc ⇒ (a). (b) sai: mô hình LUỒNG ĐIỀU KHIỂN thuộc kiểm thử cấu trúc (white- box); mô hình cấu trúc menu dùng cho phủ giao diện — không phải công cụ chủ đạo của functional testing. (c) sai: load, stress, reliability là kiểm thử PHI CHỨC NĂNG. (d) sai: “structural testing” là tên khác của WHITE-BOX testing, không phải của functional testing.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.3.1 Functional Testing."
  },
  {
    "n": 23,
    "ref": "Câu 36 [FL-2.1.1]",
    "stem": "Which of the following software development models BEST exemplifies a model that does NOT support the principle of early testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The Waterfall model"
      },
      {
        "k": "b",
        "t": "B) The V-model"
      },
      {
        "k": "c",
        "t": "C) The Incremental development model"
      },
      {
        "k": "d",
        "t": "D) The Iterative development model"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Trong mô hình THÁC NƯỚC (Waterfall) nguyên bản, kiểm thử là MỘT GIAI ĐOẠN CUỐI, chỉ diễn ra sau khi toàn bộ phân tích – thiết kế – lập trình hoàn tất; defect trong yêu cầu/thiết kế bị phát hiện rất muộn với chi phí sửa cao — đi ngược nguyên tắc EARLY TESTING ⇒ (a). V-model (b) khắc phục đúng nhược điểm này: mỗi giai đoạn phát triển có mức kiểm thử tương ứng, hoạt động test bắt đầu song song từ sớm. Các mô hình tăng trưởng (c) và lặp (d) kiểm thử trong TỪNG chu kỳ ngắn — kiểm thử diễn ra sớm và liên tục.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.1.1 (& Chương 1, mục 1.3 – nguyên tắc 3)."
  },
  {
    "n": 24,
    "ref": "Câu 37 [FL-3.2.1]",
    "stem": "Given the review process main activities (a. Planning; b. Initiate review; c. Issue communication and analysis; d. Fixing and reporting) and the specific review activities (1. Creating defect reports; 2. Estimating effort; 3. Recording the updated status of defects; 4. Selecting the people to participate; 5. Distributing the work product and other material; 6. Evaluating the review findings): which of the following BEST matches the main activities with the specific activities? (See the figure.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 2-a, 5-a, 1-b, 4-b, 3-c, 6-d"
      },
      {
        "k": "b",
        "t": "B) 2-a, 4-a, 5-b, 6-c, 1-d, 3-d"
      },
      {
        "k": "c",
        "t": "C) 1-a, 4-b, 5-b, 2-d, 3-d, 6-c"
      },
      {
        "k": "d",
        "t": "D) 2-a, 4-b, 5-c, 6-d, 1-d, 3-d"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Ánh xạ chuẩn theo quy trình review: PLANNING (a) gồm ƯỚC LƯỢNG effort và khung thời gian (2) và LỰA CHỌN NGƯỜI THAM GIA (4); INITIATE REVIEW (b) gồm PHÂN PHỐI work product và tài liệu liên quan (5); ISSUE COMMUNICATION AND ANALYSIS (c) gồm ĐÁNH GIÁ các phát hiện của review — phân tích, đối chiếu exit criteria (6); FIXING AND REPORTING (d) gồm TẠO DEFECT REPORT (1) và GHI NHẬN TRẠNG THÁI CẬP NHẬT của defect (3). Vậy 2-a, 4-a, 5-b, 6-c, 1-d, 3-d ⇒ (b). (Đối chiếu Câu 17 – Đề 4 và Câu 19 – Đề 5 về năm hoạt động của quy trình review.)\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.1 Work Product Review Process."
  },
  {
    "n": 25,
    "ref": "Câu 40 [FL-3.2.3]",
    "stem": "Given the review types (a. Pair review; b. Walkthrough; c. Technical review; d. Inspection) and the review characteristics (1. Formal; 2. Informal; 3. Purposes include evaluating the quality of the work product under review and generating new ideas, e.g. brainstorming solutions; 4. Purposes include improving the software product and training the review participants): which of the following BEST matches the review type with the review characteristic? (See the figure.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) a-2; b-4; c-3; d-1"
      },
      {
        "k": "b",
        "t": "B) a-2; b-3; c-4; d-1"
      },
      {
        "k": "c",
        "t": "C) a-4; b-3; c-2; d-1"
      },
      {
        "k": "d",
        "t": "D) a-1; b-4; c-3; d-2"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "PAIR REVIEW (review giữa hai đồng nghiệp) là một hình thức INFORMAL review — không theo quy trình chính thức → a-2. INSPECTION là loại review CHÍNH THỨC NHẤT (quy trình chuẩn, rules/checklist, entry–exit criteria, số đo) → d-1. TECHNICAL REVIEW có mục tiêu gồm ĐÁNH GIÁ CHẤT LƯỢNG work product, tạo đồng thuận kỹ thuật và SINH Ý TƯỞNG MỚI (brainstorming giải pháp) → c-3. WALKTHROUGH có mục tiêu gồm tìm defect, CẢI THIỆN SẢN PHẨM phần mềm, cân nhắc phương án hiện thực khác, trao đổi ý tưởng và ĐÀO TẠO NGƯỜI THAM GIA (đặc biệt khi dùng để truyền đạt nội dung tài liệu) → b-4. Vậy a-2, b-4, c-3, d-1 ⇒ (a).\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.3 Review Types. PHẦN BỔ SUNG – CÂU HỎI THEO NỘI DUNG MỚI CỦA CTFL v4.0"
  },
  {
    "n": 26,
    "ref": "Câu bổ sung 1 [FL-1.1.2]",
    "stem": "According to CTFL v4.0, testing and debugging are separate activities. Which of the following BEST describes the debugging process when a dynamic test triggers a failure?",
    "opts": [
      {
        "k": "a",
        "t": "A) Reproduction of the failure, diagnosis (finding the root cause), and fixing the cause; afterwards, confirmation testing checks whether the fix resolved the issue"
      },
      {
        "k": "b",
        "t": "B) Writing new test cases, executing them, and reporting the results to the stakeholders"
      },
      {
        "k": "c",
        "t": "C) Reviewing the requirements, updating the test plan, and re-estimating the remaining test effort"
      },
      {
        "k": "d",
        "t": "D) Archiving the testware and releasing the test environment"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "v4.0 tách bạch: TESTING làm lộ failure (hoặc trực tiếp tìm defect qua kiểm thử tĩnh), còn DEBUGGING là hoạt động PHÁT TRIỂN gồm ba bước khi failure xuất hiện từ kiểm thử động: (1) TÁI HIỆN failure; (2) CHẨN ĐOÁN — truy ra nguyên nhân gốc (defect); (3) SỬA nguyên nhân đó. Sau khi sửa, CONFIRMATION testing (thường do chính người trước đó chạy test) kiểm tra bản sửa có giải quyết được vấn đề không; regression testing kiểm tác dụng phụ ⇒ (a). (b) là hoạt động kiểm thử, không phải debugging. (c) là quản lý kiểm thử. (d) là hoạt động test completion.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.1.2 Testing and Debugging."
  },
  {
    "n": 27,
    "ref": "Câu bổ sung 2 [FL-1.2.2]",
    "stem": "Which of the following BEST describes the difference between quality assurance (QA) and testing according to CTFL v4.0?",
    "opts": [
      {
        "k": "a",
        "t": "A) QA and testing are two names for the same activity"
      },
      {
        "k": "b",
        "t": "B) QA is process-oriented and focuses on ensuring that good processes are followed to prevent defects, while testing is a form of quality control — product-oriented, focusing on detecting defects and providing information about quality"
      },
      {
        "k": "c",
        "t": "C) QA is performed only by managers, while testing is performed only by developers"
      },
      {
        "k": "d",
        "t": "D) Testing prevents defects from being introduced, while QA detects the defects that testing missed"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 phân biệt rõ: QUALITY ASSURANCE hướng vào QUY TRÌNH — tạo niềm tin rằng các quy trình đúng đắn được tuân thủ, từ đó PHÒNG NGỪA defect ngay từ đầu (quy trình tốt sinh sản phẩm tốt); TESTING là một hình thức của QUALITY CONTROL — hướng vào SẢN PHẨM, gồm các hoạt động (kể cả tĩnh và động) nhằm PHÁT HIỆN defect và cung cấp thông tin về mức chất lượng đạt được. Kết quả kiểm thử được cả QA lẫn QC sử dụng: QC dùng để sửa defect, QA dùng làm phản hồi cải tiến quy trình ⇒ (b). (a) đánh đồng hai khái niệm; (c) phân vai sai; (d) đảo ngược vai trò phòng ngừa – phát hiện.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.2.2 Testing and Quality Assurance."
  },
  {
    "n": 28,
    "ref": "Câu bổ sung 3 [FL-2.1.2]",
    "stem": "CTFL v4.0 lists good testing practices that apply to any software development lifecycle. Which of the following is one of them?",
    "opts": [
      {
        "k": "a",
        "t": "A) For every software development activity there is a corresponding test activity, and test analysis and design for a given test level begin during the corresponding development phase"
      },
      {
        "k": "b",
        "t": "B) Testing activities should only start once the code is complete, to avoid wasted effort on changing requirements"
      },
      {
        "k": "c",
        "t": "C) Testers should not review work products until they are officially approved and baselined"
      },
      {
        "k": "d",
        "t": "D) Each test level should use exactly the same test objectives and the same tests to guarantee consistency"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Ba thực hành kiểm thử tốt áp dụng cho MỌI SDLC theo v4.0: (1) MỖI hoạt động phát triển có một hoạt động kiểm thử TƯƠNG ỨNG — nhờ đó mọi sản phẩm đều được kiểm với chất lượng; (2) MỖI test level có MỤC TIÊU RIÊNG, cụ thể cho level đó — giúp kiểm thử toàn diện mà tránh trùng lặp; (3) PHÂN TÍCH và THIẾT KẾ test cho một level BẮT ĐẦU ngay trong giai đoạn phát triển tương ứng (nguyên tắc kiểm thử sớm/shift-left), và tester tham gia review work product ngay khi có BẢN NHÁP ⇒ (a) gói đúng thực hành (1) và (3). (b), (c) trì hoãn kiểm thử — ngược nguyên tắc early testing; (d) mâu thuẫn với thực hành (2).\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.2 SDLC and Good Testing Practices."
  },
  {
    "n": 29,
    "ref": "Câu bổ sung 4 [FL-2.3]",
    "stem": "A company decides to RETIRE its legacy customer management system and move all customer data to a new platform. According to CTFL v4.0, which testing is typically required in this maintenance scenario?",
    "opts": [
      {
        "k": "a",
        "t": "A) No testing is needed, because the old system will be switched off anyway"
      },
      {
        "k": "b",
        "t": "B) Testing of data migration and, where required by the retiring application, testing of data archiving and restore/retrieve procedures"
      },
      {
        "k": "c",
        "t": "C) Only performance testing of the old system, to document its final state"
      },
      {
        "k": "d",
        "t": "D) Re-running the complete unit test suite of the old system one last time"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 nêu ba nhóm TÁC NHÂN kích hoạt maintenance testing: SỬA ĐỔI (cải tiến theo kế hoạch, sửa lỗi, hotfix), NÂNG CẤP/CHUYỂN ĐỔI MÔI TRƯỜNG (migration — nền tảng mới, kèm kiểm thử vận hành trên môi trường mới VÀ kiểm thử chuyển đổi dữ liệu khi dữ liệu từ ứng dụng khác được đưa vào), và LOẠI BỎ hệ thống (retirement). Khi hệ thống bị loại bỏ, cần kiểm thử DI TRÚ DỮ LIỆU (data migration) sang hệ thống mới; nếu nghiệp vụ đòi lưu giữ dữ liệu dài hạn thì kiểm thử cả việc LƯU TRỮ (archiving) và các thủ tục KHÔI PHỤC/TRUY XUẤT dữ liệu sau lưu trữ ⇒ (b). (a), (c), (d) đều bỏ sót nghĩa vụ bảo toàn dữ liệu — rủi ro lớn nhất của kịch bản retirement.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.3 Maintenance Testing."
  },
  {
    "n": 30,
    "ref": "Câu bổ sung 5 [FL-3.1.3]",
    "stem": "According to CTFL v4.0, which of the following defects is typically EASIER to find with static testing than with dynamic testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) A memory leak that only appears after the system has been running for 48 hours"
      },
      {
        "k": "b",
        "t": "B) Defects in requirements documents (e.g., ambiguities, contradictions, omissions), unreachable code, and deviations from coding standards"
      },
      {
        "k": "c",
        "t": "C) A calculation error that only occurs with a specific combination of user inputs at runtime"
      },
      {
        "k": "d",
        "t": "D) A timeout failure that occurs when the network latency exceeds two seconds"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Kiểm thử tĩnh xem xét TRỰC TIẾP work product mà không cần thực thi, nên nó tìm được — dễ và rẻ hơn, thậm chí là CÁCH DUY NHẤT — các loại defect mà kiểm thử động khó/không chạm tới: defect trong TÀI LIỆU YÊU CẦU (mơ hồ, mâu thuẫn, thiếu sót, thiếu chính xác), defect thiết kế, MÃ KHÔNG THỂ ĐẠT TỚI (unreachable/dead code), VI PHẠM CHUẨN LẬP TRÌNH, lỗ hổng bảo mật dạng mẫu, sai lệch giao diện giữa các module ⇒ (b). Ngược lại (a), (c), (d) là các failure chỉ BỘC LỘ KHI CHẠY (điều kiện thời gian dài, tổ hợp đầu vào cụ thể, độ trễ mạng) — địa hạt của kiểm thử động.\n📌 Kiến thức: CTFL v4.0 — Chương 3, mục 3.1.3 Static Testing and Dynamic Testing."
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
