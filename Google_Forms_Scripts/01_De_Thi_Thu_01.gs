/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 01 (Giải chi tiết TV) (39 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 01 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (39 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-5.3.1]",
    "stem": "Which of the following metrics would be MOST useful to monitor during test execution?",
    "opts": [
      {
        "k": "a",
        "t": "A) Percentage of executed test cases"
      },
      {
        "k": "b",
        "t": "B) Average number of testers involved in the test execution"
      },
      {
        "k": "c",
        "t": "C) Coverage of requirements by source code"
      },
      {
        "k": "d",
        "t": "D) Percentage of test cases already created and reviewed"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nSố liệu nào sau đây sẽ hữu ích NHẤT để theo dõi trong quá trình thực thi kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tỷ lệ các test case (ca kiểm thử) được thực hiện\n  B) Số lượng tester (kiểm thử viên) trung bình tham gia thực thi kiểm thử\n  C) Bao phủ các yêu cầu theo mã nguồn\n  D) Tỷ lệ các test case (ca kiểm thử) đã được tạo và xem xét\n\n[GIẢI THÍCH CHI TIẾT]\nTrong giai đoạn thực thi kiểm thử, mục tiêu của giám sát (test monitoring) là theo dõi tiến độ thực thi so với kế hoạch, và “tỷ lệ % test case đã được thực thi (kèm pass/fail/blocked)” là chỉ số tiến độ điển hình mà syllabus nêu. (b) số tester trung bình là chỉ số nguồn lực, không nói lên tiến độ hay chất lượng thực thi. (c) “độ phủ yêu cầu bởi mã nguồn” là khái niệm lệch — truy vết yêu cầu–mã nguồn thuộc về phát triển, không phải giám sát thực thi kiểm thử. (d) % test case đã tạo và đã review là chỉ số của giai đoạn phân tích/thiết kế/hiện thực kiểm thử, hữu ích TRƯỚC khi thực thi chứ không phải trong lúc thực thi.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.3.1 Metrics used in Testing (Test Monitoring & Control)."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-4.2.4]",
    "stem": "Which of the following statements about the given state transition diagram and the table of test cases is TRUE?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) The given test cases cover both valid and invalid transitions in the state transition diagram"
      },
      {
        "k": "b",
        "t": "B) The given test cases represent all possible valid transitions in the state transition diagram"
      },
      {
        "k": "c",
        "t": "C) The given test cases represent some of the valid transitions in the state transition diagram"
      },
      {
        "k": "d",
        "t": "D) The given test cases represent pairs of transitions in the state transition diagram"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây về sơ đồ chuyển trạng thái đã cho và bảng các trường hợp kiểm thử là ĐÚNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các test case (ca kiểm thử) đã cho bao gồm cả chuyển đổi hợp lệ và không hợp lệ trong sơ đồ chuyển đổi trạng thái\n  B) Các test case (ca kiểm thử) đã cho thể hiện tất cả các chuyển đổi hợp lệ có thể có trong sơ đồ chuyển đổi trạng thái\n  C) Các test case (ca kiểm thử) đã cho thể hiện một số chuyển đổi hợp lệ trong sơ đồ chuyển trạng thái\n  D) Các test case (ca kiểm thử) đã cho thể hiện các cặp chuyển đổi trong sơ đồ chuyển trạng thái\n\n[GIẢI THÍCH CHI TIẾT]\nSơ đồ có đúng 5 chuyển trạng thái hợp lệ và bảng có đúng 5 test case, mỗi test đi qua một chuyển hợp lệ đúng một lần ⇒ bộ test đạt 100% độ phủ chuyển trạng thái hợp lệ (all valid transitions / 0-switch coverage). (a) sai vì không có test nào thử chuyển KHÔNG hợp lệ (ví dụ S1 + RC On). (c) tuy đúng theo nghĩa đen nhưng không phải phát biểu chính xác nhất, vì bộ test phủ TẤT CẢ chứ không chỉ “một số”. (d) sai: “pairs of transitions” (1-switch coverage) là chuỗi 2 chuyển liên tiếp trong một test, còn ở đây mỗi test chỉ có 1 chuyển.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.4 State Transition Testing."
  },
  {
    "n": 3,
    "ref": "Câu 3 [FL-5.2.6]",
    "stem": "Which one of the following is a characteristic of a metrics-based approach for test estimation?",
    "opts": [
      {
        "k": "a",
        "t": "A) The budget which was used by a previous, similar test project"
      },
      {
        "k": "b",
        "t": "B) Overall experience collected in interviews with test managers"
      },
      {
        "k": "c",
        "t": "C) Estimation of the effort for test automation, agreed within the test team"
      },
      {
        "k": "d",
        "t": "D) Average of calculations collected from the business department"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là đặc điểm của phương pháp ước tính kiểm thử dựa trên số liệu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Ngân sách đã được sử dụng bởi một dự án kiểm thử tương tự trước đó\n  B) Kinh nghiệm tổng thể được thu thập trong các cuộc phỏng vấn với người quản lý kiểm tra\n  C) Ước tính nỗ lực tự động hóa kiểm thử (test automation), được thống nhất trong nhóm kiểm thử\n  D) Trung bình tính toán thu thập từ bộ phận kinh doanh\n\n[GIẢI THÍCH CHI TIẾT]\nƯớc lượng dựa trên số liệu (metrics-based) nghĩa là dựa trên các số đo của những dự án tương tự trước đây hoặc các giá trị điển hình — ngân sách/chi phí thực tế của một dự án kiểm thử tương tự trước đó chính là một “metric lịch sử” như vậy. (b) và (c) dựa trên phán đoán của con người nên thuộc cách tiếp cận expert-based (phỏng vấn test manager; cả nhóm thống nhất ước lượng kiểu Wideband Delphi/planning poker). (d) mơ hồ: “trung bình các tính toán từ phía nghiệp vụ” không phải dữ liệu đo lường của các dự án kiểm thử trước.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.2.6 Test Estimation (metrics-based vs. expert-based)."
  },
  {
    "n": 4,
    "ref": "Câu 4 [FL-1.2.3]",
    "stem": "Which one of the statements below describes the most common situation for a failure discovered during testing or in production?",
    "opts": [
      {
        "k": "a",
        "t": "A) The product crashed when the user selected an option in a dialog box"
      },
      {
        "k": "b",
        "t": "B) The wrong version of a compiled source code file was included in the build"
      },
      {
        "k": "c",
        "t": "C) The computation algorithm used the wrong input variables"
      },
      {
        "k": "d",
        "t": "D) The developer misinterpreted the requirement for the algorithm"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào dưới đây mô tả tình huống phổ biến nhất về lỗi được phát hiện trong quá trình kiểm thử hoặc trong sản xuất?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Sản phẩm bị lỗi khi người dùng chọn một tùy chọn trong hộp thoại\n  B) Phiên bản sai của tệp mã nguồn đã biên dịch đã được đưa vào bản dựng\n  C) Thuật toán tính toán sử dụng sai biến đầu vào\n  D) Nhà phát triển đã hiểu sai yêu cầu của thuật toán\n\n[GIẢI THÍCH CHI TIẾT]\nFailure là biểu hiện sai lệch ra bên ngoài khi hệ thống vận hành — đúng như (a): sản phẩm crash khi người dùng thao tác. Theo chuỗi nhân quả error → defect → failure: (d) là error (sai sót của con người khi hiểu yêu cầu), (c) là defect trong mã nguồn, (b) là defect về cấu hình/quản lý phiên bản trong bản build. Những gì được “phát hiện khi kiểm thử hoặc khi vận hành” chính là failure, còn defect/error là nguyên nhân đứng sau và chỉ được tìm ra khi phân tích/debug.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.2.3 Errors, Defects and Failures."
  },
  {
    "n": 5,
    "ref": "Câu 5 [FL-1.1.2]",
    "stem": "Which of the following statements correctly describes the difference between testing and debugging?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testing identifies the source of defects; debugging analyzes the defects and proposes prevention activities"
      },
      {
        "k": "b",
        "t": "B) Dynamic testing shows failures caused by defects; debugging eliminates the defects, which are the source of the failures"
      },
      {
        "k": "c",
        "t": "C) Testing does not remove faults; debugging removes the defects that cause the faults"
      },
      {
        "k": "d",
        "t": "D) Dynamic testing prevents the causes of failures; debugging removes the failures"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây mô tả chính xác sự khác biệt giữa kiểm thử và gỡ lỗi?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra xác định nguồn gốc của lỗi; gỡ lỗi phân tích các khiếm khuyết và đề xuất các hoạt động phòng ngừa\n  B) Kiểm thử động cho thấy các lỗi do lỗi gây ra; gỡ lỗi loại bỏ các khiếm khuyết, đó là nguồn gốc của các lỗi\n  C) Kiểm tra không loại bỏ được lỗi; gỡ lỗi loại bỏ các khiếm khuyết gây ra lỗi\n  D) Kiểm thử động ngăn ngừa các nguyên nhân gây ra lỗi; gỡ lỗi loại bỏ các lỗi\n\n[GIẢI THÍCH CHI TIẾT]\nTheo syllabus: kiểm thử động làm lộ ra failure do defect gây ra; còn debugging là hoạt động của phát triển nhằm tìm, phân tích và loại bỏ defect — nguồn gốc của failure ⇒ (b) đúng. (a) sai: testing không xác định nguồn gốc defect (đó là debugging), và “đề xuất hoạt động phòng ngừa” cũng không phải debugging. (c) dùng thuật ngữ lộn xộn: fault đồng nghĩa với defect, nên “defect gây ra fault” là vô nghĩa. (d) sai cả hai vế: kiểm thử động không NGĂN được nguyên nhân failure, và debugging loại bỏ defect chứ không “loại bỏ failure”.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.1.2 Testing and Debugging."
  },
  {
    "n": 6,
    "ref": "Câu 6 [FL-4.4.3]",
    "stem": "What is checklist-based testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) A test technique in which tests are derived based on the tester's knowledge of past faults, or general knowledge of failures"
      },
      {
        "k": "b",
        "t": "B) A test technique based on an analysis of the specification of a component or system"
      },
      {
        "k": "c",
        "t": "C) An experience-based test technique whereby the experienced tester uses a list of items to be noted, checked, or remembered, or a set of rules or criteria against which a product must be verified"
      },
      {
        "k": "d",
        "t": "D) An approach to testing whereby the tester dynamically designs and executes tests based on their knowledge, exploration of the test item and the results of previous tests"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKiểm tra dựa trên danh sách kiểm tra là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Một kỹ thuật kiểm thử trong đó các kiểm thử được thực hiện dựa trên kiến thức của người kiểm thử về các lỗi trong quá khứ hoặc kiến thức chung về các lỗi đã xảy ra.\n  B) Một kỹ thuật kiểm tra dựa trên phân tích đặc điểm kỹ thuật của một thành phần hoặc hệ thống\n  C) Một kỹ thuật kiểm tra dựa trên kinh nghiệm, trong đó người kiểm tra có kinh nghiệm sử dụng danh sách các mục cần ghi chú, kiểm tra hoặc ghi nhớ hoặc một bộ quy tắc hoặc tiêu chí mà sản phẩm phải được xác minh.\n  D) Một cách tiếp cận kiểm thử trong đó người kiểm thử tự động thiết kế và thực hiện các kiểm thử dựa trên kiến thức của họ, việc khám phá hạng mục kiểm thử và kết quả của các kiểm thử trước đó\n\n[GIẢI THÍCH CHI TIẾT]\n(c) là định nghĩa chuẩn của checklist-based testing trong glossary: kỹ thuật dựa trên kinh nghiệm, tester dùng danh sách các hạng mục cần lưu ý/kiểm tra/ghi nhớ, hoặc một bộ quy tắc/tiêu chí để đối chiếu sản phẩm. Các phương án còn lại là định nghĩa của kỹ thuật khác: (a) = error guessing (đoán lỗi dựa trên lỗi quá khứ); (b) = định nghĩa chung của kỹ thuật black- box (specification-based); (d) = exploratory testing. Lưu ý hiệu chỉnh ngữ pháp ở (c): “whereby the experienced tester…” và ở (d): “the tester dynamically designs and executes…”.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.4.3 Checklist-based Testing (nhóm 4.4 Experience-based)."
  },
  {
    "n": 7,
    "ref": "Câu 7 [FL-1.4.3]",
    "stem": "Match the following test work products (1–4) with the correct description (A–D).\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 1A, 2C, 3B, 4D"
      },
      {
        "k": "b",
        "t": "B) 1D, 2B, 3A, 4C"
      },
      {
        "k": "c",
        "t": "C) 1A, 2C, 3D, 4B"
      },
      {
        "k": "d",
        "t": "D) 1D, 2C, 3B, 4A"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nGhép các sản phẩm bài tập kiểm tra sau đây (1–4) với mô tả đúng (A–D).\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1A, 2C, 3B, 4D\n  B) 1D, 2B, 3A, 4C\n  C) 1A, 2C, 3D, 4B\n  D) 1D, 2C, 3B, 4A\n\n[GIẢI THÍCH CHI TIẾT]\nTest suite = tập các test script/test case được thực thi trong một lần chạy cụ thể → A. Test case = bao gồm tiền điều kiện, đầu vào, và KẾT QUẢ MONG ĐỢI → C. Test script = chuỗi chỉ dẫn để thực thi một bài test (thủ công hoặc tự động) → B. Test charter = tài liệu nêu mục tiêu và phạm vi cho một phiên kiểm thử khám phá (session-based exploratory testing) → D. Vậy ghép đúng là 1A, 2C, 3B, 4D.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.4.3 Test Work Products (kết hợp ISTQB Glossary)."
  },
  {
    "n": 8,
    "ref": "Câu 8 [FL-5.1.2]",
    "stem": "Which of the following statements BEST describes how tasks are divided between the test manager and the tester?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test manager plans the testing activities and chooses the standards to be followed, while the tester chooses the tools and sets the tool usage guidelines"
      },
      {
        "k": "b",
        "t": "B) The test manager plans, coordinates and controls the testing activities, while the tester automates the tests"
      },
      {
        "k": "c",
        "t": "C) The test manager plans, monitors and controls the testing activities, while the tester designs the tests and decides on the release of the test object"
      },
      {
        "k": "d",
        "t": "D) The test manager plans and organizes the testing and specifies the test cases, while the tester executes the tests"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây mô tả TỐT NHẤT cách phân chia nhiệm vụ giữa người quản lý kiểm tra và người kiểm tra?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người quản lý kiểm thử lập kế hoạch cho các hoạt động kiểm thử và chọn các tiêu chuẩn cần tuân theo, trong khi người kiểm thử chọn các công cụ và đặt ra các nguyên tắc sử dụng công cụ.\n  B) Người quản lý kiểm tra lập kế hoạch, điều phối và kiểm soát các hoạt động kiểm tra, trong khi người kiểm tra tự động hóa các bài kiểm tra\n  C) Người quản lý kiểm thử lập kế hoạch, giám sát và kiểm soát các hoạt động kiểm thử, trong khi người kiểm thử thiết kế các bài kiểm thử và quyết định phát hành đối tượng kiểm thử\n  D) Người quản lý kiểm thử lập kế hoạch và tổ chức kiểm thử cũng như chỉ định các trường hợp kiểm thử trong khi người kiểm thử thực hiện kiểm thử\n\n[GIẢI THÍCH CHI TIẾT]\nNhiệm vụ của test manager: lập kế hoạch, điều phối, giám sát và kiểm soát hoạt động kiểm thử; nhiệm vụ của tester: phân tích, thiết kế, hiện thực, thực thi và TỰ ĐỘNG HÓA test khi cần. (b) là phương án duy nhất mà cả hai vế đều nằm đúng vai trò (dù chưa liệt kê hết việc của tester). (a) sai: lựa chọn công cụ và quy định cách dùng công cụ là nhiệm vụ của test manager. (c) sai: quyết định release không thuộc thẩm quyền tester (thuộc quản lý/stakeholder). (d) sai: đặc tả test case là việc của tester, không phải của test manager.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.1.2 Tasks of a Test Manager and Tester."
  },
  {
    "n": 9,
    "ref": "Câu 9 [FL-4.2.1]",
    "stem": "An employee's bonus is to be calculated. It cannot be negative, but it can be calculated down to zero. The bonus is based on the length of employment: less than or equal to 2 years; more than 2 but less than 5 years; 5 to 10 years inclusive; longer than 10 years. What is the minimum number of test cases required to cover all valid equivalence partitions for calculating the bonus?",
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
    "exp": "[DỊCH CÂU HỎI]\nTiền thưởng của nhân viên sẽ được tính toán. Nó không thể âm, nhưng nó có thể được tính về 0. Tiền thưởng dựa trên thời gian làm việc: ít hơn hoặc bằng 2 năm; trên 2 năm nhưng dưới 5 năm; Bao gồm 5 đến 10 năm; dài hơn 10 năm. Số lượng test case (ca kiểm thử) tối thiểu cần thiết để bao gồm tất cả các phân vùng tương đương hợp lệ để tính tiền thưởng là bao nhiêu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 2\n  B) 3\n  C) 4\n  D) 5\n\n[GIẢI THÍCH CHI TIẾT]\nĐầu vào “thâm niên” được chia thành đúng 4 phân vùng tương đương hợp lệ: (1) ≤ 2 năm; (2) > 2 và < 5 năm; (3) 5–10 năm (kể cả 2 đầu); (4) > 10 năm. Nguyên tắc EP: mỗi phân vùng chỉ cần 1 giá trị đại diện ⇒ tối thiểu 4 test case. Chi tiết “bonus không âm, có thể bằng 0” chỉ mô tả miền ĐẦU RA, không tạo thêm phân vùng đầu vào hợp lệ nào, nên không làm tăng số test tối thiểu.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 10,
    "ref": "Câu 10 [FL-2.1.1]",
    "stem": "Which one of the following is the BEST definition of an incremental development model?",
    "opts": [
      {
        "k": "a",
        "t": "A) Defining requirements, designing software and testing are done in phases, where in each phase a piece of the system is added"
      },
      {
        "k": "b",
        "t": "B) A phase in the development process should begin when the previous phase is complete"
      },
      {
        "k": "c",
        "t": "C) Testing is viewed as a separate phase which takes place after development has been completed"
      },
      {
        "k": "d",
        "t": "D) Testing is added to development as an increment"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐịnh nghĩa nào sau đây là định nghĩa TỐT NHẤT về mô hình phát triển gia tăng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Việc xác định yêu cầu, thiết kế phần mềm và kiểm thử được thực hiện theo từng giai đoạn, trong đó mỗi giai đoạn một phần của hệ thống được thêm vào\n  B) Một giai đoạn trong quá trình phát triển sẽ bắt đầu khi giai đoạn trước đó hoàn thành\n  C) Kiểm thử được xem như một giai đoạn riêng biệt diễn ra sau khi quá trình phát triển hoàn tất\n  D) Kiểm thử được thêm vào quá trình phát triển như một sự gia tăng\n\n[GIẢI THÍCH CHI TIẾT]\nMô hình phát triển tăng trưởng (incremental): hệ thống được xây dựng thành từng phần (increment); trong mỗi phần đều có xác định yêu cầu, thiết kế, xây dựng và kiểm thử, và mỗi increment bổ sung thêm một mảnh chức năng vào hệ thống ⇒ (a). (b) mô tả mô hình tuần tự (waterfall) — pha sau chỉ bắt đầu khi pha trước kết thúc. (c) là quan niệm sai coi kiểm thử là pha tách rời ở cuối. (d) chỉ là cách chơi chữ với từ “increment”, không phải định nghĩa.\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.1.1 Software Development Lifecycle Models."
  },
  {
    "n": 11,
    "ref": "Câu 11 [FL-5.6]",
    "stem": "What valuable information was omitted in the defect report below?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) The actual test results"
      },
      {
        "k": "b",
        "t": "B) The status of the defect"
      },
      {
        "k": "c",
        "t": "C) Identification of the tested software version"
      },
      {
        "k": "d",
        "t": "D) Ideas for improving the test case"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nThông tin có giá trị nào đã bị bỏ sót trong báo cáo lỗi dưới đây?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kết quả kiểm tra thực tế\n  B) Tình trạng của khiếm khuyết\n  C) Xác định phiên bản phần mềm được kiểm thử\n  D) Ý tưởng để cải thiện test case (ca kiểm thử)\n\n[GIẢI THÍCH CHI TIẾT]\nMột defect report cần định danh rõ mục kiểm thử và PHIÊN BẢN phần mềm/cấu hình môi trường đã test — thông tin bắt buộc để developer tái hiện và khoanh vùng lỗi (đề bài còn nhấn mạnh “phiên bản mới”, nên thiếu version là thiếu sót giá trị nhất). (a) sai: kết quả thực tế đã có trong summary (nhiệt độ < 40 °C, thời gian pha quá lâu). (b) status của defect do vòng đời defect trong công cụ quản lý cập nhật, khi mới ghi nhận thường mặc định là “new/open”. (d) “ý tưởng cải tiến test case” không phải nội dung chuẩn của một defect report.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.6 Defect Management (nội dung của defect report)."
  },
  {
    "n": 12,
    "ref": "Câu 12 [FL-4.2.1]",
    "stem": "A video application has the following requirement (see the figure). Which of the following lists of test cases is a result of applying the equivalence partitioning test technique to this requirement?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Verify that the application can play a video at the display size 1920x1080 (1 test case)"
      },
      {
        "k": "b",
        "t": "B) Verify that the application can play a video at the display sizes 640x480 and 1920x1080 (2 test cases)"
      },
      {
        "k": "c",
        "t": "C) Verify that the application can play a video at each of the display sizes in the requirement (4 test cases)"
      },
      {
        "k": "d",
        "t": "D) Verify that the application can play a video at any one of the display sizes in the requirement (1 test case)"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMột ứng dụng video có yêu cầu sau (xem hình). Danh sách các ca kiểm thử nào sau đây là kết quả của việc áp dụng kỹ thuật kiểm thử phân vùng tương đương cho yêu cầu này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Xác minh rằng ứng dụng có thể phát video ở kích thước hiển thị 1920x1080 (1 test case (ca kiểm thử))\n  B) Xác minh rằng ứng dụng có thể phát video ở kích thước màn hình 640x480 và 1920x1080 (2 test case (ca kiểm thử))\n  C) Xác minh rằng ứng dụng có thể phát video ở mỗi kích thước hiển thị trong yêu cầu (4 test case (ca kiểm thử))\n  D) Xác minh rằng ứng dụng có thể phát video ở bất kỳ kích thước hiển thị nào trong yêu cầu (1 test case (ca kiểm thử))\n\n[GIẢI THÍCH CHI TIẾT]\nYêu cầu liệt kê 4 giá trị RỜI RẠC, không phải một dải liên tục, nên mỗi độ phân giải là một phân vùng tương đương hợp lệ riêng biệt (ứng xử của ứng dụng với mỗi resolution có thể khác nhau). EP yêu cầu mỗi phân vùng phải được test ít nhất 1 lần ⇒ cần 4 test case, mỗi test cho một resolution → (c). (a) và (d) chỉ phủ 1/4 phân vùng; (b) chỉ phủ 2/4 phân vùng. Ghi chú hiệu chỉnh: phương án (b) trong đề gốc in nhầm “60x480”, đúng phải là “640x480”.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 13,
    "ref": "Câu 13 [FL-6.1.1]",
    "stem": "Which one of the following test tools is most suitable for developers rather than testers?",
    "opts": [
      {
        "k": "a",
        "t": "A) Requirements management tools"
      },
      {
        "k": "b",
        "t": "B) Configuration management tools"
      },
      {
        "k": "c",
        "t": "C) Static analysis tools"
      },
      {
        "k": "d",
        "t": "D) Performance testing tools"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCông cụ kiểm tra nào sau đây phù hợp nhất cho nhà phát triển hơn là người kiểm tra?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Công cụ quản lý yêu cầu\n  B) Công cụ quản lý cấu hình\n  C) Công cụ phân tích tĩnh\n  D) Công cụ kiểm tra hiệu suất\n\n[GIẢI THÍCH CHI TIẾT]\nCông cụ phân tích tĩnh (static analysis) làm việc trực tiếp trên mã nguồn (kiểm tra chuẩn code, biến chưa khởi tạo, độ phức tạp…), thường tích hợp vào môi trường phát triển và hỗ trợ kiểm thử mức component/integration — syllabus xếp đây là nhóm công cụ chủ yếu dành cho developer. (a) phục vụ BA/quản lý yêu cầu; (b) phục vụ toàn dự án (quản lý phiên bản, baseline); (d) là công cụ điển hình của tester chuyên kiểm thử phi chức năng.\n\nTham chiếu: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.1.1 Test Tool Classification."
  },
  {
    "n": 14,
    "ref": "Câu 14 [FL-4.3.3]",
    "stem": "Which statement about the relationship between statement coverage and decision coverage is TRUE?",
    "opts": [
      {
        "k": "a",
        "t": "A) 100% decision coverage also guarantees 100% statement coverage"
      },
      {
        "k": "b",
        "t": "B) 100% statement coverage also guarantees 100% decision coverage"
      },
      {
        "k": "c",
        "t": "C) 50% decision coverage also guarantees 50% statement coverage"
      },
      {
        "k": "d",
        "t": "D) Decision coverage can never reach 100%"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào về mối quan hệ giữa phạm vi phát biểu và phạm vi quyết định là ĐÚNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Bao phủ quyết định 100% cũng đảm bảo bao phủ 100% phát biểu\n  B) Bao phủ 100% phát biểu cũng đảm bảo bao phủ quyết định 100%\n  C) Bao phủ quyết định 50% cũng đảm bảo bao phủ tuyên bố 50%\n  D) Độ bao phủ quyết định không bao giờ có thể đạt tới 100%\n\n[GIẢI THÍCH CHI TIẾT]\nMỗi câu lệnh đều nằm trên một nhánh nào đó của luồng điều khiển; nếu đã đi qua CẢ HAI kết cục (true/false) của mọi decision thì mọi câu lệnh chắc chắn được thực thi ⇒ 100% decision coverage kéo theo 100% statement coverage — decision coverage “mạnh hơn” statement coverage. Chiều ngược lại (b) sai: ví dụ lệnh if không có else — 1 test làm điều kiện true đạt 100% statement nhưng chỉ 50% decision. (c) sai: quan hệ bao hàm chỉ đúng ở mức 100%, không suy ra được theo tỷ lệ. (d) sai hiển nhiên: hoàn toàn có thể đạt 100% decision coverage.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.3 The Value of Statement and Decision Testing."
  },
  {
    "n": 15,
    "ref": "Câu 15 [FL-5.2.3]",
    "stem": "Which of the following lists contains only typical exit criteria from testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Reliability measures, test coverage, schedule and status of defect fixing, and remaining risks"
      },
      {
        "k": "b",
        "t": "B) Reliability measures, test coverage, degree of tester independence, and product completeness"
      },
      {
        "k": "c",
        "t": "C) Reliability measures, test coverage, test cost, availability of the test environment, time to market, and product completeness"
      },
      {
        "k": "d",
        "t": "D) Time to market, remaining defects, tester qualification, availability of testable use cases, test coverage, and test cost"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nDanh sách nào sau đây chỉ chứa các tiêu chí đầu ra (exit criteria) khỏi kiểm thử điển hình?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các biện pháp về độ tin cậy, phạm vi kiểm thử, lịch trình và trạng thái sửa lỗi cũng như các rủi ro còn lại\n  B) Các biện pháp về độ tin cậy, phạm vi kiểm tra, mức độ độc lập của người kiểm tra và tính hoàn thiện của sản phẩm\n  C) Các biện pháp về độ tin cậy, phạm vi kiểm thử, chi phí kiểm thử, tính sẵn có của môi trường kiểm thử, thời gian đưa ra thị trường và tính hoàn thiện của sản phẩm\n  D) Thời gian đưa ra thị trường, các lỗi còn lại, trình độ của người kiểm thử, tính sẵn có của các trường hợp sử dụng có thể kiểm thử, phạm vi kiểm thử và chi phí kiểm thử\n\n[GIẢI THÍCH CHI TIẾT]\nExit criteria (tiêu chí kết thúc/definition of done) điển hình gồm: các số đo về độ tin cậy (mật độ lỗi, tần suất failure), độ phủ kiểm thử, tình trạng sửa defect và rủi ro tồn đọng, chi phí, tiến độ — đúng như (a). Các phương án khác đều lẫn yếu tố KHÔNG phải exit criteria: (b) “mức độc lập của tester” là thuộc tính tổ chức; (c) “availability of test environment” là ENTRY criterion (điều kiện để bắt đầu test); (d) “tester qualification” và “availability of testable use cases” cũng là điều kiện đầu vào/tổ chức, không phải tiêu chí kết thúc.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.2.3 Entry Criteria and Exit Criteria."
  },
  {
    "n": 16,
    "ref": "Câu 16 [FL-1.4.2]",
    "stem": "Which one of the following answers describes a test condition?",
    "opts": [
      {
        "k": "a",
        "t": "A) A distinguishing characteristic of a component or system"
      },
      {
        "k": "b",
        "t": "B) A testable aspect of a component or system identified as a basis for testing"
      },
      {
        "k": "c",
        "t": "C) The degree to which a software product provides functions which meet stated and implied needs when the software is used under specified conditions"
      },
      {
        "k": "d",
        "t": "D) Test cases designed to execute combinations of conditions and the actions resulting from them"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu trả lời nào sau đây mô tả một điều kiện kiểm tra?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Một đặc điểm phân biệt của một thành phần hoặc hệ thống\n  B) Một khía cạnh có thể kiểm tra được của một thành phần hoặc hệ thống được xác định làm cơ sở để kiểm tra\n  C) Mức độ mà một sản phẩm phần mềm cung cấp các chức năng đáp ứng các nhu cầu đã nêu và ngụ ý khi phần mềm được sử dụng trong các điều kiện cụ thể\n  D) Các test case (ca kiểm thử) được thiết kế để thực hiện kết hợp các điều kiện và hành động bắt nguồn từ chúng\n\n[GIẢI THÍCH CHI TIẾT]\nTheo glossary, test condition = một khía cạnh CÓ THỂ KIỂM THỬ ĐƯỢC của thành phần/hệ thống (chức năng, giao dịch, đặc tính chất lượng, phần tử cấu trúc…) được xác định làm cơ sở cho việc kiểm thử — test condition là sản phẩm của bước test analysis. (a) là định nghĩa của “feature/characteristic” nói chung. (c) là định nghĩa của functional suitability (đặc tính chất lượng theo ISO 25010). (d) mô tả test case sinh từ bảng quyết định, không phải test condition. (Đã sửa lỗi chính tả trong đề: “characterisitc” → “characteristic”, “whic” → “which”.)\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities (Test Analysis) + ISTQB Glossary."
  },
  {
    "n": 17,
    "ref": "Câu 17 [FL-4.2.3]",
    "stem": "A company's employees are paid a bonus if they work more than a year in the company AND achieve a target which was individually agreed beforehand. These facts are shown in the decision table below. Which of the following test cases represents a situation that can happen in real life and is missing from the decision table?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Condition1 = YES, Condition2 = NO, Condition3 = YES, Action = NO"
      },
      {
        "k": "b",
        "t": "B) Condition1 = YES, Condition2 = YES, Condition3 = NO, Action = YES"
      },
      {
        "k": "c",
        "t": "C) Condition1 = NO, Condition2 = YES, Condition3 = NO, Action = NO"
      },
      {
        "k": "d",
        "t": "D) Condition1 = NO, Condition2 = NO, Condition3 = YES, Action = NO"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhân viên của công ty sẽ được trả tiền thưởng nếu họ làm việc trong công ty hơn một năm VÀ đạt được mục tiêu đã được thỏa thuận trước đó. Những sự thật này được thể hiện trong bảng quyết định dưới đây. Trường hợp kiểm thử nào sau đây đại diện cho một tình huống có thể xảy ra trong đời thực và bị thiếu trong bảng quyết định?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Điều kiện1 = CÓ, Điều kiện2 = KHÔNG, Điều kiện3 = CÓ, Hành động = KHÔNG\n  B) Điều kiện1 = CÓ, Điều kiện2 = CÓ, Điều kiện3 = KHÔNG, Hành động = CÓ\n  C) Điều kiện1 = KHÔNG, Điều kiện2 = CÓ, Điều kiện3 = KHÔNG, Hành động = KHÔNG\n  D) Điều kiện1 = KHÔNG, Điều kiện2 = KHÔNG, Điều kiện3 = CÓ, Hành động = KHÔNG\n\n[GIẢI THÍCH CHI TIẾT]\nTổ hợp cần tìm phải thỏa 2 điều: (i) khả thi trong thực tế, và (ii) action đúng với quy tắc nghiệp vụ, đồng thời chưa xuất hiện trong bảng. (a) và (d) đều có Condition2 = NO nhưng Condition3 = YES: “đạt được mục tiêu chưa từng được thỏa thuận” là tổ hợp phi thực tế (infeasible). (b) có Action = YES trong khi Condition3 = NO: trái quy tắc “phải đạt mục tiêu mới được thưởng”. (c) nhân viên làm chưa đủ 1 năm, có thỏa thuận mục tiêu nhưng chưa đạt ⇒ không thưởng: hoàn toàn thực tế, đúng quy tắc, và chưa có cột nào như vậy trong bảng (T3 là NO/YES/YES).\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.3 Decision Table Testing."
  },
  {
    "n": 18,
    "ref": "Câu 18 [FL-6.1.2]",
    "stem": "Which of the following is most likely to be a benefit of test execution tools?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is easy to create regression tests"
      },
      {
        "k": "b",
        "t": "B) It is easy to maintain version control of test assets"
      },
      {
        "k": "c",
        "t": "C) It is easy to design tests for security testing"
      },
      {
        "k": "d",
        "t": "D) It is easy to run regression tests"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây có nhiều khả năng là lợi ích nhất của các công cụ thực hiện kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Thật dễ dàng để tạo các bài kiểm tra hồi quy\n  B) Thật dễ dàng để duy trì kiểm soát phiên bản của nội dung kiểm thử\n  C) Thật dễ dàng để thiết kế các bài kiểm tra để kiểm tra bảo mật\n  D) Thật dễ dàng để chạy kiểm thử hồi quy (regression testing)\n\n[GIẢI THÍCH CHI TIẾT]\nLợi ích cốt lõi của công cụ thực thi kiểm thử là giảm công việc lặp đi lặp lại và tăng tính nhất quán: một khi đã có kịch bản tự động, việc CHẠY LẠI bộ regression trở nên nhanh, rẻ và lặp lại được ⇒ (d). (a) sai: việc TẠO (và bảo trì) script tự động tốn nhiều công sức ban đầu — syllabus xếp đây vào nhóm rủi ro/chi phí chứ không phải lợi ích. (b) là lợi ích của công cụ quản lý cấu hình. (c) thiết kế test bảo mật đòi hỏi công cụ và kỹ năng chuyên biệt, không phải thế mạnh của test execution tool.\n\nTham chiếu: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.1.2 Benefits and Risks of Test Automation."
  },
  {
    "n": 19,
    "ref": "Câu 19 [FL-4.1.1]",
    "stem": "Which one of the following options is categorized as a black-box test technique?",
    "opts": [
      {
        "k": "a",
        "t": "A) A technique based on an analysis of the architecture"
      },
      {
        "k": "b",
        "t": "B) A technique checking that the test object is working according to the detailed design"
      },
      {
        "k": "c",
        "t": "C) A technique based on the knowledge of past faults, or general knowledge of failures"
      },
      {
        "k": "d",
        "t": "D) A technique based on formal requirements"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLựa chọn nào sau đây được phân loại là kỹ thuật kiểm thử hộp đen?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Một kỹ thuật dựa trên phân tích kiến trúc\n  B) Một kỹ thuật kiểm tra xem test object (đối tượng kiểm thử) có hoạt động theo thiết kế chi tiết hay không\n  C) Một kỹ thuật dựa trên kiến thức về lỗi trong quá khứ hoặc kiến thức chung về lỗi\n  D) Một kỹ thuật dựa trên yêu cầu hình thức\n\n[GIẢI THÍCH CHI TIẾT]\nKỹ thuật black-box (specification-based) sinh test từ tài liệu đặc tả/yêu cầu, không nhìn vào cấu trúc bên trong ⇒ “dựa trên yêu cầu chính thức” (d) là black-box. (a) và (b) dựa trên kiến trúc/thiết kế chi tiết — tức cấu trúc bên trong ⇒ white-box. (c) dựa trên kinh nghiệm về lỗi trong quá khứ ⇒ experience-based (error guessing). (Đã sửa lỗi chính tả trong đề: “text technique” → “test technique”.)\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.1.1 Categories of Test Techniques."
  },
  {
    "n": 20,
    "ref": "Câu 20 [FL-3.1.2]",
    "stem": "Which of the following statements about static testing is MOST true?",
    "opts": [
      {
        "k": "a",
        "t": "A) Static testing is a cheap way to detect and remove defects"
      },
      {
        "k": "b",
        "t": "B) Static testing makes dynamic testing less challenging"
      },
      {
        "k": "c",
        "t": "C) Static testing makes it possible to find run-time problems early in the life cycle"
      },
      {
        "k": "d",
        "t": "D) When testing safety-critical systems, static testing has less value because dynamic testing finds the defects better"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây về kiểm thử tĩnh (static testing) là đúng NHẤT?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra tĩnh là một cách rẻ tiền để phát hiện và loại bỏ lỗi\n  B) Kiểm thử tĩnh (static testing) giúp kiểm thử động (dynamic testing) ít thách thức hơn\n  C) Kiểm tra tĩnh giúp phát hiện sớm các vấn đề về thời gian chạy trong vòng đời\n  D) Khi kiểm thử các hệ thống quan trọng về an toàn, kiểm thử tĩnh có ít giá trị hơn vì kiểm thử động tìm ra lỗi tốt hơn\n\n[GIẢI THÍCH CHI TIẾT]\nStatic testing (review, phân tích tĩnh) phát hiện defect NGAY TRÊN work product từ rất sớm, khi chi phí tìm và sửa còn rất thấp — sửa lỗi trong tài liệu yêu cầu/thiết kế rẻ hơn nhiều so với khi lỗi đã lan sang code và production ⇒ review là hình thức phát hiện lỗi rất kinh tế (cost-effective). (b) chỉ là hệ quả gián tiếp, không phải phát biểu “đúng nhất”. (c) sai: các vấn đề run-time (rò rỉ bộ nhớ khi chạy, hiệu năng thực tế…) cần kiểm thử ĐỘNG mới bộc lộ. (d) sai ngược: với hệ thống safety-critical, static testing càng quan trọng và thường là bắt buộc theo chuẩn.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.1.2 Benefits of Static Testing & 3.1.3 Differences between Static and Dynamic Testing."
  },
  {
    "n": 21,
    "ref": "Câu 21 [FL-3.2.3]",
    "stem": "Which of the review types below is the best option to choose when the review must follow a formal process based on rules and checklists?",
    "opts": [
      {
        "k": "a",
        "t": "A) Informal review"
      },
      {
        "k": "b",
        "t": "B) Technical review"
      },
      {
        "k": "c",
        "t": "C) Inspection"
      },
      {
        "k": "d",
        "t": "D) Walkthrough"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLoại đánh giá nào dưới đây là lựa chọn tốt nhất khi đánh giá phải tuân theo quy trình chính thức dựa trên các quy tắc và danh sách kiểm tra?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đánh giá không chính thức\n  B) Đánh giá kỹ thuật\n  C) Kiểm tra\n  D) Hướng dẫn\n\n[GIẢI THÍCH CHI TIẾT]\nInspection là loại review HÌNH THỨC NHẤT: tuân theo quy trình xác định với đầy đủ vai trò bắt buộc, dựa trên rules và checklists, có entry/exit criteria, thu thập metrics, biên bản chính thức và moderator được đào tạo. Informal review: không theo quy trình, không bắt buộc tài liệu. Walkthrough: do tác giả dẫn dắt, mức độ hình thức thay đổi, mục đích chính là truyền đạt/thu thập ý kiến. Technical review: tập trung đánh giá kỹ thuật, có thể khá hình thức nhưng vẫn kém chặt chẽ hơn inspection về rules/checklists.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.2.3 Review Types."
  },
  {
    "n": 22,
    "ref": "Câu 22 [FL-1.1.1]",
    "stem": "Which of the following statements is a valid objective for testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test should start as late as possible so that development has enough time to create a good product"
      },
      {
        "k": "b",
        "t": "B) To validate whether the test object works as expected by the users and other stakeholders"
      },
      {
        "k": "c",
        "t": "C) To prove that all possible defects are identified"
      },
      {
        "k": "d",
        "t": "D) To prove that any remaining defects will not cause any failures"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây là mục tiêu hợp lệ để kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Việc kiểm thử nên bắt đầu càng muộn càng tốt để quá trình phát triển có đủ thời gian tạo ra một sản phẩm tốt\n  B) Để xác thực xem test object (đối tượng kiểm thử) có hoạt động như mong đợi của người dùng và các bên liên quan khác hay không\n  C) Để chứng minh rằng tất cả các khiếm khuyết có thể được xác định\n  D) Để chứng minh rằng những khiếm khuyết còn sót lại sẽ không gây ra hư hỏng nào\n\n[GIẢI THÍCH CHI TIẾT]\nMột trong các mục tiêu hợp lệ của kiểm thử theo syllabus là XÁC NHẬN (validate) rằng đối tượng kiểm thử hoạt động đúng như kỳ vọng của người dùng và các bên liên quan ⇒ (b). (a) trái với nguyên tắc “early testing” — test sớm giúp phát hiện lỗi rẻ hơn. (c) bất khả thi: kiểm thử vét cạn là không thể (nguyên tắc 2) và kiểm thử chỉ chứng minh SỰ HIỆN DIỆN của defect, không chứng minh được sự vắng mặt (nguyên tắc 1). (d) cũng bất khả thi vì cùng lý do — không thể chứng minh defect còn lại sẽ không gây failure.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.1.1 Typical Objectives of Testing (kết hợp 1.3 Seven Testing Principles)."
  },
  {
    "n": 23,
    "ref": "Câu 23 [FL-1.4.2]",
    "stem": "Which of the following activities is part of the main activity “test analysis” in the test process?",
    "opts": [
      {
        "k": "a",
        "t": "A) Identifying any required infrastructure and tools"
      },
      {
        "k": "b",
        "t": "B) Creating test suites from test scripts"
      },
      {
        "k": "c",
        "t": "C) Analyzing lessons learned for process improvement"
      },
      {
        "k": "d",
        "t": "D) Evaluating the test basis for testability"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHoạt động nào sau đây là một phần của hoạt động chính “phân tích kiểm thử” trong quá trình kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Xác định mọi cơ sở hạ tầng và công cụ cần thiết\n  B) Tạo test suite (bộ kiểm thử) từ tập lệnh kiểm thử\n  C) Phân tích bài học kinh nghiệm để cải tiến quy trình\n  D) Đánh giá cơ sở kiểm thử cho khả năng kiểm thử\n\n[GIẢI THÍCH CHI TIẾT]\nTest analysis gồm: phân tích test basis (yêu cầu, thiết kế, rủi ro…), ĐÁNH GIÁ test basis và test item về tính khả kiểm/khiếm khuyết (mơ hồ, thiếu sót, mâu thuẫn), xác định feature cần test và định nghĩa các test condition ⇒ (d). (a) “xác định hạ tầng và công cụ cần thiết” thuộc test design. (b) “tạo test suite từ test script” thuộc test implementation. (c) “phân tích bài học kinh nghiệm để cải tiến quy trình” thuộc test completion.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities and Tasks (Test Analysis)."
  },
  {
    "n": 24,
    "ref": "Câu 24 [FL-2.4]",
    "stem": "Which of the following should NOT be a trigger for maintenance testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The decision to test the maintainability of the software"
      },
      {
        "k": "b",
        "t": "B) The decision to test the system after migration to a new operating platform"
      },
      {
        "k": "c",
        "t": "C) The decision to test whether archived data can be retrieved"
      },
      {
        "k": "d",
        "t": "D) The decision to test after “hot fixes”"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây KHÔNG nên kích hoạt kiểm thử bảo trì (maintenance testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Quyết định kiểm tra khả năng bảo trì của phần mềm\n  B) Quyết định kiểm thử hệ thống (system testing) sau khi chuyển sang nền tảng điều hành mới\n  C) Quyết định kiểm tra xem dữ liệu đã lưu trữ có thể được truy xuất hay không\n  D) Quyết định kiểm thử sau “hot fix”\n\n[GIẢI THÍCH CHI TIẾT]\nMaintenance testing được kích hoạt bởi 3 nhóm nguyên nhân: (1) SỬA ĐỔI — hot fix, vá lỗi khẩn, nâng cấp theo kế hoạch (→ d); (2) DI TRÚ (migration) — chuyển sang nền tảng/môi trường vận hành mới (→ b); (3) NGỪNG SỬ DỤNG (retirement) — ví dụ kiểm tra khả năng khôi phục dữ liệu đã lưu trữ khi hệ thống bị khai tử (→ c). Còn (a) “kiểm thử tính bảo trì (maintainability)” là kiểm thử một ĐẶC TÍNH CHẤT LƯỢNG phi chức năng của phần mềm — hoàn toàn khác khái niệm maintenance testing, nên không phải trigger.\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.4 Maintenance Testing (2.4.1 Triggers for Maintenance)."
  },
  {
    "n": 25,
    "ref": "Câu 26 [FL-4.3.1]",
    "stem": "Which of the following is the correct description of statement coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is a metric which is the percentage of test cases that have been executed"
      },
      {
        "k": "b",
        "t": "B) It is a metric which is the percentage of executable statements in the source code that have been exercised by the tests"
      },
      {
        "k": "c",
        "t": "C) It is a metric which is the number of statements in the source code that have been executed by test cases that passed"
      },
      {
        "k": "d",
        "t": "D) It is a metric that gives a true/false confirmation of whether all statements are covered or not"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là mô tả chính xác về mức độ bao phủ của câu lệnh?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nó là một thước đo tỷ lệ phần trăm các test case (ca kiểm thử) đã được thực hiện\n  B) Nó là một thước đo tỷ lệ phần trăm các câu lệnh thực thi trong mã nguồn đã được thực hiện trong các cuộc kiểm tra.\n  C) Nó là một thước đo về số lượng câu lệnh trong mã nguồn đã được thực thi bởi các ca kiểm thử đã vượt qua.\n  D) Đây là thước đo đưa ra xác nhận đúng/sai về việc liệu tất cả các câu lệnh có được bảo vệ hay không\n\n[GIẢI THÍCH CHI TIẾT]\nStatement coverage = (số câu lệnh thực thi được đã được chạy bởi bộ test ÷ tổng số câu lệnh thực thi được) × 100% ⇒ (b). (a) nhầm sang tỷ lệ TEST CASE đã chạy (chỉ số tiến độ, không phải coverage mã nguồn). (c) sai kép: coverage là TỶ LỆ %, không phải “số lượng”, và không phụ thuộc việc test pass hay fail — chỉ cần câu lệnh được thực thi. (d) sai: đây là thước đo định lượng theo %, không phải giá trị đúng/sai.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.1 Statement Testing and Coverage."
  },
  {
    "n": 26,
    "ref": "Câu 27 [FL-4.3.2]",
    "stem": "The following statement refers to decision coverage: “When the code contains only a single ‘if’ statement without loops or CASE statements, and its execution is not nested within the test, any single test case we run will result in 50% decision coverage.” Which of the following statements is correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) The statement is true. Any single test case provides 100% statement coverage and therefore 50% decision coverage"
      },
      {
        "k": "b",
        "t": "B) The statement is true. Any single test case would cause the outcome of the “if” statement to be either true or false"
      },
      {
        "k": "c",
        "t": "C) The statement is false. A single test case can only guarantee 25% decision coverage in this case"
      },
      {
        "k": "d",
        "t": "D) The statement is false. The statement is too broad; it may be correct or not, depending on the tested software"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu lệnh sau đề cập đến phạm vi quyết định: “Khi mã chỉ chứa một câu lệnh ‘if’ duy nhất không có vòng lặp hoặc câu lệnh CASE và việc thực thi nó không được lồng trong kiểm thử, bất kỳ test case (ca kiểm thử) đơn lẻ nào chúng tôi chạy sẽ dẫn đến phạm vi quyết định 50%. Phát biểu nào sau đây là đúng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tuyên bố này là đúng. Bất kỳ test case (ca kiểm thử) nào cũng cung cấp phạm vi bao phủ 100% câu lệnh và do đó bao phủ quyết định 50%\n  B) Tuyên bố này là đúng. Bất kỳ test case (ca kiểm thử) đơn lẻ nào cũng có thể khiến kết quả của câu lệnh “if” là đúng hoặc sai\n  C) Tuyên bố này là sai. Một test case (ca kiểm thử) duy nhất chỉ có thể đảm bảo độ bao phủ quyết định 25% trong trường hợp này\n  D) Tuyên bố này là sai. Tuyên bố quá rộng; có thể đúng hoặc không tùy vào phần mềm test\n\n[GIẢI THÍCH CHI TIẾT]\nMột lệnh “if” đơn tạo ra đúng MỘT decision với HAI kết cục (true/false). Bất kỳ một test case nào chạy qua đoạn mã cũng khiến điều kiện nhận đúng một trong hai kết cục ⇒ phủ 1/2 kết cục = 50% decision coverage — phát biểu trong đề đúng, và lời giải thích đúng là (b). (a) kết luận đúng nhưng LẬP LUẬN sai: một test đơn lẻ không chắc đạt 100% statement coverage (nếu điều kiện false thì thân “if” bị bỏ qua), và statement coverage cũng không suy ra decision coverage. (c) và (d) sai vì phát biểu gốc là đúng.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Testing and Coverage."
  },
  {
    "n": 27,
    "ref": "Câu 28 [FL-2.3.4]",
    "stem": "Which of the following is TRUE?",
    "opts": [
      {
        "k": "a",
        "t": "A) The purpose of regression testing is to check that a correction has been successfully implemented, while the purpose of confirmation testing is to confirm that the correction has no side effects"
      },
      {
        "k": "b",
        "t": "B) The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check whether the system still works in a new environment"
      },
      {
        "k": "c",
        "t": "C) The purpose of regression testing is to detect unintended side effects, while the purpose of confirmation testing is to check that the original defect has been fixed"
      },
      {
        "k": "d",
        "t": "D) The purpose of regression testing is to check that new functionality is working, while the purpose of confirmation testing is to check whether the original defect has been fixed"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là ĐÚNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Mục đích của kiểm thử hồi quy là để kiểm tra xem việc điều chỉnh đã được thực hiện thành công hay chưa, trong khi mục đích của kiểm tra xác nhận là để xác nhận rằng việc điều chỉnh đó không có tác dụng phụ.\n  B) Mục đích của kiểm tra hồi quy là phát hiện các tác dụng phụ ngoài ý muốn, trong khi mục đích của kiểm tra xác nhận là kiểm tra xem hệ thống có còn hoạt động trong môi trường mới hay không.\n  C) Mục đích của kiểm tra hồi quy là phát hiện các tác dụng phụ ngoài ý muốn, trong khi mục đích của kiểm tra xác nhận là kiểm tra xem lỗi ban đầu đã được sửa chưa\n  D) Mục đích của kiểm tra hồi quy là kiểm tra xem chức năng mới có hoạt động hay không, trong khi mục đích của kiểm tra xác nhận là kiểm tra xem lỗi ban đầu đã được sửa chưa\n\n[GIẢI THÍCH CHI TIẾT]\nConfirmation testing (re-testing): chạy lại các test đã fail sau khi defect được sửa để XÁC NHẬN lỗi gốc đã được khắc phục. Regression testing: chạy lại các test trên phần KHÔNG thay đổi để phát hiện TÁC DỤNG PHỤ ngoài ý muốn do việc sửa đổi gây ra ⇒ (c). (a) hoán đổi ngược hai khái niệm. (b) vế sau sai — kiểm tra hệ thống trong môi trường mới thuộc về maintenance/portability testing. (d) vế đầu sai — kiểm tra chức năng mới là kiểm thử tính năng mới, không phải regression. (Đã sửa lỗi trong đề: “well the purpose” → “while the purpose”.)\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.3.4 Confirmation Testing and Regression Testing."
  },
  {
    "n": 28,
    "ref": "Câu 29 [FL-4.4.2]",
    "stem": "For which of the following situations is exploratory testing suitable?",
    "opts": [
      {
        "k": "a",
        "t": "A) When time pressure requires speeding up the execution of tests already specified"
      },
      {
        "k": "b",
        "t": "B) When the system is developed incrementally and no test charter is available"
      },
      {
        "k": "c",
        "t": "C) When testers are available who have enough knowledge of similar applications and technologies"
      },
      {
        "k": "d",
        "t": "D) When advance knowledge of the system already exists, and evidence is to be provided that it has been tested intensively"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKiểm thử thăm dò (exploratory testing) phù hợp với tình huống nào sau đây?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Khi áp lực thời gian yêu cầu đẩy nhanh việc thực hiện các bài kiểm thử đã được chỉ định\n  B) Khi hệ thống được phát triển từng bước và không có test charter nào\n  C) Khi có tester (kiểm thử viên) có đủ kiến thức về các ứng dụng và công nghệ tương tự\n  D) Khi đã có kiến thức nâng cao về hệ thống và phải cung cấp bằng chứng rằng nó đã được kiểm thử kỹ lưỡng\n\n[GIẢI THÍCH CHI TIẾT]\nHiệu quả của exploratory testing phụ thuộc mạnh vào KINH NGHIỆM của tester — hiểu biết về các ứng dụng và công nghệ tương tự giúp họ vừa học, vừa thiết kế, vừa thực thi test một cách sắc bén ⇒ (c). (a) sai: các test ĐÃ được đặc tả sẵn thì cần thực thi theo kịch bản; exploratory không giúp “chạy nhanh hơn” kịch bản có sẵn. (b) sai: test charter chính là thứ được TẠO RA trong exploratory dạng session-based, việc “chưa có charter” không phải điều kiện áp dụng. (d) sai: khi đã hiểu rõ hệ thống và cần BẰNG CHỨNG kiểm thử chặt chẽ, các kỹ thuật hệ thống có tài liệu đầy đủ phù hợp hơn.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.4.2 Exploratory Testing."
  },
  {
    "n": 29,
    "ref": "Câu 30 [FL-5.3.2]",
    "stem": "Which of the following is NOT included in a test summary report?",
    "opts": [
      {
        "k": "a",
        "t": "A) Defining the pass/fail criteria and the objectives of testing"
      },
      {
        "k": "b",
        "t": "B) Deviations from the test approach"
      },
      {
        "k": "c",
        "t": "C) Measurements of actual progress against the exit criteria"
      },
      {
        "k": "d",
        "t": "D) Evaluation of the quality of the test object"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây KHÔNG có trong báo cáo tóm tắt kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Xác định tiêu chí đạt/không đạt và mục tiêu kiểm thử\n  B) Những sai lệch so với phương pháp kiểm thử\n  C) Đo lường tiến độ thực tế so với tiêu chí đầu ra\n  D) Đánh giá chất lượng của test object (đối tượng kiểm thử)\n\n[GIẢI THÍCH CHI TIẾT]\nTest summary report (theo ISO/IEC/IEEE 29119-3) tổng kết những gì ĐÃ diễn ra: tóm tắt hoạt động kiểm thử, các sai lệch so với kế hoạch/cách tiếp cận (b), tiến độ thực tế so với exit criteria (c), đánh giá chất lượng đối tượng kiểm thử (d), rủi ro tồn đọng, số liệu defect… Còn việc ĐỊNH NGHĨA tiêu chí pass/fail và mục tiêu kiểm thử là nội dung của TEST PLAN — được xác lập ở khâu lập kế hoạch trước khi test, không phải trong báo cáo tổng kết ⇒ (a).\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.3.2 Purposes, Contents, and Audiences for Test Reports."
  },
  {
    "n": 30,
    "ref": "Câu 31 [FL-5.2.4]",
    "stem": "As a test manager you are responsible for testing the following requirements: R1 – Process anomalies; R2 – Synchronization; R3 – Approval; R4 – Problem solving; R5 – Financial data; R6 – Diagram data; R7 – Changes to the user profile. Which one of the following options structures the test execution schedule according to the requirement dependencies?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) R1; R3; R4; R7; R2; R5; R6"
      },
      {
        "k": "b",
        "t": "B) R1; R3; R2; R4; R7; R5; R6"
      },
      {
        "k": "c",
        "t": "C) R1; R3; R2; R5; R6; R4; R7"
      },
      {
        "k": "d",
        "t": "D) R1; R2; R5; R6; R3; R4; R7"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nVới tư cách là người quản lý kiểm tra, bạn chịu trách nhiệm kiểm tra các yêu cầu sau: R1 – Những điểm bất thường trong quy trình; R2 – Đồng bộ hóa; R3 – Phê duyệt; R4 – Giải quyết vấn đề; R5 – Dữ liệu tài chính; R6 – Dữ liệu sơ đồ; R7 – Thay đổi hồ sơ người dùng. Tùy chọn nào sau đây cấu trúc lịch thực hiện kiểm thử theo các phụ thuộc yêu cầu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) R1; R3; R4; R7; R2; R5; R6\n  B) R1; R3; R2; R4; R7; R5; R6\n  C) R1; R3; R2; R5; R6; R4; R7\n  D) R1; R2; R5; R6; R3; R4; R7\n\n[GIẢI THÍCH CHI TIẾT]\nLịch thực thi phải tôn trọng thứ tự phụ thuộc: R1 chạy trước R3 (R3 phụ thuộc R1); R2 phụ thuộc cả R1 và R3 nên chạy sau cả hai; R5, R6 phụ thuộc R2; và R4, R7 phụ thuộc vào toàn bộ khối {R2, R5, R6} nên phải chạy sau cùng. Kiểm tra: (a) đặt R4, R7 trước R2 → vi phạm. (b) đặt R4, R7 trước R5, R6 → vi phạm phụ thuộc của R4/R7 vào khối R2. (d) đặt R2 trước R3 → vi phạm R3 → R2. Chỉ (c) R1 → R3 → R2 → R5 → R6 → R4 → R7 thỏa mọi ràng buộc.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.2.4 Test Execution Schedule."
  },
  {
    "n": 31,
    "ref": "Câu 32 [FL-5.2.1]",
    "stem": "Which of the following can affect and be a part of the (initial) test planning?",
    "opts": [
      {
        "k": "a",
        "t": "A) Budget limitations"
      },
      {
        "k": "b",
        "t": "B) The test log"
      },
      {
        "k": "c",
        "t": "C) The failure rate"
      },
      {
        "k": "d",
        "t": "D) Use cases"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây có thể ảnh hưởng và là một phần của kế hoạch kiểm tra (ban đầu)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Giới hạn ngân sách\n  B) Nhật ký kiểm tra\n  C) Tỷ lệ thất bại\n  D) Trường hợp sử dụng\n\n[GIẢI THÍCH CHI TIẾT]\nLập kế hoạch kiểm thử chịu ảnh hưởng trực tiếp của các ràng buộc tổ chức và dự án — đặc biệt là NGÂN SÁCH: ngân sách quyết định phạm vi, mức độ kỹ lưỡng, nhân lực, công cụ và môi trường có thể dùng ⇒ (a). (b) test log là sản phẩm SINH RA trong lúc thực thi — chưa tồn tại ở thời điểm lập kế hoạch ban đầu. (c) failure rate là số liệu đo được khi test/vận hành, phục vụ giám sát chứ không phải đầu vào của initial planning. (d) use case là test basis dùng cho phân tích và thiết kế test, không phải yếu tố cấu thành kế hoạch ban đầu.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.2.1 Purpose and Content of a Test Plan (+ 5.2.2)."
  },
  {
    "n": 32,
    "ref": "Câu 33 [FL-3.2.1]",
    "stem": "You are invited to a checklist-based review of a description of the in-house document creation process. Which of the following statements about your review is correct?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Point ii) of the checklist has been violated, because it is not clear which condition must be fulfilled to invite to the review"
      },
      {
        "k": "b",
        "t": "B) You notice that, in addition to the tester and the verifier, the validator must also be invited. Since this item is not part of your checklist, you do not create a corresponding comment"
      },
      {
        "k": "c",
        "t": "C) Point iii) of the checklist has been violated, as it is not clear what marks the review as completed"
      },
      {
        "k": "d",
        "t": "D) Point i) of the checklist has been violated, because it is not clear who is providing the checklist for the review"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn được mời xem xét dựa trên danh sách kiểm tra mô tả về quy trình tạo tài liệu nội bộ. Nhận định nào sau đây về đánh giá của bạn là đúng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Điểm ii) của danh sách kiểm tra đã bị vi phạm, vì không rõ phải đáp ứng điều kiện nào để được mời phản biện\n  B) Bạn nhận thấy rằng, ngoài người kiểm tra và người xác minh, người xác thực cũng phải được mời. Vì mục này không nằm trong danh sách kiểm tra của bạn nên bạn không tạo nhận xét tương ứng\n  C) Điểm iii) của danh sách kiểm tra đã bị vi phạm vì không rõ điều gì đánh dấu việc đánh giá là đã hoàn thành\n  D) Điểm i) của danh mục kiểm tra bị vi phạm vì không rõ ai là người cung cấp danh mục kiểm tra để rà soát\n\n[GIẢI THÍCH CHI TIẾT]\nĐiểm i) yêu cầu NGƯỜI THỰC HIỆN của TỪNG hoạt động phải được xác định rõ. Trong đoạn văn, câu “A checklist describes the scope of the review” không hề nói AI là người cung cấp/chuẩn bị checklist đó ⇒ hoạt động này thiếu người thực hiện ⇒ vi phạm điểm i) ⇒ (d) đúng. (a) sai: điều kiện để mời review ĐÃ nêu rõ (“khi kiến trúc sư hoàn tất system specification”) — entry criterion có. (c) sai: điều kiện kết thúc ĐÃ có (“kết thúc bằng review done-comment chính thức”). (b) mô tả hành vi SAI của reviewer: phát hiện vấn đề ngoài checklist (thiếu validator) thì vẫn phải ghi nhận comment — checklist chỉ định hướng, không giới hạn việc báo cáo defect.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.2.1 Work Product Review Process & 3.2.4 Applying Review Techniques (checklist-based)."
  },
  {
    "n": 33,
    "ref": "Câu 34 [FL-1.3]",
    "stem": "Mr. Test has been testing mobile applications for 5 years and achieves better results in a shorter time than others. However, over several months he did not modify the existing automated test cases and did not create any new ones. This has led to fewer and fewer defects being found by executing the tests. Which testing principle did Mr. Test NOT observe?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testing is context dependent"
      },
      {
        "k": "b",
        "t": "B) Exhaustive testing is impossible"
      },
      {
        "k": "c",
        "t": "C) Repeating the same tests will not find new defects"
      },
      {
        "k": "d",
        "t": "D) Defects cluster together"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMr. Test đã kiểm thử các ứng dụng di động được 5 năm và đạt được kết quả tốt hơn trong thời gian ngắn hơn những ứng dụng khác. Tuy nhiên, trong vài tháng, anh ấy đã không sửa đổi các trường hợp kiểm thử tự động hiện có và không tạo bất kỳ trường hợp kiểm thử mới nào. Điều này dẫn đến ngày càng ít lỗi được tìm thấy khi thực hiện kiểm thử. Mr. Test KHÔNG tuân thủ nguyên tắc kiểm tra nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm thử phụ thuộc vào ngữ cảnh\n  B) Kiểm tra toàn diện là không thể\n  C) Lặp lại các bài kiểm thử tương tự sẽ không tìm thấy lỗi mới\n  D) Các khiếm khuyết (defect) cụm lại với nhau\n\n[GIẢI THÍCH CHI TIẾT]\nĐây là nguyên tắc số 5 — “pesticide paradox” (nghịch lý thuốc trừ sâu): nếu cứ lặp lại mãi cùng một bộ test, đến lúc chúng sẽ không còn tìm ra defect mới; muốn tiếp tục hiệu quả phải rà soát, cập nhật test case và dữ liệu, viết thêm test mới ⇒ (c). (a) “kiểm thử phụ thuộc ngữ cảnh” nói về việc test khác nhau giữa các loại hệ thống — không liên quan. (b) và (d) đều là nguyên tắc đúng của kiểm thử nhưng không phải nguyên tắc mà Mr. Test đã vi phạm trong tình huống này.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.3 Seven Testing Principles (nguyên tắc 5 – Pesticide Paradox)."
  },
  {
    "n": 34,
    "ref": "Câu 35 [FL-4.2.2]",
    "stem": "A speed control and reporting system has the following characteristics: if you drive 50 km/h or slower, nothing happens; if you drive faster than 50 km/h but no faster than 55 km/h, you will be warned; if you drive faster than 55 km/h but no faster than 60 km/h, you will be fined; if you drive faster than 60 km/h, your driving licence will be suspended. The speed is available to the system as an integer value. Which would be the most likely set of values (km/h) identified by boundary value analysis, where only the values on the boundaries of the equivalence classes are selected?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 0, 49, 50, 54, 59, 60"
      },
      {
        "k": "b",
        "t": "B) 50, 55, 60"
      },
      {
        "k": "c",
        "t": "C) 49, 50, 54, 55, 60, 62"
      },
      {
        "k": "d",
        "t": "D) 50, 51, 55, 56, 60, 61"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHệ thống báo cáo và kiểm soát tốc độ có các đặc điểm sau: nếu bạn lái xe với tốc độ 50 km/h hoặc chậm hơn thì sẽ không có gì xảy ra; nếu lái xe nhanh hơn 50 km/h nhưng không nhanh hơn 55 km/h sẽ bị cảnh cáo; nếu lái xe nhanh hơn 55 km/h nhưng không nhanh hơn 60 km/h sẽ bị phạt; nếu bạn lái xe nhanh hơn 60 km/h, giấy phép lái xe của bạn sẽ bị treo. Tốc độ có sẵn cho hệ thống dưới dạng một giá trị nguyên. Tập hợp giá trị nào có khả năng xảy ra nhất (km/h) được xác định bằng phân tích giá trị biên, trong đó chỉ các giá trị trên ranh giới của các lớp tương đương được chọn?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 0, 49, 50, 54, 59, 60\n  B) 50, 55, 60\n  C) 49, 50, 54, 55, 60, 62\n  D) 50, 51, 55, 56, 60, 61\n\n[GIẢI THÍCH CHI TIẾT]\nTrên miền số nguyên có 4 phân vùng: ≤50; 51–55; 56–60; ≥61. BVA 2 giá trị (two- value BVA) chọn giá trị biên và giá trị liền kề thuộc phân vùng bên cạnh tại mỗi ranh giới: ranh giới 50/51 → chọn 50 và 51; ranh giới 55/56 → chọn 55 và 56; ranh giới 60/61 → chọn 60 và 61 ⇒ tập {50, 51, 55, 56, 60, 61} = (d). (a) chứa 49, 54, 59 — không phải giá trị biên (biên dưới của vùng kế tiếp là 51, 56, 61, không phải 49, 54, 59; 0 chỉ là giá trị tùy chọn của biên dưới cùng). (b) chỉ có 3 biên trên, thiếu các giá trị sát biên. (c) chứa 49, 54 và 62 — sai vị trí biên.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.2 Boundary Value Analysis."
  },
  {
    "n": 35,
    "ref": "Câu 36 [FL-4.3]",
    "stem": "How can white-box testing be applied during acceptance testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) To check whether large volumes of data can be transferred between integrated systems"
      },
      {
        "k": "b",
        "t": "B) To check whether all code statements and code decision paths have been executed"
      },
      {
        "k": "c",
        "t": "C) To check whether all work-process flows have been covered"
      },
      {
        "k": "d",
        "t": "D) To cover all web page navigations"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLàm cách nào để áp dụng kiểm thử hộp trắng (white-box) trong quá trình kiểm thử chấp nhận?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Để kiểm tra xem khối lượng lớn dữ liệu có thể được chuyển giữa các hệ thống tích hợp hay không\n  B) Để kiểm tra xem tất cả các câu lệnh mã và đường dẫn quyết định mã đã được thực thi chưa\n  C) Để kiểm tra xem tất cả các luồng quy trình công việc đã được bao gồm chưa\n  D) Để bao gồm tất cả các điều hướng trang web\n\n[GIẢI THÍCH CHI TIẾT]\nWhite-box theo nghĩa rộng là kiểm thử dựa trên CẤU TRÚC. Ở mức acceptance, “cấu trúc” không còn là mã nguồn mà là các quy trình nghiệp vụ/luồng công việc — độ phủ được đo bằng việc mọi work-process flow đều đã được đi qua ⇒ (c). (b) là coverage mức mã nguồn — phù hợp component/integration testing, không thực tế ở acceptance. (a) là kiểm thử tích hợp/truyền dữ liệu giữa các hệ thống (system integration). (d) phủ điều hướng trang web tương ứng cấu trúc menu — thường gắn với system testing, không phải trọng tâm của acceptance.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.3 White-box Test Techniques (áp dụng độ phủ cấu trúc theo mức kiểm thử) kết hợp Chương 2 – 2.2.4 Acceptance Testing."
  },
  {
    "n": 36,
    "ref": "Câu 37 [FL-3.2.1]",
    "stem": "Which activities are carried out within the planning of a formal review?",
    "opts": [
      {
        "k": "a",
        "t": "A) Collection of metrics for the evaluation of the effectiveness of the review"
      },
      {
        "k": "b",
        "t": "B) Answering any questions the participants may have"
      },
      {
        "k": "c",
        "t": "C) Defining the entry criteria for the review and verifying that they are fulfilled"
      },
      {
        "k": "d",
        "t": "D) Evaluation of the review findings against the exit criteria"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhững hoạt động nào được thực hiện trong kế hoạch đánh giá chính thức?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Thu thập các số liệu để đánh giá hiệu quả của việc xem xét\n  B) Giải đáp mọi thắc mắc của người tham gia\n  C) Xác định các tiêu chí đầu vào để xem xét và xác minh rằng chúng được đáp ứng\n  D) Đánh giá kết quả đánh giá theo tiêu chí đầu ra\n\n[GIẢI THÍCH CHI TIẾT]\nGiai đoạn PLANNING của quy trình review gồm: xác định phạm vi, ước lượng effort và khung thời gian, chọn người tham gia và phân vai, ĐỊNH NGHĨA entry/exit criteria (với các loại review hình thức như inspection) và KIỂM TRA entry criteria đã được thỏa mãn ⇒ (c). (a) thu thập metrics đánh giá hiệu quả thuộc giai đoạn Fixing & Reporting/cải tiến quy trình. (b) giải đáp thắc mắc của người tham gia thuộc Initiate Review (kick-off). (d) đối chiếu phát hiện với exit criteria thuộc giai đoạn Issue Communication and Analysis (review meeting).\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.2.1 Work Product Review Process (hoạt động Planning)."
  },
  {
    "n": 37,
    "ref": "Câu 38 [FL-2.2]",
    "stem": "Which of the following statements comparing component testing and system testing is TRUE?",
    "opts": [
      {
        "k": "a",
        "t": "A) Component testing verifies the functionality of software modules, program objects, and classes that are separately testable, whereas system testing verifies interfaces between components and interactions between different parts of the system"
      },
      {
        "k": "b",
        "t": "B) Test cases for component testing are usually derived from component specifications, design specifications, or data models, whereas test cases for system testing are usually derived from requirement specifications or use cases"
      },
      {
        "k": "c",
        "t": "C) Component testing only focuses on functional characteristics, whereas system testing focuses on functional and non-functional characteristics"
      },
      {
        "k": "d",
        "t": "D) Component testing is the responsibility of the testers, whereas system testing is typically the responsibility of the users of the system"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây so sánh kiểm thử thành phần và kiểm thử hệ thống là ĐÚNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm thử thành phần xác minh chức năng của các mô-đun phần mềm, đối tượng chương trình và các lớp có thể kiểm thử riêng biệt, trong khi kiểm thử hệ thống xác minh giao diện giữa các thành phần và tương tác giữa các phần khác nhau của hệ thống\n  B) Các test case (ca kiểm thử) để kiểm tra thành phần thường bắt nguồn từ các đặc tả thành phần, đặc tả thiết kế hoặc mô hình dữ liệu, trong khi các test case (ca kiểm thử) để kiểm tra hệ thống thường bắt nguồn từ các đặc tả yêu cầu hoặc trường hợp sử dụng.\n  C) Kiểm thử thành phần chỉ tập trung vào các đặc tính chức năng, trong khi kiểm thử hệ thống tập trung vào các đặc tính chức năng và phi chức năng\n  D) Kiểm tra thành phần là trách nhiệm của người kiểm tra, trong khi kiểm tra hệ thống thường là trách nhiệm của người dùng hệ thống\n\n[GIẢI THÍCH CHI TIẾT]\nSo sánh theo TEST BASIS: component testing lấy cơ sở từ detailed design, đặc tả component, mô hình dữ liệu, mã nguồn; system testing lấy cơ sở từ đặc tả yêu cầu (SRS), use case, quy trình nghiệp vụ, báo cáo phân tích rủi ro ⇒ (b) đúng. (a) sai ở vế sau: kiểm thử “giao diện giữa các component và tương tác giữa các phần” là INTEGRATION testing, không phải system testing. (c) sai: component testing cũng có thể kiểm thử phi chức năng (hiệu năng của module, robustness…). (d) sai: component testing thường do DEVELOPER thực hiện; system testing thường do đội kiểm thử độc lập — không phải “người dùng”.\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2 Test Levels (2.2.1 Component Testing & 2.2.3 System Testing)."
  },
  {
    "n": 38,
    "ref": "Câu 39 [FL-3.2.2]",
    "stem": "Which of the following options are roles in a formal review?",
    "opts": [
      {
        "k": "a",
        "t": "A) Developer, Moderator, Review leader, Reviewer, Tester"
      },
      {
        "k": "b",
        "t": "B) Author, Moderator, Reviewer, Designer"
      },
      {
        "k": "c",
        "t": "C) Author, Manager, Review leader, Reviewer, Designer"
      },
      {
        "k": "d",
        "t": "D) Author, Moderator, Review leader, Reviewer, Scribe"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLựa chọn nào sau đây là vai trò trong đánh giá chính thức?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhà phát triển, Người điều hành, Người đứng đầu đánh giá, Người đánh giá, Người kiểm tra\n  B) Tác giả, Người điều hành, Người phản biện, Nhà thiết kế\n  C) Tác giả, Người quản lý, Người lãnh đạo đánh giá, Người đánh giá, Nhà thiết kế\n  D) Tác giả, Người điều hành, Người lãnh đạo đánh giá, Người phản biện, Người ghi chép\n\n[GIẢI THÍCH CHI TIẾT]\nCác vai trò chuẩn trong một formal review theo syllabus: Author (tác giả), Management (quản lý), Facilitator/Moderator (điều phối), Review leader (trưởng review), Reviewers (người review) và Scribe/Recorder (thư ký ghi biên bản). Phương án (d) liệt kê đúng 5 vai trò trong bộ này. Developer, Tester, Designer là CHỨC DANH dự án — những người này có thể ĐÓNG vai reviewer, nhưng bản thân chức danh đó không phải vai trò của quy trình review, nên (a), (b), (c) đều sai.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.2.2 Roles and Responsibilities in a Formal Review."
  },
  {
    "n": 39,
    "ref": "Câu 40 [FL-1.2.2]",
    "stem": "In what way can testing be part of Quality Assurance?",
    "opts": [
      {
        "k": "a",
        "t": "A) It ensures that requirements are detailed enough"
      },
      {
        "k": "b",
        "t": "B) Testing reduces the risk of poor software quality"
      },
      {
        "k": "c",
        "t": "C) It ensures that standards in the organization are followed"
      },
      {
        "k": "d",
        "t": "D) It measures the quality of software in terms of the number of executed test cases"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKiểm thử có thể là một phần của Đảm bảo Chất lượng theo cách nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nó đảm bảo rằng các yêu cầu đủ chi tiết\n  B) Kiểm tra làm giảm nguy cơ chất lượng phần mềm kém\n  C) Nó đảm bảo rằng các tiêu chuẩn trong tổ chức được tuân thủ\n  D) Nó đo lường chất lượng của phần mềm dựa trên số lượng ca kiểm thử được thực hiện\n\n[GIẢI THÍCH CHI TIẾT]\nQA hướng về quy trình: quy trình tốt — trong đó kiểm thử được thực hiện đúng đắn — tạo niềm tin rằng sản phẩm đạt chất lượng. Kiểm thử đóng góp vào QA bằng cách phát hiện defect để sửa trước khi phát hành, qua đó GIẢM RỦI RO phần mềm chất lượng kém ⇒ (b). (a) làm cho yêu cầu đủ chi tiết là việc của kỹ nghệ yêu cầu/BA (review có thể hỗ trợ nhưng không phải bản chất đóng góp của testing vào QA). (c) bảo đảm tuân thủ chuẩn/quy trình là việc của audit/QA process, không phải của testing. (d) số test case ĐÃ CHẠY không đo được chất lượng phần mềm.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.2.2 Quality Assurance and Testing."
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
