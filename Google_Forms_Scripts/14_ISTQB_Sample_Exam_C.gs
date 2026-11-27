/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ISTQB Sample Exam C (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ISTQB Sample Exam C (40 câu chuẩn)";
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
        "t": "A) Validating that documented requirements are met"
      },
      {
        "k": "b",
        "t": "B) Causing failures and identifying defects"
      },
      {
        "k": "c",
        "t": "C) Initiating errors and identifying root causes"
      },
      {
        "k": "d",
        "t": "D) Verifying the test object meets user expectations"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là mục tiêu kiểm thử điển hình?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Xác nhận rằng các yêu cầu tài liệu được đáp ứng\n  B) Gây ra lỗi và xác định lỗi\n  C) Bắt đầu lỗi và xác định nguyên nhân gốc rễ\n  D) Xác minh test object (đối tượng kiểm thử) đáp ứng mong đợi của người dùng\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Việc xác thực rằng các yêu cầu được ghi lại đã được đáp ứng là không chính xác vì việc xác thực liên quan đến việc đáp ứng các yêu cầu và mong đợi của người dùng, trong khi xác minh liên quan đến việc đáp ứng các yêu cầu cụ thể, vì vậy điều này sẽ đúng nếu chúng ta thay thế 'xác thực' bằng 'xác minh'\nb) Đúng. Gây ra lỗi và xác định lỗi có lẽ là mục tiêu phổ biến nhất của kiểm thử động\nc) Không đúng. Việc bắt đầu lỗi và xác định nguyên nhân gốc rễ là không chính xác vì người kiểm thử không bắt đầu lỗi mà cố gắng gây ra lỗi. Lỗi thường do các nhà phát triển tạo ra (và thực sự không thể bắt đầu) và dẫn đến các lỗi mà người kiểm thử cố gắng xác định trực tiếp thông qua kiểm thử tĩnh (static testing) hoặc gián tiếp thông qua các lỗi với kiểm thử động (dynamic testing).  Xác định nguyên nhân gốc rễ rất hữu ích nhưng là một phần của quá trình gỡ lỗi, là một hoạt động tách biệt với kiểm tra\nđ) Không đúng. Việc xác minh test object (đối tượng kiểm thử) đáp ứng mong đợi của người dùng là không chính xác vì việc xác minh liên quan đến việc kiểm tra các yêu cầu cụ thể (được ghi lại) có được đáp ứng hay không, trong khi xác thực liên quan đến việc đáp ứng các yêu cầu và mong đợi của người dùng, vì vậy điều này sẽ đúng nếu chúng ta thay thế 'xác minh' bằng 'xác thực'\n\n📌 Kiến thức: FL-1.1.1 (K1)"
  },
  {
    "n": 2,
    "ref": "Question #2 [FL-1.1.2]",
    "stem": "Which of the following statements BEST describes the difference between testing and debugging?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testing causes failures while debugging fixes failures"
      },
      {
        "k": "b",
        "t": "B) Testing is a negative activity while debugging is a positive activity"
      },
      {
        "k": "c",
        "t": "C) Testing determines that defects exist while debugging removes defects"
      },
      {
        "k": "d",
        "t": "D) Testing finds the cause of defects while debugging fixes the cause of defects"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây mô tả TỐT NHẤT sự khác biệt giữa kiểm thử và gỡ lỗi?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra gây ra lỗi trong khi gỡ lỗi sửa lỗi\n  B) Kiểm thử là hoạt động tiêu cực trong khi gỡ lỗi là hoạt động tích cực\n  C) Kiểm tra xác định rằng các lỗi tồn tại trong khi gỡ lỗi sẽ loại bỏ các lỗi\n  D) Kiểm thử tìm ra nguyên nhân lỗi trong khi gỡ lỗi sửa nguyên nhân lỗi\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Kiểm thử động gây ra lỗi (từ đó có thể xác định và sửa lỗi). Tuy nhiên, việc gỡ lỗi liên quan đến việc xác định vị trí lỗi và sửa các lỗi này. Vì vậy, việc gỡ lỗi không khắc phục được lỗi\nb) Không đúng. Cả kiểm thử và gỡ lỗi đều góp phần nâng cao chất lượng của test object (đối tượng kiểm thử), vì vậy cả hai đều cần được xem xét tích cực.  Gỡ lỗi thường được coi là một hoạt động tích cực vì nó đang sửa một cái gì đó. kiểm thử động (dynamic testing) liên quan đến việc cố ý làm cho test object (đối tượng kiểm thử) thất bại, đó là lý do tại sao một số người coi đó là một hoạt động tiêu cực, nhưng đó là một quan điểm rất hẹp (và không phải là quan điểm thường được những tester (kiểm thử viên) nắm giữ).  Cả hai test case (ca kiểm thử) tích cực và tiêu cực đều có thể thực hiện được. Các test case (ca kiểm thử) tích cực kiểm tra xem test object (đối tượng kiểm thử) có thực hiện chính xác những gì nó phải làm hay không, trong khi kiểm thử tiêu cực kiểm tra xem test object (đối tượng kiểm thử) không làm những gì nó không được phép làm\nc) Đúng. Kiểm tra xác định rằng các lỗi tồn tại trực tiếp thông qua việc quan sát lỗi trong các đánh giá (hoặc bằng một công cụ trong phân tích tĩnh) hoặc gián tiếp bằng cách gây ra lỗi trong kiểm tra động. Gỡ lỗi là một hoạt động riêng biệt với kiểm thử (thường do nhà phát triển thực hiện) và liên quan đến việc xác định vị trí lỗi (chỉ dành cho kiểm thử động) và sửa lỗi\nđ) Không "
  },
  {
    "n": 3,
    "ref": "Question #3 [FL-1.3.1]",
    "stem": "The ‘absence-of-defects fallacy’ is one of the principles of testing. Which of the following is an  example of addressing this principle in practice?",
    "opts": [
      {
        "k": "a",
        "t": "A) Explaining that it is not possible for testing to show the absence of defects"
      },
      {
        "k": "b",
        "t": "B) Supporting the end users to perform acceptance testing"
      },
      {
        "k": "c",
        "t": "C) Ensuring that no implementation defects remain in the delivered system"
      },
      {
        "k": "d",
        "t": "D) Modifying tests that cause no failures to ensure few defects remain"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\n'Ngụy biện không có khuyết điểm' là một trong những nguyên tắc kiểm thử. Điều nào sau đây là một ví dụ về việc giải quyết nguyên tắc này trong thực tế?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Giải thích rằng việc kiểm thử không thể chỉ ra rằng không có khiếm khuyết\n  B) Hỗ trợ người dùng cuối thực hiện kiểm tra chấp nhận\n  C) Đảm bảo rằng không còn lỗi triển khai nào trong hệ thống được phân phối\n  D) Sửa đổi các bài kiểm tra không gây ra lỗi để đảm bảo vẫn còn ít lỗi\n\n💡 GIẢI THÍCH CHI TIẾT:\n‘Ngụy biện không có khiếm khuyết’ liên quan đến ý tưởng rằng việc đảm bảo tính đúng đắn theo các yêu cầu (tức là xác minh việc không có khiếm khuyết trong quá trình triển khai) không đảm bảo sự hài lòng của người dùng đối với hệ thống. Để giải quyết vấn đề này, cần phải xác nhận rằng hệ thống có đáp ứng được nhu cầu và mong đợi của người dùng, đáp ứng các mục tiêu kinh doanh và vượt trội hơn các hệ thống cạnh tranh hay không.\na) Không đúng. Nguyên tắc 'kiểm thử cho thấy sự hiện diện chứ không phải không có khiếm khuyết' giải thích rằng mặc dù kiểm thử có thể phát hiện sự tồn tại của khiếm khuyết trong đối tượng kiểm thử nhưng không thể chứng minh rằng không có khiếm khuyết và do đó đảm bảo tính chính xác của nó. Do đó, việc giải thích rằng việc kiểm thử không thể chỉ ra rằng không có khiếm khuyết sẽ phần nào giải quyết được nguyên tắc này, chứ không phải là ngụy biện “không có khiếm khuyết”.\nb) Đúng. Bằng cách hỗ trợ người dùng cuối thực hiện kiểm tra chấp nhận, có thể xác nhận rằng hệ thống đáp ứng nhu cầu và mong đợi của người dùng\nc) Không đúng. Không thể đảm bảo rằng không còn lỗi triển khai nào trong hệ thống được phân phối vì nguyên tắc 'kiểm thử cho thấy sự hiện diện chứ không phải không có lỗi' giải thích rằng mặc dù kiểm thử có thể phát hiện sự tồn tại của lỗi trong test object (đối tượng kiểm thử) nhưng không thể chứng"
  },
  {
    "n": 4,
    "ref": "Question #4 [FL-1.4.1]",
    "stem": "Which of the following test activities are MOST likely to involve the application of boundary value  analysis and equivalence partitioning?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test implementation"
      },
      {
        "k": "b",
        "t": "B) Test design"
      },
      {
        "k": "c",
        "t": "C) Test execution"
      },
      {
        "k": "d",
        "t": "D) Test monitoring"
      },
      {
        "k": "e",
        "t": "E) Test analysis March 25, 2025"
      }
    ],
    "ans": [
      "b",
      "e"
    ],
    "multi": true,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHoạt động kiểm tra nào sau đây có nhiều khả năng liên quan đến việc áp dụng phân tích giá trị biên và phân vùng tương đương?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Thực thi kiểm thử\n  B) Thiết kế kiểm thử\n  C) Thực thi kiểm thử\n  D) Giám sát kiểm tra\n  E) Phân tích kiểm thử ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nĐưa ra mô tả về phân tích kiểm thử sau: Để xác định các tính năng cần kiểm thử, cơ sở kiểm thử được phân tích và xác định là các điều kiện kiểm thử, sau đó được ưu tiên cùng với các rủi ro liên quan. Việc xác định một cách có hệ thống các điều kiện kiểm thử như các hạng mục bao phủ thường liên quan đến việc sử dụng các kỹ thuật kiểm thử cả trong quá trình phân tích kiểm thử và như một phần của hoạt động thiết kế kiểm thử.  Từ mô tả trên, có thể thấy rằng các kỹ thuật kiểm thử thường được sử dụng trong các hoạt động phân tích kiểm thử và thiết kế kiểm thử. Phân tích giá trị biên và phân vùng tương đương là các kỹ thuật kiểm tra.\na) Không đúng. Việc thực hiện kiểm thử không có khả năng liên quan đến việc sử dụng các kỹ thuật kiểm thử vì nó chủ yếu liên quan đến việc tập hợp các trường hợp kiểm thử thành quy trình kiểm thử, trong khi các kỹ thuật kiểm thử tạo ra các trường hợp kiểm thử.\nb) Đúng. Thiết kế kiểm thử có thể liên quan đến việc sử dụng các kỹ thuật kiểm thử để tạo ra các trường hợp kiểm thử từ các điều kiện kiểm thử và các hạng mục bao phủ.\nc) Không đúng. Việc thực hiện kiểm thử không có khả năng liên quan đến việc sử dụng các kỹ thuật kiểm thử vì nó chủ yếu liên quan đến việc thực hiện các thủ tục kiểm thử (và các trường hợp kiểm thử), trong khi các kỹ thuật kiểm thử tạo ra các trường hợp kiểm thử\nđ) Không đúng. Giám sát kiểm tra không có khả năng liên quan đến việc sử dụng các kỹ thuật kiểm tra. Giám sát kiểm thử chủ yếu liên quan đến việc kiểm tra liên tục để đảm bảo kế hoạch được tuân "
  },
  {
    "n": 5,
    "ref": "Question #5 [FL-1.4.3]",
    "stem": "Given the following testware:  1. Coverage items  2. Change requests  3. Test execution schedule   4. Prioritized test conditions   And the following test activities  A. Test analysis   B. Test design   C. Test implementation   D. Test completion   Which of the following BEST shows the testware produced by the activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1B, 2D, 3C, 4A"
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
        "t": "D) 1D, 2C, 3B, 4A"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCho phần mềm kiểm thử sau: 1. Mục phạm vi 2. Yêu cầu thay đổi 3. Lịch thực hiện kiểm thử 4. Điều kiện kiểm thử ưu tiên Và các hoạt động kiểm thử sau A. Phân tích kiểm thử B. Thiết kế kiểm thử C. Thực hiện kiểm thử D. Hoàn thành kiểm thử Điều nào sau đây TỐT NHẤT cho thấy phần mềm kiểm thử được tạo ra bởi các hoạt động?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 1B, 2D, 3C, 4A\n  B) 1B, 2D, 3A, 4C\n  C) 1D, 2C, 3A, 4B\n  D) 1D, 2C, 3B, 4A\n\n💡 GIẢI THÍCH CHI TIẾT:\nXem xét từng hoạt động kiểm thử được liệt kê và phần mềm kiểm thử đầu ra của chúng: A. Phân tích kiểm thử - điều kiện kiểm thử ưu tiên (4) (ví dụ: tiêu chí chấp nhận) và báo cáo lỗi cho các lỗi được xác định trong cơ sở kiểm thử B. Thiết kế kiểm thử - trường hợp kiểm thử ưu tiên, điều lệ kiểm thử, mục bao phủ (1), yêu cầu dữ liệu kiểm thử và yêu cầu môi trường kiểm thử C. Triển khai kiểm thử - quy trình kiểm thử, tập lệnh kiểm thử tự động, bộ kiểm thử, dữ liệu kiểm thử, lịch thực hiện kiểm thử (3) và các yếu tố môi trường kiểm thử như sơ khai, trình điều khiển, trình mô phỏng và ảo hóa dịch vụ D. Hoàn thành kiểm thử - báo cáo hoàn thành kiểm thử, các bài học kinh nghiệm được ghi lại, các mục hành động để cải tiến và các yêu cầu thay đổi (2) (dưới dạng các hạng mục tồn đọng của sản phẩm) Do đó:\na) Đúng. Kết quả đúng là: 1B, 2D, 3C, 4A\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-1.4.3 (K2)"
  },
  {
    "n": 6,
    "ref": "Question #6 [FL-1.4.5]",
    "stem": "Which of the following statements about the different testing roles is MOST likely to be  CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team"
      },
      {
        "k": "b",
        "t": "B) The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion"
      },
      {
        "k": "c",
        "t": "C) In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself"
      },
      {
        "k": "d",
        "t": "D) The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về các vai trò kiểm thử khác nhau có khả năng ĐÚNG NHẤT?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Trong phát triển phần mềm Agile, vai trò quản lý kiểm thử là trách nhiệm chính của nhóm, trong khi vai trò kiểm thử chủ yếu là trách nhiệm của một cá nhân bên ngoài nhóm.\n  B) Vai trò kiểm thử chịu trách nhiệm chính trong việc giám sát kiểm thử và kiểm soát kiểm thử, trong khi vai trò quản lý kiểm thử chủ yếu chịu trách nhiệm lập kế hoạch kiểm thử và hoàn thành kiểm thử.\n  C) Trong quá trình phát triển phần mềm Agile, các hoạt động quản lý kiểm thử trải rộng trên nhiều nhóm do người quản lý kiểm thử bên ngoài nhóm xử lý, trong khi một số nhiệm vụ quản lý kiểm thử do chính nhóm xử lý.\n  D) Vai trò quản lý kiểm thử chịu trách nhiệm chính về phân tích kiểm thử và thiết kế kiểm thử, trong khi vai trò kiểm thử chủ yếu chịu trách nhiệm thực hiện kiểm thử và thực hiện kiểm thử.\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Mặc dù đúng khi nói rằng trong quá trình phát triển phần mềm Agile, một số nhiệm vụ quản lý kiểm thử có thể do chính nhóm Agile xử lý, nhưng vai trò kiểm thử chủ yếu không phải là trách nhiệm của một cá nhân bên ngoài nhóm. Thay vào đó, việc kiểm thử có nhiều khả năng được thực hiện bởi nhiều thành viên khác nhau trong nhóm theo cách tiếp cận toàn nhóm.\nb) Không đúng. Vai trò quản lý kiểm thử chủ yếu liên quan đến các hoạt động liên quan đến lập kế hoạch kiểm thử, giám sát kiểm thử và kiểm soát kiểm thử cũng như hoàn thành kiểm thử. Vì vậy, mặc dù nhận định này đúng một phần nhưng sẽ sai khi nói rằng vai trò kiểm thử chịu trách nhiệm chính trong việc giám sát kiểm thử và kiểm soát kiểm thử.\nc) Đúng. Trong quá trình phát triển phần mềm Agile, một số nhiệm vụ quản lý kiểm thử có thể do chính nhóm Agile xử lý. Tuy nhiên, đối với các hoạt động kiểm thử trải rộng trên nhiều nhóm trong một tổ chức, người q"
  },
  {
    "n": 7,
    "ref": "Question #7 [FL-1.5.2]",
    "stem": "Which of the following is an advantage of the whole-team approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) Teams with no testers"
      },
      {
        "k": "b",
        "t": "B) Improved team dynamics"
      },
      {
        "k": "c",
        "t": "C) Specialist team members"
      },
      {
        "k": "d",
        "t": "D) Larger team sizes March 25, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ưu điểm của cách tiếp cận toàn nhóm?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Các đội không có tester (kiểm thử viên)\n  B) Cải thiện tính năng động của nhóm\n  C) Các thành viên nhóm chuyên môn\n  D) Quy mô nhóm lớn hơn Ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Trong cách tiếp cận toàn nhóm, tester (kiểm thử viên) đóng một vai trò quan trọng bằng cách chia sẻ chuyên môn kiểm thử của họ với nhóm và hướng dẫn phát triển sản phẩm. Họ cộng tác với các thành viên khác trong nhóm để đạt được mức chất lượng mong muốn và làm việc với đại diện doanh nghiệp để tạo ra các bài kiểm tra chấp nhận. tester (kiểm thử viên) cũng hợp tác với các nhà phát triển để xác định chiến lược kiểm thử tối ưu và phương pháp tự động hóa kiểm thử (test automation)\nb) Đúng. Bằng cách tận dụng các bộ kỹ năng đa dạng của từng thành viên trong nhóm một cách hiệu quả nhất, cách tiếp cận toàn nhóm sẽ thúc đẩy động lực vượt trội của nhóm, thúc đẩy giao tiếp và hợp tác mạnh mẽ, đồng thời tạo ra hiệu ứng hiệp đồng mang lại lợi ích cho toàn bộ dự án.\nc) Không đúng. Cách tiếp cận toàn nhóm cho phép bất kỳ thành viên nào trong nhóm có kỹ năng và kiến thức cần thiết để thực hiện bất kỳ nhiệm vụ nào, do đó, các thành viên nhóm chuyên môn không phải là lợi thế của phương pháp này\nđ) Không đúng. Không có hướng dẫn cụ thể nào về quy mô tối ưu của các nhóm sử dụng phương pháp tiếp cận toàn nhóm và không có gợi ý nào cho rằng các nhóm lớn hơn sẽ tốt hơn\n\n📌 Kiến thức: FL-1.5.2 (K1)"
  },
  {
    "n": 8,
    "ref": "Question #8 [FL-1.5.3]",
    "stem": "Which of the following statements about the independence of testing is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers"
      },
      {
        "k": "b",
        "t": "B) Developers’ familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers"
      },
      {
        "k": "c",
        "t": "C) Independent testing requires testers who are outside the developer’s team and ideally from outside the organization, however these testers find it difficult to understand the application domain"
      },
      {
        "k": "d",
        "t": "D) Testers from outside the developer’s team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về tính độc lập của kiểm thử là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Những tester (kiểm thử viên) độc lập sẽ phát hiện ra các khiếm khuyết do quan điểm kỹ thuật khác nhau của họ với các nhà phát triển, nhưng tính độc lập của họ có thể dẫn đến mối quan hệ bất lợi với các nhà phát triển.\n  B) Sự quen thuộc của nhà phát triển với mã của chính họ có nghĩa là họ chỉ tìm thấy một vài lỗi trong đó, tuy nhiên nền tảng phần mềm được chia sẻ của họ với người kiểm tra có nghĩa là những người kiểm tra cũng sẽ tìm thấy những lỗi này\n  C) Kiểm thử độc lập yêu cầu những tester (kiểm thử viên) ở bên ngoài nhóm của nhà phát triển và lý tưởng nhất là ở bên ngoài tổ chức, tuy nhiên những tester (kiểm thử viên) này cảm thấy khó hiểu miền ứng dụng\n  D) Những tester (kiểm thử viên) bên ngoài nhóm của nhà phát triển độc lập hơn những tester (kiểm thử viên) trong nhóm, nhưng những tester (kiểm thử viên) trong nhóm có nhiều khả năng bị đổ lỗi cho sự chậm trễ trong việc phát hành sản phẩm\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Lợi ích chính của việc kiểm thử độc lập là người kiểm thử có nhiều khả năng xác định các loại lỗi và khiếm khuyết khác nhau hơn so với các nhà phát triển, do nền tảng, quan điểm kỹ thuật và thành kiến ​​tiềm ẩn của họ khác nhau, bao gồm cả thành kiến ​​nhận thức. Tuy nhiên, nhược điểm chính của tính độc lập của kiểm thử là tester (kiểm thử viên) có thể bị cô lập khỏi nhóm phát triển, dẫn đến các vấn đề về giao tiếp, thiếu cộng tác và có thể gây ra mối quan hệ bất lợi, trong đó tester (kiểm thử viên) bị đổ lỗi cho sự chậm trễ và tắc nghẽn trong quá trình phát hành.\nb) Không đúng. Sự quen thuộc của nhà phát triển với mã không có nghĩa là họ hiếm khi tìm thấy lỗi trong đó, thay vào đó, sự quen thuộc này có nghĩa là họ có thể tìm thấy nhiều lỗi trong mã của chính mình một cách hiệu quả. Và, thay vì các n"
  },
  {
    "n": 9,
    "ref": "Question #9 [FL-2.1.2]",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "opts": [
      {
        "k": "a",
        "t": "A) For each test level, there is a corresponding development level"
      },
      {
        "k": "b",
        "t": "B) For each test objective, there is a corresponding development objective"
      },
      {
        "k": "c",
        "t": "C) For every test activity, there is a corresponding user activity"
      },
      {
        "k": "d",
        "t": "D) For every development activity, there is a corresponding test activity"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là phương pháp kiểm thử tốt áp dụng cho tất cả vòng đời phát triển phần mềm?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Với mỗi cấp độ kiểm tra đều có cấp độ phát triển tương ứng\n  B) Với mỗi mục tiêu kiểm thử đều có mục tiêu phát triển tương ứng\n  C) Đối với mỗi hoạt động kiểm thử đều có một hoạt động người dùng tương ứng\n  D) Đối với mỗi hoạt động phát triển đều có hoạt động kiểm tra tương ứng\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Kiểm soát chất lượng áp dụng cho tất cả các hoạt động phát triển, nghĩa là mọi hoạt động phát triển phần mềm đều có hoạt động kiểm tra tương ứng. Tuy nhiên, ở đây chúng tôi đang cố gắng đánh đồng các cấp độ kiểm tra với các cấp độ phát triển và mặc dù chúng tôi biết 'cấp độ kiểm tra' nghĩa là gì nhưng không có cách hiểu chung nào về thuật ngữ 'cấp độ phát triển'\nb) Không đúng. Mỗi hoạt động phát triển phần mềm đều có hoạt động kiểm thử tương ứng; tuy nhiên mục tiêu kiểm thử khá khác nhau. Ví dụ: có thể có mục tiêu kiểm thử là đảm bảo rằng test object (đối tượng kiểm thử) tuân thủ yêu cầu hợp đồng rằng một loại kiểm thử (test type) nhất định phải được thực hiện trước khi giao hàng. Trong trường hợp này không có lý do gì để có mục tiêu phát triển tương ứng\nc) Không đúng. Kiểm soát chất lượng áp dụng cho tất cả các hoạt động phát triển, nghĩa là mọi hoạt động phát triển phần mềm đều có hoạt động kiểm tra tương ứng. Tuy nhiên, tính đối xứng tương tự không áp dụng cho hoạt động kiểm thử và người dùng. Ví dụ, đối với một số hệ thống, rất khó để xác định người dùng cuối. Ngoài ra, một số hoạt động kiểm thử tập trung vào các nhà phát triển (ví dụ: kiểm thử để dễ bảo trì), hoạt động này không có khía cạnh người dùng.\nđ) Đúng. Kiểm soát chất lượng áp dụng cho tất cả các hoạt động phát triển, nghĩa là mọi hoạt động phát triển phần mềm đều có hoạt động kiểm tra tương ứng\n\n📌 Kiến thức:"
  },
  {
    "n": 10,
    "ref": "Question #10 [FL-2.1.3]",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "opts": [
      {
        "k": "a",
        "t": "A) Component Test-Driven Development"
      },
      {
        "k": "b",
        "t": "B) Integration Test-Driven Development"
      },
      {
        "k": "c",
        "t": "C) System Test-Driven Development"
      },
      {
        "k": "d",
        "t": "D) Acceptance Test-Driven Development March 25, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ví dụ về phương pháp phát triển kiểm thử đầu tiên?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Phát triển dựa trên kiểm thử thành phần (component testing)\n  B) Phát triển dựa trên kiểm thử tích hợp (integration testing)\n  C) Phát triển dựa trên kiểm thử hệ thống (system testing)\n  D) Chấp nhận phát triển dựa trên kiểm thử ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Phát triển dựa trên kiểm thử thành phần (component testing) không phải là một ví dụ chính xác về cách tiếp cận phát triển kiểm thử đầu tiên\nb) Không đúng. Tích hợp Phát triển dựa trên kiểm thử không phải là một ví dụ chính xác về cách tiếp cận phát triển kiểm thử đầu tiên\nc) Không đúng. Phát triển dựa trên kiểm thử hệ thống (system testing) không phải là một ví dụ chính xác về cách tiếp cận phát triển kiểm thử đầu tiên\nđ) Đúng. Chấp nhận Phát triển dựa trên kiểm thử (ATDD) là một ví dụ nổi tiếng về cách tiếp cận kiểm thử đầu tiên để phát triển\n\n📌 Kiến thức: FL-2.1.3 (K1)"
  },
  {
    "n": 11,
    "ref": "Question #11 [FL-2.1.5]",
    "stem": "Which of the following provides the BEST description of shift-left?",
    "opts": [
      {
        "k": "a",
        "t": "A) When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of ‘early testing saves time and money’"
      },
      {
        "k": "b",
        "t": "B) Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC"
      },
      {
        "k": "c",
        "t": "C) When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests"
      },
      {
        "k": "d",
        "t": "D) When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây cung cấp mô tả TỐT NHẤT về shift-left?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Khi được các nhà phát triển đồng ý, các hoạt động thủ công ở phía bên trái của quy trình kiểm thử sẽ được tự động hóa để hỗ trợ nguyên tắc ‘kiểm thử sớm giúp tiết kiệm thời gian và tiền bạc’\n  B) Khi có hiệu quả về mặt chi phí, các hoạt động kiểm thử sẽ được chuyển sớm hơn trong vòng đời phát triển phần mềm (SDLC) để giảm tổng chi phí về chất lượng bằng cách giảm số lượng lỗi được tìm thấy sau này trong SDLC\n  C) Khi có thời gian rảnh, người kiểm tra được yêu cầu tự động hóa các bài kiểm tra để kiểm tra hồi quy, bắt đầu bằng kiểm tra thành phần và kiểm tra tích hợp thành phần\n  D) Khi có sẵn, người kiểm tra được đào tạo để thực hiện sớm các nhiệm vụ trong SDLC nhằm cho phép nhiều hoạt động kiểm tra hơn được tự động hóa sau này trong SDLC\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Các hoạt động liên quan đến dịch chuyển sang trái nhằm mục đích triển khai nhiều hoạt động kiểm thử hơn trong các giai đoạn đầu của vòng đời phát triển phần mềm (SDLC), mô tả SDLC đang chuyển động từ trái sang phải. Không có cái gọi là phía bên trái của quá trình kiểm tra\nb) Đúng. Dịch chuyển sang trái nhấn mạnh tầm quan trọng của việc bắt đầu kiểm thử sớm hơn trong SDLC. Việc triển khai kiểm thử dịch chuyển trái đòi hỏi phải đào tạo bổ sung, đồng thời tăng nỗ lực và chi phí trong các giai đoạn đầu của SDLC, tuy nhiên, mức tiết kiệm tổng thể sẽ cao hơn\nc) Không đúng. Mặc dù các bài kiểm thử thành phần tự động và kiểm thử tích hợp (integration testing) thành phần để kiểm thử hồi quy (regression testing) nhìn chung có giá trị nhưng việc tạo ra các bài kiểm thử này thường là trách nhiệm của nhà phát triển và nếu tuân theo phương pháp tích hợp liên tục/phân phối liên tục (CI/CD) thì các bài kiểm thử này sẽ được gửi cùng với mã. Trong một số trường hợp, n"
  },
  {
    "n": 12,
    "ref": "Question #12 [FL-2.1.6]",
    "stem": "Which of the following is LEAST likely to occur as a result of a retrospective?",
    "opts": [
      {
        "k": "a",
        "t": "A) The quality of future test objects improves by identifying improvements in development practices"
      },
      {
        "k": "b",
        "t": "B) Test efficiency improves by speeding up the configuration of test environments through automation"
      },
      {
        "k": "c",
        "t": "C) End users’ understanding of the development and test processes is improved"
      },
      {
        "k": "d",
        "t": "D) Automated test scripts are enhanced through feedback from developers"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây ÍT có khả năng xảy ra do quá trình hồi cứu?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Chất lượng của các test object (đối tượng kiểm thử) trong tương lai được cải thiện bằng cách xác định những cải tiến trong thực tiễn phát triển\n  B) Hiệu quả kiểm thử được cải thiện bằng cách tăng tốc độ cấu hình môi trường kiểm thử thông qua tự động hóa\n  C) Sự hiểu biết của người dùng cuối về quá trình phát triển và kiểm thử được cải thiện\n  D) Tập lệnh kiểm thử tự động được nâng cao thông qua phản hồi từ nhà phát triển\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Một trong những mục đích của hồi cứu là xác định các cải tiến quy trình tiềm năng, nếu được áp dụng vào thực tế sẽ mang lại chất lượng đầu ra trong tương lai của quy trình phát triển (test object (đối tượng kiểm thử)) cao hơn. Vì vậy, điều này có thể xảy ra do kết quả của quá trình hồi cứu\nb) Không đúng. Lợi ích của việc hồi cứu quá trình kiểm thử bao gồm việc tăng hiệu quả kiểm thử thông qua cải tiến quy trình. Vì vậy, điều này có thể xảy ra do kết quả của quá trình hồi cứu\nc) Đúng. Những người tham gia buổi cải tiến thường bao gồm tester (kiểm thử viên), nhà phát triển, kiến ​​trúc sư, chủ sở hữu sản phẩm và nhà phân tích kinh doanh, nhưng người dùng cuối hiếm khi được mời hoặc tham dự các cuộc họp này – và họ cũng khó có thể nhận được bất kỳ báo cáo nào từ các cuộc họp này. Vì vậy, rất khó có khả năng họ sẽ tìm hiểu và hiểu thêm về quá trình phát triển và kiểm thử thông qua các buổi hồi tưởng.\nđ) Không đúng. Lợi ích của việc hồi cứu quá trình kiểm thử bao gồm cải thiện chất lượng của testware (chế phẩm kiểm thử) (bao gồm cả các tập lệnh kiểm thử tự động) thông qua các đánh giá chung với các nhà phát triển. Vì vậy, điều này có thể xảy ra do kết quả của quá trình hồi cứu\n\n📌 Kiến thức: FL-2.1.6 (K2)"
  },
  {
    "n": 13,
    "ref": "Question #13 [FL-2.2.1]",
    "stem": "Which of the following test levels is MOST likely being performed if the testing is focused on  validation and is not being performed by testers?",
    "opts": [
      {
        "k": "a",
        "t": "A) Component testing"
      },
      {
        "k": "b",
        "t": "B) Component integration testing"
      },
      {
        "k": "c",
        "t": "C) System integration testing"
      },
      {
        "k": "d",
        "t": "D) Acceptance testing"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCấp độ kiểm tra nào sau đây có nhiều khả năng được thực hiện nhất nếu việc kiểm tra tập trung vào xác nhận và không được người kiểm tra thực hiện?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra thành phần\n  B) Kiểm tra tích hợp thành phần\n  C) Kiểm thử tích hợp hệ thống\n  D) Kiểm tra chấp nhận\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Kiểm thử thành phần (còn gọi là kiểm thử đơn vị) liên quan đến việc kiểm thử từng thành phần riêng lẻ và chủ yếu là xác minh dựa trên thông số kỹ thuật, thay vì xác thực theo nhu cầu của người dùng.  Tuy nhiên, kiểm thử này thường không được tester (kiểm thử viên) thực hiện vì các nhà phát triển thường thực thi kiểm thử này trong môi trường phát triển của họ.\nb) Không đúng. Kiểm tra tích hợp thành phần bao gồm kiểm tra giao diện và tương tác giữa các thành phần và chủ yếu là xác minh dựa trên thông số kỹ thuật, thay vì xác nhận theo nhu cầu của người dùng. Tuy nhiên, việc kiểm thử này thường không được người kiểm thử thực hiện vì các nhà phát triển thường thực hiện việc kiểm thử này.\nc) Không đúng. Kiểm tra tích hợp hệ thống kiểm tra các giao diện với các hệ thống khác và dịch vụ bên ngoài và chủ yếu là xác minh dựa trên thông số kỹ thuật, thay vì xác nhận theo nhu cầu của người dùng. loại kiểm thử (test type) này cũng thường được thực hiện bởi tester (kiểm thử viên)\nđ) Đúng. Kiểm tra chấp nhận tập trung vào việc xác nhận rằng hệ thống đáp ứng nhu cầu kinh doanh của người dùng và sẵn sàng triển khai. Lý tưởng nhất là việc kiểm thử này được thực hiện bởi người dùng cuối\n\n📌 Kiến thức: FL-2.2.1 (K2)"
  },
  {
    "n": 14,
    "ref": "Question #14 [FL-2.2.3]",
    "stem": "The navigation system software has been updated due to it suggesting routes that break traffic  laws, such as driving the wrong way down one-way streets. Which of the following BEST describes  the testing that will be performed?",
    "opts": [
      {
        "k": "a",
        "t": "A) Only confirmation testing"
      },
      {
        "k": "b",
        "t": "B) Confirmation testing then regression testing"
      },
      {
        "k": "c",
        "t": "C) Only regression testing"
      },
      {
        "k": "d",
        "t": "D) Regression testing then confirmation testing March 25, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nPhần mềm hệ thống định vị đã được cập nhật do nó gợi ý các tuyến đường vi phạm luật giao thông, chẳng hạn như lái xe sai đường xuống đường một chiều. Điều nào sau đây TỐT NHẤT mô tả kiểm thử sẽ được thực hiện?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Chỉ kiểm tra xác nhận\n  B) Kiểm tra xác nhận sau đó kiểm tra hồi quy\n  C) Chỉ kiểm tra hồi quy\n  D) Kiểm tra hồi quy sau đó kiểm tra xác nhận 25 Tháng Ba, 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Kiểm tra xác nhận để kiểm tra xem các bản cập nhật có dẫn đến việc triển khai chính xác hay không là cần thiết, tuy nhiên, sau đó sẽ là hợp lý khi thực hiện kiểm tra hồi quy để đảm bảo rằng không có lỗi nào được đưa ra hoặc phát hiện trong các khu vực không thay đổi của hệ thống\nb) Đúng. Kiểm tra xác nhận sẽ kiểm tra xem các bản cập nhật có dẫn đến việc triển khai chính xác hay không, sau đó kiểm tra hồi quy sẽ được sử dụng để đảm bảo rằng không có lỗi nào được phát hiện hoặc phát hiện trong các khu vực không thay đổi của hệ thống.\nc) Không đúng. Kiểm tra hồi quy nên được sử dụng để đảm bảo rằng không có lỗi nào được đưa ra hoặc phát hiện trong các khu vực không thay đổi của hệ thống khi cập nhật được thực hiện, tuy nhiên cũng cần phải thực hiện kiểm tra xác nhận để kiểm tra xem các bản cập nhật có dẫn đến việc triển khai chính xác hay không\nđ) Không đúng. Kiểm tra xác nhận sẽ kiểm tra xem các bản cập nhật có dẫn đến việc triển khai chính xác hay không và kiểm tra hồi quy sẽ được sử dụng để đảm bảo rằng không có lỗi nào được đưa ra hoặc phát hiện trong các khu vực không thay đổi của hệ thống. Tuy nhiên, khi được thực hiện (tức là khi cần kiểm tra một bản cập nhật), kiểm tra xác nhận sẽ đi trước kiểm tra hồi quy.\n\n📌 Kiến thức: FL-2.2.3 (K2)"
  },
  {
    "n": 15,
    "ref": "Question #15 [FL-3.1.3]",
    "stem": "Given the following example defects:  i.  Two different parts of the design specification disagree due to the complexity of the  design  ii.  A response time is too long and so makes users lose patience  iii.  A path in the code cannot be reached during execution  iv.  A variable is declared but never subsequently used in the program  v.  The amount of memory needed by the program to generate a report is too high  Which of the following BEST identifies example defects that could be found by static testing (rather  than dynamic testing)?",
    "opts": [
      {
        "k": "a",
        "t": "A) ii, v"
      },
      {
        "k": "b",
        "t": "B) iii, v"
      },
      {
        "k": "c",
        "t": "C) i, ii, iv"
      },
      {
        "k": "d",
        "t": "D) i, iii, iv"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCho các lỗi ví dụ sau: i.  Hai phần khác nhau của đặc tả thiết kế không thống nhất được do tính phức tạp của thiết kế ii.  Thời gian phản hồi quá lâu khiến người dùng mất kiên nhẫn iii.  Không thể truy cập đường dẫn trong mã trong quá trình thực thi iv.  Một biến được khai báo nhưng sau đó không bao giờ được sử dụng trong chương trình v. Dung lượng bộ nhớ mà chương trình cần để tạo báo cáo quá cao Điều nào sau đây TỐT NHẤT xác định các lỗi ví dụ có thể được tìm thấy bằng kiểm thử tĩnh (static testing) (thay vì kiểm thử động (dynamic testing))?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Ii, v\n  B) Iii, v\n  C) Tôi, ii, iv\n  D) Tôi, iii, iv\n\n💡 GIẢI THÍCH CHI TIẾT:\nXem xét từng lỗi ví dụ được liệt kê: i.  Hai phần khác nhau của đặc tả thiết kế không đồng nhất do tính phức tạp của thiết kế - đây là một ví dụ về lỗi đặc tả, bao gồm sự không nhất quán, mơ hồ, mâu thuẫn, thiếu sót, không chính xác và trùng lặp, có thể dễ dàng tìm thấy nhất bằng kiểm thử tĩnh (static testing) ii.  Thời gian phản hồi quá dài và do đó khiến người dùng mất kiên nhẫn – đây là một ví dụ về lỗi thời gian phản hồi, chỉ có thể được phát hiện trong thực tế bằng cách thực thi chương trình và đo thời gian phản hồi, điều này có thể dễ dàng phát hiện nhất bằng kiểm thử động (dynamic testing) iii.  Không thể truy cập đường dẫn trong mã trong khi thực thi - đây là ví dụ về lỗi mã hóa, bao gồm các biến có giá trị không xác định, biến không được khai báo, mã trùng lặp hoặc không thể truy cập và độ phức tạp của mã quá mức, có thể dễ dàng tìm thấy nhất bằng kiểm thử tĩnh (static testing) iv.  Một biến được khai báo nhưng sau đó không bao giờ được sử dụng trong chương trình - đây là ví dụ về lỗi mã hóa, bao gồm các biến có giá trị không xác định, biến không được khai báo, mã trùng lặp hoặc không thể truy cập và độ phức tạp của mã quá mức, có thể dễ dàng tìm thấy n"
  },
  {
    "n": 16,
    "ref": "Question #16 [FL-3.2.1]",
    "stem": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "opts": [
      {
        "k": "a",
        "t": "A) Changes to requirements are understood and implemented earlier"
      },
      {
        "k": "b",
        "t": "B) It ensures business stakeholders understand user requirements"
      },
      {
        "k": "c",
        "t": "C) It allows product owners to change their requirements as often as they want"
      },
      {
        "k": "d",
        "t": "D) End users are told which requirements will not be implemented prior to release March 25, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là lợi ích của phản hồi sớm và thường xuyên của các bên liên quan?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Những thay đổi về yêu cầu được hiểu và thực hiện sớm hơn\n  B) Nó đảm bảo các bên liên quan trong kinh doanh hiểu được yêu cầu của người dùng\n  C) Nó cho phép chủ sở hữu sản phẩm thay đổi yêu cầu của họ thường xuyên như họ muốn\n  D) Người dùng cuối được thông báo những yêu cầu nào sẽ không được triển khai trước khi phát hành Ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Nhận được phản hồi từ các bên liên quan sớm và thường xuyên trong quá trình phát triển phần mềm có thể rất có lợi. Nó tạo điều kiện thông tin sớm về các vấn đề chất lượng tiềm ẩn, có thể ngăn ngừa sự hiểu lầm về các yêu cầu và đảm bảo rằng mọi thay đổi trong yêu cầu của các bên liên quan đều được hiểu và thực hiện sớm hơn.\nb) Không đúng. Phản hồi là từ các bên liên quan, vì vậy việc cung cấp phản hồi khó có thể cải thiện sự hiểu biết của họ về yêu cầu của người dùng.\nc) Không đúng. Nhận được phản hồi từ các bên liên quan sớm và thường xuyên trong quá trình phát triển phần mềm có thể rất có lợi. Nó tạo điều kiện thuận lợi cho việc trao đổi sớm về các vấn đề chất lượng tiềm ẩn, có thể ngăn ngừa sự hiểu lầm về các yêu cầu và đảm bảo rằng mọi thay đổi trong yêu cầu của các bên liên quan đều được hiểu và thực hiện sớm hơn.  Tuy nhiên, vì những thay đổi trong yêu cầu có thể được hiểu và thực hiện sớm hơn, điều đó không có nghĩa là khuyến khích những thay đổi không giới hạn về yêu cầu.\nđ) Không đúng. Phản hồi là từ các bên liên quan và không bao gồm việc giao tiếp với họ. Việc liên lạc với người dùng cuối có thể bao gồm việc cho họ biết những yêu cầu nào sẽ không được triển khai trước khi phát hành, nhưng lý tưởng nhất là điều này hoàn toàn không nên xảy ra.\n\n📌 Kiến thức: FL-3.2.1 (K1)"
  },
  {
    "n": 17,
    "ref": "Question #17 [FL-3.2.4]",
    "stem": "Given the following review types:  1. Technical review  2. Informal review  3. Inspection  4. Walkthrough  And the following descriptions:  A. Includes objectives such as gaining consensus, generating new ideas, and  motivating authors to improve  B. Includes objectives such as educating reviewers, gaining consensus, generating  new ideas and detecting potential defects  C. The main objective is detecting potential defects and it requires metrics collection to  support process improvement  D. The main objective is detecting potential defects and it generates no formal  documented output  Which of the following BEST matches the review types and the descriptions?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1A, 2B, 3C, 4D"
      },
      {
        "k": "b",
        "t": "B) 1A, 2D, 3C, 4B"
      },
      {
        "k": "c",
        "t": "C) 1B, 2C, 3D, 4A"
      },
      {
        "k": "d",
        "t": "D) 1C, 2D, 3A, 4B"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCho các loại đánh giá sau: 1. Đánh giá kỹ thuật 2. Đánh giá không chính thức 3. Kiểm tra 4. Hướng dẫn và mô tả sau: A. Bao gồm các mục tiêu như đạt được sự đồng thuận, tạo ra ý tưởng mới và thúc đẩy tác giả cải tiến B. Bao gồm các mục tiêu như đào tạo người đánh giá, đạt được sự đồng thuận, tạo ra ý tưởng mới và phát hiện các khiếm khuyết tiềm ẩn C. Mục tiêu chính là phát hiện các khiếm khuyết tiềm ẩn và yêu cầu thu thập số liệu để hỗ trợ cải tiến quy trình D. Mục tiêu chính là phát hiện các khiếm khuyết tiềm ẩn và không tạo ra đầu ra được ghi chép chính thức Điều nào sau đây TỐT NHẤT phù hợp với các loại đánh giá và mô tả?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 1A, 2B, 3C, 4D\n  B) 1A, 2D, 3C, 4B\n  C) 1B, 2C, 3D, 4A\n  D) 1C, 2D, 3A, 4B\n\n💡 GIẢI THÍCH CHI TIẾT:\nXem xét từng loại đánh giá được liệt kê: 1. Đánh giá kỹ thuật - Loại đánh giá này được thực hiện bởi những người đánh giá có trình độ kỹ thuật và do người kiểm duyệt chỉ đạo. Mục tiêu là đạt được sự đồng thuận và đưa ra quyết định về các vấn đề kỹ thuật đồng thời đánh giá chất lượng và xây dựng niềm tin vào sản phẩm công việc, tạo ra các ý tưởng mới, thúc đẩy và tạo điều kiện cho tác giả cải tiến cũng như phát hiện các điểm bất thường. 2. Đánh giá không chính thức - Mục tiêu chính là phát hiện các điểm bất thường. Quy trình này không được xác định và không yêu cầu đầu ra được ghi chép chính thức 3. Kiểm tra - Đây là loại đánh giá chính thức nhất và tuân theo quy trình đánh giá chung hoàn chỉnh. Mục tiêu chính là tìm ra những điểm bất thường nhất và các mục tiêu khác bao gồm đánh giá chất lượng và xây dựng niềm tin vào sản phẩm công việc, thúc đẩy và tạo điều kiện cho các tác giả cải thiện cũng như thu thập các số liệu có thể được sử dụng để nâng cao vòng đời phát triển phần mềm (SDLC), bao gồm cả quy trình kiểm tra. Tác giả không thể đóng vai trò là người đứng"
  },
  {
    "n": 18,
    "ref": "Question #18 [FL-3.2.5]",
    "stem": "Which of the following is a factor that contributes to a successful review?",
    "opts": [
      {
        "k": "a",
        "t": "A) Ensure management participate as reviewers"
      },
      {
        "k": "b",
        "t": "B) Split large work products into smaller parts"
      },
      {
        "k": "c",
        "t": "C) Set reviewer evaluation as an objective"
      },
      {
        "k": "d",
        "t": "D) Plan to cover one document per review"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nYếu tố nào sau đây góp phần tạo nên sự thành công của một cuộc đánh giá?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Đảm bảo ban quản lý tham gia với tư cách là người đánh giá\n  B) Chia sản phẩm công việc lớn thành các phần nhỏ hơn\n  C) Đặt đánh giá của người đánh giá làm mục tiêu\n  D) Lên kế hoạch trình bày một tài liệu cho mỗi lần đánh giá\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Để đảm bảo việc xem xét thành công, điều quan trọng là phải đảm bảo sự hỗ trợ của ban quản lý đối với quá trình xem xét. Tuy nhiên điều đó không có nghĩa là họ nên tham gia với tư cách là người đánh giá\nb) Đúng. Để đảm bảo đánh giá thành công, điều quan trọng là phải chia sản phẩm công việc thành các phần đủ nhỏ để được đánh giá trong khoảng thời gian hợp lý nhằm ngăn người đánh giá mất tập trung trong các lần đánh giá riêng lẻ hoặc các cuộc họp đánh giá.\nc) Không đúng. Để đảm bảo đánh giá thành công, điều quan trọng là phải xác định rõ ràng mục tiêu và tiêu chí kết thúc có thể đo lường được mà không cần đánh giá người tham gia.\nđ) Không đúng. Để đảm bảo đánh giá thành công, điều quan trọng là phải chia đánh giá thành các phần nhỏ hơn để ngăn người đánh giá mất tập trung trong các đánh giá riêng lẻ hoặc các cuộc họp đánh giá. Vì vậy, bạn không nên lập kế hoạch trình bày một tài liệu cho mỗi lần đánh giá\n\n📌 Kiến thức: FL-3.2.5 (K1)"
  },
  {
    "n": 19,
    "ref": "Question #19 [FL-4.1.1]",
    "stem": "What is the MAIN difference between black-box test techniques and experience-based test  techniques?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test object"
      },
      {
        "k": "b",
        "t": "B) The test level at which the test technique is used"
      },
      {
        "k": "c",
        "t": "C) The test basis"
      },
      {
        "k": "d",
        "t": "D) The software development lifecycle (SDLC) in which the test technique can be used March 25, 2025"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nSự khác biệt CHÍNH giữa kỹ thuật kiểm thử hộp đen và kỹ thuật kiểm thử dựa trên kinh nghiệm là gì?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Test object (đối tượng kiểm thử)\n  B) Mức độ kiểm tra mà kỹ thuật kiểm tra được sử dụng\n  C) Test basis (cơ sở kiểm thử)\n  D) Vòng đời phát triển phần mềm (SDLC) trong đó kỹ thuật kiểm tra có thể được sử dụng 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Trong hầu hết các trường hợp, cả kỹ thuật kiểm thử hộp đen và kỹ thuật kiểm thử dựa trên kinh nghiệm đều có thể được sử dụng cho cùng một đối tượng kiểm thử.\nb) Không đúng. Cả kỹ thuật kiểm thử hộp đen và kỹ thuật kiểm thử dựa trên kinh nghiệm đều có thể được sử dụng ở mọi cấp độ kiểm thử.\nc) Đúng. Các kỹ thuật kiểm thử hộp đen (còn được gọi là kỹ thuật dựa trên đặc tả) dựa trên phân tích hành vi được chỉ định của đối tượng kiểm thử mà không tham chiếu đến cấu trúc bên trong của nó. Vì vậy, cơ sở kiểm tra thường là một đặc điểm kỹ thuật. Các kỹ thuật kiểm thử dựa trên kinh nghiệm sử dụng hiệu quả kiến ​​thức và kinh nghiệm của người kiểm thử để thiết kế và thực hiện các trường hợp kiểm thử. Điều này có nghĩa là người kiểm thử khi thiết kế các bài kiểm thử có thể không sử dụng thông số kỹ thuật nào cả.\nđ) Không đúng. Kỹ thuật kiểm tra dựa trên kinh nghiệm có thể phát hiện các lỗi có thể bị bỏ sót khi sử dụng kỹ thuật kiểm tra hộp đen (và hộp trắng). Do đó, các kỹ thuật kiểm thử dựa trên kinh nghiệm bổ sung cho các kỹ thuật kiểm thử hộp đen và kỹ thuật kiểm thử hộp trắng và cả kỹ thuật kiểm thử hộp đen và kỹ thuật kiểm thử dựa trên kinh nghiệm đều có thể được sử dụng trong tất cả các SDLC.\n\n📌 Kiến thức: FL-4.1.1 (K2)"
  },
  {
    "n": 20,
    "ref": "Question #20 [FL-4.2.1]",
    "stem": "You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a  sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You  have identified the following valid equivalence partitions:  Variable: PIN code length  •  The partition “length correct”   - four-digit PINs  •  The partition “length incorrect”  - PINs with length other than 4  Variable: Number of different digits  •  The partition “number of different digits correct”  - PINs with at least two different digits  •  The partition “number of different digits incorrect” - PINs with all digits being the same  Which of the following is the BEST set of input test data to cover the identified equivalence  partitions?",
    "opts": [
      {
        "k": "a",
        "t": "A) 12, 1111, 1234, 12345"
      },
      {
        "k": "b",
        "t": "B) 1, 123, 1111, 1234"
      },
      {
        "k": "c",
        "t": "C) 11, 12, 1111, 12345"
      },
      {
        "k": "d",
        "t": "D) 123, 1222, 12345"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang kiểm tra trình xác thực mã PIN, trình này chấp nhận mã PIN hợp lệ và từ chối mã PIN không hợp lệ. Mã PIN là một chuỗi các chữ số. Mã PIN hợp lệ nếu nó bao gồm bốn chữ số, không phải tất cả đều giống nhau. Bạn đã xác định các phân vùng tương đương hợp lệ sau: Biến: Độ dài mã PIN • Phân vùng “độ dài đúng” - mã PIN gồm bốn chữ số • Phân vùng “độ dài không chính xác” - Mã PIN có độ dài khác 4 Biến: Số chữ số khác nhau • Phân vùng “số chữ số khác nhau đúng” - mã PIN có ít nhất hai chữ số khác nhau • Phân vùng “số chữ số khác nhau không chính xác” - mã PIN có tất cả các chữ số giống nhau Bộ dữ liệu kiểm tra đầu vào nào sau đây là TỐT NHẤT để bao gồm các phân vùng tương đương đã xác định?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 12, 1111, 1234, 12345\n  B) 1, 123, 1111, 1234\n  C) 11, 12, 1111, 12345\n  D) 123, 1222, 12345\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng.  • Giá trị “12” bao gồm “độ dài không chính xác, quá ít chữ số” • Giá trị “1111” bao gồm “độ dài chính xác” và “số chữ số khác nhau không chính xác • Giá trị “1234” lại bao gồm “độ dài chính xác” và “số chữ số khác nhau đúng” • Giá trị “12345” bao gồm “độ dài không chính xác, quá nhiều chữ số”\nb) Không đúng. Tất cả các phân vùng đều bị che, tuy nhiên nó chỉ che phần dưới của “độ dài không chính xác”\nc) Không đúng. Không có giá trị bao gồm “mã PIN chính xác”\nđ) Không đúng. Không có giá trị bao gồm \"số chữ số khác nhau\"\n\n📌 Kiến thức: FL-4.2.1 (K3)"
  },
  {
    "n": 21,
    "ref": "Question #21 [FL-4.2.2]",
    "stem": "A developer was asked to implement the following business rule:  INPUT: value (integer number)  IF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect”  ELSE write “value OK”  You design the test cases using 2-value boundary value analysis.  Which of the following sets of test inputs achieves the greatest coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 100,  150,  200,  201"
      },
      {
        "k": "b",
        "t": "B) 99, 100,  200,  201"
      },
      {
        "k": "c",
        "t": "C) 98, 99, 100,  101"
      },
      {
        "k": "d",
        "t": "D) 101,  150,  199,  200 March 25, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nNhà phát triển được yêu cầu triển khai quy tắc kinh doanh sau: INPUT: value (số nguyên) IF (giá trị ≤ 100 HOẶC giá trị ≥ 200) THÌ viết “giá trị không chính xác” ELSE ghi “giá trị OK” Bạn thiết kế các test case (ca kiểm thử) bằng cách sử dụng phân tích giá trị biên 2 giá trị.  Bộ đầu vào kiểm thử nào sau đây đạt được phạm vi bao phủ lớn nhất?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 100, 150, 200, 201\n  B) 99, 100, 200, 201\n  C) 98, 99, 100, 101\n  D) 101, 150, 199, 200 Ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nCác phân vùng tương đương là: {…, 99, 100}, {101, 102, …, 198, 199}, {200, 201, …}.  Do đó, có 4 giá trị biên là: 100, 101, 199 và 200. Trong BVA 2 giá trị, với mỗi giá trị biên có hai mục bao phủ (giá trị biên và lân cận gần nhất của nó thuộc phân vùng liền kề).  Vì những người hàng xóm gần nhất cũng là những giá trị biên trong phân vùng liền kề nên chỉ có bốn mục phủ sóng.  Như vậy:\na) Không đúng. Chỉ 100 và 200 là các mục bảo hiểm hợp lệ cho BVA 2 giá trị, vì vậy chúng tôi đạt được mức bảo hiểm 50%\nb) Không đúng. Chỉ 100 và 200 là các mục bảo hiểm hợp lệ cho BVA 2 giá trị, vì vậy chúng tôi đạt được mức bảo hiểm 50%\nc) Không đúng. Chỉ 100 và 101 là các mục bảo hiểm hợp lệ cho BVA 2 giá trị, vì vậy chúng tôi đạt được mức bảo hiểm 50%\nđ) Đúng. 101, 199 và 200 là các mục phù hợp hợp lệ cho BVA 2 giá trị, vì vậy chúng tôi đạt được mức độ phù hợp 75%\n\n📌 Kiến thức: FL-4.2.2 (K3)"
  },
  {
    "n": 22,
    "ref": "Question #22 [FL-4.2.3]",
    "stem": "You are working on a project to develop a system to analyze driving test results. You have been  asked to design test cases based on the following decision table.    R1  R2  R3  C1: First attempt at the exam?  -  -  F  C2: Theoretical exam passed?  T  F  -  C3: Practical exam passed?  T  -  F  Issue a driving license?  X      Request additional driving lessons?      X  Request to take the exam again?    X    What test data will show that there are contradictory rules in the decision table?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) C1 = T,  C2 = T,  C3 = F"
      },
      {
        "k": "b",
        "t": "B) C1 = T,  C2 = F,  C3 = T"
      },
      {
        "k": "c",
        "t": "C) C1 = T,  C2 = T,  C3 = T and C1 = F, C2 = T, C3 = T"
      },
      {
        "k": "d",
        "t": "D) C1 = F,  C2 = F,  C3 = F March 25, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang thực hiện dự án phát triển hệ thống phân tích kết quả sát hạch lái xe. Bạn được yêu cầu thiết kế các ca kiểm thử dựa trên bảng quyết định sau.    R1 R2 R3 C1: Lần đầu tham gia kỳ thi?  - - F C2: Thi lý thuyết đỗ?  T F - C3: Thi thực hành đậu?  T – F Cấp giấy phép lái xe?  X Yêu cầu học lái xe bổ sung?      X Yêu cầu thi lại?    X Dữ liệu kiểm thử nào sẽ cho thấy có những quy tắc trái ngược nhau trong bảng quyết định?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) C1 = T, C2 = T, C3 = F\n  B) C1 = T, C2 = F, C3 = T\n  C) C1 = T, C2 = T, C3 = T và C1 = F, C2 = T, C3 = T\n  D) C1 = F, C2 = F, C3 = F Ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Sự kết hợp (T, T, F) không khớp với bất kỳ quy tắc nào. Đây là một ví dụ về sự thiếu sót, không phải là mâu thuẫn\nb) Không đúng. Tổ hợp (T,F,T) chỉ khớp với một cột R2 nên không có mâu thuẫn\nc) Không đúng. Cả hai kết hợp (T, T, T) và (F, T, T) chỉ khớp với một cột, R1, do đó không có mâu thuẫn\nđ) Đúng. Tổ hợp (F,F,F) trùng khớp với cả R2 và R3 nhưng R2 và R3 có hành động khác nhau nên điều này thể hiện sự mâu thuẫn giữa R2 và R3.\n\n📌 Kiến thức: FL-4.2.3 (K3)"
  },
  {
    "n": 23,
    "ref": "Question #23 [FL-4.2.4]",
    "stem": "You are designing test cases based on the following state transition diagram:    What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 3"
      },
      {
        "k": "b",
        "t": "B) 2"
      },
      {
        "k": "c",
        "t": "C) 5"
      },
      {
        "k": "d",
        "t": "D) 6 March 25, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang thiết kế các test case (ca kiểm thử) dựa trên sơ đồ chuyển đổi trạng thái sau: Số lượng test case (ca kiểm thử) TỐI THIỂU cần có để đạt được phạm vi chuyển đổi hợp lệ 100% là bao nhiêu?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 3\n  B) 2\n  C) 5\n  D) 6 Ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nBa lần chuyển đổi sau: “YÊU CẦU -> XÁC NHẬN” “ DANH SÁCH CHỜ -> XÁC NHẬN” “ DANH SÁCH CHỜ -> KẾT THÚC ” không thể xuất hiện trong cùng một test case (ca kiểm thử), điều này cho thấy rằng cần phải có ít nhất ba test case (ca kiểm thử). Tất cả các chuyển đổi khác có thể xuất hiện kết hợp với một hoặc nhiều trong số ba chuyển đổi này, vì vậy chúng tôi cần tối thiểu ba test case (ca kiểm thử). Trên thực tế, chỉ có thể thực hiện được ba trình tự: TC1: START (Yêu cầu phòng) → YÊU CẦU (Có sẵn) → XÁC NHẬN (Trả tiền) → KẾT THÚC TC2: BẮT ĐẦU (Yêu cầu phòng) → YÊU CẦU (Không có sẵn) → DANH SÁCH CHỜ (Có sẵn) → XÁC NHẬN (Trả tiền) → KẾT THÚC TC3: START (Yêu cầu phòng) → YÊU CẦU (Không có sẵn) → DANH SÁCH CHỜ (Hủy) → KẾT THÚC Như vậy:\na) Đúng\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-4.2.4 (K3)"
  },
  {
    "n": 24,
    "ref": "Question #24 [FL-4.3.2]",
    "stem": "You want to apply branch testing to the code represented by the following control flow graph.    How many coverage items do you need to test?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 2"
      },
      {
        "k": "b",
        "t": "B) 4"
      },
      {
        "k": "c",
        "t": "C) 8"
      },
      {
        "k": "d",
        "t": "D) 7"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn muốn áp dụng kiểm thử nhánh cho mã được biểu thị bằng biểu đồ luồng điều khiển sau.    Bạn cần kiểm tra bao nhiêu mục bảo hiểm?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 2\n  B) 4\n  C) 8\n  D) 7\n\n💡 GIẢI THÍCH CHI TIẾT:\nTrong kiểm thử nhánh, các mục bao phủ là các nhánh, được biểu thị bằng các cạnh của biểu đồ luồng điều khiển. Có 8 cạnh trong biểu đồ luồng điều khiển.  Như vậy:\na) Không đúng\nb) Không đúng\nc) Đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-4.3.2 (K2)"
  },
  {
    "n": 25,
    "ref": "Question #25 [FL-4.3.3]",
    "stem": "How can white-box testing be useful in support of black-box testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests"
      },
      {
        "k": "b",
        "t": "B) White-box coverage analysis can help testers identify unreachable fragments of the source code"
      },
      {
        "k": "c",
        "t": "C) Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique"
      },
      {
        "k": "d",
        "t": "D) White-box test techniques can provide coverage items for black-box techniques March 25, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nKiểm thử hộp trắng có thể hữu ích như thế nào trong việc hỗ trợ kiểm thử hộp đen?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Các biện pháp bao phủ hộp trắng có thể giúp người kiểm tra đánh giá các bài kiểm thử hộp đen về phạm vi bao phủ mã đạt được bởi các bài kiểm thử hộp đen này\n  B) Phân tích phạm vi hộp trắng có thể giúp người kiểm tra xác định các đoạn mã nguồn không thể truy cập được\n  C) Kiểm thử nhánh bao gồm các kỹ thuật kiểm thử hộp đen, do đó việc đạt được phạm vi bao phủ toàn bộ nhánh đảm bảo đạt được phạm vi bao phủ đầy đủ của bất kỳ kỹ thuật hộp đen nào\n  D) Kỹ thuật kiểm tra hộp trắng có thể cung cấp các mục bao phủ cho kỹ thuật hộp đen 25/03/2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Chỉ thực hiện kiểm tra hộp đen không cung cấp thước đo về mức độ bao phủ mã thực tế. Các biện pháp bao phủ hộp trắng cung cấp phép đo khách quan về phạm vi bao phủ và cung cấp thông tin cần thiết để cho phép tạo ra các bài kiểm thử bổ sung nhằm tăng phạm vi bao phủ này và sau đó tăng độ tin cậy của mã\nb) Không đúng. Tuyên bố này đúng, nhưng nó không liên quan gì đến kiểm thử hộp đen\nc) Không đúng. Nói chung không có mối quan hệ nào giữa kỹ thuật kiểm thử hộp trắng và kỹ thuật kiểm thử hộp đen\nđ) Không đúng. Kỹ thuật kiểm thử hộp trắng được sử dụng để thiết kế các kiểm thử dựa trên chính đối tượng kiểm thử, trong khi các kỹ thuật kiểm thử hộp đen được sử dụng để thiết kế các kiểm thử dựa trên đặc tả. Do đó, không có mối quan hệ nào giữa các hạng mục bao phủ xuất phát từ hai loại kỹ thuật kiểm thử này.\n\n📌 Kiến thức: FL-4.3.3 (K2)"
  },
  {
    "n": 26,
    "ref": "Question #26 [FL-4.4.1]",
    "stem": "Consider the following list:  •  Correct input not accepted  •  Incorrect input accepted  •  Wrong output format  •  Division by zero  What test technique is MOST PROBABLY used by the tester who uses this list when performing  testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Exploratory testing"
      },
      {
        "k": "b",
        "t": "B) Fault attack"
      },
      {
        "k": "c",
        "t": "C) Checklist-based testing"
      },
      {
        "k": "d",
        "t": "D) Boundary value analysis"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHãy xem xét danh sách sau: • Đầu vào đúng không được chấp nhận • Đầu vào không chính xác được chấp nhận • Định dạng đầu ra sai • Chia cho 0 Kỹ thuật kiểm tra nào CÓ THỂ được sử dụng nhất bởi người kiểm tra sử dụng danh sách này khi thực hiện kiểm tra?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm thử thăm dò (exploratory testing)\n  B) Tấn công lỗi\n  C) Kiểm tra dựa trên danh sách kiểm tra\n  D) Phân tích giá trị biên\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. kiểm thử thăm dò (exploratory testing) sử dụng các test charter, không phải danh sách các lỗi/lỗi có thể xảy ra. Mặc dù kiểm thử thăm dò (exploratory testing) có thể kết hợp việc sử dụng các kỹ thuật kiểm thử (test technique) khác, nhưng trong trường hợp này, tấn công lỗi là lựa chọn có khả năng xảy ra nhất.\nb) Đúng. Đây là danh sách các lỗi có thể xảy ra. Tấn công lỗi là một cách tiếp cận có phương pháp để thực hiện đoán lỗi và yêu cầu người kiểm tra tạo hoặc thu thập danh sách các lỗi, khiếm khuyết và lỗi có thể xảy ra, đồng thời thiết kế các bài kiểm thử sẽ xác định các lỗi liên quan đến lỗi, phát hiện lỗi hoặc gây ra lỗi.\nc) Không đúng. tester (kiểm thử viên) đang sử dụng danh sách kiểm tra các mục để hỗ trợ việc kiểm thử của họ. Cả việc đoán lỗi và kiểm tra dựa trên danh sách kiểm tra đều sử dụng các danh sách như vậy, tuy nhiên, danh sách ở đây là các lỗi có thể xảy ra chứ không phải các điều kiện kiểm tra và vì vậy kỹ thuật kiểm tra CÓ THỂ XÁC ĐỊNH NHẤT là tấn công lỗi, tập trung vào các lỗi, khiếm khuyết và lỗi.\nđ) Không đúng. BVA dựa trên phân tích các giá trị biên của các phân vùng tương đương. Danh sách trên không đề cập đến các phân vùng tương đương hoặc ranh giới của chúng\n\n📌 Kiến thức: FL-4.4.1 (K2)"
  },
  {
    "n": 27,
    "ref": "Question #27 [FL-4.4.3]",
    "stem": "Which of the following BEST describes how using checklist-based testing can result in increased  coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items"
      },
      {
        "k": "b",
        "t": "B) Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage"
      },
      {
        "k": "c",
        "t": "C) Each checklist item should be tested separately and independently, so the elements cover different areas of the software"
      },
      {
        "k": "d",
        "t": "D) Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT mô tả cách sử dụng kiểm thử dựa trên danh sách kiểm tra có thể dẫn đến tăng phạm vi bao phủ?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Các mục trong danh sách kiểm tra có thể được xác định ở mức độ chi tiết đủ thấp, do đó người kiểm tra có thể triển khai và thực hiện các trường hợp kiểm thử chi tiết dựa trên các mục này\n  B) Danh sách kiểm tra có thể được tự động hóa, do đó, mỗi lần thực hiện kiểm tra tự động bao gồm các mục trong danh sách kiểm tra, điều đó sẽ dẫn đến mức độ bao phủ bổ sung\n  C) Mỗi mục trong danh sách kiểm tra phải được kiểm tra riêng biệt và độc lập để các phần tử bao trùm các khu vực khác nhau của phần mềm\n  D) Hai tester (kiểm thử viên) thiết kế và thực hiện các bài kiểm thử dựa trên các mục trong danh sách kiểm tra cấp cao giống nhau thường sẽ thực thi kiểm thử theo những cách hơi khác nhau\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Mặc dù đúng là người kiểm tra có thể triển khai và thực hiện các trường hợp kiểm thử chi tiết dựa trên danh sách kiểm tra, nhưng điều đó không giải thích được điều này sẽ dẫn đến phạm vi bao phủ tăng lên như thế nào\nb) Không đúng. Các mục trong danh sách kiểm tra không nên được tự động hóa. Nhưng ngay cả nếu có thì các tập lệnh kiểm thử tự động luôn thực hiện kiểm thử theo cùng một cách, điều này thường không dẫn đến tăng phạm vi bao phủ\nc) Không đúng. Đúng là mỗi mục trong danh sách kiểm tra cần được kiểm tra riêng biệt và độc lập. Nhưng điều này ảnh hưởng đến thứ tự thực hiện kiểm thử và không ảnh hưởng đến phạm vi bao phủ đạt được, do đó không dẫn đến tăng phạm vi bao phủ\nđ) Đúng. Nếu danh sách kiểm tra ở mức độ cao thì có thể xảy ra một số thay đổi trong kiểm thử thực tế, dẫn đến phạm vi bao phủ có thể lớn hơn nhưng độ lặp lại ít hơn. Nếu hai tester (kiểm thử viên) tuân theo danh sách kiểm tra gồm các mục cấp cao, thì mỗi người trong số họ c"
  },
  {
    "n": 28,
    "ref": "Question #28 [FL-4.5.2]",
    "stem": "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
    "opts": [
      {
        "k": "a",
        "t": "A) The application must allow users to delete their account and all associated data upon request"
      },
      {
        "k": "b",
        "t": "B) When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven’t already done so"
      },
      {
        "k": "c",
        "t": "C) IF (contain(product(23).Name, cart.products())) THEN return FALSE"
      },
      {
        "k": "d",
        "t": "D) The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities March 25, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây cung cấp ví dụ TỐT NHẤT về tiêu chí chấp nhận theo định hướng kịch bản?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Ứng dụng phải cho phép người dùng xóa tài khoản của họ và tất cả dữ liệu liên quan theo yêu cầu\n  B) Khi khách hàng thêm một mặt hàng vào giỏ hàng và tiến hành thanh toán, họ sẽ được nhắc đăng nhập hoặc tạo tài khoản nếu họ chưa làm như vậy\n  C) NẾU (contain(product(23).Name, cart.products())) THÌ trả về SAI\n  D) Trang web phải tuân thủ Tiêu chuẩn 508 về khả năng tiếp cận CNTT và đảm bảo rằng tất cả nội dung đều có thể truy cập được đối với người dùng khiếm khuyết (defect) Ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Tiêu chí chấp nhận này mô tả những quy tắc hoặc quy định nào mà hệ thống phải tuân thủ (trong trường hợp này là quyền được lãng quên). Đây là một ví dụ về tiêu chí chấp nhận theo định hướng quy tắc\nb) Đúng. Tiêu chí chấp nhận này mô tả một kịch bản mẫu mà hệ thống phải thực hiện. Đây là một ví dụ về tiêu chí chấp nhận theo định hướng kịch bản\nc) Không đúng. Câu này trông giống một dòng mã thực hiện một số quy tắc kinh doanh hơn. Tiêu chí chấp nhận phải được viết với sự cộng tác của đại diện doanh nghiệp và do đó phải được viết bằng ngôn ngữ mà họ hiểu. Câu này rất có thể sẽ khó hiểu đối với những bên liên quan này\nđ) Không đúng. Tiêu chí chấp nhận này mô tả những quy tắc hoặc quy định nào mà hệ thống phải tuân thủ và cách đảm bảo sự tuân thủ. Vì vậy, đây là ví dụ về tiêu chí chấp nhận theo quy tắc chứ không phải tiêu chí chấp nhận dựa trên kịch bản\n\n📌 Kiến thức: FL-4.5.2 (K2)"
  },
  {
    "n": 29,
    "ref": "Question #29 [FL-4.5.3]",
    "stem": "You are using acceptance test-driven development and designing test cases based on the  following user story:  As a Regular or Special user, I want to be able to use my electronic floor card, to access specific  floors.  Acceptance Criteria:  AC1: Regular users have access to floors 1 to 3  AC2: Floor 4 is only accessible to Special users  AC3: Special users have all the access rights of Regular users   Which test case is the MOST reasonable one to test AC3?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Check that a Regular user can access floors 1 and 3"
      },
      {
        "k": "b",
        "t": "B) Check that a Regular user cannot access floor 4"
      },
      {
        "k": "c",
        "t": "C) Check that a Special user can access floor 5"
      },
      {
        "k": "d",
        "t": "D) Check that a Special user can access floors 1, 2 and 3"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang sử dụng phương pháp phát triển dựa trên kiểm thử chấp nhận (acceptance testing) và thiết kế các test case (ca kiểm thử) dựa trên câu chuyện của người dùng sau: Với tư cách là Người dùng thông thường hoặc Người dùng đặc biệt, tôi muốn có thể sử dụng thẻ sàn điện tử của mình để truy cập vào các tầng cụ thể.  Tiêu chí chấp nhận: AC1: Người dùng thông thường có quyền truy cập từ tầng 1 đến 3 AC2: Tầng 4 chỉ có thể truy cập được bởi Người dùng đặc biệt AC3: Người dùng đặc biệt có tất cả các quyền truy cập của Người dùng thông thường test case (ca kiểm thử) nào hợp lý nhất để kiểm tra AC3?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra xem Người dùng thông thường có thể truy cập tầng 1 và 3 không\n  B) Kiểm tra xem Người dùng thông thường không thể truy cập tầng 4\n  C) Kiểm tra xem Người dùng đặc biệt có thể truy cập tầng 5 không\n  D) Kiểm tra xem Người dùng đặc biệt có thể truy cập tầng 1, 2 và 3 không\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Chúng tôi muốn kiểm tra xem Người dùng đặc biệt có các quyền của Người dùng thông thường hay không, vì vậy chúng tôi cần kiểm tra quyền truy cập đối với Người dùng đặc biệt chứ không phải đối với Người dùng thông thường\nb) Không đúng. Chúng tôi muốn kiểm tra xem Người dùng đặc biệt có các quyền của Người dùng thông thường hay không, vì vậy chúng tôi cần kiểm tra quyền truy cập đối với Người dùng đặc biệt chứ không phải đối với Người dùng thông thường\nc) Không đúng. Không có tầng 5 nào được mô tả trong tiêu chí chấp nhận.  Các test case (ca kiểm thử) không nên mở rộng phạm vi câu chuyện của người dùng. Nhưng ngay cả khi chúng tôi muốn thực thi kiểm thử tiêu cực, kiểm thử này không liên quan trực tiếp đến AC3\nđ) Đúng. Đây là cách chúng tôi có thể kiểm tra xem Người dùng đặc biệt có thể truy cập vào các tầng mà Người dùng thông thường có thể truy cập hay không\n\n📌 Kiến thức: FL-"
  },
  {
    "n": 30,
    "ref": "Question #30 [FL-5.1.1]",
    "stem": "Which of the following is NOT a purpose of a test plan?",
    "opts": [
      {
        "k": "a",
        "t": "A) To define test data and expected results for component tests and component integration tests"
      },
      {
        "k": "b",
        "t": "B) To define as exit criteria from the component test level that “100% statement coverage and 100% branch coverage must be achieved”"
      },
      {
        "k": "c",
        "t": "C) To describe what fields the test progress report shall contain and what should be the form of this report"
      },
      {
        "k": "d",
        "t": "D) To explain why system integration testing will be excluded from testing, although the test strategy requires this test level March 25, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây KHÔNG phải là mục đích của kế hoạch kiểm tra?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Để xác định dữ liệu kiểm thử và kết quả mong đợi cho kiểm thử thành phần (component testing) và kiểm thử tích hợp (integration testing) thành phần\n  B) Để xác định tiêu chí đầu ra (exit criteria) khỏi cấp độ kiểm tra thành phần là “phải đạt được phạm vi bao phủ 100% câu lệnh và phạm vi bao phủ 100% nhánh”\n  C) Để mô tả những trường nào sẽ có trong báo cáo tiến trình kiểm thử và hình thức của báo cáo này là gì\n  D) Để giải thích tại sao kiểm thử tích hợp (integration testing) hệ thống sẽ bị loại khỏi kiểm thử, mặc dù chiến lược kiểm thử yêu cầu mức độ kiểm thử này 25/03/2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Kế hoạch kiểm thử có thể bao gồm các yêu cầu về dữ liệu kiểm thử (như một phần của phương pháp kiểm thử), nhưng không bao gồm dữ liệu kiểm thử chi tiết cho các trường hợp kiểm thử. Dữ liệu kiểm thử là một phần của các test case (ca kiểm thử), không phải là kế hoạch kiểm thử (test plan). Ngoài ra, thường không thể xác định dữ liệu đó khi kế hoạch kiểm tra được tạo, bởi vì không biết chính xác các thành phần sẽ trông như thế nào.\nb) Không đúng. Một trong những mục đích của kế hoạch kiểm thử là giúp đảm bảo rằng các hoạt động kiểm thử sẽ đáp ứng các tiêu chí đã thiết lập, bằng cách bao gồm các tiêu chí đầu vào và tiêu chí đầu ra. Tiêu chí bao phủ mã là một ví dụ về các tiêu chí đó cho cấp độ kiểm tra thành phần\nc) Không đúng. Mẫu tài liệu là nội dung điển hình của một kế hoạch kiểm tra. Điều này giúp tạo điều kiện thuận lợi cho việc giao tiếp giữa các bên liên quan bằng cách xác định cách thức giao tiếp hoặc báo cáo tiêu chuẩn\nđ) Không đúng. Một trong những mục đích của kế hoạch kiểm tra là chứng minh rằng việc kiểm tra sẽ tuân thủ chính sách kiểm tra và chiến lược kiểm tra hiện có hoặc để giải thích lý do tại sao v"
  },
  {
    "n": 31,
    "ref": "Question #31 [FL-5.1.4]",
    "stem": "At the beginning of each iteration, the team estimates the amount of work (in person-days) they will  need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and  let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the  following estimation model based on extrapolation:  𝐸(𝑛) = 3 ∗𝐴(𝑛−1) + 𝐴(𝑛−2) 4   The graph shows the estimated and actual amount of work for the first four iterations.    What is the estimated amount of work for iteration #5?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 10.5 person-days"
      },
      {
        "k": "b",
        "t": "B) 8.25 person-days"
      },
      {
        "k": "c",
        "t": "C) 6.5 person-days"
      },
      {
        "k": "d",
        "t": "D) 9.4 person-days 0 1 2 3 4 5 6 7 8 9 10 11 12 13 Iteration #1 Iteration #2 Iteration #3 Iteration #4 Estimated and actual effort (in person-days) Estimated Actual March 25, 2025"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nKhi bắt đầu mỗi lần lặp, nhóm ước tính số lượng công việc (tính theo ngày công) mà họ sẽ cần hoàn thành trong quá trình lặp. Gọi E(n) là lượng công việc ước tính cho lần lặp n và gọi A(n) là lượng công việc thực tế được thực hiện trong lần lặp n. Từ lần lặp thứ ba, nhóm sử dụng mô hình ước tính sau dựa trên phép ngoại suy: 𝐸(𝑛) = 3 ∗𝐴(𝑛−1) + 𝐴(𝑛−2) 4 Biểu đồ hiển thị khối lượng công việc ước tính và thực tế cho bốn lần lặp đầu tiên.    Khối lượng công việc ước tính cho lần lặp thứ 5 là bao nhiêu?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 10,5 người-ngày\n  B) 8,25 người-ngày\n  C) 6,5 người-ngày\n  D) 9,4 người-ngày 0 1 2 3 4 5 6 7 8 9 10 11 12 13 Lần lặp #1 Lần lặp #2 Lần lặp #3 Lần lặp #4 Nỗ lực ước tính và thực tế (tính theo ngày người) Thực tế ước tính Ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nTừ biểu đồ chúng ta có: A(4)=6 và A(3)=8 (hai ô màu xám cuối cùng).  Từ công thức, chúng ta thu được: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26/4 = 6,5 ngày-người.  Như vậy:\na) Không đúng\nb) Không đúng\nc) Đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-5.1.4 (K3)"
  },
  {
    "n": 32,
    "ref": "Question #32 [FL-5.1.5]",
    "stem": "You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7.   The following figure includes the priorities of these test cases (1=highest priority, 3 = lowest  priority).   The figure also shows the dependencies between test cases using arrows. For instance, the arrow  from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed.    Which test case should be executed sixth?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) TC 3"
      },
      {
        "k": "b",
        "t": "B) TC 5"
      },
      {
        "k": "c",
        "t": "C) TC 6"
      },
      {
        "k": "d",
        "t": "D) TC 2"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang chuẩn bị lịch thực hiện kiểm thử để thực hiện bảy trường hợp kiểm thử TC 1 đến TC 7. Hình dưới đây bao gồm mức độ ưu tiên của các trường hợp kiểm thử này (1=mức độ ưu tiên cao nhất, 3 = mức độ ưu tiên thấp nhất).   Hình này cũng cho thấy sự phụ thuộc giữa các test case (ca kiểm thử) bằng cách sử dụng các mũi tên. Ví dụ: mũi tên từ TC 4 đến TC 5 có nghĩa là TC 5 chỉ có thể được thực thi nếu TC 4 đã được thực thi trước đó.    test case (ca kiểm thử) nào nên được thực hiện thứ sáu?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) TC 3\n  B) TC 5\n  C) TC 6\n  D) TC 2\n\n💡 GIẢI THÍCH CHI TIẾT:\nChúng tôi muốn chạy các test case (ca kiểm thử) theo mức độ ưu tiên của chúng, nhưng chúng tôi cũng cần xem xét các phần phụ thuộc.  Nếu chỉ xem xét mức độ ưu tiên, trước tiên chúng tôi muốn chạy TC 5 và TC 7 (mức ưu tiên cao nhất), sau đó là TC 1, TC 3 và TC 4, cuối cùng là TC 2 và TC 6 (mức ưu tiên thấp nhất).  Tuy nhiên, để chạy TC 7, trước tiên chúng ta cần chạy TC 4. Để chạy TC 5, chúng ta cần chạy TC 4 và TC 2, nhưng TC 2 bị chặn bởi TC 1, nên chạy trước TC 2. Vì vậy, để chạy các trường hợp kiểm thử ưu tiên 1 càng sớm càng tốt, năm trường hợp kiểm thử đầu tiên phải là: TC 4 - TC 7 - TC 1 - TC 2 - TC 5. Tiếp theo, chúng ta cần chạy TC 3, vì nó có mức độ ưu tiên cao hơn TC 6. Do đó, lịch trình đầy đủ sẽ là TC 4 – TC 7 – TC 1 – TC 2 – TC 5 – TC 3 – TC 6. Vì vậy, test case (ca kiểm thử) thứ sáu sẽ là TC 3. Như vậy:\na) Đúng\nb) Không đúng\nc) Không đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-5.1.5 (K3)"
  },
  {
    "n": 33,
    "ref": "Question #33 [FL-5.1.6]",
    "stem": "What does the test pyramid model show?",
    "opts": [
      {
        "k": "a",
        "t": "A) That tests may have different priorities"
      },
      {
        "k": "b",
        "t": "B) That tests may have different granularity"
      },
      {
        "k": "c",
        "t": "C) That tests may require different coverage criteria"
      },
      {
        "k": "d",
        "t": "D) That tests may depend on other tests"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nMô hình tháp kiểm thử (test pyramid) cho thấy điều gì?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Các bài kiểm tra đó có thể có mức độ ưu tiên khác nhau\n  B) Các bài kiểm thử đó có thể có mức độ chi tiết khác nhau\n  C) Các bài kiểm thử đó có thể yêu cầu các tiêu chí bảo hiểm khác nhau\n  D) Các bài kiểm tra đó có thể phụ thuộc vào các bài kiểm tra khác\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Mô hình kim tự tháp kiểm tra không cung cấp thông tin về mức độ ưu tiên kiểm tra\nb) Đúng. Mô hình tháp kiểm thử (test pyramid) cho thấy các bài kiểm thử khác nhau có mức độ chi tiết khác nhau\nc) Không đúng. Mô hình tháp kiểm thử (test pyramid) độc lập với tiêu chí bao phủ\nđ) Không đúng. Mô hình tháp kiểm thử (test pyramid) không hiển thị bất kỳ mối quan hệ nào giữa các bài kiểm thử khác nhau\n\n📌 Kiến thức: FL-5.1.6 (K1)"
  },
  {
    "n": 34,
    "ref": "Question #34 [FL-5.1.7]",
    "stem": "What is the relationship between the testing quadrants, test levels and test types?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle"
      },
      {
        "k": "b",
        "t": "B) Testing quadrants describe the degree of granularity of individual test types performed at each test level"
      },
      {
        "k": "c",
        "t": "C) Testing quadrants assign the test types that can be performed to the test levels"
      },
      {
        "k": "d",
        "t": "D) Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders March 25, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nMối quan hệ giữa các tứ phân vị kiểm thử (testing quadrants), cấp độ kiểm thử (test level) và loại kiểm thử (test type) là gì?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Tứ phân vị kiểm thử (testing quadrants) thể hiện sự kết hợp cụ thể giữa cấp độ kiểm thử (test level) và loại kiểm thử (test type), xác định vị trí của chúng trong vòng đời phát triển phần mềm\n  B) Tứ phân vị kiểm thử (testing quadrants) mô tả mức độ chi tiết của các loại kiểm thử (test type) riêng lẻ được thực hiện ở mỗi cấp độ kiểm thử (test level)\n  C) Các tứ phân vị kiểm thử (testing quadrants) chỉ định các loại kiểm thử (test type) có thể được thực hiện cho các cấp độ kiểm thử (test level)\n  D) Kiểm tra các cấp độ kiểm tra nhóm các góc phần tư và các loại kiểm tra theo một số tiêu chí, chẳng hạn như nhắm mục tiêu vào các bên liên quan cụ thể. Ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Kiểm tra các cấp độ kiểm tra nhóm các góc phần tư và các loại kiểm tra riêng biệt theo một số tiêu chí. Chúng không đại diện cho bất kỳ sự kết hợp nào giữa các cấp độ kiểm thử và loại kiểm thử và chúng không liên quan đến bất kỳ vị trí nào trong vòng đời phát triển phần mềm. Cả cấp độ kiểm tra và loại kiểm tra đều được xử lý riêng biệt trong mô hình góc phần tư kiểm tra\nb) Không đúng. Kiểm tra các cấp độ kiểm tra nhóm góc phần tư và các loại kiểm tra theo một số tiêu chí. Chúng không mô tả mức độ chi tiết của các loại kiểm thử (test type) riêng lẻ được thực hiện ở mỗi cấp độ kiểm thử (test level). Một mô hình như vậy, xét về các cấp độ kiểm tra, được gọi là kim tự tháp kiểm tra\nc) Không đúng. Tuyên bố này sai vì nhìn chung mọi loại kiểm thử (test type) đều có thể được thực hiện ở mọi cấp độ kiểm thử (test level)\nđ) Đúng. Các tứ phân vị kiểm thử (testing quadrants) nhóm các cấp độ kiểm tra, loại kiểm thử (test type), hoạt động kiểm thử, kỹ thuật ki"
  },
  {
    "n": 35,
    "ref": "Question #35 [FL-5.2.3]",
    "stem": "Which of the following is an example of how product risk analysis may influence the thoroughness  and scope of testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Continuous risk monitoring allows us to identify an emerging risk as soon as possible"
      },
      {
        "k": "b",
        "t": "B) Risk identification allows us to implement risk mitigation activities and reduce the risk level"
      },
      {
        "k": "c",
        "t": "C) The assessed risk level helps us to select the rigor of testing"
      },
      {
        "k": "d",
        "t": "D) Risk analysis allows us to derive coverage items"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ví dụ về cách phân tích rủi ro sản phẩm có thể ảnh hưởng đến tính kỹ lưỡng và phạm vi kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Giám sát rủi ro liên tục cho phép chúng tôi xác định rủi ro mới nổi càng sớm càng tốt\n  B) Xác định rủi ro cho phép chúng tôi thực hiện các hoạt động giảm thiểu rủi ro và giảm mức độ rủi ro\n  C) Mức độ rủi ro được đánh giá giúp chúng tôi lựa chọn mức độ nghiêm ngặt của kiểm thử\n  D) Phân tích rủi ro cho phép chúng tôi rút ra các mục bảo hiểm\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Giám sát rủi ro là một phần của kiểm soát rủi ro, không phải phân tích rủi ro\nb) Không đúng. Bản thân việc nhận dạng rủi ro không cho phép chúng tôi thực hiện các hoạt động giảm thiểu rủi ro. Các hành động giảm thiểu được xác định trong giai đoạn kiểm soát rủi ro\nc) Đúng. Đây là một ví dụ về cách phân tích rủi ro ảnh hưởng đến tính kỹ lưỡng và phạm vi kiểm thử\nđ) Không đúng. Các hạng mục bảo hiểm được lấy bằng cách sử dụng các kỹ thuật kiểm tra, không thông qua phân tích rủi ro\n\n📌 Kiến thức: FL-5.2.3 (K2)"
  },
  {
    "n": 36,
    "ref": "Question #36 [FL-5.3.2]",
    "stem": "Which of the following activities in the test process makes the MOST use of test progress reports?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test design"
      },
      {
        "k": "b",
        "t": "B) Test completion"
      },
      {
        "k": "c",
        "t": "C) Test analysis"
      },
      {
        "k": "d",
        "t": "D) Test planning"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHoạt động nào sau đây trong quá trình kiểm thử sử dụng báo cáo tiến độ kiểm thử NHIỀU NHẤT?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Thiết kế kiểm thử\n  B) Hoàn thành kiểm tra\n  C) Phân tích kiểm thử\n  D) Lập kế hoạch kiểm tra\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Báo cáo tiến độ kiểm thử chủ yếu được sử dụng trong quá trình giám sát kiểm thử và kiểm soát kiểm thử cũng như hoàn thành kiểm thử chứ không phải trong quá trình thiết kế kiểm thử.\nb) Đúng. Báo cáo hoàn thành kiểm thử được chuẩn bị trong quá trình hoàn thành kiểm thử, khi một dự án, cấp độ kiểm thử hoặc loại kiểm thử hoàn thành và lý tưởng nhất là khi các tiêu chí đầu ra của dự án đó đã được đáp ứng. Báo cáo này sử dụng thông tin từ báo cáo tiến độ kiểm tra và các dữ liệu khác\nc) Không đúng. Báo cáo tiến độ kiểm thử chủ yếu được sử dụng trong quá trình giám sát kiểm thử và kiểm soát kiểm thử cũng như hoàn thành kiểm thử chứ không phải trong quá trình phân tích kiểm thử.\nđ) Không đúng. Báo cáo tiến độ kiểm thử được sử dụng nhiều nhất trong quá trình giám sát kiểm thử và kiểm soát kiểm thử cũng như hoàn thành kiểm thử chứ không phải trong quá trình lập kế hoạch kiểm thử.\n\n📌 Kiến thức: FL-5.3.2 (K2)"
  },
  {
    "n": 37,
    "ref": "Question #37 [FL-5.4.1]",
    "stem": "Which of the following is NOT an example of how configuration management supports testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) All commits to the repository are uniquely identified and version controlled"
      },
      {
        "k": "b",
        "t": "B) All changes in the test environment elements are tracked"
      },
      {
        "k": "c",
        "t": "C) All requirement specifications are referenced unambiguously in test plans"
      },
      {
        "k": "d",
        "t": "D) All identified defects have an assigned status March 25, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây KHÔNG phải là ví dụ về cách quản lý cấu hình hỗ trợ kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Tất cả các cam kết đối với kho lưu trữ đều được xác định duy nhất và được kiểm soát phiên bản\n  B) Tất cả các thay đổi trong các thành phần môi trường kiểm thử đều được theo dõi\n  C) Tất cả các thông số kỹ thuật yêu cầu được tham chiếu rõ ràng trong kế hoạch kiểm tra\n  D) Tất cả các lỗi được xác định đều có trạng thái được chỉ định ngày 25 tháng 3 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Khi người dùng báo cáo lỗi phần mềm, nhờ nhận dạng duy nhất của các cam kết, có thể tập hợp lại các tệp từ phiên bản phần mềm mà người dùng đã sử dụng (cũng như các phiên bản tương ứng của tập lệnh kiểm tra) và do đó tái tạo lỗi và xác định lỗi nhanh hơn\nb) Không đúng. Nếu một thay đổi đối với môi trường kiểm thử gây ra sự cố không mong muốn trong quá trình kiểm thử thì việc quản lý cấu hình sẽ cho phép tester (kiểm thử viên) quay lại phiên bản trước của môi trường. Điều này đảm bảo rằng việc kiểm thử có thể tiếp tục mà không bị ảnh hưởng bởi sự thay đổi\nc) Không đúng. Quản lý cấu hình đảm bảo rằng tất cả tài liệu đã xác định (ví dụ: thông số kỹ thuật yêu cầu) và các mục phần mềm đều được tham chiếu rõ ràng trong tài liệu kiểm tra (ví dụ: kế hoạch kiểm tra)\nđ) Đúng. Điều này được đảm bảo bằng cách quản lý lỗi chứ không phải bằng quy trình quản lý cấu hình\n\n📌 Kiến thức: FL-5.4.1 (K2)"
  },
  {
    "n": 38,
    "ref": "Question #38 [FL-5.5.1]",
    "stem": "Consider the following defect report for a web-based shopping application:  Application: WebShop v0.99  Defect: Login button not working  Steps to Reproduce:  Launch the website  Click on the login button  Expected result: The user should be redirected to the login page.  Actual result: The login button does not respond when clicked.  Severity: High  Priority: Urgent  What is the MOST important information that is missing from this defect report?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Name of the tester and date"
      },
      {
        "k": "b",
        "t": "B) Test environment elements and their version numbers"
      },
      {
        "k": "c",
        "t": "C) Identification of the test object"
      },
      {
        "k": "d",
        "t": "D) Impact on the interests of stakeholders"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHãy xem xét báo cáo lỗi sau đây cho một ứng dụng mua sắm dựa trên web: Ứng dụng: WebShop v0.99 Lỗi: Nút đăng nhập không hoạt động Các bước để tái tạo: Khởi chạy trang web Nhấp vào nút đăng nhập Kết quả mong đợi: Người dùng sẽ được chuyển hướng đến trang đăng nhập.  Kết quả thực tế: Nút đăng nhập không phản hồi khi nhấn vào.  Mức độ nghiêm trọng: Mức độ ưu tiên cao: Khẩn cấp Thông tin quan trọng NHẤT còn thiếu trong báo cáo lỗi này là gì?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Tên người kiểm tra và ngày\n  B) Kiểm tra các phần tử môi trường và số phiên bản của chúng\n  C) Xác định test object (đối tượng kiểm thử)\n  D) Tác động đến lợi ích của các bên liên quan\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Điều này quan trọng nhưng không quan trọng bằng các yếu tố môi trường kiểm thử\nb) Đúng. Điều quan trọng còn thiếu là việc xác định trình duyệt và thiết bị được sử dụng để kiểm thử. Thông tin về trình duyệt và thiết bị rất quan trọng vì lỗi như vậy có thể xảy ra đối với từng trình duyệt hoặc thiết bị cụ thể. Ví dụ: nút đăng nhập có thể hoạt động tốt trên một trình duyệt (hoặc một phiên bản của trình duyệt cụ thể) nhưng không hoạt động tốt trên trình duyệt khác.  Do đó, thông tin về trình duyệt và thiết bị có thể giúp nhà phát triển tái tạo sự cố và tìm ra nguyên nhân gốc rễ của sự cố nhanh hơn\nc) Không đúng. test object (đối tượng kiểm thử) được xác định (WebShop v0.99)\nđ) Không đúng. Tác động được bao gồm – đây là mức độ nghiêm trọng (cao)\n\n📌 Kiến thức: FL-5.5.1 (K3)"
  },
  {
    "n": 39,
    "ref": "Question #39 [FL-6.1.1]",
    "stem": "Tools from which of the following categories help with the organization of test cases, detected  defects and configuration management?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test execution and coverage tools"
      },
      {
        "k": "b",
        "t": "B) Test design and implementation tools"
      },
      {
        "k": "c",
        "t": "C) Defect management tools"
      },
      {
        "k": "d",
        "t": "D) Test management tools"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCông cụ nào trong các danh mục sau giúp tổ chức các test case (ca kiểm thử), phát hiện lỗi và quản lý cấu hình?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Các công cụ thực hiện và bao phủ kiểm thử\n  B) Công cụ thiết kế và triển khai kiểm thử\n  C) Công cụ quản lý lỗi\n  D) Công cụ quản lý kiểm tra\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Các công cụ thực hiện và bao phủ kiểm thử tạo điều kiện thuận lợi cho việc thực hiện tự động các trường hợp kiểm thử và đo lường phạm vi bao phủ đạt được bằng cách chạy các trường hợp kiểm thử đó. Tuy nhiên, những công cụ này không giúp ích gì cho việc tổ chức các lỗi và quản lý cấu hình.\nb) Không đúng. Các công cụ thiết kế và triển khai kiểm thử tạo điều kiện thuận lợi cho việc tạo ra các test case (ca kiểm thử), dữ liệu kiểm thử và quy trình kiểm thử, nhưng chúng không giúp ích gì trong việc tổ chức các lỗi và quản lý cấu hình\nc) Không đúng. Các công cụ quản lý lỗi được sử dụng để quản lý lỗi nhưng không phải là công cụ kiểm tra và không được sử dụng để tổ chức các trường hợp kiểm thử hoặc quản lý cấu hình\nđ) Đúng. Các công cụ quản lý kiểm thử giúp tăng hiệu quả của quy trình kiểm thử bằng cách tạo điều kiện thuận lợi cho việc quản lý vòng đời phát triển phần mềm (SDLC), các yêu cầu, kiểm thử, lỗi và quản lý cấu hình\n\n📌 Kiến thức: FL-6.1.1 (K2)"
  },
  {
    "n": 40,
    "ref": "Question #40 [FL-6.2.1]",
    "stem": "Which of the following is MOST likely to be a benefit of test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) The capability of generating test cases without access to the test basis"
      },
      {
        "k": "b",
        "t": "B) The achievement of increased coverage through more objective assessment"
      },
      {
        "k": "c",
        "t": "C) The increase in test execution times available with higher processing power"
      },
      {
        "k": "d",
        "t": "D) The prevention of human errors through greater consistency and repeatability"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây có khả năng nhất là lợi ích của việc tự động hóa kiểm thử (test automation)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Khả năng tạo các trường hợp kiểm thử mà không cần truy cập vào cơ sở kiểm thử\n  B) Đạt được mức độ bao phủ ngày càng tăng thông qua đánh giá khách quan hơn\n  C) Sự gia tăng thời gian thực thi kiểm thử có sẵn với sức mạnh xử lý cao hơn\n  D) Ngăn ngừa lỗi của con người thông qua tính nhất quán và khả năng lặp lại cao hơn\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. ‘Không thể tạo ra các ca kiểm thử mà không cần truy cập vào cơ sở kiểm thử’. Việc tạo ra các trường hợp kiểm thử bởi người kiểm thử hoặc công cụ yêu cầu quyền truy cập vào cơ sở kiểm thử\nb) Không đúng. ‘Đạt được mức độ bao phủ ngày càng tăng thông qua đánh giá khách quan hơn’ không phải là lợi ích trực tiếp của việc tự động hóa kiểm thử (test automation). tự động hóa kiểm thử (test automation) sẽ cung cấp đánh giá khách quan hơn về phạm vi bao phủ, tuy nhiên đánh giá khách quan đó sẽ không làm tăng phạm vi bao phủ. Chỉ bằng cách sử dụng kết quả của phạm vi bao phủ để viết các test case (ca kiểm thử) tiếp theo thì phạm vi bao phủ mới có thể được tăng lên\nc) Không đúng. 'Việc tăng thời gian thực hiện kiểm tra có sẵn với sức mạnh xử lý cao hơn' là một tuyên bố mâu thuẫn vì sức mạnh xử lý cao hơn thường sẽ làm giảm thời gian thực hiện và tăng thời gian thực hiện không phải là lợi ích vì việc kiểm tra sẽ mất nhiều thời gian hơn\nđ) Đúng. Việc ngăn ngừa lỗi của con người thông qua tính nhất quán và khả năng lặp lại cao hơn là một lợi ích của tự động hóa kiểm thử (test automation) vì tự động hóa kiểm thử (test automation) không thể mắc phải lỗi của con người. Ví dụ: điều đó có nghĩa là các bài kiểm thử được lấy một cách nhất quán từ các yêu cầu, dữ liệu kiểm thử được tạo một cách có hệ thống và các bài kiểm thử được thực hiện bằng một công"
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
