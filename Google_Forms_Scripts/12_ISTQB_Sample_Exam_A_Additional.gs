/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ISTQB Sample Exam A — Additional (26 câu) (26 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ISTQB Sample Exam A — Additional (26 câu)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (26 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question #A1 [FL-1.1.2]",
    "stem": "You were given a task to analyze and fix causes of failures in a new system to be released.    Which activity are you performing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Debugging"
      },
      {
        "k": "b",
        "t": "B) Software testing"
      },
      {
        "k": "c",
        "t": "C) Requirement elicitation"
      },
      {
        "k": "d",
        "t": "D) Defect management"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn được giao nhiệm vụ phân tích và khắc phục nguyên nhân gây ra lỗi trong hệ thống mới sắp được phát hành.    Bạn đang thực hiện hoạt động nào?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Gỡ lỗi\n  B) Kiểm thử phần mềm\n  C) Gợi ý yêu cầu\n  D) Quản lý lỗi\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Gỡ lỗi là quá trình tìm kiếm, phân tích và loại bỏ các nguyên nhân gây ra lỗi trong một thành phần hoặc hệ thống\nb) Không đúng. Kiểm tra là quá trình liên quan đến việc lập kế hoạch, chuẩn bị và đánh giá một thành phần hoặc hệ thống và các sản phẩm công việc liên quan để xác định rằng chúng đáp ứng các yêu cầu cụ thể, để chứng minh rằng chúng phù hợp với mục đích và để phát hiện các khiếm khuyết. Nó không liên quan đến việc khắc phục nguyên nhân hư hỏng\nc) Không đúng. Gợi ý yêu cầu là quá trình thu thập, nắm bắt và hợp nhất các yêu cầu từ các nguồn có sẵn. Nó không liên quan đến việc khắc phục nguyên nhân hư hỏng\nđ) Không đúng. Quản lý lỗi là quá trình nhận biết, ghi lại, phân loại, điều tra, giải quyết và xử lý các lỗi.  Nó không liên quan đến việc khắc phục nguyên nhân hư hỏng\n\n📌 Kiến thức: FL-1.1.2 (K2)"
  },
  {
    "n": 2,
    "ref": "Question #A2 [FL-1.2.2]",
    "stem": "In many software organizations the test department is called the Quality Assurance (QA) department.  Is this sentence correct or not and why?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is correct. Testing and QA mean exactly the same thing"
      },
      {
        "k": "b",
        "t": "B) It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues"
      },
      {
        "k": "c",
        "t": "C) It is not correct. Testing is something more; testing includes all activities with regard to quality. QA focuses on quality-related processes"
      },
      {
        "k": "d",
        "t": "D) It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nTrong nhiều tổ chức phần mềm, bộ phận kiểm thử được gọi là bộ phận Đảm bảo Chất lượng (QA).  Câu này đúng hay sai và tại sao?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Nó đúng. Kiểm tra và QA có nghĩa giống hệt nhau\n  B) Nó đúng. Những tên này có thể được sử dụng thay thế cho nhau vì cả kiểm tra và đảm bảo chất lượng đều tập trung hoạt động của họ vào các vấn đề chất lượng giống nhau\n  C) Nó không đúng. kiểm thử là một cái gì đó hơn thế nữa; Kiểm tra bao gồm tất cả các hoạt động liên quan đến chất lượng. QA tập trung vào các quy trình liên quan đến chất lượng\n  D) Nó không đúng. QA tập trung vào các quy trình liên quan đến chất lượng trong khi kiểm thử tập trung vào việc chứng minh rằng một thành phần hoặc hệ thống phù hợp với mục đích và phát hiện lỗi\n\n💡 GIẢI THÍCH CHI TIẾT:\nXem xét: Kiểm tra và đảm bảo chất lượng không giống nhau. Kiểm thử là quá trình bao gồm tất cả các hoạt động trong vòng đời phát triển phần mềm (SDLC), cả tĩnh và động, liên quan đến việc lập kế hoạch, chuẩn bị và đánh giá một thành phần hoặc hệ thống và các sản phẩm công việc liên quan để xác định rằng chúng đáp ứng các yêu cầu cụ thể, để chứng minh rằng chúng phù hợp với mục đích và để phát hiện lỗi. Đảm bảo chất lượng tập trung vào việc thiết lập, giới thiệu, giám sát, cải tiến và tuân thủ các quy trình liên quan đến chất lượng.    Như vậy:\na) Không đúng\nb) Không đúng\nc) Không đúng\nđ) Đúng\n\n📌 Kiến thức: FL-1.2.2 (K1)"
  },
  {
    "n": 3,
    "ref": "Question #A3 [FL-1.2.3]",
    "stem": "A phone ringing in a neighboring cubicle distracts a programmer causing him to improperly program  the logic that checks the upper boundary of an input variable. Later, during system testing, a tester  notices that this input field accepts invalid input values.    Which of the following correctly describes an incorrectly coded upper bound?",
    "opts": [
      {
        "k": "a",
        "t": "A) The root cause"
      },
      {
        "k": "b",
        "t": "B) A failure"
      },
      {
        "k": "c",
        "t": "C) An error"
      },
      {
        "k": "d",
        "t": "D) A defect"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nMột chiếc điện thoại đổ chuông ở phòng bên cạnh khiến lập trình viên mất tập trung, khiến anh ta lập trình không đúng logic để kiểm tra ranh giới trên của biến đầu vào. Sau đó, trong quá trình kiểm tra hệ thống, người kiểm tra nhận thấy rằng trường đầu vào này chấp nhận các giá trị đầu vào không hợp lệ.    Điều nào sau đây mô tả đúng giới hạn trên được mã hóa không chính xác?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Nguyên nhân sâu xa\n  B) Một thất bại\n  C) Một lỗi\n  D) Một khiếm khuyết\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Nguyên nhân sâu xa là sự mất tập trung mà lập trình viên gặp phải khi lập trình\nb) Không đúng. Chấp nhận đầu vào không hợp lệ là một thất bại\nc) Không đúng. Lỗi trong suy nghĩ khiến code bị lỗi\nđ) Đúng. Vấn đề trong mã là một lỗi\n\n📌 Kiến thức: FL-1.2.3 (K2)"
  },
  {
    "n": 4,
    "ref": "Question #A4 [FL-1.4.3]",
    "stem": "Consider the following testware.  Test Charter #04.018  Session time: 1h  Explore:  Registration page  With:  Different sets of incorrect input data  To discover:  Defects related to accepting the registration process with the  incorrect input  Which test activity produces this testware as an output?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Test planning"
      },
      {
        "k": "b",
        "t": "B) Test monitoring and test control"
      },
      {
        "k": "c",
        "t": "C) Test analysis"
      },
      {
        "k": "d",
        "t": "D) Test design"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHãy xem xét phần mềm kiểm tra sau đây.  test charter #04.018 Thời gian phiên: 1h Khám phá: Trang đăng ký Với: Các bộ dữ liệu đầu vào không chính xác khác nhau Để khám phá: Các khiếm khuyết liên quan đến việc chấp nhận quá trình đăng ký với đầu vào không chính xác hoạt động kiểm thử nào tạo ra testware (chế phẩm kiểm thử) này làm đầu ra?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Lập kế hoạch kiểm tra\n  B) Kiểm tra giám sát và kiểm soát kiểm tra\n  C) Phân tích kiểm thử\n  D) Thiết kế kiểm thử\n\n💡 GIẢI THÍCH CHI TIẾT:\nPhần mềm kiểm thử đang được xem xét là một điều lệ kiểm thử. Các điều lệ kiểm thử là đầu ra của thiết kế kiểm thử. Do đó:\na) Không đúng\nb) Không đúng\nc) Không đúng\nđ) Đúng\n\n📌 Kiến thức: FL-1.4.3 (K2)"
  },
  {
    "n": 5,
    "ref": "Question #A5 [FL-1.4.4]",
    "stem": "Which of the following is the BEST example of how traceability supports testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Performing the impact analysis of a change will give information about the completion of the tests"
      },
      {
        "k": "b",
        "t": "B) Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk"
      },
      {
        "k": "c",
        "t": "C) Performing the impact analysis of a change will help selecting the right test cases for regression testing"
      },
      {
        "k": "d",
        "t": "D) Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data to achieve the assumed coverage of the test object"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ví dụ TỐT NHẤT về cách truy xuất nguồn gốc hỗ trợ kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Thực hiện phân tích tác động của một thay đổi sẽ cung cấp thông tin về việc hoàn thành các bài kiểm tra\n  B) Phân tích khả năng truy xuất nguồn gốc giữa các trường hợp kiểm thử và kết quả kiểm thử sẽ cung cấp thông tin về mức độ rủi ro tồn dư ước tính\n  C) Thực hiện phân tích tác động của một thay đổi sẽ giúp chọn các test case (ca kiểm thử) phù hợp để kiểm thử hồi quy (regression testing)\n  D) Phân tích khả năng truy xuất nguồn gốc giữa cơ sở kiểm thử, đối tượng kiểm thử và trường hợp kiểm thử sẽ giúp lựa chọn dữ liệu kiểm thử để đạt được phạm vi bao phủ giả định của đối tượng kiểm thử.\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Việc thực hiện phân tích tác động sẽ không cung cấp thông tin về tính đầy đủ của các bài kiểm thử. Phân tích tác động của các thay đổi sẽ giúp lựa chọn các test case (ca kiểm thử) phù hợp để thực hiện\nb) Không đúng. Truy xuất nguồn gốc không cung cấp thông tin về mức độ rủi ro còn lại ước tính nếu các test case (ca kiểm thử) không được truy ngược lại rủi ro\nc) Đúng. Thực hiện phân tích tác động của các thay đổi giúp lựa chọn các test case (ca kiểm thử) cho kiểm thử hồi quy (regression testing)\nđ) Không đúng. Phân tích khả năng truy xuất nguồn gốc giữa cơ sở kiểm thử, đối tượng kiểm thử và trường hợp kiểm thử không giúp ích gì trong việc lựa chọn dữ liệu kiểm thử để đạt được phạm vi bao phủ giả định của đối tượng kiểm thử. Việc chọn dữ liệu kiểm thử liên quan nhiều hơn đến phân tích kiểm thử và thực thi kiểm thử chứ không phải truy xuất nguồn gốc\n\n📌 Kiến thức: FL-1.4.4 (K2)"
  },
  {
    "n": 6,
    "ref": "Question #A6 [FL-1.5.3]",
    "stem": "Which of the following BEST explains a benefit of independence of testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team"
      },
      {
        "k": "b",
        "t": "B) If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines"
      },
      {
        "k": "c",
        "t": "C) An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system"
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
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT giải thích lợi ích của tính độc lập của kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Việc sử dụng một nhóm kiểm thử độc lập cho phép ban quản lý dự án giao trách nhiệm về chất lượng của sản phẩm cuối cùng cho nhóm kiểm thử.\n  B) Nếu có đủ khả năng chi trả cho một nhóm kiểm thử bên ngoài tổ chức thì sẽ có những lợi ích rõ ràng khi nhóm bên ngoài này không dễ dàng bị ảnh hưởng bởi những lo ngại về việc giao hàng của ban quản lý dự án và nhu cầu đáp ứng thời hạn giao hàng nghiêm ngặt\n  C) Nhóm kiểm thử độc lập có thể làm việc tách biệt với các nhà phát triển, không cần phải phân tâm với các thay đổi yêu cầu của dự án và có thể hạn chế liên lạc với các nhà phát triển để báo cáo lỗi thông qua hệ thống quản lý lỗi\n  D) Khi các thông số kỹ thuật có sự mơ hồ và không nhất quán, các giả định sẽ được đưa ra dựa trên cách giải thích của chúng và một người kiểm tra độc lập có thể hữu ích trong việc đặt câu hỏi về các giả định đó cũng như cách giải thích của nhà phát triển.\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Chất lượng phải là trách nhiệm của mọi người làm việc trong dự án chứ không phải là trách nhiệm duy nhất của nhóm kiểm thử\nb) Không đúng. Thứ nhất, sẽ không có lợi nếu nhóm kiểm thử bên ngoài không đáp ứng thời hạn giao hàng và thứ hai, không có lý do gì để tin rằng các nhóm kiểm thử bên ngoài sẽ cảm thấy họ không cần phải đáp ứng thời hạn giao hàng nghiêm ngặt.\nc) Không đúng. Việc nhóm kiểm thử làm việc hoàn toàn cô lập là một thực tế không tốt và chúng tôi mong đợi nhóm kiểm thử bên ngoài sẽ quan tâm đến việc thay đổi các yêu cầu của dự án và giao tiếp tốt với các nhà phát triển\nđ) Đúng. Thông số kỹ thuật không bao giờ hoàn hảo, có nghĩa là nhà phát triển sẽ phải đưa ra các giả định. Một tester (kiểm thử viên) độc lập rất hữu ích ở chỗ họ có thể thách thức và xác minh các giả định cũng nh"
  },
  {
    "n": 7,
    "ref": "Question #A7 [FL-2.1.1]",
    "stem": "You are working as a tester in the team that follows the V-model. Which of the following activities  CAN be performed in the initial phases of the SDLC?",
    "opts": [
      {
        "k": "a",
        "t": "A) Dynamic test execution"
      },
      {
        "k": "b",
        "t": "B) Static testing"
      },
      {
        "k": "c",
        "t": "C) Test planning"
      },
      {
        "k": "d",
        "t": "D) Acceptance test execution"
      },
      {
        "k": "e",
        "t": "E) Maintenance testing"
      }
    ],
    "ans": [
      "b",
      "c"
    ],
    "multi": true,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang làm tester (kiểm thử viên) trong nhóm theo mô hình chữ V. Hoạt động nào sau đây CÓ THỂ được thực hiện trong giai đoạn đầu của SDLC?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Thực hiện kiểm thử động\n  B) Kiểm tra tĩnh\n  C) Lập kế hoạch kiểm tra\n  D) Thực hiện kiểm tra chấp nhận\n  E) Kiểm tra bảo trì\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng.  Mã thực thi thường được tạo ở các giai đoạn sau, do đó việc thực hiện kiểm tra động không thể được thực hiện sớm trong SDLC\nb) Đúng. Trong các mô hình phát triển tuần tự, trong giai đoạn đầu, tester (kiểm thử viên) tham gia đánh giá yêu cầu, đây là một hình thức kiểm thử tĩnh (static testing).\nc) Đúng. Lập kế hoạch kiểm thử có thể được thực hiện sớm trong SDLC trước khi dự án kiểm thử bắt đầu cùng với việc phân tích kiểm thử và thiết kế kiểm thử.\nđ) Không đúng. Việc thực hiện kiểm tra chấp nhận có thể được thực hiện khi có một sản phẩm đang hoạt động. Trong các mô hình SDLC tuần tự, sản phẩm hoạt động thường được phân phối sau trong SDLC\nđ) Không đúng. Kiểm tra bảo trì khi có một sản phẩm đang hoạt động và được triển khai, việc này không được thực hiện trong giai đoạn đầu của bất kỳ SDLC nào.\n\n📌 Kiến thức: FL-2.1.1 (K2)"
  },
  {
    "n": 8,
    "ref": "Question #A8 [FL-2.1.4]",
    "stem": "Which of the following are advantages of DevOps?    i.  Faster product release and faster time to market  ii.  Increases the need for repetitive manual testing  iii.  Constant availability of executable software  iv.  Reduction in the number of regression tests associated with code refactoring  v.  Setting up the test automation framework is inexpensive since everything is  automated",
    "opts": [
      {
        "k": "a",
        "t": "A) i, ii, iv are advantages"
      },
      {
        "k": "b",
        "t": "B) iii, v are advantages"
      },
      {
        "k": "c",
        "t": "C) i, iii are advantages"
      },
      {
        "k": "d",
        "t": "D) ii, iv, v are advantages"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ưu điểm của DevOps?    Tôi.  Phát hành sản phẩm nhanh hơn và thời gian đưa sản phẩm ra thị trường nhanh hơn ii.  Tăng nhu cầu kiểm tra thủ công lặp đi lặp lại iii.  Sự sẵn có liên tục của phần mềm thực thi iv.  Giảm số lượng kiểm thử hồi quy (regression testing) liên quan đến tái cấu trúc mã v. Việc thiết lập khung tự động hóa kiểm thử (test automation) không tốn kém vì mọi thứ đều được tự động hóa\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) I, ii, iv là những lợi thế\n  B) Iii, v là những lợi thế\n  C) I, iii là lợi thế\n  D) Ii, iv, v là những lợi thế\n\n💡 GIẢI THÍCH CHI TIẾT:\nHãy xem xét:\ntôi. Là đúng. Phát hành sản phẩm nhanh hơn và thời gian đưa sản phẩm ra thị trường nhanh hơn là một lợi thế của DevOps\nii. Là sai. Thông thường, chúng tôi cần ít nỗ lực hơn cho việc kiểm tra thủ công do sử dụng kiểm thử tự động\niii. Là đúng. Sự sẵn có liên tục của phần mềm thực thi là một lợi thế\niv. Là sai. Cần thêm các bài kiểm thử hồi quy\nv. Là sai. Không phải mọi thứ đều được tự động hóa và việc thiết lập một khung tự động hóa kiểm thử (test automation) rất tốn kém. Vì vậy:\na) Không đúng\nb) Không đúng c) Đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-2.1.4 (K2)"
  },
  {
    "n": 9,
    "ref": "Question #A9 [FL-2.2.2]",
    "stem": "You work as a tester on a project on a mobile application for food ordering for one of your clients.  The client sent you a list of requirements. One of them, with high priority, says    “The order must be processed in less than 10 seconds in 95% of the cases”.    You created a set of test cases in which a number of random orders were made, the processing time  measured, and the test results were checked against the requirements.    What test type did you perform?",
    "opts": [
      {
        "k": "a",
        "t": "A) Functional, because the test cases cover the user’s business requirement for the system"
      },
      {
        "k": "b",
        "t": "B) Non-functional, because they measure the system’s performance"
      },
      {
        "k": "c",
        "t": "C) Functional, because the test cases interact with the user interface"
      },
      {
        "k": "d",
        "t": "D) White-box, because we need to know the internal structure of the program to measure the order processing time"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn làm việc với tư cách là tester (kiểm thử viên) trong một dự án trên ứng dụng di động để đặt món ăn cho một trong những khách hàng của bạn.  Khách hàng đã gửi cho bạn một danh sách các yêu cầu. Một trong số họ, với mức độ ưu tiên cao, cho biết “Đơn hàng phải được xử lý trong vòng chưa đầy 10 giây trong 95% trường hợp”.    Bạn đã tạo một tập hợp các trường hợp kiểm thử trong đó một số đơn hàng ngẫu nhiên được thực hiện, đo lường thời gian xử lý và kiểm tra kết quả kiểm thử theo yêu cầu.    Bạn đã thực hiện loại kiểm thử (test type) nào?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Chức năng, vì các test case (ca kiểm thử) bao gồm yêu cầu kinh doanh của người dùng đối với hệ thống\n  B) Không hoạt động vì chúng đo lường hiệu suất của hệ thống\n  C) Chức năng, vì các test case (ca kiểm thử) tương tác với giao diện người dùng\n  D) White-box, vì chúng ta cần biết cấu trúc bên trong của chương trình để đo thời gian xử lý đơn hàng\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Thực tế là yêu cầu về hiệu suất của hệ thống đến trực tiếp từ khách hàng và hiệu suất là quan trọng theo quan điểm kinh doanh (tức là mức độ ưu tiên cao) không làm cho các bài kiểm thử này hoạt động hiệu quả, bởi vì chúng không kiểm tra “cái gì” hệ thống làm, mà là “làm thế nào” (tức là các đơn hàng được xử lý nhanh như thế nào)\nb) Đúng. Đây là một ví dụ về kiểm thử hiệu quả hoạt động, một loại kiểm thử (test type) phi chức năng\nc) Không đúng. Từ kịch bản, chúng tôi không biết liệu việc tương tác với giao diện người dùng có phải là một phần của điều kiện kiểm thử hay không. Nhưng ngay cả khi chúng tôi làm vậy thì mục tiêu kiểm tra chính của những kiểm thử này là kiểm tra hiệu suất chứ không phải khả năng sử dụng\nđ) Không đúng. Chúng ta không cần biết cấu trúc bên trong của mã để thực hiện kiểm tra hiệu quả hoạt động. Người ta có thể thực hiện các bài kiểm tra hi"
  },
  {
    "n": 10,
    "ref": "Question #A10 [FL-2.3.1]",
    "stem": "Your organization’s test strategy suggests that once a system is going to be retired, data migration  shall be tested. As part of what test type is this testing MOST likely to be performed?",
    "opts": [
      {
        "k": "a",
        "t": "A) Maintenance testing"
      },
      {
        "k": "b",
        "t": "B) Regression testing"
      },
      {
        "k": "c",
        "t": "C) Reliability testing"
      },
      {
        "k": "d",
        "t": "D) Integration testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nChiến lược kiểm thử của tổ chức của bạn gợi ý rằng sau khi hệ thống sắp ngừng hoạt động, việc di chuyển dữ liệu sẽ được kiểm thử. Là một phần của loại kiểm thử (test type) nào, kiểm thử này có khả năng được thực hiện NHIỀU NHẤT?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra bảo trì\n  B) Kiểm tra hồi quy\n  C) Kiểm tra độ tin cậy\n  D) Kiểm tra tích hợp\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Khi một hệ thống ngừng hoạt động, điều này có thể yêu cầu kiểm tra việc di chuyển dữ liệu, đây là một hình thức kiểm tra bảo trì\nb) Không đúng. Kiểm tra hồi quy xác minh xem một bản sửa lỗi có vô tình ảnh hưởng đến hành vi của các phần khác của mã hay không, nhưng bây giờ chúng ta đang nói về việc di chuyển dữ liệu sang một hệ thống mới\nc) Không đúng. Kiểm tra tính di động tập trung vào việc chuyển hệ thống sang môi trường khác\nđ) Không đúng. Kiểm thử tích hợp tập trung vào sự tương tác giữa các thành phần và/hoặc hệ thống, không tập trung vào việc di chuyển dữ liệu. Ngoài ra, nó không phải là một loại bài kiểm tra mà là một cấp độ kiểm tra.\n\n📌 Kiến thức: FL-2.3.1 (K2)"
  },
  {
    "n": 11,
    "ref": "Question #A11 [FL-3.1.1]",
    "stem": "The following is a list of the work products produced in the SDLC.    i.  Business requirements  ii.  Schedule  iii.  Test budget  iv.  Third-party executable code  v.  User stories and their acceptance criteria    Which of them can be reviewed?",
    "opts": [
      {
        "k": "a",
        "t": "A) i and iv can be reviewed"
      },
      {
        "k": "b",
        "t": "B) i, ii, iii and iv can be reviewed"
      },
      {
        "k": "c",
        "t": "C) i, ii, iii, and v can be reviewed"
      },
      {
        "k": "d",
        "t": "D) iii, iv, v can be reviewed"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nSau đây là danh sách các sản phẩm công việc được tạo ra trong SDLC.    Tôi.  Yêu cầu kinh doanh ii.  Lịch trìnhiii.  Ngân sách kiểm thử iv.  Mã thực thi của bên thứ ba v. Câu chuyện của người dùng và tiêu chí chấp nhận của họ Câu chuyện nào trong số đó có thể được xem xét?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) I và iv có thể được xem xét lại\n  B) I, ii, iii và iv có thể được xem xét\n  C) I, ii, iii và v có thể được xem xét\n  D) Iii, iv, v có thể xem lại\n\n💡 GIẢI THÍCH CHI TIẾT:\nChỉ mã thực thi của bên thứ ba mới không thể được xem xét.    Như vậy:\na) Không đúng\nb) Không đúng c) Đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-3.1.1 (K1)"
  },
  {
    "n": 12,
    "ref": "Question #A12 [FL-3.1.3]",
    "stem": "Decide which of the following statements (i-v) are true for static testing.  i.  Abnormal external behaviors are easier to identify with this testing  ii.  Discrepancies from a coding standard are easier to find with this testing  iii.  It identifies failures caused by defects when the software is run  iv.  Its test objective is to identify defects as early as possible  v.  Missing coverage for critical security requirements is easier to find and fix",
    "opts": [
      {
        "k": "a",
        "t": "A) i, iv, v are true for static testing"
      },
      {
        "k": "b",
        "t": "B) i, iii, iv are true for static testing"
      },
      {
        "k": "c",
        "t": "C) ii, iii are true for static testing"
      },
      {
        "k": "d",
        "t": "D) ii, iv, v are true for static testing"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nQuyết định câu nào sau đây (i-v) là đúng cho kiểm thử tĩnh (static testing).  Tôi.  Các hành vi bên ngoài bất thường sẽ dễ dàng được xác định hơn bằng kiểm thử này ii.  Những khác biệt so với tiêu chuẩn mã hóa sẽ dễ dàng được phát hiện hơn với kiểm thử này iii.  Nó xác định các lỗi do lỗi gây ra khi chạy phần mềm iv.  Mục tiêu kiểm thử của nó là xác định các lỗi càng sớm càng tốt. v. Việc thiếu phạm vi bảo hiểm cho các yêu cầu bảo mật quan trọng sẽ dễ dàng được tìm thấy và sửa chữa hơn\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) I, iv, v đúng cho kiểm thử tĩnh (static testing)\n  B) I, iii, iv đúng cho kiểm thử tĩnh (static testing)\n  C) Ii, iii đúng cho kiểm thử tĩnh (static testing)\n  D) Ii, iv, v đúng cho kiểm thử tĩnh (static testing)\n\n💡 GIẢI THÍCH CHI TIẾT:\nHãy xem xét: i. Những hành vi này có thể dễ dàng được phát hiện khi phần mềm đang chạy.  Do đó, kiểm thử động (dynamic testing) sẽ được sử dụng để xác định chúng ii. Đây là một ví dụ về sai lệch so với tiêu chuẩn, là một khiếm khuyết điển hình có thể dễ dàng phát hiện hơn bằng kiểm thử tĩnh (static testing) iii. Nếu phần mềm được thực thi trong quá trình kiểm thử thì đó là kiểm thử động iv. Xác định các lỗi càng sớm càng tốt là mục tiêu kiểm thử của cả kiểm thử tĩnh và kiểm thử động v. Đây là một ví dụ về các lỗ hổng trong khả năng truy xuất nguồn gốc hoặc phạm vi bao phủ của cơ sở kiểm thử, đây là một lỗi điển hình dễ dàng được tìm thấy hơn với kiểm thử tĩnh. Do đó:\na) Không đúng\nb) Không đúng\nc) Không đúng\nđ) Đúng\n\n📌 Kiến thức: FL-3.1.3 (K2)"
  },
  {
    "n": 13,
    "ref": "Question #A13 [FL-3.2.2]",
    "stem": "Which of the following statements about formal reviews is TRUE?",
    "opts": [
      {
        "k": "a",
        "t": "A) Some reviews do not require more than one role"
      },
      {
        "k": "b",
        "t": "B) The review process has several activities"
      },
      {
        "k": "c",
        "t": "C) Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types"
      },
      {
        "k": "d",
        "t": "D) Defects found during the review are not reported since they are not found by dynamic testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về đánh giá chính thức là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Một số đánh giá không yêu cầu nhiều hơn một vai trò\n  B) Quá trình xem xét có một số hoạt động\n  C) Tài liệu cần xem xét không được phân phát trước cuộc họp đánh giá, ngoại trừ sản phẩm công việc dành cho các loại đánh giá cụ thể\n  D) Các lỗi được tìm thấy trong quá trình xem xét sẽ không được báo cáo vì chúng không được tìm thấy bằng kiểm thử động (dynamic testing)\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Trong tất cả các loại đánh giá đều có nhiều hơn một vai trò, ngay cả trong những loại đánh giá không chính thức\nb) Đúng. Có một số hoạt động trong quá trình xem xét chính thức\nc) Không đúng. Tài liệu cần được xem xét nên được phân phối càng sớm càng tốt\nđ) Không đúng. Những khiếm khuyết được tìm thấy trong quá trình xem xét phải được báo cáo\n\n📌 Kiến thức: FL-3.2.2 (K2)"
  },
  {
    "n": 14,
    "ref": "Question #A14 [FL-3.2.3]",
    "stem": "What task may management take on during a formal review?",
    "opts": [
      {
        "k": "a",
        "t": "A) Taking overall responsibility for the review"
      },
      {
        "k": "b",
        "t": "B) Deciding what is to be reviewed"
      },
      {
        "k": "c",
        "t": "C) Ensuring the effective running of review meetings, and moderating, if necessary"
      },
      {
        "k": "d",
        "t": "D) Recording review information such as review decisions"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBan quản lý có thể đảm nhận nhiệm vụ gì trong quá trình xem xét chính thức?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Chịu trách nhiệm chung về việc xem xét\n  B) Quyết định những gì sẽ được xem xét\n  C) Đảm bảo các cuộc họp đánh giá diễn ra hiệu quả và điều hành nếu cần thiết\n  D) Ghi lại thông tin đánh giá như quyết định đánh giá\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Đây là nhiệm vụ của người lãnh đạo đánh giá\nb) Đúng. Đây là nhiệm vụ của cơ quan quản lý trong việc xem xét chính thức\nc) Không đúng. Đây là nhiệm vụ của người điều hành\nđ) Không đúng. Đây là nhiệm vụ của người ghi chép\n\n📌 Kiến thức: FL-3.2.3 (K1)"
  },
  {
    "n": 15,
    "ref": "Question #A15 [FL-4.2.2]",
    "stem": "A wine storage system uses a control device that measures the wine cell temperature T (measured  in °C, rounded to the nearest degree) and alarms the user if it deviates from the optimal value of  12, according to the following rules:  •  if T = 12, the system says, “optimal temperature”  •  if T < 12, the system says, “temperature is too low!”  •  if T > 12, the system says, “temperature is too high!”  You want to use the 3-point boundary value analysis (BVA) to verify the behavior of the control  device. A test input is a temperature in °C provided by the device.    What is the MINIMAL set of test inputs that achieves 100% of the desired coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 11, 12, 13"
      },
      {
        "k": "b",
        "t": "B) 10, 12, 14"
      },
      {
        "k": "c",
        "t": "C) 10, 11, 12, 13, 14"
      },
      {
        "k": "d",
        "t": "D) 10, 11, 13, 14"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHệ thống bảo quản rượu sử dụng thiết bị điều khiển để đo nhiệt độ tế bào rượu T (được đo bằng °C, làm tròn đến độ gần nhất) và cảnh báo người dùng nếu nhiệt độ lệch khỏi giá trị tối ưu là 12, theo các quy tắc sau: • nếu T = 12, hệ thống sẽ thông báo “nhiệt độ tối ưu” • nếu T < 12, hệ thống sẽ thông báo “nhiệt độ quá thấp!”  • nếu T > 12, hệ thống sẽ thông báo “nhiệt độ quá cao!”  Bạn muốn sử dụng phân tích giá trị biên 3 điểm (BVA) để xác minh hoạt động của thiết bị điều khiển. Đầu vào kiểm thử là nhiệt độ tính bằng °C do thiết bị cung cấp.    Bộ đầu vào kiểm thử TỐI THIỂU đạt được 100% phạm vi mong muốn là gì?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 11, 12, 13\n  B) 10, 12, 14\n  C) 10, 11, 12, 13, 14\n  D) 10, 11, 13, 14\n\n💡 GIẢI THÍCH CHI TIẾT:\nCó ba phân vùng tương đương: {..., 10, 11}, {12} và {13, 14, ...}.  Các giá trị biên là 11, 12 và 13. Trong phân tích giá trị biên ba điểm cho mỗi ranh giới, chúng ta cần kiểm tra ranh giới và cả các lân cận của nó, vì vậy: • đối với 11 chúng ta kiểm tra 10, 11, 12 • đối với 12 chúng ta kiểm tra 11, 12, 13 • đối với 13 chúng ta kiểm tra 12, 13, 14 Tổng cộng chúng ta cần kiểm tra 10, 11, 12, 13, và 14 Như vậy:\na) Không đúng\nb) Không đúng\nc) Đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-4.2.2 (K3)"
  },
  {
    "n": 16,
    "ref": "Question #A16 [FL-4.3.2]",
    "stem": "Which of the following statements about branch testing is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases"
      },
      {
        "k": "b",
        "t": "B) If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved"
      },
      {
        "k": "c",
        "t": "C) If 100% statement coverage is achieved, then 100% branch coverage is also achieved"
      },
      {
        "k": "d",
        "t": "D) If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về kiểm thử nhánh là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Nếu một chương trình chỉ bao gồm các nhánh vô điều kiện thì có thể đạt được phạm vi bao phủ 100% nhánh mà không cần thực hiện bất kỳ test case (ca kiểm thử) nào\n  B) Nếu các trường hợp kiểm thử thực hiện tất cả các nhánh vô điều kiện trong mã thì sẽ đạt được độ bao phủ 100% nhánh.\n  C) Nếu đạt được mức độ phủ câu lệnh (statement coverage) 100% thì mức độ bao phủ 100% nhánh cũng đạt được\n  D) Nếu đạt được mức độ bao phủ nhánh 100% thì tất cả các kết quả quyết định trong mỗi câu lệnh quyết định trong mã sẽ được thực hiện\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Trong trường hợp này vẫn cần một test case (ca kiểm thử) vì có ít nhất một nhánh (vô điều kiện) được đề cập\nb) Không đúng. Chỉ bao gồm các nhánh vô điều kiện không có nghĩa là bao gồm tất cả các nhánh có điều kiện\nc) Không đúng. độ phủ nhánh (branch coverage) 100% ngụ ý phạm vi bao phủ 100% của câu lệnh, không phải trường hợp khác. Ví dụ: đối với quyết định IF không có ELSE, một kiểm thử là đủ để đạt được phạm vi bao phủ 100% câu lệnh, nhưng nó chỉ đạt được phạm vi bao phủ nhánh 50%\nđ) Đúng. Mỗi kết quả quyết định tương ứng với một nhánh có điều kiện, do đó mức độ bao phủ 100% nhánh hàm ý mức độ bao phủ 100% của các kết quả quyết định\n\n📌 Kiến thức: FL-4.3.2 (K2)"
  },
  {
    "n": 17,
    "ref": "Question #A17 [FL-4.4.3]",
    "stem": "You are testing a mobile application that allows customers to access and manage their bank  accounts. You are running a test suite that involves evaluating each screen, and each field on each  screen, against a general list of user interface best practices derived from a popular book on the  topic that maximizes usability for such applications. Which of the following options BEST categorizes  the test technique you are using?",
    "opts": [
      {
        "k": "a",
        "t": "A) Black-box"
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
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang kiểm thử một ứng dụng di động cho phép khách hàng truy cập và quản lý tài khoản ngân hàng của họ. Bạn đang chạy một test suite (bộ kiểm thử) bao gồm việc đánh giá từng màn hình và từng trường trên mỗi màn hình, dựa trên danh sách chung về các phương pháp hay nhất về giao diện người dùng được lấy từ một cuốn sách phổ biến về chủ đề giúp tối đa hóa khả năng sử dụng cho các ứng dụng đó. Tùy chọn nào sau đây TỐT NHẤT phân loại kỹ thuật kiểm tra bạn đang sử dụng?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Hộp đen\n  B) Khám phá\n  C) Dựa trên danh sách kiểm tra\n  D) Lỗi đoán\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Cuốn sách này cung cấp hướng dẫn chung và không phải là tài liệu yêu cầu chính thức, thông số kỹ thuật hoặc tập hợp các trường hợp sử dụng, câu chuyện của người dùng hoặc quy trình kinh doanh\nb) Không đúng. Mặc dù bạn có thể coi danh sách này như một tập hợp các điều lệ kiểm tra, nhưng nó gần giống với danh sách các điều kiện kiểm tra cần kiểm tra hơn.\nc) Đúng. Danh sách các phương pháp hay nhất về giao diện người dùng là danh sách các điều kiện kiểm thử cần được kiểm tra một cách có hệ thống\nđ) Không đúng. các bài kiểm thử không tập trung vào các lỗi có thể xảy ra mà tập trung vào kiến ​​thức về điều gì là quan trọng đối với người dùng, về khả năng sử dụng\n\n📌 Kiến thức: FL-4.4.3 (K2)"
  },
  {
    "n": 18,
    "ref": "Question #A18 [FL-4.5.1]",
    "stem": "Which of the following BEST describe the collaborative approach to user story writing?",
    "opts": [
      {
        "k": "a",
        "t": "A) User stories are created by testers and developers and then accepted by business representatives"
      },
      {
        "k": "b",
        "t": "B) User stories are created by business representatives, developers, and testers together"
      },
      {
        "k": "c",
        "t": "C) User stories are created by business representatives and verified by developers and testers"
      },
      {
        "k": "d",
        "t": "D) User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT mô tả cách tiếp cận hợp tác để viết câu chuyện của người dùng?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Câu chuyện của người dùng được tạo bởi tester (kiểm thử viên) và nhà phát triển, sau đó được đại diện doanh nghiệp chấp nhận\n  B) Câu chuyện của người dùng được tạo bởi đại diện doanh nghiệp, nhà phát triển và tester (kiểm thử viên) cùng nhau\n  C) Câu chuyện của người dùng được tạo bởi đại diện doanh nghiệp và được xác minh bởi nhà phát triển và tester (kiểm thử viên)\n  D) Câu chuyện của người dùng được tạo theo cách độc lập, có thể thương lượng, có giá trị, có thể ước tính, nhỏ và có thể kiểm tra được\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Cộng tác viết câu chuyện của người dùng có nghĩa là tất cả các bên liên quan cùng nhau tạo ra câu chuyện của người dùng để đạt được tầm nhìn chung\nb) Đúng. Cộng tác viết câu chuyện của người dùng có nghĩa là tất cả các bên liên quan cùng nhau tạo ra câu chuyện của người dùng để đạt được tầm nhìn chung\nc) Không đúng. Cộng tác viết câu chuyện của người dùng có nghĩa là tất cả các bên liên quan cùng nhau tạo ra câu chuyện của người dùng để đạt được tầm nhìn chung\nđ) Không đúng. Đây là danh sách các thuộc tính mà mỗi câu chuyện của người dùng nên có, không phải mô tả về cách tiếp cận dựa trên cộng tác\n\n📌 Kiến thức: FL-4.5.1 (K2)"
  },
  {
    "n": 19,
    "ref": "Question #A19 [FL-5.1.1]",
    "stem": "Consider the following part of a test plan.    Testing will be performed using component testing and component integration testing.  The regulations require to demonstrate that 100% branch coverage is achieved for  each component classified as critical.    Which part of the test plan does this part belong to?",
    "opts": [
      {
        "k": "a",
        "t": "A) Communication"
      },
      {
        "k": "b",
        "t": "B) Risk register"
      },
      {
        "k": "c",
        "t": "C) Context of testing"
      },
      {
        "k": "d",
        "t": "D) Test approach"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHãy xem xét phần sau của kế hoạch kiểm tra.    Kiểm thử sẽ được thực hiện bằng cách sử dụng kiểm thử thành phần và kiểm thử tích hợp thành phần.  Các quy định yêu cầu chứng minh rằng đạt được 100% độ phủ nhánh (branch coverage) cho từng thành phần được phân loại là quan trọng.    Phần này thuộc về phần nào của kế hoạch kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Truyền thông\n  B) Đăng ký rủi ro\n  C) Bối cảnh kiểm thử\n  D) Phương pháp kiểm thử\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Đoạn này chứa thông tin về cấp độ kiểm tra và tiêu chí đầu ra, là một phần của phương pháp kiểm tra\nb) Không đúng. Đoạn này chứa thông tin về cấp độ kiểm tra và tiêu chí đầu ra, là một phần của phương pháp kiểm tra\nc) Không đúng. Đoạn này chứa thông tin về cấp độ kiểm tra và tiêu chí đầu ra, là một phần của phương pháp kiểm tra\nđ) Đúng. Đoạn này chứa thông tin về cấp độ kiểm tra và tiêu chí đầu ra, là một phần của phương pháp kiểm tra\n\n📌 Kiến thức: FL-5.1.1 (K2)"
  },
  {
    "n": 20,
    "ref": "Question #A20 [FL-5.1.4]",
    "stem": "Your team uses planning poker to estimate the test effort for a newly required feature. There is a  rule in your team that if there is no time to reach full agreement and the variation in the results is  small, rules like “accept the number with the most votes” can be applied.  After two rounds, the consensus was not reached, so the third round was initiated. You can see the  test estimation results in the table below.    Team members' estimations  Round 1  21  2  5  34  13  8  2  Round 2  13  8  8  34  13  8  5  Round 3  13  8  13  13  13  13  8  Which of the following is the BEST example of the next step?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) The product owner has to step in and make a final decision"
      },
      {
        "k": "b",
        "t": "B) Accept 13 as the final test estimate as this has most of the votes"
      },
      {
        "k": "c",
        "t": "C) No further action is needed. Consensus has been reached"
      },
      {
        "k": "d",
        "t": "D) Remove the new feature from the current release because consensus has not been reached"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nNhóm của bạn sử dụng kế hoạch poker để ước tính nỗ lực kiểm thử cho một tính năng mới được yêu cầu. Trong nhóm của bạn có một quy tắc là nếu không có thời gian để đạt được sự đồng thuận hoàn toàn và sự khác biệt trong kết quả là nhỏ, thì có thể áp dụng các quy tắc như “chấp nhận số có nhiều phiếu bầu nhất”.  Sau hai vòng, không đạt được sự đồng thuận nên vòng thứ ba được bắt đầu. Bạn có thể xem kết quả ước tính kiểm thử trong bảng dưới đây.    Ước tính của các thành viên trong nhóm Vòng 1 21 2 5 34 13 8 2 Vòng 2 13 8 8 34 13 8 5 Vòng 3 13 8 13 13 13 13 8 Điều nào sau đây là ví dụ TỐT NHẤT cho bước tiếp theo?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Product Owner phải can thiệp và đưa ra quyết định cuối cùng\n  B) Chấp nhận 13 làm ước tính kiểm tra cuối cùng vì con số này có hầu hết phiếu bầu\n  C) Không cần thực hiện thêm hành động nào. Đã đạt được sự đồng thuận\n  D) Xóa tính năng mới khỏi bản phát hành hiện tại vì chưa đạt được sự đồng thuận\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Đây phải là hoạt động nhóm và không bị chi phối bởi một thành viên trong nhóm\nb) Đúng. Nếu các ước tính kiểm tra không giống nhau nhưng sự khác biệt trong kết quả là nhỏ, có thể áp dụng các quy tắc như “chấp nhận số có nhiều phiếu bầu nhất”\nc) Không đúng. Vẫn chưa có sự đồng thuận vì một số người nói 13, số khác nói 8\nđ) Không đúng. Không nên xóa một tính năng chỉ vì nhóm không thể thống nhất về ước tính kiểm tra\n\n📌 Kiến thức: FL-5.1.4 (K3)"
  },
  {
    "n": 21,
    "ref": "Question #A21 [FL-5.1.6]",
    "stem": "Which of the following is TRUE regarding the test pyramid?",
    "opts": [
      {
        "k": "a",
        "t": "A) It emphasizes having far more tests at the lower test levels"
      },
      {
        "k": "b",
        "t": "B) It suggests that each low-level test checks a large part of the functionality"
      },
      {
        "k": "c",
        "t": "C) It describes distribution of test types across the SDLC"
      },
      {
        "k": "d",
        "t": "D) It has no impact on the construction of automated tests"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ĐÚNG về kim tự tháp kiểm tra?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Nó nhấn mạnh việc có nhiều bài kiểm tra hơn ở các cấp độ kiểm tra thấp hơn\n  B) Nó gợi ý rằng mỗi bài kiểm tra cấp thấp sẽ kiểm tra một phần lớn chức năng\n  C) Nó mô tả việc phân phối các loại kiểm thử (test type) trên SDLC\n  D) Nó không có tác động đến việc xây dựng các bài kiểm tra tự động\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Kim tự tháp kiểm tra nhấn mạnh việc có số lượng bài kiểm tra lớn hơn ở các cấp độ kiểm tra thấp hơn\nb) Không đúng. Việc kiểm thử ở cấp độ thấp hơn sẽ kiểm tra một phần chức năng lớn hơn là không đúng. các bài kiểm thử mang tính nguyên tử hơn và được định hướng theo một logic cụ thể, vì vậy nó ngược lại\nc) Không đúng. Kim tự tháp kiểm tra cho thấy số lượng bài kiểm tra được phân bổ như thế nào ở các cấp độ kiểm tra\nđ) Không đúng. Mô hình tháp kiểm thử (test pyramid) hỗ trợ nhóm tự động hóa kiểm thử (test automation)\n\n📌 Kiến thức: FL-5.1.6 (K1)"
  },
  {
    "n": 22,
    "ref": "Question #A22 [FL-5.2.1]",
    "stem": "During risk analysis the team considered the following risk: “The system allows too high a discount  for a customer”. The team estimated the risk impact to be very high.    What can one say about the risk likelihood?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is also very high. High risk impact always implies high risk likelihood"
      },
      {
        "k": "b",
        "t": "B) It is very low. High risk impact always implies low risk likelihood"
      },
      {
        "k": "c",
        "t": "C) One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent."
      },
      {
        "k": "d",
        "t": "D) Risk likelihood is not important with such a high-risk impact. One does not need to define it."
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nTrong quá trình phân tích rủi ro, nhóm đã xem xét rủi ro sau: “Hệ thống cho phép khách hàng chiết khấu quá cao”. Nhóm nghiên cứu ước tính tác động rủi ro là rất cao.    Người ta có thể nói gì về khả năng xảy ra rủi ro?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Nó cũng rất cao. Tác động rủi ro cao luôn hàm ý khả năng rủi ro cao\n  B) Nó rất thấp. Tác động rủi ro cao luôn hàm ý khả năng rủi ro thấp\n  C) Người ta không thể nói bất cứ điều gì về khả năng xảy ra rủi ro. Tác động của rủi ro và khả năng xảy ra rủi ro là độc lập.\n  D) Khả năng xảy ra rủi ro không quan trọng với tác động rủi ro cao như vậy. Người ta không cần phải định nghĩa nó.\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Tác động rủi ro và khả năng rủi ro là độc lập\nb) Không đúng. Tác động rủi ro và khả năng rủi ro là độc lập\nc) Đúng. Tác động rủi ro và khả năng rủi ro là độc lập\nđ) Không đúng. Chúng ta cần cả hai yếu tố để tính mức độ rủi ro\n\n📌 Kiến thức: FL-5.2.1 (K1)"
  },
  {
    "n": 23,
    "ref": "Question #A23 [FL-5.2.2]",
    "stem": "The following list contains risks that have been identified for a new software product to be developed:  i.  Management moves two experienced testers to another project  ii.  The system does not comply with security standards  iii.  System response time exceeds user requirements  iv.  Stakeholders have inaccurate expectations  v.  Disabled people have problems when using the system    Which of them are project risks?",
    "opts": [
      {
        "k": "a",
        "t": "A) i, iv are project risks"
      },
      {
        "k": "b",
        "t": "B) iv, v are project risks"
      },
      {
        "k": "c",
        "t": "C) i, iii are project risks"
      },
      {
        "k": "d",
        "t": "D) ii, v are project risks"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nDanh sách sau đây bao gồm các rủi ro đã được xác định đối với một sản phẩm phần mềm mới sẽ được phát triển: i.  Ban quản lý chuyển hai tester (kiểm thử viên) có kinh nghiệm sang một dự án khác ii.  Hệ thống không tuân thủ các tiêu chuẩn bảo mật iii.  Thời gian phản hồi của hệ thống vượt quá yêu cầu của người dùng iv.  Các bên liên quan có kỳ vọng không chính xác v. Người khiếm khuyết (defect) gặp khó khăn khi sử dụng hệ thống Đâu là rủi ro của dự án?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) I, iv là rủi ro của dự án\n  B) Iv, v là rủi ro của dự án\n  C) I, iii là rủi ro của dự án\n  D) Ii, v là rủi ro của dự án\n\n💡 GIẢI THÍCH CHI TIẾT:\nHãy xem xét: i. Đó là một rủi ro của Dự án ii. Đó là Rủi ro sản phẩm iii. Đó là Rủi ro sản phẩm iv. Đó là Rủi ro dự án v. Đó là Rủi ro sản phẩm Do đó:\na) Đúng\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-5.2.2 (K2)"
  },
  {
    "n": 24,
    "ref": "Question #A24 [FL-5.2.3]",
    "stem": "Which of the following is an example of how product risk analysis influences thoroughness and scope  of testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date"
      },
      {
        "k": "b",
        "t": "B) One of the identified risks was \"Lack of support of open-source databases\", so the team decided to integrate the system with an open-source database"
      },
      {
        "k": "c",
        "t": "C) During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing"
      },
      {
        "k": "d",
        "t": "D) Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ví dụ về cách phân tích rủi ro sản phẩm ảnh hưởng đến tính kỹ lưỡng và phạm vi kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Người quản lý kiểm tra theo dõi và báo cáo mức độ của tất cả các rủi ro đã biết hàng ngày để các bên liên quan có thể đưa ra quyết định sáng suốt vào ngày phát hành\n  B) Một trong những rủi ro được xác định là “Thiếu sự hỗ trợ của cơ sở dữ liệu nguồn mở” nên nhóm quyết định tích hợp hệ thống với cơ sở dữ liệu nguồn mở\n  C) Trong quá trình phân tích rủi ro định lượng, nhóm đã ước tính tổng mức độ của tất cả các rủi ro đã xác định và báo cáo đó là tổng rủi ro còn lại trước khi kiểm thử\n  D) Đánh giá rủi ro cho thấy mức độ rủi ro hiệu suất rất cao, do đó, người ta đã quyết định thực hiện sớm kiểm thử hiệu quả hiệu suất chi tiết trong SDLC\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Đây là một ví dụ về hoạt động giám sát rủi ro, không phải phân tích rủi ro\nb) Không đúng. Đây là một ví dụ về một quyết định mang tính kiến trúc, không liên quan đến việc kiểm thử\nc) Không đúng. Đây là một ví dụ về thực hiện phân tích rủi ro định lượng và không liên quan đến tính kỹ lưỡng hoặc phạm vi kiểm thử\nđ) Đúng. Điều này cho thấy phân tích rủi ro tác động như thế nào đến tính kỹ lưỡng của kiểm thử (tức là mức độ chi tiết)\n\n📌 Kiến thức: FL-5.2.3 (K2)"
  },
  {
    "n": 25,
    "ref": "Question #A25 [FL-5.3.1]",
    "stem": "Which TWO of the following options are common metrics used for reporting on the quality level of  the test object?",
    "opts": [
      {
        "k": "a",
        "t": "A) Number of defects found during system testing"
      },
      {
        "k": "b",
        "t": "B) Total effort on test design divided by the number of designed test cases"
      },
      {
        "k": "c",
        "t": "C) Number of executed test procedures"
      },
      {
        "k": "d",
        "t": "D) Number of defects found divided by the size of a work product"
      },
      {
        "k": "e",
        "t": "E) Time needed to repair a defect"
      }
    ],
    "ans": [
      "a",
      "d"
    ],
    "multi": true,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHAI tùy chọn nào sau đây là số liệu phổ biến được sử dụng để báo cáo mức chất lượng của test object (đối tượng kiểm thử)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Số lượng lỗi được tìm thấy trong quá trình kiểm tra hệ thống\n  B) Tổng nỗ lực thiết kế kiểm thử chia cho số test case (ca kiểm thử) được thiết kế\n  C) Số thủ tục kiểm thử đã thực hiện\n  D) Số lượng lỗi được tìm thấy chia cho kích thước của sản phẩm công việc\n  E) Thời gian cần thiết để sửa chữa một khiếm khuyết\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Số lượng lỗi được tìm thấy có liên quan đến chất lượng của đối tượng kiểm thử\nb) Không đúng. Đây là thước đo hiệu quả kiểm tra chứ không phải chất lượng của đối tượng kiểm tra\nc) Không đúng. Số lượng ca kiểm thử được thực hiện không cho chúng ta biết điều gì về chất lượng; kết quả kiểm tra có thể làm\nđ) Đúng. mật độ lỗi có liên quan đến chất lượng của test object (đối tượng kiểm thử)\nđ) Không đúng. Thời gian để sửa chữa là một thước đo quá trình. Nó không cho chúng ta biết bất cứ điều gì về chất lượng sản phẩm\n\n📌 Kiến thức: FL-5.3.1 (K1)"
  },
  {
    "n": 26,
    "ref": "Question #A26 [FL-5.3.2]",
    "stem": "Which of the following pieces of information contained in a test progress report is the LEAST useful  for business representatives?",
    "opts": [
      {
        "k": "a",
        "t": "A) Impediments to testing"
      },
      {
        "k": "b",
        "t": "B) Branch coverage achieved"
      },
      {
        "k": "c",
        "t": "C) Test progress"
      },
      {
        "k": "d",
        "t": "D) New risks within the test cycle"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nThông tin nào sau đây có trong báo cáo tiến độ kiểm thử là ÍT hữu ích nhất đối với đại diện doanh nghiệp?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Trở ngại cho việc kiểm thử\n  B) Độ phủ chi nhánh đạt được\n  C) Tiến độ kiểm tra\n  D) Rủi ro mới trong chu kỳ kiểm thử\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Những trở ngại đối với việc kiểm thử có thể ở cấp độ cao và liên quan đến hoạt động kinh doanh, vì vậy đây là một thông tin quan trọng đối với các bên liên quan trong hoạt động kinh doanh\nb) Đúng. kiểm thử nhánh là một thước đo kỹ thuật được các nhà phát triển và nhà phân tích kiểm thử kỹ thuật sử dụng. Thông tin này không được đại diện doanh nghiệp quan tâm\nc) Không đúng. Tiến độ kiểm thử có liên quan đến dự án nên có thể hữu ích cho đại diện doanh nghiệp\nđ) Không đúng. Rủi ro ảnh hưởng đến chất lượng sản phẩm nên có thể hữu ích cho đại diện doanh nghiệp\n\n📌 Kiến thức: FL-5.3.2 (K2)"
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
