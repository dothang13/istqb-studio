/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ISTQB Sample Exam A (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ISTQB Sample Exam A (40 câu chuẩn)";
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
    "stem": "Which of the following statements describe a valid test objective?",
    "opts": [
      {
        "k": "a",
        "t": "A) To prove that there are no unfixed defects in the system under test"
      },
      {
        "k": "b",
        "t": "B) To prove that there will be no failures after the implementation of the system into production"
      },
      {
        "k": "c",
        "t": "C) To reduce the risk level of the test object and to build confidence in the quality level"
      },
      {
        "k": "d",
        "t": "D) To verify that there are no untested combinations of inputs"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây mô tả một mục tiêu kiểm thử hợp lệ?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Để chứng minh rằng không có lỗi nào chưa được khắc phục trong hệ thống đang được kiểm thử\n  B) Để chứng minh rằng sẽ không có sai sót sau khi triển khai hệ thống vào sản xuất\n  C) Để giảm mức độ rủi ro của test object (đối tượng kiểm thử) và xây dựng niềm tin vào mức chất lượng\n  D) Để xác minh rằng không có sự kết hợp đầu vào nào chưa được kiểm tra\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Không thể chứng minh rằng không còn lỗi nào nữa trong hệ thống đang được kiểm thử. Xem nguyên tắc kiểm tra 1\nb) Không đúng. Xem nguyên tắc kiểm thử 7\nc) Đúng. Kiểm thử tìm ra các khiếm khuyết và thất bại làm giảm mức độ rủi ro, đồng thời mang lại niềm tin cao hơn về mức chất lượng của đối tượng kiểm thử\nđ) Không đúng. Không thể kiểm tra tất cả các kết hợp đầu vào (xem nguyên tắc kiểm tra 2)\n\nTham chiếu: FL-1.1.1 (K1)"
  },
  {
    "n": 2,
    "ref": "Question #2 [FL-1.2.1]",
    "stem": "Which of the following options shows an example of test activities that contribute to success?",
    "opts": [
      {
        "k": "a",
        "t": "A) Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products"
      },
      {
        "k": "b",
        "t": "B) Testers try not to disturb the developers while coding, so that the developers write better code"
      },
      {
        "k": "c",
        "t": "C) Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing"
      },
      {
        "k": "d",
        "t": "D) Certified testers will design much better test cases than non-certified testers"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLựa chọn nào sau đây là ví dụ về các hoạt động kiểm thử góp phần tạo nên thành công?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Việc có người kiểm tra tham gia vào các hoạt động khác nhau trong vòng đời phát triển phần mềm (SDLC) sẽ giúp phát hiện các lỗi trong sản phẩm công việc\n  B) Người kiểm tra cố gắng không làm phiền các nhà phát triển trong khi viết mã, để các nhà phát triển viết mã tốt hơn\n  C) Người kiểm tra cộng tác với người dùng cuối giúp cải thiện chất lượng báo cáo lỗi trong quá trình tích hợp thành phần và kiểm tra hệ thống\n  D) Những tester (kiểm thử viên) được chứng nhận sẽ thiết kế các test case (ca kiểm thử) tốt hơn nhiều so với những tester (kiểm thử viên) không được chứng nhận\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Điều quan trọng là tester (kiểm thử viên) phải tham gia ngay từ đầu vòng đời phát triển phần mềm (SDLC). Nó sẽ nâng cao sự hiểu biết về các quyết định thiết kế và sẽ phát hiện sớm các khiếm khuyết.\nb) Không đúng. Cả nhà phát triển và tester (kiểm thử viên) sẽ hiểu rõ hơn về sản phẩm công việc của nhau và cách kiểm tra mã\nc) Không đúng. Người dùng cuối sẽ không giúp người kiểm tra nâng cao chất lượng của các báo cáo lỗi; Ngoài ra, người dùng thường không tham gia vào các cấp độ kiểm thử (test level) cấp thấp như kiểm thử tích hợp (integration testing)\nđ) Không đúng. Được chứng nhận không tự động có nghĩa là tester (kiểm thử viên) sẽ giỏi hơn trong việc thiết kế kiểm thử\n\nTham chiếu: FL-1.2.1 (K2)"
  },
  {
    "n": 3,
    "ref": "Question #3 [FL-1.3.1]",
    "stem": "You have been assigned as a tester to a team producing a new system incrementally. You have  noticed that no changes have been made to the existing regression test cases for several iterations  and no new regression defects were identified. Your manager is happy, but you are not. Which  testing principle explains your skepticism?",
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
        "t": "C) Defects cluster together"
      },
      {
        "k": "d",
        "t": "D) Exhaustive testing is impossible"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đã được chỉ định làm tester (kiểm thử viên) cho một nhóm đang dần dần sản xuất một hệ thống mới. Bạn nhận thấy rằng không có thay đổi nào được thực hiện đối với các trường hợp kiểm thử hồi quy hiện có trong một số lần lặp và không có lỗi hồi quy mới nào được xác định. Người quản lý của bạn hạnh phúc, nhưng bạn thì không. Nguyên tắc kiểm thử nào giải thích sự hoài nghi của bạn?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các bài kiểm tra bị hao mòn\n  B) Ngụy biện không có khuyết điểm\n  C) Các khiếm khuyết (defect) cụm lại với nhau\n  D) Kiểm tra toàn diện là không thể\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Nguyên tắc này có nghĩa là nếu các bài kiểm tra tương tự được lặp đi lặp lại nhiều lần thì cuối cùng những bài kiểm tra này không còn tìm thấy bất kỳ lỗi mới nào nữa.  Đây có lẽ là lý do tại sao tất cả các bài kiểm tra đều vượt qua trong phiên bản này\nb) Không đúng. Nguyên tắc này nói lên niềm tin sai lầm rằng chỉ cần tìm và sửa một số lượng lớn lỗi sẽ đảm bảo sự thành công của hệ thống.\nc) Không đúng. Nguyên tắc này nói rằng một số lượng nhỏ các thành phần thường chứa hầu hết các khiếm khuyết\nđ) Không đúng. Nguyên tắc này nêu rõ rằng việc kiểm thử tất cả các kết hợp đầu vào và điều kiện tiên quyết là không khả thi\n\nTham chiếu: FL-1.3.1 (K2)"
  },
  {
    "n": 4,
    "ref": "Question #4 [FL-1.4.1]",
    "stem": "You work in a team that develops a mobile application for food ordering. In the current iteration the  team decided to implement the payment functionality.  Which of the following activities is a part of test analysis?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Estimating that testing the integration with the payment service will take 8 person-days"
      },
      {
        "k": "b",
        "t": "B) Deciding that the team should test if it is possible to properly share payment between many users"
      },
      {
        "k": "c",
        "t": "C) Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid"
      },
      {
        "k": "d",
        "t": "D) Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn làm việc trong một nhóm phát triển ứng dụng di động để đặt đồ ăn. Trong lần lặp lại hiện tại, nhóm đã quyết định triển khai chức năng thanh toán.  Hoạt động nào sau đây là một phần của phân tích kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Ước tính việc kiểm thử tích hợp (integration testing) với dịch vụ thanh toán sẽ mất 8 ngày công\n  B) Quyết định rằng nhóm nên kiểm tra xem có thể chia sẻ khoản thanh toán giữa nhiều người dùng một cách hợp lý hay không\n  C) Sử dụng phân tích giá trị biên (BVA) để lấy dữ liệu kiểm thử cho các test case (ca kiểm thử) kiểm tra quá trình xử lý thanh toán chính xác với số tiền tối thiểu được phép thanh toán\n  D) Phân tích sự khác biệt giữa kết quả thực tế và kết quả mong đợi sau khi thực hiện test case (ca kiểm thử) kiểm tra quá trình thanh toán bằng thẻ tín dụng và báo cáo lỗi\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Ước tính nỗ lực kiểm tra là một phần của kế hoạch kiểm tra\nb) Đúng. Đây là một ví dụ về việc xác định các điều kiện kiểm thử là một phần của phân tích kiểm thử\nc) Không đúng. Sử dụng các kỹ thuật kiểm thử để rút ra các mục bao phủ là một phần của thiết kế kiểm thử\nđ) Không đúng. Báo cáo các lỗi được tìm thấy trong quá trình kiểm thử động là một phần của quá trình thực hiện kiểm thử\n\nTham chiếu: FL-1.4.1 (K2)"
  },
  {
    "n": 5,
    "ref": "Question #5 [FL-1.4.2]",
    "stem": "Which of the following factors have a SIGNIFICANT influence on the test approach?    i.  The SDLC  ii.  The number of defects detected in previous projects  iii.  The identified product risks  iv.  New regulatory requirements forcing formal white-box testing  v.  The test environment setup",
    "opts": [
      {
        "k": "a",
        "t": "A) i, ii have significant influence"
      },
      {
        "k": "b",
        "t": "B) i, iii, iv have significant influence"
      },
      {
        "k": "c",
        "t": "C) ii, iv, v have significant influence"
      },
      {
        "k": "d",
        "t": "D) iii, v have significant influence"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nYếu tố nào sau đây có ảnh hưởng QUAN TRỌNG đến phương pháp kiểm thử?    Tôi.  SDLC ii.  Số lượng lỗi được phát hiện trong các dự án trước đó iii.  Rủi ro sản phẩm được xác định iv.  Yêu cầu quy định mới buộc kiểm thử hộp trắng (white-box) chính thức v. Thiết lập môi trường kiểm thử\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tôi, tôi có ảnh hưởng đáng kể\n  B) I, iii, iv có ảnh hưởng đáng kể\n  C) Ii, iv, v có ảnh hưởng đáng kể\n  D) Iii, v có ảnh hưởng đáng kể\n\n[GIẢI THÍCH CHI TIẾT]\nTôi. Là đúng. SDLC có ảnh hưởng đến phương pháp kiểm thử\nii. Là sai. Số lượng lỗi được phát hiện trong các dự án trước có thể có ảnh hưởng nhất định nhưng không đáng kể bằng i, iii và iv\niii. Là đúng. Rủi ro sản phẩm được xác định là một trong những yếu tố quan trọng nhất ảnh hưởng đến phương pháp kiểm thử\niv. Là đúng. Yêu cầu quy định là yếu tố quan trọng ảnh hưởng đến phương pháp kiểm thử\nv. Là sai. môi trường kiểm thử không có ảnh hưởng đáng kể đến phương pháp kiểm thử. Do đó:\na) Không đúng\nb) Đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-1.4.2 (K2)"
  },
  {
    "n": 6,
    "ref": "Question #6 [FL-1.4.5]",
    "stem": "Which TWO of the following tasks belong MAINLY to a testing role?",
    "opts": [
      {
        "k": "a",
        "t": "A) Configure test environments"
      },
      {
        "k": "b",
        "t": "B) Maintain the product backlog"
      },
      {
        "k": "c",
        "t": "C) Design solutions to new requirements"
      },
      {
        "k": "d",
        "t": "D) Create the test plan"
      },
      {
        "k": "e",
        "t": "E) Analyze the test basis"
      }
    ],
    "ans": [
      "a",
      "e"
    ],
    "multi": true,
    "exp": "[DỊCH CÂU HỎI]\nHAI nhiệm vụ nào sau đây CHỦ YẾU thuộc vai trò kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Định cấu hình môi trường kiểm thử\n  B) Duy trì tồn đọng sản phẩm\n  C) Giải pháp thiết kế cho các yêu cầu mới\n  D) Tạo kế hoạch kiểm tra\n  E) Phân tích test basis (cơ sở kiểm thử)\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Việc này được thực hiện bởi người kiểm tra\nb) Không đúng. Product backlog được xây dựng và duy trì bởi chủ sở hữu sản phẩm\nc) Không đúng. Việc này được thực hiện bởi nhóm phát triển\nđ) Không đúng. Đây là chức năng quản lý\nđ) Đúng. Điều này được thực hiện bởi những tester (kiểm thử viên) vì nhiệm vụ kỹ thuật của nó được thực hiện như một phần của phân tích kiểm thử.\n\nTham chiếu: FL-1.4.5 (K2)"
  },
  {
    "n": 7,
    "ref": "Question #7 [FL-1.5.1]",
    "stem": "Which of the following skills (i-v) are the MOST important skills of a tester?    i.  Having domain knowledge  ii.  Creating a product vision  iii.  Being a good team player  iv.  Planning and organizing the work of the team  v.  Critical thinking",
    "opts": [
      {
        "k": "a",
        "t": "A) ii and iv are important"
      },
      {
        "k": "b",
        "t": "B) i, iii and v are important"
      },
      {
        "k": "c",
        "t": "C) i, ii and v are important"
      },
      {
        "k": "d",
        "t": "D) iii and iv are important"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKỹ năng nào sau đây (i-v) là kỹ năng quan trọng NHẤT của người kiểm thử?    Tôi.  Có kiến ​​thức về lĩnh vực ii.  Tạo ra tầm nhìn về sản phẩm iii.  Là một người chơi tốt trong nhóm iv.  Lập kế hoạch và tổ chức công việc của nhóm v.\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Ii và iv là quan trọng\n  B) I, iii và v rất quan trọng\n  C) I, ii và v rất quan trọng\n  D) Iii và iv là quan trọng\n\n[GIẢI THÍCH CHI TIẾT]\nTôi. Là đúng. Có kiến thức về miền là một kỹ năng quan trọng của người kiểm thử\nii. Là sai. Đây là nhiệm vụ của nhà phân tích kinh doanh cùng với người đại diện kinh doanh\niii. Là đúng. Trở thành một thành viên nhóm tốt là một kỹ năng quan trọng\niv. Là sai. Lập kế hoạch và tổ chức công việc của nhóm là nhiệm vụ của người quản lý kiểm thử hoặc chủ yếu là trong một dự án phát triển phần mềm Agile, của cả nhóm chứ không chỉ của người kiểm thử.\nv.Là sự thật. Tư duy phản biện là một trong những kỹ năng quan trọng nhất của tester (kiểm thử viên). Vì vậy:\na) Không đúng\nb) Đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-1.5.1 (K2)"
  },
  {
    "n": 8,
    "ref": "Question #8 [FL-1.5.2]",
    "stem": "How is the whole team approach present in the interactions between testers and business  representatives?",
    "opts": [
      {
        "k": "a",
        "t": "A) Business representatives decide on test automation approaches"
      },
      {
        "k": "b",
        "t": "B) Testers help business representatives to define a test strategy"
      },
      {
        "k": "c",
        "t": "C) Business representatives are not part of the whole team approach"
      },
      {
        "k": "d",
        "t": "D) Testers help business representatives to create suitable acceptance tests"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCách tiếp cận của cả nhóm thể hiện như thế nào trong sự tương tác giữa tester (kiểm thử viên) và đại diện doanh nghiệp?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đại diện doanh nghiệp quyết định các phương pháp tự động hóa kiểm thử (test automation)\n  B) Tester (kiểm thử viên) giúp đại diện doanh nghiệp xác định chiến lược kiểm thử\n  C) Đại diện doanh nghiệp không phải là một phần của cách tiếp cận toàn nhóm\n  D) Người kiểm tra giúp đại diện doanh nghiệp tạo ra các bài kiểm tra chấp nhận phù hợp\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Phương pháp tự động hóa kiểm thử (test automation) được xác định bởi tester (kiểm thử viên) với sự trợ giúp của nhà phát triển và đại diện doanh nghiệp\nb) Không đúng. chiến lược kiểm thử được quyết định với sự cộng tác của các nhà phát triển\nc) Không đúng. tester (kiểm thử viên), nhà phát triển và đại diện doanh nghiệp là một phần trong cách tiếp cận của cả nhóm\nđ) Đúng. Người kiểm thử sẽ làm việc chặt chẽ với đại diện doanh nghiệp để đảm bảo đạt được mức chất lượng mong muốn. Điều này bao gồm hỗ trợ và cộng tác với họ để giúp họ tạo ra các bài kiểm tra chấp nhận phù hợp\n\nTham chiếu: FL-1.5.2 (K1)"
  },
  {
    "n": 9,
    "ref": "Question #9 [FL-2.1.2]",
    "stem": "Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which  SDLC models does this rule hold?",
    "opts": [
      {
        "k": "a",
        "t": "A) Only in sequential development models"
      },
      {
        "k": "b",
        "t": "B) Only in iterative development models"
      },
      {
        "k": "c",
        "t": "C) Only in iterative and incremental development models"
      },
      {
        "k": "d",
        "t": "D) In sequential, incremental, and iterative development models"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét quy tắc sau: “đối với mọi hoạt động SDLC đều có một hoạt động kiểm thử tương ứng”. Quy tắc này áp dụng cho những mô hình SDLC nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Chỉ trong các mô hình phát triển tuần tự\n  B) Chỉ trong các mô hình phát triển lặp đi lặp lại\n  C) Chỉ trong các mô hình phát triển lặp đi lặp lại và tăng dần\n  D) Trong các mô hình phát triển tuần tự, tăng dần và lặp lại\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng\nb) Không đúng\nc) Không đúng\nđ) Đúng. Quy tắc này áp dụng cho tất cả các mẫu SDLC\n\nTham chiếu: FL-2.1.2 (K1)"
  },
  {
    "n": 10,
    "ref": "Question #10 [FL-2.1.3]",
    "stem": "Which of the following statements BEST describes the acceptance test-driven development (ATDD)  approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) In ATDD, acceptance criteria are typically created based on the given/when/then format"
      },
      {
        "k": "b",
        "t": "B) In ATDD, test cases are mainly created at component testing and are code-oriented"
      },
      {
        "k": "c",
        "t": "C) In ATDD, tests are created, based on acceptance criteria to drive the development of the related software"
      },
      {
        "k": "d",
        "t": "D) in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây mô tả TỐT NHẤT về cách tiếp cận phát triển dựa trên kiểm thử chấp nhận (acceptance testing) (ATDD)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Trong ATDD, tiêu chí chấp nhận thường được tạo dựa trên định dạng đã cho/khi/khi đó\n  B) Trong ATDD, các trường hợp kiểm thử chủ yếu được tạo khi kiểm thử thành phần và được định hướng theo mã.\n  C) Trong ATDD, các bài kiểm tra được tạo ra dựa trên các tiêu chí chấp nhận để thúc đẩy sự phát triển của phần mềm liên quan\n  D) Trong ATDD, các bài kiểm tra dựa trên hành vi mong muốn của phần mềm, giúp các thành viên trong nhóm hiểu chúng dễ dàng hơn\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Nó thường được sử dụng nhiều hơn trong phát triển theo hướng hành vi (BDD)\nb) Không đúng. Đó là mô tả về phát triển dựa trên kiểm thử (TDD)\nc) Đúng. Trong phát triển dựa trên kiểm thử chấp nhận (acceptance testing) (ATDD), các bài kiểm thử được viết từ tiêu chí chấp nhận như một phần của quy trình thiết kế\nđ) Không đúng. Nó được sử dụng trong BDD\n\nTham chiếu: FL-2.1.3 (K1)"
  },
  {
    "n": 11,
    "ref": "Question #11 [FL-2.1.5]",
    "stem": "Which of the following is NOT an example of the shift-left approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) Reviewing the user requirements before they are formally accepted by the stakeholders"
      },
      {
        "k": "b",
        "t": "B) Writing a component test before the corresponding code is written"
      },
      {
        "k": "c",
        "t": "C) Executing a performance efficiency test for a component during component testing"
      },
      {
        "k": "d",
        "t": "D) Writing a test script before setting up the configuration management process"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây KHÔNG phải là ví dụ về phương pháp dịch trái?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Xem xét các yêu cầu của người dùng trước khi chúng được các bên liên quan chính thức chấp nhận\n  B) Viết bài kiểm tra thành phần trước khi viết mã tương ứng\n  C) Thực hiện kiểm tra hiệu suất hiệu suất cho một thành phần trong quá trình kiểm tra thành phần\n  D) Viết kịch bản kiểm tra trước khi thiết lập quy trình quản lý cấu hình\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Đánh giá sớm là một ví dụ về phương pháp dịch chuyển sang trái\nb) Không đúng. TDD là một ví dụ về cách tiếp cận dịch chuyển trái\nc) Không đúng. kiểm thử phi chức năng ban đầu là một ví dụ về phương pháp dịch chuyển trái\nđ) Đúng. Tập lệnh kiểm thử phải tuân theo quản lý cấu hình, do đó, việc tạo tập lệnh kiểm thử trước khi quá trình này được thiết lập là vô nghĩa\n\nTham chiếu: FL-2.1.5 (K2)"
  },
  {
    "n": 12,
    "ref": "Question #12 [FL-2.1.6]",
    "stem": "Which of the arguments below would you use to convince your manager to organize retrospectives  at the end of each release cycle?",
    "opts": [
      {
        "k": "a",
        "t": "A) Retrospectives are very popular these days and clients would appreciate it if we added them to our processes"
      },
      {
        "k": "b",
        "t": "B) Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product"
      },
      {
        "k": "c",
        "t": "C) Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program"
      },
      {
        "k": "d",
        "t": "D) Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn sẽ sử dụng lý lẽ nào dưới đây để thuyết phục người quản lý của mình tổ chức các buổi cải tiến vào cuối mỗi chu kỳ phát hành?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Ngày nay hoạt động cải tiến rất phổ biến và khách hàng sẽ đánh giá cao nếu chúng tôi thêm chúng vào quy trình của mình\n  B) Việc tổ chức các buổi cải tiến sẽ tiết kiệm tiền cho tổ chức vì nếu không có chúng, đại diện người dùng cuối sẽ không đưa ra phản hồi ngay lập tức về sản phẩm\n  C) Các điểm yếu của quy trình được xác định trong quá trình hồi cứu có thể được phân tích và phục vụ như một danh sách việc cần làm cho chương trình cải tiến quy trình liên tục của tổ chức.\n  D) Hồi tưởng bao gồm năm giá trị bao gồm lòng can đảm và sự tôn trọng, những điều rất quan trọng để duy trì sự cải tiến liên tục trong tổ chức\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Hồi tưởng hữu ích hơn trong việc xác định các cơ hội cải tiến và ít quan trọng đối với khách hàng\nb) Không đúng. Hoạt động hồi tưởng không nhằm mục đích thu thập phản hồi về sản phẩm mà là về quy trình. Ngoài ra, hoạt động cải tiến là hoạt động nội bộ của nhóm và không được bao gồm đại diện người dùng cuối\nc) Đúng. Các hoạt động cải tiến được tiến hành thường xuyên, khi các hoạt động tiếp theo phù hợp diễn ra, là rất quan trọng để cải tiến liên tục quá trình phát triển và kiểm thử\nđ) Không đúng. Lòng dũng cảm và sự tôn trọng là giá trị của Lập trình cực đoan và không liên quan chặt chẽ đến quá khứ\n\nTham chiếu: FL-2.1.6 (K2)"
  },
  {
    "n": 13,
    "ref": "Question #13 [FL-2.2.1]",
    "stem": "Which types of failures (1-4) fit which test levels (A-D) BEST?    1. Failures in system behavior as it deviates from the user’s business needs  2. Failures in communication between components  3. Failures in logic in the code  4. Failures in not correctly implemented business rules    A. Component testing  B. Component integration testing  C. System testing  D. Acceptance testing",
    "opts": [
      {
        "k": "a",
        "t": "A) 1D, 2B, 3A, 4C"
      },
      {
        "k": "b",
        "t": "B) 1D, 2B, 3C, 4A"
      },
      {
        "k": "c",
        "t": "C) 1B, 2A, 3D, 4C"
      },
      {
        "k": "d",
        "t": "D) 1C, 2B, 3A, 4D"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhững loại lỗi nào (1-4) phù hợp với cấp độ kiểm tra nào (A-D) TỐT NHẤT?    1. Lỗi trong hoạt động của hệ thống do nó đi chệch khỏi nhu cầu kinh doanh của người dùng 2. Lỗi trong giao tiếp giữa các thành phần 3. Lỗi logic trong mã 4. Lỗi trong các quy tắc kinh doanh được triển khai không chính xác A. Kiểm tra thành phần B. Kiểm tra tích hợp thành phần C. Kiểm tra hệ thống D. Kiểm tra chấp nhận\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1D, 2B, 3A, 4C\n  B) 1D, 2B, 3C, 4A\n  C) 1B, 2A, 3D, 4C\n  D) 1C, 2B, 3A, 4D\n\n[GIẢI THÍCH CHI TIẾT]\nXem xét: • Cơ sở kiểm tra để kiểm tra chấp nhận là nhu cầu kinh doanh của người dùng (1D) • Giao tiếp giữa các thành phần được kiểm tra trong quá trình kiểm tra tích hợp thành phần (2B) • Có thể tìm thấy lỗi về logic trong quá trình kiểm tra thành phần (3A) • Quy tắc kinh doanh là cơ sở kiểm tra để kiểm tra hệ thống (4C) Do đó:\na) Đúng\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-2.2.1 (K2)"
  },
  {
    "n": 14,
    "ref": "Question #14 [FL-2.2.3]",
    "stem": "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by  test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three  consecutive versions of the software as follows:     Execution 1  Execution 2  Execution 3  TC1  (1) Failed  (4) Passed  (7) Passed  TC2  (2) Passed  (5) Failed  (8) Passed  TC3  (3) Failed  (6) Failed  (9) Passed     Tests are repeated once you are informed that all defects found in the test run are corrected and  a new version of the software is available.  Which of the above tests are executed as regression tests?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Only 4, 7, 8, 9"
      },
      {
        "k": "b",
        "t": "B) Only 5, 7"
      },
      {
        "k": "c",
        "t": "C) Only 4, 6, 8, 9"
      },
      {
        "k": "d",
        "t": "D) Only 5, 6"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một câu chuyện của người dùng với ba tiêu chí chấp nhận: AC1, AC2 và AC3. AC1 được bao phủ bởi test case (ca kiểm thử) TC1, AC2 bởi TC2 và AC3 bởi TC3. Lịch sử thực hiện kiểm thử có ba lần chạy kiểm thử trên ba phiên bản liên tiếp của phần mềm như sau: Thực hiện 1 Thực hiện 2 Thực hiện 3 TC1 (1) Không đạt (4) Đạt (7) Đạt TC2 (2) Đạt (5) Không đạt (8) Đạt TC3 (3) Không thành công (6) Không thành công (9) Đạt các bài kiểm thử được lặp lại khi bạn được thông báo rằng tất cả các lỗi tìm thấy trong quá trình chạy thử đều đã được sửa chữa và có phiên bản mới của phần mềm.  kiểm thử nào ở trên được thực hiện dưới dạng kiểm thử hồi quy (regression testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Chỉ 4, 7, 8, 9\n  B) Chỉ 5, 7\n  C) Chỉ 4, 6, 8, 9\n  D) Chỉ 5, 6\n\n[GIẢI THÍCH CHI TIẾT]\nVì TC1 và TC3 không thành công trong Thực hiện 1 (tức là kiểm tra (1) và kiểm tra (3)), nên kiểm tra (4) và kiểm tra (6) là các kiểm tra xác nhận.  Vì TC2 và TC3 không thành công trong Thực hiện 2 (tức là các bài kiểm tra (5) và (6)), nên bài kiểm tra (8) và bài kiểm tra (9) cũng là các bài kiểm tra xác nhận.  TC2 đã đạt trong Bài thực thi 1 (tức là bài kiểm tra (2)), vì vậy bài kiểm tra (5) là bài kiểm tra hồi quy.  TC1 đã đạt trong phần Thực thi 2 (tức là bài kiểm tra (4)), vì vậy bài kiểm tra (7) cũng là một bài kiểm tra hồi quy.    Như vậy:\na) Không đúng\nb) Đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-2.2.3 (K2)"
  },
  {
    "n": 15,
    "ref": "Question #15 [FL-3.1.2]",
    "stem": "Which of the following is NOT a benefit of static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Having less expensive defect management due to the ease of detecting defects later in the SDLC"
      },
      {
        "k": "b",
        "t": "B) Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing"
      },
      {
        "k": "c",
        "t": "C) Finding coding defects that might not have been found by only performing dynamic testing"
      },
      {
        "k": "d",
        "t": "D) Detecting gaps and inconsistencies in requirements"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây KHÔNG phải là lợi ích của kiểm thử tĩnh (static testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Quản lý lỗi ít tốn kém hơn do dễ dàng phát hiện lỗi sau này trong SDLC\n  B) Việc sửa các lỗi được tìm thấy trong quá trình kiểm thử tĩnh thường ít tốn kém hơn nhiều so với việc sửa các lỗi được tìm thấy trong quá trình kiểm thử động.\n  C) Tìm các lỗi mã hóa có thể không được tìm thấy chỉ bằng cách thực hiện kiểm thử động\n  D) Phát hiện những khoảng trống và sự không nhất quán trong các yêu cầu\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Quản lý lỗi không kém phần tốn kém. Việc tìm kiếm và sửa lỗi sau này trong SDLC sẽ tốn kém hơn\nb) Không đúng. Đây là một lợi ích của kiểm thử tĩnh (static testing)\nc) Không đúng. Đây là một lợi ích của kiểm thử tĩnh (static testing)\nđ) Không đúng. Đây là một lợi ích của kiểm thử tĩnh (static testing)\n\nTham chiếu: FL-3.1.2 (K2)"
  },
  {
    "n": 16,
    "ref": "Question #16 [FL-3.2.1]",
    "stem": "Which of the following is a benefit of early and frequent feedback?",
    "opts": [
      {
        "k": "a",
        "t": "A) It improves the test process for future projects"
      },
      {
        "k": "b",
        "t": "B) It forces customers to prioritize their requirements based on agreed risks"
      },
      {
        "k": "c",
        "t": "C) It  provides a measure for the quality of changes"
      },
      {
        "k": "d",
        "t": "D) It helps avoid requirements misunderstandings"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là lợi ích của phản hồi sớm và thường xuyên?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nó cải thiện quá trình kiểm thử cho các dự án trong tương lai\n  B) Nó buộc khách hàng phải ưu tiên các yêu cầu của họ dựa trên những rủi ro đã được thỏa thuận\n  C) Nó cung cấp thước đo về chất lượng của những thay đổi\n  D) Nó giúp tránh những hiểu lầm về yêu cầu\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Phản hồi có thể cải thiện quá trình kiểm thử, nhưng nếu người ta chỉ muốn cải thiện các dự án trong tương lai thì phản hồi không cần phải đến sớm hoặc thường xuyên.\nb) Không đúng. Phản hồi không được sử dụng để ưu tiên các yêu cầu\nc) Không đúng. Không có cách nào được khuyến nghị để đo lường chất lượng của những thay đổi. Ngoài ra, đây không phải là một trong những lợi ích của phản hồi sớm được đề cập ở phần 3.2.1\nđ) Đúng. Phản hồi sớm và thường xuyên có thể ngăn ngừa những hiểu lầm về yêu cầu\n\nTham chiếu: FL-3.2.1 (K1)"
  },
  {
    "n": 17,
    "ref": "Question #17 [FL-3.2.4]",
    "stem": "The reviews being used in your organization have the following attributes:   •  There is the role of a scribe  •  The main purpose is to evaluate quality  •  The meeting is led by the author of the work product  •  There is individual preparation  •  A review report is produced  Which of the following review types is MOST likely being used?",
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
    "exp": "[DỊCH CÂU HỎI]\nCác đánh giá đang được sử dụng trong tổ chức của bạn có các thuộc tính sau: • Có vai trò của người ghi chép • Mục đích chính là để đánh giá chất lượng • Cuộc họp được chủ trì bởi tác giả của sản phẩm công việc • Có sự chuẩn bị riêng lẻ • Một báo cáo đánh giá được tạo ra Loại đánh giá nào sau đây có nhiều khả năng được sử dụng nhất?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đánh giá không chính thức\n  B) Hướng dẫn\n  C) Đánh giá kỹ thuật\n  D) Kiểm tra\n\n[GIẢI THÍCH CHI TIẾT]\nXem xét các thuộc tính: • Được chỉ định cho các hướng dẫn, đánh giá kỹ thuật và kiểm tra; do đó, các đánh giá đang được thực hiện không thể là đánh giá không chính thức • Mục đích đánh giá chất lượng là một trong những mục tiêu quan trọng nhất của quá trình hướng dẫn • Việc này không được phép thực hiện trong các cuộc thanh tra và thường không được thực hiện trong các đánh giá kỹ thuật. Cần có người kiểm duyệt trong quá trình hướng dẫn và được phép thực hiện các đánh giá không chính thức • Tất cả các loại đánh giá có thể bao gồm sự chuẩn bị riêng lẻ (thậm chí cả các đánh giá không chính thức) • Tất cả các loại đánh giá đều có thể tạo ra một báo cáo đánh giá, mặc dù các đánh giá không chính thức không yêu cầu tài liệu. Do đó:\na) Không đúng\nb) Đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-3.2.4 (K2)"
  },
  {
    "n": 18,
    "ref": "Question #18 [FL-3.2.5]",
    "stem": "Which of these statements is NOT a factor that contributes to successful reviews?",
    "opts": [
      {
        "k": "a",
        "t": "A) Participants should dedicate adequate time for the review"
      },
      {
        "k": "b",
        "t": "B) Splitting large work products into small parts to make the required effort less intense"
      },
      {
        "k": "c",
        "t": "C) Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants"
      },
      {
        "k": "d",
        "t": "D) Failures found should be acknowledged, appreciated, and handled objectively"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTuyên bố nào sau đây KHÔNG phải là yếu tố góp phần tạo nên sự thành công của đánh giá?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người tham gia nên dành thời gian thích hợp cho việc đánh giá\n  B) Chia các sản phẩm công việc lớn thành các phần nhỏ để giảm bớt nỗ lực cần thiết\n  C) Những người tham gia nên tránh những hành vi có thể biểu hiện sự buồn chán, bực tức hoặc thù địch với những người tham gia khác\n  D) Những sai sót được phát hiện cần được thừa nhận, đánh giá cao và xử lý một cách khách quan\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Thời gian thích hợp cho mỗi cá nhân là yếu tố thành công\nb) Không đúng. Chia sản phẩm công việc thành những phần nhỏ thích hợp là một yếu tố thành công\nc) Không đúng. Tránh những hành vi có thể biểu hiện sự buồn chán, bực tức, v.v. là một yếu tố thành công\nđ) Đúng. Trong quá trình đánh giá, người ta có thể tìm thấy những khiếm khuyết chứ không phải thất bại\n\nTham chiếu: FL-3.2.5 (K1)"
  },
  {
    "n": 19,
    "ref": "Question #19 [FL-4.1.1]",
    "stem": "Which of the following is a characteristic of experience-based test techniques?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases are created based on detailed design information"
      },
      {
        "k": "b",
        "t": "B) Items tested within the interface code section are used to measure coverage"
      },
      {
        "k": "c",
        "t": "C) The test techniques heavily rely on the tester’s knowledge of the software and the business domain"
      },
      {
        "k": "d",
        "t": "D) The test cases are used to identify deviations from the requirements"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là đặc điểm của kỹ thuật kiểm tra dựa trên kinh nghiệm?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các test case (ca kiểm thử) được tạo dựa trên thông tin thiết kế chi tiết\n  B) Các mục được kiểm tra trong phần mã giao diện được sử dụng để đo mức độ bao phủ\n  C) Các kỹ thuật kiểm thử phụ thuộc rất nhiều vào kiến thức của người kiểm thử về phần mềm và lĩnh vực kinh doanh.\n  D) Các test case (ca kiểm thử) được sử dụng để xác định những sai lệch so với yêu cầu\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Đây là đặc điểm chung của kỹ thuật kiểm thử hộp trắng. Điều kiện kiểm thử, trường hợp kiểm thử và dữ liệu kiểm thử được lấy từ cơ sở kiểm thử có thể bao gồm mã, kiến ​​trúc phần mềm, thiết kế chi tiết hoặc bất kỳ nguồn thông tin nào khác liên quan đến cấu trúc của phần mềm.\nb) Không đúng. Đây là đặc điểm chung của kỹ thuật kiểm thử hộp trắng. Mức độ bao phủ được đo lường dựa trên các mục được kiểm tra trong cấu trúc đã chọn và kỹ thuật kiểm tra được áp dụng cho cơ sở kiểm tra\nc) Đúng. Đây là đặc điểm chung của các kỹ thuật kiểm tra dựa trên kinh nghiệm. Kiến thức và kinh nghiệm này bao gồm việc sử dụng phần mềm dự kiến, môi trường của nó, các lỗi có thể xảy ra và việc phân bổ các lỗi đó được sử dụng để xác định các bài kiểm thử\nđ) Không đúng. Đây là đặc điểm chung của kỹ thuật kiểm thử hộp đen. Các test case (ca kiểm thử) có thể được sử dụng để phát hiện các lỗ hổng trong yêu cầu và việc thực hiện các yêu cầu, cũng như những sai lệch so với yêu cầu.\n\nTham chiếu: FL-4.1.1 (K2)"
  },
  {
    "n": 20,
    "ref": "Question #20 [FL-4.2.1]",
    "stem": "You are testing a simplified apartment search form which has only two search criteria:  •  floor (with three possible options: ground floor; first floor; second or higher floor)  •  garden type (with three possible options: no garden; small garden; large garden)  Each of the apartment on the ground floor has a garden, apartments on higher floors don’t. The form  has a built-in validation mechanism that will not allow you to use the search criteria which violate this  rule.    Each test has two input values: floor and garden type. You want to apply equivalence partitioning  (EP) to cover each floor and each garden type in your tests.    What is the minimal number of test cases to achieve 100% EP coverage for valid partitions?",
    "opts": [
      {
        "k": "a",
        "t": "A) 3"
      },
      {
        "k": "b",
        "t": "B) 4"
      },
      {
        "k": "c",
        "t": "C) 5"
      },
      {
        "k": "d",
        "t": "D) 6"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một mẫu tìm kiếm căn hộ đơn giản chỉ có hai tiêu chí tìm kiếm: • tầng (với ba lựa chọn có thể: tầng trệt, tầng một, tầng hai trở lên) • loại vườn (với ba lựa chọn có thể: không có vườn; vườn nhỏ, vườn rộng) Mỗi ​​căn hộ ở tầng trệt đều có sân vườn, các căn hộ ở tầng cao hơn thì không. Biểu mẫu có cơ chế xác thực tích hợp sẽ không cho phép bạn sử dụng các tiêu chí tìm kiếm vi phạm quy tắc này.    Mỗi bài kiểm tra có hai giá trị đầu vào: loại sàn và loại vườn. Bạn muốn áp dụng phân vùng tương đương (EP) để bao gồm từng tầng và từng loại vườn trong kiểm thử của mình.    Số lượng test case (ca kiểm thử) tối thiểu để đạt được mức độ bao phủ 100% EP cho các phân vùng hợp lệ là bao nhiêu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 3\n  B) 4\n  C) 5\n  D) 6\n\n[GIẢI THÍCH CHI TIẾT]\nTình huống được trình bày trong câu hỏi được mô tả trong giáo trình dưới dạng bao quát “mỗi lựa chọn”.    “Khu vườn nhỏ” và “khu vườn lớn” chỉ có thể đi với “tầng trệt”, vì vậy chúng ta cần hai test case (ca kiểm thử) với “tầng trệt” bao phủ hai phân vùng “kiểu vườn” này.   Chúng tôi cần thêm hai test case (ca kiểm thử) nữa để bao gồm hai phân vùng “sàn” khác. Phân vùng “loại vườn” còn lại của “không có vườn” được bao phủ bởi các bài kiểm thử này.  Chúng ta cần tổng cộng 4 test case: TC1 (tầng trệt, sân vườn nhỏ) TC2 (tầng trệt, sân vườn rộng) TC3 (tầng 1, không có sân vườn) TC4 (tầng 2 trở lên, không có sân vườn) Như vậy:\na) Không đúng\nb) Đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-4.2.1 (K3)"
  },
  {
    "n": 21,
    "ref": "Question #21 [FL-4.2.2]",
    "stem": "You are testing a system that calculates the final course grade for a given student.   The final grade is assigned based on the final result, according to the following rules:  •  0 – 50 points: failed  •  51 – 60 points: fair  •  61 – 70 points: satisfactory  •  71 – 80 points: good  •  81 – 90 points: very good  •  91 – 100 points: excellent  You have prepared the following set of test cases:      Final  result  Final  grade  TC1  91  excellent  TC2  50  failed  TC3  81  very good  TC4  60  fair  TC5  70  satisfactory  TC6  80  good  What is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with  the existing test cases?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 50%"
      },
      {
        "k": "b",
        "t": "B) 60%"
      },
      {
        "k": "c",
        "t": "C) 33.3%"
      },
      {
        "k": "d",
        "t": "D) 100%"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một hệ thống tính điểm cuối khóa cho một học sinh nhất định.   Điểm cuối cùng được tính dựa trên kết quả cuối cùng, theo các quy tắc sau: • 0 – 50 điểm: trượt • 51 – 60 điểm: khá • 61 – 70 điểm: đạt • 71 – 80 điểm: tốt • 81 – 90 điểm: rất tốt • 91 – 100 điểm: xuất sắc Bạn đã chuẩn bị bộ trường hợp kiểm tra sau: Kết quả cuối cùng Điểm cuối cùng TC1 91 xuất sắc TC2 50 trượt TC3 81 rất tốt TC4 60 khá TC5 70 đạt yêu cầu TC6 80 tốt Phạm vi phân tích giá trị biên 2 giá trị (BVA) cho kết quả cuối cùng đạt được với các test case (ca kiểm thử) hiện có là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 50%\n  B) 60%\n  C) 33,3%\n  D) 100%\n\n[GIẢI THÍCH CHI TIẾT]\nCó 12 giá trị biên cho các giá trị kết quả cuối cùng: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91 và 100. Các test case (ca kiểm thử) bao gồm sáu trong số đó (TC1 – 91, TC2 – 50, TC3 – 81, TC4 – 60, TC5 – 70 và TC7 – 51).   Do đó, các test case (ca kiểm thử) bao gồm 6/12 = 50%.    Như vậy:\na) Đúng\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-4.2.2 (K3)"
  },
  {
    "n": 22,
    "ref": "Question #22 [FL-4.2.3]",
    "stem": "Your favorite bicycle daily rental store has just introduced a new Customer Relationship  Management system and asked you, one of their most loyal members, to test it.  The implemented features are as follows:  •  Anyone can rent a bicycle, but members receive a 20% discount  •  However, if the return deadline is missed, the discount is no longer available  •  After 15 rentals, members get a gift: a T-Shirt  Decision table describing the implemented features looks as follows:  Conditions  R1  R2  R3  R4  R5  R6  R7  R8  Being a member  T  T  T  T  F  F  F  F  Missed deadline  T  F  T  F  T  F  F  T  15th rental  F  F  T  T  F  F  T  T  Actions                  20% discount    X    X          Gift T-Shirt      X  X        X    Based ONLY on the feature description of the Customer Relationship Management system, which  of the above rules describes an impossible situation?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) R4"
      },
      {
        "k": "b",
        "t": "B) R2"
      },
      {
        "k": "c",
        "t": "C) R6"
      },
      {
        "k": "d",
        "t": "D) R8"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCửa hàng cho thuê xe đạp hàng ngày yêu thích của bạn vừa giới thiệu một hệ thống Quản lý quan hệ khách hàng mới và yêu cầu bạn, một trong những thành viên trung thành nhất của họ, kiểm thử nó.  Các tính năng được triển khai như sau: • Bất cứ ai cũng có thể thuê một chiếc xe đạp, nhưng các thành viên được giảm giá 20% • Tuy nhiên, nếu trễ thời hạn trả lại, khoản giảm giá sẽ không còn nữa • Sau 15 lần thuê, các thành viên sẽ nhận được một món quà: Bảng quyết định về áo phông mô tả các tính năng được triển khai như sau: Điều kiện R1 R2 R3 R4 R5 R6 R7 R8 Là thành viên T T T F F F F Đã lỡ thời hạn T F T F T F F T Lần thuê thứ 15 F F T T F F T T Hành động Giảm giá 20% X X Áo thun quà tặng X X X CHỈ dựa trên mô tả tính năng của hệ thống Quản lý quan hệ khách hàng, quy tắc nào ở trên mô tả một tình huống không thể xảy ra?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) R4\n  B) R2\n  C) R6\n  D) R8\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Thành viên không trễ thời hạn có thể được giảm giá và nhận áo phông quà tặng sau 15 lần thuê xe đạp\nb) Không đúng. Thành viên không trễ thời hạn có thể được giảm giá nhưng không được tặng áo phông cho đến khi thuê xe đạp 15 lần\nc) Không đúng. Những người không phải là thành viên không thể được giảm giá, ngay cả khi họ chưa trễ thời hạn\nđ) Đúng. Không giảm giá khi không phải là thành viên cũng trễ thời hạn mà chỉ có thành viên mới có thể nhận được quà tặng Áo phông. Do đó, thao tác này không đúng\n\nTham chiếu: FL-4.2.3 (K3)"
  },
  {
    "n": 23,
    "ref": "Question #23 [FL-4.2.4]",
    "stem": "You test a system whose lifecycle is modeled by the state transition diagram shown below. The  system starts in the INIT state and ends its operation in the OFF state.      What is the MINIMAL number of test cases to achieve valid transitions coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 4"
      },
      {
        "k": "b",
        "t": "B) 2"
      },
      {
        "k": "c",
        "t": "C) 7"
      },
      {
        "k": "d",
        "t": "D) 3"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn kiểm tra một hệ thống có vòng đời được mô hình hóa bằng sơ đồ chuyển trạng thái được hiển thị bên dưới. Hệ thống khởi động ở trạng thái INIT và kết thúc hoạt động ở trạng thái OFF.      Số lượng test case (ca kiểm thử) TỐI THIỂU để đạt được phạm vi chuyển tiếp hợp lệ là bao nhiêu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 4\n  B) 2\n  C) 7\n  D) 3\n\n[GIẢI THÍCH CHI TIẾT]\nQuá trình chuyển đổi “kiểm tra” và “lỗi” không thể xảy ra trong một trường hợp kiểm thử.  Cả hai quá trình chuyển đổi đều không thể thực hiện được.   Điều này có nghĩa là chúng tôi cần ít nhất ba test case (ca kiểm thử) để đạt được phạm vi chuyển tiếp. Ví dụ: TC1: test, done TC2: chạy, lỗi, xong TC3: chạy, tạm dừng, tiếp tục, tạm dừng, xong Như vậy:\na) Không đúng\nb) Không đúng\nc) Không đúng\nđ) Đúng\n\nTham chiếu: FL-4.2.4 (K3)"
  },
  {
    "n": 24,
    "ref": "Question #24 [FL-4.3.1]",
    "stem": "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
    "opts": [
      {
        "k": "a",
        "t": "A) Each instruction in the code that contains a defect has been executed at least once"
      },
      {
        "k": "b",
        "t": "B) Any test suite containing more test cases than your test suite will also achieve 100% statement coverage"
      },
      {
        "k": "c",
        "t": "C) Each path in the code has been executed at least once"
      },
      {
        "k": "d",
        "t": "D) Every combination of input values has been tested at least once"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTest suite (bộ kiểm thử) của bạn đã đạt được mức độ phủ câu lệnh (statement coverage) 100%. Hậu quả của thực tế này là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Mỗi lệnh trong mã có lỗi đã được thực thi ít nhất một lần\n  B) Bất kỳ bộ kiểm thử nào chứa nhiều trường hợp kiểm thử hơn bộ kiểm thử của bạn cũng sẽ đạt được mức độ phủ câu lệnh (statement coverage) 100%.\n  C) Mỗi đường dẫn trong mã đã được thực thi ít nhất một lần\n  D) Mọi sự kết hợp của các giá trị đầu vào đều đã được kiểm tra ít nhất một lần\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Vì đã đạt được mức độ phủ câu lệnh (statement coverage) 100% nên mọi câu lệnh, kể cả những câu lệnh có lỗi, phải được thực thi và đánh giá ít nhất một lần.\nb) Không đúng. Phạm vi bao phủ phụ thuộc vào nội dung được kiểm thử chứ không phụ thuộc vào số lượng ca kiểm thử. Ví dụ: đối với mã “if (x==0) y=1”, một test case (ca kiểm thử) (x=0) đạt được độ phủ câu lệnh (statement coverage) 100%, nhưng hai test case (ca kiểm thử) (x=1) và (x=2) cùng nhau chỉ đạt được độ phủ câu lệnh (statement coverage) 50%\nc) Không đúng. Nếu có một vòng lặp trong mã thì có thể có vô số đường dẫn có thể có, do đó không thể thực thi tất cả các đường dẫn có thể có trong mã\nđ) Không đúng. Không thể kiểm tra toàn diện (xem phần bảy nguyên tắc kiểm tra trong giáo trình). Ví dụ: đối với mã “đầu vào x; in x” bất kỳ kiểm thử đơn lẻ nào với x tùy ý đều đạt được phạm vi bao phủ câu lệnh 100%, nhưng bao gồm một giá trị đầu vào\n\nTham chiếu: FL-4.3.1 (K2)"
  },
  {
    "n": 25,
    "ref": "Question #25 [FL-4.3.3]",
    "stem": "Which of the following is NOT true for white-box testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) During white-box testing the entire software implementation is considered"
      },
      {
        "k": "b",
        "t": "B) White-box coverage metrics can help identify additional tests to increase code coverage"
      },
      {
        "k": "c",
        "t": "C) White-box test techniques can be used in static testing"
      },
      {
        "k": "d",
        "t": "D) White-box testing can help identify gaps in requirements implementation"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây KHÔNG đúng với kiểm thử hộp trắng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Trong quá trình kiểm thử hộp trắng, toàn bộ việc triển khai phần mềm được xem xét\n  B) Số liệu bao phủ hộp trắng có thể giúp xác định các bài kiểm thử bổ sung để tăng phạm vi bao phủ mã\n  C) Kỹ thuật kiểm thử hộp trắng có thể được sử dụng trong kiểm thử tĩnh\n  D) Kiểm thử hộp trắng có thể giúp xác định những lỗ hổng trong việc thực hiện yêu cầu\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Điểm mạnh cơ bản của kỹ thuật kiểm thử hộp trắng là toàn bộ quá trình triển khai phần mềm được tính đến trong quá trình kiểm thử.\nb) Không đúng. Các biện pháp bao phủ hộp trắng cung cấp thước đo khách quan về phạm vi bao phủ và cung cấp thông tin cần thiết để cho phép tạo ra các bài kiểm thử bổ sung nhằm tăng phạm vi bao phủ này\nc) Không đúng. Kỹ thuật kiểm tra hộp trắng có thể được sử dụng để thực hiện đánh giá (kiểm thử tĩnh (static testing))\nđ) Đúng. Đây chính là điểm yếu của kỹ thuật kiểm thử hộp trắng. Họ không thể xác định việc triển khai còn thiếu vì chúng chỉ dựa trên cấu trúc test object (đối tượng kiểm thử) chứ không dựa trên đặc tả yêu cầu\n\nTham chiếu: FL-4.3.3 (K2)"
  },
  {
    "n": 26,
    "ref": "Question #26 [FL-4.4.1]",
    "stem": "Which of the following BEST describes the concept behind error guessing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers"
      },
      {
        "k": "b",
        "t": "B) Error guessing involves using your personal experience of development and the errors you made as a developer"
      },
      {
        "k": "c",
        "t": "C) Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it"
      },
      {
        "k": "d",
        "t": "D) Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây TỐT NHẤT mô tả khái niệm đằng sau việc đoán lỗi?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đoán lỗi liên quan đến việc sử dụng kiến thức và kinh nghiệm của bạn về các lỗi được tìm thấy trong quá khứ và các lỗi điển hình do nhà phát triển mắc phải\n  B) Đoán lỗi liên quan đến việc sử dụng kinh nghiệm phát triển cá nhân của bạn và những lỗi bạn đã mắc phải với tư cách là nhà phát triển\n  C) Việc đoán lỗi yêu cầu bạn phải tưởng tượng rằng bạn là người dùng test object (đối tượng kiểm thử) và đoán các lỗi mà người dùng có thể mắc phải khi tương tác với đối tượng đó\n  D) Việc đoán lỗi yêu cầu bạn phải nhanh chóng lặp lại nhiệm vụ phát triển để xác định loại lỗi mà nhà phát triển có thể mắc phải\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. Khái niệm cơ bản đằng sau việc đoán lỗi là người kiểm thử cố gắng đoán lỗi nào có thể do nhà phát triển tạo ra và lỗi nào có thể xảy ra trong đối tượng kiểm thử dựa trên kinh nghiệm trong quá khứ (và đôi khi là danh sách kiểm tra)\nb) Không đúng. Mặc dù người kiểm thử từng là nhà phát triển có thể sử dụng kinh nghiệm cá nhân của họ để giúp họ khi thực hiện việc đoán lỗi, nhưng kỹ thuật kiểm thử không dựa trên kiến thức phát triển trước đó.\nc) Không đúng. Đoán lỗi không phải là một kỹ thuật hữu dụng để đoán xem người dùng có thể không tương tác với test object (đối tượng kiểm thử) như thế nào\nđ) Không đúng. Việc sao chép nhiệm vụ phát triển có một số sai sót khiến nó không thực tế, chẳng hạn như người kiểm thử có kỹ năng tương đương với nhà phát triển và thời gian cần thiết để thực hiện quá trình phát triển. Đó không phải là lỗi đoán\n\nTham chiếu: FL-4.4.1 (K2)"
  },
  {
    "n": 27,
    "ref": "Question #27 [FL-4.4.2]",
    "stem": "In your project there has been a delay in the release of a brand-new application and test execution  started late, but you have very detailed domain knowledge and good analytical skills. The full list of  requirements has not yet been shared with the team, but management is asking for some test results  to be presented.    Which test technique fits BEST in this situation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Checklist-based testing"
      },
      {
        "k": "b",
        "t": "B) Error guessing"
      },
      {
        "k": "c",
        "t": "C) Exploratory testing"
      },
      {
        "k": "d",
        "t": "D) Branch testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong dự án của bạn đã có sự chậm trễ trong việc phát hành một ứng dụng hoàn toàn mới và quá trình thực thi kiểm thử bắt đầu muộn nhưng bạn có kiến ​​thức về miền rất chi tiết và kỹ năng phân tích tốt. Danh sách đầy đủ các yêu cầu vẫn chưa được chia sẻ với nhóm, nhưng ban quản lý đang yêu cầu trình bày một số kết quả kiểm tra.    Kỹ thuật kiểm tra nào phù hợp TỐT NHẤT trong tình huống này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra dựa trên danh sách kiểm tra\n  B) Lỗi đoán\n  C) Kiểm thử thăm dò (exploratory testing)\n  D) Kiểm tra chi nhánh\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Đây là một sản phẩm mới. Có thể bạn chưa có danh sách kiểm tra và các điều kiện kiểm tra có thể không được biết do thiếu yêu cầu\nb) Không đúng. Đây là một sản phẩm mới. Bạn có thể không có đủ thông tin để đoán lỗi chính xác\nc) Đúng. kiểm thử thăm dò (exploratory testing) hữu ích nhất khi có ít thông số kỹ thuật đã biết và/hoặc có mốc thời gian cấp bách để kiểm thử\nđ) Không đúng. Việc kiểm tra chi nhánh tốn nhiều thời gian và ban quản lý của bạn hiện đang hỏi về một số kết quả kiểm tra. Ngoài ra, kiểm thử nhánh không liên quan đến kiến ​​thức miền\n\nTham chiếu: FL-4.4.2 (K2)"
  },
  {
    "n": 28,
    "ref": "Question #28 [FL-4.5.2]",
    "stem": "Which of the following BEST describes the way acceptance criteria can be documented?",
    "opts": [
      {
        "k": "a",
        "t": "A) Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story"
      },
      {
        "k": "b",
        "t": "B) Using the given/when/then format to describe an example test condition related to a given user story"
      },
      {
        "k": "c",
        "t": "C) Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others"
      },
      {
        "k": "d",
        "t": "D) Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây TỐT NHẤT mô tả cách ghi lại các tiêu chí chấp nhận?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Thực hiện hồi cứu để xác định nhu cầu thực tế của các bên liên quan về một câu chuyện nhất định của người dùng\n  B) Sử dụng định dạng đã cho/khi/sau đó để mô tả một điều kiện kiểm thử mẫu liên quan đến một câu chuyện nhất định của người dùng\n  C) Sử dụng giao tiếp bằng lời nói để giảm nguy cơ người khác hiểu sai tiêu chí chấp nhận\n  D) Ghi lại các rủi ro liên quan đến câu chuyện của người dùng nhất định trong kế hoạch kiểm tra để tạo điều kiện thuận lợi cho việc kiểm tra dựa trên rủi ro đối với câu chuyện của người dùng nhất định\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Hồi tưởng được sử dụng để ghi lại các bài học kinh nghiệm và cải tiến quá trình phát triển và kiểm thử, không phải để ghi lại các tiêu chí chấp nhận\nb) Đúng. Đây là cách tiêu chuẩn để ghi lại các tiêu chí chấp nhận\nc) Không đúng. Giao tiếp bằng lời nói không cho phép ghi lại các tiêu chí chấp nhận một cách vật lý như một phần câu chuyện của người dùng (khía cạnh “thẻ” trong mô hình 3C)\nđ) Không đúng. Tiêu chí chấp nhận có liên quan đến câu chuyện của người dùng, không phải kế hoạch kiểm tra. Ngoài ra, tiêu chí chấp nhận là các điều kiện phải được đáp ứng để quyết định xem câu chuyện của người dùng đã hoàn chỉnh hay chưa. Rủi ro không phải là điều kiện như vậy\n\nTham chiếu: FL-4.5.2 (K2)"
  },
  {
    "n": 29,
    "ref": "Question #29 [FL-4.5.3]",
    "stem": "Consider the following user story:  As an Editor  I want to review content before it is published  so that I can ensure the grammar is correct    and its acceptance criteria:  •  The user can log in to the content management system with \"Editor\" role  •  The editor can view existing content pages  •  The editor can edit the page content  •  The editor can add markup comments  •  The editor can save changes  •  The editor can reassign to the \"content owner\" role to make updates  Which of the following is the BEST example of an ATDD test for this user story?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test if the editor can save the document after edit the page content"
      },
      {
        "k": "b",
        "t": "B) Test if the content owner can log in and make updates to the content"
      },
      {
        "k": "c",
        "t": "C) Test if the editor can schedule the edited content for publication"
      },
      {
        "k": "d",
        "t": "D) Test if the editor can reassign to another editor to make updates"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét câu chuyện của người dùng sau: Với tư cách là Biên tập viên, tôi muốn xem lại nội dung trước khi xuất bản để tôi có thể đảm bảo ngữ pháp đúng và tiêu chí chấp nhận của nó: • Người dùng có thể đăng nhập vào hệ thống quản lý nội dung với vai trò \"Người chỉnh sửa\" • Người chỉnh sửa có thể xem các trang nội dung hiện có • Người chỉnh sửa có thể chỉnh sửa nội dung trang • Người chỉnh sửa có thể thêm nhận xét đánh dấu • Người chỉnh sửa có thể lưu các thay đổi • Người chỉnh sửa có thể gán lại vai trò \"chủ sở hữu nội dung\" để cập nhật. Điều nào sau đây là ví dụ TỐT NHẤT về kiểm tra ATDD cho câu chuyện người dùng này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra xem người chỉnh sửa có thể lưu tài liệu sau khi chỉnh sửa nội dung trang không\n  B) Kiểm tra xem chủ sở hữu nội dung có thể đăng nhập và cập nhật nội dung hay không\n  C) Kiểm tra xem người biên tập có thể lên lịch xuất bản nội dung đã chỉnh sửa hay không\n  D) Kiểm tra xem người chỉnh sửa có thể gán lại cho người chỉnh sửa khác để thực hiện cập nhật không\n\n[GIẢI THÍCH CHI TIẾT]\nA) Đúng. kiểm thử này bao gồm hai tiêu chí chấp nhận: một về chỉnh sửa tài liệu và một về lưu các thay đổi\nb) Không đúng. Tiêu chí chấp nhận bao gồm các hoạt động của người biên tập, không phải hoạt động của chủ sở hữu nội dung\nc) Không đúng. Lên lịch xuất bản nội dung đã chỉnh sửa có thể là một tính năng hay nhưng nó không nằm trong tiêu chí chấp nhận\nđ) Không đúng. Tiêu chí chấp nhận nêu rõ về việc chỉ định lại từ người chỉnh sửa cho chủ sở hữu nội dung chứ không phải cho người chỉnh sửa khác\n\nTham chiếu: FL-4.5.3 (K3)"
  },
  {
    "n": 30,
    "ref": "Question #30 [FL-5.1.2]",
    "stem": "How do testers add value to iteration and release planning?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers determine the priority of the user stories to be developed"
      },
      {
        "k": "b",
        "t": "B) Testers focus only on the functional aspects of the system to be tested"
      },
      {
        "k": "c",
        "t": "C) Testers participate in the detailed risk identification and risk assessment of user stories"
      },
      {
        "k": "d",
        "t": "D) Testers guarantee the release of high-quality software through early test design during the release planning"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTester (kiểm thử viên) tăng thêm giá trị cho việc lập kế hoạch lặp lại và phát hành như thế nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người kiểm tra xác định mức độ ưu tiên của các câu chuyện của người dùng sẽ được phát triển\n  B) Người kiểm tra chỉ tập trung vào các khía cạnh chức năng của hệ thống được kiểm tra\n  C) Tester (kiểm thử viên) tham gia vào việc xác định rủi ro chi tiết và đánh giá rủi ro của các câu chuyện của người dùng\n  D) Người kiểm thử đảm bảo việc phát hành phần mềm chất lượng cao thông qua thiết kế kiểm thử sớm trong quá trình lập kế hoạch phát hành\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Mức độ ưu tiên cho các câu chuyện của người dùng được xác định bởi đại diện doanh nghiệp cùng với nhóm phát triển\nb) Không đúng. Người kiểm tra tập trung vào cả khía cạnh chức năng và phi chức năng của hệ thống cần kiểm tra\nc) Đúng. Theo giáo trình, đây là một trong những cách mà tester (kiểm thử viên) tăng thêm giá trị cho việc lập kế hoạch lặp lại và phát hành\nđ) Không đúng. Thiết kế kiểm thử sớm không phải là một phần của kế hoạch phát hành. Thiết kế kiểm thử sớm không tự động đảm bảo việc phát hành phần mềm chất lượng\n\nTham chiếu: FL-5.1.2 (K1)"
  },
  {
    "n": 31,
    "ref": "Question #31 [FL-5.1.3]",
    "stem": "Which TWO of the following options are the exit criteria for testing a system?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test environment readiness"
      },
      {
        "k": "b",
        "t": "B) The ability to log in to the test object by the tester"
      },
      {
        "k": "c",
        "t": "C) Estimated defect density is reached"
      },
      {
        "k": "d",
        "t": "D) Requirements are translated into given/when/then format"
      },
      {
        "k": "e",
        "t": "E) Regression tests are automated"
      }
    ],
    "ans": [
      "c",
      "e"
    ],
    "multi": true,
    "exp": "[DỊCH CÂU HỎI]\nHAI lựa chọn nào sau đây là tiêu chí đầu ra để kiểm thử một hệ thống?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra mức độ sẵn sàng của môi trường\n  B) Khả năng đăng nhập vào test object (đối tượng kiểm thử) của tester (kiểm thử viên)\n  C) Mật độ lỗi ước tính đã đạt được\n  D) Các yêu cầu được dịch sang định dạng nhất định/khi/sau đó\n  E) Kiểm tra hồi quy được tự động hóa\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Sự sẵn sàng của môi trường kiểm thử là một tiêu chí về tính sẵn có của tài nguyên; do đó nó thuộc tiêu chí đầu vào\nb) Không đúng. Đây là tiêu chí về tính sẵn có của nguồn lực; do đó nó thuộc tiêu chí đầu vào\nc) Đúng. Mật độ khiếm khuyết (defect) ước tính là thước đo cho sự siêng năng; do đó nó thuộc về tiêu chí đầu ra (exit criteria).\nđ) Không đúng. Các yêu cầu được dịch sang một định dạng nhất định sẽ tạo ra các yêu cầu có thể kiểm tra được; do đó nó thuộc tiêu chí đầu vào\nđ) Đúng. Tự động hóa các bài kiểm tra hồi quy là một tiêu chí hoàn thành;  do đó nó thuộc tiêu chí đầu ra (exit criteria)\n\nTham chiếu: FL-5.1.3 (K2)"
  },
  {
    "n": 32,
    "ref": "Question #32 [FL-5.1.4]",
    "stem": "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk  feature. The following estimates were made:  •  Most optimistic estimation: 2 person-hours  •  Most likely estimation: 11 person-hours  •  Most pessimistic estimation: 14 person-hours  What is the final estimate?",
    "opts": [
      {
        "k": "a",
        "t": "A) 9 person-hours"
      },
      {
        "k": "b",
        "t": "B) 14 person-hours"
      },
      {
        "k": "c",
        "t": "C) 11 person-hours"
      },
      {
        "k": "d",
        "t": "D) 10 person-hours"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhóm của bạn sử dụng kỹ thuật ước tính ba điểm để ước tính nỗ lực kiểm thử cho một tính năng mới có rủi ro cao. Các ước tính sau đây đã được thực hiện: • Ước tính lạc quan nhất: 2 giờ người • Ước tính có khả năng nhất: 11 giờ người • Ước tính bi quan nhất: 14 giờ người Ước tính cuối cùng là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 9 giờ người\n  B) 14 người-giờ\n  C) 11 người-giờ\n  D) 10 người-giờ\n\n[GIẢI THÍCH CHI TIẾT]\nTrong kỹ thuật ước lượng ba điểm: E = (lạc quan + 4*rất có thể + bi quan)/6 E = (2+(4*11)+14)/6 = 10 Do đó:\na) Không đúng\nb) Không đúng\nc) Không đúng\nđ) Đúng\n\nTham chiếu: FL-5.1.4 (K3)"
  },
  {
    "n": 33,
    "ref": "Question #33 [FL-5.1.5]",
    "stem": "You are testing a mobile application that allows users to find a nearby restaurant based on the type  of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number  means a higher priority), and dependencies:    Test case  number  Test condition covered  Priority  Logical  dependency  TC 001  Select type of food  3  none  TC 002  Select restaurant  2  TC 001  TC 003  Get direction  1  TC 002  TC 004  Call restaurant  2  TC 002  TC 005  Make reservation  3  TC 002  Which of the following test cases should be executed as the third one?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) TC 003"
      },
      {
        "k": "b",
        "t": "B) TC 005"
      },
      {
        "k": "c",
        "t": "C) TC 002"
      },
      {
        "k": "d",
        "t": "D) TC 001"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một ứng dụng di động cho phép người dùng tìm một nhà hàng gần đó dựa trên loại đồ ăn họ muốn ăn. Hãy xem xét danh sách các trường hợp kiểm thử, mức độ ưu tiên (nghĩa là số nhỏ hơn có nghĩa là mức độ ưu tiên cao hơn) và các phụ thuộc sau đây: Số trường hợp kiểm thử Điều kiện kiểm thử được bao gồm Ưu tiên Phụ thuộc logic TC 001 Chọn loại thực phẩm 3 không có TC 002 Chọn nhà hàng 2 TC 001 TC 003 Nhận chỉ dẫn 1 TC 002 TC 004 Gọi nhà hàng 2 TC 002 TC 005 Đặt chỗ 3 TC 002 Trường hợp kiểm thử nào sau đây nên được thực thi làm trường hợp thứ ba một?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) TC 003\n  B) TC 005\n  C) TC 002\n  D) TC 001\n\n[GIẢI THÍCH CHI TIẾT]\nKiểm tra TC 001 phải đến trước, tiếp theo là TC 002 để thỏa mãn sự phụ thuộc.  Sau đó là TC 003 để đáp ứng mức độ ưu tiên rồi đến TC 004, tiếp theo là TC 005. Như vậy:\na) Đúng\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-5.1.5 (K3)"
  },
  {
    "n": 34,
    "ref": "Question #34 [FL-5.1.7]",
    "stem": "Consider the following test categories (1-4) and agile testing quadrants (A-D):  1. Usability testing  2. Component testing  3. Functional testing  4. Reliability testing    A. Agile testing quadrant Q1: technology facing, supporting the development team  B. Agile testing quadrant Q2: business facing, supporting the development team  C. Agile testing quadrant Q3: business facing, critique the product  D. Agile testing quadrant Q4: technology facing, critique the product  How do the following test categories map onto the agile testing quadrants?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1C, 2A, 3B, 4D"
      },
      {
        "k": "b",
        "t": "B) 1D, 2A, 3C, 4B"
      },
      {
        "k": "c",
        "t": "C) 1C, 2B, 3D, 4A"
      },
      {
        "k": "d",
        "t": "D) 1D, 2B, 3C, 4A"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét các loại kiểm thử sau (1-4) và các góc phần tư kiểm thử linh hoạt (A-D): 1. Kiểm thử khả năng sử dụng 2. Kiểm thử thành phần 3. Kiểm thử chức năng 4. Kiểm thử độ tin cậy A. Kiểm thử linh hoạt Q1: hướng tới công nghệ, hỗ trợ nhóm phát triển B. Kiểm thử linh hoạt Q2: kinh doanh, hỗ trợ nhóm phát triển C. Kiểm thử linh hoạt Q3: kinh doanh, phê bình sản phẩm D. Kiểm thử linh hoạt Q4: đối mặt với công nghệ, phê bình sản phẩm Các hạng mục kiểm thử sau đây thực hiện như thế nào ánh xạ vào các tứ phân vị kiểm thử (testing quadrants) linh hoạt?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1C, 2A, 3B, 4D\n  B) 1D, 2A, 3C, 4B\n  C) 1C, 2B, 3D, 4A\n  D) 1D, 2B, 3C, 4A\n\n[GIẢI THÍCH CHI TIẾT]\nXem xét: • Kiểm tra khả năng sử dụng nằm trong Q3 (1 – C) • Kiểm tra thành phần nằm trong Q1 (2 – A) • Kiểm tra chức năng nằm trong Q2 (3 – B) • Kiểm tra độ tin cậy nằm trong Q4 (4 – D) Như vậy:\na) Đúng\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\nTham chiếu: FL-5.1.7 (K2)"
  },
  {
    "n": 35,
    "ref": "Question #35 [FL-5.2.4]",
    "stem": "During a risk analysis the following risk was identified and assessed:  •  Risk: Response time is too long to generate a report  •  Risk likelihood: medium; risk impact: high  •  Response to risk:  o An independent test team performs performance efficiency testing during system  testing  o A selected sample of end users performs alpha testing and beta testing before the  release  What measure is proposed to be taken in response to this analyzed risk?",
    "opts": [
      {
        "k": "a",
        "t": "A) Risk acceptance"
      },
      {
        "k": "b",
        "t": "B) Contingency plan"
      },
      {
        "k": "c",
        "t": "C) Risk mitigation"
      },
      {
        "k": "d",
        "t": "D) Risk transfer"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong quá trình phân tích rủi ro, rủi ro sau đã được xác định và đánh giá: • Rủi ro: Thời gian phản hồi quá lâu để tạo báo cáo • Khả năng xảy ra rủi ro: trung bình; tác động của rủi ro: cao • Ứng phó với rủi ro: o nhóm kiểm thử độc lập thực hiện kiểm tra hiệu suất hiệu suất trong quá trình kiểm thử hệ thống o Một mẫu người dùng cuối được chọn thực thi kiểm thử alpha và kiểm thử beta trước khi phát hành Biện pháp nào được đề xuất thực hiện để ứng phó với rủi ro được phân tích này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Chấp nhận rủi ro\n  B) Kế hoạch dự phòng\n  C) Giảm thiểu rủi ro\n  D) Chuyển giao rủi ro\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Chúng tôi không chấp nhận rủi ro; hành động cụ thể được đề xuất\nb) Không đúng. Không có phương án dự phòng nào được đề xuất\nc) Đúng. Các hành động được đề xuất có liên quan đến kiểm thử, là một hình thức giảm thiểu rủi ro\nđ) Không đúng. Rủi ro không được chuyển giao mà được giảm nhẹ\n\nTham chiếu: FL-5.2.4 (K2)"
  },
  {
    "n": 36,
    "ref": "Question #36 [FL-5.3.3]",
    "stem": "Which work product can be used by an agile team to show the amount of work that has been  completed and the amount of total work remaining for a given iteration?",
    "opts": [
      {
        "k": "a",
        "t": "A) Acceptance criteria"
      },
      {
        "k": "b",
        "t": "B) Defect report"
      },
      {
        "k": "c",
        "t": "C) Test completion report"
      },
      {
        "k": "d",
        "t": "D) Burndown chart"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhóm linh hoạt có thể sử dụng sản phẩm công việc nào để hiển thị số lượng công việc đã hoàn thành và tổng số công việc còn lại cho một lần lặp nhất định?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tiêu chí chấp nhận\n  B) Báo cáo lỗi\n  C) Báo cáo hoàn thành kiểm thử\n  D) Biểu đồ đốt cháy\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Tiêu chí chấp nhận là các điều kiện được sử dụng để quyết định xem câu chuyện của người dùng đã sẵn sàng hay chưa. Họ không thể hiển thị tiến độ công việc\nb) Không đúng. báo cáo lỗi (defect report) thông báo về các khiếm khuyết. Họ không hiển thị tiến độ công việc\nc) Không đúng. Báo cáo hoàn thành kiểm thử có thể được tạo sau khi quá trình lặp kết thúc, vì vậy nó sẽ không hiển thị tiến trình liên tục trong một lần lặp\nđ) Đúng. Biểu đồ đốt cháy là biểu đồ thể hiện công việc còn lại phải làm so với thời gian còn lại. Chúng được cập nhật hàng ngày nên có thể liên tục hiển thị tiến độ công việc\n\nTham chiếu: FL-5.3.3 (K2)"
  },
  {
    "n": 37,
    "ref": "Question #37 [FL-5.4.1]",
    "stem": "You need to update one of the automated test scripts to be in line with a new requirement. Which  process indicates that you create a new version of the test script in the test repository?",
    "opts": [
      {
        "k": "a",
        "t": "A) Traceability management"
      },
      {
        "k": "b",
        "t": "B) Maintenance testing"
      },
      {
        "k": "c",
        "t": "C) Configuration management"
      },
      {
        "k": "d",
        "t": "D) Requirements engineering"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn cần cập nhật một trong các tập lệnh kiểm thử tự động để phù hợp với yêu cầu mới. Quá trình nào cho biết rằng bạn tạo phiên bản mới của tập lệnh kiểm thử trong kho lưu trữ kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Quản lý truy xuất nguồn gốc\n  B) Kiểm tra bảo trì\n  C) Quản lý cấu hình\n  D) Kỹ thuật yêu cầu\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Truy xuất nguồn gốc là mối quan hệ giữa hai hoặc nhiều sản phẩm công việc, không phải giữa các phiên bản khác nhau của cùng một sản phẩm công việc\nb) Không đúng. Kiểm tra bảo trì là kiểm tra các thay đổi; nó không liên quan chặt chẽ đến phiên bản\nc) Đúng. Để hỗ trợ kiểm tra, quản lý cấu hình có thể liên quan đến việc kiểm soát phiên bản của tất cả các hạng mục kiểm tra\nđ) Không đúng. Kỹ thuật yêu cầu là việc khơi gợi, ghi chép và quản lý các yêu cầu; nó không liên quan chặt chẽ đến việc lập phiên bản tập lệnh kiểm thử\n\nTham chiếu: FL-5.4.1 (K2)"
  },
  {
    "n": 38,
    "ref": "Question #38 [FL-5.5.1]",
    "stem": "You received the following defect report from the developers stating that the anomaly described in  this test report is not reproducible.  Application hangs up   2022-May-03 – John Doe – Rejected  The application hangs up after entering “Test input: $ä” in the Name field on the new  user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried  with other test admin accounts, same issue. No error message received; log (see  attached) contains fatal error notification. Based on the test case TC-1305, the  application should accept the provided input and create the user. Please fix with high  priority, this feature is related to REQ-0012, which is a critical new business requirement.  What critical information is MISSING from this test report that would have been useful for the  developers?",
    "opts": [
      {
        "k": "a",
        "t": "A) Expected result and actual result"
      },
      {
        "k": "b",
        "t": "B) References and defect status"
      },
      {
        "k": "c",
        "t": "C) Test environment and test item"
      },
      {
        "k": "d",
        "t": "D) Priority and severity"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đã nhận được báo cáo lỗi sau đây từ các nhà phát triển cho biết rằng điểm bất thường được mô tả trong báo cáo kiểm thử này không thể tái tạo được.  Ứng dụng bị treo 03/05/2022 – John Doe – Bị từ chối Ứng dụng bị treo sau khi nhập “Đầu vào kiểm tra: $ä” vào trường Tên trên màn hình tạo người dùng mới. Đã thử đăng xuất, đăng nhập bằng tài khoản test_admin01, vấn đề tương tự. Đã thử với các tài khoản quản trị viên kiểm thử khác, vấn đề tương tự. Không nhận được thông báo lỗi; log (xem đính kèm) chứa thông báo lỗi nghiêm trọng. Dựa trên test case (ca kiểm thử) TC-1305, ứng dụng phải chấp nhận đầu vào được cung cấp và tạo người dùng. Vui lòng khắc phục ở mức độ ưu tiên cao, tính năng này có liên quan đến REQ-0012, đây là một yêu cầu kinh doanh mới quan trọng.  Thông tin quan trọng nào bị THIẾU trong báo cáo kiểm thử này mà có thể hữu ích cho các nhà phát triển?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kết quả mong đợi và kết quả thực tế\n  B) Tài liệu tham khảo và tình trạng lỗi\n  C) Môi trường kiểm thử và mục kiểm thử\n  D) Mức độ ưu tiên và mức độ nghiêm trọng\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Kết quả mong đợi là “ứng dụng phải chấp nhận đầu vào được cung cấp và tạo người dùng”. Kết quả thực tế là “Ứng dụng bị treo sau khi nhập” Kiểm tra đầu vào. $ä””.\nb) Không đúng. Có một tham chiếu đến trường hợp kiểm thử và yêu cầu liên quan và nó nói rằng lỗi bị loại bỏ. Ngoài ra, trạng thái lỗi sẽ không hữu ích lắm cho các nhà phát triển\nc) Đúng. Chúng tôi không biết phát hiện sự bất thường trong môi trường kiểm thử nào và chúng tôi cũng không biết ứng dụng nào (và phiên bản của nó) bị ảnh hưởng\nđ) Không đúng. Báo cáo lỗi nêu rõ rằng sự bất thường này là khẩn cấp, đó là một vấn đề toàn cầu (tức là, nhiều, nếu không phải tất cả, các tài khoản quản trị kiểm thử đều bị ảnh hưởng) và cho biết tác động này rất cao đối với các bên liê"
  },
  {
    "n": 39,
    "ref": "Question #39 [FL-6.1.1]",
    "stem": "Which test activity does a data preparation tool support?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test monitoring and test control"
      },
      {
        "k": "b",
        "t": "B) Test analysis"
      },
      {
        "k": "c",
        "t": "C) Test design and test implementation"
      },
      {
        "k": "d",
        "t": "D) Test completion"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCông cụ chuẩn bị dữ liệu hỗ trợ hoạt động kiểm thử nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra giám sát và kiểm soát kiểm tra\n  B) Phân tích kiểm thử\n  C) Thiết kế kiểm thử và thực thi kiểm thử\n  D) Hoàn thành kiểm tra\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. Giám sát kiểm thử bao gồm việc kiểm tra liên tục tất cả các hoạt động và so sánh tiến độ thực tế với kế hoạch kiểm thử. Kiểm soát kiểm thử bao gồm việc thực hiện các hành động cần thiết để đáp ứng các mục tiêu kiểm thử của kế hoạch kiểm thử. Không có dữ liệu kiểm thử nào được chuẩn bị trong các hoạt động này.\nb) Không đúng. Phân tích kiểm thử bao gồm phân tích cơ sở kiểm thử để xác định các điều kiện kiểm thử và ưu tiên chúng. Dữ liệu kiểm thử không được chuẩn bị trong hoạt động này.\nc) Đúng. Thiết kế và triển khai kiểm thử đều có thể bao gồm việc xác định, tạo hoặc thu thập testware (chế phẩm kiểm thử) cần thiết để thực thi kiểm thử (ví dụ: dữ liệu kiểm thử).\nđ) Không đúng. Các hoạt động hoàn thành kiểm thử diễn ra tại các mốc quan trọng của dự án (ví dụ: phát hành, kết thúc vòng lặp, hoàn thành cấp độ kiểm thử), do đó đã quá muộn để chuẩn bị dữ liệu kiểm thử.\n\nTham chiếu: FL-6.1.1 (K2)"
  },
  {
    "n": 40,
    "ref": "Question #40 [FL-6.2.1]",
    "stem": "Which item correctly identifies a potential risk of performing test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) It may introduce unknown regressions in production"
      },
      {
        "k": "b",
        "t": "B) Sufficient efforts to maintain testware may not be properly allocated"
      },
      {
        "k": "c",
        "t": "C) Testing tools and associated testware may not be sufficiently relied upon"
      },
      {
        "k": "d",
        "t": "D) It may reduce the time allocated for manual testing Appendix: Additional Questions"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMục nào xác định chính xác nguy cơ tiềm ẩn khi thực hiện tự động hóa kiểm thử (test automation)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nó có thể đưa ra các hồi quy chưa biết trong sản xuất\n  B) Những nỗ lực đầy đủ để duy trì phần mềm kiểm tra có thể không được phân bổ hợp lý\n  C) Các công cụ kiểm tra và phần mềm kiểm tra liên quan có thể không đủ tin cậy\n  D) Nó có thể giảm thời gian phân bổ cho việc kiểm tra thủ công. Phụ lục: Câu hỏi bổ sung\n\n[GIẢI THÍCH CHI TIẾT]\nA) Không đúng. tự động hóa kiểm thử (test automation) không đưa ra các hồi quy không xác định trong sản xuất\nb) Đúng. Phân bổ sai nỗ lực để duy trì phần mềm kiểm tra là một rủi ro\nc) Không đúng. Các công cụ kiểm tra phải được chọn sao cho có thể tin cậy vào chúng và phần mềm kiểm tra của chúng\nđ) Không đúng. Mục tiêu chính của tự động hóa kiểm thử (test automation) là giảm kiểm thử thủ công. Vì vậy, đây là một lợi ích, không phải là một rủi ro\n\nTham chiếu: FL-6.2.1 (K1)"
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
