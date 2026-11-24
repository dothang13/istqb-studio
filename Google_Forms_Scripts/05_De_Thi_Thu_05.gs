/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 05 (Giải chi tiết TV) (33 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 05 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (33 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-1.3]",
    "stem": "Which of the following is an example of the absence-of-errors fallacy?",
    "opts": [
      {
        "k": "a",
        "t": "A) Repeating the same test case will continue to find new defects even after dozens of executions"
      },
      {
        "k": "b",
        "t": "B) Other than trivial cases, it is not feasible to test all combinations of inputs and preconditions"
      },
      {
        "k": "c",
        "t": "C) A small number of modules contain the most defects"
      },
      {
        "k": "d",
        "t": "D) Since testing found very few defects, the system certainly will be successful"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "ABSENCE-OF-ERRORS FALLACY (ngụy biện “vắng lỗi”) — nguyên tắc 7: việc tìm thấy ít defect (hoặc sửa hết defect đã tìm thấy) KHÔNG bảo đảm hệ thống thành công; phần mềm vẫn có thể vô dụng nếu không đáp ứng nhu cầu và kỳ vọng của người dùng. Kết luận “tìm được rất ít defect ⇒ hệ thống chắc chắn thành công” chính là ngụy biện đó ⇒ (d). (a) là phát biểu NGƯỢC với pesticide paradox (nguyên tắc 5); (b) là nguyên tắc 2 — exhaustive testing bất khả thi; (c) là nguyên tắc 4 — defect clustering.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.3 Seven Testing Principles (nguyên tắc 7)."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-2.2.3]",
    "stem": "Which of the following alternatives describes the MAIN difference between system testing and acceptance testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) System testing is done on the development platform, while acceptance testing is done on the customer platform"
      },
      {
        "k": "b",
        "t": "B) System testing is done against the developers' interpretation of the requirements, while acceptance testing is done against the customer's understanding of them"
      },
      {
        "k": "c",
        "t": "C) System testing concentrates on functional testing, while acceptance testing concentrates on non-functional testing"
      },
      {
        "k": "d",
        "t": "D) Acceptance testing is a regression test for the changes implemented during system testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Khác biệt CĂN BẢN nằm ở TEST BASIS và góc nhìn: system testing xác minh hệ thống so với ĐẶC TẢ — tức theo cách đội phát triển/tổ chức phát triển diễn giải yêu cầu; acceptance testing đánh giá hệ thống theo NHU CẦU, KỲ VỌNG và cách hiểu của KHÁCH HÀNG/NGƯỜI DÙNG (nghiệp vụ thực tế, tiêu chí chấp nhận) để ra quyết định chấp nhận ⇒ (b). (a) chỉ là khác biệt về môi trường, không phải bản chất (system testing cũng nên chạy trên môi trường giống production). (c) sai: CẢ HAI mức đều kiểm cả chức năng lẫn phi chức năng. (d) sai hoàn toàn — acceptance không phải regression của system testing.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2.3 System Testing & 2.2.4 Acceptance Testing."
  },
  {
    "n": 3,
    "ref": "Câu 5 [FL-1.4.3]",
    "stem": "Which of the following is a difference between the contents of a test case specification and a test procedure specification?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test procedure specification is used only for automated test execution"
      },
      {
        "k": "b",
        "t": "B) The two terms are synonyms and have exactly the same contents"
      },
      {
        "k": "c",
        "t": "C) The test case specification specifies the sequence of actions for the execution of a test"
      },
      {
        "k": "d",
        "t": "D) The test procedure specification specifies the sequence of actions for the execution of a test"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "TEST CASE specification mô tả TỪNG test case: điều kiện tiên quyết, đầu vào, hành động và KẾT QUẢ MONG ĐỢI; còn TEST PROCEDURE specification mô tả TRÌNH TỰ HÀNH ĐỘNG để thực thi test — thứ tự các bước, thứ tự chạy các test case (kể cả thủ công lẫn tự động) ⇒ (d). (a) sai: test procedure áp dụng cho cả thực thi thủ công; kịch bản tự động (test script) chỉ là dạng “test procedure bằng ngôn ngữ máy”. (b) sai: hai khái niệm khác nhau rõ ràng. (c) gán nhầm đặc điểm của procedure cho test case.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.3 Test Work Products & ISTQB Glossary."
  },
  {
    "n": 4,
    "ref": "Câu 6 [FL-1.4.2]",
    "stem": "Which of the following alternatives describes the (fundamental) test process?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test planning – Test monitoring and control – Test analysis – Test design – Test implementation – Test execution – Test exit"
      },
      {
        "k": "b",
        "t": "B) Test planning – Test progress control – Test analysis – Test design – Test implementation – Test execution – Test completion"
      },
      {
        "k": "c",
        "t": "C) Test planning – Test monitoring – Test analysis – Test design – Test implementation – Test execution – Test completion"
      },
      {
        "k": "d",
        "t": "D) Test planning – Test monitoring and control – Test analysis – Test design – Test implementation – Test execution – Test completion"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Bảy nhóm hoạt động của quy trình kiểm thử theo syllabus: TEST PLANNING (lập kế hoạch) – TEST MONITORING AND CONTROL (giám sát VÀ kiểm soát — tên đầy đủ gồm cả hai vế) – TEST ANALYSIS (phân tích: “test cái gì”) – TEST DESIGN (thiết kế: “test thế nào”) – TEST IMPLEMENTATION (hiện thực) – TEST EXECUTION (thực thi) – TEST COMPLETION (hoàn tất) ⇒ (d). (a) sai tên hoạt động cuối (“test exit” không tồn tại — exit criteria là khái niệm khác). (b) sai “test progress control”. (c) thiếu vế “and control” trong tên hoạt động thứ hai.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities and Tasks."
  },
  {
    "n": 5,
    "ref": "Câu 7 [FL-3.1.2]",
    "stem": "You are working on a project on which any slippage in the test execution completion date would result in financial penalties for your employer. Achieving the planned delivery date is seen as the highest single priority. Which benefit of static techniques is most likely to convince management to use them?",
    "opts": [
      {
        "k": "a",
        "t": "A) Productivity improvements"
      },
      {
        "k": "b",
        "t": "B) Improved communication within the team"
      },
      {
        "k": "c",
        "t": "C) Reduced post-release support costs"
      },
      {
        "k": "d",
        "t": "D) Reduced testing cost and time"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Ưu tiên số một của dự án là GIỮ ĐÚNG NGÀY hoàn thành thực thi kiểm thử (trễ là bị phạt). Lợi ích của kỹ thuật tĩnh đánh trúng mối quan tâm đó là GIẢM CHI PHÍ VÀ THỜI GIAN KIỂM THỬ: defect bị loại từ sớm qua review/phân tích tĩnh khiến giai đoạn kiểm thử động ít failure hơn, ít vòng sửa–test lại hơn, do đó thực thi kiểm thử nhanh hơn và dễ về đích đúng hạn ⇒ (d). (a) và (b) là lợi ích có thật nhưng gián tiếp với mục tiêu “đúng ngày thực thi kiểm thử”. (c) giảm chi phí hỗ trợ SAU PHÁT HÀNH — xảy ra sau ngày bàn giao nên không thuyết phục được ban quản lý đang lo về deadline.\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.1.2 Benefits of Static Testing."
  },
  {
    "n": 6,
    "ref": "Câu 8 [FL-5.2.4]",
    "stem": "Tests have been specified for the latest software release and users have prioritised these. However, there are some dependencies between tests, as shown in the table in the figure. Which test execution schedule BEST meets the prioritisation and dependency conditions?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 3, 5, 7, 10, 2, 4, 6, 8, 9, 1"
      },
      {
        "k": "b",
        "t": "B) 5, 7, 4, 3, 9, 10, 1, 6, 8, 2"
      },
      {
        "k": "c",
        "t": "C) 6, 1, 2, 9, 4, 3, 5, 7, 8, 10"
      },
      {
        "k": "d",
        "t": "D) 1, 4, 3, 5, 2, 7, 9, 10, 6, 8"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Ràng buộc phụ thuộc: 4←1, 3←4, 8←3, 9←3, 10←9, 6←5, 7←2. Ưu tiên: High = 3, 5, 7, 10; Medium = 2, 4, 6, 8, 9; Low = 1. Kiểm từng phương án: (a) chạy 3 đầu tiên nhưng 3 phụ thuộc 4 (chưa chạy) — vi phạm. (b) chạy 7 khi 2 chưa chạy, chạy 4 khi 1 chưa chạy — vi phạm. (c) chạy 6 khi 5 chưa chạy — vi phạm. (d) 1→4→3 (thỏa chuỗi tiền đề của test High số 3), 5 (High), 2→7 (mở khóa test High số 7), 9→10 (mở khóa test High số 10), rồi 6, 8 (Medium) — mọi phụ thuộc đều thỏa và các test High được chạy sớm nhất có thể sau tiền đề của chúng ⇒ (d). Test Low số 1 buộc phải chạy đầu vì là gốc của chuỗi 1→4→3→{8, 9→10}.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2.4 Test Execution Schedule."
  },
  {
    "n": 7,
    "ref": "Câu 10 [FL-3.1]",
    "stem": "Which of the following are included as part of static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Inspection of work products and analysis of software artifacts using tools"
      },
      {
        "k": "b",
        "t": "B) Inspections, execution of the software, and walkthroughs"
      },
      {
        "k": "c",
        "t": "C) Inspections, walkthroughs, and comparison of expected to actual results"
      },
      {
        "k": "d",
        "t": "D) Walkthroughs, simulation, and defect tracking"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Kiểm thử tĩnh gồm hai nhánh: REVIEW các work product (inspection, walkthrough, technical review, informal review — do con người xem xét) và STATIC ANALYSIS (phân tích các sản phẩm phần mềm bằng CÔNG CỤ, không thực thi mã) ⇒ (a) gói đúng cả hai nhánh. (b) chứa “execution of the software” — thực thi là kiểm thử ĐỘNG. (c) “so sánh kết quả mong đợi với thực tế” chỉ tồn tại khi CHẠY phần mềm — thuộc kiểm thử động. (d) “simulation” là chạy mô phỏng (động) và “defect tracking” là hoạt động quản lý defect, không phải kiểm thử tĩnh.\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.1 Static Testing Basics."
  },
  {
    "n": 8,
    "ref": "Câu 11 [FL-2.2.3]",
    "stem": "Which of the following alternatives correctly describes system testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) System testing only checks functional requirements; non-functional requirements shall be validated in a review"
      },
      {
        "k": "b",
        "t": "B) System testing only checks non-functional requirements; functional requirements shall be validated in a review"
      },
      {
        "k": "c",
        "t": "C) System testing checks functional as well as non-functional requirements"
      },
      {
        "k": "d",
        "t": "D) System testing checks only the requirements specified in the requirements specification"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "System testing quan tâm đến HÀNH VI TOÀN HỆ THỐNG end-to-end và bao gồm CẢ kiểm thử chức năng LẪN phi chức năng (hiệu năng, độ tin cậy, usability…) ⇒ (c). (a) và (b) đều cắt xén phạm vi sai — đặc tính phi chức năng phải được KIỂM THỬ ĐỘNG ở mức hệ thống chứ không thể chỉ “xác nhận qua review”. (d) quá hẹp: test basis của system testing còn gồm use case, quy trình nghiệp vụ, đặc tả rủi ro…, và tester giỏi còn phát hiện cả hành vi ngoài đặc tả (yêu cầu ngầm định).\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2.3 System Testing."
  },
  {
    "n": 9,
    "ref": "Câu 12 [FL-5.1.2]",
    "stem": "A software company adopts the V-model as their development lifecycle. Which of the following contains roles of a TESTER in this company? (A) Review test plans and set up test environments; (B) Introduce suitable metrics to measure the testing progress; (C) Coordinate the test strategy with the project managers; (D) Decide what should be automated, to what degree, and how.",
    "opts": [
      {
        "k": "a",
        "t": "A) A"
      },
      {
        "k": "b",
        "t": "B) B"
      },
      {
        "k": "c",
        "t": "C) C"
      },
      {
        "k": "d",
        "t": "D) D"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Nhiệm vụ của TESTER: tham gia REVIEW test plan (góp ý kế hoạch), THIẾT LẬP MÔI TRƯỜNG kiểm thử (thường phối hợp với quản trị hệ thống/mạng), review test case, thực thi test, ghi log, báo cáo defect… — đúng nội dung (A) ⇒ (a). Các mục còn lại là nhiệm vụ của TEST MANAGER/test leader: (B) đưa ra số đo phù hợp để đo tiến độ kiểm thử; (C) điều phối chiến lược và kế hoạch kiểm thử với project manager; (D) quyết định cái gì cần tự động hóa, ở mức độ nào và bằng cách nào.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.1.2 Tasks of a Test Manager and Tester."
  },
  {
    "n": 10,
    "ref": "Câu 13 [FL-4.3]",
    "stem": "Which of the following errors CANNOT be found with structure-based (white-box) testing techniques? (A) Memory is leaking; (B) Data structures that are used before initialization; (C) Features that are only partially implemented; (D) Division by zero.",
    "opts": [
      {
        "k": "a",
        "t": "A) A"
      },
      {
        "k": "b",
        "t": "B) B"
      },
      {
        "k": "c",
        "t": "C) C"
      },
      {
        "k": "d",
        "t": "D) D"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Kỹ thuật structure-based suy dẫn test từ MÃ ĐÃ CÓ — chúng chỉ kiểm được những gì ĐÃ ĐƯỢC HIỆN THỰC. Tính năng mới hiện thực MỘT PHẦN nghĩa là phần còn thiếu KHÔNG TỒN TẠI trong mã: không có câu lệnh/nhánh nào để phủ, nên độ phủ cấu trúc dù đạt 100% cũng không phát hiện được sự THIẾU HỤT so với đặc tả — loại defect “omission” này chỉ lộ ra khi so với test basis (kỹ thuật black-box) ⇒ (c). Ngược lại, (A) rò rỉ bộ nhớ, (B) dùng cấu trúc dữ liệu trước khi khởi tạo, (D) chia cho 0 đều nằm TRONG mã hiện có — các test white-box thực thi đủ đường đi có thể kích hoạt/phát hiện chúng (kết hợp công cụ phân tích).\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3 White-box Test Techniques (đối chiếu 4.2 black-box)."
  },
  {
    "n": 11,
    "ref": "Câu 14 [FL-1.4.2]",
    "stem": "Which of the following is an example of tasks MOST associated with the test design activity?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test data, derived from production data, is loaded into the test environment"
      },
      {
        "k": "b",
        "t": "B) The project manager updates the project schedule as key test tasks are completed"
      },
      {
        "k": "c",
        "t": "C) The identification of test execution and test automation tools"
      },
      {
        "k": "d",
        "t": "D) Every day, the tester notes the status of his/her test cases in preparation for daily reports"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "TEST DESIGN trả lời câu hỏi “test THẾ NÀO”: cụ thể hóa test condition thành test case, xác định test data cần thiết, THIẾT KẾ MÔI TRƯỜNG kiểm thử và NHẬN DIỆN HẠ TẦNG, CÔNG CỤ cần dùng (bao gồm công cụ thực thi và tự động hóa) ⇒ (c). (a) NẠP dữ liệu vào môi trường là việc của TEST IMPLEMENTATION (chuẩn bị mọi thứ sẵn sàng để chạy). (b) cập nhật lịch dự án là việc quản lý dự án. (d) ghi nhận trạng thái test case hằng ngày phục vụ báo cáo thuộc TEST MONITORING.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities and Tasks (test design)."
  },
  {
    "n": 12,
    "ref": "Câu 16 [FL-2.2.4]",
    "stem": "The following descriptions are related to acceptance testing. Which of the following alternatives is NOT true?",
    "opts": [
      {
        "k": "a",
        "t": "A) Site acceptance testing determines whether or not a component or system satisfies the user/customer needs and fits within the business processes, normally including hardware as well as software"
      },
      {
        "k": "b",
        "t": "B) Acceptance testing is formal testing with respect to user needs, requirements and business processes, conducted to determine whether or not a system satisfies the acceptance criteria and to enable the users, customers or other authorized entity to determine whether or not to accept the system"
      },
      {
        "k": "c",
        "t": "C) User acceptance testing verifies the fitness for use of the system from a business perspective"
      },
      {
        "k": "d",
        "t": "D) Regulation acceptance testing verifies the fitness for use of the system and its usability from a business perspective"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Phát biểu SAI là (d): nó gán cho REGULATION acceptance testing định nghĩa của USER acceptance testing. Regulation (regulatory/contract & regulation) acceptance testing kiểm tra sự TUÂN THỦ các QUY ĐỊNH bắt buộc — của chính phủ, pháp luật, an toàn — đúng như phương án (e) mô tả ⇒ (d). Các phương án còn lại đều đúng: (a) site acceptance (một dạng operational/site AT) xác nhận hệ thống — gồm cả phần cứng lẫn phần mềm — đáp ứng nhu cầu và khớp quy trình nghiệp vụ tại nơi triển khai; (b) là định nghĩa chuẩn của acceptance testing; (c) UAT xác nhận “fitness for use” từ góc nhìn nghiệp vụ của người dùng. (Câu này có 5 phương án a–e theo đề gốc.)\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2.4 Acceptance Testing."
  },
  {
    "n": 13,
    "ref": "Câu 19 [FL-3.2.1]",
    "stem": "The fundamental process for a formal review comprises which of the following main phases?",
    "opts": [
      {
        "k": "a",
        "t": "A) Initiate review – Reviewer selection – Individual review – Issue communication and analysis – Rework"
      },
      {
        "k": "b",
        "t": "B) Planning &amp; preparation – Overview meeting – Individual review – Fix – Report"
      },
      {
        "k": "c",
        "t": "C) Plan – Initiate review – Individual review – Issue communication and analysis – Fix defects &amp; report"
      },
      {
        "k": "d",
        "t": "D) Preparation – Issue detection – Issue communication and analysis – Rework – Report"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Năm hoạt động của quy trình review theo syllabus: (1) PLANNING — xác định phạm vi, effort, thời gian, loại review, người tham gia, entry/exit criteria; (2) INITIATE REVIEW — phân phối tài liệu, giải thích mục tiêu – quy trình, trả lời thắc mắc; (3) INDIVIDUAL REVIEW — mỗi người tự review, ghi nhận defect tiềm ẩn, khuyến nghị, câu hỏi; (4) ISSUE COMMUNICATION AND ANALYSIS — trao đổi (thường trong cuộc họp), phân tích, gán chủ sở hữu và trạng thái cho issue, đánh giá theo exit criteria; (5) FIXING AND REPORTING — sửa defect, cập nhật trạng thái, báo cáo. Trình tự này khớp với phương án (c) ⇒ (c). Các phương án khác chứa bước không tồn tại (reviewer selection, overview meeting, issue detection như một phase riêng).\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.1 Work Product Review Process."
  },
  {
    "n": 14,
    "ref": "Câu 20 [FL-4.3]",
    "stem": "When should structural (white-box) testing be used?",
    "opts": [
      {
        "k": "a",
        "t": "A) Structural testing should be used only in component testing"
      },
      {
        "k": "b",
        "t": "B) Structural testing can be used at any test level; however, structural techniques are best used after specification-based techniques"
      },
      {
        "k": "c",
        "t": "C) Structural testing should be used mainly in integration testing to verify that the structure of the product is sound and robust; additionally, it may be applied at later test levels"
      },
      {
        "k": "d",
        "t": "D) Structural testing must be used in component testing but may be used at later test levels"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Kỹ thuật cấu trúc áp dụng được ở MỌI test level (statement/decision coverage ở component; phủ luồng gọi giữa module ở integration; phủ menu/luồng nghiệp vụ ở system…), nhưng vai trò TỐT NHẤT của chúng là BỔ SUNG SAU các kỹ thuật specification-based: sau khi thiết kế test từ đặc tả, dùng số đo độ phủ cấu trúc để phát hiện phần mã CHƯA được test rồi thiết kế thêm test — vì tự thân cấu trúc mã không cho biết kết quả mong đợi ⇒ (b). Các phương án còn lại đều giới hạn sai phạm vi (“chỉ/chủ yếu/bắt buộc ở một mức”). (Tham khảo thêm Câu 28 – Đề 2 về việc mọi loại kiểm thử dùng được ở mọi mức, và Câu bổ sung 10 – Đề 3 về giá trị của white-box.)\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3 White-box Test Techniques."
  },
  {
    "n": 15,
    "ref": "Câu 21 [FL-2.2]",
    "stem": "Which alternative describes the correct classification of the reasons why there are different levels of testing? (See the figure for statements A–E.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) A and B are true; C, D and E are false"
      },
      {
        "k": "b",
        "t": "B) A, C and D are true; B and E are false"
      },
      {
        "k": "c",
        "t": "C) B, C and D are true; A and E are false"
      },
      {
        "k": "d",
        "t": "D) C, D and E are true; A and B are false"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "(A) ĐÚNG: mỗi test level có nhiệm vụ xác định và tập trung vào các loại defect ĐIỂN HÌNH của level đó (component — logic đơn vị; integration — giao diện; system — hành vi end- to-end; acceptance — sự phù hợp nhu cầu). (C) ĐÚNG: kiểm thử ở nhiều mức giúp defect được phát hiện SỚM hơn (ngay tại mức thấp thay vì dồn về sau — sớm thì rẻ). (D) ĐÚNG: thực thi các mức sớm giúp GIẢM TẢI cho các mức sau khỏi quá nhiều bug (hệ thống vào system test đã tương đối sạch lỗi đơn vị). (B) SAI: “do những người khác nhau thực thi” không phải LÝ DO tồn tại các mức — cùng một người có thể chạy nhiều mức; phân công nhân sự là hệ quả tổ chức. (E) SAI: chia mức kiểm thử không nhằm mục đích “cho dễ lập kế hoạch/theo dõi dự án”. Vậy A, C, D đúng; B, E sai ⇒ (b).\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2 Test Levels."
  },
  {
    "n": 16,
    "ref": "Câu 23 [FL-5.1.1]",
    "stem": "You are working as the manager of an independent test team. At a project meeting, you are explaining the results of your testing so far. You show the team that, while testing is proceeding productively, it is taking a while to get some critical bugs and test failures resolved. Another manager comments that he is concerned that the test team is delaying the release of the software. Which of the following is a drawback of independent testing illustrated by this manager's comment?",
    "opts": [
      {
        "k": "a",
        "t": "A) Independent testers can verify assumptions that other people made"
      },
      {
        "k": "b",
        "t": "B) The test team is seen as responsible for the delays"
      },
      {
        "k": "c",
        "t": "C) Independent testers see other and different defects, and are unbiased"
      },
      {
        "k": "d",
        "t": "D) The test team is isolated from the rest of the project team"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Một hạn chế kinh điển của đội kiểm thử độc lập: đội test dễ bị xem là NÚT THẮT CỔ CHAI và bị QUY TRÁCH NHIỆM cho việc trễ phát hành — dù nguyên nhân thật là defect (và tốc độ sửa defect của bên phát triển). Bình luận của vị manager đúng là biểu hiện đó ⇒ (b). (a) và (c) là LỢI ÍCH của độc lập, không phải hạn chế. (d) “bị cô lập khỏi nhóm dự án” cũng là một hạn chế có thật của độc lập nhưng KHÔNG phải điều tình huống này minh họa — ở đây đội test vẫn đang họp và trao đổi với dự án. (Tham khảo Câu bổ sung 6 – Đề 4 về các hạn chế của tính độc lập theo v4.0.)\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.1.1 Independent Testing."
  },
  {
    "n": 17,
    "ref": "Câu 25 [FL-5.6]",
    "stem": "Which of the following alternatives describes incident management NOT correctly?",
    "opts": [
      {
        "k": "a",
        "t": "A) Incident management should show product quality through the use of metrics"
      },
      {
        "k": "b",
        "t": "B) Registration of problems, faults and failures is required to manage incidents"
      },
      {
        "k": "c",
        "t": "C) New software requirements should be defined and implemented"
      },
      {
        "k": "d",
        "t": "D) Incident management deals with developing proposals to correct faults"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "“Định nghĩa và hiện thực YÊU CẦU PHẦN MỀM MỚI” thuộc quy trình QUẢN LÝ THAY ĐỔI/phát triển yêu cầu — hoàn toàn nằm ngoài incident (defect) management ⇒ (c) là phát biểu sai. Ba phương án còn lại mô tả đúng: (a) dữ liệu incident cung cấp SỐ ĐO phản ánh chất lượng sản phẩm (mật độ defect, xu hướng tìm/sửa); (b) muốn quản lý được thì mọi vấn đề/fault/failure phải được GHI NHẬN (đăng ký) với đầy đủ thông tin; (d) quy trình xử lý incident bao gồm phân tích và ĐỀ XUẤT phương án sửa fault (hoặc các cách xử lý khác), theo dõi đến khi đóng.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.6 Defect (Incident) Management."
  },
  {
    "n": 18,
    "ref": "Câu 26 [FL-3.1.2]",
    "stem": "Which of the statements about reviews is correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) Any type of review can help find bugs early, resulting in cost savings"
      },
      {
        "k": "b",
        "t": "B) It is wise to exclude testers from reviews of specifications, because reviewing can bias them"
      },
      {
        "k": "c",
        "t": "C) Reviews are useful because they help management to assign responsibility for failures to individual developers"
      },
      {
        "k": "d",
        "t": "D) The requirement of additional time for reviews is likely to result in a longer development cycle"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "MỌI loại review — từ informal đến inspection — đều giúp phát hiện defect SỚM ngay trong work product (yêu cầu, thiết kế, mã), khi chi phí sửa còn rẻ, nhờ đó TIẾT KIỆM tổng chi phí ⇒ (a). (b) sai và ngược khuyến nghị: tester tham gia review đặc tả giúp phát hiện vấn đề sớm, hiểu sản phẩm và chuẩn bị test sớm — không hề “làm thiên lệch”. (c) sai nghiêm trọng về văn hóa review: kết quả review KHÔNG ĐƯỢC dùng để quy trách nhiệm/đánh giá cá nhân. (d) sai: thời gian bỏ vào review được bù lại nhiều lần nhờ giảm rework — tổng chu kỳ phát triển thường NGẮN đi.\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.1.2 Benefits of Static Testing & 3.2.5 Success Factors."
  },
  {
    "n": 19,
    "ref": "Câu 27 [FL-1.5.1]",
    "stem": "Which of the following is a CORRECT statement about how a tester should communicate about defects, test results and other test information?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers should emphasize the benefits of testing, such as increased quality and reduced risk"
      },
      {
        "k": "b",
        "t": "B) Testers should take a command-and-control approach with the project team"
      },
      {
        "k": "c",
        "t": "C) Testers should reject all questions about their test findings and information"
      },
      {
        "k": "d",
        "t": "D) Testers should include personal opinions and judgements in defect reports and review findings"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Giao tiếp của tester cần mang tinh thần HỢP TÁC và tập trung vào LỢI ÍCH: nhấn mạnh giá trị mà kiểm thử mang lại — chất lượng tăng, rủi ro giảm, thông tin cho quyết định — giúp các bên đón nhận thông tin “xấu” (defect) một cách xây dựng ⇒ (a). (b) mệnh lệnh – kiểm soát phá vỡ quan hệ cộng tác. (c) từ chối trả lời chất vấn đi ngược tính minh bạch — tester phải sẵn sàng giải thích phát hiện của mình. (d) defect report và kết quả review phải KHÁCH QUAN, dựa trên sự kiện, không chèn ý kiến/phán xét cá nhân. (Tham khảo Câu bổ sung 5 – Đề 4 về cách báo defect theo v4.0.)\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.5.1 (kỹ năng giao tiếp) & Chương 5, mục 5.6."
  },
  {
    "n": 20,
    "ref": "Câu 28 [FL-5.3.2]",
    "stem": "Which of the following would NOT typically be covered in a test summary report?",
    "opts": [
      {
        "k": "a",
        "t": "A) The risks associated with unresolved defects found during testing"
      },
      {
        "k": "b",
        "t": "B) Any features of the system that were not tested, along with the reasons"
      },
      {
        "k": "c",
        "t": "C) Whether there is any economic benefit in continuing testing beyond the planned date"
      },
      {
        "k": "d",
        "t": "D) An analysis of lessons learned to determine changes for future projects"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Báo cáo tổng kết kiểm thử TƯỜNG THUẬT và ĐÁNH GIÁ những gì đã/chưa làm: rủi ro gắn với các defect chưa xử lý (a), phạm vi không được kiểm thử kèm lý do (b), bài học kinh nghiệm cho dự án tương lai (d) — đều là nội dung điển hình. Còn việc PHÂN TÍCH LỢI ÍCH KINH TẾ của việc tiếp tục kiểm thử quá ngày kế hoạch (c) là một phân tích quyết định quản lý (bài toán chi phí – lợi ích, thuộc quản trị dự án/quyết định release), không phải nội dung chuẩn của test summary report ⇒ (c). (Đối chiếu Câu 18 phía trên: tiêu chí đạt/rớt cũng không thuộc báo cáo — nó thuộc test plan.)\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.3.2 Contents of Test Reports."
  },
  {
    "n": 21,
    "ref": "Câu 29 [FL-5.4]",
    "stem": "Which of the following is a way in which configuration management supports testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) It automatically determines the location of any defects found"
      },
      {
        "k": "b",
        "t": "B) It has no benefits; configuration management does not support testing"
      },
      {
        "k": "c",
        "t": "C) It uniquely identifies the tested item"
      },
      {
        "k": "d",
        "t": "D) It ensures that the code has been unit tested"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Quản lý cấu hình bảo đảm mọi item (test object, test basis, testware) được ĐỊNH DANH DUY NHẤT, kiểm soát phiên bản, ghi nhận thay đổi và truy vết lẫn nhau — nhờ đó biết CHÍNH XÁC phiên bản nào đã được test bằng bộ test phiên bản nào, tái lập được kết quả ⇒ (c). (a) hoang đường — CM không định vị defect. (b) phủ nhận sạch trơn vai trò của CM. (d) CM không bảo đảm mã đã được unit test — đó là việc của quy trình kiểm thử/entry criteria (CM chỉ có thể lưu bằng chứng). (Tham khảo Câu 21 – Đề 4 về công cụ CM và Câu 27 – Đề 3 về hậu quả khi CM lỏng lẻo.)\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.4 Configuration Management."
  },
  {
    "n": 22,
    "ref": "Câu 30 [FL-3.2.3]",
    "stem": "Which of the statements about walkthroughs is NOT true? (A) Pre-meeting preparation, documentation and distribution of results are optional for a walkthrough; (B) A walkthrough is led by a moderator and requires pre-meeting preparation and post-meeting follow-up; (C) A walkthrough may take the form of scenarios, dry runs and peer-group participation; (D) The purpose of a walkthrough is to establish a common understanding of a document and to find possible defects in it.",
    "opts": [
      {
        "k": "a",
        "t": "A) A"
      },
      {
        "k": "b",
        "t": "B) B"
      },
      {
        "k": "c",
        "t": "C) C"
      },
      {
        "k": "d",
        "t": "D) D"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Phát biểu SAI là (B): walkthrough do chính TÁC GIẢ (author) dẫn dắt — không phải moderator — và việc CHUẨN BỊ TRƯỚC của người tham gia là TÙY CHỌN, không bắt buộc; follow-up cũng không phải yêu cầu cố định ⇒ (b). Các phát biểu còn lại đúng với đặc điểm walkthrough: (A) chuẩn bị trước cuộc họp, việc lập biên bản (do scribe ghi) và phân phối kết quả đều optional; (C) hình thức có thể là trình bày theo kịch bản (scenarios), chạy thử “khan” (dry runs), có sự tham gia của đồng nghiệp (peer group); (D) mục đích gồm tìm defect, cải thiện sản phẩm, cân nhắc cách hiện thực khác và TẠO HIỂU BIẾT CHUNG về tài liệu. (Tham khảo Câu 35 – Đề 2 về nhận diện walkthrough.)\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.3 Review Types (walkthrough)."
  },
  {
    "n": 23,
    "ref": "Câu 31 [FL-4.3.1]",
    "stem": "The program code in the figure is given (an IF Age &gt; 18 block containing a nested IF Gender = \"Male\" … ELSE …, followed by a separate IF Country = \"Vietnam\" … ELSE …). How many test cases do you need for 100% statement coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 1"
      },
      {
        "k": "b",
        "t": "B) 2"
      },
      {
        "k": "c",
        "t": "C) 3"
      },
      {
        "k": "d",
        "t": "D) 4"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Các câu lệnh cần phủ: CustomerPotential := 1.000 (cần Age > 18); ProductSet := \"Technique\" (cần Age > 18 VÀ Male); ProductSet := \"Clothes\" (cần Age > 18 VÀ không Male); International := \"No\" (cần Country = Vietnam); International := \"Yes\" (cần Country ≠ Vietnam). Hai lệnh gán ProductSet loại trừ nhau nên tối thiểu phải 2 test; và 2 test là ĐỦ, ví dụ: T1 (Age 25, Male, Vietnam) phủ CustomerPotential + \"Technique\" + \"No\"; T2 (Age 30, Female, Nhật) phủ \"Clothes\" + \"Yes\" ⇒ (b). Lưu ý: 100% STATEMENT không đòi Age ≤ 18 (nhánh false của IF không chứa câu lệnh) — đó là điểm khác với decision coverage (Câu 35 – Đề 4 dùng đoạn mã tương tự cần 3 test cho decision).\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.1 Statement Coverage."
  },
  {
    "n": 24,
    "ref": "Câu 32 [FL-4.2.3]",
    "stem": "The decision table in the figure reflects a golf club's pricing structure for green fees and buggy/cart hire. What is the expected result for each of the following two test cases? TC1 – Paul is not a full member, is a Loyalty Card holder, and requests to play 18 holes with a buggy/cart. TC2 – Cheryl is not a full member, does not have a Loyalty Card, and requests to play 9 holes with a buggy/cart.\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) TC1 – £18 total charge including buggy hire; TC2 – £16 total charge but no buggy allowed"
      },
      {
        "k": "b",
        "t": "B) TC1 – £17 total charge but no buggy allowed; TC2 – £21 total charge including buggy hire"
      },
      {
        "k": "c",
        "t": "C) TC1 – £23 total charge including buggy hire; TC2 – £21 total charge including buggy hire"
      },
      {
        "k": "d",
        "t": "D) TC1 – £23 total charge including buggy hire; TC2 – £16 total charge but no buggy allowed"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "TC1 (không phải hội viên đầy đủ, CÓ Loyalty Card, 18 hố, yêu cầu buggy) khớp RULE 3: phí sân £18 + buggy được phép với giá £5 → tổng £23 gồm cả thuê buggy. TC2 (không hội viên, KHÔNG Loyalty Card, 9 hố, yêu cầu buggy) khớp RULE 7 (điều kiện buggy là “don't care”): phí sân £16, nhưng hành động “Buggy/Cart allowed” = N → KHÔNG được thuê buggy → tổng chỉ £16. Vậy TC1 = £23 có buggy, TC2 = £16 không buggy ⇒ (d). Bẫy của (a): dùng phí £18 nhưng quên cộng £5 buggy; của (c): tưởng khách không thẻ vẫn được thuê buggy.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.3 Decision Table Testing."
  },
  {
    "n": 25,
    "ref": "Câu 36 [FL-5.2.5]",
    "stem": "Testing effort can depend on a number of factors. Which one of the following is MOST likely to impact the amount of effort required?",
    "opts": [
      {
        "k": "a",
        "t": "A) The predicted number of defects and the amount of rework required"
      },
      {
        "k": "b",
        "t": "B) The responsibilities for testers and developers being clearly defined"
      },
      {
        "k": "c",
        "t": "C) The ratio of developers to testers in the project team"
      },
      {
        "k": "d",
        "t": "D) The planned use of a project management tool to schedule tasks"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Các nhóm yếu tố ảnh hưởng công sức kiểm thử: đặc điểm SẢN PHẨM (độ phức tạp, chất lượng đặc tả, yêu cầu chất lượng), đặc điểm QUY TRÌNH phát triển, đặc điểm CON NGƯỜI, và KẾT QUẢ KIỂM THỬ — trong đó SỐ LƯỢNG DEFECT dự kiến và KHỐI LƯỢNG LÀM LẠI (rework) tác động trực tiếp và mạnh nhất: càng nhiều defect thì càng nhiều chu kỳ báo lỗi – sửa – confirmation test – regression test ⇒ (a). (b) trách nhiệm rõ ràng là yếu tố quy trình giúp GIẢM lãng phí chứ không quyết định khối lượng; (c) tỷ lệ dev:tester ảnh hưởng tiến độ/phân bổ chứ không phải tổng effort cần thiết; (d) công cụ lập lịch của PM hầu như không đổi công sức kiểm thử.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2.5 Factors Influencing the Test Effort."
  },
  {
    "n": 26,
    "ref": "Câu 38 [FL-4.2.2]",
    "stem": "A holiday club restricts bookings to people between the ages of 18 and 30 inclusive. Using three-point boundary values, what ages would be required to test the lower and upper boundaries?",
    "opts": [
      {
        "k": "a",
        "t": "A) 17, 18, 19, 29, 30, 31"
      },
      {
        "k": "b",
        "t": "B) 17, 18, 19, 30, 31, 32"
      },
      {
        "k": "c",
        "t": "C) 18, 19, 20, 28, 29, 30"
      },
      {
        "k": "d",
        "t": "D) 16, 17, 18, 30, 31, 32"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Miền hợp lệ là [18, 30]. BVA 3 ĐIỂM lấy, tại MỖI biên, ba giá trị: ngay dưới biên – tại biên – ngay trên biên. Biên dưới 18 → {17, 18, 19}; biên trên 30 → {29, 30, 31}. Hợp lại: 17, 18, 19, 29, 30, 31 ⇒ (a). (b) lệch ở biên trên (30, 31, 32 là bộ ba quanh giá trị 31 — sai biên); (c) toàn giá trị nằm trong miền hợp lệ, thiếu các giá trị không hợp lệ sát biên; (d) lệch ở cả hai biên. (So sánh: BVA 2 điểm chỉ cần {17, 18} và {30, 31} — xem Câu 19 – Đề 3.)\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.2 Boundary Value Analysis."
  },
  {
    "n": 27,
    "ref": "Câu 39 [FL-1.4.2]",
    "stem": "Which of the following alternatives describes something that is NOT a major task of test implementation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Executing tests either manually or by using test execution tools"
      },
      {
        "k": "b",
        "t": "B) Developing and prioritizing test procedures and, potentially, creating automated test scripts"
      },
      {
        "k": "c",
        "t": "C) Creating test suites from the test procedures and (if any) automated test scripts"
      },
      {
        "k": "d",
        "t": "D) Preparing test data and ensuring it is properly loaded in the test environment"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "THỰC THI test (thủ công hoặc bằng công cụ) thuộc hoạt động TEST EXECUTION — giai đoạn sau, không phải test implementation ⇒ (a). Ba phương án còn lại đều là nhiệm vụ chính của TEST IMPLEMENTATION (“mọi thứ đã sẵn sàng để chạy test chưa?”): xây dựng và sắp thứ tự ưu tiên các test procedure, viết kịch bản tự động nếu có (b); gom test procedure/script thành các TEST SUITE và lập lịch thực thi (c); chuẩn bị test data và bảo đảm dữ liệu được nạp đúng vào môi trường, dựng và xác minh môi trường kiểm thử (d).\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities and Tasks (test implementation)."
  },
  {
    "n": 28,
    "ref": "Câu 40 [FL-3.3]",
    "stem": "Which alternative contains ONLY defects which can be discovered by static analysis?",
    "opts": [
      {
        "k": "a",
        "t": "A) Referencing a variable with an undefined value, unreachable (dead) code, security vulnerabilities, race conditions"
      },
      {
        "k": "b",
        "t": "B) Violations of coding standards, referencing a variable with an undefined value, unreachable (dead) code, security vulnerabilities"
      },
      {
        "k": "c",
        "t": "C) Referencing a variable with an undefined value, deadlocks, unreachable (dead) code, security vulnerabilities"
      },
      {
        "k": "d",
        "t": "D) Referencing a variable with an undefined value, deadlocks, unreachable (dead) code, inconsistent interfaces between modules and components, race conditions"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Các defect ĐIỂN HÌNH mà static analysis (phân tích mã không thực thi) phát hiện: vi phạm chuẩn lập trình, tham chiếu biến có giá trị chưa xác định, mã chết/không thể đạt tới, lỗ hổng bảo mật, biến khai báo nhưng không dùng, giao diện không nhất quán giữa các module, cấu trúc quá phức tạp — phương án (b) chỉ gồm các mục thuộc danh sách này ⇒ (b). Các phương án còn lại đều lẫn defect chỉ bộc lộ khi CHẠY chương trình với các luồng song song: DEADLOCK và RACE CONDITION là vấn đề thời-gian-thực-thi, cần kiểm thử động/phân tích động để phát hiện — (a) chứa race conditions, (c) chứa deadlocks, (d) chứa cả hai.\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.3 (static analysis; tham khảo Câu 13 – Đề 1). PHẦN BỔ SUNG – CÂU HỎI THEO NỘI DUNG MỚI CỦA CTFL v4.0"
  },
  {
    "n": 29,
    "ref": "Câu bổ sung 1 [FL-4.1]",
    "stem": "According to CTFL v4.0, coverage is defined in terms of coverage items. Which of the following statements is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Coverage is the percentage of test cases that have passed, out of all executed test cases"
      },
      {
        "k": "b",
        "t": "B) Coverage is the degree to which specified coverage items (e.g., equivalence partitions, boundary values, decision outcomes) have been exercised by a test suite, expressed as a percentage"
      },
      {
        "k": "c",
        "t": "C) Coverage items are the defects that the test suite has detected in the test object"
      },
      {
        "k": "d",
        "t": "D) Coverage can only be measured for white-box techniques, because black-box techniques have no coverage items"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 chuẩn hóa khái niệm: mỗi kỹ thuật kiểm thử xác định các COVERAGE ITEM riêng — phân vùng tương đương (EP), giá trị biên (BVA), tổ hợp điều kiện trong bảng quyết định, trạng thái/chuyển trạng thái, câu lệnh, nhánh… — và ĐỘ PHỦ = số coverage item đã được bộ test thực thi ÷ tổng số coverage item, tính theo phần trăm ⇒ (b). (a) nhầm với tỷ lệ pass — số đo kết quả, không phải độ phủ. (c) nhầm coverage item với defect. (d) sai: kỹ thuật BLACK-BOX cũng có coverage item (phân vùng, biên, chuyển trạng thái…) và đo được độ phủ tương ứng.\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.1 (khái niệm coverage & coverage items)."
  },
  {
    "n": 30,
    "ref": "Câu bổ sung 2 [FL-5.2.1]",
    "stem": "According to CTFL v4.0, how do the results of product risk analysis influence testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) They only determine the wording of the defect reports"
      },
      {
        "k": "b",
        "t": "B) They determine the thoroughness and scope of testing, the selection of test levels and test types, the test techniques and coverage to be applied, and the prioritization of test cases"
      },
      {
        "k": "c",
        "t": "C) They replace the need for a test plan, because the risk register contains all necessary information"
      },
      {
        "k": "d",
        "t": "D) They are used only at the end of the project, to explain why defects were missed"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Kiểm thử theo hướng rủi ro (risk-based testing) dùng kết quả PHÂN TÍCH RỦI RO SẢN PHẨM để định hướng gần như mọi quyết định kiểm thử: xác định PHẠM VI và MỨC ĐỘ KỸ LƯỠNG của kiểm thử (vùng rủi ro cao test sâu hơn), lựa chọn TEST LEVEL và TEST TYPE cần thực hiện, chọn KỸ THUẬT và MỨC ĐỘ PHỦ, ƯU TIÊN HÓA test case (rủi ro cao chạy trước), và cả việc đề xuất các hoạt động ngoài kiểm thử để giảm rủi ro ⇒ (b). (a), (d) thu hẹp vô lý vai trò của phân tích rủi ro; (c) sai — risk register là ĐẦU VÀO của test plan, không thay thế được kế hoạch.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.2.1 Risk Management & 5.2.4 (risk-based testing)."
  },
  {
    "n": 31,
    "ref": "Câu bổ sung 3 [FL-5.3.2]",
    "stem": "CTFL v4.0 distinguishes between test progress reports and test completion reports. Which of the following statements is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test progress reports are prepared during a test activity to support the ongoing control of testing, while test completion reports are prepared at the end of a test stage (e.g., test level, iteration, release) when exit criteria are met, summarizing and evaluating the testing performed"
      },
      {
        "k": "b",
        "t": "B) Test progress reports are written only for managers, while test completion reports are written only for testers"
      },
      {
        "k": "c",
        "t": "C) A test completion report must be produced daily during test execution"
      },
      {
        "k": "d",
        "t": "D) The two reports are identical; only the document title differs"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "v4.0 phân biệt rõ theo THỜI ĐIỂM và MỤC ĐÍCH: TEST PROGRESS REPORT được lập ĐỊNH KỲ TRONG khi kiểm thử đang diễn ra (nội dung: giai đoạn báo cáo, tiến độ so với kế hoạch, trở ngại, số liệu test/defect, rủi ro mới, kế hoạch kỳ tới) để hỗ trợ KIỂM SOÁT liên tục; TEST COMPLETION REPORT được lập khi một CHẶNG kiểm thử KẾT THÚC (một test level, một iteration, một release — khi exit criteria đã thỏa), TỔNG KẾT và ĐÁNH GIÁ toàn bộ: kiểm thử đã thực hiện, sai lệch so với kế hoạch, hiệu quả, bài học ⇒ (a). (b) sai — đối tượng đọc tùy bên liên quan, được điều chỉnh theo người nhận; (c) nhầm tần suất của progress report; (d) phủ nhận khác biệt.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.3.2 Purpose, Content and Audience for Test Reports."
  },
  {
    "n": 32,
    "ref": "Câu bổ sung 4 [FL-5.3.1]",
    "stem": "Which of the following metrics is a PRODUCT QUALITY metric rather than a test progress metric?",
    "opts": [
      {
        "k": "a",
        "t": "A) The number of test cases implemented versus the number planned"
      },
      {
        "k": "b",
        "t": "B) The percentage of the test environment that has been prepared"
      },
      {
        "k": "c",
        "t": "C) The defect density of the test object (e.g., defects per 1000 lines of code) and the failure rate observed in operation"
      },
      {
        "k": "d",
        "t": "D) The number of test cases executed so far in the current iteration"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "v4.0 nhóm các số đo thường dùng: số đo TIẾN ĐỘ DỰ ÁN/KIỂM THỬ (tỷ lệ hoàn thành task, test đã hiện thực/đã chạy so với kế hoạch, mức độ chuẩn bị môi trường — chính là các phương án a, b, d); số đo CHẤT LƯỢNG SẢN PHẨM (mật độ defect, tần suất failure, số/mức nghiêm trọng của defect còn mở, thời gian phản hồi…); số đo defect; số đo rủi ro; số đo độ phủ; số đo chi phí. MẬT ĐỘ DEFECT và TỶ LỆ FAILURE khi vận hành phản ánh chất lượng của CHÍNH TEST OBJECT ⇒ (c).\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.3.1 Metrics Used in Testing."
  },
  {
    "n": 33,
    "ref": "Câu bổ sung 5 [FL-5.5]",
    "stem": "According to CTFL v4.0, which of the following is typically included in a defect report written during dynamic testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The full source code of the module in which the defect was found"
      },
      {
        "k": "b",
        "t": "B) The unique identifier, title/summary, date and author of the report, actual and expected results, steps to reproduce the failure, severity and priority, and references (e.g., to the test case)"
      },
      {
        "k": "c",
        "t": "C) The salary grade of the developer who introduced the defect"
      },
      {
        "k": "d",
        "t": "D) A guarantee that the defect will be fixed within 24 hours"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Nội dung điển hình của defect report theo v4.0: định danh DUY NHẤT; tiêu đề/tóm tắt ngắn gọn; ngày lập, tổ chức và tác giả; định danh test object và môi trường; bối cảnh phát hiện; mô tả failure kèm CÁC BƯỚC TÁI HIỆN (log, ảnh chụp màn hình…); KẾT QUẢ THỰC TẾ và KẾT QUẢ MONG ĐỢI; mức độ nghiêm trọng (severity) và độ ưu tiên (priority); trạng thái vòng đời defect; các THAM CHIẾU (test case liên quan…) ⇒ (b). (a) không đính kèm toàn bộ mã nguồn; (c) vi phạm nguyên tắc không nhắm vào cá nhân — defect report phê bình SẢN PHẨM, không phê bình con người; (d) defect report không cam kết thời hạn sửa.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.5 Defect Management."
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
