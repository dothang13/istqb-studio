/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 02 (Giải chi tiết TV) (43 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 02 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (43 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-1.4.3]",
    "stem": "Which of the following provides the definition of the term “test case”?",
    "opts": [
      {
        "k": "a",
        "t": "A) Subset of the value domain of a variable within a component or system in which all values are expected to be treated the same based on the specification"
      },
      {
        "k": "b",
        "t": "B) A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions"
      },
      {
        "k": "c",
        "t": "C) Work products produced during the test process for use in planning, designing, executing, evaluating and reporting on testing"
      },
      {
        "k": "d",
        "t": "D) A source to determine an expected result to compare with the actual result of the system under test"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây cung cấp định nghĩa về thuật ngữ “test case (ca kiểm thử)”?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Tập hợp con miền giá trị của một biến trong một thành phần hoặc hệ thống trong đó tất cả các giá trị dự kiến sẽ được xử lý giống nhau dựa trên thông số kỹ thuật\n  B) Một tập hợp các điều kiện tiên quyết, đầu vào, hành động (nếu có), kết quả mong đợi và hậu điều kiện, được phát triển dựa trên các điều kiện kiểm thử\n  C) Sản phẩm công việc được tạo ra trong quá trình kiểm thử để sử dụng trong việc lập kế hoạch, thiết kế, thực hiện, đánh giá và báo cáo về kiểm thử\n  D) Một nguồn để xác định kết quả mong đợi để so sánh với kết quả thực tế của hệ thống đang được kiểm thử\n\n💡 GIẢI THÍCH CHI TIẾT:\nTheo Glossary, test case là tập hợp gồm điều kiện tiên quyết (preconditions), đầu vào, hành động (nếu có), kết quả mong đợi và hậu điều kiện (postconditions), được phát triển dựa trên các test condition ⇒ (b). Các phương án còn lại là định nghĩa của khái niệm khác: (a) là equivalence partition (phân vùng tương đương); (c) là testware (sản phẩm công việc của quy trình kiểm thử); (d) là test oracle (nguồn xác định kết quả mong đợi).\n\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.3 Test Work Products & ISTQB Glossary (test case)."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-5.5.2]",
    "stem": "Which of the following is MOST likely to be an example of a PRODUCT risk?",
    "opts": [
      {
        "k": "a",
        "t": "A) The expected security features may not be supported by the system architecture"
      },
      {
        "k": "b",
        "t": "B) The developers may not have time to fix all the defects found by the test team"
      },
      {
        "k": "c",
        "t": "C) The test cases may not provide full coverage of the specified requirements"
      },
      {
        "k": "d",
        "t": "D) The performance test environment may not be ready before the system is due for delivery"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây có khả năng nhất là ví dụ về rủi ro SẢN PHẨM?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Các tính năng bảo mật dự kiến có thể không được kiến trúc hệ thống hỗ trợ\n  B) Các nhà phát triển có thể không có thời gian để sửa tất cả các lỗi mà nhóm kiểm thử tìm thấy\n  C) Các test case (ca kiểm thử) có thể không cung cấp đầy đủ các yêu cầu đã chỉ định\n  D) Môi trường kiểm tra hiệu năng có thể chưa sẵn sàng trước khi hệ thống sắp được phân phối\n\n💡 GIẢI THÍCH CHI TIẾT:\nProduct risk (rủi ro sản phẩm) liên quan trực tiếp đến chất lượng của chính sản phẩm — kiến trúc hệ thống không hỗ trợ được các tính năng bảo mật mong đợi là vấn đề nằm trong sản phẩm bàn giao ⇒ (a). Ba phương án còn lại là project risk (rủi ro dự án) vì ảnh hưởng đến năng lực hoàn thành dự án chứ không phải chất lượng nội tại của sản phẩm: (b) thiếu thời gian sửa lỗi (vấn đề tiến độ/nguồn lực); (c) test case không phủ hết yêu cầu (vấn đề của sản phẩm công việc kiểm thử); (d) môi trường kiểm thử hiệu năng chưa sẵn sàng (vấn đề môi trường/tiến độ).\n\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.5.2 Product and Project Risks."
  },
  {
    "n": 3,
    "ref": "Câu 3 [FL-5.2.4]",
    "stem": "Which of the following test execution schedules BEST considers the priorities and the technical and logical dependencies?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) TC4 – TC2 – TC5 – TC1 – TC3 – TC6"
      },
      {
        "k": "b",
        "t": "B) TC4 – TC1 – TC3 – TC5 – TC6 – TC2"
      },
      {
        "k": "c",
        "t": "C) TC4 – TC3 – TC1 – TC2 – TC5 – TC6"
      },
      {
        "k": "d",
        "t": "D) TC1 – TC3 – TC4 – TC6 – TC2 – TC5"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nLịch trình thực hiện kiểm thử nào sau đây TỐT NHẤT xem xét các mức độ ưu tiên cũng như sự phụ thuộc về mặt kỹ thuật và logic?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) TC4 – TC2 – TC5 – TC1 – TC3 – TC6\n  B) TC4 – TC1 – TC3 – TC5 – TC6 – TC2\n  C) TC4 – TC3 – TC1 – TC2 – TC5 – TC6\n  D) TC1 – TC3 – TC4 – TC6 – TC2 – TC5\n\n💡 GIẢI THÍCH CHI TIẾT:\nRàng buộc phụ thuộc: TC1 và TC3 phải chạy sau TC4; TC5 phải chạy sau TC2; TC6 phải chạy sau TC5. (b) sai vì TC5 chạy trước TC2. (d) sai vì TC1, TC3 chạy trước TC4. Còn lại (a) và (c) đều hợp lệ về phụ thuộc, nhưng (c) tôn trọng độ ưu tiên tốt hơn: sau TC4 (bắt buộc chạy đầu), hai test ưu tiên High là TC3 và TC1 được chạy ngay, rồi mới đến chuỗi TC2 (Low) → TC5 (Low) → TC6 (Medium) vốn bị ràng buộc phụ thuộc kéo theo. (a) đẩy hai test High xuống sau các test Low dù không có ràng buộc nào bắt buộc như vậy.\n\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2.4 Test Execution Schedule."
  },
  {
    "n": 4,
    "ref": "Câu 4 [FL-5.2.3]",
    "stem": "Given the following examples of entry and exit criteria (see the figure). Which of the following BEST categorizes them as entry criteria and exit criteria?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Entry criteria – 5, 6; Exit criteria – 1, 2, 3, 4"
      },
      {
        "k": "b",
        "t": "B) Entry criteria – 2, 3, 6; Exit criteria – 1, 4, 5"
      },
      {
        "k": "c",
        "t": "C) Entry criteria – 1, 3; Exit criteria – 2, 4, 5, 6"
      },
      {
        "k": "d",
        "t": "D) Entry criteria – 3, 5, 6; Exit criteria – 1, 2, 4"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCho các ví dụ sau về tiêu chí vào và ra (xem hình). Điều nào sau đây TỐT NHẤT phân loại chúng thành tiêu chí đầu vào và tiêu chí đầu ra?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Tiêu chí đầu vào – 5, 6; tiêu chí đầu ra (exit criteria) – 1, 2, 3, 4\n  B) Tiêu chí đầu vào – 2, 3, 6; tiêu chí đầu ra (exit criteria) – 1, 4, 5\n  C) Tiêu chí đầu vào – 1, 3; tiêu chí đầu ra (exit criteria) – 2, 4, 5, 6\n  D) Tiêu chí đầu vào – 3, 5, 6; tiêu chí đầu ra (exit criteria) – 1, 2, 4\n\n💡 GIẢI THÍCH CHI TIẾT:\nEntry criteria là điều kiện phải thỏa để BẮT ĐẦU một hoạt động kiểm thử: (3) môi trường kiểm thử hiệu năng đã được thiết kế, dựng và xác minh — tính sẵn sàng của môi trường; (5) đặc tả thiết kế đã được review và chỉnh sửa — tính sẵn sàng của test basis; (6) component đã qua unit test — tính sẵn sàng của test item để vào mức kiểm thử tiếp theo. Exit criteria là điều kiện để KẾT THÚC: (1) ngân sách (kể cả dự phòng) đã dùng hết; (2) 96% test đã chạy và phần còn lại đưa ra ngoài phạm vi — mức độ hoàn thành theo kế hoạch; (4) không còn defect critical và chỉ còn 2 defect high — ngưỡng chất lượng. Vậy Entry {3, 5, 6}, Exit {1, 2, 4} ⇒ (d).\n\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2.3 Entry Criteria and Exit Criteria."
  },
  {
    "n": 5,
    "ref": "Câu 5 [FL-1.4.4]",
    "stem": "Which of the following BEST describes how value is added by maintaining traceability between the test basis and test artifacts?",
    "opts": [
      {
        "k": "a",
        "t": "A) Maintenance testing can be fully automated based on changes to the initial requirements"
      },
      {
        "k": "b",
        "t": "B) It is possible to determine if a new test case has increased the coverage of the requirements"
      },
      {
        "k": "c",
        "t": "C) Test managers can identify which testers found the highest severity defects"
      },
      {
        "k": "d",
        "t": "D) Areas that may be impacted by side-effects of a change can be targeted by confirmation testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT mô tả cách tăng thêm giá trị bằng cách duy trì khả năng truy xuất nguồn gốc giữa test basis (cơ sở kiểm thử) và các thành phần kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra bảo trì có thể được tự động hóa hoàn toàn dựa trên những thay đổi đối với các yêu cầu ban đầu\n  B) Có thể xác định xem một test case (ca kiểm thử) mới có tăng phạm vi bao phủ của các yêu cầu hay không\n  C) Người quản lý kiểm thử có thể xác định người kiểm thử nào tìm thấy lỗi có mức độ nghiêm trọng cao nhất\n  D) Các khu vực có thể bị ảnh hưởng bởi tác dụng phụ của thay đổi có thể được nhắm mục tiêu bằng kiểm thử xác nhận (confirmation testing)\n\n💡 GIẢI THÍCH CHI TIẾT:\nTruy vết (traceability) giữa test basis (ví dụ yêu cầu) và các sản phẩm kiểm thử (test condition, test case…) cho phép đánh giá độ phủ yêu cầu — nhờ đó biết được một test case mới có làm tăng độ phủ hay không ⇒ (b). (a) sai: truy vết không giúp “tự động hóa hoàn toàn” maintenance testing. (c) sai: việc ai tìm ra defect nghiêm trọng thuộc dữ liệu quản lý defect, không phải giá trị của truy vết yêu cầu–test. (d) sai về thuật ngữ: vùng bị ảnh hưởng bởi side- effect của thay đổi là mục tiêu của REGRESSION testing (dựa trên impact analysis), không phải confirmation testing.\n\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.4 Traceability between the Test Basis and Test Work Products."
  },
  {
    "n": 6,
    "ref": "Câu 6 [FL-5.5.2]",
    "stem": "Which of the following is LEAST likely to be an example of product risk analysis CORRECTLY influencing the testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The potential impact of security flaws has been identified as being particularly high, so security testing has been prioritized ahead of some other testing activities"
      },
      {
        "k": "b",
        "t": "B) Testing has found the quality of the network module to be higher than expected, so additional testing will be performed in that area"
      },
      {
        "k": "c",
        "t": "C) The users had problems with the user interface of the previous system, so additional usability testing is planned for the replacement system"
      },
      {
        "k": "d",
        "t": "D) The time needed to load web pages is crucial to the success of the new website, so an expert in performance testing has been employed for this project"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây ÍT NHẤT có thể là ví dụ về phân tích rủi ro sản phẩm CÓ ảnh hưởng ĐÚNG đến quá trình kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Tác động tiềm ẩn của các lỗi bảo mật được xác định là đặc biệt cao nên việc kiểm thử bảo mật đã được ưu tiên hơn một số hoạt động kiểm thử khác.\n  B) Kiểm tra đã nhận thấy chất lượng của mô-đun mạng cao hơn mong đợi nên việc kiểm tra bổ sung sẽ được thực hiện ở khu vực đó\n  C) Người dùng gặp vấn đề với giao diện người dùng của hệ thống trước đó, vì vậy việc kiểm tra khả năng sử dụng bổ sung đã được lên kế hoạch cho hệ thống thay thế\n  D) Thời gian cần thiết để tải các trang web là rất quan trọng đối với sự thành công của trang web mới, vì vậy một chuyên gia về kiểm tra hiệu suất đã được tuyển dụng cho dự án này\n\n💡 GIẢI THÍCH CHI TIẾT:\nKiểm thử dựa trên rủi ro phân bổ nỗ lực THEO mức rủi ro: rủi ro cao → kiểm thử nhiều/sớm/kỹ hơn; kết quả kiểm thử cập nhật lại đánh giá rủi ro. Khi kết quả cho thấy chất lượng module mạng CAO hơn kỳ vọng thì rủi ro tồn dư ở đó GIẢM, phản ứng đúng là giảm hoặc giữ nguyên nỗ lực chứ không phải tăng thêm ⇒ (b) là ví dụ ứng xử SAI (LEAST likely đúng). (a), (c), (d) đều là phản ứng hợp lý: ưu tiên theo tác động cao, tăng usability testing nơi từng có vấn đề, thuê chuyên gia cho thuộc tính then chốt.\n\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.5.2 Product and Project Risks (risk-based testing)."
  },
  {
    "n": 7,
    "ref": "Câu 7 [FL-2.4.2]",
    "stem": "Which of the following statements CORRECTLY describes a role of impact analysis in maintenance testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Impact analysis is used when deciding if a fix to a maintained system is worthwhile"
      },
      {
        "k": "b",
        "t": "B) Impact analysis is used to identify how data should be migrated into the maintained system"
      },
      {
        "k": "c",
        "t": "C) Impact analysis is used to decide which hot fixes are of most value to the user"
      },
      {
        "k": "d",
        "t": "D) Impact analysis is used to determine the effectiveness of new maintenance test cases"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây mô tả ĐÚNG vai trò của phân tích tác động trong kiểm thử bảo trì (maintenance testing)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Phân tích tác động được sử dụng khi quyết định xem việc sửa chữa hệ thống được bảo trì có đáng giá hay không\n  B) Phân tích tác động được sử dụng để xác định cách di chuyển dữ liệu vào hệ thống được bảo trì\n  C) Phân tích tác động được sử dụng để quyết định bản sửa lỗi nóng nào có giá trị nhất đối với người dùng\n  D) Phân tích tác động được sử dụng để xác định tính hiệu quả của các test case (ca kiểm thử) bảo trì mới\n\n💡 GIẢI THÍCH CHI TIẾT:\nTheo syllabus, impact analysis đánh giá phạm vi ảnh hưởng của một thay đổi (hệ quả dự kiến lẫn side-effect có thể có, vùng hệ thống bị tác động) và có thể được thực hiện TRƯỚC khi thay đổi để giúp quyết định có nên thực hiện thay đổi hay không — tức đánh giá việc sửa có “đáng” hay không ⇒ (a). (b) di trú dữ liệu là nội dung của maintenance (migration) chứ không phải vai trò của impact analysis. (c) giá trị của hot fix với người dùng là quyết định nghiệp vụ/độ ưu tiên. (d) hiệu quả của test case không phải điều impact analysis đo lường.\n\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.4.2 Impact Analysis for Maintenance."
  },
  {
    "n": 8,
    "ref": "Câu 8 [FL-4.3.2]",
    "stem": "Which of the following descriptions of decision coverage is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Decision coverage is a measure of the percentage of possible paths through the source code exercised by tests"
      },
      {
        "k": "b",
        "t": "B) Decision coverage is a measure of the percentage of business flows through the component exercised by tests"
      },
      {
        "k": "c",
        "t": "C) Decision coverage is a measure of the ‘if’ statements in the code that are exercised with both the true and false outcomes"
      },
      {
        "k": "d",
        "t": "D) Decision coverage is a measure of the proportion of decision outcomes in the source code exercised by tests"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nMô tả nào sau đây về phạm vi quyết định là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Phạm vi quyết định là thước đo phần trăm các đường dẫn có thể có thông qua mã nguồn được thực hiện bởi các bài kiểm thử\n  B) Phạm vi quyết định là thước đo phần trăm luồng kinh doanh thông qua thành phần được thực hiện bằng các bài kiểm thử\n  C) Phạm vi quyết định là thước đo các câu lệnh 'nếu' trong mã được thực hiện với cả kết quả đúng và sai\n  D) Phạm vi quyết định là thước đo tỷ lệ kết quả quyết định trong mã nguồn được thực hiện bởi các bài kiểm thử\n\n💡 GIẢI THÍCH CHI TIẾT:\nDecision coverage = số decision outcome (nhánh ra của các điểm quyết định: if, switch/case, điều kiện lặp…) đã được thực thi chia cho tổng số decision outcome ⇒ (d). (a) mô tả path coverage — mạnh hơn nhiều và thường bất khả thi. (b) “business flows” không phải khái niệm white-box ở mức mã nguồn. (c) quá hẹp: decision không chỉ gồm câu lệnh “if”, và định nghĩa tính theo tỷ lệ outcome được thực thi chứ không chỉ đếm if đạt cả hai nhánh.\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Coverage."
  },
  {
    "n": 9,
    "ref": "Câu 9 [FL-4.4.1]",
    "stem": "Which of the following BEST describes the concept behind error guessing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Error guessing requires you to imagine that you are the user of the test object and to guess mistakes the user could make interacting with it"
      },
      {
        "k": "b",
        "t": "B) Error guessing involves using your personal experience of development and the mistakes you made as a developer"
      },
      {
        "k": "c",
        "t": "C) Error guessing involves using your knowledge and experience of defects found in the past and typical mistakes made by developers"
      },
      {
        "k": "d",
        "t": "D) Error guessing requires you to rapidly duplicate the development task to identify the sort of mistakes a developer might make"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT mô tả khái niệm đằng sau việc đoán lỗi?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Việc đoán lỗi yêu cầu bạn phải tưởng tượng rằng bạn là người dùng của test object (đối tượng kiểm thử) và đoán những lỗi mà người dùng có thể mắc phải khi tương tác với nó\n  B) Đoán lỗi liên quan đến việc sử dụng kinh nghiệm phát triển cá nhân của bạn và những lỗi bạn đã mắc phải với tư cách là nhà phát triển\n  C) Đoán lỗi liên quan đến việc sử dụng kiến thức và kinh nghiệm của bạn về các lỗi được tìm thấy trong quá khứ và những lỗi điển hình do nhà phát triển mắc phải\n  D) Việc đoán lỗi yêu cầu bạn phải nhanh chóng lặp lại nhiệm vụ phát triển để xác định loại lỗi mà nhà phát triển có thể mắc phải\n\n💡 GIẢI THÍCH CHI TIẾT:\nError guessing là kỹ thuật dựa trên kinh nghiệm: tester dự đoán lỗi/defect/failure dựa trên hiểu biết về cách ứng dụng đã vận hành trước đây, các loại lỗi điển hình mà lập trình viên hay mắc, và các defect từng gặp ở những ứng dụng tương tự ⇒ (c). (a) nhầm sang góc nhìn “lỗi người dùng thao tác” (gần với usability). (b) quá hẹp — không đòi hỏi bản thân tester từng là developer; kinh nghiệm dùng ở đây là về defect nói chung. (d) “làm lại nhanh công việc phát triển” không phải nội dung của kỹ thuật này.\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.4.1 Error Guessing."
  },
  {
    "n": 10,
    "ref": "Câu 10 [FL-4.4.2]",
    "stem": "Which of the following provides the BEST description of exploratory testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) A testing practice in which an in-depth investigation of the background of the test object is used to identify potential weaknesses that are examined by test cases"
      },
      {
        "k": "b",
        "t": "B) An approach to testing whereby the testers dynamically design and execute tests based on their knowledge, exploration of the test item and the results of previous tests"
      },
      {
        "k": "c",
        "t": "C) An approach to test design in which test activities are planned as uninterrupted sessions of test analysis and design, often used in conjunction with checklist-based testing"
      },
      {
        "k": "d",
        "t": "D) Testing based on the tester’s experience, knowledge and intuition"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây cung cấp mô tả TỐT NHẤT về kiểm thử thăm dò (exploratory testing)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Một phương pháp kiểm thử trong đó việc điều tra chuyên sâu về nền tảng của test object (đối tượng kiểm thử) được sử dụng để xác định các điểm yếu tiềm ẩn được kiểm tra bằng các test case (ca kiểm thử)\n  B) Một cách tiếp cận kiểm thử trong đó người kiểm thử thiết kế và thực hiện các kiểm thử một cách linh hoạt dựa trên kiến thức của họ, việc khám phá hạng mục kiểm thử và kết quả của các kiểm thử trước đó\n  C) Một cách tiếp cận để thiết kế kiểm thử trong đó các hoạt động kiểm thử được lên kế hoạch dưới dạng các phiên phân tích và thiết kế kiểm thử không bị gián đoạn, thường được sử dụng cùng với kiểm thử dựa trên danh sách kiểm tra\n  D) Kiểm thử dựa trên kinh nghiệm, kiến thức và trực giác của người kiểm thử\n\n💡 GIẢI THÍCH CHI TIẾT:\nTrong exploratory testing, các test không được thiết kế trước toàn bộ mà được thiết kế – thực thi – đánh giá ĐỘNG trong lúc tester tìm hiểu test item, dùng kết quả của các test trước để định hướng test tiếp theo ⇒ (b). (a) không phải định nghĩa chuẩn. (c) mô tả lệch về session-based test management (phiên có time-box dùng test charter) và gán sai “kết hợp checklist-based”. (d) là định nghĩa CHUNG của experience-based testing — đúng cho cả nhóm kỹ thuật, nên không phải mô tả TỐT NHẤT riêng cho exploratory.\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.4.2 Exploratory Testing."
  },
  {
    "n": 11,
    "ref": "Câu 11 [FL-1.4.2]",
    "stem": "Given the following test activities and tasks (see the figure). Which of the following BEST matches the activities with the tasks?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) A – 2, B – 3, C – 4, D – 1"
      },
      {
        "k": "b",
        "t": "B) A – 2, B – 1, C – 3, D – 4"
      },
      {
        "k": "c",
        "t": "C) A – 3, B – 2, C – 4, D – 1"
      },
      {
        "k": "d",
        "t": "D) A – 3, B – 2, C – 1, D – 4"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐưa ra các hoạt động và nhiệm vụ kiểm tra sau đây (xem hình). Điều nào sau đây TỐT NHẤT phù hợp với các hoạt động với nhiệm vụ?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) A – 2, B – 3, C – 4, D – 1\n  B) A – 2, B – 1, C – 3, D – 4\n  C) A – 3, B – 2, C – 4, D – 1\n  D) A – 3, B – 2, C – 1, D – 4\n\n💡 GIẢI THÍCH CHI TIẾT:\nTheo quy trình kiểm thử: (2) xác định test data cần thiết để hỗ trợ test case thuộc TEST DESIGN (A) — thiết kế test case và xác định dữ liệu cần có; (3) sắp thứ tự ưu tiên test procedure và TẠO test data thuộc TEST IMPLEMENTATION (B) — chuẩn bị mọi thứ để chạy; (4) phân tích các sai lệch (discrepancies) để xác định nguyên nhân thuộc TEST EXECUTION (C) — so sánh kết quả thực tế với mong đợi và phân tích; (1) nhập change request cho các defect còn mở thuộc TEST COMPLETION (D) — xử lý các việc còn tồn khi đóng chu kỳ kiểm thử. Vậy A-2, B-3, C-4, D-1 ⇒ (a).\n\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities and Tasks."
  },
  {
    "n": 12,
    "ref": "Câu 12 [FL-1.2.3]",
    "stem": "Which of the following is an example of a failure in a car cruise control system?",
    "opts": [
      {
        "k": "a",
        "t": "A) The developer of the system forgot to rename variables after a cut-and-paste operation"
      },
      {
        "k": "b",
        "t": "B) Unnecessary code that sounds an alarm when reversing was included in the system"
      },
      {
        "k": "c",
        "t": "C) The system stops maintaining a set speed when the radio volume is increased or decreased"
      },
      {
        "k": "d",
        "t": "D) The design specification for the system wrongly states speeds"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nTrường hợp nào sau đây là ví dụ về sự cố của hệ thống điều khiển hành trình trên ô tô?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Nhà phát triển hệ thống quên đổi tên các biến sau thao tác cắt và dán\n  B) Mã không cần thiết phát ra âm thanh cảnh báo khi đảo chiều được đưa vào hệ thống\n  C) Hệ thống dừng duy trì tốc độ đã đặt khi âm lượng radio tăng hoặc giảm\n  D) Thông số kỹ thuật thiết kế cho hệ thống nêu sai tốc độ\n\n💡 GIẢI THÍCH CHI TIẾT:\nFailure là hành vi sai lệch quan sát được KHI HỆ THỐNG VẬN HÀNH: xe đang giữ tốc độ cài đặt mà ngừng giữ tốc độ khi người dùng chỉnh âm lượng radio là biểu hiện sai ra bên ngoài ⇒ (c). Các phương án còn lại là defect (khiếm khuyết nằm trong sản phẩm công việc): (a) quên đổi tên biến sau copy-paste — defect trong mã (xuất phát từ error của developer); (b) mã thừa phát chuông báo khi lùi — defect trong mã; (d) đặc tả thiết kế ghi sai tốc độ — defect trong tài liệu.\n\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.2.3 Errors, Defects and Failures."
  },
  {
    "n": 13,
    "ref": "Câu 13 [FL-4.2.4]",
    "stem": "Given the following state model of a battery charger software (see the figure). Which of the following sequences of transitions provides the highest level of transition coverage for the model?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) OFF → WAIT → OFF → WAIT → TRICKLE → CHARGE → HIGH → CHARGE → LOW"
      },
      {
        "k": "b",
        "t": "B) WAIT → TRICKLE → WAIT → OFF → WAIT → TRICKLE → CHARGE → LOW → CHARGE"
      },
      {
        "k": "c",
        "t": "C) WAIT → TRICKLE → CHARGE → HIGH → CHARGE → TRICKLE → WAIT → OFF → WAIT"
      },
      {
        "k": "d",
        "t": "D) HIGH → CHARGE → LOW → CHARGE → TRICKLE → WAIT → TRICKLE → WAIT → TRICKLE"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCho mô hình trạng thái sau của phần mềm sạc pin (xem hình). Trình tự chuyển đổi nào sau đây cung cấp mức độ bao phủ chuyển đổi cao nhất cho mô hình?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) TẮT → CHỜ → TẮT → CHỜ → LỖI → SẠC → CAO → SẠC → THẤP\n  B) CHỜ → LỖI → CHỜ → TẮT → CHỜ → LỖI → SẠC → THẤP → SẠC\n  C) CHỜ → LỖI → SẠC → CAO → SẠC → LỖI → CHỜ → TẮT → CHỜ\n  D) CAO → SẠC → THẤP → SẠC → LỖI → CHỜ → LỖI → CHỜ → LỖI\n\n💡 GIẢI THÍCH CHI TIẾT:\nMô hình có 10 chuyển trạng thái hợp lệ (WAIT ↔OFF, WAIT ↔TRICKLE, TRICKLE↔CHARGE, CHARGE↔LOW, CHARGE↔HIGH — mỗi cặp 2 chiều). Mỗi phương án là chuỗi 9 trạng thái = 8 lượt chuyển; đếm số chuyển PHÂN BIỆT: (a) lặp OFF→WAIT hai lần → 7 chuyển phân biệt; (b) lặp WAIT→TRICKLE hai lần → 7; (c) WAIT→TRICKLE, TRICKLE→CHARGE, CHARGE→HIGH, HIGH→CHARGE, CHARGE→TRICKLE, TRICKLE→WAIT, WAIT→OFF, OFF→WAIT — 8 chuyển khác nhau, không lặp → 8/10, cao nhất ⇒ (c). (d) lặp nhiều (TRICKLE→WAIT, WAIT→TRICKLE) → chỉ 6 chuyển phân biệt.\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.4 State Transition Testing."
  },
  {
    "n": 14,
    "ref": "Câu 14 [FL-5.2.6]",
    "stem": "Which of the following statements about test estimation approaches is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) With the metrics-based approach, the estimate is based on test measures from the project itself, and so this estimate is only available after the testing starts"
      },
      {
        "k": "b",
        "t": "B) With the expert-based approach, a group of expert users identified by the client recommends the necessary testing budget"
      },
      {
        "k": "c",
        "t": "C) With the expert-based approach, the test managers responsible for the different testing activities predict the expected testing effort"
      },
      {
        "k": "d",
        "t": "D) With the metrics-based approach, an average of the testing costs recorded from several past projects is used as the testing budget"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về các phương pháp ước lượng kiểm thử là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Với cách tiếp cận dựa trên số liệu, ước tính dựa trên các biện pháp kiểm thử từ chính dự án và do đó, ước tính này chỉ có sau khi kiểm thử bắt đầu\n  B) Với cách tiếp cận dựa trên chuyên gia, một nhóm người dùng chuyên gia được khách hàng xác định sẽ đề xuất ngân sách kiểm thử cần thiết\n  C) Với cách tiếp cận dựa trên chuyên gia, người quản lý kiểm thử chịu trách nhiệm về các hoạt động kiểm thử khác nhau sẽ dự đoán nỗ lực kiểm thử dự kiến\n  D) Với cách tiếp cận dựa trên số liệu, chi phí kiểm thử trung bình được ghi lại từ một số dự án trước đây sẽ được sử dụng làm ngân sách kiểm thử\n\n💡 GIẢI THÍCH CHI TIẾT:\nMetrics-based = ước lượng dựa trên số đo của các dự án TƯƠNG TỰ TRƯỚC ĐÂY hoặc các giá trị điển hình — lấy trung bình chi phí kiểm thử ghi nhận từ nhiều dự án cũ làm ngân sách là đúng tinh thần đó ⇒ (d). (a) sai: số liệu lấy từ dự án trước nên ước lượng có TRƯỚC khi kiểm thử bắt đầu, không phải đợi chạy rồi mới có. (b) sai: expert-based dựa trên kinh nghiệm của người CHỦ NHIỆM các tác vụ kiểm thử hoặc chuyên gia kiểm thử, không phải “nhóm người dùng chuyên gia của khách hàng” đề xuất ngân sách. (c) bóp méo expert-based: không phải chỉ các test manager dự đoán, mà là chủ nhiệm tác vụ/chuyên gia liên quan.\n\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2.6 Test Estimation."
  },
  {
    "n": 15,
    "ref": "Câu 15 [FL-1.2.3]",
    "stem": "Which of the following is a defect, rather than a root cause, in a fitness tracker?",
    "opts": [
      {
        "k": "a",
        "t": "A) Because the author of the requirements was unfamiliar with the domain of fitness training, he wrongly assumed that users wanted the heartbeat in beats per hour"
      },
      {
        "k": "b",
        "t": "B) The tester of the smartphone interface had not been trained in state transition testing, so a major defect was missed"
      },
      {
        "k": "c",
        "t": "C) An incorrect configuration variable implemented for the GPS function could cause location problems during daylight saving time"
      },
      {
        "k": "d",
        "t": "D) Because the designer had never worked on wearable devices before, she misunderstood the effects of reflected sunlight on the readability of the display"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là khiếm khuyết chứ không phải là nguyên nhân gốc rễ của thiết bị theo dõi thể dục?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Bởi vì tác giả của các yêu cầu không quen thuộc với lĩnh vực rèn luyện thể lực nên ông đã sai lầm khi cho rằng người dùng muốn nhịp tim tính bằng nhịp mỗi giờ\n  B) Người kiểm thử giao diện điện thoại thông minh chưa được đào tạo về kiểm thử chuyển trạng thái nên đã bỏ sót một lỗi lớn\n  C) Biến cấu hình không chính xác được triển khai cho chức năng GPS có thể gây ra sự cố về vị trí trong thời gian tiết kiệm ánh sáng ban ngày\n  D) Bởi vì nhà thiết kế chưa bao giờ làm việc trên các thiết bị đeo trước đây nên cô ấy đã hiểu nhầm tác động của ánh sáng mặt trời phản chiếu đến khả năng đọc của màn hình.\n\n💡 GIẢI THÍCH CHI TIẾT:\nDefect là khiếm khuyết nằm TRONG sản phẩm công việc; root cause là nguyên nhân gốc (thường là error của con người hoặc điều kiện dẫn tới error). Biến cấu hình sai đã được cài vào chức năng GPS là khiếm khuyết cụ thể trong phần mềm ⇒ (c) là defect. (a) sự thiếu hiểu biết miền nghiệp vụ của người viết yêu cầu và (d) sự thiếu kinh nghiệm của người thiết kế là root cause dẫn đến error; (b) tester chưa được đào tạo là nguyên nhân khiến defect bị BỎ SÓT, không phải bản thân defect trong sản phẩm.\n\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.2.3 Errors, Defects and Failures (& root causes)."
  },
  {
    "n": 16,
    "ref": "Câu 16 [FL-3.2.2]",
    "stem": "Which of the following CORRECTLY matches a role and its responsibility in a formal review?",
    "opts": [
      {
        "k": "a",
        "t": "A) Manager – decides on the execution of reviews"
      },
      {
        "k": "b",
        "t": "B) Review leader – ensures the effective running of review meetings"
      },
      {
        "k": "c",
        "t": "C) Scribe – fixes the defects in the work product under review"
      },
      {
        "k": "d",
        "t": "D) Moderator – monitors ongoing cost-effectiveness"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây ĐÚNG ĐÚNG với vai trò và trách nhiệm của nó trong một cuộc đánh giá chính thức?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Người quản lý – quyết định việc thực hiện đánh giá\n  B) Người lãnh đạo đánh giá – đảm bảo các cuộc họp đánh giá diễn ra hiệu quả\n  C) Scribe – sửa các lỗi trong sản phẩm đang được xem xét\n  D) Người điều hành – giám sát hiệu quả chi phí liên tục\n\n💡 GIẢI THÍCH CHI TIẾT:\nTheo phân vai review chính thức: MANAGER quyết định việc thực hiện review, phân bổ thời gian/nguồn lực trong kế hoạch dự án ⇒ (a) đúng. (b) sai: đảm bảo cuộc họp review vận hành hiệu quả và hòa giải các bên là việc của FACILITATOR (moderator); review leader chịu trách nhiệm tổng thể, quyết định ai tham gia, tổ chức khi nào/ở đâu. (c) sai: scribe chỉ ghi nhận issue/ ý kiến trong họp; người SỬA defect là author. (d) sai: theo dõi hiệu quả chi phí là trách nhiệm quản lý (manager), không phải moderator.\n\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.2 Roles and Responsibilities in a Formal Review."
  },
  {
    "n": 17,
    "ref": "Câu 17 [FL-3.1.2]",
    "stem": "Which of the following statements CORRECTLY reflects the value of static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) By introducing reviews, we have found that both the quality of the specifications and the time required for development and testing have increased"
      },
      {
        "k": "b",
        "t": "B) Using static testing means we have better control and cheaper defect management, due to the ease of detecting defects later in the lifecycle"
      },
      {
        "k": "c",
        "t": "C) Now that we require the use of static analysis, missed requirements have decreased and communication between testers and developers has improved"
      },
      {
        "k": "d",
        "t": "D) Since we started using static analysis, we find coding defects that might not have been found by performing only dynamic testing"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây phản ánh ĐÚNG giá trị của kiểm thử tĩnh (static testing)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Bằng cách giới thiệu các đánh giá, chúng tôi nhận thấy rằng cả chất lượng của thông số kỹ thuật lẫn thời gian cần thiết để phát triển và kiểm thử đều tăng lên\n  B) Sử dụng kiểm thử tĩnh (static testing) có nghĩa là chúng tôi có khả năng kiểm soát tốt hơn và quản lý lỗi rẻ hơn do dễ dàng phát hiện lỗi sau này trong vòng đời\n  C) Giờ đây, chúng tôi yêu cầu sử dụng phân tích tĩnh, các yêu cầu bị bỏ sót đã giảm và giao tiếp giữa tester (kiểm thử viên) và nhà phát triển đã được cải thiện\n  D) Kể từ khi chúng tôi bắt đầu sử dụng phân tích tĩnh, chúng tôi phát hiện ra các lỗi mã hóa có thể không được tìm thấy nếu chỉ thực thi kiểm thử động\n\n💡 GIẢI THÍCH CHI TIẾT:\nGiá trị của kiểm thử tĩnh: phát hiện sớm defect với chi phí thấp, và tìm được những loại khiếm khuyết mà kiểm thử động khó/không phát hiện (ví dụ code không bao giờ được thực thi, vi phạm chuẩn code, lỗ hổng bảo mật tiềm ẩn) — static analysis tìm ra defect trong mã mà nếu chỉ chạy dynamic testing có thể bỏ sót ⇒ (d). (a) tự mâu thuẫn: review tốt phải GIẢM thời gian phát triển/kiểm thử tổng thể, không phải tăng. (b) sai bản chất: giá trị nằm ở phát hiện SỚM, không phải “dễ phát hiện muộn hơn”. (c) gán nhầm lợi ích: giảm sót yêu cầu và cải thiện giao tiếp là lợi ích của REVIEW (con người), không phải của static analysis (công cụ phân tích mã).\n\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.1.2 Benefits of Static Testing & 3.1.3 Differences between Static and Dynamic Testing."
  },
  {
    "n": 18,
    "ref": "Câu 18 [FL-4.2.5]",
    "stem": "Which of the following statements BEST describes how test cases are derived from a use case?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases are created to exercise the defined basic, exceptional and error behaviors performed by the system under test in collaboration with actors"
      },
      {
        "k": "b",
        "t": "B) Test cases are derived by identifying the components included in the use case and creating integration tests that exercise the interactions of these components"
      },
      {
        "k": "c",
        "t": "C) Test cases are generated by analyzing the interactions of the actors with the system to ensure the user interfaces are easy to use"
      },
      {
        "k": "d",
        "t": "D) Test cases are derived to exercise each of the decision points in the business process flows of the use case, to achieve 100% decision coverage of these flows"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây mô tả TỐT NHẤT cách các ca kiểm thử được bắt nguồn từ một ca sử dụng?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Các test case (ca kiểm thử) được tạo ra để thực hiện các hành vi cơ bản, đặc biệt và lỗi được xác định bởi hệ thống được kiểm thử với sự cộng tác của các tác nhân\n  B) Các trường hợp kiểm thử được bắt nguồn bằng cách xác định các thành phần có trong trường hợp sử dụng và tạo các kiểm thử tích hợp thực hiện sự tương tác của các thành phần này\n  C) Các test case (ca kiểm thử) được tạo bằng cách phân tích sự tương tác của các tác nhân với hệ thống để đảm bảo giao diện người dùng dễ sử dụng\n  D) Các test case (ca kiểm thử) được lấy ra để thực hiện từng điểm quyết định trong các luồng quy trình công việc của trường hợp sử dụng, nhằm đạt được phạm vi quyết định 100% của các luồng này\n\n💡 GIẢI THÍCH CHI TIẾT:\nUse case mô tả tương tác giữa actor và hệ thống theo hành vi cơ bản (basic/main), các biến thể ngoại lệ (exceptional/alternative) và hành vi lỗi (error handling); test case sinh từ use case phải phủ các hành vi này ⇒ (a). (b) nhầm sang kiểm thử tích hợp thành phần — use case testing nhìn ở mức hành vi hệ thống với actor. (c) nhầm sang usability testing. (d) áp khái niệm decision coverage (white-box mức mã) vào luồng nghiệp vụ — không phải cách chuẩn mô tả việc suy dẫn test từ use case.\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.5 Use Case Testing."
  },
  {
    "n": 19,
    "ref": "Câu 19 [FL-2.1.1]",
    "stem": "Given the following statements about the relationships between software development activities and test activities in the software development lifecycle (see the figure). Which of the following CORRECTLY shows which statements are true and which are false?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) True – 1, 2, 4; False – 3"
      },
      {
        "k": "b",
        "t": "B) True – 1, 2; False – 3, 4"
      },
      {
        "k": "c",
        "t": "C) True – 2, 3; False – 1, 4"
      },
      {
        "k": "d",
        "t": "D) True – 1, 4; False – 2, 3"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCho các nhận định sau về mối quan hệ giữa hoạt động phát triển phần mềm và hoạt động kiểm thử trong vòng đời phát triển phần mềm (xem hình). Câu nào sau đây chứng tỏ ĐÚNG câu nào đúng, câu nào sai?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Đúng – 1, 2, 4; Sai – 3\n  B) Đúng – 1, 2; Sai – 3, 4\n  C) Đúng – 2, 3; Sai – 1, 4\n  D) Đúng – 1, 4; Sai – 2, 3\n\n💡 GIẢI THÍCH CHI TIẾT:\nTheo các nguyên tắc “kiểm thử tốt trong mọi mô hình vòng đời”: (1) ĐÚNG — mỗi hoạt động phát triển có một hoạt động kiểm thử tương ứng. (4) ĐÚNG — hoạt động kiểm thử nên bắt đầu từ những giai đoạn SỚM của vòng đời (nguyên tắc kiểm thử sớm). (2) SAI — review nên bắt đầu ngay khi có BẢN NHÁP (draft) của tài liệu, không đợi phiên bản cuối cùng. (3) SAI so với phát biểu chuẩn: việc PHÂN TÍCH và THIẾT KẾ test cho một mức kiểm thử bắt đầu trong hoạt động phát triển tương ứng — còn phát biểu gộp cả “implementation of tests” vào là không chính xác (hiện thực hóa test diễn ra muộn hơn). Vậy True {1, 4}, False {2, 3} ⇒ (d).\n\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.1.1 Software Development and Software Testing."
  },
  {
    "n": 20,
    "ref": "Câu 20 [FL-4.1.1]",
    "stem": "Which of the following BEST matches the descriptions with the different categories of test techniques (see the figure)?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Black – 4, 5; White – 1, 2; Experience – 3"
      },
      {
        "k": "b",
        "t": "B) Black – 3; White – 1, 2; Experience – 4, 5"
      },
      {
        "k": "c",
        "t": "C) Black – 4; White – 1, 2; Experience – 3, 5"
      },
      {
        "k": "d",
        "t": "D) Black – 1, 3, 5; White – 2; Experience – 4"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào TỐT NHẤT sau đây phù hợp với mô tả với các loại kỹ thuật kiểm tra khác nhau (xem hình)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Đen – 4, 5; Trắng – 1, 2; Kinh nghiệm – 3\n  B) Đen – 3; Trắng – 1, 2; Kinh nghiệm – 4, 5\n  C) Đen – 4; Trắng – 1, 2; Kinh nghiệm – 3, 5\n  D) Đen – 1, 3, 5; Trắng – 2; Kinh nghiệm – 4\n\n💡 GIẢI THÍCH CHI TIẾT:\n(1) “Độ phủ đo theo cấu trúc được chọn của test object” và (2) “kiểm tra quá trình xử lý BÊN TRONG test object” là đặc trưng của WHITE-BOX. (4) “kiểm tra sai lệch so với YÊU CẦU” và (5) “user story được dùng làm test basis” là đặc trưng của BLACK-BOX (dựa trên đặc tả). (3) “test dựa trên xác suất xuất hiện defect và phân bố của chúng” là EXPERIENCE-BASED (điển hình là error guessing dựa trên kinh nghiệm về nơi defect hay tụ). Vậy Black {4, 5}, White {1, 2}, Experience {3} ⇒ (a).\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.1.1 Categories of Test Techniques and Their Characteristics."
  },
  {
    "n": 21,
    "ref": "Câu 21 [FL-3.2.1]",
    "stem": "You have been asked to take part in a checklist-based review of the following excerpt from the requirements specification for a library system (see the figure). Your checklist entry requires you to review the specification for inconsistencies between individual requirements (i.e., conflicts between requirements). Which of the following CORRECTLY identifies inconsistencies between pairs of requirements?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 6–10, 6–15, 7–12"
      },
      {
        "k": "b",
        "t": "B) 6–15, 9–11"
      },
      {
        "k": "c",
        "t": "C) 6–10, 6–15, 9–11"
      },
      {
        "k": "d",
        "t": "D) 6–15, 7–12"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đã được yêu cầu tham gia đánh giá dựa trên danh sách kiểm tra đoạn trích sau từ đặc tả yêu cầu đối với hệ thống thư viện (xem hình). Mục nhập danh sách kiểm tra của bạn yêu cầu bạn xem lại đặc tả để phát hiện sự không nhất quán giữa các yêu cầu riêng lẻ (tức là xung đột giữa các yêu cầu). Điều nào sau đây xác định ĐÚNG sự mâu thuẫn giữa các cặp yêu cầu?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 6–10, 6–15, 7–12\n  B) 6–15, 9–11\n  C) 6–10, 6–15, 9–11\n  D) 6–15, 7–12\n\n💡 GIẢI THÍCH CHI TIẾT:\nXét từng cặp: (6) thủ thư nhận phản hồi trong 5 giây MÂU THUẪN với (15) “hệ thống phải phản hồi MỌI người dùng trong 3 giây” (thủ thư cũng là người dùng) → 6–15 là xung đột. (9) bị phạt nếu không trả sách trong 3 tuần MÂU THUẪN với (11) được mượn miễn phí tối đa 4 tuần → 9–11 là xung đột (tuần thứ 4 vừa “miễn phí hợp lệ” vừa “bị phạt”). (6–10) KHÔNG xung đột vì áp cho hai nhóm người dùng khác nhau (thủ thư 5 giây, người mượn 3 giây — mâu thuẫn chỉ nảy sinh khi so với yêu cầu chung 15). (7–12) không xung đột: giới hạn mượn 3 cuốn và quyền đặt trước sách đang được mượn là hai chuyện độc lập. Vậy chỉ 6–15 và 9–11 ⇒ (b).\n\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.1 Review Process (individual review) & 3.2.4 Applying Review Techniques (checklist-based)."
  },
  {
    "n": 22,
    "ref": "Câu 22 [FL-5.1.1]",
    "stem": "Which of the following BEST explains a benefit of independent testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team, so ensuring everyone is aware that quality is the test team’s overall responsibility"
      },
      {
        "k": "b",
        "t": "B) If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines"
      },
      {
        "k": "c",
        "t": "C) An independent test team can work totally separately from the developers, need not be distracted with changing project requirements, and can restrict communication with the developers to defect reporting through the defect management system"
      },
      {
        "k": "d",
        "t": "D) When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT giải thích lợi ích của kiểm thử độc lập?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Việc sử dụng nhóm kiểm thử độc lập cho phép quản lý dự án giao trách nhiệm về chất lượng của sản phẩm cuối cùng cho nhóm kiểm thử, do đó đảm bảo mọi người đều biết rằng chất lượng là trách nhiệm chung của nhóm kiểm thử\n  B) Nếu có đủ khả năng chi trả cho một nhóm kiểm thử bên ngoài tổ chức thì sẽ có những lợi ích rõ ràng khi nhóm bên ngoài này không dễ dàng bị ảnh hưởng bởi những lo ngại về việc giao hàng của ban quản lý dự án và nhu cầu đáp ứng thời hạn giao hàng nghiêm ngặt\n  C) Một nhóm kiểm thử độc lập có thể làm việc hoàn toàn tách biệt với các nhà phát triển, không cần phải phân tâm khi thay đổi yêu cầu của dự án và có thể hạn chế liên lạc với các nhà phát triển để báo cáo lỗi thông qua hệ thống quản lý lỗi\n  D) Khi các thông số kỹ thuật có sự mơ hồ và không nhất quán, các giả định sẽ được đưa ra dựa trên cách giải thích của chúng và một người kiểm tra độc lập có thể hữu ích trong việc đặt câu hỏi về các giả định đó cũng như cách giải thích của nhà phát triển.\n\n💡 GIẢI THÍCH CHI TIẾT:\nLợi ích cốt lõi của kiểm thử độc lập: người kiểm thử độc lập nhìn thấy những loại failure khác với developer nhờ khác biệt về thiên kiến nhận thức, và có thể XÁC MINH, THÁCH THỨC các giả định mà các bên đã đặt ra khi đặc tả và hiện thực hệ thống ⇒ (d). (a) sai nguyên tắc: chất lượng là trách nhiệm của CẢ NHÓM/tổ chức, đẩy hết cho test team là một nhược điểm (developer mất ý thức chất lượng). (b) sai: đội bên ngoài không tự động miễn nhiễm áp lực tiến độ, và đây không phải lợi ích được syllabus nêu. (c) mô tả sự CÔ LẬP — chính là rủi ro/nhược điểm của độc lập (mất hợp tác, chậm phản hồi), không phải lợi ích.\n\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.1.1 Independent Testing."
  },
  {
    "n": 23,
    "ref": "Câu 23 [FL-4.2.2]",
    "stem": "A smart home app measures the average temperature in the house and provides feedback on environmental friendliness based on the ranges shown in the figure. Using boundary value analysis (only min- and max- values), which of the following sets of test inputs provides the highest level of boundary coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 0°C, 11°C, 20°C, 22°C, 23°C"
      },
      {
        "k": "b",
        "t": "B) 9°C, 15°C, 19°C, 23°C, 100°C"
      },
      {
        "k": "c",
        "t": "C) 10°C, 16°C, 19°C, 22°C, 23°C"
      },
      {
        "k": "d",
        "t": "D) 14°C, 15°C, 18°C, 19°C, 21°C, 22°C"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nỨng dụng nhà thông minh đo nhiệt độ trung bình trong nhà và cung cấp phản hồi về mức độ thân thiện với môi trường dựa trên phạm vi thể hiện trong hình. Bằng cách sử dụng phân tích giá trị biên (chỉ các giá trị tối thiểu và tối đa), bộ đầu vào kiểm thử nào sau đây cung cấp mức bao phủ ranh giới cao nhất?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 0°C, 11°C, 20°C, 22°C, 23°C\n  B) 9°C, 15°C, 19°C, 23°C, 100°C\n  C) 10°C, 16°C, 19°C, 22°C, 23°C\n  D) 14°C, 15°C, 18°C, 19°C, 21°C, 22°C\n\n💡 GIẢI THÍCH CHI TIẾT:\nCác phân vùng (làm tròn đến 1°C): ≤10; 11–15; 16–19; 20–22; ≥23. Với BVA 2 giá trị, tập giá trị biên là {10, 11, 15, 16, 19, 20, 22, 23} (8 biên). Đếm số biên mà mỗi phương án chạm: (a) 11, 20, 22, 23 → 4 (0 không phải biên vì đề không cho cận dưới). (b) 15, 19, 23 → 3 (9 và 100 không phải biên). (c) 10, 16, 19, 22, 23 → 5 biên — cao nhất ⇒ (c). (d) 15, 19, 22 → 3 (14, 18, 21 là giá trị giữa phân vùng). Lưu ý: không phương án nào phủ đủ 8 biên; câu hỏi chỉ yêu cầu mức phủ CAO NHẤT.\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.2 Boundary Value Analysis."
  },
  {
    "n": 24,
    "ref": "Câu 24 [FL-1.1.1]",
    "stem": "Which of the following is a typical objective of testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) To find defects and failures"
      },
      {
        "k": "b",
        "t": "B) To validate that the project plan works as required"
      },
      {
        "k": "c",
        "t": "C) To ensure complete testing"
      },
      {
        "k": "d",
        "t": "D) To compare actual results with expected results"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là mục tiêu điển hình của kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Để tìm ra khuyết điểm và thất bại\n  B) Để xác nhận rằng kế hoạch dự án hoạt động theo yêu cầu\n  C) Để đảm bảo kiểm tra đầy đủ\n  D) Để so sánh kết quả thực tế với kết quả dự kiến\n\n💡 GIẢI THÍCH CHI TIẾT:\nMột trong các mục tiêu điển hình của kiểm thử theo syllabus là TÌM defect và failure (bên cạnh: đánh giá chất lượng, phòng ngừa defect, xây dựng niềm tin, cung cấp thông tin cho quyết định…) ⇒ (a). (b) kế hoạch DỰ ÁN không phải test object của kiểm thử phần mềm. (c) “kiểm thử toàn diện/đầy đủ” là bất khả thi (nguyên tắc 2: exhaustive testing is impossible) nên không thể là mục tiêu. (d) so sánh kết quả thực tế với mong đợi là một HOẠT ĐỘNG/bước trong thực thi kiểm thử, không phải mục tiêu của kiểm thử.\n\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.1.1 Typical Objectives of Testing (& 1.3 nguyên tắc 2)."
  },
  {
    "n": 25,
    "ref": "Câu 25 [FL-5.1.2]",
    "stem": "Which of the following tasks is MOST likely to be performed by the test manager?",
    "opts": [
      {
        "k": "a",
        "t": "A) Write test summary reports based on the information gathered during testing"
      },
      {
        "k": "b",
        "t": "B) Review tests developed by others"
      },
      {
        "k": "c",
        "t": "C) Prepare and acquire test data"
      },
      {
        "k": "d",
        "t": "D) Analyze, review and assess requirements, specifications and models for testability"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nNhiệm vụ nào sau đây có nhiều khả năng được người quản lý kiểm thử thực hiện nhất?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Viết báo cáo tóm tắt bài kiểm tra dựa trên thông tin thu thập được trong quá trình kiểm tra\n  B) Xem lại các bài kiểm tra do người khác phát triển\n  C) Chuẩn bị và thu thập dữ liệu kiểm thử\n  D) Phân tích, xem xét và đánh giá các yêu cầu, thông số kỹ thuật và mô hình để kiểm tra\n\n💡 GIẢI THÍCH CHI TIẾT:\nViết test summary report dựa trên thông tin thu thập trong quá trình kiểm thử là nhiệm vụ điển hình của TEST MANAGER (cùng với lập kế hoạch, giám sát – kiểm soát, khởi tạo phân tích/thiết kế/thực thi, ra quyết định release theo exit criteria…) ⇒ (a). Ba phương án còn lại là nhiệm vụ điển hình của TESTER: (b) review test do người khác viết; (c) chuẩn bị/thu thập test data; (d) phân tích – review – đánh giá test basis về khả năng kiểm thử.\n\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.1.2 Tasks of a Test Manager and Tester."
  },
  {
    "n": 26,
    "ref": "Câu 27 [FL-1.5.2]",
    "stem": "Which of the following qualities is MORE likely to be found in a tester’s mindset rather than in a developer’s?",
    "opts": [
      {
        "k": "a",
        "t": "A) A tester’s mindset tends to grow and mature as the tester gains experience"
      },
      {
        "k": "b",
        "t": "B) The ability to see what might go wrong"
      },
      {
        "k": "c",
        "t": "C) Good communication with team members"
      },
      {
        "k": "d",
        "t": "D) A focus on getting all things done"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nPhẩm chất nào sau đây có nhiều khả năng được tìm thấy trong suy nghĩ của tester (kiểm thử viên) hơn là của nhà phát triển?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Tư duy của tester (kiểm thử viên) có xu hướng phát triển và trưởng thành khi tester (kiểm thử viên) tích lũy được kinh nghiệm\n  B) Khả năng nhìn thấy những gì có thể sai\n  C) Giao tiếp tốt với các thành viên trong nhóm\n  D) Tập trung vào việc hoàn thành mọi việc\n\n💡 GIẢI THÍCH CHI TIẾT:\nTư duy tester đặc trưng bởi tính tò mò, sự bi quan nghề nghiệp (professional pessimism), con mắt phản biện, chú ý đến chi tiết — tức khả năng nhìn ra “điều gì có thể hỏng” ⇒ (b). (a) đúng là mindset trưởng thành theo kinh nghiệm, nhưng điều này đúng với CẢ developer nên không phải nét “nhiều khả năng có ở tester HƠN”. (c) giao tiếp tốt cần cho mọi vai trò. (d) thiên hướng “hoàn thành, xây dựng cho xong” nghiêng về developer (mindset hướng thiết kế và xây dựng giải pháp) hơn là tester.\n\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.5.2 Tester’s and Developer’s Mindsets."
  },
  {
    "n": 27,
    "ref": "Câu 28 [FL-2.3]",
    "stem": "Which of the following statements about test types and test levels is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Functional and non-functional testing can be performed at system and acceptance test levels, while white-box testing is restricted to component and integration testing"
      },
      {
        "k": "b",
        "t": "B) Functional testing can be performed at any test level, while white-box testing is restricted to component testing"
      },
      {
        "k": "c",
        "t": "C) It is possible to perform functional, non-functional and white-box testing at any test level"
      },
      {
        "k": "d",
        "t": "D) Functional and non-functional testing can be performed at any test level, while white-box testing is restricted to component and integration testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về loại bài kiểm tra và cấp độ bài kiểm tra là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra chức năng và phi chức năng có thể được thực hiện ở cấp độ kiểm tra hệ thống và chấp nhận, trong khi kiểm tra hộp trắng bị hạn chế ở kiểm tra thành phần và tích hợp\n  B) Kiểm thử chức năng có thể được thực hiện ở bất kỳ cấp độ kiểm thử nào, trong khi kiểm thử hộp trắng bị hạn chế ở kiểm thử thành phần\n  C) Có thể thực hiện kiểm tra chức năng, phi chức năng và hộp trắng ở mọi cấp độ kiểm tra\n  D) Kiểm thử chức năng và phi chức năng có thể được thực hiện ở mọi cấp độ kiểm thử, trong khi kiểm thử hộp trắng bị giới hạn ở kiểm thử thành phần và tích hợp\n\n💡 GIẢI THÍCH CHI TIẾT:\nSyllabus khẳng định: có thể thực hiện BẤT KỲ test type nào (functional, non- functional, white-box, change-related) ở BẤT KỲ test level nào ⇒ (c). Ví dụ white-box ở mức hệ thống: đo độ phủ menu/luồng màn hình hoặc độ phủ quy trình nghiệp vụ. Các phương án (a), (b), (d) đều áp đặt giới hạn không tồn tại — white-box không hề bị bó hẹp ở component/integration, và functional/non-functional không bị giới hạn ở mức nào.\n\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.3 Test Types (2.3.5 & phần tổng kết)."
  },
  {
    "n": 28,
    "ref": "Câu 29 [FL-1.3]",
    "stem": "As a result of risk analysis, more testing is being directed to those areas of the system under test where initial testing found more defects than average. Which of the following testing principles is being applied?",
    "opts": [
      {
        "k": "a",
        "t": "A) Beware of the pesticide paradox"
      },
      {
        "k": "b",
        "t": "B) Testing is context dependent"
      },
      {
        "k": "c",
        "t": "C) Absence-of-errors is a fallacy"
      },
      {
        "k": "d",
        "t": "D) Defects cluster together"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nTheo kết quả của việc phân tích rủi ro, nhiều kiểm thử đang được hướng tới các khu vực của hệ thống được kiểm thử, nơi kiểm thử ban đầu tìm thấy nhiều lỗi hơn mức trung bình. Nguyên tắc kiểm thử nào sau đây đang được áp dụng?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Cảnh giác với nghịch lý thuốc trừ sâu\n  B) Kiểm thử phụ thuộc vào ngữ cảnh\n  C) Việc không có sai sót là một sai lầm\n  D) Các khiếm khuyết (defect) cụm lại với nhau\n\n💡 GIẢI THÍCH CHI TIẾT:\nNguyên tắc “defects cluster together”: một số ít module thường chứa phần lớn defect — sự tụ defect quan sát được từ kiểm thử ban đầu là cơ sở dự báo rủi ro để TẬP TRUNG thêm nỗ lực kiểm thử vào đúng các vùng đó ⇒ (d). (a) pesticide paradox nói về việc test lặp lại mãi sẽ hết tìm ra lỗi mới, dẫn tới phải làm mới test — ngược hướng với tình huống. (b) bối cảnh ảnh hưởng cách kiểm thử — không liên quan trực tiếp. (c) “hết lỗi không có nghĩa hệ thống dùng được” — bàn về giá trị sản phẩm, không phải phân bổ nỗ lực theo mật độ defect.\n\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.3 Seven Testing Principles (nguyên tắc 4)."
  },
  {
    "n": 29,
    "ref": "Câu 30 [FL-4.2.1]",
    "stem": "A fitness app measures the number of steps walked each day and provides feedback according to the ranges shown in the figure. Which of the following sets of test inputs would achieve the BEST equivalence partition coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 0, 1000, 2000, 3000, 4000"
      },
      {
        "k": "b",
        "t": "B) 1000, 2001, 4000, 4001, 6000"
      },
      {
        "k": "c",
        "t": "C) 123, 2345, 3456, 4567, 5678"
      },
      {
        "k": "d",
        "t": "D) 666, 999, 2222, 5555, 6666"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nỨng dụng thể dục đo số bước đã đi mỗi ngày và cung cấp phản hồi theo phạm vi hiển thị trong hình. Bộ đầu vào kiểm thử nào sau đây sẽ đạt được phạm vi bao phủ phân vùng tương đương TỐT NHẤT?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 0, 1000, 2000, 3000, 4000\n  B) 1000, 2001, 4000, 4001, 6000\n  C) 123, 2345, 3456, 4567, 5678\n  D) 666, 999, 2222, 5555, 6666\n\n💡 GIẢI THÍCH CHI TIẾT:\nCó 5 phân vùng hợp lệ: P1 ≤1000 (Couch Potato); P2 1001–2000 (Lazy Bones); P3 2001–4000 (Getting There); P4 4001–6000 (Not Bad); P5 >6000 (Way to Go). Đếm số phân vùng mỗi phương án chạm: (a) 0, 1000 ∈ P1; 2000 ∈ P2; 3000, 4000 ∈ P3 → 3 phân vùng. (b) 1000 ∈ P1; 2001, 4000 ∈ P3; 4001, 6000 ∈ P4 → 3. (c) 123 ∈ P1; 2345, 3456 ∈ P3; 4567, 5678 ∈ P4 → 3. (d) 666, 999 ∈ P1; 2222 ∈ P3; 5555 ∈ P4; 6666 ∈ P5 → 4 phân vùng — nhiều nhất ⇒ (d). Không phương án nào chạm P2, nên 4/5 là mức phủ tốt nhất có thể chọn.\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 30,
    "ref": "Câu 31 [FL-4.2.3]",
    "stem": "Decision table testing is being performed on a speeding fine system. Two test cases have already been generated for rules R1 and R4, and four additional test cases DT1–DT4 are given (see the figure). Which two of the additional test cases would achieve full coverage of the complete decision table, when combined with the test cases already generated for R1 and R4?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) DT1, DT2"
      },
      {
        "k": "b",
        "t": "B) DT2, DT4"
      },
      {
        "k": "c",
        "t": "C) DT3, DT4"
      },
      {
        "k": "d",
        "t": "D) DT2, DT3"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nKiểm tra bảng quyết định đang được thực hiện trên một hệ thống tăng tốc. Hai test case (ca kiểm thử) đã được tạo cho quy tắc R1 và R4 và bốn test case (ca kiểm thử) bổ sung DT1–DT4 được đưa ra (xem hình). Hai trường hợp kiểm thử bổ sung nào sẽ đạt được phạm vi bao phủ đầy đủ của bảng quyết định hoàn chỉnh, khi kết hợp với các trường hợp kiểm thử đã được tạo cho R1 và R4?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) ĐT1, ĐT2\n  B) ĐT2, ĐT4\n  C) ĐT3, ĐT4\n  D) ĐT2, ĐT3\n\n💡 GIẢI THÍCH CHI TIẾT:\nBảng quyết định đầy đủ với 2 điều kiện nhị phân (Speed > 50?; School Zone?) có 4 rule: R1 = (T, T), R2 = (T, F), R3 = (F, T), R4 = (F, F). Đã có test cho R1 và R4, còn thiếu R2 và R3. Ánh xạ các test bổ sung: DT1 (Speed 55, School Zone T) → (T, T) = R1 — đã phủ; DT2 (44, T) → (F, T) = R3 — MỚI; DT3 (66, T) → (T, T) = R1 — đã phủ; DT4 (77, F) → (T, F) = R2 — MỚI. Vậy cần DT2 và DT4 ⇒ (b).\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.3 Decision Table Testing."
  },
  {
    "n": 31,
    "ref": "Câu 32 [FL-2.2]",
    "stem": "The testing being performed has the following attributes: it is based on interface specifications; it is focused on finding failures in communication; and the test approach uses both functional and structural test types. Which of the following test levels is MOST likely being performed?",
    "opts": [
      {
        "k": "a",
        "t": "A) Component testing"
      },
      {
        "k": "b",
        "t": "B) Integration testing"
      },
      {
        "k": "c",
        "t": "C) System testing"
      },
      {
        "k": "d",
        "t": "D) Acceptance testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nViệc kiểm thử đang được thực hiện có các thuộc tính sau: nó dựa trên các thông số kỹ thuật của giao diện; nó tập trung vào việc tìm kiếm những thất bại trong giao tiếp; và phương pháp kiểm thử sử dụng cả hai loại kiểm thử (test type) chức năng và cấu trúc. Cấp độ kiểm tra nào sau đây có nhiều khả năng được thực hiện nhất?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra thành phần\n  B) Kiểm tra tích hợp\n  C) Kiểm tra hệ thống\n  D) Kiểm tra chấp nhận\n\n💡 GIẢI THÍCH CHI TIẾT:\nBa dấu hiệu đều trỏ về INTEGRATION TESTING: test basis điển hình là đặc tả giao diện (interface/API specifications); mục tiêu tập trung vào tìm failure trong GIAO TIẾP/tương tác giữa các component hoặc hệ thống; và ở mức này thường kết hợp cả kiểm thử chức năng lẫn cấu trúc (ví dụ độ phủ giao diện) ⇒ (b). (a) component testing dựa trên thiết kế chi tiết/mã của từng đơn vị riêng lẻ. (c) system testing dựa trên yêu cầu hệ thống, nhìn hành vi end-to-end của cả hệ thống. (d) acceptance testing dựa trên nhu cầu người dùng/nghiệp vụ để ra quyết định chấp nhận.\n\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2 Test Levels (2.2.2 Integration Testing)."
  },
  {
    "n": 32,
    "ref": "Câu 33 [FL-5.6]",
    "stem": "You are performing system testing of a train reservation system and have found a defect: the system occasionally reports that no trains are available, although this should be the case. You have already provided the developers with a summary of the defect and the version of the tested system; they recognize the urgency and are waiting for further details (see the figure for the additional information available). Which of this additional information is MOST useful to include in the defect report?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 1, 2, 6"
      },
      {
        "k": "b",
        "t": "B) 1, 4, 5, 6"
      },
      {
        "k": "c",
        "t": "C) 2, 3, 4, 5"
      },
      {
        "k": "d",
        "t": "D) 3, 5, 6"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang thực hiện kiểm tra hệ thống của hệ thống đặt chỗ tàu và phát hiện thấy một lỗi: hệ thống thỉnh thoảng báo cáo rằng không có chuyến tàu nào khả dụng, mặc dù trường hợp này đúng là như vậy. Bạn đã cung cấp cho nhà phát triển bản tóm tắt về lỗi và phiên bản của hệ thống được kiểm thử; họ nhận ra sự cấp bách và đang chờ đợi thêm thông tin chi tiết (xem hình để biết thêm thông tin có sẵn). Thông tin bổ sung nào hữu ích NHẤT để đưa vào báo cáo lỗi?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 1, 2, 6\n  B) 1, 4, 5, 6\n  C) 2, 3, 4, 5\n  D) 3, 5, 6\n\n💡 GIẢI THÍCH CHI TIẾT:\nDeveloper cần thông tin giúp TÁI HIỆN và PHÂN TÍCH defect: (3) chi tiết môi trường kiểm thử — “occasionally” gợi ý lỗi phụ thuộc cấu hình/dữ liệu môi trường; (5) kết quả thực tế — bắt buộc để đối chiếu với kết quả mong đợi; (6) tham chiếu đặc tả test case — giúp developer tự tái hiện đúng các bước. Ba mục còn lại đã thừa trong ngữ cảnh: (1) severity và (4) urgency/priority — developer “đã nhận ra mức khẩn cấp” nên không phải thứ họ đang chờ; (2) định danh test object — đã cung cấp qua phiên bản hệ thống được test. Vậy {3, 5, 6} ⇒ (d).\n\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.6 Defect Management."
  },
  {
    "n": 33,
    "ref": "Câu 34 [FL-3.2.1]",
    "stem": "Which of the following statements about the use of checklists in a formal review is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) As part of review planning, the reviewers create the checklists needed for the review"
      },
      {
        "k": "b",
        "t": "B) As part of issue communication, the reviewers fill in the checklists provided for the review"
      },
      {
        "k": "c",
        "t": "C) As part of the review meeting, the reviewers create defect reports based on the checklists provided for the review"
      },
      {
        "k": "d",
        "t": "D) As part of review initiation, the reviewers receive the checklists needed for the review"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về việc sử dụng danh sách kiểm tra trong đánh giá chính thức là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Là một phần của việc lập kế hoạch đánh giá, người đánh giá tạo ra các danh sách kiểm tra cần thiết cho việc đánh giá\n  B) Là một phần của quá trình trao đổi vấn đề, người đánh giá điền vào danh sách kiểm tra được cung cấp cho việc đánh giá\n  C) Là một phần của cuộc họp đánh giá, người đánh giá tạo báo cáo lỗi dựa trên danh sách kiểm tra được cung cấp cho đánh giá.\n  D) Là một phần của quá trình bắt đầu đánh giá, người đánh giá sẽ nhận được danh sách kiểm tra cần thiết cho việc đánh giá\n\n💡 GIẢI THÍCH CHI TIẾT:\nTrong quy trình review, hoạt động INITIATE REVIEW gồm phân phát work product và các tài liệu liên quan như mẫu ghi nhận issue, CHECKLIST cho người tham gia — tức reviewer NHẬN checklist ở bước khởi động ⇒ (d). (a) sai: ở bước planning người ta LỰA CHỌN kỹ thuật/checklist sẽ dùng, không phải để từng reviewer tự tạo. (b) sai: bước trao đổi/phân tích issue là báo cáo và thảo luận các phát hiện, không phải “điền checklist”. (c) sai: cuộc họp review ghi nhận và quyết định về các issue; việc lập defect report chính thức không phải hoạt động định nghĩa của cuộc họp dựa trên checklist.\n\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.1 Work Product Review Process."
  },
  {
    "n": 34,
    "ref": "Câu 35 [FL-3.2.3]",
    "stem": "The reviews being used in your organization have the following attributes (see the figure): there is a scribe; the purpose is to detect potential defects; the review meeting is led by the author; reviewers find potential defects by individual review; and a review report is produced. Which of the following review types is MOST likely being used?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Informal review"
      },
      {
        "k": "b",
        "t": "B) Walkthrough"
      },
      {
        "k": "c",
        "t": "C) Technical review"
      },
      {
        "k": "d",
        "t": "D) Inspection"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCác đánh giá đang được sử dụng trong tổ chức của bạn có các thuộc tính sau (xem hình): có người ghi chép; mục đích là để phát hiện các khiếm khuyết tiềm ẩn; cuộc họp phản biện do tác giả chủ trì; người đánh giá tìm ra những khiếm khuyết tiềm ẩn bằng cách đánh giá cá nhân; và một báo cáo đánh giá được tạo ra. Loại đánh giá nào sau đây có nhiều khả năng được sử dụng nhất?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Đánh giá không chính thức\n  B) Hướng dẫn\n  C) Đánh giá kỹ thuật\n  D) Kiểm tra\n\n💡 GIẢI THÍCH CHI TIẾT:\nDấu hiệu quyết định là “cuộc họp review do CHÍNH TÁC GIẢ dẫn dắt” — đặc trưng của WALKTHROUGH; walkthrough cũng bắt buộc có scribe (khuyến nghị không phải author), có thể có individual review trước họp, có thể tạo báo cáo, và một trong các mục đích là phát hiện defect tiềm ẩn ⇒ (b). (a) informal review không yêu cầu họp chính thức, thường không cần báo cáo/scribe theo quy trình. (c) technical review do FACILITATOR được đào tạo (không phải author) điều phối. (d) inspection là loại chính thức nhất, do moderator dẫn dắt và author KHÔNG được làm người dẫn.\n\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.3 Review Types."
  },
  {
    "n": 35,
    "ref": "Câu 36 [FL-5.5.1]",
    "stem": "Which of the following BEST defines risk level?",
    "opts": [
      {
        "k": "a",
        "t": "A) Risk level is calculated by adding together the probabilities of all problem situations and the financial harm that results from them"
      },
      {
        "k": "b",
        "t": "B) Risk level is estimated by multiplying the likelihood of a threat to the system by the chance that the threat will occur and will result in financial damage"
      },
      {
        "k": "c",
        "t": "C) Risk level is determined by a combination of the probability of an undesirable event and the expected impact of that event"
      },
      {
        "k": "d",
        "t": "D) Risk level is the sum of all potential hazards to a system multiplied by the sum of all potential losses from that system"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT xác định mức độ rủi ro?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Mức độ rủi ro được tính bằng cách cộng các xác suất của tất cả các tình huống có vấn đề và tổn hại tài chính do chúng gây ra.\n  B) Mức độ rủi ro được ước tính bằng cách nhân khả năng xảy ra mối đe dọa đối với hệ thống với khả năng mối đe dọa sẽ xảy ra và sẽ dẫn đến thiệt hại tài chính\n  C) Mức độ rủi ro được xác định bằng sự kết hợp giữa xác suất xảy ra sự kiện không mong muốn và tác động dự kiến của sự kiện đó\n  D) Mức độ rủi ro là tổng của tất cả các mối nguy tiềm ẩn đối với một hệ thống nhân với tổng của tất cả các tổn thất tiềm ẩn từ hệ thống đó\n\n💡 GIẢI THÍCH CHI TIẾT:\nĐịnh nghĩa chuẩn: mức rủi ro (risk level) được xác định bởi SỰ KẾT HỢP giữa xác suất xảy ra sự kiện không mong muốn (likelihood) và tác động/thiệt hại kỳ vọng của sự kiện đó (impact) ⇒ (c). Lưu ý syllabus dùng chữ “combination” chứ không ấn định công thức cộng hay nhân cụ thể. (a), (d) sai vì cộng/nhân gộp mọi tình huống thành một con số là vô nghĩa về mặt khái niệm — risk level xét theo TỪNG rủi ro; (b) lủng củng và thu hẹp tác động về “thiệt hại tài chính”, đồng thời nhân “likelihood” với “chance” là trùng lặp.\n\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.5.1 Definition of Risk."
  },
  {
    "n": 36,
    "ref": "Câu 37 [FL-6.1.1]",
    "stem": "Given the following test activities and test tools (see the figure). Which of the following BEST matches the activities with the tools?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 1 – B, 2 – C, 3 – D, 4 – A"
      },
      {
        "k": "b",
        "t": "B) 1 – B, 2 – A, 3 – C, 4 – D"
      },
      {
        "k": "c",
        "t": "C) 1 – B, 2 – A, 3 – D, 4 – C"
      },
      {
        "k": "d",
        "t": "D) 1 – A, 2 – B, 3 – D, 4 – C"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCho các hoạt động kiểm tra và công cụ kiểm tra sau đây (xem hình). Điều nào sau đây TỐT NHẤT phù hợp với các hoạt động với các công cụ?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 1 – B, 2 – C, 3 – D, 4 – A\n  B) 1 – B, 2 – A, 3 – C, 4 – D\n  C) 1 – B, 2 – A, 3 – D, 4 – C\n  D) 1 – A, 2 – B, 3 – D, 4 – C\n\n💡 GIẢI THÍCH CHI TIẾT:\nTheo phân loại công cụ của syllabus: (1) đo hiệu năng & phân tích động ↔ (B) dynamic analysis tools — nhóm “tool support for performance measurement and dynamic analysis”. (2) thực thi test & ghi log ↔ (A) code COVERAGE tools — công cụ đo độ phủ nằm trong nhóm “tool support for test execution and logging”. (3) quản lý kiểm thử và testware ↔ (D) DEFECT management tools — thuộc nhóm “management of testing and testware”. (4) thiết kế test ↔ (C) test DATA preparation tools — thuộc nhóm “tool support for test design and implementation”. Vậy 1-B, 2-A, 3-D, 4-C ⇒ (c).\n\n📌 Kiến thức: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.1.1 Test Tool Classification."
  },
  {
    "n": 37,
    "ref": "Câu 39 [FL-6.2.2]",
    "stem": "Which of the following is MOST likely to be used as a reason for using a pilot project to introduce a tool into an organization?",
    "opts": [
      {
        "k": "a",
        "t": "A) The need to evaluate the test automation skills and the training, mentoring and coaching needs of the testers who will use the tool"
      },
      {
        "k": "b",
        "t": "B) The need to evaluate whether the tool provides the required functionality and does not duplicate existing test tools"
      },
      {
        "k": "c",
        "t": "C) The need to evaluate the tool vendor in terms of the training and other support they provide"
      },
      {
        "k": "d",
        "t": "D) The need to evaluate how the tool fits with existing processes and practices, and to determine what would need to change"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây có nhiều khả năng được sử dụng làm lý do nhất để sử dụng một dự án thí điểm để giới thiệu một công cụ vào tổ chức?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Sự cần thiết phải đánh giá các kỹ năng tự động hóa kiểm thử (test automation) cũng như nhu cầu đào tạo, cố vấn và huấn luyện của những tester (kiểm thử viên) sẽ sử dụng công cụ này\n  B) Cần đánh giá xem công cụ này có cung cấp chức năng cần thiết và không trùng lặp với các công cụ kiểm tra hiện có hay không\n  C) Nhu cầu đánh giá nhà cung cấp công cụ về mặt đào tạo và hỗ trợ khác mà họ cung cấp\n  D) Nhu cầu đánh giá mức độ phù hợp của công cụ này với các quy trình và thực tiễn hiện tại cũng như xác định những gì cần thay đổi\n\n💡 GIẢI THÍCH CHI TIẾT:\nCác mục tiêu của PILOT PROJECT theo syllabus: học sâu về công cụ; đánh giá công cụ KHỚP thế nào với quy trình và thực hành hiện có, xác định những gì cần thay đổi; quyết định cách dùng/lưu trữ/quản lý chuẩn; đánh giá lợi ích so với chi phí ⇒ (d) đúng nguyên văn một mục tiêu. (b) và (c) — đánh giá tính năng so với yêu cầu, tránh trùng công cụ sẵn có, đánh giá vendor (hỗ trợ, đào tạo) — là việc của giai đoạn LỰA CHỌN công cụ TRƯỚC khi pilot. (a) nhu cầu đào tạo/coaching là yếu tố thành công khi TRIỂN KHAI rộng, không phải lý do chạy pilot.\n\n📌 Kiến thức: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.2.2 Pilot Projects for Introducing a Tool (& 6.2.1, 6.2.3)."
  },
  {
    "n": 38,
    "ref": "Câu 40 [FL-4.2.1]",
    "stem": "A daily radiation recorder for plants produces a sunshine score based on a combination of the number of hours a plant is exposed to the sun (below 3 hours; 3 to 6 hours; above 6 hours) and the average intensity of the sunshine (very low; low; medium; high). Given the test cases in the figure, what is the minimum number of ADDITIONAL test cases needed to ensure full coverage of ALL VALID INPUT equivalence partitions?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
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
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nMáy ghi bức xạ hàng ngày dành cho thực vật tạo ra điểm nắng dựa trên sự kết hợp giữa số giờ cây tiếp xúc với ánh nắng mặt trời (dưới 3 giờ; 3 đến 6 giờ; trên 6 giờ) và cường độ ánh nắng trung bình (rất thấp; thấp; trung bình; cao). Với các test case (ca kiểm thử) trong hình, số lượng test case (ca kiểm thử) BỔ SUNG tối thiểu cần thiết để đảm bảo bao phủ toàn bộ TẤT CẢ các phân vùng tương đương INPUT HỢP LỆ là bao nhiêu?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 1\n  B) 2\n  C) 3\n  D) 4\n\n💡 GIẢI THÍCH CHI TIẾT:\nHai tham số đầu vào có các phân vùng hợp lệ: Giờ nắng = {<3; 3–6; >6} (3 phân vùng) và Cường độ = {very low; low; medium; high} (4 phân vùng). Ba test đã có phủ: T1 (1.5h = <3; very low), T2 (7.0h = >6; medium), T3 (0.5h = <3; very low — trùng tổ hợp phân vùng với T1). Còn thiếu: phân vùng giờ “3–6” và hai phân vùng cường độ “low”, “high”. Vì tiêu chí là Each-Choice (mỗi phân vùng của MỖI tham số xuất hiện ít nhất một lần, không cần đủ mọi tổ hợp), có thể gộp: test bổ sung #1 = (3–6 giờ, low) phủ cùng lúc 2 phân vùng thiếu; test bổ sung #2 = (giờ bất kỳ, high). Tối thiểu 2 test ⇒ (b).\n\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning. PHẦN BỔ SUNG – CÂU HỎI THEO NỘI DUNG MỚI CỦA CTFL v4.0"
  },
  {
    "n": 39,
    "ref": "Câu bổ sung 1 [FL-2.1.5]",
    "stem": "Which of the following BEST describes the shift-left approach in testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Moving all test execution into the first iteration of the project so that testing finishes before coding starts"
      },
      {
        "k": "b",
        "t": "B) Performing testing and other quality assurance activities earlier in the software development lifecycle, e.g., reviewing specifications from the tester’s perspective or writing test cases before the code is written"
      },
      {
        "k": "c",
        "t": "C) Replacing all dynamic testing with static testing in order to reduce the cost of test environments"
      },
      {
        "k": "d",
        "t": "D) Transferring all testing responsibilities to the developers at the beginning of the project"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT mô tả cách tiếp cận dịch chuyển sang trái trong kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Chuyển tất cả việc thực hiện kiểm thử sang lần lặp đầu tiên của dự án để quá trình kiểm thử kết thúc trước khi bắt đầu mã hóa\n  B) Thực hiện kiểm tra và các hoạt động đảm bảo chất lượng khác sớm hơn trong vòng đời phát triển phần mềm, ví dụ: xem xét các thông số kỹ thuật từ quan điểm của người kiểm tra hoặc viết các trường hợp kiểm thử trước khi viết mã\n  C) Thay thế tất cả kiểm thử động (dynamic testing) bằng kiểm thử tĩnh (static testing) để giảm chi phí cho môi trường kiểm thử\n  D) Chuyển giao mọi trách nhiệm kiểm thử cho nhà phát triển khi bắt đầu dự án\n\n💡 GIẢI THÍCH CHI TIẾT:\nShift-left là cách gọi khác của nguyên tắc “kiểm thử sớm”: đưa các hoạt động kiểm thử/đảm bảo chất lượng lên SỚM hơn trong vòng đời — ví dụ review đặc tả từ góc nhìn tester, viết test trước khi lập trình (TDD), dùng static analysis và CI với kiểm thử tự động ⇒ (b). (a) sai: không thể (và không cần) dồn toàn bộ THỰC THI test lên đầu dự án — shift-left là dịch chuyển trọng tâm, không đảo lộn trình tự. (c) sai: kiểm thử tĩnh bổ sung chứ không thay thế kiểm thử động. (d) sai: shift-left không có nghĩa là đẩy hết trách nhiệm kiểm thử cho developer. Lưu ý của syllabus: shift-left có thể tốn thêm effort ở giai đoạn sớm nhưng tiết kiệm lớn ở giai đoạn sau.\n\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.5 Shift-Left Approach."
  },
  {
    "n": 40,
    "ref": "Câu bổ sung 2 [FL-2.1.4]",
    "stem": "From a testing perspective, which of the following is a benefit of DevOps?",
    "opts": [
      {
        "k": "a",
        "t": "A) Manual regression testing is no longer needed, because every change is deployed to production automatically"
      },
      {
        "k": "b",
        "t": "B) The CI/CD pipeline gives fast feedback on code quality by automatically executing tests every time code is committed"
      },
      {
        "k": "c",
        "t": "C) Testers no longer need to collaborate with developers, since the delivery pipeline performs all the testing"
      },
      {
        "k": "d",
        "t": "D) The test pyramid becomes unnecessary, because all automated tests are executed at the system level"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nTừ góc độ kiểm thử, điều nào sau đây là lợi ích của DevOps?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra hồi quy thủ công không còn cần thiết nữa vì mọi thay đổi đều được triển khai tự động vào sản xuất\n  B) Quy trình CI/CD cung cấp phản hồi nhanh về chất lượng mã bằng cách tự động thực hiện kiểm tra mỗi khi mã được cam kết\n  C) Tester (kiểm thử viên) không cần phải cộng tác với nhà phát triển nữa vì quy trình phân phối thực hiện tất cả các bài kiểm thử\n  D) Kim tự tháp kiểm thử trở nên không cần thiết vì tất cả các kiểm thử tự động đều được thực hiện ở cấp hệ thống\n\n💡 GIẢI THÍCH CHI TIẾT:\nDevOps thúc đẩy CI/CD: mỗi lần commit, pipeline tự build và chạy các bộ test tự động, cho phản hồi NHANH về chất lượng mã — đây là lợi ích cốt lõi đối với kiểm thử ⇒ (b). (a) sai: kiểm thử thủ công (đặc biệt exploratory và kiểm thử hướng người dùng) vẫn cần thiết; tự động hóa không xóa bỏ nhu cầu đó. (c) sai ngược tinh thần DevOps — Dev và Ops (và tester) hợp tác chặt hơn, không tách rời. (d) sai: DevOps càng cần test pyramid để giữ đa số test ở tầng thấp (nhanh, rẻ), tránh dồn hết lên system/E2E gây chậm pipeline. Rủi ro đi kèm DevOps mà syllabus nêu: công sức thiết lập và BẢO TRÌ hạ tầng tự động hóa.\n\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.4 DevOps and Testing."
  },
  {
    "n": 41,
    "ref": "Câu bổ sung 3 [FL-2.1.3]",
    "stem": "Which of the following statements about test-first approaches to development is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) In test-driven development (TDD), the developer writes automated component tests first, then writes the code to satisfy those tests, and then refactors"
      },
      {
        "k": "b",
        "t": "B) In behavior-driven development (BDD), test scenarios are expressed in a programming language that only developers can understand"
      },
      {
        "k": "c",
        "t": "C) In acceptance test-driven development (ATDD), the tests are derived from the source code after implementation"
      },
      {
        "k": "d",
        "t": "D) TDD, ATDD and BDD all require the tests to be written after the implementation has been completed"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về phương pháp phát triển kiểm thử đầu tiên là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Trong phát triển dựa trên kiểm thử (TDD), nhà phát triển viết các bài kiểm thử thành phần tự động trước, sau đó viết mã để đáp ứng các bài kiểm thử đó và sau đó tái cấu trúc\n  B) Trong phát triển theo hướng hành vi (BDD), các kịch bản kiểm thử được thể hiện bằng ngôn ngữ lập trình mà chỉ nhà phát triển mới có thể hiểu được\n  C) Trong phát triển dựa trên kiểm thử chấp nhận (acceptance testing) (ATDD), các bài kiểm thử được lấy từ mã nguồn sau khi triển khai\n  D) TDD, ATDD và BDD đều yêu cầu viết bài kiểm tra sau khi hoàn thành việc triển khai\n\n💡 GIẢI THÍCH CHI TIẾT:\nTDD đúng như (a): viết test (mức component) TRƯỚC, viết mã cho test chạy đạt, rồi tái cấu trúc (refactor) — chu trình red–green–refactor. (b) sai: BDD diễn đạt hành vi bằng ngôn ngữ tự nhiên có cấu trúc Given/When/Then mà CẢ các bên phi kỹ thuật đọc được, sau đó mới chuyển thành test tự động. (c) sai: ATDD suy dẫn test từ ACCEPTANCE CRITERIA của user story trong phiên làm việc cộng tác TRƯỚC khi hiện thực, không phải từ mã nguồn sau khi code xong. (d) sai: cả ba đều là cách tiếp cận TEST-FIRST — “ví dụ về hành vi mong muốn viết trước, dẫn dắt việc lập trình”.\n\n📌 Kiến thức: CTFL v4.0 — Chương 2, mục 2.1.3 Testing as a Driver for Software Development (TDD, ATDD, BDD)."
  },
  {
    "n": 42,
    "ref": "Câu bổ sung 4 [FL-1.5.2]",
    "stem": "Which of the following BEST describes the whole team approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) Any team member with the necessary knowledge and skills can perform any task, and everyone is responsible for quality"
      },
      {
        "k": "b",
        "t": "B) Testing is performed exclusively by professional testers, in order to guarantee the independence of testing"
      },
      {
        "k": "c",
        "t": "C) The test manager assigns all testing tasks to the developers in order to speed up delivery"
      },
      {
        "k": "d",
        "t": "D) The whole team approach must be applied in every context, including situations that demand a high level of test independence, such as safety-critical systems"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT mô tả cách tiếp cận của cả nhóm?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Bất kỳ thành viên nào trong nhóm có kiến thức và kỹ năng cần thiết đều có thể thực hiện bất kỳ nhiệm vụ nào và mọi người đều chịu trách nhiệm về chất lượng\n  B) Việc kiểm tra được thực hiện độc quyền bởi những người kiểm tra chuyên nghiệp, nhằm đảm bảo tính độc lập của việc kiểm tra\n  C) Người quản lý kiểm tra giao tất cả các nhiệm vụ kiểm tra cho nhà phát triển để tăng tốc độ phân phối\n  D) Cách tiếp cận của cả nhóm phải được áp dụng trong mọi bối cảnh, bao gồm các tình huống đòi hỏi mức độ độc lập kiểm tra cao, chẳng hạn như các hệ thống quan trọng về an toàn\n\n💡 GIẢI THÍCH CHI TIẾT:\nWhole team approach (xuất phát từ Extreme Programming): bất kỳ thành viên nào có kiến thức, kỹ năng cần thiết đều có thể thực hiện bất kỳ nhiệm vụ nào; MỌI NGƯỜI cùng chịu trách nhiệm về chất lượng; tester làm việc sát developer và đại diện nghiệp vụ, giúp lan tỏa kỹ năng kiểm thử trong nhóm ⇒ (a). (b) mô tả điều ngược lại — cô lập việc kiểm thử vào riêng tester. (c) sai: cách tiếp cận này là chia sẻ trách nhiệm, không phải “đùn” việc test cho developer. (d) sai: chính syllabus lưu ý whole team approach KHÔNG phải lúc nào cũng phù hợp — ví dụ bối cảnh an toàn (safety-critical) cần mức độc lập kiểm thử cao.\n\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.5.2 Whole Team Approach (& 1.5.3 Independence of Testing)."
  },
  {
    "n": 43,
    "ref": "Câu bổ sung 5 [FL-4.5.1]",
    "stem": "In collaborative user story writing, what do the “3 C’s” of a user story stand for?",
    "opts": [
      {
        "k": "a",
        "t": "A) Code, Coverage, Confirmation"
      },
      {
        "k": "b",
        "t": "B) Card, Conversation, Confirmation"
      },
      {
        "k": "c",
        "t": "C) Criteria, Collaboration, Completion"
      },
      {
        "k": "d",
        "t": "D) Card, Code, Completion"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nTrong quá trình cộng tác viết câu chuyện của người dùng, “3C” trong câu chuyện của người dùng tượng trưng cho điều gì?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Mã, Bảo hiểm, Xác nhận\n  B) Thẻ, Cuộc trò chuyện, Xác nhận\n  C) Tiêu chí, Hợp tác, Hoàn thiện\n  D) Thẻ, Mã, Hoàn thành\n\n💡 GIẢI THÍCH CHI TIẾT:\nUser story tốt được xây dựng quanh 3 C: CARD — phương tiện (thẻ) mô tả ngắn gọn user story (thường theo mẫu “As a… I want… so that…”); CONVERSATION — cuộc trao đổi giữa các bên (nghiệp vụ – phát triển – kiểm thử) làm rõ phần mềm sẽ được dùng thế nào; CONFIRMATION — các acceptance criteria dùng để xác nhận story hoàn thành ⇒ (b). Việc viết user story CỘNG TÁC (ví dụ dùng brainstorming, mind mapping với đủ ba góc nhìn) giúp bảo đảm story độc lập, đàm phán được, có giá trị, ước lượng được, nhỏ và KIỂM THỬ ĐƯỢC (INVEST).\n\n📌 Kiến thức: CTFL v4.0 — Chương 4, mục 4.5.1 Collaborative User Story Writing."
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
