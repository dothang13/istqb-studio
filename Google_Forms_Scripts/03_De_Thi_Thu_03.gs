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
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là ví dụ về nhiệm vụ có thể được thực hiện như một phần của quá trình kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phân tích một khiếm khuyết\n  B) Thiết kế dữ liệu kiểm thử\n  C) Gán phiên bản cho một mục kiểm tra\n  D) Viết câu chuyện của người dùng\n\n[GIẢI THÍCH CHI TIẾT]\nThiết kế test data là nhiệm vụ thuộc hoạt động TEST DESIGN trong quy trình kiểm thử (thiết kế test case và xác định/thiết kế dữ liệu kiểm thử cần thiết) ⇒ (b). (a) phân tích defect để tìm nguyên nhân là một phần của DEBUGGING — hoạt động của developer, tách biệt với kiểm thử. (c) gán phiên bản cho test item thuộc CONFIGURATION MANAGEMENT — hoạt động hỗ trợ, không nằm trong quy trình kiểm thử. (d) viết user story là công việc của business analyst/product owner (hoạt động phát triển yêu cầu), không phải nhiệm vụ kiểm thử.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities and Tasks (& 1.1.2 Testing and Debugging)."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang chạy kiểm thử hiệu suất với mục tiêu tìm ra các điểm tắc nghẽn mạng có thể xảy ra trong giao diện giữa các thành phần của hệ thống. Câu nào sau đây mô tả bài kiểm tra này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra chức năng ở cấp độ kiểm tra tích hợp\n  B) Kiểm tra phi chức năng ở cấp độ kiểm tra tích hợp\n  C) Kiểm tra chức năng ở cấp độ kiểm tra thành phần\n  D) Kiểm thử phi chức năng ở cấp độ kiểm thử thành phần\n\n[GIẢI THÍCH CHI TIẾT]\nHai chiều phân loại độc lập: TEST TYPE và TEST LEVEL. Kiểm thử HIỆU NĂNG (performance) đánh giá đặc tính chất lượng “hệ thống vận hành tốt thế nào” — thuộc NON- FUNCTIONAL testing. Mục tiêu tìm nghẽn cổ chai mạng ở GIAO DIỆN GIỮA CÁC COMPONENT — tức tập trung vào tương tác/giao tiếp giữa các thành phần — là đặc trưng của INTEGRATION test level ⇒ (b). Câu này cũng minh họa nguyên tắc: mọi test type đều có thể thực hiện ở mọi test level (non-functional không hề bị giới hạn ở mức hệ thống).\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2.2 Integration Testing & 2.3.2 Non-functional Testing."
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
    "exp": "[DỊCH CÂU HỎI]\nPhát biểu nào sau đây là đúng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phân tích tác động rất hữu ích cho việc kiểm tra xác nhận trong quá trình kiểm tra bảo trì\n  B) Kiểm tra xác nhận rất hữu ích cho việc kiểm tra hồi quy trong quá trình thiết kế hệ thống\n  C) Phân tích tác động rất hữu ích cho việc kiểm tra hồi quy trong quá trình kiểm tra bảo trì\n  D) Kiểm tra xác nhận rất hữu ích cho việc phân tích tác động trong quá trình kiểm tra bảo trì\n\n[GIẢI THÍCH CHI TIẾT]\nTrong maintenance testing, impact analysis đánh giá các vùng của hệ thống có thể bị ảnh hưởng (side-effect) bởi thay đổi — thông tin này dùng để XÁC ĐỊNH PHẠM VI REGRESSION TESTING cần chạy ⇒ (c). (a) sai: confirmation testing chỉ kiểm tra lại chính defect đã sửa, không cần impact analysis để biết “vùng bị ảnh hưởng”. (b) vô nghĩa: confirmation testing là hoạt động kiểm thử động sau sửa lỗi, không phục vụ regression “trong giai đoạn thiết kế hệ thống”. (d) đảo ngược quan hệ: impact analysis là đầu vào cho việc chọn test, không phải confirmation testing phục vụ impact analysis.\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.4.2 Impact Analysis for Maintenance (& 2.3.4)."
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
    "exp": "[DỊCH CÂU HỎI]\nTrong khoảng thời gian tăng cường dự án kéo dài, một tài liệu kiến ​​trúc hệ thống sẽ được gửi đến nhiều người tham gia dự án, thông báo về một cuộc đánh giá kỹ thuật ngoài kế hoạch trước đó sẽ diễn ra sau một tuần. Không có điều chỉnh nào được thực hiện đối với danh sách nhiệm vụ được giao của người tham gia. Chỉ dựa trên thông tin này, yếu tố nào sau đây dẫn đến sự thành công của việc xem xét bị BỊ THIẾU?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Loại đánh giá phù hợp\n  B) Thời gian thích hợp để chuẩn bị\n  C) Đủ số liệu để đánh giá tác giả\n  D) Cuộc họp đánh giá được quản lý tốt\n\n[GIẢI THÍCH CHI TIẾT]\nYếu tố thành công của review bị thiếu ở đây là THỜI GIAN CHUẨN BỊ: review đột xuất, chỉ báo trước một tuần, trong giai đoạn tăng ca căng thẳng, và khối lượng công việc được giao của người tham gia KHÔNG được điều chỉnh — nghĩa là họ không được cấp thời gian để đọc tài liệu và review cá nhân ⇒ (b). (a) không có dấu hiệu technical review là loại không phù hợp cho tài liệu kiến trúc — ngược lại rất phù hợp. (c) “đo lường để đánh giá TÁC GIẢ” không phải yếu tố thành công — syllabus còn cảnh báo KHÔNG dùng kết quả review để đánh giá cá nhân. (d) cuộc họp chưa diễn ra nên chưa thể kết luận nó được điều hành tốt hay không.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.2.5 Success Factors for Reviews."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang đọc câu chuyện của người dùng trong hồ sơ tồn đọng sản phẩm để chuẩn bị cho cuộc họp với chủ sở hữu sản phẩm và nhà phát triển, lưu ý các lỗi tiềm ẩn khi bạn tiếp tục. Câu nào sau đây đúng về hoạt động này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đây không phải là kiểm thử tĩnh (static testing), vì kiểm thử tĩnh (static testing) liên quan đến việc thực thi test object (đối tượng kiểm thử)\n  B) Đây không phải là kiểm thử tĩnh (static testing) vì kiểm thử tĩnh (static testing) luôn được thực hiện bằng công cụ\n  C) Đây là kiểm thử tĩnh (static testing) vì bất kỳ lỗi nào bạn tìm thấy đều có thể được tìm thấy với chi phí rẻ hơn trong quá trình kiểm thử động.\n  D) Đây là một kiểm thử tĩnh (static testing), vì kiểm thử tĩnh (static testing) không liên quan đến việc thực thi test object (đối tượng kiểm thử)\n\n[GIẢI THÍCH CHI TIẾT]\nĐọc và rà soát user story để ghi nhận defect tiềm ẩn chính là REVIEW — một hình thức kiểm thử tĩnh, và đặc điểm định nghĩa của kiểm thử tĩnh là KHÔNG THỰC THI test object ⇒ (d). (a) phát biểu ngược định nghĩa. (b) sai: kiểm thử tĩnh gồm review (do con người, không cần công cụ) và static analysis (dùng công cụ) — không phải “luôn dùng công cụ”. (c) kết luận đúng nhưng lý do sai: defect tìm bằng review thường RẺ hơn nhiều so với để lọt đến kiểm thử động, không phải ngược lại.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.1 Static Testing Basics (3.1.1, 3.1.3)."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang làm tester (kiểm thử viên) trên một hệ thống ngân hàng trực tuyến, nơi tính khả dụng được coi là một trong những rủi ro (chất lượng) sản phẩm hàng đầu. Bạn tìm thấy một lỗi có thể xảy ra khiến khách hàng mất kết nối với trang web của ngân hàng khi chuyển tiền giữa các loại tài khoản phổ biến và không thể kết nối lại trong vòng ba đến năm phút. Nội dung nào sau đây sẽ là bản tóm tắt phù hợp cho báo cáo lỗi (defect report) của lỗi này - báo cáo thể hiện cả bản chất của lỗi và tác động của nó đối với các bên liên quan?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhật ký máy chủ web hiển thị lỗi 0x44AB27 khi chạy kiểm thử 07.005, đây không phải là thông báo lỗi dự kiến trong hệ thống tệp /tmp\n  B) Các nhà phát triển đã đưa ra một lỗi lớn về tính khả dụng sẽ khiến khách hàng của chúng tôi khó chịu nghiêm trọng\n  C) Hiệu suất chậm và độ tin cậy không ổn định khi tải\n  D) Giao dịch chuyển tiền thông thường dẫn đến việc chấm dứt phiên của khách hàng, kèm theo sự chậm trễ về tính khả dụng khi cố gắng kết nối lại\n\n[GIẢI THÍCH CHI TIẾT]\nMột dòng tóm tắt defect tốt phải KHÁCH QUAN, cô đọng, nêu được bản chất failure và tác động lên các bên liên quan: (d) nói rõ giao dịch chuyển tiền thông thường làm rớt phiên khách hàng và trễ khả dụng khi kết nối lại — đủ bản chất lẫn tác động ⇒ (d). (a) chỉ là chi tiết kỹ thuật mức log, người đọc không thấy được tác động nghiệp vụ. (b) mang tính quy kết, cảm tính (“developers have introduced…”, “seriously upset”) — vi phạm nguyên tắc viết defect report trung lập, khách quan. (c) quá mơ hồ (“slow”, “flaky”), không mô tả được failure cụ thể nào.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.6 Defect Management."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn vừa hoàn thành một dự án thí điểm về công cụ kiểm tra hồi quy. Bạn hiểu công cụ này tốt hơn nhiều và đã điều chỉnh quy trình kiểm thử của mình cho phù hợp với nó. Bạn cũng đã tiêu chuẩn hóa cách tiếp cận sử dụng công cụ và các sản phẩm công việc liên quan của nó. Mục tiêu nào sau đây là mục tiêu của dự án thí điểm tự động hóa kiểm thử (test automation) điển hình vẫn cần được thực hiện?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tìm hiểu thêm chi tiết về công cụ\n  B) Xem cách công cụ này phù hợp với các quy trình và thực tiễn hiện có\n  C) Quyết định các cách tiêu chuẩn để sử dụng, quản lý, lưu trữ và bảo trì công cụ cũng như tài sản kiểm thử\n  D) Đánh giá liệu lợi ích có đạt được với chi phí hợp lý hay không\n\n[GIẢI THÍCH CHI TIẾT]\nBốn mục tiêu điển hình của pilot project khi đưa công cụ vào tổ chức: (1) học sâu về công cụ; (2) đánh giá độ khớp với quy trình/thực hành hiện có và xác định cần thay đổi gì; (3) quyết định cách chuẩn để dùng, quản lý, lưu trữ, bảo trì công cụ và test asset; (4) đánh giá liệu LỢI ÍCH có đạt được với CHI PHÍ hợp lý không. Đề bài cho biết đã đạt (1) — “hiểu công cụ hơn nhiều”, (2) — “đã điều chỉnh quy trình”, (3) — “đã chuẩn hóa cách dùng”. Mục tiêu còn lại là (4) ⇒ (d).\n\nTham chiếu: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.2.2 Pilot Projects for Introducing a Tool."
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
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét bảng quyết định cho một phần của hệ thống đặt vé máy bay trực tuyến cho phép những khách hàng thường xuyên đổi điểm để nhận phần thưởng du lịch (xem hình). Giả sử có hai phân vùng tương đương cho điều kiện trong đó “Tài khoản/mật khẩu ổn” không đúng (tài khoản không hợp lệ; tài khoản hợp lệ nhưng mật khẩu không hợp lệ) và chỉ có một phân vùng đúng. Nếu bạn muốn thiết kế các bài kiểm tra để bao gồm các phân vùng tương đương cho “Tài khoản/mật khẩu được” và cả phần này của bảng quyết định, thì số lượng bài kiểm tra tối thiểu cần có là bao nhiêu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 2\n  B) 3\n  C) 4\n  D) 5\n\n[GIẢI THÍCH CHI TIẾT]\nBảng quyết định có 3 cột: cột 1 (Account/password okay = N) → không hiển thị lịch sử bay, không cho đổi thưởng; cột 2 (Y, điểm không đủ) → hiển thị lịch sử, không cho đổi; cột 3 (Y, đủ điểm) → hiển thị và cho đổi. Bình thường mỗi cột cần tối thiểu 1 test = 3 test. Nhưng điều kiện “Account/password okay = N” của cột 1 lại gồm HAI phân vùng tương đương: (i) tài khoản không hợp lệ; (ii) tài khoản hợp lệ nhưng mật khẩu sai — nên cột 1 cần 2 test để phủ đủ phân vùng. Tổng tối thiểu = 2 + 1 + 1 = 4 ⇒ (c).\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.3 Decision Table Testing kết hợp 4.2.1 Equivalence Partitioning."
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
    "exp": "[DỊCH CÂU HỎI]\nMột sản phẩm phần mềm hệ điều hành dành cho thị trường đại chúng được thiết kế để chạy trên mọi phần cứng PC có bộ xử lý dòng x86. Bạn đang chạy một loạt kiểm thử để tìm kiếm các khiếm khuyết liên quan đến khả năng hỗ trợ của nhiều PC khác nhau sử dụng bộ xử lý như vậy và để tạo niềm tin rằng các thương hiệu PC quan trọng sẽ hoạt động. Bạn đang thực hiện loại kiểm thử (test type) nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra hiệu suất\n  B) Kiểm tra bộ xử lý\n  C) Kiểm tra chức năng\n  D) Kiểm tra tính di động\n\n[GIẢI THÍCH CHI TIẾT]\nKhả năng phần mềm vận hành đúng trên NHIỀU cấu hình phần cứng/môi trường khác nhau (các dòng PC, hãng máy khác nhau cùng họ x86) thuộc đặc tính chất lượng PORTABILITY (tính khả chuyển — trong đó có tính tương thích/adaptability) — một loại kiểm thử phi chức năng ⇒ (d). (a) performance đo thời gian đáp ứng/thông lượng, không phải mục tiêu ở đây. (b) “processor test” không phải loại kiểm thử trong syllabus. (c) functional kiểm tra “hệ thống làm được gì”; ở đây chức năng không đổi, cái được kiểm là khả năng chạy trên nền tảng đa dạng.\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.3.2 Non-functional Testing (ISO/IEC 25010 – portability)."
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
    "exp": "[DỊCH CÂU HỎI]\nTrước phiên lập kế hoạch lặp lại, bạn đang nghiên cứu câu chuyện của người dùng và các tiêu chí chấp nhận của nó, rút ​​ra các điều kiện kiểm thử và các test case (ca kiểm thử) liên quan từ câu chuyện của người dùng, như một cách áp dụng nguyên tắc QA và kiểm thử sớm. Bạn đang áp dụng kỹ thuật kiểm tra nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hộp trắng\n  B) Hộp đen\n  C) Dựa trên kinh nghiệm\n  D) Lỗi đoán\n\n[GIẢI THÍCH CHI TIẾT]\nKỹ thuật BLACK-BOX (dựa trên hành vi) suy dẫn test từ TEST BASIS như tài liệu yêu cầu, đặc tả, use case, USER STORY và acceptance criteria — đúng như hoạt động mô tả ⇒ (b). (a) white-box dựa trên phân tích kiến trúc, thiết kế chi tiết, cấu trúc bên trong hoặc mã nguồn — chưa tồn tại/không được dùng ở đây. (c) experience-based dựa trên kinh nghiệm của tester/developer/người dùng để quyết định test gì — không phải nguồn suy dẫn chính ở tình huống này. (d) error guessing là một kỹ thuật con của experience-based, càng không đúng.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.1.1 Categories of Test Techniques & 4.2 Black-box Test Techniques."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang thực hiện một dự án phát triển trò chơi điện tử bằng phương pháp Agile. Trò chơi dựa trên thần thoại và lịch sử Hy Lạp, đồng thời người chơi có thể đảm nhận các vai trò quan trọng trong các tình huống như trận chiến giữa người Hy Lạp và quân Trojan. Bạn đang tham gia phiên đánh giá dựa trên danh sách kiểm tra về câu chuyện của người dùng được hiển thị trong hình. Câu chuyện của người dùng này và các tiêu chí chấp nhận liên quan của nó chứa lỗi điển hình nào sau đây được xác định bằng kiểm thử tĩnh (static testing) trong loại sản phẩm công việc này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Sai lệch so với tiêu chuẩn\n  B) Mâu thuẫn\n  C) Lỗ hổng bảo mật\n  D) Khoảng trống bảo hiểm\n\n[GIẢI THÍCH CHI TIẾT]\nAC1 yêu cầu cây gậy Midas phải hiệu nghiệm với MỌI vật thể/người chơi “bất kể kích thước”; AC3 yêu cầu vật bị chạm phải biến HOÀN TOÀN thành vàng trong vòng MỘT mili- giây; nhưng AC5 lại nói quá trình biến đổi lan từ điểm chạm với tốc độ MỘT MÉT mỗi mili-giây. Với vật thể lớn hơn 1 mét, không thể vừa “lan 1 m/ms” vừa “xong toàn bộ trong 1 ms” — các acceptance criteria MÂU THUẪN nhau ⇒ (b) contradiction, một loại defect điển hình mà review phát hiện trong yêu cầu/user story. Không có dấu hiệu vi phạm chuẩn (a), lỗ hổng bảo mật (c) hay thiếu hụt bao phủ yêu cầu (d) trong đoạn trích.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.1.1 Work Products & 3.1.2 Benefits (defect điển hình trong yêu cầu: mâu thuẫn, mơ hồ, thiếu chính xác)."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang xác định quy trình thực hiện phân tích rủi ro sản phẩm như một phần của mỗi bước lặp trong dự án Agile. Điều nào sau đây là nơi thích hợp để ghi lại quá trình này trong kế hoạch kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phạm vi kiểm thử\n  B) Phương pháp kiểm thử\n  C) Số liệu kiểm thử\n  D) Quản lý cấu hình của test object (đối tượng kiểm thử)\n\n[GIẢI THÍCH CHI TIẾT]\nTEST APPROACH (chiến lược/cách tiếp cận kiểm thử) trong test plan là nơi mô tả CÁCH kiểm thử sẽ được tiến hành — bao gồm việc tích hợp phân tích rủi ro sản phẩm vào từng iteration, cách dùng kết quả rủi ro để định hướng kiểm thử ⇒ (b). (a) scope xác định CÁI GÌ được test/không được test, không mô tả quy trình phân tích rủi ro. (c) metrics nêu số đo dùng để giám sát, không phải nơi định nghĩa quy trình. (d) quản lý cấu hình test object là chủ đề hỗ trợ khác, không liên quan.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.2.1 Purpose and Content of a Test Plan."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một hệ thống thương mại điện tử bán vật tư nấu ăn với số lượng lớn. Các mặt hàng được bán theo gam (đối với các mặt hàng đắt tiền như gia vị) hoặc kilôgam (đối với các mặt hàng rẻ tiền như bột mì). Bất kể đơn vị nào, số lượng đặt hàng hợp lệ nhỏ nhất là 0,5 đơn vị và số lượng đặt hàng hợp lệ lớn nhất là 25,0 đơn vị. Độ chính xác của trường đơn vị là 0,1 đơn vị. Điều nào sau đây là tập hợp TỐI THIỂU các giá trị đầu vào bao gồm các phân vùng tương đương cho trường này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 10,0, 28,0\n  B) 0,4, 0,5, 25,0, 25,1\n  C) 0,2, 0,9, 29,5\n  D) 12.3\n\n[GIẢI THÍCH CHI TIẾT]\nCó 3 phân vùng tương đương: quá nhỏ không hợp lệ (≤ 0.4), hợp lệ (0.5 – 25.0), quá lớn không hợp lệ (≥ 25.1). Tập TỐI THIỂU phủ đủ phân vùng cần đúng 3 giá trị — mỗi phân vùng một giá trị: 0.2 (không hợp lệ thấp), 0.9 (hợp lệ), 29.5 (không hợp lệ cao) ⇒ (c). (a) chỉ 2 giá trị, bỏ sót phân vùng không-hợp-lệ-thấp. (b) phủ đủ 3 phân vùng nhưng dùng 4 giá trị biên — không TỐI THIỂU (đây là bộ giá trị của BVA 2 điểm). (d) chỉ phủ 1 phân vùng hợp lệ.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
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
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét các loại lỗi sau đây mà cấp độ kiểm thử có thể tập trung vào: (a) lỗi trong các mô-đun hoặc đối tượng có thể kiểm thử riêng biệt; (b) không tập trung vào việc xác định các khiếm khuyết; (c) khiếm khuyết về giao diện và tương tác; (d) khiếm khuyết trong toàn bộ test object (đối tượng kiểm thử). Câu nào sau đây khớp chính xác với các cấp độ kiểm tra trong giáo trình Cơ bản với các lựa chọn tập trung vào khuyết điểm được đưa ra ở trên?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1 = kiểm tra hiệu suất; 2 = kiểm tra thành phần; 3 = kiểm tra hệ thống; 4 = kiểm tra chấp nhận\n  B) 1 = kiểm tra thành phần; 2 = kiểm tra chấp nhận; 3 = kiểm tra hệ thống; 4 = kiểm tra tích hợp\n  C) 1 = kiểm tra thành phần; 2 = kiểm tra chấp nhận; 3 = kiểm tra tích hợp; 4 = kiểm tra hệ thống\n  D) 1 = kiểm tra tích hợp; 2 = kiểm tra hệ thống; 3 = kiểm tra thành phần; 4 = kiểm tra chấp nhận\n\n[GIẢI THÍCH CHI TIẾT]\nÁnh xạ (số thứ tự tương ứng a→1, b→2, c→3, d→4): (a) defect trong các module KIỂM THỬ ĐƯỢC RIÊNG LẺ → COMPONENT testing (1). (b) KHÔNG đặt trọng tâm tìm defect → ACCEPTANCE testing (2) — mục tiêu chính là xây dựng niềm tin, xác nhận hệ thống sẵn sàng, ra quyết định chấp nhận; tìm nhiều defect ở giai đoạn này lại là tín hiệu rủi ro. (c) defect ở GIAO DIỆN và TƯƠNG TÁC → INTEGRATION testing (3). (d) defect trong TOÀN BỘ test object end-to- end → SYSTEM testing (4). Vậy 1 = component, 2 = acceptance, 3 = integration, 4 = system ⇒ (c). Lưu ý (a) sai ngay từ đầu vì “performance test” là test type, không phải test level.\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2 Test Levels."
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
    "exp": "[DỊCH CÂU HỎI]\nPhát biểu nào sau đây là đúng về kiểm thử thăm dò (exploratory testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Những tester (kiểm thử viên) có kinh nghiệm hơn đã kiểm thử các ứng dụng và công nghệ tương tự có khả năng thực thi kiểm thử khám phá tốt hơn những tester (kiểm thử viên) ít kinh nghiệm hơn\n  B) Kiểm thử thăm dò (exploratory testing) không xác định bất kỳ kiểm thử bổ sung nào ngoài những kiểm thử có được từ các kỹ thuật kiểm thử (test technique) chính thức\n  C) Không thể dự đoán trước thời gian cần thiết để hoàn thành phiên kiểm thử thăm dò (exploratory testing)\n  D) Kiểm thử thăm dò có thể liên quan đến việc sử dụng các kỹ thuật hộp đen nhưng không sử dụng các kỹ thuật hộp trắng\n\n[GIẢI THÍCH CHI TIẾT]\nExploratory testing thuộc nhóm experience-based — hiệu quả phụ thuộc trực tiếp vào kỹ năng và kinh nghiệm của tester với các ứng dụng/công nghệ tương tự ⇒ (a). (b) sai: exploratory hữu ích chính vì BỔ SUNG cho các kỹ thuật chính quy, thường tìm ra test và defect mà kỹ thuật hình thức bỏ sót (nhất là khi đặc tả nghèo nàn, áp lực thời gian). (c) sai: với session-based test management, phiên exploratory được đóng khung thời gian (time-box) xác định trước và dẫn hướng bằng test charter. (d) sai: trong phiên exploratory có thể vận dụng cả kỹ thuật black-box, white-box lẫn experience-based khác.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.4.2 Exploratory Testing."
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
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét các hoạt động kiểm tra và cách truy xuất nguồn gốc có thể giúp kiểm tra như trong hình. Điều nào sau đây TỐT NHẤT phù hợp với từng hoạt động kiểm thử về cách truy xuất nguồn gốc có thể hỗ trợ hoạt động đó?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1D, 2B, 3C, 4A\n  B) 1B, 2D, 3A, 4C\n  C) 1D, 2C, 3A, 4B\n  D) 1D, 2B, 3A, 4C\n\n[GIẢI THÍCH CHI TIẾT]\n(1) Chọn regression test ↔ (D) phân tích tác động của thay đổi — truy vết cho biết thay đổi chạm tới yêu cầu/test nào để chọn bộ regression. (2) Đánh giá mức độ HOÀN THÀNH việc thực thi test ↔ (B) làm cho việc kiểm thử KIỂM TOÁN ĐƯỢC (auditable) — dấu vết yêu cầu ↔ test ↔ kết quả chứng minh mọi thứ đã được chạy. (3) Xác định user story nào còn defect mở ↔ (A) tăng tính dễ hiểu của báo cáo trạng thái kiểm thử bằng cách đưa vào trạng thái của các mục test basis (user story kèm defect của nó). (4) Đánh giá số test trên mỗi yêu cầu có tương xứng mức rủi ro không ↔ (C) cung cấp thông tin đánh giá CHẤT LƯỢNG QUY TRÌNH kiểm thử. Vậy 1D, 2B, 3A, 4C ⇒ (d).\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.4.4 Traceability between the Test Basis and Test Work Products."
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
    "exp": "[DỊCH CÂU HỎI]\nCác lập trình viên thường viết và thực hiện các bài kiểm tra đơn vị đối với mã mà họ đã viết. Trong hoạt động tự kiểm tra này, điều nào sau đây là tư duy của người kiểm thử mà các lập trình viên nên áp dụng để thực hiện kiểm thử đơn vị này một cách hiệu quả?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kỹ năng giao tiếp tốt\n  B) Phạm vi mã\n  C) Đánh giá lỗi mã\n  D) Chú ý đến chi tiết\n\n[GIẢI THÍCH CHI TIẾT]\nCác nét đặc trưng của tư duy tester theo syllabus: tính tò mò, bi quan nghề nghiệp, con mắt phản biện, CHÚ Ý ĐẾN CHI TIẾT và kinh nghiệm — programmer tự kiểm thử mã của mình cần vượt qua thiên kiến xác nhận (confirmation bias) của người tạo ra sản phẩm bằng chính sự tỉ mỉ, soi xét chi tiết đó ⇒ (d). (a) giao tiếp tốt là phẩm chất chung quan trọng khi làm việc nhóm, nhưng không phải yếu tố quyết định cho việc TỰ kiểm thử đơn vị. (b) code coverage là SỐ ĐO, không phải mindset. (c) “đánh giá defect trong mã” là hoạt động, cũng không phải một nét tư duy.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.5.2 Tester’s and Developer’s Mindsets."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một ứng dụng di động cho phép khách hàng truy cập và quản lý tài khoản ngân hàng của họ. Bạn đang chạy một test suite (bộ kiểm thử) bao gồm việc đánh giá từng màn hình và từng trường trên mỗi màn hình, dựa trên danh sách chung về các phương pháp hay nhất về giao diện người dùng được lấy từ một cuốn sách phổ biến về chủ đề này nhằm tối đa hóa sức hấp dẫn, tính dễ sử dụng và khả năng truy cập cho những ứng dụng như vậy. Tùy chọn nào sau đây TỐT NHẤT phân loại kỹ thuật kiểm tra bạn đang sử dụng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Dựa trên đặc điểm kỹ thuật\n  B) Khám phá\n  C) Dựa trên danh sách kiểm tra\n  D) Lỗi đoán\n\n[GIẢI THÍCH CHI TIẾT]\nDanh sách “thông lệ tốt về giao diện người dùng” rút từ sách đóng vai trò một CHECKLIST — tập các test condition được duyệt lần lượt trên từng màn hình/trường dữ liệu — đúng định nghĩa CHECKLIST-BASED testing ⇒ (c). (a) sai: cuốn sách chỉ là hướng dẫn tổng quát, không phải tài liệu yêu cầu/đặc tả/use case/user story của hệ thống nên không phải specification-based. (b) sai: hoạt động có danh mục định trước và duyệt tuần tự, không phải khám phá tự do theo test charter. (d) sai: các test không nhắm vào dự đoán lỗi/failure có thể xảy ra mà dựa trên hiểu biết về điều quan trọng với người dùng.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.4.3 Checklist-based Testing."
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
    "exp": "[DỊCH CÂU HỎI]\nĐối với cùng một trường đơn đặt hàng số lượng lớn trong thương mại điện tử (đơn hàng hợp lệ nhỏ nhất 0,5 đơn vị, đơn hàng hợp lệ lớn nhất 25,0 đơn vị, độ chính xác 0,1 đơn vị), giá trị nào sau đây là tập hợp các giá trị đầu vào bao gồm các giá trị biên sử dụng phân tích giá trị biên hai điểm?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 0,3, 10,0, 28,0\n  B) 0,4, 0,5, 0,6, 24,9, 25,0, 25,1\n  C) 0,4, 0,5, 25,0, 25,1\n  D) 0,5, 0,6, 24,9, 25,0\n\n[GIẢI THÍCH CHI TIẾT]\nBa phân vùng: không hợp lệ thấp (≤ 0.4), hợp lệ (0.5 – 25.0), không hợp lệ cao (≥ 25.1); độ chính xác 0.1. BVA 2 điểm lấy: giá trị biên của phân vùng hợp lệ và giá trị sát ngay bên kia biên — tại biên dưới: 0.4 và 0.5; tại biên trên: 25.0 và 25.1 — đúng 4 giá trị của (c) ⇒ (c). (a) không chứa giá trị biên nào (chỉ phủ phân vùng). (b) là bộ BVA 3 ĐIỂM (thêm 0.6 và 24.9 phía trong mỗi biên) — thừa so với yêu cầu 2 điểm. (d) cả 4 giá trị đều nằm trong phân vùng hợp lệ, thiếu hẳn các giá trị không hợp lệ sát biên.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.2 Boundary Value Analysis."
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
    "exp": "[DỊCH CÂU HỎI]\nTrong nỗ lực phát triển Agile, chủ sở hữu sản phẩm phát hiện ra một yêu cầu quy định chưa từng được biết trước đây áp dụng cho hầu hết các câu chuyện của người dùng trong một sử thi cụ thể. Câu chuyện của người dùng được cập nhật để cung cấp những thay đổi cần thiết trong hoạt động của phần mềm và các lập trình viên trong nhóm đang sửa đổi mã một cách thích hợp. Với tư cách là tester (kiểm thử viên) trong nhóm, bạn sẽ chạy loại kiểm thử (test type) nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra xác nhận\n  B) Kiểm tra hồi quy\n  C) Kiểm tra chức năng\n  D) Các bài kiểm tra liên quan đến thay đổi\n\n[GIẢI THÍCH CHI TIẾT]\nPhần mềm bị SỬA ĐỔI (do yêu cầu thay đổi), nên tester cần cả hai vế: kiểm tra hành vi mới/đã sửa hoạt động đúng VÀ kiểm tra các phần không đổi không bị ảnh hưởng ngoài ý muốn — tập hợp này gọi chung là CHANGE-RELATED testing (gồm confirmation testing và regression testing) ⇒ (d) là đáp án bao trùm, đầy đủ nhất. (a) hoặc (b) riêng lẻ đều chỉ là một nửa công việc. (c) functional đúng là sẽ tham gia (hành vi mới mang tính chức năng) nhưng không phản ánh được bản chất “kiểm thử do THAY ĐỔI” — trọng tâm của tình huống.\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.3.4 Change-related Testing."
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
    "exp": "[DỊCH CÂU HỎI]\nChủ sở hữu sản phẩm nói rằng vai trò của bạn với tư cách là tester (kiểm thử viên) trong nhóm Agile là phát hiện tất cả các lỗi trước khi kết thúc mỗi lần lặp. Nguyên tắc nào sau đây là nguyên tắc kiểm thử có thể được sử dụng để phản hồi lại tuyên bố (sai) này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phân cụm lỗi\n  B) Kiểm tra cho thấy sự hiện diện của khiếm khuyết (defect)\n  C) Ngụy biện không có lỗi\n  D) Phân tích nguyên nhân gốc rễ\n\n[GIẢI THÍCH CHI TIẾT]\nNguyên tắc 1 — “Testing shows the presence of defects, not their absence”: kiểm thử chỉ chứng minh ĐANG CÓ defect, không thể chứng minh KHÔNG CÒN defect; kể cả khi không tìm thấy lỗi cũng không có nghĩa phần mềm sạch lỗi. Do đó kỳ vọng “bắt hết toàn bộ bug trước cuối iteration” là bất khả thi về nguyên tắc ⇒ (b). (a) defect clustering nói về sự tụ lỗi ở ít module — không phản bác được kỳ vọng trên. (c) absence-of-errors fallacy nói “sạch lỗi cũng chưa chắc hệ thống hữu dụng” — chủ đề khác. (d) root cause analysis là kỹ thuật phân tích nguyên nhân, không phải nguyên tắc kiểm thử.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.3 Seven Testing Principles (nguyên tắc 1, tham khảo thêm nguyên tắc 2)."
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
    "exp": "[DỊCH CÂU HỎI]\nMột tester (kiểm thử viên) đã tham gia vào cuộc thảo luận về cấu trúc cơ sở dữ liệu được đề xuất. tester (kiểm thử viên) đã xác định một vấn đề tiềm ẩn về hiệu suất liên quan đến một số tìm kiếm phổ biến nhất định của người dùng và giải thích vấn đề có thể xảy ra này cho nhóm phát triển. Đóng góp của kiểm thử nào sau đây vào thành công TỐT NHẤT phù hợp với tình huống này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Cho phép xác định các bài kiểm thử cần thiết ở giai đoạn đầu\n  B) Đảm bảo các quy trình được thực hiện đúng cách\n  C) Giảm nguy cơ lỗi thiết kế cơ bản\n  D) Giảm rủi ro về chức năng không thể kiểm tra được\n\n[GIẢI THÍCH CHI TIẾT]\nSyllabus nêu: tester tham gia cùng designer trong giai đoạn THIẾT KẾ giúp các bên hiểu thiết kế và cách test nó, qua đó GIẢM RỦI RO XUẤT HIỆN CÁC DEFECT THIẾT KẾ NỀN TẢNG — đúng tình huống: tester chỉ ra vấn đề hiệu năng tiềm ẩn trong cấu trúc CSDL được đề xuất, trước khi nó được hiện thực ⇒ (c). (a) “xác định sớm các test cần có” là đóng góp khi tester tham gia review YÊU CẦU — trọng tâm khác. (b) đảm bảo quy trình được tuân thủ là vai trò của QA (đảm bảo chất lượng theo quy trình), không phải đóng góp trong tình huống. (d) “giảm rủi ro chức năng không kiểm thử được” cũng gắn với review yêu cầu/thiết kế về TESTABILITY — ở đây vấn đề là hiệu năng của thiết kế, không phải tính kiểm thử được.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.2.1 Testing’s Contributions to Success."
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
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét sơ đồ chuyển đổi trạng thái cho một máy bơm xăng không cần thẻ tín dụng, chỉ có trong hình. Giả sử rằng bạn muốn phát triển số lượng kiểm thử tối thiểu để bao gồm mỗi quá trình chuyển đổi trong sơ đồ, mỗi kiểm thử phải bắt đầu ở trạng thái bắt đầu (Đang chờ khách hàng) và mỗi kiểm thử kết thúc khi quá trình chuyển đổi đến trạng thái bắt đầu. Bạn cần bao nhiêu bài kiểm tra?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 4\n  B) 7\n  C) 1\n  D) Vô hạn\n\n[GIẢI THÍCH CHI TIẾT]\nSơ đồ có 7 chuyển trạng thái: (T1) thẻ không hợp lệ — vòng tự quay về Waiting for customer; (T2) thẻ hợp lệ → Waiting for fuel type; (T3) hủy/timeout từ Waiting for fuel type → về đầu; (T4) bấm chọn loại xăng → Waiting for pumping; (T5) hủy/timeout từ Waiting for pumping → về đầu; (T6) khách bơm → Pumping; (T7) bơm xong/in hóa đơn → về đầu. Mỗi test phải xuất phát từ trạng thái đầu và KẾT THÚC ngay khi một chuyển đưa về trạng thái đầu, nên: Test 1 = T1; Test 2 = T2→T3; Test 3 = T2→T4→T5; Test 4 = T2→T4→T6→T7. Bốn test phủ đủ 7/7 chuyển ⇒ (a). Đáp án (b) 7 là số CHUYỂN, không phải số test; (c) 1 test không thể vì mỗi lần chạm trạng thái đầu là test phải dừng.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.4 State Transition Testing."
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
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét danh sách các kết quả không mong muốn sau đây có thể xảy ra khi nỗ lực phát triển ứng dụng dành cho thiết bị di động: (A) tổng số không chính xác trên màn hình; (B) thay đổi tiêu chí chấp nhận trong quá trình kiểm tra chấp nhận; (C) người dùng thấy bàn phím mềm quá khó sử dụng với ứng dụng; (D) hệ thống phản hồi quá chậm với thông tin đầu vào của người dùng trong quá trình nhập chuỗi tìm kiếm; (E) Người kiểm tra không được phép báo cáo kết quả kiểm tra trong các cuộc họp dự kiến ​​hàng ngày. Điều nào sau đây phân loại chính xác những kết quả này là rủi ro của dự án và sản phẩm?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Rủi ro sản phẩm: B, E — Rủi ro dự án: A, C, D\n  B) Rủi ro sản phẩm: A, C, D — Rủi ro dự án: B, E\n  C) Rủi ro sản phẩm: A, C, D, E — Rủi ro dự án: B\n  D) Rủi ro sản phẩm: A, C — Rủi ro dự án: B, D, E\n\n[GIẢI THÍCH CHI TIẾT]\nProduct risk = vấn đề nằm trong CHẤT LƯỢNG của sản phẩm bàn giao: (A) tính tổng sai trên màn hình — sai chức năng; (C) bàn phím ảo khó dùng — vấn đề usability; (D) phản hồi chậm khi nhập chuỗi tìm kiếm — vấn đề hiệu năng. Project risk = vấn đề đe dọa NĂNG LỰC THỰC HIỆN dự án: (B) acceptance criteria bị thay đổi ngay trong lúc acceptance testing — bất ổn yêu cầu/phạm vi (vấn đề tổ chức–dự án); (E) tester không được báo cáo kết quả trong daily standup — vấn đề tổ chức, giao tiếp trong dự án. Vậy Product {A, C, D}, Project {B, E} ⇒ (b).\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.5.2 Product and Project Risks."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang làm tester (kiểm thử viên) trong một nhóm Agile và đã tham gia hơn hai chục phiên sàng lọc câu chuyện người dùng với chủ sở hữu sản phẩm và nhà phát triển khi bắt đầu mỗi lần lặp. Khi các bài đánh giá trở nên hiệu quả hơn trong việc phát hiện các lỗi trong câu chuyện của người dùng và chủ sở hữu sản phẩm thành thạo hơn trong việc sửa các lỗi đó, bạn và nhóm nhận thấy rằng tốc độ của nhóm, như được hiển thị trong biểu đồ burndown của bạn, đã bắt đầu tăng lên. Lợi ích nào sau đây của kiểm thử tĩnh (static testing) có liên quan TRỰC TIẾP NHẤT đến tốc độ tăng lên của nhóm?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tăng tổng chi phí chất lượng\n  B) Giảm chi phí kiểm thử\n  C) Tăng năng suất phát triển\n  D) Giảm tổng chi phí chất lượng\n\n[GIẢI THÍCH CHI TIẾT]\nVelocity là thước đo NĂNG SUẤT PHÁT TRIỂN của nhóm (khối lượng story hoàn thành mỗi iteration). Review user story hiệu quả giúp loại defect trong yêu cầu từ sớm, nhờ đó developer ít phải làm lại, hoàn thành nhiều story hơn — lợi ích của kiểm thử tĩnh gắn TRỰC TIẾP nhất với hiện tượng này là TĂNG NĂNG SUẤT PHÁT TRIỂN ⇒ (c). (b) và (d) đều là lợi ích có thật của kiểm thử tĩnh (giảm chi phí kiểm thử, giảm tổng chi phí chất lượng) nhưng chúng thể hiện ở CHI PHÍ, không phải ở chỉ số velocity. (a) sai hẳn — tăng tổng chi phí chất lượng không phải lợi ích.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.1.2 Benefits of Static Testing."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một máy bơm xăng tự động chỉ chấp nhận thẻ tín dụng. Sau khi thẻ tín dụng được xác thực, vòi bơm được đặt vào bể và chọn loại mong muốn, khách hàng nhập lượng nhiên liệu mong muốn tính bằng gallon bằng bàn phím. Bàn phím chỉ cho phép nhập chữ số. Nhiên liệu được bán theo đơn vị phần mười (0,1) gallon, tối đa 50,0 gallon. Điều nào sau đây là tập hợp số lượng mong muốn tối thiểu bao gồm các phân vùng tương đương cho đầu vào này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 0,0, 20,0, 60,0\n  B) 0,0, 0,1, 50,0\n  C) 0,0, 0,1, 50,0, 70,0\n  D) -0,1, 0,0, 0,1, 49,9, 50,0, 50,1\n\n[GIẢI THÍCH CHI TIẾT]\nBàn phím chỉ cho nhập chữ số (không nhập được số âm), nên có 3 phân vùng: 0.0 — không có giao dịch bán; 0.1 – 50.0 — lượng bán hợp lệ; ≥ 50.1 — lượng không hợp lệ. Bộ TỐI THIỂU cần đúng 1 giá trị/phân vùng: 0.0, 20.0, 60.0 ⇒ (a). (b) thiếu phân vùng không hợp lệ (> 50.0). (c) phủ đủ nhưng dùng 2 giá trị cho phân vùng hợp lệ (0.1 và 50.0) — không tối thiểu. (d) là bộ giá trị BVA 3 điểm quanh hai biên (kèm −0.1 không thể nhập), hoàn toàn không phải bộ tối thiểu theo phân vùng.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang làm quản lý dự án cho một dự án phần mềm ngân hàng nội bộ. Để ngăn chặn việc làm lại và các chu kỳ tìm/sửa/kiểm tra lại quá mức, quy trình hiển thị trong hình đã được áp dụng để giải quyết các lỗi được tìm thấy trong phòng kiểm thử. Tuy nhiên, một số lượng lớn các lỗi mà người kiểm thử đã xác nhận là đã sửa trong môi trường phát triển (ở bước 3) bằng cách nào đó lại không đạt được kiểm thử xác nhận trong môi trường kiểm thử (ở bước 5), dẫn đến kết quả là phải làm lại và theo chu kỳ. Bạn có độ tin cậy cao nhất đối với tester (kiểm thử viên) của mình và đã loại trừ những sai sót hoặc thiếu sót ở bước 3. Phần nào sau đây có khả năng xảy ra nhất trong quy trình cần kiểm tra tiếp theo?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hoạt động của các nhà phát triển, những người có thể không được kiểm tra đầy đủ ở bước 2\n  B) Hoạt động của người kiểm tra, những người có thể bối rối về những gì cần kiểm tra ở bước 5\n  C) Quản lý cấu hình, có thể không duy trì được tính toàn vẹn của sản phẩm ở bước 4\n  D) Hoạt động của các nhà phát triển, những người có thể không sửa lỗi đúng cách ở bước 1\n\n[GIẢI THÍCH CHI TIẾT]\nManh mối then chốt: bản sửa hoạt động ĐÚNG ở môi trường phát triển (bước 3 đã xác nhận, tester được tin tưởng) nhưng LẠI HỎNG ở môi trường kiểm thử (bước 5). Khâu nằm giữa hai lần xác nhận đó là bước 4 — đóng gói bản phát hành hằng ngày chứa mọi bản sửa và cài vào test environment. Nếu quản lý cấu hình không bảo toàn tính toàn vẹn (thiếu file, sai phiên bản, build từ nhánh không chứa fix…), fix “bốc hơi” khi sang môi trường test — đúng hiện tượng quan sát ⇒ (c). (a) và (d) không giải thích được việc fix đã chạy đúng ở bước 3; (b) mâu thuẫn với giả thiết “tin tưởng cao nhất vào tester”.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.4 Configuration Management."
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
    "exp": "[DỊCH CÂU HỎI]\nChất lượng là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các hoạt động tập trung vào việc tạo niềm tin rằng các yêu cầu về chất lượng sẽ được đáp ứng\n  B) Mức độ mà một thành phần hoặc hệ thống đáp ứng các nhu cầu đã nêu và tiềm ẩn của các bên liên quan khác nhau\n  C) Mức độ mà một thành phần hoặc hệ thống bảo vệ thông tin và dữ liệu để cá nhân hoặc các thành phần hoặc hệ thống khác có mức độ truy cập phù hợp với loại và mức độ ủy quyền của họ\n  D) Tổng chi phí phát sinh cho các hoạt động và vấn đề chất lượng, thường được chia thành chi phí phòng ngừa, chi phí thẩm định, chi phí sai sót bên trong và chi phí sai sót bên ngoài.\n\n[GIẢI THÍCH CHI TIẾT]\nĐịnh nghĩa QUALITY theo Glossary: mức độ mà component hoặc hệ thống thỏa mãn các nhu cầu ĐƯỢC PHÁT BIỂU và NGẦM ĐỊNH của các bên liên quan ⇒ (b). Các phương án còn lại là định nghĩa của khái niệm khác: (a) là QUALITY ASSURANCE (các hoạt động tạo niềm tin rằng yêu cầu chất lượng sẽ được đáp ứng); (c) là SECURITY (đặc tính bảo mật trong ISO 25010); (d) là COST OF QUALITY (tổng chi phí chất lượng: phòng ngừa, thẩm định, hỏng hóc nội bộ, hỏng hóc bên ngoài).\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.2.2 Quality and Quality Assurance & ISTQB Glossary."
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
    "exp": "[DỊCH CÂU HỎI]\nTrong một cuộc đánh giá chính thức, vai trò của người tham gia điều hành cuộc họp kiểm tra là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người hướng dẫn\n  B) Lập trình viên\n  C) Tác giả\n  D) Người quản lý dự án\n\n[GIẢI THÍCH CHI TIẾT]\nNgười điều hành cuộc họp review chính thức (đặc biệt là INSPECTION) là FACILITATOR — còn gọi là moderator: đảm bảo cuộc họp vận hành hiệu quả, hòa giải các quan điểm, giữ không khí thảo luận an toàn ⇒ (a). (c) sai: trong inspection, author KHÔNG được dẫn dắt cuộc họp (khác với walkthrough, nơi author là người dẫn). (b) “programmer” không phải vai trò trong quy trình review. (d) project manager có thể là “manager” quyết định tổ chức review và cấp nguồn lực, nhưng không phải người điều hành cuộc họp.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.2.2 Roles and Responsibilities in a Formal Review (& 3.2.3 Review Types)."
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
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là thước đo kiểm thử phổ biến thường được sử dụng để giám sát CẢ việc chuẩn bị kiểm thử và thực hiện kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Trạng thái test case (ca kiểm thử)\n  B) Tỷ lệ tìm/sửa lỗi\n  C) Chuẩn bị môi trường kiểm thử\n  D) Chi phí ước tính để tìm ra lỗi tiếp theo\n\n[GIẢI THÍCH CHI TIẾT]\nTrạng thái test case là số đo dùng được ở CẢ HAI giai đoạn: khi CHUẨN BỊ, nó theo dõi tỷ lệ test case đã được thiết kế/hiện thực/sẵn sàng; khi THỰC THI, nó theo dõi số test đã chạy — đạt/rớt/bị chặn/bỏ qua ⇒ (a). (b) tỷ lệ tìm/sửa defect chỉ có ý nghĩa từ khi bắt đầu THỰC THI (mới phát sinh defect động). (c) tiến độ chuẩn bị môi trường chỉ thuộc giai đoạn chuẩn bị. (d) chi phí ước tính để tìm defect kế tiếp là số đo giai đoạn cuối thực thi (đánh giá điểm dừng), không dùng cho chuẩn bị.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.3.1 Metrics Used in Testing."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang lên kế hoạch kiểm thử (test plan) một ứng dụng ngân hàng di động mới. Là một phần của quá trình ước tính, trước tiên bạn gặp những tester (kiểm thử viên) được đề xuất và những người khác trong dự án - nhóm phối hợp tốt và đã làm việc trong các dự án tương tự. Để xác minh ước tính kết quả, sau đó bạn tham khảo mức trung bình của ngành để kiểm tra nỗ lực và chi phí cho các dự án tương tự, do nhà tư vấn có uy tín công bố. Câu nào mô tả chính xác phương pháp ước tính của bạn?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Một cách tiếp cận đồng thời dựa trên chuyên gia và dựa trên số liệu\n  B) Chủ yếu là cách tiếp cận dựa trên chuyên gia, được tăng cường bằng cách tiếp cận dựa trên số liệu\n  C) Chủ yếu là cách tiếp cận dựa trên số liệu, được tăng cường bằng cách tiếp cận dựa trên chuyên gia\n  D) Chủ yếu lập kế hoạch chơi bài poker, được kiểm tra theo tốc độ từ biểu đồ burndown\n\n[GIẢI THÍCH CHI TIẾT]\nNguồn ước lượng CHÍNH là kinh nghiệm của các tester và thành viên đã làm dự án tương tự — đó là EXPERT-BASED. Số liệu trung bình ngành do nhà tư vấn công bố chỉ dùng để KIỂM CHỨNG lại kết quả — đó là METRICS-BASED đóng vai trò bổ trợ ⇒ (b). (a) sai chữ “simultaneous”: hai cách được dùng TUẦN TỰ (ước lượng trước, đối chiếu sau), không đồng thời. (c) đảo ngược vai trò chính–phụ. (d) không có dữ kiện nào cho thấy dùng planning poker hay burndown chart; số liệu ngành cũng không phải velocity nội bộ.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.2.6 Test Estimation."
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
    "exp": "[DỊCH CÂU HỎI]\nMột tiếng chuông điện thoại nhất thời khiến lập trình viên mất tập trung, khiến lập trình viên mã hóa không đúng logic để kiểm tra ranh giới trên của biến đầu vào. Sau đó, trong quá trình kiểm tra hệ thống, người kiểm tra nhận thấy rằng trường đầu vào này chấp nhận các giá trị đầu vào không hợp lệ. Logic được mã hóa không đúng để kiểm tra ranh giới trên là:\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nguyên nhân sâu xa\n  B) Sự thất bại\n  C) Lỗi\n  D) Khiếm khuyết\n\n[GIẢI THÍCH CHI TIẾT]\nChuỗi nhân quả chuẩn: root cause/error → defect → failure. Tiếng chuông điện thoại gây phân tâm là ROOT CAUSE (điều kiện dẫn tới sai sót); hành động sai của lập trình viên trong lúc phân tâm là ERROR (sai lầm của con người); ĐOẠN LOGIC KIỂM TRA BIÊN TRÊN BỊ VIẾT SAI nằm trong mã nguồn là DEFECT — khiếm khuyết trong sản phẩm công việc ⇒ (d); còn việc trường nhập liệu CHẤP NHẬN giá trị không hợp lệ mà tester quan sát thấy khi chạy hệ thống là FAILURE.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.2.3 Errors, Defects and Failures."
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
    "exp": "[DỊCH CÂU HỎI]\nTrong một dự án theo phương pháp Agile, bạn nhận thấy sự khác biệt giữa cách giải thích của nhà phát triển về tiêu chí chấp nhận và cách giải thích của chủ sở hữu sản phẩm mà bạn đưa ra trong phiên sàng lọc câu chuyện của người dùng. Những lợi ích nào sau đây của tính độc lập của kiểm thử được minh họa trong tình huống này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhận biết các loại thất bại khác nhau\n  B) Chịu trách nhiệm chính về chất lượng\n  C) Loại bỏ sớm một khiếm khuyết\n  D) Những giả định đầy thách thức của các bên liên quan\n\n[GIẢI THÍCH CHI TIẾT]\nMột lợi ích của tính độc lập trong kiểm thử: tester độc lập có thể XÁC MINH, THÁCH THỨC hoặc bác bỏ các GIẢ ĐỊNH mà các bên liên quan đưa ra trong quá trình đặc tả và hiện thực hệ thống. Ở đây developer và product owner đang hiểu acceptance criterion theo hai cách khác nhau (mỗi bên mang một giả định riêng) và tester là người phát hiện, nêu vấn đề ra phiên refinement ⇒ (d). (a) “nhận diện các loại failure khác nhau” áp dụng cho kiểm thử động, không phải tình huống review yêu cầu. (b) trách nhiệm chất lượng thuộc về CẢ NHÓM, không phải lợi ích của độc lập. (c) đúng là defect được loại sớm, nhưng đó là lợi ích của KIỂM THỬ TĨNH nói chung — điểm đặc trưng cho TÍNH ĐỘC LẬP ở đây là việc chất vấn giả định.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.1.1 Independent Testing."
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
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét một ứng dụng di động cho phép khách hàng truy cập và quản lý tài khoản ngân hàng của họ. Một câu chuyện của người dùng vừa được thêm vào để kiểm tra tài khoản mạng xã hội và hồ sơ ngân hàng của khách hàng để đưa ra lời chúc được cá nhân hóa vào ngày sinh nhật và các cột mốc cá nhân khác. Kỹ thuật kiểm tra nào sau đây mà LẬP TRÌNH có thể sử dụng trong quá trình kiểm tra đơn vị mã để đảm bảo bao phủ các tình huống trong đó lời chào lẽ ra phải xảy ra và trong đó lời chào KHÔNG được phép xảy ra?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra tuyên bố\n  B) Kiểm thử thăm dò (exploratory testing)\n  C) Kiểm tra chuyển đổi trạng thái\n  D) Kiểm tra quyết định\n\n[GIẢI THÍCH CHI TIẾT]\nYêu cầu phủ CẢ HAI nhánh của quyết định “có hiển thị lời chúc hay không” — đúng bản chất DECISION TESTING: thiết kế test đi theo các luồng điều khiển xuất phát từ điểm quyết định, bảo đảm mỗi decision outcome (true/false) đều được thực thi ⇒ (d). (a) statement testing chỉ cần chạy hết các câu lệnh — nhánh “KHÔNG chúc” có thể không chứa câu lệnh nào nên có thể đạt 100% statement mà chưa hề test trường hợp không chúc. (b) exploratory khó bảo đảm/ đo mức phủ này nếu charter không nêu rõ. (c) state transition phù hợp khi phản ứng phụ thuộc TRẠNG THÁI/LỊCH SỬ trước đó; ở đây quyết định chỉ dựa vào việc ngày hiện tại có trùng cột mốc hay không.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Coverage (& 4.3.3 giá trị của white-box)."
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
    "exp": "[DỊCH CÂU HỎI]\nMột ứng dụng hàng loạt đã được sản xuất không thay đổi trong hơn hai năm. Nó chạy qua đêm mỗi tháng một lần để tạo ra các báo cáo được gửi qua email cho khách hàng. Đối với mỗi khách hàng, ứng dụng sẽ xem xét từng tài khoản và liệt kê mọi giao dịch trên tài khoản đó trong tháng trước, sử dụng cấu trúc vòng lặp lồng nhau: khách hàng (vòng ngoài), tài khoản của từng khách hàng (vòng giữa) và giao dịch của từng tài khoản (vòng trong). Một đêm nọ, ứng dụng hàng loạt chấm dứt sớm, không gửi được báo cáo qua e-mail cho một số khách hàng khi nó gặp một khách hàng có tài khoản không có giao dịch nào trong tháng trước - một tình huống rất bất thường chưa từng xảy ra trước đây. Trong khi sửa lỗi, lập trình viên yêu cầu bạn đề xuất một kỹ thuật kiểm thử có hiệu quả đối với loại lỗi này. Kỹ thuật kiểm thử nào sau đây có nhiều khả năng phát hiện được lỗi cơ bản nhất?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra quyết định\n  B) Kiểm tra tuyên bố\n  C) Kiểm tra dựa trên danh sách kiểm tra\n  D) Lỗi đoán\n\n[GIẢI THÍCH CHI TIẾT]\nDefect nằm ở tình huống vòng lặp trong (danh sách giao dịch) được thực thi KHÔNG LẦN NÀO. Với cấu trúc lặp: statement coverage chỉ đòi các câu lệnh TRONG thân vòng lặp được chạy — tức luôn test trường hợp “có lặp”, không bắt buộc test trường hợp “bỏ qua vòng lặp”; còn DECISION coverage yêu cầu điều kiện lặp phải nhận CẢ hai kết cục: có vào thân lặp VÀ không vào (0 lần lặp) — chính là trường hợp tài khoản không có giao dịch ⇒ (a). (c) checklist dựa trên kinh nghiệm/tri thức sẵn có, khó dẫn đến điều kiện hiếm này. (d) error guessing CÓ THỂ đoán ra nếu ai đó nghi ngờ giả định “luôn có ít nhất một giao dịch”, nhưng chỉ decision testing BẢO ĐẢM điều kiện đó được kiểm.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Coverage."
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
    "exp": "[DỊCH CÂU HỎI]\nCông cụ nào sau đây hữu ích nhất để báo cáo số liệu kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Công cụ quản lý kiểm tra\n  B) Công cụ phân tích tĩnh\n  C) Công cụ bảo hiểm\n  D) Công cụ kiểm tra dựa trên mô hình\n\n[GIẢI THÍCH CHI TIẾT]\nCông cụ QUẢN LÝ KIỂM THỬ hỗ trợ toàn bộ việc quản lý test và testware: theo dõi trạng thái test case, defect, truy vết yêu cầu — và đặc biệt là TỔNG HỢP, BÁO CÁO các số đo kiểm thử (tiến độ, tỷ lệ đạt/rớt, mật độ defect…) ⇒ (a). (b) static analysis phục vụ phân tích mã tĩnh (tìm defect trong code), (c) coverage tool đo MỘT loại số liệu là độ phủ khi thực thi — nó cung cấp dữ liệu chứ không phải công cụ báo cáo tổng hợp; (d) model-based testing tool sinh test case từ mô hình — thuộc nhóm hỗ trợ thiết kế test.\n\nTham chiếu: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.1.1 Test Tool Classification (nhóm quản lý testing & testware)."
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một ứng dụng di động cho phép người dùng tìm nhà hàng gần đó dựa trên loại đồ ăn họ muốn ăn. Hãy xem xét danh sách các test case (ca kiểm thử), mức độ ưu tiên (số nhỏ hơn có nghĩa là mức độ ưu tiên cao hơn) và các phần phụ thuộc được hiển thị trong hình. Điều nào sau đây là lịch trình thực hiện kiểm thử có thể xem xét cả mức độ ưu tiên và phụ thuộc?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 01.001, 01.002, 01.003, 01.005\n  B) 01.001, 01.002, 01.004, 01.003\n  C) 01.003, 01.004, 01.002, 01.001\n  D) 01.001, 01.002, 01.004, 01.005\n\n[GIẢI THÍCH CHI TIẾT]\nRàng buộc: 01.002 phụ thuộc 01.001; 01.003 và 01.004 cùng phụ thuộc 01.002. Do chuỗi phụ thuộc, thứ tự bắt buộc là 01.001 → 01.002 → {01.003, 01.004}; hai test cuối cùng có cùng mức ưu tiên 1 nên chạy trước–sau đều được. (b) 01.001, 01.002, 01.004, 01.003 thỏa cả phụ thuộc lẫn ưu tiên ⇒ (b). (a) và (d) chứa test case 01.005 không tồn tại (và (d) còn bỏ sót 01.003). (c) đảo ngược hoàn toàn thứ tự phụ thuộc — chạy 01.003, 01.004 khi các test tiền đề chưa chạy.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.2.4 Test Execution Schedule. PHẦN BỔ SUNG – CÂU HỎI THEO NỘI DUNG MỚI CỦA CTFL v4.0"
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
    "exp": "[DỊCH CÂU HỎI]\nDanh sách nào sau đây hiển thị năm cấp độ kiểm tra như được xác định trong giáo trình CTFL v4.0?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm thử thành phần, kiểm thử tích hợp thành phần, kiểm thử hệ thống, kiểm thử tích hợp hệ thống, kiểm thử chấp nhận\n  B) Kiểm thử đơn vị, kiểm thử mô-đun, kiểm thử hệ thống (system testing) con, kiểm thử alpha, kiểm thử beta\n  C) Kiểm thử thành phần, kiểm thử tích hợp, kiểm thử hệ thống, kiểm thử chấp nhận, kiểm thử bảo trì\n  D) Kiểm tra tĩnh, kiểm tra động, kiểm tra chức năng, kiểm tra phi chức năng, kiểm tra hồi quy\n\n[GIẢI THÍCH CHI TIẾT]\nCTFL v4.0 định nghĩa NĂM test level, trong đó mức tích hợp được tách đôi so với syllabus 2018: component testing; COMPONENT INTEGRATION testing (tích hợp giữa các component); system testing; SYSTEM INTEGRATION testing (tích hợp giữa các hệ thống, hoặc với dịch vụ/hệ thống bên ngoài); acceptance testing ⇒ (a). (b) dùng các tên không chuẩn (alpha/beta là HÌNH THỨC của acceptance testing, không phải level riêng). (c) sai vì maintenance testing không phải một test level — đó là kiểm thử thực hiện trong bối cảnh bảo trì, dùng lại các level/type sẵn có. (d) liệt kê toàn test type và cách tiếp cận, không phải level.\n\nTham chiếu: CTFL v4.0 — Chương 2, mục 2.2.1 Test Levels."
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
    "exp": "[DỊCH CÂU HỎI]\nTrong phát triển phần mềm Agile, cặp khái niệm nào thường được sử dụng làm tiêu chí đầu vào và tiêu chí đầu ra cho một hạng mục công việc?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Định nghĩa Sẵn sàng (tiêu chí đầu vào) và Định nghĩa Hoàn thành (tiêu chí đầu ra)\n  B) Định nghĩa Hoàn thành (tiêu chí đầu vào) và Định nghĩa Sẵn sàng (tiêu chí đầu ra)\n  C) Biểu đồ Burndown (tiêu chí đầu vào) và vận tốc (tiêu chí đầu ra)\n  D) Điều lệ kiểm tra (tiêu chí đầu vào) và nhật ký kiểm tra (tiêu chí đầu ra)\n\n[GIẢI THÍCH CHI TIẾT]\nv4.0 chỉ rõ: trong Agile, DEFINITION OF READY (DoR) đóng vai trò ENTRY CRITERIA — tập điều kiện một user story phải thỏa để nhóm có thể BẮT ĐẦU làm/kiểm thử nó (ví dụ: có acceptance criteria rõ ràng, đã ước lượng, phụ thuộc đã xử lý); còn DEFINITION OF DONE (DoD) đóng vai trò EXIT CRITERIA — tập điều kiện để tuyên bố hạng mục HOÀN THÀNH (ví dụ: code đã review, test tự động chạy đạt, độ phủ đạt ngưỡng, tài liệu cập nhật) ⇒ (a). (b) đảo ngược. (c) burndown chart và velocity là công cụ theo dõi tiến độ, không phải tiêu chí vào/ra. (d) test charter/test log thuộc exploratory testing và ghi nhận thực thi.\n\nTham chiếu: CTFL v4.0 — Chương 5, mục 5.1.3 Entry Criteria and Exit Criteria."
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
    "exp": "[DỊCH CÂU HỎI]\nCác test case (ca kiểm thử) bao gồm các yêu cầu có mức độ ưu tiên kinh doanh cao nhất, theo sự chỉ định của các bên liên quan, sẽ được thực hiện trước tiên. Chiến lược ưu tiên test case (ca kiểm thử) nào đang được áp dụng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Ưu tiên dựa trên rủi ro\n  B) Ưu tiên dựa trên phạm vi bảo hiểm\n  C) Ưu tiên dựa trên yêu cầu\n  D) Ưu tiên dựa trên sự phụ thuộc\n\n[GIẢI THÍCH CHI TIẾT]\nv4.0 nêu ba chiến lược ưu tiên hóa test case: RISK-BASED — chạy trước các test phủ những RỦI RO quan trọng nhất (theo kết quả phân tích rủi ro); COVERAGE-BASED — chạy theo thứ tự đạt độ phủ nhanh nhất (mỗi test kế tiếp tăng thêm độ phủ nhiều nhất — biến thể “additional coverage”); REQUIREMENTS-BASED — chạy trước các test gắn với YÊU CẦU có độ ưu tiên cao nhất do các bên liên quan gán. Tình huống mô tả đúng requirements-based ⇒ (c). (d) “dependency-based” không phải một chiến lược trong syllabus — các phụ thuộc (kỹ thuật/logic) chỉ là RÀNG BUỘC có thể buộc điều chỉnh thứ tự ưu tiên mong muốn.\n\nTham chiếu: CTFL v4.0 — Chương 5, mục 5.1.5 Test Case Prioritization."
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
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây về kỹ thuật ước lượng kiểm thử là ĐÚNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Lập kế hoạch poker là một kỹ thuật ước tính dựa trên sự đồng thuận, một biến thể của Wideband Delphi, trong đó các thành viên trong nhóm ước tính bằng cách sử dụng thẻ và thảo luận cho đến khi đạt được thỏa thuận; nó thường được sử dụng trong phát triển Agile\n  B) Lập kế hoạch chơi bài là một kỹ thuật trong đó ước tính được ngoại suy từ vận tốc đo được của hai lần lặp trước đó.\n  C) Trong Wideband Delphi, ước tính được tạo ra bằng cách chia tổng ngân sách dự án cho chi phí tiêu chuẩn của ngành cho mỗi test case (ca kiểm thử)\n  D) Việc lập kế hoạch chơi poker phải được thực hiện bởi một mình người quản lý kiểm tra, để tránh các ước tính bị sai lệch bởi các nhà phát triển\n\n[GIẢI THÍCH CHI TIẾT]\nWideband Delphi là kỹ thuật ước lượng DỰA TRÊN ĐỒNG THUẬN của nhóm chuyên gia: mỗi người ước lượng độc lập, sau đó so sánh — thảo luận — ước lượng lại đến khi hội tụ. PLANNING POKER là biến thể của Wideband Delphi phổ biến trong Agile, dùng bộ bài (thường theo dãy Fibonacci) để mỗi thành viên ra ước lượng đồng thời rồi thảo luận các chênh lệch ⇒ (a). (b) mô tả kỹ thuật NGOẠI SUY (extrapolation) dựa trên số đo lịch sử, không phải planning poker. (c) bịa đặt — Wideband Delphi dựa trên phán đoán chuyên gia, không có “chi phí chuẩn ngành trên mỗi test case”. (d) phản tinh thần kỹ thuật: sức mạnh nằm ở TRÍ TUỆ TẬP THỂ của cả nhóm.\n\nTham chiếu: CTFL v4.0 — Chương 5, mục 5.1.4 Estimation Techniques."
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
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây về độ phủ câu lệnh (statement coverage) và độ phủ nhánh (branch coverage) là ĐÚNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Bảo hiểm tuyên bố 100% luôn đảm bảo bảo hiểm 100% chi nhánh\n  B) Phạm vi bao phủ 100% chi nhánh đảm bảo bao phủ 100% câu lệnh, nhưng phạm vi bao phủ 100% câu lệnh không đảm bảo bao phủ 100% chi nhánh\n  C) Bảo hiểm tuyên bố và bảo hiểm chi nhánh là hai tên cho cùng một biện pháp bảo hiểm\n  D) Không thể đo độ phủ nhánh (branch coverage) đối với mã có chứa vòng lặp\n\n[GIẢI THÍCH CHI TIẾT]\nv4.0 dùng thuật ngữ BRANCH COVERAGE (thay cho decision coverage của bản 2018) và nêu rõ quan hệ bao hàm: khi mọi NHÁNH (cả không điều kiện lẫn có điều kiện) đã được thực thi thì mọi câu lệnh chắc chắn đã được thực thi — 100% branch ⇒ 100% statement; chiều ngược lại KHÔNG đúng: ví dụ một lệnh “if” không có nhánh else, chỉ cần một test đi qua nhánh true là đạt 100% statement nhưng nhánh false chưa hề được kiểm ⇒ (b). (c) sai — branch là tiêu chí MẠNH HƠN statement. (d) sai — vòng lặp vẫn đo được (nhánh vào thân lặp và nhánh thoát).\n\nTham chiếu: CTFL v4.0 — Chương 4, mục 4.3.1 Statement Testing, 4.3.2 Branch Testing."
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
