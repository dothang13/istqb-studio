/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ISTQB Sample Exam D (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ISTQB Sample Exam D (40 câu chuẩn)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (40 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question #1 [FL-1.1.1]",
    "stem": "Which of the following is a typical test objective?",
    "opts": [
      {
        "k": "a",
        "t": "A) Finding and fixing defects in the test object"
      },
      {
        "k": "b",
        "t": "B) Maintaining effective communications with developers"
      },
      {
        "k": "c",
        "t": "C) Validating that legal requirements have been met"
      },
      {
        "k": "d",
        "t": "D) Building confidence in the quality of the test object"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là mục tiêu kiểm thử điển hình?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tìm và sửa lỗi trong test object (đối tượng kiểm thử)\n  B) Duy trì liên lạc hiệu quả với các nhà phát triển\n  C) Xác nhận rằng các yêu cầu pháp lý đã được đáp ứng\n  D) Xây dựng niềm tin vào chất lượng của test object (đối tượng kiểm thử)\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Việc tìm và sửa lỗi trong đối tượng kiểm thử không phải là mục tiêu kiểm thử điển hình vì mặc dù việc xác định lỗi là mục tiêu của kiểm thử nhưng việc sửa lỗi không phải là một hoạt động kiểm thử.\nb) Không đúng. Duy trì liên lạc hiệu quả với các nhà phát triển không phải là mục tiêu kiểm thử điển hình mặc dù nó rất hữu ích trong việc đạt được các mục tiêu kiểm thử khác, chẳng hạn như cung cấp cho các bên liên quan thông tin cho phép họ đưa ra quyết định sáng suốt. Đây không phải là lý do chính để thực thi kiểm thử\nc) Không đúng. Việc xác thực rằng các yêu cầu pháp lý đã được đáp ứng không phải là mục tiêu kiểm thử điển hình vì việc xác thực liên quan đến việc kiểm tra xem hệ thống có đáp ứng nhu cầu của người dùng và các bên liên quan khác trong môi trường hoạt động của nó hay không. Kiểm tra xem các yêu cầu pháp lý đã được đáp ứng hay chưa là một hình thức xác minh\nđ) Đúng. Xây dựng niềm tin vào chất lượng của test object (đối tượng kiểm thử) đạt được bằng cách thực hiện các bài kiểm thử đã vượt qua\n\nTham chiếu: FL-1.1.1 (K1)"
  },
  {
    "n": 2,
    "ref": "Question #2 [FL-1.2.3]",
    "stem": "A designer documents a design for a user interface that does not suitably address disabled users  because the designer is tired. The programmer implements the user interface in line with the  design but as they are working under severe time pressure, they do not include suitable exception  handling in their program code for bonus calculations. When the operational system is used,  complaints are made by some disabled users about the interface and the company is subsequently  fined by the relevant regulatory authority. No one notices that bonus calculations are sometimes  incorrect.  Which of the following statements is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) The miscalculation of bonuses is a defect that occasionally occurs"
      },
      {
        "k": "b",
        "t": "B) The fine received for failing to address some disabled users is a failure"
      },
      {
        "k": "c",
        "t": "C) The programmer working under severe time pressure is a root cause"
      },
      {
        "k": "d",
        "t": "D) The design of the user interface includes a designer error"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMột nhà thiết kế ghi lại một thiết kế cho giao diện người dùng không phù hợp với người dùng khiếm khuyết (defect) vì nhà thiết kế đã mệt mỏi. Lập trình viên triển khai giao diện người dùng phù hợp với thiết kế nhưng vì họ đang làm việc dưới áp lực thời gian nghiêm trọng nên họ không đưa việc xử lý ngoại lệ phù hợp vào mã chương trình để tính toán tiền thưởng. Khi hệ điều hành được sử dụng, một số người dùng khiếm khuyết (defect) sẽ khiếu nại về giao diện và công ty sau đó bị cơ quan quản lý liên quan phạt. Không ai để ý rằng việc tính toán tiền thưởng đôi khi không chính xác.  Phát biểu nào sau đây là ĐÚNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Việc tính sai tiền thưởng là một khiếm khuyết thỉnh thoảng vẫn xảy ra\n  B) Tiền phạt nhận được do không giải quyết được một số người dùng khiếm khuyết (defect) là một sự thất bại\n  C) Lập trình viên làm việc dưới áp lực thời gian nặng nề là nguyên nhân sâu xa\n  D) Thiết kế giao diện người dùng bao gồm lỗi thiết kế\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Việc tính sai tiền thưởng là lỗi do hệ thống chứ không phải lỗi\nb) Không đúng. Hệ thống không hỗ trợ phù hợp cho người dùng khiếm khuyết (defect) là một sai sót và cuối cùng dẫn đến bị phạt, nhưng bản thân khoản phạt đó không phải là sai sót (có vẻ như đây là hoạt động đúng đắn của hệ thống quản lý)\nc) Đúng. Lỗi là do người lập trình mắc phải và lỗi này là do họ làm việc dưới áp lực thời gian quá cao, đây là nguyên nhân sâu xa dẫn đến lỗi sau này\nđ) Không đúng. Thiết kế giao diện người dùng kém, không phù hợp với người dùng khiếm khuyết (defect), là lỗi thiết kế do lỗi của nhà thiết kế gây ra. Do đó, thiết kế giao diện người dùng bao gồm lỗi thiết kế chứ không phải lỗi thiết kế.\n\nTham chiếu: FL-1.2.3 (K2)"
  },
  {
    "n": 3,
    "ref": "Question #3 [FL-1.3.1]",
    "stem": "Test conditions are being used by testers to generate test cases and execute tests. Even though  the test conditions remain the same, the test cases are varied each time. Which of the following  ‘principles of testing’ is being addressed through the variation of test cases?",
    "opts": [
      {
        "k": "a",
        "t": "A) Tests wear out"
      },
      {
        "k": "b",
        "t": "B) Absence-of-defects fallacy"
      },
      {
        "k": "c",
        "t": "C) Early testing saves time and money"
      },
      {
        "k": "d",
        "t": "D) Defects cluster together"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCác điều kiện kiểm thử đang được người kiểm thử sử dụng để tạo ra các trường hợp kiểm thử và thực hiện kiểm thử. Mặc dù các điều kiện kiểm thử vẫn giữ nguyên nhưng các test case (ca kiểm thử) mỗi lần đều khác nhau. 'Nguyên tắc kiểm thử' nào sau đây đang được giải quyết thông qua sự biến đổi của các test case (ca kiểm thử)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các bài kiểm tra bị hao mòn\n  B) Ngụy biện không có khuyết điểm\n  C) Kiểm thử sớm giúp tiết kiệm thời gian và tiền bạc\n  D) Các khiếm khuyết (defect) cụm lại với nhau\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Nguyên tắc 'kiểm thử bị hao mòn' liên quan đến ý tưởng rằng việc lặp lại các kiểm thử giống hệt nhau trên mã không bị thay đổi khó có thể phát hiện ra các lỗi mới và do đó, việc sửa đổi các kiểm thử có thể là cần thiết. Bằng cách sử dụng các điều kiện kiểm thử để tạo ra các kiểm thử mới mỗi lần, các kiểm thử sẽ không giống nhau và nguy cơ các kiểm thử bị lỗi sẽ giảm đi\nb) Không đúng. Nguyên tắc 'ngụy biện không có khuyết điểm' liên quan đến việc đảm bảo rằng nhu cầu của người dùng được đáp ứng ngay cả khi thực hiện nhiều kiểm thử và không tìm thấy khuyết điểm nào (tức là, việc xác nhận cũng là cần thiết). Việc sử dụng các điều kiện kiểm thử để tạo ra các trường hợp kiểm thử và thực hiện kiểm thử không trực tiếp giải quyết được mối lo ngại này.\nc) Không đúng. Nguyên tắc 'kiểm thử sớm tiết kiệm thời gian và tiền bạc' liên quan đến việc sửa chữa các khiếm khuyết sớm để ngăn chặn sự xuất hiện của các khiếm khuyết tiếp theo trong các sản phẩm công việc phát sinh, từ đó giảm chi phí và khả năng thất bại. Điều này thường được giải quyết bằng cách bắt đầu kiểm thử (cả tĩnh và động) càng sớm càng tốt, nhưng điều này không được giải quyết bằng cách sử dụng các điều kiện kiểm thử để tạo test case (ca kiểm thử) và thực thi kiểm thử\nđ) Không đúng. Nguyên tắc 'Nhóm các khiếm khuyế"
  },
  {
    "n": 4,
    "ref": "Question #4 [FL-1.4.1]",
    "stem": "Given the following test tasks:  1. Derive test cases from test conditions  2. Identify reusable testware  3. Organize test cases into test procedures  4. Evaluate the test basis and the test object  And the following test activities:  A. Test analysis  B. Test design  C. Test implementation  D. Test completion  Which of the following BEST matches the tasks with the activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1B,  2A,  3D,  4C"
      },
      {
        "k": "b",
        "t": "B) 1B,  2D,  3C,  4A"
      },
      {
        "k": "c",
        "t": "C) 1C,  2A,  3B,  4D"
      },
      {
        "k": "d",
        "t": "D) 1C,  2D,  3A,  4B"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐưa ra các nhiệm vụ kiểm thử sau: 1. Lấy các trường hợp kiểm thử từ các điều kiện kiểm thử 2. Xác định phần mềm kiểm thử có thể tái sử dụng 3. Tổ chức các trường hợp kiểm thử thành các quy trình kiểm thử 4. Đánh giá cơ sở kiểm thử và đối tượng kiểm thử Và các hoạt động kiểm thử sau: A. Phân tích kiểm thử B. Thiết kế kiểm thử C. Triển khai kiểm thử D. Hoàn thành kiểm thử Điều nào sau đây TỐT NHẤT phù hợp với nhiệm vụ với các hoạt động?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1B, 2A, 3D, 4C\n  B) 1B, 2D, 3C, 4A\n  C) 1C, 2A, 3B, 4D\n  D) 1C, 2D, 3A, 4B\n\n[GIẢI THÍCH CHI TIẾT]\nXem xét từng hoạt động kiểm thử được liệt kê và nhiệm vụ của chúng: A. Phân tích kiểm thử - Để xác định các tính năng cần kiểm thử, cơ sở kiểm thử được phân tích và xác định là các điều kiện kiểm thử, sau đó được ưu tiên cùng với các rủi ro liên quan. Trong quá trình phân tích kiểm thử này, các khiếm khuyết trong cơ sở kiểm thử thường được phát hiện và khả năng kiểm thử của đối tượng kiểm thử cũng có thể được đánh giá. (Nhiệm vụ 4) B. Thiết kế kiểm thử - Liên quan đến việc sử dụng các điều kiện kiểm thử để tạo test case (ca kiểm thử) và testware (chế phẩm kiểm thử) cần thiết khác, chẳng hạn như yêu cầu dữ liệu kiểm thử và test charter để kiểm thử thăm dò (exploratory testing). (Nhiệm vụ 1) C. Triển khai kiểm thử - Các quy trình kiểm thử, chẳng hạn như tập lệnh kiểm thử thủ công và tự động, được tạo từ các trường hợp kiểm thử và có thể được tập hợp thành các bộ kiểm thử. Các thủ tục kiểm thử được ưu tiên và sắp xếp theo lịch trình thực hiện kiểm thử. (Nhiệm vụ 3) D. Hoàn thành kiểm thử - Xảy ra ở các mốc quan trọng của dự án, chẳng hạn như phát hành, kết thúc quá trình lặp lại hoặc kết thúc cấp độ kiểm thử. Phần mềm kiểm thử được xác định và lưu trữ hoặc giao cho các nhóm thích hợp để tái sử dụng, môi trường kiểm thử sẽ ngừng hoạt động và các hoạt động ki"
  },
  {
    "n": 5,
    "ref": "Question #5 [FL-1.4.3]",
    "stem": "Given the following testware:  i.  Test completion report  ii.  Data held in a database used for test inputs and expected results  iii.  The list of elements needed to build the test environment  iv.  Documented sequences of test cases in execution order  v.  Test cases  Which of the following BEST shows the testware produced as a result of performing test  implementation?",
    "opts": [
      {
        "k": "a",
        "t": "A) ii, iv"
      },
      {
        "k": "b",
        "t": "B) iii, v"
      },
      {
        "k": "c",
        "t": "C) i, ii, v"
      },
      {
        "k": "d",
        "t": "D) i, iii, iv"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCho phần mềm kiểm tra sau: i.  Báo cáo hoàn thành kiểm thử ii.  Dữ liệu được lưu giữ trong cơ sở dữ liệu được sử dụng làm đầu vào kiểm tra và kết quả mong đợi iii.  Danh sách các yếu tố cần thiết để xây dựng môi trường kiểm thử iv.  Trình tự được ghi lại của các trường hợp kiểm thử theo thứ tự thực hiện v. Trường hợp kiểm thử Điều nào TỐT NHẤT sau đây cho thấy phần mềm kiểm thử được tạo ra do thực hiện kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Ii, iv\n  B) Iii, v\n  C) Tôi, ii, v\n  D) Tôi, iii, iv\n\n[GIẢI THÍCH CHI TIẾT]\nXem xét từng phần mềm kiểm thử được liệt kê và hoạt động kiểm thử tạo ra phần mềm đó: i.  Báo cáo hoàn thành kiểm thử là kết quả của việc hoàn thành kiểm thử ii.  Dữ liệu được lưu giữ trong cơ sở dữ liệu dùng làm đầu vào và kết quả mong đợi là dữ liệu kiểm thử - đầu ra của việc thực thi kiểm thử iii. Danh sách các yếu tố cần thiết để xây dựng môi trường kiểm thử là các yêu cầu về môi trường kiểm thử - đầu ra của thiết kế kiểm thử iv. Trình tự tài liệu của các trường hợp kiểm thử theo thứ tự thực hiện là các quy trình kiểm thử - đầu ra của quá trình triển khai kiểm thử v. Các trường hợp kiểm thử - đầu ra của thiết kế kiểm thử Việc triển khai kiểm thử tạo ra các kết quả đầu ra sau: quy trình kiểm thử (iv), tập lệnh kiểm thử tự động, bộ kiểm thử, dữ liệu kiểm thử (ii), lịch thực hiện kiểm thử và các thành phần môi trường kiểm thử như sơ khai, trình điều khiển, trình mô phỏng và ảo hóa dịch vụ.  Như vậy:\na) Đúng. Mục ii và iv trong danh sách được tạo ra do thực thi kiểm thử\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-1.4.3 (K2)"
  },
  {
    "n": 6,
    "ref": "Question #6 [FL-1.4.5]",
    "stem": "Which of the following is MOST likely to describe a task performed by someone in a test  management role?",
    "opts": [
      {
        "k": "a",
        "t": "A) Evaluate the test basis and the test object"
      },
      {
        "k": "b",
        "t": "B) Define test environment requirements"
      },
      {
        "k": "c",
        "t": "C) Assess testability of the test object"
      },
      {
        "k": "d",
        "t": "D) Create the test completion report"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây có khả năng mô tả nhất một nhiệm vụ được thực hiện bởi một người nào đó trong vai trò quản lý kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đánh giá cơ sở kiểm thử và đối tượng kiểm thử\n  B) Xác định các yêu cầu về môi trường kiểm thử\n  C) Đánh giá khả năng kiểm thử của đối tượng kiểm thử\n  D) Tạo báo cáo hoàn thành kiểm thử\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Vai trò kiểm thử chịu trách nhiệm chính về các khía cạnh kỹ thuật và kỹ thuật của kiểm thử, chẳng hạn như phân tích kiểm thử, thiết kế kiểm thử, thực hiện kiểm thử và thực hiện kiểm thử. Đánh giá cơ sở kiểm thử để phát hiện lỗi và đối tượng kiểm thử để xác định khả năng kiểm thử là các nhiệm vụ được thực hiện như một phần của phân tích kiểm thử, do đó có thể chúng là các nhiệm vụ được thực hiện bởi vai trò kiểm thử.\nb) Không đúng. Vai trò kiểm thử chịu trách nhiệm chính về các khía cạnh kỹ thuật và kỹ thuật của kiểm thử, chẳng hạn như phân tích kiểm thử, thiết kế kiểm thử, thực hiện kiểm thử và thực hiện kiểm thử. Xác định các yêu cầu về môi trường kiểm thử là một nhiệm vụ được thực hiện như một phần của thiết kế kiểm thử, do đó, nó có thể là một nhiệm vụ được thực hiện bởi vai trò kiểm thử.\nc) Không đúng. Vai trò kiểm thử chịu trách nhiệm chính về các khía cạnh kỹ thuật và kỹ thuật của kiểm thử, chẳng hạn như phân tích kiểm thử, thiết kế kiểm thử, thực hiện kiểm thử và thực hiện kiểm thử. Đánh giá khả năng kiểm thử của một đối tượng kiểm thử là một nhiệm vụ được thực hiện như một phần của phân tích kiểm thử, do đó, nó có thể là một nhiệm vụ được thực hiện bởi vai trò kiểm thử.\nđ) Đúng. Vai trò quản lý kiểm thử chủ yếu liên quan đến các hoạt động liên quan đến lập kế hoạch kiểm thử, giám sát kiểm thử và kiểm soát kiểm thử cũng như hoàn thành kiểm thử.  Do đó, việc tạo báo cáo hoàn thành kiểm thử, là đầu ra chính của quá trình hoàn thành kiểm"
  },
  {
    "n": 7,
    "ref": "Question #7 [FL-1.5.2]",
    "stem": "Which of the following is an advantage of the whole team approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) Improved communication between team members"
      },
      {
        "k": "b",
        "t": "B) Decreased individual accountability for quality"
      },
      {
        "k": "c",
        "t": "C) Faster deployment of deliverables to the end users"
      },
      {
        "k": "d",
        "t": "D) Reduced collaboration with external business users"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là ưu điểm của cách tiếp cận toàn nhóm?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Cải thiện giao tiếp giữa các thành viên trong nhóm\n  B) Giảm trách nhiệm cá nhân về chất lượng\n  C) Triển khai nhanh hơn các sản phẩm bàn giao cho người dùng cuối\n  D) Giảm sự cộng tác với người dùng doanh nghiệp bên ngoài\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Cách tiếp cận toàn nhóm thúc đẩy sự giao tiếp và hợp tác mạnh mẽ giữa các thành viên trong nhóm\nb) Không đúng. Trong khi cách tiếp cận của cả nhóm ưu tiên trách nhiệm tập thể về chất lượng thì mỗi thành viên trong nhóm vẫn có trách nhiệm như nhau về chất lượng.\nc) Không đúng. Cách tiếp cận của cả nhóm là về cách nhóm làm việc cùng nhau, nhằm mục đích cung cấp các sản phẩm có chất lượng cao hơn, nhưng không nhất thiết dẫn đến việc triển khai nhanh hơn cho người dùng cuối\nđ) Không đúng. Khi sử dụng phương pháp tiếp cận toàn nhóm, tester (kiểm thử viên) sẽ làm việc với đại diện doanh nghiệp để tạo ra các bài kiểm tra chấp nhận. Không có ý kiến ​​nào cho rằng cách tiếp cận này sẽ làm giảm sự cộng tác với người dùng doanh nghiệp bên ngoài\n\nTham chiếu: FL-1.5.2 (K1)"
  },
  {
    "n": 8,
    "ref": "Question #8 [FL-1.5.3]",
    "stem": "Given the following benefits and drawbacks of the independence of testing:  i.  The testers work in a different location from the developers  ii.  Testers question the assumptions programmers make while writing code  iii.  A confrontational dynamic has been established between testers and developers  iv.  Developers have convinced themselves that testers are mostly accountable for  quality  v.  Testers have different biases than those held by the developers  Which are MOST likely to be considered benefits?",
    "opts": [
      {
        "k": "a",
        "t": "A) i, iv"
      },
      {
        "k": "b",
        "t": "B) ii, v"
      },
      {
        "k": "c",
        "t": "C) i, iii, iv"
      },
      {
        "k": "d",
        "t": "D) ii, iii, v"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nVới những lợi ích và hạn chế sau đây về tính độc lập của kiểm thử: i.  tester (kiểm thử viên) làm việc ở một địa điểm khác với nhà phát triển ii.  Người kiểm tra đặt câu hỏi về các giả định mà lập trình viên đưa ra khi viết mã iii.  Động lực đối đầu đã được thiết lập giữa tester (kiểm thử viên) và nhà phát triển iv.  Các nhà phát triển đã thuyết phục bản thân rằng những tester (kiểm thử viên) chủ yếu chịu trách nhiệm về chất lượng v. Những tester (kiểm thử viên) có những thành kiến ​​​​khác với những thành kiến ​​của các nhà phát triển. Điều nào có khả năng được coi là lợi ích NHẤT?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tôi, iv\n  B) Ii, v\n  C) Tôi, iii, iv\n  D) Ii, iii, v\n\n[GIẢI THÍCH CHI TIẾT]\nXem xét từng lợi ích và hạn chế được liệt kê của tính độc lập của kiểm thử: i.  Lý tưởng nhất là chúng tôi muốn có sự hợp tác chặt chẽ giữa tester (kiểm thử viên) và nhà phát triển, điều này không bị tăng lên do sự cô lập. Như vậy, đây là một bất lợi ii.  tester (kiểm thử viên) và nhà phát triển có nền tảng, quan điểm kỹ thuật và thành kiến ​​​​tiềm năng khác nhau, cho phép tester (kiểm thử viên) thách thức một cách hữu ích các giả định được đưa ra bởi các bên liên quan trong quá trình triển khai và đặc tả hệ thống. Như vậy đây là một lợi thế iii.  Nhược điểm chính của tính độc lập của kiểm thử là tester (kiểm thử viên) có thể bị cô lập khỏi nhóm phát triển, dẫn đến các vấn đề về giao tiếp, thiếu cộng tác và có thể gây ra mối quan hệ bất lợi, trong đó tester (kiểm thử viên) bị đổ lỗi cho sự chậm trễ và tắc nghẽn trong quá trình phát hành. Vì vậy, đây là một bất lợi iv.  Một trong những nhược điểm của việc kiểm thử độc lập là người kiểm thử có thể bị cô lập khỏi nhóm phát triển, dẫn đến việc các nhà phát triển cảm thấy ít chịu trách nhiệm hơn về chất lượng. Vì vậy, đây là một bất lợi. v. Lợi ích chính của tính độc lập của kiểm t"
  },
  {
    "n": 9,
    "ref": "Question #9 [FL-2.1.2]",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "opts": [
      {
        "k": "a",
        "t": "A) Each test level has specific and distinct test objectives"
      },
      {
        "k": "b",
        "t": "B) Test implementation and execution for a given test level should start during the corresponding development phase"
      },
      {
        "k": "c",
        "t": "C) Testers should start test design as soon as drafts of the relevant work products become available"
      },
      {
        "k": "d",
        "t": "D) Every dynamic testing activity has a corresponding static testing activity"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là phương pháp kiểm thử tốt áp dụng cho tất cả vòng đời phát triển phần mềm?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Mỗi cấp độ kiểm tra có mục tiêu kiểm tra cụ thể và riêng biệt\n  B) Việc triển khai và thực thi kiểm thử cho một cấp độ kiểm thử (test level) nhất định sẽ bắt đầu trong giai đoạn phát triển tương ứng\n  C) Người kiểm thử nên bắt đầu thiết kế kiểm thử ngay khi có bản nháp của các sản phẩm công việc liên quan\n  D) Mỗi hoạt động kiểm thử động đều có hoạt động kiểm thử tĩnh tương ứng\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Mỗi cấp độ kiểm tra có các mục tiêu kiểm tra cụ thể và riêng biệt vì một dạng đối tượng kiểm tra khác nhau (ví dụ: một thành phần và hệ thống hoàn chỉnh) được kiểm tra ở mỗi cấp độ kiểm tra và các mục tiêu kiểm tra chồng chéo sẽ dẫn đến sự trùng lặp không cần thiết\nb) Không đúng. Phân tích kiểm thử và thiết kế kiểm thử cho một mức độ kiểm thử nhất định nên bắt đầu trong giai đoạn phát triển tương ứng để tạo điều kiện thuận lợi cho việc kiểm thử sớm (ví dụ: phân tích kiểm thử chấp nhận và thiết kế kiểm thử nên bắt đầu trong quá trình phân tích yêu cầu). Việc triển khai kiểm thử thường sẽ bắt đầu sau và quá trình thực thi kiểm thử sẽ bắt đầu ở cấp độ kiểm thử (test level)\nc) Không đúng. Thiết kế kiểm thử cho một cấp độ kiểm thử nhất định nên bắt đầu trong giai đoạn phát triển tương ứng để tạo điều kiện cho việc kiểm thử sớm, tuy nhiên, thiết kế kiểm thử (ví dụ: tạo trường hợp kiểm thử) cần phải dựa trên cơ sở kiểm thử đã được thống nhất chứ không phải bản nháp sớm, nếu không nỗ lực kiểm thử đáng kể có thể bị lãng phí khi tạo trường hợp kiểm thử cho một thiết kế mà sau này sẽ thay đổi\nđ) Không đúng. Kiểm soát chất lượng áp dụng cho tất cả các hoạt động phát triển, nghĩa là mọi hoạt động phát triển phần mềm đều có hoạt động kiểm tra tương ứng. Tuy nhiên, tính đối xứng tương tự không áp d"
  },
  {
    "n": 10,
    "ref": "Question #10 [FL-2.1.3]",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "opts": [
      {
        "k": "a",
        "t": "A) Behavior-Driven Development"
      },
      {
        "k": "b",
        "t": "B) Test Level Driven Development"
      },
      {
        "k": "c",
        "t": "C) Function-Driven Development"
      },
      {
        "k": "d",
        "t": "D) Performance-Driven Development"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là ví dụ về phương pháp phát triển kiểm thử đầu tiên?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phát triển theo hướng hành vi\n  B) Phát triển theo định hướng cấp độ kiểm thử (test level)\n  C) Phát triển theo hướng chức năng\n  D) Phát triển theo hướng hiệu suất\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Phát triển theo hướng hành vi (BDD) là một ví dụ nổi tiếng về cách tiếp cận kiểm thử đầu tiên để phát triển\nb) Không đúng. Phát triển theo hướng kiểm thử không phải là một ví dụ chính xác về cách tiếp cận phát triển kiểm thử đầu tiên\nc) Không đúng. Phát triển theo hướng chức năng không phải là một ví dụ chính xác về cách tiếp cận phát triển kiểm thử đầu tiên\nđ) Không đúng. Phát triển theo hướng hiệu suất không phải là một ví dụ chính xác về cách tiếp cận kiểm thử đầu tiên để phát triển\n\nTham chiếu: FL-2.1.3 (K1)"
  },
  {
    "n": 11,
    "ref": "Question #11 [FL-2.1.4]",
    "stem": "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
    "opts": [
      {
        "k": "a",
        "t": "A) Making sure that non-functional quality characteristics are not overlooked"
      },
      {
        "k": "b",
        "t": "B) Managing continuously changing test environments"
      },
      {
        "k": "c",
        "t": "C) The need for more manual testers with suitable experience"
      },
      {
        "k": "d",
        "t": "D) Setting up the test automation as part of the delivery pipeline"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây có nhiều khả năng là thách thức gặp phải nhất khi triển khai DevOps?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đảm bảo rằng các đặc tính chất lượng phi chức năng không bị bỏ qua\n  B) Quản lý môi trường kiểm thử thay đổi liên tục\n  C) Cần nhiều người kiểm thử thủ công có kinh nghiệm phù hợp\n  D) Thiết lập tự động hóa kiểm thử (test automation) như một phần của quy trình phân phối\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. DevOps thường tăng khả năng hiển thị các đặc tính chất lượng phi chức năng, chẳng hạn như hiệu suất và độ tin cậy\nb) Không đúng. Các quy trình tự động như tích hợp liên tục/phân phối liên tục (CI/CD) được sử dụng trong DevOps tạo điều kiện cho môi trường kiểm thử ổn định\nc) Không đúng. Các quy trình tự động như CI/CD được sử dụng trong DevOps thường làm giảm nhu cầu kiểm tra thủ công\nđ) Đúng. Việc triển khai DevOps có thể đặt ra một số rủi ro và thách thức, bao gồm nhu cầu xác định và thiết lập quy trình phân phối, giới thiệu và duy trì các công cụ CI/CD cũng như thiết lập và duy trì tự động hóa kiểm thử (test automation)\n\nTham chiếu: FL-2.1.4 (K2)"
  },
  {
    "n": 12,
    "ref": "Question #12 [FL-2.1.6]",
    "stem": "Which of the following BEST describes retrospectives?",
    "opts": [
      {
        "k": "a",
        "t": "A) Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach"
      },
      {
        "k": "b",
        "t": "B) Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future"
      },
      {
        "k": "c",
        "t": "C) Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment"
      },
      {
        "k": "d",
        "t": "D) Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây TỐT NHẤT mô tả quá trình hồi tưởng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hồi tưởng cho phép các thành viên trong nhóm xác định các thành viên khác trong nhóm đã không đóng góp đầy đủ vào việc đạt được chất lượng theo yêu cầu của cách tiếp cận của toàn nhóm\n  B) Hồi cứu mang lại cho tester (kiểm thử viên) cơ hội xác định các hoạt động đã thành công để chúng được giữ lại khi thực hiện các cải tiến tiềm năng trong tương lai\n  C) Hồi tưởng là nơi các thành viên nhóm linh hoạt được phép nói lên mối quan ngại của họ về ban quản lý và khách hàng trong một môi trường không có lỗi\n  D) Các buổi cải tiến cung cấp cho các thành viên nhóm linh hoạt một diễn đàn nơi họ tập trung thảo luận về kế hoạch và các quyết định kỹ thuật cho lần lặp tiếp theo\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Lợi ích của hoạt động cải tiến bao gồm gắn kết nhóm và học hỏi từ việc chia sẻ các vấn đề cũng như cộng tác tốt hơn giữa nhà phát triển và tester (kiểm thử viên) thông qua việc xem xét và cải thiện phương pháp làm việc. Việc chỉ trích những cá nhân mà một thành viên trong nhóm có thể cảm thấy đã không đóng góp đầy đủ vào việc đạt được chất lượng theo yêu cầu của phương pháp tiếp cận của cả nhóm sẽ không góp phần vào sự gắn kết và hợp tác của nhóm này\nb) Đúng. Trong quá trình hồi tưởng, nhóm thảo luận về những khía cạnh nào của dự án đã thành công và cần được giữ lại, cũng như những lĩnh vực có thể được cải thiện và cách thực hiện điều đó.\nc) Không đúng. Lợi ích của hoạt động hồi cứu dựa trên việc tăng cường hiệu lực và hiệu quả thông qua cải tiến quy trình; chúng không phải là cơ hội để trút giận và chỉ trích ban quản lý và khách hàng. Ngoài ra, kết quả kiểm tra được ghi lại, thường là trong báo cáo hoàn thành kiểm tra, do đó, bất cứ điều gì được nói trong cuộc họp đều có thể được đọc bởi các bên liên quan khác\nđ) Không đúng. Hồi t"
  },
  {
    "n": 13,
    "ref": "Question #13 [FL-2.2.2]",
    "stem": "Which of the following tests is MOST likely to be performed as part of functional testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test checks that the sort function puts the elements of the list or array in ascending order"
      },
      {
        "k": "b",
        "t": "B) The test checks whether the sort function completes sorting within one second of starting"
      },
      {
        "k": "c",
        "t": "C) The test checks how easily the sort function can be changed from sorting ascending to sorting descending"
      },
      {
        "k": "d",
        "t": "D) The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKiểm thử nào sau đây có khả năng được thực hiện NHẤT như một phần của kiểm thử chức năng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra để kiểm tra xem hàm sắp xếp có sắp xếp các phần tử của danh sách hoặc mảng theo thứ tự tăng dần hay không\n  B) Kiểm tra kiểm tra xem chức năng sắp xếp có hoàn thành việc sắp xếp trong vòng một giây kể từ khi bắt đầu hay không\n  C) Bài kiểm tra kiểm tra xem chức năng sắp xếp có thể được thay đổi dễ dàng như thế nào từ sắp xếp tăng dần sang sắp xếp giảm dần\n  D) Kiểm tra kiểm tra xem chức năng sắp xếp có còn hoạt động chính xác khi chuyển từ kiến trúc 32 bit sang 64 bit không\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Việc kiểm tra xem hàm sắp xếp có đặt các phần tử của danh sách hoặc mảng theo thứ tự tăng dần hay không đang đánh giá tính chính xác về mặt chức năng của hàm sắp xếp, là một phần của kiểm tra chức năng\nb) Không đúng. Việc đánh giá xem hàm sắp xếp có đáp ứng yêu cầu phi chức năng để hoàn thành trong vòng một giây hay không là một phần của việc kiểm tra hiệu quả hoạt động của nó, là một phần của kiểm tra phi chức năng\nc) Không đúng. Đánh giá mức độ dễ dàng sửa đổi chức năng sắp xếp từ sắp xếp tăng dần đến sắp xếp giảm dần đang kiểm tra khả năng sửa đổi của nó, một hình thức kiểm tra khả năng bảo trì phi chức năng, là một phần của kiểm tra phi chức năng\nđ) Không đúng. Việc đánh giá rằng chức năng sắp xếp vẫn hoạt động chính xác khi được chuyển từ kiến ​​trúc 32 bit sang 64 bit đang kiểm tra khả năng thích ứng của nó, một dạng kiểm tra tính di động, là một phần của kiểm tra phi chức năng\n\nTham chiếu: FL-2.2.2 (K2)"
  },
  {
    "n": 14,
    "ref": "Question #14 [FL-2.3.1]",
    "stem": "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a  currency exchange system?",
    "opts": [
      {
        "k": "a",
        "t": "A) The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true"
      },
      {
        "k": "b",
        "t": "B) The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers"
      },
      {
        "k": "c",
        "t": "C) The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system"
      },
      {
        "k": "d",
        "t": "D) The language support option of the currency exchange system was used to enable both English and local language currency transactions"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây có khả năng nhất là nguyên nhân dẫn đến việc kiểm thử bảo trì (maintenance testing) hệ thống trao đổi tiền tệ?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các nhà phát triển báo cáo rằng việc thay đổi hệ thống trao đổi tiền tệ là khó khăn và những tester (kiểm thử viên) đã quyết định kiểm tra xem điều này có đúng không\n  B) Tùy chọn hoàn tiền của hệ thống đổi tiền đã bị xóa vì không phải lúc nào nó cũng hoàn trả đúng số tiền cho khách hàng\n  C) Nhóm linh hoạt đã bắt đầu phát triển câu chuyện của người dùng nhằm bổ sung tính năng khách hàng thân thiết mới vào hệ thống trao đổi tiền tệ\n  D) Tùy chọn hỗ trợ ngôn ngữ của hệ thống trao đổi tiền tệ đã được sử dụng để cho phép giao dịch tiền tệ bằng cả tiếng Anh và tiếng địa phương\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Giả sử rằng người kiểm tra có thể kiểm tra mức độ dễ dàng của việc thay đổi hệ thống trao đổi tiền tệ thì việc đó sẽ được thực hiện bằng kiểm tra khả năng bảo trì thay vì kiểm tra bảo trì, vì vậy đây không phải là yếu tố kích hoạt kiểm tra bảo trì\nb) Đúng. Sửa đổi hệ thống (chẳng hạn như sửa lỗi hoặc nâng cao) là một ví dụ về kích hoạt kiểm tra bảo trì. Việc loại bỏ tùy chọn hoàn tiền của hệ thống trao đổi tiền tệ là một bản sửa lỗi dẫn đến việc kiểm tra bảo trì\nc) Không đúng. Nếu nhóm linh hoạt đã bắt đầu phát triển câu chuyện của người dùng để bổ sung tính năng khách hàng thân thiết mới vào hệ thống trao đổi tiền tệ, thì điều này sẽ dẫn đến việc họ phải kiểm thử tính năng mới và sau đó họ sẽ thực thi kiểm thử hồi quy. Không cần kiểm tra bảo trì trong tình huống này\nđ) Không đúng. Việc cấu hình lại hệ thống trao đổi tiền tệ để hỗ trợ cả giao dịch bằng ngôn ngữ địa phương và tiền tệ bằng tiếng Anh không phải là sửa đổi hệ thống, thay đổi môi trường hoạt động hoặc dừng hệ thống, là ba yếu tố kích hoạt kiểm tra bảo trì\n\nTham chiếu: FL-2.3.1 (K2)"
  },
  {
    "n": 15,
    "ref": "Question #15 [FL-3.1.1]",
    "stem": "Which of the following CANNOT be examined by static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Contract"
      },
      {
        "k": "b",
        "t": "B) Test plan"
      },
      {
        "k": "c",
        "t": "C) Encrypted code"
      },
      {
        "k": "d",
        "t": "D) Test charter"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây KHÔNG THỂ được kiểm tra bằng kiểm thử tĩnh (static testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hợp đồng\n  B) Kế hoạch kiểm tra\n  C) Mã được mã hóa\n  D) Test charter\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Hầu hết các sản phẩm công việc có thể được kiểm tra bằng cách sử dụng một số hình thức kiểm thử tĩnh (static testing) và con người phải hiểu được hợp đồng và do đó có thể được xem xét, đây là một hình thức kiểm thử tĩnh (static testing)\nb) Không đúng. Hầu hết các sản phẩm công việc có thể được kiểm tra bằng cách sử dụng một số hình thức kiểm thử tĩnh (static testing) và kế hoạch kiểm thử (test plan) phải được con người hiểu được và do đó có thể được xem xét, đây là một hình thức kiểm thử tĩnh (static testing)\nc) Đúng. Hầu hết các sản phẩm công việc có thể được kiểm tra bằng cách sử dụng một số hình thức kiểm tra tĩnh; tuy nhiên, nó không phù hợp với các sản phẩm công việc quá phức tạp để con người có thể giải thích và không nên phân tích bằng các công cụ, đồng thời mã được mã hóa quá phức tạp đối với con người và nếu được mã hóa đúng cách thì hầu hết các công cụ sẽ không thể phân tích được\nđ) Không đúng. Hầu hết các sản phẩm công việc có thể được kiểm tra bằng cách sử dụng một số hình thức kiểm thử tĩnh (static testing) và test charter phải được con người hiểu được và do đó có thể được xem xét, đây là một hình thức kiểm thử tĩnh (static testing)\n\nTham chiếu: FL-3.1.1 (K1)"
  },
  {
    "n": 16,
    "ref": "Question #16 [FL-3.1.2]",
    "stem": "Which of the following statements about the value of static testing is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) The defect types found by static testing are different from the defect types that can be found by dynamic testing"
      },
      {
        "k": "b",
        "t": "B) Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types"
      },
      {
        "k": "c",
        "t": "C) Dynamic testing can identify some of the defects that can be found by static testing but not all of them"
      },
      {
        "k": "d",
        "t": "D) Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây về giá trị của kiểm thử tĩnh (static testing) là ĐÚNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các loại lỗi được tìm thấy bằng kiểm thử tĩnh (static testing) khác với các loại lỗi có thể được tìm thấy bằng kiểm thử động (dynamic testing)\n  B) Kiểm thử động có thể phát hiện các loại lỗi có thể tìm thấy bằng kiểm thử tĩnh (static testing) cộng với một số loại lỗi bổ sung\n  C) Kiểm thử động có thể xác định một số lỗi có thể được tìm thấy bằng kiểm thử tĩnh nhưng không phải tất cả chúng\n  D) Kiểm tra tĩnh có thể xác định các loại lỗi có thể được tìm thấy bằng kiểm tra động cũng như một số loại lỗi bổ sung\n\n[GIẢI THÍCH CHI TIẾT]\nMột số loại lỗi chỉ có thể được phát hiện bằng kiểm thử tĩnh (static testing), chẳng hạn như mã không thể truy cập, mẫu thiết kế không được triển khai như mong muốn và lỗi trong các sản phẩm công việc không thể thực thi được. Một số loại lỗi có thể được tìm thấy bằng cả kiểm thử tĩnh (static testing) và kiểm thử động (dynamic testing), chẳng hạn như lỗi lập trình mà người đánh giá có thể phát hiện ra khi xem xét mã và gây ra lỗi có thể quan sát được trong quá trình kiểm thử động. Và một số loại lỗi chỉ có thể được phát hiện bằng kiểm thử động (dynamic testing), chẳng hạn như vấn đề về hiệu suất hoặc vấn đề về bộ nhớ chỉ có thể được quan sát thấy khi thực thi mã hoặc hệ thống.  Như vậy:\na) Không đúng\nb) Không đúng\nc) Đúng\nđ) Không đúng\n\nTham chiếu: FL-3.1.2 (K2)"
  },
  {
    "n": 17,
    "ref": "Question #17 [FL-3.2.2]",
    "stem": "Given the following descriptions of review activities:  1. Detected anomalies are deliberated upon, and determinations are reached  regarding their status, ownership, and any further steps needed  2. Defects are recorded, and any needed updates are addressed prior to the  acceptance of the work product  3. Reviewers employ techniques to come up with suggestions and questions about the  work product and to spot anomalies  4. The objective of the review and its schedule are established to ensure a focused  and efficient review  5. Participants are provided with access to the item being reviewed  Which of the following is the CORRECT sequence in the review process of the activities that  correspond to the descriptions?",
    "opts": [
      {
        "k": "a",
        "t": "A) 4 – 3 – 5 – 2 – 1"
      },
      {
        "k": "b",
        "t": "B) 4 – 5 – 3 – 1 – 2"
      },
      {
        "k": "c",
        "t": "C) 5 – 4 – 1 – 3 – 2"
      },
      {
        "k": "d",
        "t": "D) 5 – 4 – 3 – 2 – 1"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐưa ra các mô tả sau đây về hoạt động đánh giá: 1. Các điểm bất thường được phát hiện sẽ được cân nhắc và đưa ra quyết định về trạng thái, quyền sở hữu và bất kỳ bước nào cần thiết khác 2. Các lỗi được ghi lại và mọi cập nhật cần thiết đều được giải quyết trước khi sản phẩm công việc được chấp nhận 3. Người đánh giá sử dụng các kỹ thuật để đưa ra các đề xuất và câu hỏi về sản phẩm công việc và phát hiện các điểm bất thường 4. Mục tiêu của việc đánh giá và lịch trình của nó được thiết lập để đảm bảo đánh giá tập trung và hiệu quả 5. Người tham gia được cấp quyền truy cập vào mục này đang được xem xét Trình tự nào sau đây là ĐÚNG trong quá trình xem xét các hoạt động tương ứng với mô tả?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 4 – 3 – 5 – 2 – 1\n  B) 4 – 5 – 3 – 1 – 2\n  C) 5 – 4 – 1 – 3 – 2\n  D) 5 – 4 – 3 – 2 – 1\n\n[GIẢI THÍCH CHI TIẾT]\nNăm mô tả được liệt kê và các hoạt động của quá trình xem xét tương ứng là: 1. Phần này mô tả một phần của hoạt động 'trao đổi thông tin và phân tích' 2. Phần này mô tả một phần của hoạt động 'sửa chữa và báo cáo' 3. Phần này mô tả một phần của hoạt động 'xem xét riêng lẻ' 4. Phần này mô tả một phần của hoạt động 'lập kế hoạch' 5. Phần này mô tả một phần của hoạt động 'bắt đầu xem xét' Quy trình xem xét chung từ ISO/IEC 20246, được nêu trong giáo trình, bao gồm các hoạt động theo thứ tự hợp lý sau: • Lập kế hoạch (4) • Bắt đầu xem xét (5) • Đánh giá cá nhân (3) • Trao đổi thông tin và phân tích (1) • Khắc phục và báo cáo (2) Như vậy:\na) Không đúng\nb) Đúng. Trình tự các hoạt động đúng là: 4 – 5 – 3 – 1 – 2\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-3.2.2 (K2)"
  },
  {
    "n": 18,
    "ref": "Question #18 [FL-3.2.3]",
    "stem": "Which participant in the review process is responsible for ensuring that the review meetings run  effectively and that everyone at the meetings can voice their opinions freely?",
    "opts": [
      {
        "k": "a",
        "t": "A) Manager"
      },
      {
        "k": "b",
        "t": "B) Moderator"
      },
      {
        "k": "c",
        "t": "C) Chairperson"
      },
      {
        "k": "d",
        "t": "D) Review Leader"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNgười tham gia quá trình đánh giá nào chịu trách nhiệm đảm bảo rằng các cuộc họp đánh giá diễn ra hiệu quả và mọi người tại cuộc họp có thể tự do phát biểu ý kiến ​​của mình?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người quản lý\n  B) Người điều hành\n  C) Chủ tịch\n  D) Trưởng nhóm đánh giá\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Người quản lý chịu trách nhiệm quyết định những gì cần được xem xét và phân bổ các nguồn lực, chẳng hạn như nhân viên và thời gian, để xem xét.\nb) Đúng. Người điều hành (hoặc người điều phối) chịu trách nhiệm đảm bảo rằng các cuộc họp đánh giá diễn ra hiệu quả, bao gồm quản lý thời gian, hòa giải các cuộc thảo luận và tạo ra một môi trường an toàn nơi mọi người có thể tự do bày tỏ ý kiến của mình.\nc) Không đúng. Chủ tịch không có vai trò được công nhận trong các cuộc đánh giá\nđ) Không đúng. Người đứng đầu đánh giá chịu trách nhiệm giám sát quá trình đánh giá, chẳng hạn như lựa chọn các thành viên trong nhóm đánh giá, lên lịch các cuộc họp đánh giá và đảm bảo rằng việc đánh giá được hoàn thành thành công.\n\nTham chiếu: FL-3.2.3 (K1)"
  },
  {
    "n": 19,
    "ref": "Question #19 [FL-4.1.1]",
    "stem": "You perform system testing of an e-commerce web application and are provided with the following  requirement:  REQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5%  discount on subsequent purchases. Otherwise, the customer does not receive a  discount.  Which test techniques will be MOST helpful in designing test cases based on this requirement?",
    "opts": [
      {
        "k": "a",
        "t": "A) White-box test techniques"
      },
      {
        "k": "b",
        "t": "B) Black-box test techniques"
      },
      {
        "k": "c",
        "t": "C) Experience-based test techniques"
      },
      {
        "k": "d",
        "t": "D) Risk-based test techniques"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn thực hiện kiểm tra hệ thống của một ứng dụng web thương mại điện tử và được cung cấp yêu cầu sau: REQ 05-017. Nếu tổng chi phí mua hàng vượt quá 100 USD, khách hàng sẽ được giảm giá 5% cho những lần mua hàng tiếp theo. Nếu không, khách hàng sẽ không được giảm giá.  Kỹ thuật kiểm tra nào sẽ hữu ích NHẤT trong việc thiết kế các trường hợp kiểm thử dựa trên yêu cầu này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kỹ thuật kiểm thử hộp trắng\n  B) Kỹ thuật kiểm thử hộp đen\n  C) Kỹ thuật kiểm tra dựa trên kinh nghiệm\n  D) Kỹ thuật kiểm tra dựa trên rủi ro\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Tài liệu không đề cập đến cấu trúc bên trong của test object (đối tượng kiểm thử) nhưng chỉ định hành vi mong muốn của test object (đối tượng kiểm thử). Vì vậy, kỹ thuật kiểm thử hộp trắng sẽ không hữu ích trong việc thiết kế các ca kiểm thử.\nb) Đúng. Tài liệu là một yêu cầu xác định hành vi mong muốn của test object (đối tượng kiểm thử). Do đó, các kỹ thuật kiểm tra phù hợp nhất trong trường hợp này là các kỹ thuật kiểm tra hộp đen (ví dụ: Phân tích giá trị biên hoặc Kiểm tra bảng quyết định)\nc) Không đúng. Mặc dù các kỹ thuật kiểm thử dựa trên kinh nghiệm có thể được sử dụng để thiết kế các ca kiểm thử dựa trên tài liệu này, nhưng các kỹ thuật kiểm thử hộp đen sẽ phù hợp hơn. Tài liệu mô tả một quy tắc kinh doanh chính xác và ngoài ra, từ ngữ như \"vượt quá 100 USD\" gợi ý sự tồn tại của các ranh giới phân vùng tương đương quan trọng cần được kiểm tra bằng cách sử dụng các kỹ thuật kiểm tra hộp đen như Phân tích giá trị biên\nđ) Không đúng. Kỹ thuật kiểm tra dựa trên rủi ro không phải là loại kỹ thuật kiểm tra được công nhận\n\nTham chiếu: FL-4.1.1 (K2)"
  },
  {
    "n": 20,
    "ref": "Question #20 [FL-4.2.1]",
    "stem": "The system for selling cinema tickets calculates the discount type based on the client’s birth year  (BY) and on the current year (CY) as follows:  Let D be the difference between CY and BY, that is, D = CY – BY  •  If D < 0   then print the error message “birth year cannot be greater than  current year”  •  If 0 ≤ D < 18   then apply the student discount  •  If 18 ≤ D < 65   then apply no discount  •  If D ≥ 65   then apply the pensioner discount  Your test suite already contains two test cases:  •  BY = 1990,   CY = 2020,   expected result: no discount  •  BY = 2030,   CY = 2029,   expected result: print the error message  Which of the following test data sets should be added to achieve full valid equivalence partitioning  coverage for the discount type?",
    "opts": [
      {
        "k": "a",
        "t": "A) BY = 2001, CY = 2065"
      },
      {
        "k": "b",
        "t": "B) BY = 1900, CY = 1965"
      },
      {
        "k": "c",
        "t": "C) BY = 1965, CY = 1900"
      },
      {
        "k": "d",
        "t": "D) BY = 2011, CY = 2029"
      },
      {
        "k": "e",
        "t": "E) BY = 2000, CY = 2000"
      }
    ],
    "ans": [
      "b",
      "e"
    ],
    "multi": true,
    "exp": "[DỊCH CÂU HỎI]\nHệ thống bán vé xem phim tính loại giảm giá dựa trên năm sinh của khách hàng (BY) và năm hiện tại (CY) như sau: Gọi D là chênh lệch giữa CY và BY, tức là D = CY – BY • Nếu D < 0 thì in ra thông báo lỗi “năm sinh không được lớn hơn năm hiện tại” • Nếu 0 ≤ D < 18 thì áp dụng giảm giá cho sinh viên • Nếu 18 ≤ D < 65 thì áp dụng không giảm giá • Nếu D ≥ 65 thì áp dụng giảm giá giảm giá dành cho người hưu trí test suite (bộ kiểm thử) của bạn đã chứa hai test case (ca kiểm thử): • BY = 1990, CY = 2020, kết quả mong đợi: không giảm giá • BY = 2030, CY = 2029, kết quả mong đợi: in thông báo lỗi Bộ dữ liệu kiểm thử nào sau đây nên được thêm vào để đạt được phạm vi phân vùng tương đương hợp lệ đầy đủ cho loại giảm giá?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) BY = 2001, CY = 2065\n  B) BY = 1900, CY = 1965\n  C) BY = 1965, CY = 1900\n  D) BY = 2011, CY = 2029\n  E) BY = 2000, CY = 2000\n\n[GIẢI THÍCH CHI TIẾT]\nCó hai phân vùng tương đương chưa được đề cập, tương ứng với “giảm giá cho sinh viên” và “giảm giá cho người nghỉ hưu”.\na) Không đúng. CY – BY = 64, do đó các đầu vào này tương ứng với phân vùng “không giảm giá” đã được bảo hiểm\nb) Đúng. CY – BY = 65, do đó các đầu vào này tương ứng với một phân vùng chưa được chi trả (“giảm giá cho người nghỉ hưu”)\nc) Không đúng. CY – BY = –65, do đó các đầu vào này tương ứng với phân vùng “thông báo lỗi” đã được bảo vệ\nđ) Không đúng. CY – BY = 18, do đó các đầu vào này tương ứng với phân vùng “không giảm giá” đã được bảo hiểm\nđ) Đúng. CY – BY = 0, do đó các đầu vào này tương ứng với một phân vùng chưa được bao phủ (“giảm giá cho sinh viên”)\n\nTham chiếu: FL-4.2.1 (K3)"
  },
  {
    "n": 21,
    "ref": "Question #21 [FL-4.2.2]",
    "stem": "You are testing a temperature control system for a horticultural cold storage facility. The system  receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and  2 degrees inclusive, the system displays the message “temperature OK”. For lower temperatures,  the system displays the message \"temperature too low\" and for higher temperatures it displays the  message “temperature too high”.  Using two-value boundary value analysis, which of the following sets of test inputs provides the  highest level of boundary value coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) –1, 3"
      },
      {
        "k": "b",
        "t": "B) 0, 2"
      },
      {
        "k": "c",
        "t": "C) –1, 0, 2, 3"
      },
      {
        "k": "d",
        "t": "D) –2, 0, 2, 4"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử hệ thống (system testing) kiểm soát nhiệt độ cho cơ sở bảo quản lạnh làm vườn. Hệ thống nhận nhiệt độ (theo độ C) làm đầu vào. Nếu nhiệt độ nằm trong khoảng từ 0 đến 2 độ, hệ thống sẽ hiển thị thông báo “nhiệt độ OK”. Đối với nhiệt độ thấp hơn, hệ thống hiển thị thông báo “nhiệt độ quá thấp” và đối với nhiệt độ cao hơn, hệ thống hiển thị thông báo “nhiệt độ quá cao”.  Bằng cách sử dụng phân tích giá trị biên hai giá trị, bộ đầu vào kiểm thử nào sau đây cung cấp mức độ bao phủ giá trị biên cao nhất?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) –1, 3\n  B) 0, 2\n  C) –1, 0, 2, 3\n  D) –2, 0, 2, 4\n\n[GIẢI THÍCH CHI TIẾT]\nCó ba phân vùng tương đương: {…, –2, –1}, {0, 1, 2}, {3, 4, …}.  Đối với BVA 2 giá trị, tất cả các giá trị biên cho tất cả các phân vùng tương đương phải được bao phủ.  Các giá trị biên là –1 (đối với phân vùng “nhiệt độ quá thấp”), 0, 2 (đối với phân vùng “nhiệt độ OK”) và 3 (đối với phân vùng “nhiệt độ quá cao”).  Như vậy:\na) Không đúng\nb) Không đúng\nc) Đúng. Phương án đúng là: –1, 0, 2, 3\nđ) Không đúng\n\nTham chiếu: FL-4.2.2 (K3)"
  },
  {
    "n": 22,
    "ref": "Question #22 [FL-4.2.3]",
    "stem": "You are designing test cases based on the following decision table.    R1  R2  R3  R4  R5  R6  R7  C1: Age  0-18  19-65  19-65  >65  0-18  19-65  >65  C2: Experience  -  0-4  >4  -  -  -  -  C3: Registered?  NO  NO  NO  NO  YES  YES  YES  Category  A  A  B  B  B  D  C    So far you have designed the following test cases:  •  TC1: 19-year-old, unregistered man with no experience;  expected result: category A  •  TC2: 65-year-old, unregistered woman with 5 years of experience;  expected result: category B  •  TC3: 66-year-old, registered man with no experience;  expected result: category C  •  TC4: 65-year-old, registered woman with 4 years of experience;  expected result: category D  Which of the following test cases, when added to the existing set of test cases, will increase the  decision table coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 66-year-old, unregistered man with no experience; expected result: category B"
      },
      {
        "k": "b",
        "t": "B) 55-year-old, unregistered woman with 2 years of experience; expected result: category A"
      },
      {
        "k": "c",
        "t": "C) 19-year-old, registered woman with 5 years of experience; expected result: category D"
      },
      {
        "k": "d",
        "t": "D) No additional test case can increase the already achieved decision table coverage"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang thiết kế các test case (ca kiểm thử) dựa trên bảng quyết định sau.    R1 R2 R3 R4 R5 R6 R7 C1: Tuổi 0-18 19-65 19-65 >65 0-18 19-65 >65 C2: Kinh nghiệm - 0-4 >4 - - - - C3: Đã đăng ký?  KHÔNG KHÔNG KHÔNG KHÔNG CÓ CÓ CÓ Loại A B B B D C Cho đến nay bạn đã thiết kế các test case (ca kiểm thử) sau: • TC1: 19 tuổi, nam chưa đăng ký và không có kinh nghiệm;  kết quả mong đợi: loại A • TC2: 65 tuổi, phụ nữ chưa đăng ký, 5 năm kinh nghiệm;  kết quả mong đợi: loại B • TC3: 66 tuổi, đăng ký, không có kinh nghiệm;  kết quả mong đợi: loại C • TC4: 65 tuổi, nữ đăng ký, 4 năm kinh nghiệm;  kết quả mong đợi: loại D Trường hợp kiểm thử nào sau đây, khi được thêm vào tập hợp các trường hợp kiểm thử hiện có, sẽ làm tăng phạm vi bao phủ của bảng quyết định?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người đàn ông 66 tuổi, chưa đăng ký, không có kinh nghiệm; kết quả mong đợi: loại B\n  B) Nữ 55 tuổi, chưa đăng ký, có 2 năm kinh nghiệm; kết quả mong đợi: loại A\n  C) 19 tuổi, nữ đã đăng ký và 5 năm kinh nghiệm; kết quả mong đợi: loại D\n  D) Không có test case (ca kiểm thử) bổ sung nào có thể làm tăng phạm vi bao phủ của bảng quyết định đã đạt được\n\n[GIẢI THÍCH CHI TIẾT]\nCác test case (ca kiểm thử) TC1, TC2, TC3 và TC4 lần lượt bao gồm các quy tắc R2, R3, R7 và R6 trong bảng quyết định.\na) Đúng. Các điều kiện “66 tuổi”, “chưa đăng ký” và “không có kinh nghiệm” khớp với quy tắc R4, không nằm trong các test case (ca kiểm thử) hiện có, vì vậy sau khi thêm test case (ca kiểm thử) này, phạm vi bao phủ của bảng quyết định sẽ tăng lên\nb) Không đúng. Các điều kiện “55 tuổi”, “chưa đăng ký” và “2 năm kinh nghiệm” phù hợp với quy tắc R2, đã được TC1 đề cập. Vì vậy, việc thêm test case (ca kiểm thử) này sẽ không làm tăng phạm vi bao phủ\nc) Không đúng. Các điều kiện “19 tuổi”, “đã đăng ký” và “5 năm kinh nghiệm” phù hợp với quy tắc R6, đã được TC4 "
  },
  {
    "n": 23,
    "ref": "Question #23 [FL-4.2.4]",
    "stem": "You are applying state transition testing to the hotel room reservation system modeled by the  following state transition table, with 4 states and 5 different events:    Events  State  Available  NotAvailable  ChangeRoom  Cancel  Pay  S1: Requesting  S2  S3        S2: Confirmed      S1  S4  S4  S3: Waiting list  S2      S4    S4: End            Assuming all test cases start in the ‘Requesting’ state, which of the following test cases,  represented as sequences of events, achieves the highest valid transitions coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) NotAvailable, Available, ChangeRoom, NotAvailable, Cancel"
      },
      {
        "k": "b",
        "t": "B) Available, ChangeRoom, NotAvailable, Available, Pay"
      },
      {
        "k": "c",
        "t": "C) Available, ChangeRoom, Available, ChangeRoom, NotAvailable"
      },
      {
        "k": "d",
        "t": "D) NotAvailable, Cancel, ChangeRoom, Available, Pay"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang áp dụng kiểm thử chuyển đổi trạng thái cho hệ thống đặt phòng khách sạn được mô hình hóa theo bảng chuyển đổi trạng thái sau, với 4 trạng thái và 5 sự kiện khác nhau: Sự kiện Trạng thái có sẵn Không có sẵn Thay đổi phòng Hủy thanh toán S1: Yêu cầu S2 S3 S2: ​​Đã xác nhận S1 S4 S4 S3: Danh sách chờ S2 S4 S4: Kết thúc Giả sử tất cả các test case (ca kiểm thử) bắt đầu ở trạng thái 'Đang yêu cầu', test case (ca kiểm thử) nào sau đây, được biểu thị dưới dạng chuỗi sự kiện, đạt được phạm vi chuyển đổi hợp lệ cao nhất?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Không có sẵn, Có sẵn, Thay đổi phòng, Không có sẵn, Hủy bỏ\n  B) Có sẵn, Phòng thay đổi, Không có sẵn, Có sẵn, Trả tiền\n  C) Có sẵn, Phòng thay đổi, Có sẵn, Phòng thay đổi, Không có sẵn\n  D) Không có sẵn, Hủy, Đổi phòng, Có sẵn, Thanh toán\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Chuỗi năm sự kiện này bao gồm 4 lần chuyển tiếp hợp lệ khác nhau (cả hai sự kiện “Không có sẵn” đều tương ứng với cùng một lần chuyển đổi giữa S1 và S3). test case (ca kiểm thử) này bao gồm 4 trong số 7 chuyển đổi hợp lệ\nb) Đúng. Chuỗi năm sự kiện này bao gồm 5 lần chuyển tiếp khác nhau (sự kiện “Có sẵn” đầu tiên tương ứng với quá trình chuyển đổi giữa S1 và S2 và sự kiện “Có sẵn” thứ hai tương ứng với quá trình chuyển đổi giữa S3 và S2, do đó, hai quá trình chuyển đổi khác nhau sẽ được đề cập). test case (ca kiểm thử) này bao gồm 5 trong số 7 chuyển đổi hợp lệ và đạt được phạm vi chuyển đổi hợp lệ cao nhất\nc) Không đúng. Chuỗi năm sự kiện này bao gồm 3 lần chuyển tiếp khác nhau (cả hai sự kiện “Có sẵn” đều tương ứng với cùng một quá trình chuyển đổi từ S1 sang S2; cả hai sự kiện “ChangeRoom” đều tương ứng với cùng một quá trình chuyển đổi từ S2 sang S1). test case (ca kiểm thử) này bao gồm 3 trong số 7 lần chuyển đổi hợp lệ\nđ) Không đúng. Chuỗi năm sự kiện này không đại diện cho một test cas"
  },
  {
    "n": 24,
    "ref": "Question #24 [FL-4.3.1]",
    "stem": "Your test suite S for a program P achieves 100% statement coverage. It consists of three test  cases, each of which achieves 50% statement coverage.  Which of the following statements is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Executing S will cause all possible failures in P"
      },
      {
        "k": "b",
        "t": "B) S achieves 100% branch coverage for P"
      },
      {
        "k": "c",
        "t": "C) Every executable statement in P containing a defect has been run at least once during the execution of S"
      },
      {
        "k": "d",
        "t": "D) After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTest suite (bộ kiểm thử) S của bạn cho chương trình P đạt được mức độ phủ câu lệnh (statement coverage) 100%. Nó bao gồm ba test case (ca kiểm thử), mỗi trường hợp đạt được độ phủ câu lệnh (statement coverage) 50%.  Phát biểu nào sau đây là ĐÚNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Việc thực thi S sẽ gây ra mọi lỗi có thể xảy ra trong P\n  B) S đạt được độ bao phủ 100% chi nhánh cho P\n  C) Mọi câu lệnh thực thi trong P có chứa lỗi đã được chạy ít nhất một lần trong quá trình thực thi S\n  D) Sau khi loại bỏ một test case (ca kiểm thử) khỏi S, hai test case (ca kiểm thử) còn lại sẽ vẫn đạt được độ phủ câu lệnh (statement coverage) 100%.\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Một câu lệnh có lỗi khi được thực thi không nhất thiết gây ra lỗi. Ví dụ: câu lệnh x := y / z sẽ chỉ gây ra lỗi khi z bằng 0\nb) Không đúng. Bảo hiểm tuyên bố 100% không đảm bảo bảo hiểm 100% chi nhánh. Ví dụ: một test case (ca kiểm thử) có x=0 cho mã 1. IF (x=0) THEN 2. A;  3. ENDIF đạt được phạm vi bao phủ 100% câu lệnh nhưng không bao phủ nhánh từ 1 đến 3\nc) Đúng. Mức độ phủ câu lệnh (statement coverage) 100% có nghĩa là mỗi câu lệnh thực thi được thực thi ít nhất một lần\nđ) Không đúng. Trường hợp kiểm thử bị loại bỏ có thể cung cấp phạm vi bao phủ của một số câu lệnh không được bao phủ bởi một trong hai trường hợp kiểm thử còn lại, trong trường hợp đó, hai trường hợp kiểm thử còn lại cùng nhau sẽ không đạt được phạm vi bao phủ 100% câu lệnh\n\nTham chiếu: FL-4.3.1 (K2)"
  },
  {
    "n": 25,
    "ref": "Question #25 [FL-4.3.3]",
    "stem": "Why does white-box testing facilitate defect detection even when the software specification is  vague, outdated or incomplete?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases are designed based on the structure of the test object rather than the specification"
      },
      {
        "k": "b",
        "t": "B) For each white-box test technique the coverage can be well-defined and easily measured"
      },
      {
        "k": "c",
        "t": "C) White-box test techniques are very well designed to detect omissions in the requirements"
      },
      {
        "k": "d",
        "t": "D) White-box test techniques can be used in both static testing and dynamic testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTại sao kiểm thử hộp trắng tạo điều kiện thuận lợi cho việc phát hiện lỗi ngay cả khi đặc tả phần mềm còn mơ hồ, lỗi thời hoặc chưa đầy đủ?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các ca kiểm thử được thiết kế dựa trên cấu trúc của đối tượng kiểm thử hơn là đặc tả\n  B) Đối với mỗi kỹ thuật kiểm thử hộp trắng, phạm vi bao phủ có thể được xác định rõ ràng và dễ dàng đo lường\n  C) Kỹ thuật kiểm thử hộp trắng được thiết kế rất tốt để phát hiện những thiếu sót trong các yêu cầu\n  D) Kỹ thuật kiểm thử hộp trắng có thể được sử dụng trong cả kiểm thử tĩnh và kiểm thử động\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Điểm mạnh cơ bản mà tất cả các kỹ thuật kiểm thử hộp trắng đều có là toàn bộ quá trình triển khai phần mềm đều được tính đến trong quá trình kiểm thử, điều này tạo điều kiện thuận lợi cho việc phát hiện lỗi ngay cả khi đặc tả phần mềm mơ hồ, lỗi thời hoặc không đầy đủ. Điều này có nghĩa là kiểm thử hộp trắng có thể tìm ra các lỗi như một tính năng bổ sung được thêm vào mã (vô tình hoặc cố ý) không được cho là có ở đó mà kiểm thử hộp đen không thể phát hiện được.\nb) Không đúng. Việc phạm vi bảo hiểm có thể được xác định chính xác không phải là lý do chính đáng. Mức độ bao phủ đạt được sẽ có tác động lớn hơn nhiều so với khả năng đo lường mức độ bao phủ\nc) Không đúng. Nếu phần mềm không thực hiện một hoặc nhiều yêu cầu, kiểm thử hộp trắng khó có thể phát hiện ra các lỗi thiếu sót dẫn đến\nđ) Không đúng. Mặc dù điều này đúng nhưng đây không phải là câu trả lời đúng vì không có mối liên hệ nào giữa khả năng được sử dụng trong cả kiểm thử tĩnh (static testing) và kiểm thử động (dynamic testing) với tuyên bố rằng kiểm thử hộp trắng (white-box) tạo điều kiện phát hiện lỗi với thông số kỹ thuật kém.\n\nTham chiếu: FL-4.3.3 (K2)"
  },
  {
    "n": 26,
    "ref": "Question #26 [FL-4.4.1]",
    "stem": "Which of the following is NOT anticipated by the tester while applying error guessing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The developer misunderstood the formula in the user story for calculating the interest"
      },
      {
        "k": "b",
        "t": "B) The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code"
      },
      {
        "k": "c",
        "t": "C) The developer missed the seminar on new compound interest rate legislation"
      },
      {
        "k": "d",
        "t": "D) The accuracy of the interest calculated by the system is not precise enough"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây KHÔNG được người kiểm thử dự đoán khi áp dụng tính năng đoán lỗi?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhà phát triển đã hiểu sai công thức trong user story để tính lãi\n  B) Nhà phát triển đã viết “FA = A*(1+IR^N)” thay vì “FA = A*(1+IR)^N” trong mã nguồn\n  C) Chủ đầu tư bỏ lỡ hội thảo về luật lãi suất kép mới\n  D) Độ chính xác của tiền lãi do hệ thống tính toán chưa đủ chính xác\n\n[GIẢI THÍCH CHI TIẾT]\nĐoán lỗi là dự đoán các lỗi, khiếm khuyết và lỗi dựa trên kiến thức của người kiểm tra.\na) Không đúng. Đây là một ví dụ về việc đoán trước lỗi của nhà phát triển\nb) Không đúng. Đây là một ví dụ về dự đoán lỗi\nc) Đúng. Đây là một ví dụ về nguyên nhân gốc rễ tiềm ẩn của lỗi, không phải là lỗi, khiếm khuyết hay lỗi và người kiểm tra khó có thể dự đoán được\nđ) Không đúng. Đây là một ví dụ về dự đoán lỗi, có lẽ dựa trên kinh nghiệm của các hệ thống trước đó trong miền ứng dụng này\n\nTham chiếu: FL-4.4.1 (K2)"
  },
  {
    "n": 27,
    "ref": "Question #27 [FL-4.4.2]",
    "stem": "Which of the following is true about exploratory testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases are designed before the exploratory testing session starts"
      },
      {
        "k": "b",
        "t": "B) The tester can perform test execution, but cannot perform test design"
      },
      {
        "k": "c",
        "t": "C) Exploratory testing results are good predictors of the number of remaining defects"
      },
      {
        "k": "d",
        "t": "D) During exploratory testing the tester may use black-box test techniques"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây đúng về kiểm thử thăm dò (exploratory testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các test case (ca kiểm thử) được thiết kế trước khi phiên kiểm thử khám phá bắt đầu\n  B) Người kiểm tra có thể thực hiện kiểm thử nhưng không thể thực hiện thiết kế kiểm thử\n  C) Kết quả kiểm thử thăm dò (exploratory testing) là những yếu tố dự báo tốt về số lượng lỗi còn lại\n  D) Trong quá trình kiểm thử thăm dò, người kiểm thử có thể sử dụng các kỹ thuật kiểm thử hộp đen\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Trong kiểm thử thăm dò (exploratory testing), các test case (ca kiểm thử) thường được tạo trong phiên kiểm thử thăm dò (exploratory testing), cùng với việc phân tích kiểm thử, triển khai kiểm thử và thực thi kiểm thử.\nb) Không đúng. Trong kiểm thử thăm dò (exploratory testing), các bài kiểm thử được thiết kế, thực hiện và đánh giá đồng thời trong khi tester (kiểm thử viên) tìm hiểu về test object (đối tượng kiểm thử).\nc) Không đúng. Kết quả kiểm thử thăm dò (exploratory testing) phụ thuộc rất nhiều vào kinh nghiệm của tester (kiểm thử viên). Vì vậy, ngay cả khi kết quả kiểm thử của kiểm thử thăm dò có thể được sử dụng như một công cụ dự đoán rủi ro và được sử dụng để đánh giá liệu sẽ có ít hay nhiều lỗi hơn so với phiên kiểm thử thăm dò trước đó, chúng không phải là một ví dụ điển hình về các mô hình dự đoán lỗi đáng tin cậy có thể dự đoán số lượng lỗi còn lại.\nđ) Đúng. Trong quá trình kiểm thử thăm dò, tester (kiểm thử viên) có thể sử dụng bất kỳ kỹ thuật kiểm thử (test technique) nào mà họ thấy hữu ích.\n\nTham chiếu: FL-4.4.2 (K2)"
  },
  {
    "n": 28,
    "ref": "Question #28 [FL-4.5.1]",
    "stem": "Which collaborative user story writing practice enables the team to achieve a collective  understanding of what needs to be delivered?",
    "opts": [
      {
        "k": "a",
        "t": "A) Planning poker, so that a team can achieve consensus on the effort needed to implement a user story"
      },
      {
        "k": "b",
        "t": "B) Reviews, so that a team can detect inconsistencies and contradictions in a user story"
      },
      {
        "k": "c",
        "t": "C) Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation"
      },
      {
        "k": "d",
        "t": "D) Conversation, so that team members can understand how the software will be used"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nPhương pháp viết câu chuyện mang tính cộng tác nào của người dùng cho phép nhóm đạt được sự hiểu biết chung về những gì cần được chuyển tải?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Lập kế hoạch chơi bài poker để nhóm có thể đạt được sự đồng thuận về nỗ lực cần thiết để triển khai câu chuyện của người dùng\n  B) Đánh giá để nhóm có thể phát hiện sự mâu thuẫn và mâu thuẫn trong câu chuyện của người dùng\n  C) Lập kế hoạch lặp lại để có thể ưu tiên triển khai các câu chuyện của người dùng có giá trị kinh doanh cao nhất cho khách hàng\n  D) Cuộc trò chuyện để các thành viên trong nhóm có thể hiểu cách sử dụng phần mềm\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Lập kế hoạch poker có thể ước tính nỗ lực cho một câu chuyện của người dùng đã được viết sẵn. Nó không giúp ích gì trong việc hiểu những gì cần được chuyển giao\nb) Không đúng. Đánh giá không phải là một hoạt động viết truyện mang tính cộng tác của người dùng\nc) Không đúng. Lập kế hoạch lặp lại là một hoạt động liên quan đến dự án, được sử dụng để lập kế hoạch cho công việc chứ không phải để hiểu những gì cần phải hoàn thành\nđ) Đúng. Cuộc trò chuyện giải thích cách sử dụng phần mềm và thường cho phép nhóm xác định các tiêu chí chấp nhận có ý nghĩa, từ đó đạt được tầm nhìn chung về những gì cần được chuyển giao\n\nTham chiếu: FL-4.5.1 (K2)"
  },
  {
    "n": 29,
    "ref": "Question #29 [FL-4.5.3]",
    "stem": "You have just started designing test cases for the following user story.  As a customer,  I want to be able to filter search results by price range, so that I can find products within my  budget more easily.  Acceptance criteria:  1. The filter should work for all versions of the application from version 3.0  upwards  2. The filter should allow the customer to set a price range with a minimum  and a maximum price  3. The search results should update dynamically as the customer adjusts the  price range filter  In all test cases the precondition is as follows: there are only two products available, products A  and B. Product A costs $100 and product B costs $110.  Which of the following is the BEST example of a test case for this user story?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B"
      },
      {
        "k": "b",
        "t": "B) Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the default maximum price changes to $120"
      },
      {
        "k": "c",
        "t": "C) Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate"
      },
      {
        "k": "d",
        "t": "D) Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn vừa bắt đầu thiết kế các test case (ca kiểm thử) cho câu chuyện của người dùng sau.  Là một khách hàng, tôi muốn có thể lọc kết quả tìm kiếm theo phạm vi giá để có thể tìm thấy sản phẩm trong phạm vi ngân sách của mình dễ dàng hơn.  Tiêu chí chấp nhận: 1. Bộ lọc phải hoạt động với tất cả các phiên bản của ứng dụng từ phiên bản 3.0 trở lên 2. Bộ lọc phải cho phép khách hàng đặt phạm vi giá với mức giá tối thiểu và tối đa 3. Kết quả tìm kiếm sẽ cập nhật động khi khách hàng điều chỉnh bộ lọc phạm vi giá Trong tất cả các test case (ca kiểm thử), điều kiện tiên quyết như sau: chỉ có hai sản phẩm có sẵn, sản phẩm A và B. Sản phẩm A có giá 100 USD và sản phẩm B có giá 110 USD.  Điều nào sau đây là ví dụ TỐT NHẤT về test case (ca kiểm thử) cho câu chuyện của người dùng này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhập trang web và đặt bộ lọc để hiển thị giá từ $90 đến $100. Kết quả mong đợi: kết quả chỉ hiển thị sản phẩm A. Đặt giá tối đa là $110. Kết quả mong đợi: kết quả hiện bao gồm cả sản phẩm A và B\n  B) Nhập trang web. Kết quả mong đợi: giá tối thiểu và tối đa mặc định lần lượt là 100 USD và 110 USD. Thêm sản phẩm C vào kho, với giá $120. Làm mới trang web của khách hàng. Kết quả dự kiến: giá tối đa mặc định thay đổi thành $120\n  C) Nhập trang web và đặt bộ lọc để hiển thị giá từ $90 đến $115. Kết quả mong đợi: kết quả hiển thị cả sản phẩm A và B. Đổi tiền từ USD sang EUR. Kết quả mong đợi: phạm vi bộ lọc thay đổi chính xác thành giá trị EUR, theo tỷ giá hối đoái hiện tại\n  D) Nhập trang web với ba trình duyệt khác nhau: Edge, Chrome và Opera. Trong mỗi trình duyệt, hãy đặt bộ lọc trong khoảng từ $90 đến $110. Kết quả mong đợi: kết quả bao gồm cả sản phẩm A và B và bố cục kết quả giống nhau trên cả ba trình duyệt\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. test case (ca kiểm thử) này liên quan đến tiêu chí chấp nhận 2 và 3, vì ch"
  },
  {
    "n": 30,
    "ref": "Question #30 [FL-5.1.3]",
    "stem": "Which of the following BEST define EXIT criteria in a testing project?",
    "opts": [
      {
        "k": "a",
        "t": "A) Budget is approved"
      },
      {
        "k": "b",
        "t": "B) Budget runs out"
      },
      {
        "k": "c",
        "t": "C) Test basis is available"
      },
      {
        "k": "d",
        "t": "D) Test cases achieved at least 80% statement coverage"
      },
      {
        "k": "e",
        "t": "E) All test analysts are ISTQB certified at the Foundation Level"
      }
    ],
    "ans": [
      "b",
      "d"
    ],
    "multi": true,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây TỐT NHẤT xác định tiêu chí EXIT trong một dự án kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Ngân sách được phê duyệt\n  B) Ngân sách cạn kiệt\n  C) Test basis (cơ sở kiểm thử) có sẵn\n  D) Các test case (ca kiểm thử) đã đạt được mức độ phủ câu lệnh (statement coverage) ít nhất 80%\n  E) Tất cả các nhà phân tích kiểm thử đều được chứng nhận ISTQB ở cấp độ Cơ bản\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Việc phê duyệt ngân sách là một ví dụ về tiêu chí đầu vào. Sẽ thật vô nghĩa nếu phê duyệt ngân sách cho một số hoạt động đã được thực hiện\nb) Đúng. Hết ngân sách có thể được xem là một tiêu chí đầu ra (exit criteria) hợp lệ\nc) Không đúng. Sự sẵn có của các nguồn lực là một ví dụ về tiêu chí đầu vào để kiểm tra d) Đúng. Mức độ bao phủ là thước đo mức độ kỹ lưỡng nên nó là tiêu chí đầu ra (exit criteria) điển hình\nđ) Không đúng. Đây là ví dụ về tiêu chí đầu vào, được kiểm tra trước khi dự án bắt đầu\n\nTham chiếu: FL-5.1.3 (K2)"
  },
  {
    "n": 31,
    "ref": "Question #31 [FL-5.1.4]",
    "stem": "The team wants to estimate the time needed for one tester to execute four test cases for a  software component. The team has gathered the following measures of the effort used to execute  a single test case:  •  Best-case scenario:  1 hour  •  Worst-case scenario:  8 hours  •  Most likely scenario:  3 hours  Given that the three-point estimation technique is being used, what is the final estimate of the time  needed to execute all four test cases?",
    "opts": [
      {
        "k": "a",
        "t": "A) 14 hours"
      },
      {
        "k": "b",
        "t": "B) 3.5 hours"
      },
      {
        "k": "c",
        "t": "C) 16 hours"
      },
      {
        "k": "d",
        "t": "D) 12 hours"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhóm muốn ước tính thời gian cần thiết để một người kiểm thử thực hiện bốn trường hợp kiểm thử cho một thành phần phần mềm. Nhóm đã tập hợp các thước đo sau đây về nỗ lực được sử dụng để thực hiện một test case (ca kiểm thử) duy nhất: • ​​Kịch bản trường hợp tốt nhất: 1 giờ • Trường hợp xấu nhất: 8 giờ • Kịch bản có khả năng xảy ra nhất: 3 giờ Cho rằng kỹ thuật ước tính ba điểm đang được sử dụng, ước tính cuối cùng về thời gian cần thiết để thực hiện cả bốn test case (ca kiểm thử) là bao nhiêu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 14 giờ\n  B) 3,5 giờ\n  C) 16 giờ\n  D) 12 giờ\n\n[GIẢI THÍCH CHI TIẾT]\nSử dụng kỹ thuật ước tính ba điểm, ước tính cuối cùng (E) được tính như sau: E = (a + 4*m + b) / 6, trong đó a là ước tính lạc quan nhất, m là ước tính có khả năng xảy ra nhất và b là ước tính bi quan nhất.  Như vậy:\na) Đúng. Trong trường hợp này, ước tính để thực hiện một trường hợp kiểm thử duy nhất là: E = (1h + 4*3h + 8h) / 6 = 3,5 giờ Vì vậy, tổng thời gian cần thiết để người kiểm thử thực hiện 4 trường hợp kiểm thử là: 3,5h * 4 = 14 giờ\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-5.1.4 (K3)"
  },
  {
    "n": 32,
    "ref": "Question #32 [FL-5.1.5]",
    "stem": "The table shows the traceability matrix from test cases to requirements. “X” means that a given test  case covers the corresponding requirement.    Req1  Req2  Req3  Req4  Req5  Req6  Req7  TC1  X    X  X      X  TC2  X        X    X  TC3          X  X    TC4    X            You want to prioritize the test cases following the additional coverage prioritization technique.  You execute all four test cases.  Which test case should be executed as the LAST one?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) TC1"
      },
      {
        "k": "b",
        "t": "B) TC2"
      },
      {
        "k": "c",
        "t": "C) TC3"
      },
      {
        "k": "d",
        "t": "D) TC4"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBảng hiển thị ma trận truy xuất nguồn gốc từ các test case (ca kiểm thử) đến các yêu cầu. “X” có nghĩa là một test case (ca kiểm thử) nhất định đáp ứng được yêu cầu tương ứng.    Req1 Req2 Req3 Req4 Req5 Req6 Req7 TC1 X X X X TC2 X X X TC3 X X TC4 X Bạn muốn ưu tiên các test case (ca kiểm thử) theo kỹ thuật ưu tiên vùng phủ sóng bổ sung.  Bạn thực hiện tất cả bốn test case (ca kiểm thử).  test case (ca kiểm thử) nào nên được thực hiện là trường hợp CUỐI CÙNG?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) TC1\n  B) TC2\n  C) TC3\n  D) TC4\n\n[GIẢI THÍCH CHI TIẾT]\nTC1 đạt được độ bao phủ cao nhất (4/7 – Req1, Req3, Req4 và Req7), do đó cần được thực thi trước.  Req2, Req5 và Req6 vẫn chưa được đề cập.  test case (ca kiểm thử) tiếp theo đạt được mức độ bao phủ bổ sung cao nhất trong số các yêu cầu còn lại là TC3, bao gồm 2 trong số 3 yêu cầu này (Req5 và Req6). Vì vậy, TC3 nên được thực thi như cái thứ hai.  Hiện tại, yêu cầu duy nhất vẫn chưa được đáp ứng là Req2, được TC4 đáp ứng. Do đó, TC4 nên được thực thi như test case (ca kiểm thử) thứ ba.  Vì vậy, test case cuối cùng được thực thi sẽ là TC2.  Như vậy:\na) Không đúng\nb) Đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-5.1.5 (K3)"
  },
  {
    "n": 33,
    "ref": "Question #33 [FL-5.1.7]",
    "stem": "How can the testing quadrants be beneficial for testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing"
      },
      {
        "k": "b",
        "t": "B) They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)"
      },
      {
        "k": "c",
        "t": "C) They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others"
      },
      {
        "k": "d",
        "t": "D) They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLàm thế nào các tứ phân vị kiểm thử (testing quadrants) có thể mang lại lợi ích cho việc kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Chúng giúp lập kế hoạch kiểm thử bằng cách chia quá trình kiểm thử thành 4 giai đoạn, tương ứng với 4 cấp độ kiểm thử cơ bản: kiểm thử thành phần, kiểm thử tích hợp, kiểm thử hệ thống và kiểm thử chấp nhận.\n  B) Chúng giúp đánh giá mức độ bao phủ cấp cao (ví dụ: phạm vi yêu cầu) dựa trên mức độ bao phủ cấp thấp (ví dụ: phạm vi mã)\n  C) Chúng giúp các bên liên quan phi kỹ thuật hiểu được các loại kiểm thử (test type) khác nhau và một số loại kiểm thử (test type) phù hợp hơn với các cấp độ kiểm thử (test level) nhất định so với các loại kiểm thử (test type) khác.\n  D) Họ giúp các nhóm linh hoạt phát triển chiến lược giao tiếp dựa trên việc phân loại mọi người theo bốn loại tâm lý cơ bản và mô hình hóa mối quan hệ giữa họ\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Các góc phần tư kiểm tra không liên quan gì đến việc mô tả mối quan hệ giữa các cấp độ kiểm tra\nb) Không đúng. Kiểm tra góc phần tư không thể giúp đánh giá bất kỳ loại phạm vi bảo hiểm nào\nc) Đúng. Các tứ phân vị kiểm thử (testing quadrants) cho phép người quản lý và các bên liên quan khác hiểu được mối quan hệ giữa các loại kiểm thử (test type), các hoạt động mà họ hỗ trợ (hỗ trợ nhóm hoặc phê bình sản phẩm) và quan điểm mà họ tập trung vào (đối mặt với doanh nghiệp hoặc công nghệ)\nđ) Không đúng. Kiểm tra góc phần tư không phải là một mô hình tâm lý\n\nTham chiếu: FL-5.1.7 (K2)"
  },
  {
    "n": 34,
    "ref": "Question #34 [FL-5.2.1]",
    "stem": "For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%.  What is the risk impact?",
    "opts": [
      {
        "k": "a",
        "t": "A) $500"
      },
      {
        "k": "b",
        "t": "B) $2,000"
      },
      {
        "k": "c",
        "t": "C) $50,000"
      },
      {
        "k": "d",
        "t": "D) $200"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐối với một rủi ro nhất định, mức rủi ro của nó là 1.000 USD và khả năng rủi ro của nó được ước tính là 50%.  Tác động rủi ro là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) $500\n  B) 2.000 USD\n  C) 50.000 USD\n  D) $200\n\n[GIẢI THÍCH CHI TIẾT]\nĐánh giá rủi ro có thể sử dụng phương pháp định lượng hoặc định tính hoặc kết hợp cả hai. Trong phương pháp định lượng, mức độ rủi ro được tính bằng phép nhân giữa khả năng xảy ra rủi ro và tác động của rủi ro. Vì vậy, Mức độ rủi ro = Khả năng xảy ra rủi ro * Tác động của rủi ro Sau đó, Tác động của rủi ro = Mức độ rủi ro / Khả năng xảy ra rủi ro.  Trong trường hợp của chúng tôi, Tác động rủi ro = 1.000 USD / 50% = 1.000 USD / 0,5 = 2.000 USD.  Như vậy:\na) Không đúng\nb) Đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-5.2.1 (K1)"
  },
  {
    "n": 35,
    "ref": "Question #35 [FL-5.2.2]",
    "stem": "Which of the following are product risks?",
    "opts": [
      {
        "k": "a",
        "t": "A) Scope creep"
      },
      {
        "k": "b",
        "t": "B) Poor architecture"
      },
      {
        "k": "c",
        "t": "C) Cost-cutting"
      },
      {
        "k": "d",
        "t": "D) Poor tool support"
      },
      {
        "k": "e",
        "t": "E) Too long response time"
      }
    ],
    "ans": [
      "b",
      "e"
    ],
    "multi": true,
    "exp": "[DỊCH CÂU HỎI]\nRủi ro nào sau đây là rủi ro về sản phẩm?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phạm vi leo\n  B) Kiến trúc nghèo nàn\n  C) Cắt giảm chi phí\n  D) Hỗ trợ công cụ kém\n  E) Thời gian phản hồi quá dài\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Phạm vi leo thang là một ví dụ về rủi ro dự án liên quan đến các vấn đề kỹ thuật\nb) Đúng. Kiến trúc kém là một ví dụ về rủi ro sản phẩm vì nó đề cập đến đặc tính của sản phẩm\nc) Không đúng. Cắt giảm chi phí là một ví dụ về rủi ro của dự án, liên quan đến các vấn đề của tổ chức\nđ) Không đúng. Hỗ trợ công cụ kém là một ví dụ về rủi ro dự án liên quan đến vấn đề kỹ thuật\nđ) Đúng. Thời gian phản hồi quá dài là một ví dụ về rủi ro sản phẩm vì nó đề cập đến đặc tính của sản phẩm\n\nTham chiếu: FL-5.2.2 (K2)"
  },
  {
    "n": 36,
    "ref": "Question #36 [FL-5.3.2]",
    "stem": "Which of the following is NOT a valid purpose for a test report?",
    "opts": [
      {
        "k": "a",
        "t": "A) Tracking test progress and identifying areas that require further attention"
      },
      {
        "k": "b",
        "t": "B) Providing information on the tests executed, their results, and defects found"
      },
      {
        "k": "c",
        "t": "C) Providing information about each defect, such as the steps to reproduce it"
      },
      {
        "k": "d",
        "t": "D) Providing information on testing planned for the next period"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMục đích nào sau đây KHÔNG phải là mục đích hợp lệ của báo cáo kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Theo dõi tiến độ kiểm tra và xác định các khu vực cần chú ý thêm\n  B) Cung cấp thông tin về các bài kiểm thử được thực hiện, kết quả và các lỗi được tìm thấy\n  C) Cung cấp thông tin về từng lỗi, chẳng hạn như các bước để tái tạo lỗi đó\n  D) Cung cấp thông tin về kế hoạch kiểm tra cho kỳ tiếp theo\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Theo dõi tiến trình kiểm tra và xác định các khu vực cần chú ý hơn nữa là một ví dụ về việc hỗ trợ kiểm soát kiểm tra liên tục. Đây là một trong những mục đích của báo cáo kiểm thử\nb) Không đúng. Cung cấp thông tin về các bài kiểm thử đã thực hiện, kết quả kiểm thử và bất kỳ lỗi nào được tìm thấy là một ví dụ về tóm tắt các hoạt động kiểm thử được thực hiện ở một cấp độ kiểm thử (test level) nhất định. Đây là một trong những mục đích của báo cáo kiểm thử\nc) Đúng. Cung cấp thông tin về lỗi là mục đích của báo cáo lỗi, không phải báo cáo kiểm tra\nđ) Không đúng. Cung cấp thông tin về kế hoạch kiểm thử (test plan) cho kỳ tiếp theo là một trong những mục đích của báo cáo kiểm thử\n\nTham chiếu: FL-5.3.2 (K2)"
  },
  {
    "n": 37,
    "ref": "Question #37 [FL-5.4.1]",
    "stem": "The user reported a software failure. An engineer from the support team asked the user for the  software version number where the failure was observed. Based on the version number, the team  reassembled all the files that made up the release. This later allowed a developer to perform  analysis, find the defect, and fix it.  Which of the following enabled the above activity to be performed by the team?",
    "opts": [
      {
        "k": "a",
        "t": "A) Risk management"
      },
      {
        "k": "b",
        "t": "B) Test monitoring and control"
      },
      {
        "k": "c",
        "t": "C) Whole team approach"
      },
      {
        "k": "d",
        "t": "D) Configuration management"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNgười dùng báo lỗi phần mềm. Một kỹ sư từ nhóm hỗ trợ đã hỏi người dùng số phiên bản phần mềm bị lỗi. Dựa trên số phiên bản, nhóm đã tập hợp lại tất cả các tệp tạo nên bản phát hành. Điều này sau đó cho phép nhà phát triển thực hiện phân tích, tìm ra lỗi và sửa nó.  Điều nào sau đây cho phép nhóm thực hiện hoạt động trên?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Quản lý rủi ro\n  B) Giám sát và kiểm soát kiểm thử\n  C) Cách tiếp cận toàn đội\n  D) Quản lý cấu hình\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Quản lý rủi ro bao gồm phân tích rủi ro và kiểm soát rủi ro. Cả hai hoạt động này đều không hỗ trợ việc tập hợp lại các tệp tạo nên bản phát hành, vì các hoạt động này xử lý rủi ro chứ không phải các mục cấu hình\nb) Không đúng. Giám sát kiểm tra liên quan đến việc thu thập thông tin về kiểm tra. Thông tin này được sử dụng để đánh giá tiến độ kiểm thử và đo lường xem tiêu chí đầu ra hoặc nhiệm vụ kiểm thử liên quan đến tiêu chí đầu ra có được đáp ứng hay không, chẳng hạn như đáp ứng các mục tiêu về phạm vi rủi ro, yêu cầu của sản phẩm hoặc tiêu chí chấp nhận khác. Kiểm soát kiểm tra sử dụng thông tin từ việc giám sát kiểm tra để cung cấp, dưới dạng chỉ thị kiểm soát, hướng dẫn và các hành động khắc phục cần thiết để đạt được hiệu quả và hiệu suất kiểm tra cao nhất. Không có hoạt động nào trong số này liên quan đến việc quản lý các mục cấu hình\nc) Không đúng. Cách tiếp cận của cả nhóm được xây dựng dựa trên kỹ năng của tester (kiểm thử viên) để làm việc hiệu quả trong bối cảnh nhóm và đóng góp tích cực cho các mục tiêu của nhóm. Vì vậy, nó tập trung vào các vấn đề liên quan đến nhóm chứ không phải các mục cấu hình\nđ) Đúng. Quản lý cấu hình cung cấp nguyên tắc để xác định, kiểm soát và theo dõi các sản phẩm công việc. Quản lý cấu hình lưu giữ bản ghi các mục cấu hình đã thay đổi khi tạo đường cơ sở mới. Sử dụng quản lý cấu hình, "
  },
  {
    "n": 38,
    "ref": "Question #38 [FL-5.5.1]",
    "stem": "Consider the following defect report for a Book Lending System.  Defect ID: 001  | Title: Unable to Return a Book  |  Severity: High  | Priority:  |  Environment: Windows 10, Google Chrome  Description: When attempting to return a book using the Book Return feature, the system does  not register the return and the book remains checked out to the user.  Steps to Reproduce:  Login to the Book Lending System as a user who has checked out a book.  Click on the \"Book Return\" button for the book that has been checked out.  System does not register the return and the book remains checked out.  Expected Result: The book should be returned and no longer appear as checked out to the user.  Actual Result: The book remains checked out to the user and is not registered as returned in the  system.  Attachments: [empty list]  Which of the following is MOST likely to help the developer reproduce the failure quickly?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Adding information about which users and which books the failure affects to the “Description” section"
      },
      {
        "k": "b",
        "t": "B) Filling in the missing value for the “Priority” field"
      },
      {
        "k": "c",
        "t": "C) Adding memory dumps and database snapshots taken after each step described in the “Steps to Reproduce” section to the “Attachments” section."
      },
      {
        "k": "d",
        "t": "D) Repeating the same test case for different environments and writing defect reports for each of them separately"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét báo cáo lỗi sau đây của Hệ thống cho mượn sách.  ID lỗi: 001 | Tiêu đề: Không thể trả lại sách |  Mức độ nghiêm trọng: Cao | Ưu tiên: |  Môi trường: Windows 10, Google Chrome Mô tả: Khi cố gắng trả lại sách bằng tính năng Trả sách, hệ thống không đăng ký trả lại và sách vẫn được người dùng kiểm tra.  Các bước để sao chép: Đăng nhập vào Hệ thống cho mượn sách với tư cách là người dùng đã xem sách.  Nhấp vào nút \"Trả sách\" cho cuốn sách đã được kiểm tra.  Hệ thống không đăng ký trả lại và sách vẫn được kiểm tra.  Kết quả mong đợi: Sách sẽ được trả lại và không còn xuất hiện dưới dạng đã được người dùng kiểm tra.  Kết quả thực tế: Sách vẫn được người dùng kiểm tra và chưa được đăng ký trả lại trong hệ thống.  Tệp đính kèm: [danh sách trống] Điều nào sau đây có khả năng giúp nhà phát triển tái tạo lỗi nhanh nhất?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Thêm thông tin về người dùng nào và sách nào bị lỗi ảnh hưởng đến phần “Mô tả”\n  B) Điền giá trị còn thiếu vào trường “Ưu tiên”\n  C) Thêm kết xuất bộ nhớ và ảnh chụp nhanh cơ sở dữ liệu được thực hiện sau mỗi bước được mô tả trong phần “Các bước để tái tạo” vào phần “Tệp đính kèm”.\n  D) Lặp lại cùng một test case (ca kiểm thử) cho các môi trường khác nhau và viết báo cáo lỗi cho từng môi trường riêng biệt\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Việc thêm thông tin này cho phép nhà phát triển sử dụng cùng một dữ liệu đầu vào, do đó có nhiều khả năng họ sẽ có thể tái tạo lỗi nhanh chóng và do đó xác định lỗi nhanh hơn\nb) Không đúng. Việc thêm giá trị Ưu tiên sẽ không giúp tái tạo lỗi\nc) Không đúng. Mặc dù một số thông tin này có thể có giá trị, nhưng việc thêm các kết xuất bộ nhớ và ảnh chụp nhanh cơ sở dữ liệu sau mỗi bước sẽ là quá nhiều vì hầu hết các thành phần tạo tác này sẽ chứa thông tin vô dụng đối với nhà phát triển và khiến báo cáo lỗi khó đọc hơn.  Nó cũng sẽ yêu"
  },
  {
    "n": 39,
    "ref": "Question #39 [FL-6.1.1]",
    "stem": "Given the following test tool categories:  i.  Collaboration tools  ii.  DevOps tools  iii.  Management tools  iv.  Non-functional testing tools   v.  Test design and implementation tools  Tools from which of the categories are MOST likely to facilitate test execution?",
    "opts": [
      {
        "k": "a",
        "t": "A) i, v"
      },
      {
        "k": "b",
        "t": "B) ii, iv"
      },
      {
        "k": "c",
        "t": "C) i, iii, v"
      },
      {
        "k": "d",
        "t": "D) ii, iii, iv"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCho các loại công cụ kiểm tra sau: i.  Công cụ cộng tác ii.  Công cụ DevOpsiii.  Công cụ quản lý iv.  Các công cụ kiểm thử phi chức năng v. Các công cụ thiết kế và triển khai kiểm thử Các công cụ trong danh mục nào có khả năng hỗ trợ thực hiện kiểm thử NHIỀU NHẤT?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tôi, v\n  B) Ii, iv\n  C) Tôi, iii, v\n  D) Ii, iii, iv\n\n[GIẢI THÍCH CHI TIẾT]\nXem xét từng loại công cụ được liệt kê: i.  Công cụ cộng tác – tạo điều kiện giao tiếp. Giao tiếp không bao gồm việc hỗ trợ thực hiện kiểm thử ii. Các công cụ DevOps - hỗ trợ quy trình phân phối DevOps, theo dõi quy trình làm việc, (các) quy trình xây dựng tự động và CI/CD. Quy trình phân phối và CI/CD đều bao gồm việc hỗ trợ thực hiện kiểm thử, chẳng hạn như kiểm thử thành phần cho CI iii. Công cụ quản lý – tăng hiệu quả của quá trình kiểm tra bằng cách hỗ trợ quản lý SDLC, yêu cầu, kiểm tra, lỗi và cấu hình. Việc quản lý các mục này không bao gồm việc tạo điều kiện thuận lợi cho việc thực hiện kiểm thử iv. Các công cụ kiểm tra phi chức năng – cho phép người kiểm tra thực hiện kiểm tra phi chức năng khó hoặc không thể thực hiện thủ công. kiểm thử phi chức năng có thể bao gồm cả kiểm thử tĩnh (static testing) và kiểm thử động (dynamic testing), bao gồm cả việc thực thi kiểm thử v. Các công cụ thiết kế và triển khai kiểm thử – tạo điều kiện thuận lợi cho việc tạo các test case (ca kiểm thử), dữ liệu kiểm thử và quy trình kiểm thử. Việc tạo ra phần mềm kiểm tra này không bao gồm việc hỗ trợ thực hiện kiểm tra. Do đó:\na) Không đúng\nb) Đúng. Cả công cụ DevOps (ii) và công cụ kiểm tra phi chức năng (iv) đều tạo điều kiện thuận lợi cho việc thực hiện kiểm tra\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-6.1.1 (K2)"
  },
  {
    "n": 40,
    "ref": "Question #40 [FL-6.2.1]",
    "stem": "Which of the following is MOST likely to be a risk of test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) The detection of additional high-severity defects"
      },
      {
        "k": "b",
        "t": "B) Providing measures that are too complicated for humans to derive"
      },
      {
        "k": "c",
        "t": "C) Incompatibility with the development platform"
      },
      {
        "k": "d",
        "t": "D) Substantially reduced test execution times"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây có nhiều khả năng là rủi ro nhất của việc tự động hóa kiểm thử (test automation)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Việc phát hiện thêm các lỗi có mức độ nghiêm trọng cao\n  B) Cung cấp các biện pháp quá phức tạp để con người có thể suy ra\n  C) Không tương thích với nền tảng phát triển\n  D) Giảm đáng kể thời gian thực hiện kiểm tra\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Việc phát hiện thêm các lỗi có mức độ nghiêm trọng cao sẽ là một lợi ích của việc kiểm thử tự động hơn là một rủi ro.\nb) Không đúng. Việc cung cấp các biện pháp quá phức tạp để con người có thể tự suy ra thường được coi là lợi ích của tự động hóa kiểm thử (test automation)\nc) Đúng. Nếu tự động hóa kiểm thử (test automation) không tương thích với nền tảng phát triển thì nó sẽ không thể tích hợp chúng và chẳng hạn như chuyển đầu vào kiểm thử đến test object (đối tượng kiểm thử) và nhận kết quả kiểm thử từ test object (đối tượng kiểm thử)\nđ) Không đúng. Giảm đáng kể thời gian thực hiện kiểm thử thường được coi là một lợi ích do tự động kiểm thử mang lại.\n\nTham chiếu: FL-6.2.1 (K1)"
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
