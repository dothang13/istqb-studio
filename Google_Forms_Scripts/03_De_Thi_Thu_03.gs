/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 03 (Giải chi tiết TV) (42 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 03 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (42 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-1.4.2]",
    "stem": "Which of the following is an example of a task that can be carried out as part of the test process?",
    "opts": [
      {
        "k": "a",
        "t": "A) Analyzing a defect"
      },
      {
        "k": "b",
        "t": "B) Designing test data"
      },
      {
        "k": "c",
        "t": "C) Assigning a version to a test item"
      },
      {
        "k": "d",
        "t": "D) Writing a user story"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Thiết kế test data là nhiệm vụ thuộc hoạt động TEST DESIGN trong quy trình kiểm thử (thiết kế test case và xác định/thiết kế dữ liệu kiểm thử cần thiết) ⇒ (b). (a) phân tích defect để tìm nguyên nhân là một phần của DEBUGGING — hoạt động của developer, tách biệt với kiểm thử. (c) gán phiên bản cho test item thuộc CONFIGURATION MANAGEMENT — hoạt động hỗ trợ, không nằm trong quy trình kiểm thử. (d) viết user story là công việc của business analyst/product owner (hoạt động phát triển yêu cầu), không phải nhiệm vụ kiểm thử.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities and Tasks (& 1.1.2 Testing and Debugging)."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-2.2.2]",
    "stem": "You are running a performance test with the objective of finding possible network bottlenecks in the interfaces between components of a system. Which of the following statements describes this test?",
    "opts": [
      {
        "k": "a",
        "t": "A) A functional test during the integration test level"
      },
      {
        "k": "b",
        "t": "B) A non-functional test during the integration test level"
      },
      {
        "k": "c",
        "t": "C) A functional test during the component test level"
      },
      {
        "k": "d",
        "t": "D) A non-functional test during the component test level"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Hai chiều phân loại độc lập: TEST TYPE và TEST LEVEL. Kiểm thử HIỆU NĂNG (performance) đánh giá đặc tính chất lượng “hệ thống vận hành tốt thế nào” — thuộc NON- FUNCTIONAL testing. Mục tiêu tìm nghẽn cổ chai mạng ở GIAO DIỆN GIỮA CÁC COMPONENT — tức tập trung vào tương tác/giao tiếp giữa các thành phần — là đặc trưng của INTEGRATION test level ⇒ (b). Câu này cũng minh họa nguyên tắc: mọi test type đều có thể thực hiện ở mọi test level (non-functional không hề bị giới hạn ở mức hệ thống).\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2.2 Integration Testing & 2.3.2 Non-functional Testing."
  },
  {
    "n": 3,
    "ref": "Câu 3 [FL-2.4.2]",
    "stem": "Which of the following statements is true?",
    "opts": [
      {
        "k": "a",
        "t": "A) Impact analysis is useful for confirmation testing during maintenance testing"
      },
      {
        "k": "b",
        "t": "B) Confirmation testing is useful for regression testing during system design"
      },
      {
        "k": "c",
        "t": "C) Impact analysis is useful for regression testing during maintenance testing"
      },
      {
        "k": "d",
        "t": "D) Confirmation testing is useful for impact analysis during maintenance testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Trong maintenance testing, impact analysis đánh giá các vùng của hệ thống có thể bị ảnh hưởng (side-effect) bởi thay đổi — thông tin này dùng để XÁC ĐỊNH PHẠM VI REGRESSION TESTING cần chạy ⇒ (c). (a) sai: confirmation testing chỉ kiểm tra lại chính defect đã sửa, không cần impact analysis để biết “vùng bị ảnh hưởng”. (b) vô nghĩa: confirmation testing là hoạt động kiểm thử động sau sửa lỗi, không phục vụ regression “trong giai đoạn thiết kế hệ thống”. (d) đảo ngược quan hệ: impact analysis là đầu vào cho việc chọn test, không phải confirmation testing phục vụ impact analysis.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.4.2 Impact Analysis for Maintenance (& 2.3.4)."
  },
  {
    "n": 4,
    "ref": "Câu 4 [FL-3.2.5]",
    "stem": "During a period of intensive project overtime, a system architecture document is sent to various project participants, announcing a previously unplanned technical review that will occur in one week. No adjustments are made to the participants’ lists of assigned tasks. Based on this information alone, which of the following factors for review success is MISSING?",
    "opts": [
      {
        "k": "a",
        "t": "A) Appropriate review type"
      },
      {
        "k": "b",
        "t": "B) Adequate time to prepare"
      },
      {
        "k": "c",
        "t": "C) Sufficient metrics to evaluate the author"
      },
      {
        "k": "d",
        "t": "D) Well-managed review meeting"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Yếu tố thành công của review bị thiếu ở đây là THỜI GIAN CHUẨN BỊ: review đột xuất, chỉ báo trước một tuần, trong giai đoạn tăng ca căng thẳng, và khối lượng công việc được giao của người tham gia KHÔNG được điều chỉnh — nghĩa là họ không được cấp thời gian để đọc tài liệu và review cá nhân ⇒ (b). (a) không có dấu hiệu technical review là loại không phù hợp cho tài liệu kiến trúc — ngược lại rất phù hợp. (c) “đo lường để đánh giá TÁC GIẢ” không phải yếu tố thành công — syllabus còn cảnh báo KHÔNG dùng kết quả review để đánh giá cá nhân. (d) cuộc họp chưa diễn ra nên chưa thể kết luận nó được điều hành tốt hay không.\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.5 Success Factors for Reviews."
  },
  {
    "n": 5,
    "ref": "Câu 5 [FL-3.1]",
    "stem": "You are reading a user story in the product backlog to prepare for a meeting with the product owner and a developer, noting potential defects as you go. Which of the following statements is true about this activity?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is not a static test, because static testing involves execution of the test object"
      },
      {
        "k": "b",
        "t": "B) It is not a static test, because static testing is always performed using a tool"
      },
      {
        "k": "c",
        "t": "C) It is a static test, because any defects you find could be found more cheaply during dynamic testing"
      },
      {
        "k": "d",
        "t": "D) It is a static test, because static testing does not involve execution of the test object"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Đọc và rà soát user story để ghi nhận defect tiềm ẩn chính là REVIEW — một hình thức kiểm thử tĩnh, và đặc điểm định nghĩa của kiểm thử tĩnh là KHÔNG THỰC THI test object ⇒ (d). (a) phát biểu ngược định nghĩa. (b) sai: kiểm thử tĩnh gồm review (do con người, không cần công cụ) và static analysis (dùng công cụ) — không phải “luôn dùng công cụ”. (c) kết luận đúng nhưng lý do sai: defect tìm bằng review thường RẺ hơn nhiều so với để lọt đến kiểm thử động, không phải ngược lại.\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.1 Static Testing Basics (3.1.1, 3.1.3)."
  },
  {
    "n": 6,
    "ref": "Câu 6 [FL-5.6]",
    "stem": "You are working as a tester on an online banking system, where availability is considered one of the top product (quality) risks. You find a reproducible failure that results in customers losing their connection to the bank’s web site when transferring funds between common types of accounts, and being unable to reconnect for three to five minutes. Which of the following would be a good summary for the defect report for this failure — one that captures both the essence of the failure and its impact on stakeholders?",
    "opts": [
      {
        "k": "a",
        "t": "A) Web server logs show error 0x44AB27 when running test 07.005, which is not an expected error message in the /tmp filesystem"
      },
      {
        "k": "b",
        "t": "B) Developers have introduced a major availability defect which will seriously upset our customers"
      },
      {
        "k": "c",
        "t": "C) Performance is slow and reliability flaky under load"
      },
      {
        "k": "d",
        "t": "D) Typical funds-transfer transaction results in termination of the customer session, with a delay in availability when attempting to reconnect"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Một dòng tóm tắt defect tốt phải KHÁCH QUAN, cô đọng, nêu được bản chất failure và tác động lên các bên liên quan: (d) nói rõ giao dịch chuyển tiền thông thường làm rớt phiên khách hàng và trễ khả dụng khi kết nối lại — đủ bản chất lẫn tác động ⇒ (d). (a) chỉ là chi tiết kỹ thuật mức log, người đọc không thấy được tác động nghiệp vụ. (b) mang tính quy kết, cảm tính (“developers have introduced…”, “seriously upset”) — vi phạm nguyên tắc viết defect report trung lập, khách quan. (c) quá mơ hồ (“slow”, “flaky”), không mô tả được failure cụ thể nào.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.6 Defect Management."
  },
  {
    "n": 7,
    "ref": "Câu 7 [FL-6.2.2]",
    "stem": "You have just completed a pilot project for a regression testing tool. You understand the tool much better and have tailored your testing process to it. You have also standardized an approach to using the tool and its associated work products. Which of the following is a typical test automation pilot project goal that remains to be carried out?",
    "opts": [
      {
        "k": "a",
        "t": "A) Learning more details about the tool"
      },
      {
        "k": "b",
        "t": "B) Seeing how the tool would fit with existing processes and practices"
      },
      {
        "k": "c",
        "t": "C) Deciding on standard ways of using, managing, storing and maintaining the tool and the test assets"
      },
      {
        "k": "d",
        "t": "D) Assessing whether the benefits will be achieved at reasonable cost"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Bốn mục tiêu điển hình của pilot project khi đưa công cụ vào tổ chức: (1) học sâu về công cụ; (2) đánh giá độ khớp với quy trình/thực hành hiện có và xác định cần thay đổi gì; (3) quyết định cách chuẩn để dùng, quản lý, lưu trữ, bảo trì công cụ và test asset; (4) đánh giá liệu LỢI ÍCH có đạt được với CHI PHÍ hợp lý không. Đề bài cho biết đã đạt (1) — “hiểu công cụ hơn nhiều”, (2) — “đã điều chỉnh quy trình”, (3) — “đã chuẩn hóa cách dùng”. Mục tiêu còn lại là (4) ⇒ (d).\n📌 Kiến thức: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.2.2 Pilot Projects for Introducing a Tool."
  },
  {
    "n": 8,
    "ref": "Câu 8 [FL-4.2.3]",
    "stem": "Consider the decision table for the portion of an online airline reservation system that allows frequent flyers to redeem points for reward travel (see the figure). Suppose there are two equivalence partitions for the condition where “Account/password okay” is not true (invalid account; valid account but invalid password), and only one partition where it is true. If you want to design tests to cover the equivalence partitions for “Account/password okay” and also this portion of the decision table, what is the minimum number of tests required?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 2"
      },
      {
        "k": "b",
        "t": "B) 3"
      },
      {
        "k": "c",
        "t": "C) 4"
      },
      {
        "k": "d",
        "t": "D) 5"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Bảng quyết định có 3 cột: cột 1 (Account/password okay = N) → không hiển thị lịch sử bay, không cho đổi thưởng; cột 2 (Y, điểm không đủ) → hiển thị lịch sử, không cho đổi; cột 3 (Y, đủ điểm) → hiển thị và cho đổi. Bình thường mỗi cột cần tối thiểu 1 test = 3 test. Nhưng điều kiện “Account/password okay = N” của cột 1 lại gồm HAI phân vùng tương đương: (i) tài khoản không hợp lệ; (ii) tài khoản hợp lệ nhưng mật khẩu sai — nên cột 1 cần 2 test để phủ đủ phân vùng. Tổng tối thiểu = 2 + 1 + 1 = 4 ⇒ (c).\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.3 Decision Table Testing kết hợp 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 9,
    "ref": "Câu 9 [FL-2.3.2]",
    "stem": "A mass-market operating system software product is designed to run on any PC hardware with an x86-family processor. You are running a set of tests to look for defects related to the support of the various PCs that use such a processor, and to build confidence that important PC brands will work. What type of test are you performing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Performance test"
      },
      {
        "k": "b",
        "t": "B) Processor test"
      },
      {
        "k": "c",
        "t": "C) Functional test"
      },
      {
        "k": "d",
        "t": "D) Portability test"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Khả năng phần mềm vận hành đúng trên NHIỀU cấu hình phần cứng/môi trường khác nhau (các dòng PC, hãng máy khác nhau cùng họ x86) thuộc đặc tính chất lượng PORTABILITY (tính khả chuyển — trong đó có tính tương thích/adaptability) — một loại kiểm thử phi chức năng ⇒ (d). (a) performance đo thời gian đáp ứng/thông lượng, không phải mục tiêu ở đây. (b) “processor test” không phải loại kiểm thử trong syllabus. (c) functional kiểm tra “hệ thống làm được gì”; ở đây chức năng không đổi, cái được kiểm là khả năng chạy trên nền tảng đa dạng.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.3.2 Non-functional Testing (ISO/IEC 25010 – portability)."
  },
  {
    "n": 10,
    "ref": "Câu 10 [FL-4.1.1]",
    "stem": "Prior to an iteration planning session, you are studying a user story and its acceptance criteria, deriving test conditions and associated test cases from the user story, as a way of applying the principle of early QA and testing. What test technique are you applying?",
    "opts": [
      {
        "k": "a",
        "t": "A) White-box"
      },
      {
        "k": "b",
        "t": "B) Black-box"
      },
      {
        "k": "c",
        "t": "C) Experience-based"
      },
      {
        "k": "d",
        "t": "D) Error guessing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Kỹ thuật BLACK-BOX (dựa trên hành vi) suy dẫn test từ TEST BASIS như tài liệu yêu cầu, đặc tả, use case, USER STORY và acceptance criteria — đúng như hoạt động mô tả ⇒ (b). (a) white-box dựa trên phân tích kiến trúc, thiết kế chi tiết, cấu trúc bên trong hoặc mã nguồn — chưa tồn tại/không được dùng ở đây. (c) experience-based dựa trên kinh nghiệm của tester/developer/người dùng để quyết định test gì — không phải nguồn suy dẫn chính ở tình huống này. (d) error guessing là một kỹ thuật con của experience-based, càng không đúng.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.1.1 Categories of Test Techniques & 4.2 Black-box Test Techniques."
  },
  {
    "n": 11,
    "ref": "Câu 11 [FL-3.1.1]",
    "stem": "You are working on a video game development project using Agile methods. The game is based on Greek mythology and history, and players can take key roles in scenarios such as the battles between the Greeks and the Trojans. You are participating in a checklist-based review session of the user story shown in the figure. This user story and its associated acceptance criteria contain which of the following typical defects identified by static testing in this type of work product?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Deviation from standards"
      },
      {
        "k": "b",
        "t": "B) Contradiction"
      },
      {
        "k": "c",
        "t": "C) Security vulnerability"
      },
      {
        "k": "d",
        "t": "D) Coverage gaps"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "AC1 yêu cầu cây gậy Midas phải hiệu nghiệm với MỌI vật thể/người chơi “bất kể kích thước”; AC3 yêu cầu vật bị chạm phải biến HOÀN TOÀN thành vàng trong vòng MỘT mili- giây; nhưng AC5 lại nói quá trình biến đổi lan từ điểm chạm với tốc độ MỘT MÉT mỗi mili-giây. Với vật thể lớn hơn 1 mét, không thể vừa “lan 1 m/ms” vừa “xong toàn bộ trong 1 ms” — các acceptance criteria MÂU THUẪN nhau ⇒ (b) contradiction, một loại defect điển hình mà review phát hiện trong yêu cầu/user story. Không có dấu hiệu vi phạm chuẩn (a), lỗ hổng bảo mật (c) hay thiếu hụt bao phủ yêu cầu (d) trong đoạn trích.\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.1.1 Work Products & 3.1.2 Benefits (defect điển hình trong yêu cầu: mâu thuẫn, mơ hồ, thiếu chính xác)."
  },
  {
    "n": 12,
    "ref": "Câu 12 [FL-5.2.1]",
    "stem": "You are defining the process for carrying out product risk analysis as part of each iteration on an Agile project. Which of the following is the proper place to document this process in a test plan?",
    "opts": [
      {
        "k": "a",
        "t": "A) Scope of testing"
      },
      {
        "k": "b",
        "t": "B) Approach of testing"
      },
      {
        "k": "c",
        "t": "C) Metrics of testing"
      },
      {
        "k": "d",
        "t": "D) Configuration management of the test object"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "TEST APPROACH (chiến lược/cách tiếp cận kiểm thử) trong test plan là nơi mô tả CÁCH kiểm thử sẽ được tiến hành — bao gồm việc tích hợp phân tích rủi ro sản phẩm vào từng iteration, cách dùng kết quả rủi ro để định hướng kiểm thử ⇒ (b). (a) scope xác định CÁI GÌ được test/không được test, không mô tả quy trình phân tích rủi ro. (c) metrics nêu số đo dùng để giám sát, không phải nơi định nghĩa quy trình. (d) quản lý cấu hình test object là chủ đề hỗ trợ khác, không liên quan.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2.1 Purpose and Content of a Test Plan."
  },
  {
    "n": 13,
    "ref": "Câu 13 [FL-4.2.1]",
    "stem": "You are testing an e-commerce system that sells cooking supplies in bulk. Items are sold in grams (for expensive items such as spices) or kilograms (for inexpensive items such as flour). Regardless of the units, the smallest valid order amount is 0.5 units and the largest valid order amount is 25.0 units. The precision of the units field is 0.1 units. Which of the following is a MINIMAL set of input values that covers the equivalence partitions for this field?",
    "opts": [
      {
        "k": "a",
        "t": "A) 10.0, 28.0"
      },
      {
        "k": "b",
        "t": "B) 0.4, 0.5, 25.0, 25.1"
      },
      {
        "k": "c",
        "t": "C) 0.2, 0.9, 29.5"
      },
      {
        "k": "d",
        "t": "D) 12.3"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Có 3 phân vùng tương đương: quá nhỏ không hợp lệ (≤ 0.4), hợp lệ (0.5 – 25.0), quá lớn không hợp lệ (≥ 25.1). Tập TỐI THIỂU phủ đủ phân vùng cần đúng 3 giá trị — mỗi phân vùng một giá trị: 0.2 (không hợp lệ thấp), 0.9 (hợp lệ), 29.5 (không hợp lệ cao) ⇒ (c). (a) chỉ 2 giá trị, bỏ sót phân vùng không-hợp-lệ-thấp. (b) phủ đủ 3 phân vùng nhưng dùng 4 giá trị biên — không TỐI THIỂU (đây là bộ giá trị của BVA 2 điểm). (d) chỉ phủ 1 phân vùng hợp lệ.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 14,
    "ref": "Câu 14 [FL-2.2]",
    "stem": "Consider the following types of defects that a test level might focus on: (a) defects in separately testable modules or objects; (b) not focused on identifying defects; (c) defects in interfaces and interactions; (d) defects in the whole test object. Which of the following correctly matches the test levels from the Foundation syllabus with the defect-focus options given above?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1 = performance test; 2 = component test; 3 = system test; 4 = acceptance test"
      },
      {
        "k": "b",
        "t": "B) 1 = component test; 2 = acceptance test; 3 = system test; 4 = integration test"
      },
      {
        "k": "c",
        "t": "C) 1 = component test; 2 = acceptance test; 3 = integration test; 4 = system test"
      },
      {
        "k": "d",
        "t": "D) 1 = integration test; 2 = system test; 3 = component test; 4 = acceptance test"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Ánh xạ (số thứ tự tương ứng a→1, b→2, c→3, d→4): (a) defect trong các module KIỂM THỬ ĐƯỢC RIÊNG LẺ → COMPONENT testing (1). (b) KHÔNG đặt trọng tâm tìm defect → ACCEPTANCE testing (2) — mục tiêu chính là xây dựng niềm tin, xác nhận hệ thống sẵn sàng, ra quyết định chấp nhận; tìm nhiều defect ở giai đoạn này lại là tín hiệu rủi ro. (c) defect ở GIAO DIỆN và TƯƠNG TÁC → INTEGRATION testing (3). (d) defect trong TOÀN BỘ test object end-to- end → SYSTEM testing (4). Vậy 1 = component, 2 = acceptance, 3 = integration, 4 = system ⇒ (c). Lưu ý (a) sai ngay từ đầu vì “performance test” là test type, không phải test level.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2 Test Levels."
  },
  {
    "n": 15,
    "ref": "Câu 15 [FL-4.4.2]",
    "stem": "Which of the following is a true statement about exploratory testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) More experienced testers who have tested similar applications and technologies are likely to do better at exploratory testing than less experienced testers"
      },
      {
        "k": "b",
        "t": "B) Exploratory testing does not identify any additional tests beyond those that would result from formal test techniques"
      },
      {
        "k": "c",
        "t": "C) The time required to complete an exploratory testing session cannot be predicted in advance"
      },
      {
        "k": "d",
        "t": "D) Exploratory testing can involve the use of black-box techniques but not white-box techniques"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Exploratory testing thuộc nhóm experience-based — hiệu quả phụ thuộc trực tiếp vào kỹ năng và kinh nghiệm của tester với các ứng dụng/công nghệ tương tự ⇒ (a). (b) sai: exploratory hữu ích chính vì BỔ SUNG cho các kỹ thuật chính quy, thường tìm ra test và defect mà kỹ thuật hình thức bỏ sót (nhất là khi đặc tả nghèo nàn, áp lực thời gian). (c) sai: với session-based test management, phiên exploratory được đóng khung thời gian (time-box) xác định trước và dẫn hướng bằng test charter. (d) sai: trong phiên exploratory có thể vận dụng cả kỹ thuật black-box, white-box lẫn experience-based khác.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.4.2 Exploratory Testing."
  },
  {
    "n": 16,
    "ref": "Câu 16 [FL-1.4.4]",
    "stem": "Consider the testing activities and the ways traceability can help testing shown in the figure. Which of the following BEST matches each testing activity with how traceability can assist that activity?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 1D, 2B, 3C, 4A"
      },
      {
        "k": "b",
        "t": "B) 1B, 2D, 3A, 4C"
      },
      {
        "k": "c",
        "t": "C) 1D, 2C, 3A, 4B"
      },
      {
        "k": "d",
        "t": "D) 1D, 2B, 3A, 4C"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "(1) Chọn regression test ↔ (D) phân tích tác động của thay đổi — truy vết cho biết thay đổi chạm tới yêu cầu/test nào để chọn bộ regression. (2) Đánh giá mức độ HOÀN THÀNH việc thực thi test ↔ (B) làm cho việc kiểm thử KIỂM TOÁN ĐƯỢC (auditable) — dấu vết yêu cầu ↔ test ↔ kết quả chứng minh mọi thứ đã được chạy. (3) Xác định user story nào còn defect mở ↔ (A) tăng tính dễ hiểu của báo cáo trạng thái kiểm thử bằng cách đưa vào trạng thái của các mục test basis (user story kèm defect của nó). (4) Đánh giá số test trên mỗi yêu cầu có tương xứng mức rủi ro không ↔ (C) cung cấp thông tin đánh giá CHẤT LƯỢNG QUY TRÌNH kiểm thử. Vậy 1D, 2B, 3A, 4C ⇒ (d).\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.4 Traceability between the Test Basis and Test Work Products."
  },
  {
    "n": 17,
    "ref": "Câu 17 [FL-1.5.2]",
    "stem": "Programmers often write and execute unit tests against code which they have written. During this self-testing activity, which of the following is a tester mindset that programmers should adopt in order to perform this unit testing effectively?",
    "opts": [
      {
        "k": "a",
        "t": "A) Good communication skills"
      },
      {
        "k": "b",
        "t": "B) Code coverage"
      },
      {
        "k": "c",
        "t": "C) Evaluating code defects"
      },
      {
        "k": "d",
        "t": "D) Attention to detail"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Các nét đặc trưng của tư duy tester theo syllabus: tính tò mò, bi quan nghề nghiệp, con mắt phản biện, CHÚ Ý ĐẾN CHI TIẾT và kinh nghiệm — programmer tự kiểm thử mã của mình cần vượt qua thiên kiến xác nhận (confirmation bias) của người tạo ra sản phẩm bằng chính sự tỉ mỉ, soi xét chi tiết đó ⇒ (d). (a) giao tiếp tốt là phẩm chất chung quan trọng khi làm việc nhóm, nhưng không phải yếu tố quyết định cho việc TỰ kiểm thử đơn vị. (b) code coverage là SỐ ĐO, không phải mindset. (c) “đánh giá defect trong mã” là hoạt động, cũng không phải một nét tư duy.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.5.2 Tester’s and Developer’s Mindsets."
  },
  {
    "n": 18,
    "ref": "Câu 18 [FL-4.4.3]",
    "stem": "You are testing a mobile app that allows customers to access and manage their bank accounts. You are running a test suite that involves evaluating each screen, and each field on each screen, against a general list of user-interface best practices derived from a popular book on the topic, which maximize attractiveness, ease-of-use and accessibility for such apps. Which of the following options BEST categorizes the test technique you are using?",
    "opts": [
      {
        "k": "a",
        "t": "A) Specification-based"
      },
      {
        "k": "b",
        "t": "B) Exploratory"
      },
      {
        "k": "c",
        "t": "C) Checklist-based"
      },
      {
        "k": "d",
        "t": "D) Error guessing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Danh sách “thông lệ tốt về giao diện người dùng” rút từ sách đóng vai trò một CHECKLIST — tập các test condition được duyệt lần lượt trên từng màn hình/trường dữ liệu — đúng định nghĩa CHECKLIST-BASED testing ⇒ (c). (a) sai: cuốn sách chỉ là hướng dẫn tổng quát, không phải tài liệu yêu cầu/đặc tả/use case/user story của hệ thống nên không phải specification-based. (b) sai: hoạt động có danh mục định trước và duyệt tuần tự, không phải khám phá tự do theo test charter. (d) sai: các test không nhắm vào dự đoán lỗi/failure có thể xảy ra mà dựa trên hiểu biết về điều quan trọng với người dùng.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.4.3 Checklist-based Testing."
  },
  {
    "n": 19,
    "ref": "Câu 19 [FL-4.2.2]",
    "stem": "For the same e-commerce bulk-order field (smallest valid order 0.5 units, largest valid order 25.0 units, precision 0.1 units), which of the following is a set of input values that covers the boundary values using two-point boundary value analysis?",
    "opts": [
      {
        "k": "a",
        "t": "A) 0.3, 10.0, 28.0"
      },
      {
        "k": "b",
        "t": "B) 0.4, 0.5, 0.6, 24.9, 25.0, 25.1"
      },
      {
        "k": "c",
        "t": "C) 0.4, 0.5, 25.0, 25.1"
      },
      {
        "k": "d",
        "t": "D) 0.5, 0.6, 24.9, 25.0"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Ba phân vùng: không hợp lệ thấp (≤ 0.4), hợp lệ (0.5 – 25.0), không hợp lệ cao (≥ 25.1); độ chính xác 0.1. BVA 2 điểm lấy: giá trị biên của phân vùng hợp lệ và giá trị sát ngay bên kia biên — tại biên dưới: 0.4 và 0.5; tại biên trên: 25.0 và 25.1 — đúng 4 giá trị của (c) ⇒ (c). (a) không chứa giá trị biên nào (chỉ phủ phân vùng). (b) là bộ BVA 3 ĐIỂM (thêm 0.6 và 24.9 phía trong mỗi biên) — thừa so với yêu cầu 2 điểm. (d) cả 4 giá trị đều nằm trong phân vùng hợp lệ, thiếu hẳn các giá trị không hợp lệ sát biên.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.2 Boundary Value Analysis."
  },
  {
    "n": 20,
    "ref": "Câu 20 [FL-2.3.4]",
    "stem": "During an Agile development effort, a product owner discovers a previously unknown regulatory requirement that applies to most of the user stories within a particular epic. The user stories are updated to provide for the necessary changes in software behavior, and the programmers on the team are modifying the code appropriately. As a tester on the team, what type of tests will you run?",
    "opts": [
      {
        "k": "a",
        "t": "A) Confirmation tests"
      },
      {
        "k": "b",
        "t": "B) Regression tests"
      },
      {
        "k": "c",
        "t": "C) Functional tests"
      },
      {
        "k": "d",
        "t": "D) Change-related tests"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Phần mềm bị SỬA ĐỔI (do yêu cầu thay đổi), nên tester cần cả hai vế: kiểm tra hành vi mới/đã sửa hoạt động đúng VÀ kiểm tra các phần không đổi không bị ảnh hưởng ngoài ý muốn — tập hợp này gọi chung là CHANGE-RELATED testing (gồm confirmation testing và regression testing) ⇒ (d) là đáp án bao trùm, đầy đủ nhất. (a) hoặc (b) riêng lẻ đều chỉ là một nửa công việc. (c) functional đúng là sẽ tham gia (hành vi mới mang tính chức năng) nhưng không phản ánh được bản chất “kiểm thử do THAY ĐỔI” — trọng tâm của tình huống.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.3.4 Change-related Testing."
  },
  {
    "n": 21,
    "ref": "Câu 21 [FL-1.3]",
    "stem": "A product owner says that your role as a tester on an Agile team is to catch all the bugs before the end of each iteration. Which of the following is a testing principle that could be used to respond to this (false) statement?",
    "opts": [
      {
        "k": "a",
        "t": "A) Defect clustering"
      },
      {
        "k": "b",
        "t": "B) Testing shows the presence of defects"
      },
      {
        "k": "c",
        "t": "C) Absence-of-errors fallacy"
      },
      {
        "k": "d",
        "t": "D) Root cause analysis"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Nguyên tắc 1 — “Testing shows the presence of defects, not their absence”: kiểm thử chỉ chứng minh ĐANG CÓ defect, không thể chứng minh KHÔNG CÒN defect; kể cả khi không tìm thấy lỗi cũng không có nghĩa phần mềm sạch lỗi. Do đó kỳ vọng “bắt hết toàn bộ bug trước cuối iteration” là bất khả thi về nguyên tắc ⇒ (b). (a) defect clustering nói về sự tụ lỗi ở ít module — không phản bác được kỳ vọng trên. (c) absence-of-errors fallacy nói “sạch lỗi cũng chưa chắc hệ thống hữu dụng” — chủ đề khác. (d) root cause analysis là kỹ thuật phân tích nguyên nhân, không phải nguyên tắc kiểm thử.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.3 Seven Testing Principles (nguyên tắc 1, tham khảo thêm nguyên tắc 2)."
  },
  {
    "n": 22,
    "ref": "Câu 22 [FL-1.2.1]",
    "stem": "A tester participated in a discussion about a proposed database structure. The tester identified a potential performance problem related to certain common user searches and explained this possible problem to the development team. Which of the following testing contributions to success BEST matches this situation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Enabling required tests to be identified at an early stage"
      },
      {
        "k": "b",
        "t": "B) Ensuring that processes are carried out properly"
      },
      {
        "k": "c",
        "t": "C) Reducing the risk of fundamental design defects"
      },
      {
        "k": "d",
        "t": "D) Reducing the risk of untestable functionality"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Syllabus nêu: tester tham gia cùng designer trong giai đoạn THIẾT KẾ giúp các bên hiểu thiết kế và cách test nó, qua đó GIẢM RỦI RO XUẤT HIỆN CÁC DEFECT THIẾT KẾ NỀN TẢNG — đúng tình huống: tester chỉ ra vấn đề hiệu năng tiềm ẩn trong cấu trúc CSDL được đề xuất, trước khi nó được hiện thực ⇒ (c). (a) “xác định sớm các test cần có” là đóng góp khi tester tham gia review YÊU CẦU — trọng tâm khác. (b) đảm bảo quy trình được tuân thủ là vai trò của QA (đảm bảo chất lượng theo quy trình), không phải đóng góp trong tình huống. (d) “giảm rủi ro chức năng không kiểm thử được” cũng gắn với review yêu cầu/thiết kế về TESTABILITY — ở đây vấn đề là hiệu năng của thiết kế, không phải tính kiểm thử được.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.2.1 Testing’s Contributions to Success."
  },
  {
    "n": 23,
    "ref": "Câu 23 [FL-4.2.4]",
    "stem": "Consider the state transition diagram for a credit-card-only, unattended gasoline pump shown in the figure. Assume that you want to develop the minimum number of tests to cover each transition in the diagram, that each test must start at the beginning state (Waiting for customer), and that each test ends when a transition arrives at the beginning state. How many tests do you need?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 4"
      },
      {
        "k": "b",
        "t": "B) 7"
      },
      {
        "k": "c",
        "t": "C) 1"
      },
      {
        "k": "d",
        "t": "D) Infinite"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Sơ đồ có 7 chuyển trạng thái: (T1) thẻ không hợp lệ — vòng tự quay về Waiting for customer; (T2) thẻ hợp lệ → Waiting for fuel type; (T3) hủy/timeout từ Waiting for fuel type → về đầu; (T4) bấm chọn loại xăng → Waiting for pumping; (T5) hủy/timeout từ Waiting for pumping → về đầu; (T6) khách bơm → Pumping; (T7) bơm xong/in hóa đơn → về đầu. Mỗi test phải xuất phát từ trạng thái đầu và KẾT THÚC ngay khi một chuyển đưa về trạng thái đầu, nên: Test 1 = T1; Test 2 = T2→T3; Test 3 = T2→T4→T5; Test 4 = T2→T4→T6→T7. Bốn test phủ đủ 7/7 chuyển ⇒ (a). Đáp án (b) 7 là số CHUYỂN, không phải số test; (c) 1 test không thể vì mỗi lần chạm trạng thái đầu là test phải dừng.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.4 State Transition Testing."
  },
  {
    "n": 24,
    "ref": "Câu 24 [FL-5.5.2]",
    "stem": "Consider the following list of undesirable outcomes that could occur on a mobile app development effort: (A) incorrect totals on screens; (B) a change to the acceptance criteria during acceptance testing; (C) users find the soft keyboard too hard to use with the app; (D) the system responds too slowly to user input during search-string entry; (E) testers are not allowed to report test results in the daily standup meetings. Which of the following properly classifies these outcomes as project and product risks?",
    "opts": [
      {
        "k": "a",
        "t": "A) Product risks: B, E — Project risks: A, C, D"
      },
      {
        "k": "b",
        "t": "B) Product risks: A, C, D — Project risks: B, E"
      },
      {
        "k": "c",
        "t": "C) Product risks: A, C, D, E — Project risks: B"
      },
      {
        "k": "d",
        "t": "D) Product risks: A, C — Project risks: B, D, E"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Product risk = vấn đề nằm trong CHẤT LƯỢNG của sản phẩm bàn giao: (A) tính tổng sai trên màn hình — sai chức năng; (C) bàn phím ảo khó dùng — vấn đề usability; (D) phản hồi chậm khi nhập chuỗi tìm kiếm — vấn đề hiệu năng. Project risk = vấn đề đe dọa NĂNG LỰC THỰC HIỆN dự án: (B) acceptance criteria bị thay đổi ngay trong lúc acceptance testing — bất ổn yêu cầu/phạm vi (vấn đề tổ chức–dự án); (E) tester không được báo cáo kết quả trong daily standup — vấn đề tổ chức, giao tiếp trong dự án. Vậy Product {A, C, D}, Project {B, E} ⇒ (b).\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.5.2 Product and Project Risks."
  },
  {
    "n": 25,
    "ref": "Câu 25 [FL-3.1.2]",
    "stem": "You are working as a tester on an Agile team and have participated in over two dozen user- story refinement sessions with the product owner and the developers at the start of each iteration. As the reviews have become more effective at detecting defects in user stories, and the product owner more proficient at correcting those defects, you and the team notice that the team’s velocity, as shown in your burndown charts, has started to increase. Which of the following benefits of static testing is MOST DIRECTLY related to the team’s increased velocity?",
    "opts": [
      {
        "k": "a",
        "t": "A) Increasing the total cost of quality"
      },
      {
        "k": "b",
        "t": "B) Reducing testing cost"
      },
      {
        "k": "c",
        "t": "C) Increasing development productivity"
      },
      {
        "k": "d",
        "t": "D) Reducing the total cost of quality"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Velocity là thước đo NĂNG SUẤT PHÁT TRIỂN của nhóm (khối lượng story hoàn thành mỗi iteration). Review user story hiệu quả giúp loại defect trong yêu cầu từ sớm, nhờ đó developer ít phải làm lại, hoàn thành nhiều story hơn — lợi ích của kiểm thử tĩnh gắn TRỰC TIẾP nhất với hiện tượng này là TĂNG NĂNG SUẤT PHÁT TRIỂN ⇒ (c). (b) và (d) đều là lợi ích có thật của kiểm thử tĩnh (giảm chi phí kiểm thử, giảm tổng chi phí chất lượng) nhưng chúng thể hiện ở CHI PHÍ, không phải ở chỉ số velocity. (a) sai hẳn — tăng tổng chi phí chất lượng không phải lợi ích.\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.1.2 Benefits of Static Testing."
  },
  {
    "n": 26,
    "ref": "Câu 26 [FL-4.2.1]",
    "stem": "You are testing an unattended gasoline pump that only accepts credit cards. Once the credit card is validated, the pump nozzle is placed into the tank and the desired grade selected, the customer enters the desired amount of fuel in gallons using the keypad. The keypad only allows the entry of digits. Fuel is sold in tenths (0.1) of a gallon, up to 50.0 gallons. Which of the following is a minimum set of desired amounts that covers the equivalence partitions for this input?",
    "opts": [
      {
        "k": "a",
        "t": "A) 0.0, 20.0, 60.0"
      },
      {
        "k": "b",
        "t": "B) 0.0, 0.1, 50.0"
      },
      {
        "k": "c",
        "t": "C) 0.0, 0.1, 50.0, 70.0"
      },
      {
        "k": "d",
        "t": "D) -0.1, 0.0, 0.1, 49.9, 50.0, 50.1"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Bàn phím chỉ cho nhập chữ số (không nhập được số âm), nên có 3 phân vùng: 0.0 — không có giao dịch bán; 0.1 – 50.0 — lượng bán hợp lệ; ≥ 50.1 — lượng không hợp lệ. Bộ TỐI THIỂU cần đúng 1 giá trị/phân vùng: 0.0, 20.0, 60.0 ⇒ (a). (b) thiếu phân vùng không hợp lệ (> 50.0). (c) phủ đủ nhưng dùng 2 giá trị cho phân vùng hợp lệ (0.1 và 50.0) — không tối thiểu. (d) là bộ giá trị BVA 3 điểm quanh hai biên (kèm −0.1 không thể nhập), hoàn toàn không phải bộ tối thiểu theo phân vùng.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 27,
    "ref": "Câu 27 [FL-5.4]",
    "stem": "You are working as a project manager on an in-house banking software project. To prevent rework and excessive find/fix/retest cycles, the process shown in the figure has been put in place for resolving defects found in the test lab. Nevertheless, a large number of defects which the testers confirmed as fixed in the development environment (in step 3) are somehow failing confirmation testing in the test environment (in step 5), with the resulting rework and cycle- time outcomes. You have the highest confidence in your testers and have ruled out mistakes or omissions in step 3. Which of the following is the MOST likely part of the process to check next?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) The activity of the developers, who may not be adequately testing in step 2"
      },
      {
        "k": "b",
        "t": "B) The activity of the testers, who may be confused about what to test in step 5"
      },
      {
        "k": "c",
        "t": "C) Configuration management, which may not be maintaining the integrity of the product in step 4"
      },
      {
        "k": "d",
        "t": "D) The activity of the developers, who may not be fixing defects properly in step 1"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Manh mối then chốt: bản sửa hoạt động ĐÚNG ở môi trường phát triển (bước 3 đã xác nhận, tester được tin tưởng) nhưng LẠI HỎNG ở môi trường kiểm thử (bước 5). Khâu nằm giữa hai lần xác nhận đó là bước 4 — đóng gói bản phát hành hằng ngày chứa mọi bản sửa và cài vào test environment. Nếu quản lý cấu hình không bảo toàn tính toàn vẹn (thiếu file, sai phiên bản, build từ nhánh không chứa fix…), fix “bốc hơi” khi sang môi trường test — đúng hiện tượng quan sát ⇒ (c). (a) và (d) không giải thích được việc fix đã chạy đúng ở bước 3; (b) mâu thuẫn với giả thiết “tin tưởng cao nhất vào tester”.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.4 Configuration Management."
  },
  {
    "n": 28,
    "ref": "Câu 29 [FL-1.2.2]",
    "stem": "What is quality?",
    "opts": [
      {
        "k": "a",
        "t": "A) Activities focused on providing confidence that quality requirements will be fulfilled"
      },
      {
        "k": "b",
        "t": "B) The degree to which a component or system satisfies the stated and implied needs of its various stakeholders"
      },
      {
        "k": "c",
        "t": "C) The degree to which a component or system protects information and data so that persons or other components or systems have the degree of access appropriate to their types and levels of authorization"
      },
      {
        "k": "d",
        "t": "D) The total costs incurred on quality activities and issues, often split into prevention costs, appraisal costs, internal failure costs and external failure costs"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Định nghĩa QUALITY theo Glossary: mức độ mà component hoặc hệ thống thỏa mãn các nhu cầu ĐƯỢC PHÁT BIỂU và NGẦM ĐỊNH của các bên liên quan ⇒ (b). Các phương án còn lại là định nghĩa của khái niệm khác: (a) là QUALITY ASSURANCE (các hoạt động tạo niềm tin rằng yêu cầu chất lượng sẽ được đáp ứng); (c) là SECURITY (đặc tính bảo mật trong ISO 25010); (d) là COST OF QUALITY (tổng chi phí chất lượng: phòng ngừa, thẩm định, hỏng hóc nội bộ, hỏng hóc bên ngoài).\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.2.2 Quality and Quality Assurance & ISTQB Glossary."
  },
  {
    "n": 29,
    "ref": "Câu 30 [FL-3.2.2]",
    "stem": "In a formal review, what is the role name of the participant who runs an inspection meeting?",
    "opts": [
      {
        "k": "a",
        "t": "A) Facilitator"
      },
      {
        "k": "b",
        "t": "B) Programmer"
      },
      {
        "k": "c",
        "t": "C) Author"
      },
      {
        "k": "d",
        "t": "D) Project manager"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Người điều hành cuộc họp review chính thức (đặc biệt là INSPECTION) là FACILITATOR — còn gọi là moderator: đảm bảo cuộc họp vận hành hiệu quả, hòa giải các quan điểm, giữ không khí thảo luận an toàn ⇒ (a). (c) sai: trong inspection, author KHÔNG được dẫn dắt cuộc họp (khác với walkthrough, nơi author là người dẫn). (b) “programmer” không phải vai trò trong quy trình review. (d) project manager có thể là “manager” quyết định tổ chức review và cấp nguồn lực, nhưng không phải người điều hành cuộc họp.\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.2 Roles and Responsibilities in a Formal Review (& 3.2.3 Review Types)."
  },
  {
    "n": 30,
    "ref": "Câu 31 [FL-5.3.1]",
    "stem": "Which of the following is a common test metric that is often used to monitor BOTH test preparation and test execution?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test case status"
      },
      {
        "k": "b",
        "t": "B) Defect find/fix rates"
      },
      {
        "k": "c",
        "t": "C) Test environment preparation"
      },
      {
        "k": "d",
        "t": "D) Estimated cost to find the next defect"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Trạng thái test case là số đo dùng được ở CẢ HAI giai đoạn: khi CHUẨN BỊ, nó theo dõi tỷ lệ test case đã được thiết kế/hiện thực/sẵn sàng; khi THỰC THI, nó theo dõi số test đã chạy — đạt/rớt/bị chặn/bỏ qua ⇒ (a). (b) tỷ lệ tìm/sửa defect chỉ có ý nghĩa từ khi bắt đầu THỰC THI (mới phát sinh defect động). (c) tiến độ chuẩn bị môi trường chỉ thuộc giai đoạn chuẩn bị. (d) chi phí ước tính để tìm defect kế tiếp là số đo giai đoạn cuối thực thi (đánh giá điểm dừng), không dùng cho chuẩn bị.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.3.1 Metrics Used in Testing."
  },
  {
    "n": 31,
    "ref": "Câu 32 [FL-5.2.6]",
    "stem": "You are planning the test effort for a new mobile banking application. As part of estimation, you first meet with the proposed testers and others on the project — the team is well coordinated and has already worked on similar projects. To verify the resulting estimate, you then refer to industry averages for testing effort and costs on similar projects, published by a reputable consultant. Which statement accurately describes your estimation approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) A simultaneous expert-based and metrics-based approach"
      },
      {
        "k": "b",
        "t": "B) Primarily an expert-based approach, augmented with a metrics-based approach"
      },
      {
        "k": "c",
        "t": "C) Primarily a metrics-based approach, augmented with an expert-based approach"
      },
      {
        "k": "d",
        "t": "D) Primarily planning poker, checked by velocity from burndown charts"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Nguồn ước lượng CHÍNH là kinh nghiệm của các tester và thành viên đã làm dự án tương tự — đó là EXPERT-BASED. Số liệu trung bình ngành do nhà tư vấn công bố chỉ dùng để KIỂM CHỨNG lại kết quả — đó là METRICS-BASED đóng vai trò bổ trợ ⇒ (b). (a) sai chữ “simultaneous”: hai cách được dùng TUẦN TỰ (ước lượng trước, đối chiếu sau), không đồng thời. (c) đảo ngược vai trò chính–phụ. (d) không có dữ kiện nào cho thấy dùng planning poker hay burndown chart; số liệu ngành cũng không phải velocity nội bộ.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2.6 Test Estimation."
  },
  {
    "n": 32,
    "ref": "Câu 33 [FL-1.2.3]",
    "stem": "A phone ringing momentarily distracts a programmer, causing the programmer to improperly code the logic that checks the upper boundary of an input variable. Later, during system testing, a tester notices that this input field accepts invalid input values. The improperly coded logic for the upper boundary check is:",
    "opts": [
      {
        "k": "a",
        "t": "A) The root cause"
      },
      {
        "k": "b",
        "t": "B) The failure"
      },
      {
        "k": "c",
        "t": "C) The error"
      },
      {
        "k": "d",
        "t": "D) The defect"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Chuỗi nhân quả chuẩn: root cause/error → defect → failure. Tiếng chuông điện thoại gây phân tâm là ROOT CAUSE (điều kiện dẫn tới sai sót); hành động sai của lập trình viên trong lúc phân tâm là ERROR (sai lầm của con người); ĐOẠN LOGIC KIỂM TRA BIÊN TRÊN BỊ VIẾT SAI nằm trong mã nguồn là DEFECT — khiếm khuyết trong sản phẩm công việc ⇒ (d); còn việc trường nhập liệu CHẤP NHẬN giá trị không hợp lệ mà tester quan sát thấy khi chạy hệ thống là FAILURE.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.2.3 Errors, Defects and Failures."
  },
  {
    "n": 33,
    "ref": "Câu 35 [FL-5.1.1]",
    "stem": "During a project following Agile methods, you find a discrepancy between the developer’s interpretation of an acceptance criterion and the product owner’s interpretation, which you bring up during a user story refinement session. Which of the following benefits of test independence is exemplified by this situation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Recognizing different kinds of failures"
      },
      {
        "k": "b",
        "t": "B) Taking primary responsibility for quality"
      },
      {
        "k": "c",
        "t": "C) Removing a defect early"
      },
      {
        "k": "d",
        "t": "D) Challenging stakeholder assumptions"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Một lợi ích của tính độc lập trong kiểm thử: tester độc lập có thể XÁC MINH, THÁCH THỨC hoặc bác bỏ các GIẢ ĐỊNH mà các bên liên quan đưa ra trong quá trình đặc tả và hiện thực hệ thống. Ở đây developer và product owner đang hiểu acceptance criterion theo hai cách khác nhau (mỗi bên mang một giả định riêng) và tester là người phát hiện, nêu vấn đề ra phiên refinement ⇒ (d). (a) “nhận diện các loại failure khác nhau” áp dụng cho kiểm thử động, không phải tình huống review yêu cầu. (b) trách nhiệm chất lượng thuộc về CẢ NHÓM, không phải lợi ích của độc lập. (c) đúng là defect được loại sớm, nhưng đó là lợi ích của KIỂM THỬ TĨNH nói chung — điểm đặc trưng cho TÍNH ĐỘC LẬP ở đây là việc chất vấn giả định.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.1.1 Independent Testing."
  },
  {
    "n": 34,
    "ref": "Câu 36 [FL-4.3.2]",
    "stem": "Consider a mobile app that allows customers to access and manage their bank accounts. A user story has just been added that checks customers’ social media accounts and bank records to give personalized greetings on birthdays and other personal milestones. Which of the following test techniques could a PROGRAMMER use during unit testing of the code to ensure coverage of the situations where the greetings ARE supposed to occur and where the greetings ARE NOT supposed to occur?",
    "opts": [
      {
        "k": "a",
        "t": "A) Statement testing"
      },
      {
        "k": "b",
        "t": "B) Exploratory testing"
      },
      {
        "k": "c",
        "t": "C) State transition testing"
      },
      {
        "k": "d",
        "t": "D) Decision testing"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Yêu cầu phủ CẢ HAI nhánh của quyết định “có hiển thị lời chúc hay không” — đúng bản chất DECISION TESTING: thiết kế test đi theo các luồng điều khiển xuất phát từ điểm quyết định, bảo đảm mỗi decision outcome (true/false) đều được thực thi ⇒ (d). (a) statement testing chỉ cần chạy hết các câu lệnh — nhánh “KHÔNG chúc” có thể không chứa câu lệnh nào nên có thể đạt 100% statement mà chưa hề test trường hợp không chúc. (b) exploratory khó bảo đảm/ đo mức phủ này nếu charter không nêu rõ. (c) state transition phù hợp khi phản ứng phụ thuộc TRẠNG THÁI/LỊCH SỬ trước đó; ở đây quyết định chỉ dựa vào việc ngày hiện tại có trùng cột mốc hay không.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Coverage (& 4.3.3 giá trị của white-box)."
  },
  {
    "n": 35,
    "ref": "Câu 37 [FL-4.3.2]",
    "stem": "A batch application has been in production unchanged for over two years. It runs overnight once a month to produce statements that are e-mailed to customers. For each customer, the application goes through every account and lists every transaction on that account in the last month, using a nested-loop structure: customers (outer loop), each customer’s accounts (middle loop), and each account’s transactions (inner loop). One night, the batch application terminates prematurely, failing to e-mail statements to some customers, when it encounters a customer having an account with no transactions in the last month — a very unusual situation that had not occurred before. While fixing the defect, a programmer asks you to recommend a test technique that would have been effective against this kind of defect. Which of the following test techniques would most likely have been able to detect the underlying defect?",
    "opts": [
      {
        "k": "a",
        "t": "A) Decision testing"
      },
      {
        "k": "b",
        "t": "B) Statement testing"
      },
      {
        "k": "c",
        "t": "C) Checklist-based testing"
      },
      {
        "k": "d",
        "t": "D) Error guessing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Defect nằm ở tình huống vòng lặp trong (danh sách giao dịch) được thực thi KHÔNG LẦN NÀO. Với cấu trúc lặp: statement coverage chỉ đòi các câu lệnh TRONG thân vòng lặp được chạy — tức luôn test trường hợp “có lặp”, không bắt buộc test trường hợp “bỏ qua vòng lặp”; còn DECISION coverage yêu cầu điều kiện lặp phải nhận CẢ hai kết cục: có vào thân lặp VÀ không vào (0 lần lặp) — chính là trường hợp tài khoản không có giao dịch ⇒ (a). (c) checklist dựa trên kinh nghiệm/tri thức sẵn có, khó dẫn đến điều kiện hiếm này. (d) error guessing CÓ THỂ đoán ra nếu ai đó nghi ngờ giả định “luôn có ít nhất một giao dịch”, nhưng chỉ decision testing BẢO ĐẢM điều kiện đó được kiểm.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Coverage."
  },
  {
    "n": 36,
    "ref": "Câu 38 [FL-6.1.1]",
    "stem": "Which of the following tools is most useful for reporting test metrics?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test management tool"
      },
      {
        "k": "b",
        "t": "B) Static analysis tool"
      },
      {
        "k": "c",
        "t": "C) Coverage tool"
      },
      {
        "k": "d",
        "t": "D) Model-based testing tool"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Công cụ QUẢN LÝ KIỂM THỬ hỗ trợ toàn bộ việc quản lý test và testware: theo dõi trạng thái test case, defect, truy vết yêu cầu — và đặc biệt là TỔNG HỢP, BÁO CÁO các số đo kiểm thử (tiến độ, tỷ lệ đạt/rớt, mật độ defect…) ⇒ (a). (b) static analysis phục vụ phân tích mã tĩnh (tìm defect trong code), (c) coverage tool đo MỘT loại số liệu là độ phủ khi thực thi — nó cung cấp dữ liệu chứ không phải công cụ báo cáo tổng hợp; (d) model-based testing tool sinh test case từ mô hình — thuộc nhóm hỗ trợ thiết kế test.\n📌 Kiến thức: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.1.1 Test Tool Classification (nhóm quản lý testing & testware)."
  },
  {
    "n": 37,
    "ref": "Câu 39 [FL-5.2.4]",
    "stem": "You are testing a mobile app that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the list of test cases, priorities (a smaller number means a higher priority) and dependencies shown in the figure. Which of the following is a possible test execution schedule that considers both priorities and dependencies?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 01.001, 01.002, 01.003, 01.005"
      },
      {
        "k": "b",
        "t": "B) 01.001, 01.002, 01.004, 01.003"
      },
      {
        "k": "c",
        "t": "C) 01.003, 01.004, 01.002, 01.001"
      },
      {
        "k": "d",
        "t": "D) 01.001, 01.002, 01.004, 01.005"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Ràng buộc: 01.002 phụ thuộc 01.001; 01.003 và 01.004 cùng phụ thuộc 01.002. Do chuỗi phụ thuộc, thứ tự bắt buộc là 01.001 → 01.002 → {01.003, 01.004}; hai test cuối cùng có cùng mức ưu tiên 1 nên chạy trước–sau đều được. (b) 01.001, 01.002, 01.004, 01.003 thỏa cả phụ thuộc lẫn ưu tiên ⇒ (b). (a) và (d) chứa test case 01.005 không tồn tại (và (d) còn bỏ sót 01.003). (c) đảo ngược hoàn toàn thứ tự phụ thuộc — chạy 01.003, 01.004 khi các test tiền đề chưa chạy.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2.4 Test Execution Schedule. PHẦN BỔ SUNG – CÂU HỎI THEO NỘI DUNG MỚI CỦA CTFL v4.0"
  },
  {
    "n": 38,
    "ref": "Câu bổ sung 1 [FL-2.2.1]",
    "stem": "Which of the following lists shows the five test levels as defined in the CTFL v4.0 syllabus?",
    "opts": [
      {
        "k": "a",
        "t": "A) Component testing, component integration testing, system testing, system integration testing, acceptance testing"
      },
      {
        "k": "b",
        "t": "B) Unit testing, module testing, subsystem testing, alpha testing, beta testing"
      },
      {
        "k": "c",
        "t": "C) Component testing, integration testing, system testing, acceptance testing, maintenance testing"
      },
      {
        "k": "d",
        "t": "D) Static testing, dynamic testing, functional testing, non-functional testing, regression testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "CTFL v4.0 định nghĩa NĂM test level, trong đó mức tích hợp được tách đôi so với syllabus 2018: component testing; COMPONENT INTEGRATION testing (tích hợp giữa các component); system testing; SYSTEM INTEGRATION testing (tích hợp giữa các hệ thống, hoặc với dịch vụ/hệ thống bên ngoài); acceptance testing ⇒ (a). (b) dùng các tên không chuẩn (alpha/beta là HÌNH THỨC của acceptance testing, không phải level riêng). (c) sai vì maintenance testing không phải một test level — đó là kiểm thử thực hiện trong bối cảnh bảo trì, dùng lại các level/type sẵn có. (d) liệt kê toàn test type và cách tiếp cận, không phải level.\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.2.1 Test Levels."
  },
  {
    "n": 39,
    "ref": "Câu bổ sung 2 [FL-5.1.3]",
    "stem": "In Agile software development, which pair of concepts is typically used as entry criteria and exit criteria for a work item?",
    "opts": [
      {
        "k": "a",
        "t": "A) Definition of Ready (entry criteria) and Definition of Done (exit criteria)"
      },
      {
        "k": "b",
        "t": "B) Definition of Done (entry criteria) and Definition of Ready (exit criteria)"
      },
      {
        "k": "c",
        "t": "C) Burndown chart (entry criteria) and velocity (exit criteria)"
      },
      {
        "k": "d",
        "t": "D) Test charter (entry criteria) and test log (exit criteria)"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "v4.0 chỉ rõ: trong Agile, DEFINITION OF READY (DoR) đóng vai trò ENTRY CRITERIA — tập điều kiện một user story phải thỏa để nhóm có thể BẮT ĐẦU làm/kiểm thử nó (ví dụ: có acceptance criteria rõ ràng, đã ước lượng, phụ thuộc đã xử lý); còn DEFINITION OF DONE (DoD) đóng vai trò EXIT CRITERIA — tập điều kiện để tuyên bố hạng mục HOÀN THÀNH (ví dụ: code đã review, test tự động chạy đạt, độ phủ đạt ngưỡng, tài liệu cập nhật) ⇒ (a). (b) đảo ngược. (c) burndown chart và velocity là công cụ theo dõi tiến độ, không phải tiêu chí vào/ra. (d) test charter/test log thuộc exploratory testing và ghi nhận thực thi.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.3 Entry Criteria and Exit Criteria."
  },
  {
    "n": 40,
    "ref": "Câu bổ sung 3 [FL-5.1.5]",
    "stem": "The test cases that cover the requirements with the highest business priority, as assigned by the stakeholders, are executed first. Which test case prioritization strategy is being applied?",
    "opts": [
      {
        "k": "a",
        "t": "A) Risk-based prioritization"
      },
      {
        "k": "b",
        "t": "B) Coverage-based prioritization"
      },
      {
        "k": "c",
        "t": "C) Requirements-based prioritization"
      },
      {
        "k": "d",
        "t": "D) Dependency-based prioritization"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "v4.0 nêu ba chiến lược ưu tiên hóa test case: RISK-BASED — chạy trước các test phủ những RỦI RO quan trọng nhất (theo kết quả phân tích rủi ro); COVERAGE-BASED — chạy theo thứ tự đạt độ phủ nhanh nhất (mỗi test kế tiếp tăng thêm độ phủ nhiều nhất — biến thể “additional coverage”); REQUIREMENTS-BASED — chạy trước các test gắn với YÊU CẦU có độ ưu tiên cao nhất do các bên liên quan gán. Tình huống mô tả đúng requirements-based ⇒ (c). (d) “dependency-based” không phải một chiến lược trong syllabus — các phụ thuộc (kỹ thuật/logic) chỉ là RÀNG BUỘC có thể buộc điều chỉnh thứ tự ưu tiên mong muốn.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.5 Test Case Prioritization."
  },
  {
    "n": 41,
    "ref": "Câu bổ sung 4 [FL-5.1.4]",
    "stem": "Which of the following statements about test estimation techniques is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Planning poker is a consensus-based estimation technique, a variant of Wideband Delphi, in which team members estimate using cards and discuss until they reach agreement; it is commonly used in Agile development"
      },
      {
        "k": "b",
        "t": "B) Planning poker is a technique in which the estimate is extrapolated from the measured velocity of the two previous iterations"
      },
      {
        "k": "c",
        "t": "C) In Wideband Delphi, the estimate is produced by dividing the total project budget by the standard industry cost per test case"
      },
      {
        "k": "d",
        "t": "D) Planning poker must be performed by the test manager alone, in order to avoid the estimates being biased by the developers"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Wideband Delphi là kỹ thuật ước lượng DỰA TRÊN ĐỒNG THUẬN của nhóm chuyên gia: mỗi người ước lượng độc lập, sau đó so sánh — thảo luận — ước lượng lại đến khi hội tụ. PLANNING POKER là biến thể của Wideband Delphi phổ biến trong Agile, dùng bộ bài (thường theo dãy Fibonacci) để mỗi thành viên ra ước lượng đồng thời rồi thảo luận các chênh lệch ⇒ (a). (b) mô tả kỹ thuật NGOẠI SUY (extrapolation) dựa trên số đo lịch sử, không phải planning poker. (c) bịa đặt — Wideband Delphi dựa trên phán đoán chuyên gia, không có “chi phí chuẩn ngành trên mỗi test case”. (d) phản tinh thần kỹ thuật: sức mạnh nằm ở TRÍ TUỆ TẬP THỂ của cả nhóm.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.4 Estimation Techniques."
  },
  {
    "n": 42,
    "ref": "Câu bổ sung 5 [FL-4.3.1]",
    "stem": "Which of the following statements about statement coverage and branch coverage is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) 100% statement coverage always guarantees 100% branch coverage"
      },
      {
        "k": "b",
        "t": "B) 100% branch coverage guarantees 100% statement coverage, but 100% statement coverage does not guarantee 100% branch coverage"
      },
      {
        "k": "c",
        "t": "C) Statement coverage and branch coverage are two names for the same coverage measure"
      },
      {
        "k": "d",
        "t": "D) Branch coverage cannot be measured for code that contains loops"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 dùng thuật ngữ BRANCH COVERAGE (thay cho decision coverage của bản 2018) và nêu rõ quan hệ bao hàm: khi mọi NHÁNH (cả không điều kiện lẫn có điều kiện) đã được thực thi thì mọi câu lệnh chắc chắn đã được thực thi — 100% branch ⇒ 100% statement; chiều ngược lại KHÔNG đúng: ví dụ một lệnh “if” không có nhánh else, chỉ cần một test đi qua nhánh true là đạt 100% statement nhưng nhánh false chưa hề được kiểm ⇒ (b). (c) sai — branch là tiêu chí MẠNH HƠN statement. (d) sai — vòng lặp vẫn đo được (nhánh vào thân lặp và nhánh thoát).\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.3.1 Statement Testing, 4.3.2 Branch Testing."
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
