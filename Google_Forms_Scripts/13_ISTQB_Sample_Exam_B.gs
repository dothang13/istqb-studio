/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ISTQB Sample Exam B (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ISTQB Sample Exam B (40 câu chuẩn)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (40 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question #1 [FL-1.2.1]",
    "stem": "Which of the following is an example of why testing is necessary?",
    "opts": [
      {
        "k": "a",
        "t": "A) Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users"
      },
      {
        "k": "b",
        "t": "B) Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing"
      },
      {
        "k": "c",
        "t": "C) Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release"
      },
      {
        "k": "d",
        "t": "D) Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là một ví dụ về lý do tại sao kiểm thử là cần thiết?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm thử động (dynamic testing) tăng chất lượng bằng cách khiến các test object (đối tượng kiểm thử) bị lỗi theo những cách mà người dùng không bao giờ có thể đạt được\n  B) Kiểm thử tĩnh (static testing) được các nhà phát triển sử dụng để xác định lỗi trong mã của họ sớm hơn mức có thể đạt được thông qua kiểm thử động (dynamic testing)\n  C) Phân tích tĩnh cung cấp bằng chứng cho khách hàng rằng các thành phần của hệ thống không cung cấp đầu ra đều phù hợp để phát hành\n  D) Việc xem xét làm tăng chất lượng của các đặc tả yêu cầu và dẫn đến cần ít thay đổi hơn trong các sản phẩm công việc phát sinh\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Thông thường, có thể sử dụng kiểm thử động (dynamic testing) để khiến test object (đối tượng kiểm thử) bị lỗi theo những cách mà người dùng không bao giờ có thể đạt được, chẳng hạn như bằng cách sử dụng tính năng chèn lỗi. Tuy nhiên, nếu lỗi không bao giờ có thể xảy ra với người dùng cuối thực sự thì việc xác định nó không có giá trị đặc biệt vì việc kiểm tra cuối cùng nhằm mục đích cải thiện sản phẩm công việc cho người dùng cuối.  Dành thời gian để kiểm tra những lỗi không thể xảy ra với người dùng thực không phải là cách sử dụng hiệu quả thời gian của người kiểm tra\nb) Không đúng. kiểm thử tĩnh (static testing) dưới dạng phân tích tĩnh được các nhà phát triển sử dụng để xác định các lỗi trong mã của họ sớm hơn mức có thể đạt được thông qua kiểm thử động (dynamic testing). Tuy nhiên, lưu ý rằng kiểm thử tĩnh (static testing) (và phân tích tĩnh) được sử dụng để phát hiện các lỗi chứ không phải lỗi được tìm thấy bằng kiểm thử động (dynamic testing). Vì vậy, việc sử dụng thuật ngữ 'thất bại' đã làm cho lựa chọn này trở thành một lựa chọn không chính xác.\nc) Không đúng. Phân tích"
  },
  {
    "n": 2,
    "ref": "Question #2 [FL-1.2.2]",
    "stem": "Which of the following statements about quality assurance (QA) and/or quality control (QC) is  correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) QA is performed as part of testing"
      },
      {
        "k": "b",
        "t": "B) Testing is performed as part of QC"
      },
      {
        "k": "c",
        "t": "C) Testing is another term for QC"
      },
      {
        "k": "d",
        "t": "D) Testing is performed as part of QA"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về đảm bảo chất lượng (QA) và/hoặc kiểm soát chất lượng (QC) là đúng?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) QA được thực hiện như một phần của kiểm thử\n  B) Kiểm tra được thực hiện như một phần của QC\n  C) Kiểm tra là một thuật ngữ khác của QC\n  D) Kiểm tra được thực hiện như một phần của QA\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. QA tập trung vào việc cải tiến và triển khai quy trình, sử dụng phương pháp phòng ngừa để tránh sai sót và khiếm khuyết, trong khi kiểm thử là một hình thức QC được sử dụng để phát hiện khiếm khuyết\nb) Đúng. QC nhằm mục đích đạt được mức chất lượng phù hợp bằng cách tập trung vào việc xác định và sửa chữa các lỗi của sản phẩm. Kiểm tra là một phần quan trọng của QC và giúp phát hiện ra những khiếm khuyết này\nc) Không đúng. Mặc dù kiểm thử là một phần quan trọng của QC và giúp phát hiện ra các khiếm khuyết, nhưng các kỹ thuật (không phải kiểm thử) khác được sử dụng trong QC bao gồm các phương pháp chính thức như kiểm tra mô hình và chứng minh tính đúng đắn, cũng như mô phỏng và tạo nguyên mẫu.\nđ) Không đúng. QA tập trung vào việc cải tiến và triển khai quy trình, sử dụng phương pháp phòng ngừa để tránh sai sót và khiếm khuyết, trong khi kiểm thử là một hình thức QC được sử dụng để phát hiện khiếm khuyết\n\n📌 Kiến thức: FL-1.2.2 (K1)"
  },
  {
    "n": 3,
    "ref": "Question #3 [FL-1.3.1]",
    "stem": "One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following  is an example of addressing this principle in practice?",
    "opts": [
      {
        "k": "a",
        "t": "A) Creating test cases that cover every possible specified output"
      },
      {
        "k": "b",
        "t": "B) Documenting all possible test input variations and prioritizing these based on importance"
      },
      {
        "k": "c",
        "t": "C) Starting testing as early as possible with reviews and other static testing approaches"
      },
      {
        "k": "d",
        "t": "D) Using equivalence partitioning and boundary value analysis to generate test cases"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nMột trong những 'nguyên tắc kiểm tra' nói rằng việc kiểm tra toàn diện là không thể. Điều nào sau đây là một ví dụ về việc giải quyết nguyên tắc này trong thực tế?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Tạo các test case (ca kiểm thử) bao gồm mọi đầu ra được chỉ định có thể\n  B) Ghi lại tất cả các biến thể đầu vào kiểm thử có thể có và ưu tiên chúng dựa trên tầm quan trọng\n  C) Bắt đầu kiểm thử càng sớm càng tốt bằng các đánh giá và các phương pháp kiểm thử tĩnh khác\n  D) Sử dụng phân vùng tương đương và phân tích giá trị biên để tạo các ca kiểm thử\n\n💡 GIẢI THÍCH CHI TIẾT:\nNguyên tắc 'kiểm tra toàn diện là không thể' liên quan đến thực tế là không thể kiểm tra mọi biến thể đầu vào có thể có trong mọi trường hợp khác nhau, ngoại trừ những trường hợp tầm thường. Thay vào đó, kiểm thử sử dụng các kỹ thuật kiểm thử (test technique), ưu tiên test case (ca kiểm thử) và kiểm thử dựa trên rủi ro để lấy mẫu từ tập hợp các khả năng và tập trung nỗ lực kiểm thử.\na) Không đúng. Nguyên tắc nêu rõ rằng việc kiểm tra mọi thứ trừ những trường hợp tầm thường là không khả thi. Việc kiểm tra mọi thứ sẽ yêu cầu kiểm tra mọi biến thể có thể có của đầu vào trong mọi trường hợp khác nhau, điều này thường không khả thi vì thực tế sẽ có vô số khả năng. Việc kiểm tra mọi kết quả mong đợi có thể sẽ không giải quyết được vấn đề này vì mối quan hệ giữa đầu vào và kết quả mong đợi có thể khác nhau đối với từng test object (đối tượng kiểm thử). Đôi khi có thể có vô số kết quả mong đợi có thể xảy ra (ví dụ: khi có một số biến đại diện cho số thực), trong khi vào những thời điểm khác có thể chỉ có hai kết quả mong đợi, chẳng hạn như với một biến duy nhất có thể đúng hoặc sai\nb) Không đúng. Nguyên tắc nêu rõ rằng việc kiểm tra mọi biến thể đầu vào có thể có trong mọi trường hợp khác nhau là không khả thi. Điều này là do đối với các hệ thống không t"
  },
  {
    "n": 4,
    "ref": "Question #4 [FL-1.4.1]",
    "stem": "Which test activity involves working with test data requirements, test conditions, test environment  requirements and test cases?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test design"
      },
      {
        "k": "b",
        "t": "B) Test execution"
      },
      {
        "k": "c",
        "t": "C) Test analysis"
      },
      {
        "k": "d",
        "t": "D) Test implementation April 1, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHoạt động kiểm thử nào liên quan đến việc xử lý các yêu cầu về dữ liệu kiểm thử, điều kiện kiểm thử, yêu cầu về môi trường kiểm thử và các trường hợp kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Thiết kế kiểm thử\n  B) Thực thi kiểm thử\n  C) Phân tích kiểm thử\n  D) Triển khai kiểm thử ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Thiết kế kiểm thử bao gồm việc sử dụng các điều kiện kiểm thử để tạo ra các trường hợp kiểm thử và các phần mềm kiểm thử cần thiết khác, chẳng hạn như các yêu cầu về dữ liệu kiểm thử và các điều lệ kiểm thử cho kiểm thử thăm dò. Các yêu cầu về môi trường kiểm thử cũng được chỉ định, bao gồm cơ sở hạ tầng và công cụ cần thiết\nb) Không đúng. Thực hiện kiểm thử bao gồm việc thực hiện các trường hợp kiểm thử (như một phần của quy trình kiểm thử), tuy nhiên nó không trực tiếp bao gồm các phần mềm kiểm thử khác được đề cập trong câu hỏi, chẳng hạn như yêu cầu dữ liệu kiểm thử, yêu cầu môi trường kiểm thử và điều kiện kiểm thử\nc) Không đúng. Phân tích kiểm thử được sử dụng để xác định các tính năng cần kiểm thử. test basis (cơ sở kiểm thử) được phân tích và xác định là các điều kiện kiểm thử, sau đó được ưu tiên cùng với các rủi ro liên quan. Mặc dù hoạt động này liên quan đến việc làm việc với các điều kiện kiểm thử nhưng nó không bao gồm các phần mềm kiểm thử khác được đề cập trong câu hỏi, chẳng hạn như yêu cầu dữ liệu kiểm thử, yêu cầu môi trường kiểm thử và các trường hợp kiểm thử\nđ) Không đúng. Việc thực hiện kiểm thử bao gồm việc tạo ra các quy trình kiểm thử, chẳng hạn như các kịch bản kiểm thử thủ công và tự động, được tạo từ các trường hợp kiểm thử và có thể được tập hợp thành các bộ kiểm thử. Các thủ tục kiểm thử được ưu tiên và sắp xếp theo lịch trình thực hiện kiểm thử.  Dữ liệu kiểm thử được tạo, môi trường kiểm thử được xây dựng và thiết lập của nó được xác minh. Mặc "
  },
  {
    "n": 5,
    "ref": "Question #5 [FL-1.4.2]",
    "stem": "Which of the following is MOST likely to impact how testing is performed for a given test object?",
    "opts": [
      {
        "k": "a",
        "t": "A) The average level of experience of the organization’s marketing team"
      },
      {
        "k": "b",
        "t": "B) The knowledge of users that a new system is being developed for them"
      },
      {
        "k": "c",
        "t": "C) The number of years’ experience of the members of the test team"
      },
      {
        "k": "d",
        "t": "D) The end user’s organizational structure for a commercial music streaming application"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây có khả năng ảnh hưởng NHẤT đến cách thực thi kiểm thử đối với một test object (đối tượng kiểm thử) nhất định?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Mức độ kinh nghiệm trung bình của đội ngũ tiếp thị của tổ chức\n  B) Người dùng biết rằng một hệ thống mới đang được phát triển cho họ\n  C) Số năm kinh nghiệm của các thành viên trong nhóm kiểm thử\n  D) Cơ cấu tổ chức của người dùng cuối đối với ứng dụng phát nhạc trực tuyến thương mại\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Nhóm tiếp thị của tổ chức không thể thực hiện nhiều kiểm thử (mặc dù ở một số tổ chức, họ có thể tham gia vào kiểm thử chấp nhận (acceptance testing)), do đó, mức độ kinh nghiệm trung bình của họ (hầu hết là về tiếp thị) không có khả năng ảnh hưởng đến cách thực thi kiểm thử đối với một test object (đối tượng kiểm thử) nhất định\nb) Không đúng. Mức độ hiểu biết của người dùng rằng một hệ thống mới đang được xây dựng cho họ khó có thể ảnh hưởng đến cách thực thi kiểm thử. Bất kỳ sự tham gia nào của người dùng có thể ảnh hưởng đến cách thực thi kiểm thử đều có nhiều khả năng là kết quả của các quyết định của tester (kiểm thử viên), khách hàng và người quản lý dự án.\nc) Đúng. Số năm kinh nghiệm của các thành viên trong nhóm kiểm tra hiệu quả hoạt động sẽ giúp xác định khả năng và kiến thức (ví dụ: về các công cụ và loại lỗi khác nhau) mà các thành viên trong nhóm sẽ áp dụng khi họ kiểm tra\nđ) Không đúng. Cơ cấu tổ chức của những người dùng cuối khác nhau (có thể khác nhau) sẽ thay đổi giữa những người dùng. Vì vậy, thậm chí có thể không biết khi nào ứng dụng đang được kiểm thử và cơ cấu tổ chức của người dùng cuối có thể ít ảnh hưởng đến cách thực thi kiểm thử.\n\n📌 Kiến thức: FL-1.4.2 (K2)"
  },
  {
    "n": 6,
    "ref": "Question #6 [FL-1.4.4]",
    "stem": "Which of the following statements is a CORRECT example of the value of traceability?",
    "opts": [
      {
        "k": "a",
        "t": "A) Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk"
      },
      {
        "k": "b",
        "t": "B) Traceability between user requirements and test results provides a means of measuring project progress against business goals"
      },
      {
        "k": "c",
        "t": "C) Traceability between testers and test cases that failed provides a means of determining the skill level of the testers"
      },
      {
        "k": "d",
        "t": "D) Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây là ví dụ ĐÚNG về giá trị của khả năng truy xuất nguồn gốc?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Khả năng truy xuất nguồn gốc giữa các rủi ro được giảm thiểu và các test case (ca kiểm thử) đã vượt qua cung cấp phương tiện xác định mức độ rủi ro còn lại\n  B) Khả năng truy xuất nguồn gốc giữa yêu cầu của người dùng và kết quả kiểm tra cung cấp phương tiện đo lường tiến độ dự án so với mục tiêu kinh doanh\n  C) Truy xuất nguồn gốc giữa người kiểm tra và trường hợp kiểm thử thất bại cung cấp phương tiện xác định mức độ kỹ năng của người kiểm tra\n  D) Khả năng truy xuất nguồn gốc giữa các rủi ro được xác định và các điều kiện kiểm tra bằng văn bản cung cấp phương tiện xác định rủi ro nào đáng để kiểm tra\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Khả năng truy nguyên giữa các rủi ro được giảm thiểu và các test case (ca kiểm thử) đã vượt qua cung cấp rất ít thông tin, bởi vì để được giảm thiểu (bằng cách kiểm thử), các rủi ro cần phải có một test case (ca kiểm thử) tương ứng đã vượt qua. Để có thể đánh giá rủi ro tồn dư, cần phải có sẵn khả năng truy xuất nguồn gốc giữa tất cả các rủi ro và kết quả kiểm tra, để những rủi ro không có bài kiểm tra đạt tương ứng có thể được xác định là rủi ro tồn dư\nb) Đúng. Khả năng truy xuất nguồn gốc giữa các yêu cầu của người dùng và kết quả kiểm tra cung cấp dấu hiệu cho biết yêu cầu nào của người dùng đã được kiểm tra và do đó cung cấp phương tiện đo lường tiến độ dự án (trong bối cảnh kiểm thử) so với các mục tiêu kinh doanh\nc) Không đúng. Không rõ ràng rằng các trường hợp kiểm thử thất bại có cung cấp dấu hiệu về kỹ năng của người kiểm thử nhiều hơn các trường hợp kiểm thử đã đạt hay không. Nó sẽ phụ thuộc một phần vào mục tiêu kiểm tra (ví dụ: xây dựng sự tự tin hoặc gây ra thất bại). Ngoài ra, việc đo lường tester (kiểm thử viên) dựa trên các test case (ca kiểm thử) đã"
  },
  {
    "n": 7,
    "ref": "Question #7 [FL-1.5.1]",
    "stem": "Which of the following is MOST likely to be an example of a tester using a generic skill when  testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming"
      },
      {
        "k": "b",
        "t": "B) The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system"
      },
      {
        "k": "c",
        "t": "C) The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts"
      },
      {
        "k": "d",
        "t": "D) The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây có khả năng nhất là ví dụ về tester (kiểm thử viên) sử dụng kỹ năng chung khi kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiến thức sâu rộng của tester (kiểm thử viên) về nhiều loại trò chơi máy tính có nghĩa là họ có mối quan hệ tốt với một trong những nhà phát triển cũng đam mê chơi game\n  B) Tester (kiểm thử viên) là một cựu phi công và có thể hiểu rõ hơn các tiêu chí chấp nhận đối với hệ thống điều khiển máy bay trực thăng\n  C) Tester (kiểm thử viên) trước đây từng làm lập trình viên và sử dụng các kỹ năng của họ trong lĩnh vực này để giao tiếp tốt hơn với các nhà phân tích kinh doanh\n  D) Tester (kiểm thử viên) đã rất cẩn thận để không mắc sai lầm khi họ tạo ra các test case (ca kiểm thử) một cách có phương pháp trước khi bắt đầu phiên kiểm thử khám phá.\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Kỹ năng giao tiếp mạnh mẽ, lắng nghe tích cực và khả năng làm việc nhóm cho phép tester (kiểm thử viên) tương tác hiệu quả với tất cả các bên liên quan, tuy nhiên kiến thức sâu sắc về nhiều loại trò chơi máy tính cho phép họ hòa hợp với một nhà phát triển không phải là một ví dụ về kỹ năng chung hữu ích cho tester (kiểm thử viên)\nb) Đúng. Kiến thức về miền có thể được sử dụng để hiểu và giao tiếp với người dùng cuối và đại diện doanh nghiệp là một trong những kỹ năng chung mà người kiểm tra yêu cầu. tester (kiểm thử viên) có kinh nghiệm làm phi công sẽ giúp họ có khả năng đánh giá cao hơn các tiêu chí chấp nhận đối với hệ thống điều khiển trực thăng\nc) Không đúng. Mặc dù kỹ năng lập trình có thể được coi là kiến thức kỹ thuật có thể nâng cao hiệu quả khi sử dụng một số công cụ kiểm tra, nhưng những kỹ năng này khó có thể cải thiện khả năng giao tiếp của họ với các nhà phân tích kinh doanh.\nđ) Không đúng. Mặc dù sự kỹ lưỡng, chú ý đến chi tiết, sự tò mò và cách tiếp cận có phương pháp để xác định các "
  },
  {
    "n": 8,
    "ref": "Question #8 [FL-1.5.2]",
    "stem": "Which of the following is an advantage of the whole-team approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) It allows team members to take on any role at any time"
      },
      {
        "k": "b",
        "t": "B) It only needs a single team to support the complete development project"
      },
      {
        "k": "c",
        "t": "C) It embeds business representatives alongside developers in the same team"
      },
      {
        "k": "d",
        "t": "D) It generates a team synergy that benefits the entire project April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ưu điểm của cách tiếp cận toàn nhóm?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Nó cho phép các thành viên trong nhóm đảm nhận bất kỳ vai trò nào vào bất kỳ lúc nào\n  B) Nó chỉ cần một nhóm duy nhất để hỗ trợ dự án phát triển hoàn chỉnh\n  C) Nó gắn kết các đại diện doanh nghiệp cùng với các nhà phát triển trong cùng một nhóm\n  D) Nó tạo ra sức mạnh tổng hợp của nhóm mang lại lợi ích cho toàn bộ dự án Ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Cách tiếp cận toàn nhóm cho phép bất kỳ thành viên nào trong nhóm có kỹ năng và kiến ​​thức cần thiết để thực hiện bất kỳ nhiệm vụ nào, tuy nhiên điều đó không có nghĩa là các thành viên trong nhóm có thể đảm nhận bất kỳ vai trò nào vào bất kỳ lúc nào.  Thông thường, họ chỉ đảm nhận những vai trò mà họ có đủ năng lực và không có gợi ý nào cho rằng mọi thành viên trong nhóm đều có thể đảm nhận mọi vai trò.\nb) Không đúng. Cách tiếp cận toàn nhóm áp dụng cho cách hoạt động của một nhóm duy nhất (thường là trong phát triển phần mềm Agile); nó không đề cập đến việc nhiều nhóm phải làm việc như thế nào trong các dự án lớn hơn và nó không gợi ý rằng chỉ cần một 'toàn bộ' nhóm cho một dự án hoàn chỉnh\nc) Không đúng. Cách tiếp cận toàn nhóm không kỳ vọng mọi thành viên trong nhóm đều tham gia vào mọi quyết định quan trọng. Ví dụ: đại diện doanh nghiệp (tức là Chủ sản phẩm) không cần tham gia vào mọi quyết định kỹ thuật không ảnh hưởng đến kết quả kinh doanh và việc thực hiện cách tiếp cận như vậy sẽ làm chậm tiến độ của nhóm một cách không cần thiết\nđ) Đúng. Bằng cách tận dụng các bộ kỹ năng đa dạng của từng thành viên trong nhóm một cách hiệu quả nhất, cách tiếp cận toàn nhóm thúc đẩy động lực vượt trội của nhóm, thúc đẩy giao tiếp và hợp tác mạnh mẽ, đồng thời tạo ra sức mạnh tổng hợp của nhóm mang lại lợi ích cho toàn bộ dự án\n\n📌 Kiến thức: FL-1.5"
  },
  {
    "n": 9,
    "ref": "Question #9 [FL-2.1.1]",
    "stem": "Which of the following statements about the chosen software development lifecycle is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) If agile software development is used, automation of system tests replaces the need for regression testing"
      },
      {
        "k": "b",
        "t": "B) If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle"
      },
      {
        "k": "c",
        "t": "C) If an iterative development model is used, then component testing is typically performed manually by developers"
      },
      {
        "k": "d",
        "t": "D) If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về vòng đời phát triển phần mềm đã chọn là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Nếu phát triển phần mềm linh hoạt được sử dụng, việc tự động hóa các bài kiểm thử hệ thống sẽ thay thế nhu cầu kiểm thử hồi quy (regression testing)\n  B) Nếu sử dụng mô hình phát triển tuần tự thì kiểm thử động (dynamic testing) thường bị hạn chế ở giai đoạn sau của vòng đời\n  C) Nếu sử dụng mô hình phát triển lặp lại thì việc kiểm tra thành phần thường được các nhà phát triển thực hiện thủ công.\n  D) Nếu sử dụng mô hình phát triển gia tăng thì kiểm thử tĩnh (static testing) sẽ được thực hiện ở các giai đoạn đầu và kiểm thử động (dynamic testing) ở các giai đoạn sau.\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Trong quá trình phát triển phần mềm linh hoạt, các sản phẩm bàn giao được tạo ra trong mỗi lần lặp và việc phân phối thường xuyên các phần tăng dần đòi hỏi phải tiến hành kiểm thử hồi quy (regression testing) rộng rãi. Mặc dù một số (hoặc tất cả) kiểm thử hồi quy (regression testing) này có thể được tự động hóa, nhưng kiểm thử hồi quy (regression testing) (tự động hoặc không) không thể được thay thế bằng tự động hóa các bài kiểm thử hệ thống.\nb) Đúng. Nếu sử dụng mô hình phát triển tuần tự thì ngay từ đầu vòng đời phát triển phần mềm sẽ không có sẵn mã để thực thi và do đó trong thời gian này, kiểm thử tĩnh (static testing) (ví dụ: đánh giá) sẽ được thực hiện. Ở giai đoạn sau của vòng đời, khi mã có sẵn để thực thi, bạn có thể thực thi kiểm thử động. Tuy nhiên, lưu ý rằng việc chuẩn bị cho kiểm thử động (dynamic testing) thường sẽ diễn ra sớm trong bất kỳ vòng đời phát triển phần mềm nào.\nc) Không đúng. Nếu sử dụng mô hình phát triển lặp, như phát triển phần mềm linh hoạt, thì các bài kiểm thử thành phần cũng có thể được sử dụng để kiểm thử hồi quy (regression testing) cho mỗi lần lặp. Trong trường hợp đó, có lậ"
  },
  {
    "n": 10,
    "ref": "Question #10 [FL-2.1.2]",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers should review work products as part of the next development phase"
      },
      {
        "k": "b",
        "t": "B) Testers should review work products as soon as drafts are available"
      },
      {
        "k": "c",
        "t": "C) Testers should review work products before test analysis and test design begin"
      },
      {
        "k": "d",
        "t": "D) Testers should review work products immediately after they are published"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là phương pháp kiểm thử tốt áp dụng cho tất cả vòng đời phát triển phần mềm?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Người kiểm tra nên xem xét các sản phẩm công việc như một phần của giai đoạn phát triển tiếp theo\n  B) Người kiểm tra nên xem xét sản phẩm công việc ngay khi có bản nháp\n  C) Người kiểm thử nên xem lại sản phẩm công việc trước khi bắt đầu phân tích kiểm thử và thiết kế kiểm thử\n  D) Người kiểm thử nên xem lại sản phẩm công việc ngay sau khi chúng được xuất bản\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Người kiểm tra nên xem xét các sản phẩm công việc ngay khi có bản nháp để cho phép kiểm thử sớm như một phần của phương pháp chuyển sang trái. Nếu họ đợi đến giai đoạn phát triển tiếp theo, thì công việc phát triển (và kiểm thử) không cần thiết có thể được bắt đầu trên các sản phẩm công việc còn thiếu sót, chưa được xem xét.\nb) Đúng. Người kiểm tra nên xem xét các sản phẩm công việc ngay khi có bản nháp để cho phép kiểm thử sớm như một phần của phương pháp chuyển sang trái\nc) Không đúng. Người kiểm thử thường xem xét các sản phẩm làm cơ sở kiểm thử như một phần của phân tích kiểm thử, không phải trước khi phân tích kiểm thử và thiết kế kiểm thử.\nđ) Không đúng. Người kiểm tra nên xem xét các sản phẩm công việc ngay khi có bản nháp để cho phép kiểm thử sớm như một phần của phương pháp chuyển sang trái.  Chờ cho đến khi chúng được xuất bản có nghĩa là bất kỳ lỗi nào có thể được tìm thấy qua quá trình đánh giá của người kiểm tra sẽ có trong tài liệu đã xuất bản.\n\n📌 Kiến thức: FL-2.1.2 (K1)"
  },
  {
    "n": 11,
    "ref": "Question #11 [FL-2.1.3]",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test-Driven Development"
      },
      {
        "k": "b",
        "t": "B) Coverage-Driven Development"
      },
      {
        "k": "c",
        "t": "C) Quality-Driven Development"
      },
      {
        "k": "d",
        "t": "D) Feature-Driven Development"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ví dụ về phương pháp phát triển kiểm thử đầu tiên?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Phát triển dựa trên kiểm thử\n  B) Phát triển theo định hướng bảo hiểm\n  C) Phát triển theo định hướng chất lượng\n  D) Phát triển theo hướng tính năng\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Phát triển dựa trên kiểm thử (TDD) là một ví dụ nổi tiếng về cách tiếp cận kiểm thử đầu tiên để phát triển\nb) Không đúng. Phát triển theo hướng phủ sóng không phải là một ví dụ chính xác về cách tiếp cận phát triển kiểm thử đầu tiên\nc) Không đúng. Phát triển theo định hướng chất lượng không phải là một ví dụ chính xác về cách tiếp cận kiểm thử đầu tiên để phát triển\nđ) Không đúng. Phát triển dựa trên tính năng không phải là một ví dụ về cách tiếp cận phát triển kiểm thử đầu tiên mà thay vào đó là một phương pháp phát triển phần mềm linh hoạt dựa trên việc cung cấp các tính năng (trái ngược với câu chuyện của người dùng trong Scrum)\n\n📌 Kiến thức: FL-2.1.3 (K1)"
  },
  {
    "n": 12,
    "ref": "Question #12 [FL-2.1.4]",
    "stem": "Which of the following statements about DevOps is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing"
      },
      {
        "k": "b",
        "t": "B) To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression"
      },
      {
        "k": "c",
        "t": "C) To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach"
      },
      {
        "k": "d",
        "t": "D) To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây về DevOps là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Để tăng tốc độ phát hành, tính năng tích hợp liên tục được sử dụng để khuyến khích các nhà phát triển gửi mã nhanh chóng mà không cần phải hoàn thành kiểm thử thành phần (component testing)\n  B) Để có thể cập nhật và phát hành hệ thống thường xuyên hơn, cần có nhiều kiểm thử hồi quy (regression testing) tự động để giảm nguy cơ hồi quy\n  C) Để đối xử bình đẳng với cả nhà phát triển và hoạt động, tester (kiểm thử viên) sẽ phân bổ nhiều nỗ lực hơn để phát hành kiểm thử theo hoạt động bằng cách sử dụng phương pháp shift-right\n  D) Để tăng cường sức mạnh tổng hợp giữa tester (kiểm thử viên), nhà phát triển và người vận hành, quá trình kiểm thử phải trở nên hoàn toàn tự động mà không cần kiểm thử thủ công. Ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. DevOps tăng cường kiểm thử theo nhiều cách, chẳng hạn như bằng cách cung cấp phản hồi nhanh về chất lượng mã, kiểm thử hồi quy (regression testing) tự động giúp giảm thiểu rủi ro hồi quy và thúc đẩy cách tiếp cận dịch chuyển sang trái với các bài kiểm thử thành phần và gửi mã chất lượng cao. Điều này phần lớn được cung cấp thông qua tích hợp liên tục, trong đó các nhà phát triển gửi các bài kiểm tra thành phần (đơn vị) cùng với mã mới của họ, mã này phải vượt qua để mã được chấp nhận vào bản dựng. Do đó, các nhà phát triển cần phải hoàn thành việc kiểm thử thành phần\nb) Đúng. DevOps tăng cường kiểm thử theo nhiều cách, chẳng hạn như bằng cách cung cấp phản hồi nhanh về chất lượng mã, kiểm thử hồi quy (regression testing) tự động giúp giảm thiểu rủi ro hồi quy và thúc đẩy cách tiếp cận dịch chuyển sang trái với các bài kiểm thử thành phần và gửi mã chất lượng cao\nc) Không đúng. DevOps tăng cường kiểm thử theo nhiều cách, chẳng hạn như bằng cách cung cấp phản hồi nhanh về chất lượng mã,"
  },
  {
    "n": 13,
    "ref": "Question #13 [FL-2.2.1]",
    "stem": "Which of the following is MOST likely to be performed as part of system testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Security testing of a credit management system by an independent test team"
      },
      {
        "k": "b",
        "t": "B) Testing the interface of a currency exchange system with an external banking system"
      },
      {
        "k": "c",
        "t": "C) Beta testing of a remote learning system by courseware developers"
      },
      {
        "k": "d",
        "t": "D) Testing interactions between the user interface and database of a human resources system"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây có nhiều khả năng được thực hiện nhất như một phần của kiểm thử hệ thống (system testing)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra tính bảo mật của hệ thống quản lý tín dụng bởi một nhóm kiểm tra độc lập\n  B) Kiểm tra giao diện của hệ thống trao đổi tiền tệ với hệ thống ngân hàng bên ngoài\n  C) Kiểm thử beta hệ thống học tập từ xa của các nhà phát triển chương trình học\n  D) Kiểm tra sự tương tác giữa giao diện người dùng và cơ sở dữ liệu của hệ thống nhân sự\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Kiểm tra hệ thống kiểm tra hành vi và khả năng của hệ thống hoàn chỉnh và bao gồm kiểm tra phi chức năng về các đặc tính chất lượng, bao gồm kiểm tra bảo mật. loại kiểm thử (test type) này thường được thực hiện bởi một nhóm kiểm thử độc lập dựa trên thông số kỹ thuật của hệ thống\nb) Không đúng. Kiểm tra tích hợp hệ thống kiểm tra các giao diện với các hệ thống khác và dịch vụ bên ngoài\nc) Không đúng. kiểm thử beta là một loại kiểm thử (test type) chấp nhận được thực hiện tại một địa điểm bên ngoài bởi các vai trò bên ngoài tổ chức phát triển\nđ) Không đúng. Kiểm thử tích hợp thành phần bao gồm việc kiểm tra các tương tác (giao diện và) giữa các thành phần của hệ thống, chẳng hạn như giao diện người dùng và cơ sở dữ liệu\n\n📌 Kiến thức: FL-2.2.1 (K2)"
  },
  {
    "n": 14,
    "ref": "Question #14 [FL-2.2.3]",
    "stem": "Which of the following statements is CORRECT?",
    "opts": [
      {
        "k": "a",
        "t": "A) Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses"
      },
      {
        "k": "b",
        "t": "B) Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced"
      },
      {
        "k": "c",
        "t": "C) Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object"
      },
      {
        "k": "d",
        "t": "D) Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nPhát biểu nào sau đây là ĐÚNG?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra hồi quy tăng số lượng khi dự án tiến triển, trong khi số lượng kiểm tra xác nhận giảm khi dự án tiến triển\n  B) Kiểm tra hồi quy được tạo và chạy khi đối tượng kiểm tra được cố định, trong khi kiểm tra xác nhận được chạy bất cứ khi nào đối tượng kiểm tra được nâng cao\n  C) Kiểm tra hồi quy liên quan đến việc kiểm tra xem môi trường hoạt động có không thay đổi hay không, trong khi kiểm tra xác nhận liên quan đến việc kiểm tra các thay đổi đối với đối tượng kiểm tra\n  D) Kiểm tra hồi quy liên quan đến các tác động bất lợi trong mã không thay đổi, trong khi kiểm tra xác nhận liên quan đến kiểm tra mã đã thay đổi\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. các bài kiểm thử hồi quy tăng về số lượng khi dự án tiến triển, vì các bài kiểm thử hồi quy mới thường được yêu cầu khi có thay đổi đối với hệ thống. Tương tự, số lượng kiểm thử xác nhận cũng thường tăng lên khi dự án tiến triển vì cần có các kiểm thử xác nhận mới cho mỗi lần sửa lỗi được thực hiện đối với hệ thống.\nb) Không đúng. Đó là cách khác. Kiểm tra xác nhận được tạo và chạy khi đối tượng kiểm tra được cố định và kiểm tra hồi quy được chạy (lý tưởng) bất cứ khi nào đối tượng kiểm tra được nâng cao (thay đổi)\nc) Không đúng. Kiểm tra xác nhận xác minh rằng một lỗi đã được sửa một cách chính xác và do đó liên quan đến việc kiểm tra các thay đổi đối với đối tượng kiểm tra.  Tuy nhiên, kiểm tra hồi quy đảm bảo rằng những thay đổi (bao gồm cả những thay đổi đối với môi trường hoạt động) không có tác động tiêu cực đến phần mềm không thay đổi và do đó không kiểm tra xem môi trường hoạt động có không thay đổi hay không.\nđ) Đúng. Kiểm tra hồi quy đảm bảo rằng các thay đổi không có tác động tiêu cực đến phần mềm không thay đổi. Kiểm tra xác nhận xác minh rằng lỗi đã được sửa - và do đó liên quan đế"
  },
  {
    "n": 15,
    "ref": "Question #15 [FL-3.1.3]",
    "stem": "Which of the following is an example of a defect that can be found by static testing but NOT by  dynamic testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Lack of usability provided through the user interface"
      },
      {
        "k": "b",
        "t": "B) Code with no path that reaches it"
      },
      {
        "k": "c",
        "t": "C) Poor response times for most of the expected users"
      },
      {
        "k": "d",
        "t": "D) Required features that are not implemented in the code"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là ví dụ về lỗi có thể được tìm thấy bằng kiểm thử tĩnh (static testing) nhưng KHÔNG được tìm thấy bằng kiểm thử động (dynamic testing)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Thiếu khả năng sử dụng được cung cấp thông qua giao diện người dùng\n  B) Mã không có đường dẫn tới nó\n  C) Thời gian phản hồi kém đối với hầu hết người dùng được mong đợi\n  D) Các tính năng bắt buộc chưa được triển khai trong mã\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Việc thiếu khả năng sử dụng được cung cấp thông qua giao diện người dùng có thể được phát hiện thông qua đánh giá bằng danh sách kiểm tra phù hợp, nhưng việc thiếu khả năng sử dụng cũng có thể được xác định bằng cách yêu cầu một số người dùng thông thường kiểm tra giao diện người dùng một cách linh hoạt và đưa ra phản hồi về khả năng sử dụng của nó\nb) Đúng. Việc xem xét mã có thể phát hiện mã không thể truy cập được bằng bất kỳ đường dẫn nào, tuy nhiên, kiểm tra động chỉ có thể thực hiện mã có thể truy cập và không thể xác định rằng mã đó không thể truy cập được nếu không chạy mọi kết hợp có thể có của đầu vào và trạng thái đầu vào, điều này không thực tế đối với mã thực\nc) Không đúng. Khó có thể xác định thời gian phản hồi kém đối với hầu hết người dùng nếu không thực thi mã (tức là bằng kiểm thử tĩnh (static testing)), vì vậy trong tình huống này, kiểm thử động (dynamic testing) có thể tìm thấy lỗi, nhưng kiểm thử tĩnh (static testing) khó có thể tìm thấy lỗi đó\nđ) Không đúng. Việc xem xét mã của người biết về các tính năng bắt buộc có thể phát hiện ra rằng các tính năng bắt buộc chưa được triển khai trong mã và kiểm thử động (dynamic testing) cũng có thể được sử dụng để xác định rằng các tính năng bắt buộc này chưa được triển khai\n\n📌 Kiến thức: FL-3.1.3 (K2)"
  },
  {
    "n": 16,
    "ref": "Question #16 [FL-3.2.1]",
    "stem": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "opts": [
      {
        "k": "a",
        "t": "A) Managers are aware of which developers are less productive"
      },
      {
        "k": "b",
        "t": "B) It allows project managers to prioritize their stakeholder interactions"
      },
      {
        "k": "c",
        "t": "C) It facilitates early communication of potential quality issues"
      },
      {
        "k": "d",
        "t": "D) End users better understand why the delivery of the work product is delayed April 1, 2025"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là lợi ích của phản hồi sớm và thường xuyên của các bên liên quan?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Các nhà quản lý nhận thức được nhà phát triển nào làm việc kém hiệu quả hơn\n  B) Nó cho phép các nhà quản lý dự án ưu tiên các tương tác của các bên liên quan\n  C) Nó tạo điều kiện thông tin sớm về các vấn đề chất lượng tiềm ẩn\n  D) Người dùng cuối hiểu rõ hơn lý do tại sao việc giao sản phẩm công việc bị trì hoãn Ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Phản hồi là từ các bên liên quan (ví dụ: đại diện doanh nghiệp và người dùng cuối), không phải từ nhà phát triển, vì vậy phản hồi này không có khả năng thông báo cho người quản lý biết nhà phát triển nào làm việc hiệu quả hơn hay kém hơn\nb) Không đúng. Người quản lý dự án không sử dụng phản hồi sớm và thường xuyên từ các bên liên quan để ưu tiên cách họ tương tác với các bên liên quan khác nhau\nc) Đúng. Việc nhận được phản hồi từ các bên liên quan sớm và thường xuyên trong quá trình phát triển phần mềm có thể mang lại lợi ích cao vì nó tạo điều kiện thuận lợi cho việc truyền đạt sớm các vấn đề chất lượng tiềm ẩn, có thể ngăn ngừa sự hiểu lầm về yêu cầu và đảm bảo rằng mọi thay đổi trong yêu cầu của các bên liên quan đều được hiểu và triển khai sớm hơn.\nđ) Không đúng. Phản hồi sớm và thường xuyên có thể ngăn cản việc phát triển một sản phẩm không đáp ứng nhu cầu của các bên liên quan và dẫn đến việc làm lại tốn kém và bị trễ thời hạn, vì vậy, lý tưởng nhất là không nên trì hoãn. Ngoài ra, phản hồi là từ các bên liên quan (không phải từ họ), bao gồm cả người dùng cuối, vì vậy việc người dùng cuối cung cấp phản hồi sẽ không giúp ích cho sự hiểu biết của người dùng cuối\n\n📌 Kiến thức: FL-3.2.1 (K1)"
  },
  {
    "n": 17,
    "ref": "Question #17 [FL-3.2.2]",
    "stem": "Given the following task descriptions:  1. The quality characteristics to be evaluated and the exit criteria are selected  2. Everyone has access to the work product  3. Anomalies are identified in the work product  4. Anomalies are discussed    And the following review activities  A. Individual review   B. Review initiation   C. Planning  D. Communication and analysis   Which of the following BEST matches the task descriptions and activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1B, 2C, 3D, 4A"
      },
      {
        "k": "b",
        "t": "B) 1B, 2D, 3C, 4A"
      },
      {
        "k": "c",
        "t": "C) 1C, 2A, 3B, 4D"
      },
      {
        "k": "d",
        "t": "D) 1C, 2B, 3A, 4D"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCho các mô tả nhiệm vụ sau: 1. Các đặc điểm chất lượng cần đánh giá và tiêu chí đầu ra (exit criteria) được chọn 2. Mọi người đều có quyền truy cập vào sản phẩm công việc 3. Các điểm bất thường được xác định trong sản phẩm công việc 4. Các điểm bất thường được thảo luận Và các hoạt động đánh giá sau A. Đánh giá cá nhân B. Bắt đầu đánh giá C. Lập kế hoạch D. Giao tiếp và phân tích Điều nào sau đây TỐT NHẤT phù hợp với mô tả và hoạt động nhiệm vụ?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 1B, 2C, 3D, 4A\n  B) 1B, 2D, 3C, 4A\n  C) 1C, 2A, 3B, 4D\n  D) 1C, 2B, 3A, 4D\n\n💡 GIẢI THÍCH CHI TIẾT:\nXem xét từng mô tả nhiệm vụ được liệt kê: 1. Các đặc điểm chất lượng cần đánh giá và tiêu chí kết thúc được chọn - (Lập kế hoạch (C): Xác định phạm vi xem xét, mục đích, sản phẩm công việc cần xem xét, đặc điểm chất lượng cần đánh giá, các lĩnh vực trọng tâm, tiêu chí kết thúc, thông tin hỗ trợ như tiêu chuẩn, nỗ lực và khung thời gian.) 2. Mọi người đều có quyền truy cập vào sản phẩm công việc - (Bắt đầu xem xét (B): Đảm bảo tất cả những người tham gia đều có quyền truy cập vào sản phẩm công việc và các nguồn lực cần thiết, đồng thời làm rõ vai trò và trách nhiệm của họ.) 3. Các điểm bất thường được xác định trong sản phẩm công việc - (Đánh giá cá nhân (A): Đánh giá chất lượng của sản phẩm công việc, xác định và ghi lại các điểm bất thường, đề xuất và câu hỏi bằng cách sử dụng các kỹ thuật đánh giá như xem xét dựa trên danh sách kiểm tra và đánh giá dựa trên kịch bản.) 4. Các điểm bất thường được phân tích và thảo luận - (Giao tiếp và phân tích (D): Phân tích và thảo luận về từng điểm bất thường, xác định trạng thái, quyền sở hữu và các hành động cần thiết cũng như đưa ra các quyết định xem xét, thông thường trong một cuộc họp. Điều này có thể bao gồm việc xác định nhu cầu theo dõi xem xét.) Như vậy:\na) Không đúng\nb) Không đúng\nc) Không "
  },
  {
    "n": 18,
    "ref": "Question #18 [FL-3.2.3]",
    "stem": "Given the following roles in reviews:  1. Scribe  2. Review leader   3. Facilitator  4. Manager    And the following responsibilities in reviews:  A. Ensures the effective running of review meetings and the setting up a safe review  environment  B. Records review information, such as decisions and new anomalies found during the  review meeting  C. Decides what is to be reviewed and provides resources, such as staff and time for the  review  D. Takes overall responsibility for the review such as organizing when and where the  review will take place  Which of the following BEST matches the roles and responsibilities?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1A, 2B, 3D, 4C"
      },
      {
        "k": "b",
        "t": "B) 1A, 2C, 3B, 4D"
      },
      {
        "k": "c",
        "t": "C) 1B, 2D, 3A, 4C"
      },
      {
        "k": "d",
        "t": "D) 1B, 2D, 3C, 4A April 1, 2025"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nVới các vai trò sau trong đánh giá: 1. Người ghi chép 2. Người lãnh đạo đánh giá 3. Người điều phối 4. Người quản lý Và các trách nhiệm sau trong đánh giá: A. Đảm bảo các cuộc họp đánh giá diễn ra hiệu quả và thiết lập một môi trường đánh giá an toàn B. Ghi lại thông tin đánh giá, chẳng hạn như các quyết định và những điểm bất thường mới được tìm thấy trong cuộc họp đánh giá C. Quyết định những gì cần đánh giá và cung cấp các nguồn lực, chẳng hạn như nhân viên và thời gian cho việc đánh giá D. Chịu trách nhiệm chung về việc đánh giá như tổ chức thời gian và địa điểm đánh giá sẽ diễn ra Cái nào trong số đó TỐT NHẤT sau đây có phù hợp với vai trò và trách nhiệm không?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 1A, 2B, 3D, 4C\n  B) 1A, 2C, 3B, 4D\n  C) 1B, 2D, 3A, 4C\n  D) 1B, 2D, 3C, 4A Ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nXem xét từng vai trò được liệt kê: 1. Người ghi chép (hoặc Người ghi âm) - chịu trách nhiệm thu thập phản hồi từ người đánh giá và ghi lại thông tin đánh giá, chẳng hạn như các quyết định được đưa ra và bất kỳ điểm bất thường mới nào được xác định trong cuộc họp đánh giá. (Hồ sơ xem xét thông tin, chẳng hạn như các quyết định và những điểm bất thường mới được phát hiện trong cuộc họp đánh giá - B) 2. Trưởng nhóm đánh giá - chịu trách nhiệm giám sát quá trình đánh giá, chẳng hạn như lựa chọn các thành viên trong nhóm đánh giá, lên lịch các cuộc họp đánh giá và đảm bảo rằng việc đánh giá được hoàn thành thành công.   ( Chịu trách nhiệm chung về việc đánh giá, chẳng hạn như tổ chức thời gian và địa điểm đánh giá - D) 3. Người điều phối (hoặc Người điều hành) - chịu trách nhiệm đảm bảo rằng các cuộc họp đánh giá diễn ra hiệu quả, bao gồm quản lý thời gian, hòa giải các cuộc thảo luận và tạo ra một môi trường an toàn nơi mọi người có thể tự do nói lên ý kiến ​​của mình. (Đảm bảo các cuộc họp đánh gi"
  },
  {
    "n": 19,
    "ref": "Question #19 [FL-4.1.1]",
    "stem": "Which of the following statements BEST describes the difference between decision table testing  and branch testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object."
      },
      {
        "k": "b",
        "t": "B) In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code."
      },
      {
        "k": "c",
        "t": "C) In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic."
      },
      {
        "k": "d",
        "t": "D) In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code."
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nCâu nào sau đây mô tả TỐT NHẤT sự khác biệt giữa kiểm thử bảng quyết định và kiểm thử nhánh?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Trong kiểm thử bảng quyết định, các test case (ca kiểm thử) được lấy từ các câu lệnh quyết định trong mã. Trong kiểm thử nhánh, các test case (ca kiểm thử) được bắt nguồn từ kiến ​​thức về luồng điều khiển của test object (đối tượng kiểm thử).\n  B) Trong kiểm thử bảng quyết định, các test case (ca kiểm thử) được lấy từ đặc tả mô tả logic nghiệp vụ. Trong kiểm thử nhánh, các test case (ca kiểm thử) dựa trên việc dự đoán các lỗi tiềm ẩn trong mã nguồn.\n  C) Trong kiểm thử bảng quyết định, các test case (ca kiểm thử) được bắt nguồn từ kiến thức về luồng điều khiển của test object (đối tượng kiểm thử). Trong kiểm thử nhánh, các test case (ca kiểm thử) được lấy từ đặc tả mô tả logic nghiệp vụ.\n  D) Trong kiểm thử bảng quyết định, các test case (ca kiểm thử) độc lập với cách triển khai phần mềm. Trong kiểm thử nhánh, các test case (ca kiểm thử) chỉ có thể được tạo sau khi thiết kế hoặc triển khai mã.\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Kiểm thử bảng quyết định là kỹ thuật kiểm thử hộp đen, không phải kỹ thuật kiểm thử hộp trắng – các trường hợp kiểm thử không dựa trên các quyết định trong mã nguồn. Trong kiểm thử nhánh, các test case (ca kiểm thử) được bắt nguồn từ kiến thức về luồng điều khiển của test object (đối tượng kiểm thử)\nb) Không đúng. Dự đoán các lỗi tiềm ẩn được sử dụng trong việc đoán lỗi (một kỹ thuật kiểm thử dựa trên kinh nghiệm), không phải trong kiểm thử nhánh (kỹ thuật kiểm thử hộp trắng). Trong kiểm thử bảng quyết định, các test case (ca kiểm thử) được lấy từ đặc tả mô tả logic nghiệp vụ\nc) Không đúng. Nếu một ca kiểm thử dựa trên kiến ​​thức về luồng điều khiển của đối tượng kiểm thử thì đó là kỹ thuật kiểm thử hộp trắng. Kiểm tra bảng quyết định thường dựa trên phân "
  },
  {
    "n": 20,
    "ref": "Question #20 [FL-4.2.1]",
    "stem": "Customers of the TestWash car wash chain have cards with a record of the number of washes  they have bought so far. The initial value is 0. After entering the car wash, the system increases  the number on the card by one. This value represents the number of the current wash. Based on  this number the system decides what discount the customer is entitled to.  For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system  gives a further 40% discount (i.e., a 50% discount in total).  Which of the following sets of input data (understood as the numbers of the current wash) achieves  the highest equivalence partition coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 19, 20, 30"
      },
      {
        "k": "b",
        "t": "B) 11, 12, 20"
      },
      {
        "k": "c",
        "t": "C) 1, 10, 50"
      },
      {
        "k": "d",
        "t": "D) 10, 29, 30, 31 April 1, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nKhách hàng của chuỗi rửa xe TestWash có thẻ ghi số lần rửa họ đã mua cho đến nay. Giá trị ban đầu là 0. Sau khi vào tiệm rửa xe, hệ thống sẽ tăng số trên thẻ lên một. Giá trị này thể hiện số lần giặt hiện tại. Dựa trên con số này, hệ thống sẽ quyết định mức giảm giá mà khách hàng được hưởng.  Đối với mỗi lần giặt thứ mười, hệ thống sẽ giảm giá 10% và với mỗi lần giặt thứ hai mươi, hệ thống sẽ giảm giá thêm 40% (tức là giảm giá tổng cộng 50%).  Bộ dữ liệu đầu vào nào sau đây (được hiểu là số lần giặt hiện tại) đạt được độ bao phủ phân vùng tương đương cao nhất?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 19, 20, 30\n  B) 11, 12, 20\n  C) 1, 10, 50\n  D) 10, 29, 30, 31 ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. 19 bao gồm phân vùng “không giảm giá”, 20 bao gồm phân vùng “Giảm giá 50%” và 30 bao gồm phân vùng “Giảm giá 10%. Ba giá trị này bao gồm cả ba phân vùng tương đương hợp lệ\nb) Không đúng. 11 và 12 bao gồm phân vùng “không giảm giá”, trong khi 20 bao gồm phân vùng “Giảm giá 50%”, do đó bao gồm hai trong ba phân vùng tương đương hợp lệ\nc) Không đúng. 1 bao gồm phân vùng “không giảm giá”, trong khi 10 và 50 bao gồm phân vùng “Giảm giá 10%. Phân vùng “Giảm giá 50%” không được bao gồm, vì vậy tổng thể hai trong số ba phân vùng tương đương hợp lệ sẽ được bao gồm\nđ) Không đúng. 29 và 31 bao gồm phân vùng “không giảm giá”, trong khi 10 và 30 bao gồm phân vùng “Giảm giá 10%. Phân vùng “Giảm giá 50%” không được bao gồm, vì vậy tổng thể hai trong số ba phân vùng tương đương hợp lệ sẽ được bao gồm\n\n📌 Kiến thức: FL-4.2.1 (K3)"
  },
  {
    "n": 21,
    "ref": "Question #21 [FL-4.2.2]",
    "stem": "You are testing a form that verifies the correctness of the length of the password given as input.  The form accepts a password with the correct length and rejects a password that is too short or too  long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it  is considered incorrect.  At first, the form is empty (password length = 0). You apply boundary value analysis to the  “password length” variable.  Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that  due to the high risk of this component, test cases should be added to ensure 100% 3-value  boundary value coverage.  Which additional password lengths should be tested to achieve this?",
    "opts": [
      {
        "k": "a",
        "t": "A) 4, 5, 13, 14"
      },
      {
        "k": "b",
        "t": "B) 7, 11"
      },
      {
        "k": "c",
        "t": "C) 1, 5, 13"
      },
      {
        "k": "d",
        "t": "D) 1, 4, 7, 11, 14 April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang kiểm tra một biểu mẫu xác minh tính chính xác về độ dài của mật khẩu được cung cấp làm đầu vào.  Biểu mẫu chấp nhận mật khẩu có độ dài chính xác và từ chối mật khẩu quá ngắn hoặc quá dài. Độ dài mật khẩu là chính xác nếu nó có từ 6 đến 12 ký tự. Nếu không, nó được coi là không chính xác.  Lúc đầu, biểu mẫu trống (độ dài mật khẩu = 0). Bạn áp dụng phân tích giá trị biên cho biến “độ dài mật khẩu”.  Tập hợp các test case (ca kiểm thử) của bạn đạt được phạm vi bao phủ 100% giá trị biên 2 giá trị. Nhóm đã quyết định rằng do thành phần này có tính rủi ro cao nên các test case (ca kiểm thử) cần được thêm vào để đảm bảo bao phủ 100% giá trị biên 3 giá trị.  Độ dài mật khẩu bổ sung nào cần được kiểm tra để đạt được điều này?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 4, 5, 13, 14\n  B) 7, 11\n  C) 1, 5, 13\n  D) 1, 4, 7, 11, 14 Ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nMiền dành cho độ dài mật khẩu có ba phân vùng tương đương: • mật khẩu quá ngắn {0, 1, …, 4, 5} • mật khẩu OK {6, 7, …, 11, 12} • mật khẩu quá dài {13, 14, …} Để đạt được phạm vi bao phủ đầy đủ cho BVA 3 giá trị, chúng ta cần kiểm tra các giá trị sau: 0, 1, 4, 5, 6, 7, 11, 12, 13, 14. Vì BVA 2 giá trị đã được bảo vệ, điều này có nghĩa là chúng tôi đã kiểm tra mật khẩu có độ dài: 0, 5, 6, 12 và 13. Điều này có nghĩa là độ dài bổ sung cần được bảo vệ để chuyển từ 2 giá trị sang 3 giá trị là: 1, 4, 7, 11 và 14. Do đó:\na) Không đúng\nb) Không đúng\nc) Không đúng\nđ) Đúng\n\n📌 Kiến thức: FL-4.2.2 (K3)"
  },
  {
    "n": 22,
    "ref": "Question #22 [FL-4.2.3]",
    "stem": "The following decision table contains the rules for determining the risk of atherosclerosis.     Rule 1  Rule 2  Rule 3  Rule 4  Rule 5  Conditions  Cholesterol (mg/dl)  ≤124  ≤ 124  125 –  200  125 –  200  ≥ 201  Blood pressure (mm  Hg)  ≤ 140  > 140  ≤ 140  > 140  –  Action  Risk level  very low  low  medium  high  very high    You designed the test cases with the following input data:  TC1:   Cholesterol = 125 mg/dl   Blood pressure = 141 mm Hg  TC2:   Cholesterol = 200 mg/dl   Blood pressure = 201 mm Hg  TC3:   Cholesterol = 124 mg/dl   Blood pressure = 201 mm Hg  TC4:   Cholesterol = 109 mg/dl   Blood pressure = 200 mm Hg  TC5:  Cholesterol = 201 mg/dl   Blood pressure = 140 mm Hg  What is the decision table coverage achieved by these test cases?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 40%"
      },
      {
        "k": "b",
        "t": "B) 60%"
      },
      {
        "k": "c",
        "t": "C) 80%"
      },
      {
        "k": "d",
        "t": "D) 100% April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBảng quyết định sau đây chứa các quy tắc xác định nguy cơ xơ vữa động mạch.     Quy tắc 1 Quy tắc 2 Quy tắc 3 Quy tắc 4 Quy tắc 5 Tình trạng Cholesterol (mg/dl) ≤124 ≤ 124 125 – 200 125 – 200 ≥ 201 Huyết áp (mm Hg) ≤ 140 > 140 ≤ 140 > 140 – Hành động Mức rủi ro rất thấp thấp Trung bình cao rất cao Bạn đã thiết kế các test case (ca kiểm thử) với dữ liệu đầu vào sau: TC1: Cholesterol = 125 mg/dl Huyết áp = 141 mm Hg TC2: Cholesterol = 200 mg/dl Huyết áp = 201 mm Hg TC3: Cholesterol = 124 mg/dl Huyết áp = 201 mm Hg TC4: Cholesterol = 109 mg/dl Huyết áp = 200 mm Hg TC5: Cholesterol = 201 mg/dl Huyết áp = 140 mm Hg Đạt được phạm vi bao phủ của bảng quyết định trong các trường hợp xét nghiệm này là gì?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 40%\n  B) 60%\n  C) 80%\n  D) 100% Ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nCó năm cột trong bảng quyết định. Mỗi test case (ca kiểm thử) bao gồm một trong số chúng.  TC1 và TC2 đều bao gồm Quy tắc 4 TC3 và TC4 đều bao gồm Quy tắc 2 TC5 bao gồm Quy tắc 5 Vì vậy, năm test case (ca kiểm thử) này bao gồm ba trong số năm cột, đạt được phạm vi bao phủ là (3/5)*100% = 60%. Vì vậy, phương án b) là phương án ĐÚNG.  Như vậy:\na) Không đúng\nb) Đúng\nc) Không đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-4.2.3 (K3)"
  },
  {
    "n": 23,
    "ref": "Question #23 [FL-4.2.4]",
    "stem": "A storage system can store up to three elements and is modeled by the following state transition  diagram. The variable N represents the number of currently stored elements.    Which of the following test cases, represented as sequences of events, achieves the highest level  of valid transitions coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Add, Remove, Add, Add, Add"
      },
      {
        "k": "b",
        "t": "B) Add, Add, Add, Add, Remove, Remove"
      },
      {
        "k": "c",
        "t": "C) Add, Add, Add, Remove, Remove"
      },
      {
        "k": "d",
        "t": "D) Add, Add, Add, Remove, Add"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nMột hệ thống lưu trữ có thể lưu trữ tối đa ba phần tử và được mô hình hóa bằng sơ đồ chuyển trạng thái sau. Biến N đại diện cho số phần tử hiện được lưu trữ.    test case (ca kiểm thử) nào sau đây, được biểu diễn dưới dạng chuỗi sự kiện, đạt được mức độ bao phủ chuyển tiếp hợp lệ cao nhất?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Thêm, xóa, thêm, thêm, thêm\n  B) Thêm, thêm, thêm, thêm, xóa, xóa\n  C) Thêm, thêm, thêm, xóa, xóa\n  D) Thêm, thêm, thêm, xóa, thêm\n\n💡 GIẢI THÍCH CHI TIẾT:\nChúng ta tham khảo các chuyển tiếp với E1, …, E5 như trong hình. Biến N biểu thị số phần tử hiện được lưu trữ. Mỗi sự kiện “Thêm” sẽ tăng nó lên 1 và mỗi sự kiện “Xóa” sẽ giảm nó đi 1. Lưu ý rằng khi sự kiện “Thêm” xảy ra khi ở trạng thái KHÔNG ĐẦY ĐỦ, trạng thái chỉ thay đổi thành ĐẦY ĐỦ nếu N=2. Nếu N<2, hệ thống vẫn ở trạng thái KHÔNG ĐẦY ĐỦ. Nếu N=0 thì không thể thực hiện được hành động “Xóa”. Tương tự, nếu N=3 thì không thể thực hiện được hành động “Thêm”.   Kiểm tra a) có thể được viết là E1, E3, E3, E2, E4 (bao gồm 4 trên 5 chuyển đổi hợp lệ, đạt được phạm vi chuyển tiếp hợp lệ 80%).   kiểm thử b) không khả thi vì sau ba hành động “Thêm” đầu tiên, hệ thống ở trạng thái ĐẦY ĐỦ và không có chuyển đổi hợp lệ nào chuyển từ ĐẦY ĐỦ được kích hoạt bởi sự kiện “Thêm”. Sau ba lần chuyển tiếp đầu tiên, chỉ đạt được 60% phạm vi chuyển tiếp hợp lệ.  Kiểm tra c) có thể được viết là E1, E2, E4, E5, E3 (bao gồm 5 trên 5 chuyển đổi hợp lệ, đạt được phạm vi chuyển tiếp hợp lệ 100%).   Kiểm tra d) có thể được viết là E1, E2, E4, E5, E4 (bao gồm 4 trên 5 chuyển đổi hợp lệ, đạt được phạm vi chuyển tiếp hợp lệ 80%).   Như vậy:\na) Không đúng\nb) Không đúng\nc) Đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-4.2.4 (K3)"
  },
  {
    "n": 24,
    "ref": "Question #24 [FL-4.3.1]",
    "stem": "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage  and test T2 achieved 65% statement coverage.  Which of the following sentences must be necessarily true?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test suite composed of tests T1 and T2 achieves 105% statement coverage"
      },
      {
        "k": "b",
        "t": "B) There exists at least one statement that must have been executed by both T1 and T2"
      },
      {
        "k": "c",
        "t": "C) At least 5% of the statements in the code that was tested are non-executable"
      },
      {
        "k": "d",
        "t": "D) The test suite composed of tests T1 and T2 achieves full branch coverage April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn chạy hai test case (ca kiểm thử) T1 và T2 trên cùng một mã. Bài kiểm tra T1 đạt được mức độ phủ câu lệnh (statement coverage) là 40% và bài kiểm tra T2 đạt được mức độ phủ câu lệnh (statement coverage) là 65%.  Câu nào sau đây nhất thiết phải đúng?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Test suite (bộ kiểm thử) bao gồm các bài kiểm thử T1 và T2 đạt được mức độ phủ câu lệnh (statement coverage) 105%\n  B) Tồn tại ít nhất một câu lệnh phải được thực thi bởi cả T1 và T2\n  C) Ít nhất 5% câu lệnh trong mã đã được kiểm tra là không thể thực thi được\n  D) Test suite (bộ kiểm thử) bao gồm các bài kiểm thử T1 và T2 đạt được phạm vi bao phủ toàn bộ nhánh 1 Tháng Tư, 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Phạm vi bao phủ luôn được định nghĩa là tỷ lệ phần trăm của các phần tử được bao phủ. Vì vậy, nó không thể vượt quá 100%\nb) Đúng. Nếu các câu lệnh do T1 và T2 thực thi không khớp nhau thì độ bao phủ của bộ kiểm thử {T1, T2} sẽ là 105%, điều này là không thể (xem câu trả lời a). Do đó, ít nhất 5% câu lệnh thực thi phải được thực thi bởi cả T1 và T2\nc) Không đúng. độ phủ câu lệnh (statement coverage) không cho chúng ta biết bất cứ điều gì về số lượng câu lệnh không thể thực thi trong mã\nđ) Không đúng. Ngay cả khi test suite (bộ kiểm thử) đạt được phạm vi bao phủ toàn bộ câu lệnh, điều này không có nghĩa là đạt được phạm vi bao phủ toàn bộ nhánh\n\n📌 Kiến thức: FL-4.3.1 (K2)"
  },
  {
    "n": 25,
    "ref": "Question #25 [FL-4.3.2]",
    "stem": "Let the branch coverage metric be defined as BCov = (X / Y) * 100%.  What do X and Y represent in this formula?",
    "opts": [
      {
        "k": "a",
        "t": "A) X = number of decision outcomes exercised by the test cases Y = total number of decision outcomes in the code"
      },
      {
        "k": "b",
        "t": "B) X = number of conditional branches exercised by the test cases Y = total number of branches in the code"
      },
      {
        "k": "c",
        "t": "C) X = number of branches exercised by the test cases Y = total number of branches in the code"
      },
      {
        "k": "d",
        "t": "D) X = number of conditional branches exercised by the test cases Y = total number of decision outcomes in the code"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nGiả sử chỉ số bao phủ nhánh được xác định là BCov = (X / Y) * 100%.  X và Y đại diện cho điều gì trong công thức này?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) X = số kết quả quyết định được thực hiện bởi các ca kiểm thử Y = tổng số kết quả quyết định trong mã\n  B) X = số nhánh có điều kiện được thực hiện bởi các ca kiểm thử Y = tổng số nhánh trong mã\n  C) X = số nhánh được thực hiện bởi các ca kiểm thử Y = tổng số nhánh trong mã\n  D) X = số nhánh điều kiện được thực hiện bởi các ca kiểm thử Y = tổng số kết quả quyết định trong mã\n\n💡 GIẢI THÍCH CHI TIẾT:\nKiểm thử nhánh là một kỹ thuật kiểm thử hộp trắng trong đó các mục bao phủ là các nhánh. Nhánh là sự chuyển giao quyền điều khiển giữa hai nút trong biểu đồ luồng điều khiển, biểu đồ này hiển thị các trình tự có thể có trong đó các câu lệnh mã nguồn được thực thi trong test object (đối tượng kiểm thử). Mỗi lần chuyển giao quyền kiểm soát có thể là vô điều kiện (tức là mã đường thẳng) hoặc có điều kiện (tức là kết quả quyết định). Độ bao phủ được đo bằng số nhánh được thực hiện bởi các test case (ca kiểm thử) chia cho tổng số nhánh và được biểu thị bằng phần trăm.  Như vậy:\na) Không đúng. Một kết quả quyết định là một nhánh có điều kiện. Đối với kiểm thử nhánh, X không chỉ đếm các nhánh có điều kiện mà còn cả các nhánh vô điều kiện\nb) Không đúng. độ phủ nhánh (branch coverage) không chỉ được tính có điều kiện mà còn bao gồm cả các chi nhánh vô điều kiện\nc) Đúng. Độ bao phủ của nhánh được đo bằng số nhánh được thực hiện bởi các test case (ca kiểm thử) chia cho tổng số nhánh và được biểu thị bằng phần trăm\nđ) Không đúng. Cả X và Y đều chỉ tính các nhánh có điều kiện và không tính đến các nhánh không điều kiện\n\n📌 Kiến thức: FL-4.3.2 (K2)"
  },
  {
    "n": 26,
    "ref": "Question #26 [FL-4.4.2]",
    "stem": "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers have not been allocated enough time for test design and test execution"
      },
      {
        "k": "b",
        "t": "B) The existing test strategy requires that testers use formal, black-box test techniques"
      },
      {
        "k": "c",
        "t": "C) The specification is written in a formal language that can be processed by a tool"
      },
      {
        "k": "d",
        "t": "D) Testers are the members of an agile team and have good programming skills"
      },
      {
        "k": "e",
        "t": "E) Testers are experienced in the business domain and have good analytical skills"
      }
    ],
    "ans": [
      "a",
      "e"
    ],
    "multi": true,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHAI câu nào sau đây cung cấp cơ sở lý luận TỐT NHẤT cho việc sử dụng kiểm thử thăm dò (exploratory testing)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Người kiểm thử chưa được phân bổ đủ thời gian để thiết kế kiểm thử và thực hiện kiểm thử\n  B) Chiến lược kiểm thử hiện tại yêu cầu người kiểm thử sử dụng các kỹ thuật kiểm thử hộp đen, chính thức.\n  C) Đặc tả được viết bằng ngôn ngữ hình thức có thể được xử lý bằng một công cụ\n  D) Người kiểm thử là thành viên của một nhóm linh hoạt và có kỹ năng lập trình tốt\n  E) Người kiểm thử có kinh nghiệm trong lĩnh vực kinh doanh và có kỹ năng phân tích tốt\n\n💡 GIẢI THÍCH CHI TIẾT:\nKiểm thử thăm dò (exploratory testing) rất hữu ích khi có ít hoặc không đầy đủ thông số kỹ thuật hoặc có áp lực đáng kể về thời gian đối với việc kiểm thử.  kiểm thử thăm dò (exploratory testing) cũng hữu ích để bổ sung cho các kỹ thuật kiểm thử (test technique) chính thức khác. kiểm thử thăm dò (exploratory testing) sẽ hiệu quả hơn nếu tester (kiểm thử viên) có kinh nghiệm, có kiến ​​thức về lĩnh vực và có trình độ cao về các kỹ năng cần thiết, như kỹ năng phân tích, tính tò mò và tính sáng tạo.  Như vậy:\na) Đúng. kiểm thử thăm dò (exploratory testing) rất hữu ích khi có ít hoặc không đầy đủ thông số kỹ thuật hoặc có áp lực đáng kể về thời gian đối với việc kiểm thử.\nb) Không đúng. Kiểm thử thăm dò không phải là kỹ thuật kiểm thử hộp đen\nc) Không đúng. kiểm thử thăm dò (exploratory testing) rất hữu ích khi các thông số kỹ thuật được viết kém\nđ) Không đúng. Về nguyên tắc, kỹ năng lập trình không liên quan gì đến kiểm thử thăm dò (exploratory testing)\nđ) Đúng. kiểm thử thăm dò (exploratory testing) sẽ hiệu quả hơn nếu tester (kiểm thử viên) có kinh nghiệm, có kiến ​​thức về lĩnh vực và có trình độ cao về các kỹ năng cần thiết, như kỹ năng phân tích, tính tò mò và tính sáng tạo.\n\n📌 Kiến thức: FL-4.4.2 (K2"
  },
  {
    "n": 27,
    "ref": "Question #27 [FL-4.4.3]",
    "stem": "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) “The developer made an error when implementing the code”"
      },
      {
        "k": "b",
        "t": "B) “The achieved statement coverage exceeds 85%”"
      },
      {
        "k": "c",
        "t": "C) “The program works correctly regarding functional and non-functional requirements”"
      },
      {
        "k": "d",
        "t": "D) “The error messages are written in language that the user can understand” April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào TỐT NHẤT sau đây phù hợp với tư cách là một thành phần của danh sách kiểm tra được sử dụng trong kiểm thử dựa trên danh sách kiểm tra?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) “Nhà phát triển đã mắc lỗi khi triển khai mã”\n  B) “Mức độ bao phủ của tuyên bố đạt được vượt quá 85%”\n  C) “Chương trình hoạt động chính xác theo các yêu cầu chức năng và phi chức năng”\n  D) “Thông báo lỗi được viết bằng ngôn ngữ mà người dùng có thể hiểu được” 01/04/2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Danh sách kiểm tra phải chứa các điều kiện kiểm tra để được xác minh.  Đây là một ví dụ về lỗi, không phải điều kiện kiểm tra; ngay cả khi người kiểm thử có thể suy ra một số điều kiện kiểm thử tiềm ẩn từ các ví dụ về lỗi thì mô tả lỗi này quá chung chung\nb) Không đúng. Danh sách kiểm tra không được chứa các mục phù hợp hơn làm tiêu chí đầu ra (exit criteria). Đây là một ví dụ về tiêu chí đầu ra (exit criteria)\nc) Không đúng. Danh sách kiểm tra không nên chứa các mục quá chung chung.  Đây là một mục rất chung chung, mô tả thực tế mục tiêu kiểm thử\nđ) Đúng. Đây là một ví dụ về điều kiện kiểm thử có thể được kiểm tra bởi con người\n\n📌 Kiến thức: FL-4.4.3 (K2)"
  },
  {
    "n": 28,
    "ref": "Question #28 [FL-4.5.2]",
    "stem": "Consider the following acceptance criteria for a user story written from the perspective of an online  store owner.  Given that the user is logged in and on the homepage,  When the user clicks on the \"Add Item\" button,  Then the \"Create Item\" form should appear,  And the user should be able to input a name and price for the new item.  In what format is this acceptance criteria written?",
    "opts": [
      {
        "k": "a",
        "t": "A) Rule-oriented"
      },
      {
        "k": "b",
        "t": "B) Scenario-oriented"
      },
      {
        "k": "c",
        "t": "C) Product-oriented"
      },
      {
        "k": "d",
        "t": "D) Process-oriented"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nHãy xem xét các tiêu chí chấp nhận sau đây đối với câu chuyện của người dùng được viết dưới góc nhìn của chủ cửa hàng trực tuyến.  Giả sử người dùng đã đăng nhập và trên trang chủ, Khi người dùng nhấp vào nút \"Thêm mặt hàng\", thì biểu mẫu \"Tạo mặt hàng\" sẽ xuất hiện và người dùng có thể nhập tên và giá cho mặt hàng mới.  Tiêu chí chấp nhận này được viết ở định dạng nào?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Định hướng quy tắc\n  B) Định hướng theo kịch bản\n  C) Định hướng sản phẩm\n  D) Định hướng quy trình\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Định dạng hướng đến quy tắc bao gồm các định dạng như danh sách xác minh dấu đầu dòng hoặc các dạng ánh xạ đầu vào-đầu ra được lập bảng, hiển thị rõ ràng các quy tắc cần tuân theo. Given/When/Then là định dạng hướng theo kịch bản vì nó mô tả một kịch bản cần được xác minh\nb) Đúng. Đây là định dạng Cho trước/Khi/Sau đó, định hướng theo kịch bản\nc) Không đúng. Không có định dạng tiêu chí chấp nhận \"định hướng sản phẩm\"\nđ) Không đúng. Không có định dạng tiêu chí chấp nhận \"theo định hướng quy trình\"\n\n📌 Kiến thức: FL-4.5.2 (K2)"
  },
  {
    "n": 29,
    "ref": "Question #29 [FL-4.5.3]",
    "stem": "Your team analyzes the following user story in order to define the acceptance criteria:   As a registered customer, I want to be able to view my previous orders on the  company's website, so that I can keep track of my purchases.  Which of the following test cases will NOT be relevant for this user story?",
    "opts": [
      {
        "k": "a",
        "t": "A) Input: the customer logs into their account on the website and clicks the “see order history” button Expected result: the system shows a list of all the customer’s previous orders, including the date, order number, and total cost"
      },
      {
        "k": "b",
        "t": "B) Input: the customer clicks on an order from the order list Expected result: the system displays the individual items purchased, along with their prices and quantities"
      },
      {
        "k": "c",
        "t": "C) Input: the customer clicks “Sort ascending” button on the order history screen Expected result: the system shows the order history sorted by order number in ascending order"
      },
      {
        "k": "d",
        "t": "D) Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database Expected result: the system accepts the registration and creates the account April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nNhóm của bạn phân tích câu chuyện của người dùng sau để xác định tiêu chí chấp nhận: Với tư cách là khách hàng đã đăng ký, tôi muốn có thể xem các đơn đặt hàng trước đây của mình trên trang web của công ty để có thể theo dõi các giao dịch mua hàng của mình.  test case (ca kiểm thử) nào sau đây KHÔNG liên quan đến câu chuyện của người dùng này?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Đầu vào: khách hàng đăng nhập tài khoản trên website và nhấn nút “xem lịch sử đơn hàng” Kết quả dự kiến: hệ thống hiển thị danh sách tất cả các đơn hàng trước đó của khách hàng, bao gồm ngày, mã đơn hàng, tổng chi phí\n  B) Đầu vào: khách hàng click vào đơn hàng trong danh sách đơn hàng. Kết quả mong đợi: hệ thống hiển thị từng mặt hàng đã mua kèm theo giá và số lượng\n  C) Đầu vào: khách hàng nhấn nút “Sắp xếp tăng dần” trên màn hình lịch sử đơn hàng Kết quả mong đợi: hệ thống hiển thị lịch sử đơn hàng sắp xếp theo mã đơn hàng theo thứ tự tăng dần\n  D) Đầu vào: một khách hàng chưa đăng ký đăng ký làm khách hàng mới với địa chỉ email hợp lệ chưa tồn tại trong cơ sở dữ liệu khách hàng Kết quả dự kiến: hệ thống chấp nhận đăng ký và tạo tài khoản 01/04/2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Test case liên quan đến việc xem các đơn hàng trước đó trong lịch sử đơn hàng\nb) Không đúng. test case (ca kiểm thử) có liên quan đến việc xem các đơn đặt hàng trước đó\nc) Không đúng. Test case liên quan đến việc xem các đơn hàng trước đó trong lịch sử đơn hàng\nđ) Đúng. test case (ca kiểm thử) liên quan đến quá trình đăng ký, điều này không được thảo luận trong câu chuyện của người dùng. Câu chuyện của người dùng là về việc xem các đơn đặt hàng trước đó\n\n📌 Kiến thức: FL-4.5.3 (K3)"
  },
  {
    "n": 30,
    "ref": "Question #30 [FL-5.1.3]",
    "stem": "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this  process are:  (1) Code development  (2) Submit code into a version control system and merge it into the “test” branch  (3) Perform component testing for the submitted code  Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
    "opts": [
      {
        "k": "a",
        "t": "A) Static analysis returns no high severity warnings for the submitted code"
      },
      {
        "k": "b",
        "t": "B) System version control reports no conflicts when merging code into the “test” branch"
      },
      {
        "k": "c",
        "t": "C) Component tests are compiled and ready to be executed"
      },
      {
        "k": "d",
        "t": "D) Statement coverage is at least 80%"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nNhóm của bạn tuân theo quy trình sử dụng quy trình phân phối DevOps. Ba bước đầu tiên của quy trình này là: (1) Phát triển mã (2) Gửi mã vào hệ thống kiểm soát phiên bản và hợp nhất nó vào nhánh “kiểm thử” (3) Thực hiện kiểm tra thành phần cho mã đã gửi Điều nào sau đây phù hợp nhất để làm tiêu chí đầu vào cho bước (2) của quy trình này?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Phân tích tĩnh không trả về cảnh báo có mức độ nghiêm trọng cao đối với mã đã gửi\n  B) Kiểm soát phiên bản hệ thống báo cáo không có xung đột khi hợp nhất mã vào nhánh “kiểm thử”\n  C) Kiểm tra thành phần được biên dịch và sẵn sàng để thực hiện\n  D) Mức độ bao phủ của tuyên bố ít nhất là 80%\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Đây là thứ có thể (và nên) được kiểm tra trước khi mã được gửi tới cơ quan kiểm soát phiên bản\nb) Không đúng. Đây là điều có thể được kiểm tra sau khi thực hiện bước (2), vì báo cáo xung đột hợp nhất có thể được thực hiện sau khi mã được gửi và hợp nhất\nc) Không đúng. Điều này phù hợp hơn khi làm tiêu chí đầu vào cho bước (3)\nđ) Không đúng. Điều này phù hợp hơn khi làm tiêu chí đầu ra (exit criteria) cho bước (3)\n\n📌 Kiến thức: FL-5.1.3 (K2)"
  },
  {
    "n": 31,
    "ref": "Question #31 [FL-5.1.4]",
    "stem": "You want to estimate the test effort for the new project using estimation based on ratios. You  calculate the test-to-development effort ratio using averaged data for both development effort and  test effort from four historical projects similar to the new one. The table shows this historical data.  Project  Development effort   ($)  Test effort   ($)  P1  800,000  40,000  P2  1,200,000  130,000  P3  600,000  70,000  P4  1,000,000  120,000  The estimated development effort for the new project is $800,000. What is your estimate of the test  effort in this project?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) $40,000"
      },
      {
        "k": "b",
        "t": "B) $80,000"
      },
      {
        "k": "c",
        "t": "C) $81,250"
      },
      {
        "k": "d",
        "t": "D) $82,500 April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn muốn ước tính nỗ lực kiểm thử cho dự án mới bằng cách sử dụng ước tính dựa trên các tỷ lệ. Bạn tính toán tỷ lệ nỗ lực kiểm thử trên phát triển bằng cách sử dụng dữ liệu trung bình cho cả nỗ lực phát triển và nỗ lực kiểm thử từ bốn dự án trước đây tương tự như dự án mới. Bảng này hiển thị dữ liệu lịch sử này.  Nỗ lực phát triển dự án ($) Nỗ lực kiểm thử ($) P1 800.000 40.000 P2 1.200.000 130.000 P3 600.000 70.000 P4 1.000.000 120.000 Nỗ lực phát triển ước tính cho dự án mới là 800.000 USD. Ước tính của bạn về nỗ lực kiểm thử trong dự án này là gì?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 40.000 USD\n  B) 80.000 USD\n  C) $81,250\n  D) $82,500 Ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nNỗ lực phát triển trung bình là 900.000 USD và nỗ lực kiểm thử trung bình là 90.000 USD (được tính từ bốn dự án).  Tỷ lệ nỗ lực kiểm thử và phát triển trung bình là 1:10 ($90.000: 900.000 USD), có nghĩa là về mặt lịch sử, nỗ lực kiểm thử trung bình là 10% nỗ lực phát triển.   Vì vậy, nếu nỗ lực phát triển được ước tính là 800.000 USD thì nỗ lực kiểm thử ước tính được ước tính là: 10% * 800.000 USD = 0,1 * 800.000 USD = 80.000 USD.   Như vậy:\na) Không đúng\nb) Đúng\nc) Không đúng\nđ) Không đúng\n\n📌 Kiến thức: FL-5.1.4 (K3)"
  },
  {
    "n": 32,
    "ref": "Question #32 [FL-5.1.5]",
    "stem": "You are testing a web application that allows users to SEARCH for products, VIEW product details,  ADD products to a shopping cart, and place an ORDER.   You have prepared the following seven test cases, all of which you want to execute. The tests  should be executed in the best order, based on test priority.    Test   Priority (1  = higher priority)  TC1  SEARCH for product A  4  TC2  SEARCH for product B  4  TC3  VIEW product A details  3  TC4  VIEW product B details  2  TC5  ADD product A to a shopping cart  3  TC6  ADD product B to a shopping cart  1  TC7  place an ORDER  5    You also identified the following logical dependencies between test cases:  •  SEARCH functionality must be tested before VIEW functionality can be tested.  •  VIEW functionality must be tested before ADD functionality.  •  ADD functionality must be tested before ORDER functionality.  Which test case should be executed as the fourth one?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) TC3"
      },
      {
        "k": "b",
        "t": "B) TC1"
      },
      {
        "k": "c",
        "t": "C) TC7"
      },
      {
        "k": "d",
        "t": "D) TC2"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang kiểm thử một ứng dụng web cho phép người dùng TÌM KIẾM sản phẩm, XEM chi tiết sản phẩm, THÊM sản phẩm vào giỏ hàng và đặt ĐẶT HÀNG.   Bạn đã chuẩn bị bảy trường hợp kiểm thử sau đây, tất cả đều muốn thực thi. các bài kiểm thử nên được thực hiện theo thứ tự tốt nhất, dựa trên mức độ ưu tiên của kiểm thử.    Ưu tiên kiểm tra (1 = mức độ ưu tiên cao hơn) TC1 TÌM KIẾM sản phẩm A 4 TC2 TÌM KIẾM sản phẩm B 4 TC3 XEM sản phẩm A chi tiết 3 TC4 XEM chi tiết sản phẩm B 2 TC5 THÊM sản phẩm A vào giỏ hàng 3 TC6 THÊM sản phẩm B vào giỏ hàng 1 TC7 đặt ĐẶT HÀNG 5 Bạn cũng đã xác định các phụ thuộc logic sau đây giữa các trường hợp kiểm thử: • Chức năng TÌM KIẾM phải được kiểm tra trước khi chức năng XEM có thể được kiểm tra.  • Chức năng VIEW phải được kiểm tra trước khi thực hiện chức năng THÊM.  • Chức năng THÊM phải được kiểm tra trước chức năng ĐẶT HÀNG.  test case (ca kiểm thử) nào nên được thực hiện như trường hợp thứ tư?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) TC3\n  B) TC1\n  C) TC7\n  D) TC2\n\n💡 GIẢI THÍCH CHI TIẾT:\nSự phụ thuộc logic có nghĩa là đối với mỗi sản phẩm, bạn phải chạy TÌM KIẾM → XEM → THÊM trước khi chạy ĐẶT HÀNG. Bạn có thể thêm nhiều sản phẩm hơn (sử dụng cùng một quy trình) trước khi chạy ĐẶT HÀNG.   Dựa trên điều này, TC1 hoặc TC2 phải được thực thi trước, nếu không thì không thể thực hiện được tiến trình nào.   Ưu tiên hàng đầu phải được dành cho XEM và THÊM sản phẩm B, vì các test case (ca kiểm thử) của nó (TC6, TC4) được chỉ định với mức độ ưu tiên cao hơn.  Vì vậy, 3 kiểm thử đầu tiên cần thực hiện là TC2 -> TC4 -> TC6 Bây giờ chúng ta cần xem xét nên chạy TC7 rồi chạy toàn bộ luồng cho sản phẩm A hay chạy TC cho sản phẩm A trước. Nếu TC7 có mức độ ưu tiên thấp hơn các bài kiểm tra khác thì chúng nên được kiểm tra trước.  Do đó, toàn bộ luồng phải là: TC2 -> TC4 -> TC6 -> TC1 -> TC3 -> TC5 -> TC"
  },
  {
    "n": 33,
    "ref": "Question #33 [FL-5.1.7]",
    "stem": "According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology  facing” and “support the team”)?",
    "opts": [
      {
        "k": "a",
        "t": "A) Usability testing"
      },
      {
        "k": "b",
        "t": "B) Functional testing"
      },
      {
        "k": "c",
        "t": "C) User acceptance testing"
      },
      {
        "k": "d",
        "t": "D) Component integration testing April 1, 2025"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nTheo mô hình tứ phân vị kiểm thử (testing quadrants), điều nào sau đây rơi vào góc phần tư Q1 (“đối mặt với công nghệ” và “hỗ trợ nhóm”)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Kiểm tra khả năng sử dụng\n  B) Kiểm tra chức năng\n  C) Kiểm tra sự chấp nhận của người dùng\n  D) Kiểm thử tích hợp (integration testing) thành phần Ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. kiểm thử khả năng sử dụng là kiểm thử mà doanh nghiệp phải đối mặt để phê bình sản phẩm (Q3)\nb) Không đúng. kiểm thử chức năng là kiểm thử đối mặt với doanh nghiệp (Q2)\nc) Không đúng. kiểm thử chấp nhận (acceptance testing) của người dùng là kiểm thử mà doanh nghiệp phải đối mặt để phê bình sản phẩm (Q3)\nđ) Đúng. Kiểm thử tích hợp thành phần là công nghệ kiểm thử hỗ trợ nhóm (hướng dẫn phát triển) (Q1)\n\n📌 Kiến thức: FL-5.1.7 (K2)"
  },
  {
    "n": 34,
    "ref": "Question #34 [FL-5.2.4]",
    "stem": "Given the following risks:  1. Ineffective loop implementation causes long system responses  2. Consumers change their preferences  3. Flooding of the server room  4. Patients above a certain age receive inaccurate reports    And the following mitigation activities:  A. Risk acceptance  B. Testing for performance efficiency  C. Using boundary value analysis as the test technique  D. Risk transfer    Which of the following BEST matches the risks with the mitigation activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1C,  2D,  3A,  4B"
      },
      {
        "k": "b",
        "t": "B) 1B,  2D,  3A,  4C"
      },
      {
        "k": "c",
        "t": "C) 1B,  2A,  3D,  4C"
      },
      {
        "k": "d",
        "t": "D) 1C,  2A,  3D,  4B"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nVới các rủi ro sau: 1. Việc triển khai vòng lặp không hiệu quả khiến hệ thống phản hồi lâu 2. Người tiêu dùng thay đổi sở thích của họ 3. Quá tải phòng máy chủ 4. Bệnh nhân trên một độ tuổi nhất định nhận được báo cáo không chính xác Và các hoạt động giảm thiểu sau đây: A. Chấp nhận rủi ro B. Kiểm tra hiệu suất hiệu suất C. Sử dụng phân tích giá trị biên làm kỹ thuật kiểm tra D. Chuyển giao rủi ro Điều nào sau đây TỐT NHẤT phù hợp với rủi ro với các hoạt động giảm thiểu?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 1C, 2D, 3A, 4B\n  B) 1B, 2D, 3A, 4C\n  C) 1B, 2A, 3D, 4C\n  D) 1C, 2A, 3D, 4B\n\n💡 GIẢI THÍCH CHI TIẾT:\nXem xét từng rủi ro được liệt kê và cách giảm thiểu chúng: 1. Phản hồi lâu dài của hệ thống (1) có thể được kiểm tra trong kiểm thử hiệu suất (B) 2. Những thay đổi trong sở thích của người tiêu dùng (2) thường nằm ngoài tầm kiểm soát của chúng tôi, vì vậy chúng tôi thường chấp nhận rủi ro này (A) 3. Lũ lụt trong phòng máy chủ (3) có thể gây ra tổn thất đáng kể, vì vậy chúng tôi nên chuyển rủi ro, ví dụ: bằng cách mua hợp đồng bảo hiểm (D) 4. Bệnh nhân trên một độ tuổi nhất định nhận được báo cáo không chính xác (4) gợi ý một vấn đề ranh giới tiềm ẩn, có thể là được phát hiện hiệu quả bằng các kỹ thuật xét nghiệm như BVA(C) Như vậy:\na) Không đúng\nb) Không đúng\nc) Đúng. Sự kết hợp chính xác giữa rủi ro và giảm thiểu là: 1B, 2A, 3D và 4C\nđ) Không đúng\n\n📌 Kiến thức: FL-5.2.4 (K2)"
  },
  {
    "n": 35,
    "ref": "Question #35 [FL-5.3.1]",
    "stem": "Which of the following is a product quality metric?",
    "opts": [
      {
        "k": "a",
        "t": "A) Mean time to failure"
      },
      {
        "k": "b",
        "t": "B) Number of defects found"
      },
      {
        "k": "c",
        "t": "C) Requirements coverage"
      },
      {
        "k": "d",
        "t": "D) Defect detection percentage"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây là thước đo chất lượng sản phẩm?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Thời gian trung bình để thất bại\n  B) Số lượng lỗi được tìm thấy\n  C) Phạm vi yêu cầu\n  D) Tỷ lệ phát hiện khiếm khuyết (defect)\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Các thước đo chất lượng sản phẩm đo lường các đặc tính chất lượng. Thời gian trung bình đến khi thất bại đo lường sự trưởng thành, vì vậy nó là thước đo chất lượng sản phẩm\nb) Không đúng. Đây là ví dụ về thước đo lỗi, không phải thước đo chất lượng sản phẩm\nc) Không đúng. Đây là ví dụ về số liệu mức độ phù hợp, không phải số liệu chất lượng sản phẩm\nđ) Không đúng. Đây là ví dụ về thước đo lỗi, không phải thước đo chất lượng sản phẩm\n\n📌 Kiến thức: FL-5.3.1 (K1)"
  },
  {
    "n": 36,
    "ref": "Question #36 [FL-5.3.3]",
    "stem": "You are a member of a test team located in North America, developing a product for a client  located in Europe. The team is agile and follows the DevOps approach and uses a continuous  integration/continuous delivery pipeline.  Which of the following is the LEAST effective way to communicate test progress to the customer?",
    "opts": [
      {
        "k": "a",
        "t": "A) Face-to-face"
      },
      {
        "k": "b",
        "t": "B) Dashboards"
      },
      {
        "k": "c",
        "t": "C) Email"
      },
      {
        "k": "d",
        "t": "D) Video conferencing April 1, 2025"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn là thành viên của nhóm kiểm thử ở Bắc Mỹ, đang phát triển sản phẩm cho một khách hàng ở Châu Âu. Nhóm rất nhanh nhẹn và tuân theo phương pháp DevOps cũng như sử dụng quy trình tích hợp liên tục/phân phối liên tục.  Cách nào sau đây là cách ÍT HIỆU QUẢ NHẤT để truyền đạt tiến độ kiểm tra tới khách hàng?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Mặt đối mặt\n  B) Trang tổng quan\n  C) Email\n  D) Hội nghị truyền hình ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Khách hàng ở một địa điểm và múi giờ khác nên có thể khó giao tiếp trực tiếp\nb) Không đúng. Bảng điều khiển thường có sẵn cho bất kỳ người dùng nào vào bất kỳ lúc nào, do đó, sự khác biệt về múi giờ sẽ không gây trở ngại nhiều cho việc giao tiếp như giao tiếp bằng lời nói, mặt đối mặt\nc) Không đúng. Mặc dù chênh lệch múi giờ giữa Châu Âu và Châu Mỹ là vài giờ và điều này có thể gây ra một số bất tiện nhưng chắc chắn nó không lớn bằng việc giao tiếp trực tiếp.\nđ) Không đúng. Các công cụ hội nghị truyền hình là một phương tiện liên lạc thuận tiện. Mặc dù giao tiếp giữa Châu Âu và Châu Mỹ trong giờ làm việc thường yêu cầu một bên kết nối vào rất sớm hoặc rất muộn, nhưng điều này không gây nhiều bất tiện như giao tiếp bằng lời nói, mặt đối mặt.\n\n📌 Kiến thức: FL-5.3.3 (K2)"
  },
  {
    "n": 37,
    "ref": "Question #37 [FL-5.4.1]",
    "stem": "Which of the following BEST describes an example of how configuration management (CM)  supports testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment"
      },
      {
        "k": "b",
        "t": "B) Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage"
      },
      {
        "k": "c",
        "t": "C) Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end"
      },
      {
        "k": "d",
        "t": "D) Having the version number of the test case, the CM tool can automatically generate test data for this test case"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây TỐT NHẤT mô tả ví dụ về cách quản lý cấu hình (CM) hỗ trợ kiểm thử?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Có số phiên bản của môi trường, công cụ CM có thể truy xuất số phiên bản của thư viện, sơ khai và trình điều khiển được sử dụng trong môi trường đó\n  B) Có bản ghi các giá trị đầu vào, công cụ CM có thể thực hiện các test case (ca kiểm thử) cho các cấu hình này và tính toán phạm vi bao phủ\n  C) Có dữ liệu về ngày mua giấy phép phần mềm, công cụ CM sẽ tự động tạo ra thông tin về việc giấy phép sản phẩm sắp hết hạn\n  D) Có số phiên bản của test case, công cụ CM có thể tự động tạo dữ liệu test cho test case này\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. Đối với một mục cấu hình phức tạp (ví dụ: môi trường kiểm thử), quản lý cấu hình (CM) ghi lại các mục mà nó bao gồm, mối quan hệ và phiên bản của chúng\nb) Không đúng. Công cụ CM không thực hiện các test case (ca kiểm thử) và không tính toán mức độ bao phủ\nc) Không đúng. Công cụ CM không phải là công cụ quản lý được cấp phép\nđ) Không đúng. Công cụ CM không tạo ra dữ liệu kiểm thử\n\n📌 Kiến thức: FL-5.4.1 (K2)"
  },
  {
    "n": 38,
    "ref": "Question #38 [FL-5.5.1]",
    "stem": "You are testing a sort function that gets a set of numbers as input and returns the same set of  numbers sorted in ascending order. The log from the test execution looks as follows.  Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5  Test run ID: 736  Start 12:43:21.003  12:43:21.003  Execution of TC1.  Input: 3.   Output: 3.   Result: passed  12:43:21.003  Execution of TC2.  Input: 3 11 6 5.   Output: 3 5 6 11.   Result: passed  12:43:21.004  Execution of TC3.  Input: 8 7 3 7 1.   Output: 1 3 7 8.   Result: failed  12:43:21.005  Execution of TC4.  Input: -2 -2 -2 -3 -3.  Output: -3 -2.   Result: failed  12:43:21.005  Execution of TC5.  Input: 0 -2 0 3 4 4.  Output: -2 0 3 4.   Result: failed  End 12:43:21.005  Total time of test cycle: 0:00:00.002  Which of the following provides the BEST description of the failure that can be used in a defect  report?",
    "opts": [
      {
        "k": "a",
        "t": "A) The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5."
      },
      {
        "k": "b",
        "t": "B) The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5."
      },
      {
        "k": "c",
        "t": "C) The system fails to sort negative numbers. Reference: TC4, TC5."
      },
      {
        "k": "d",
        "t": "D) TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected. April 1, 2025"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nBạn đang kiểm tra hàm sắp xếp lấy một tập hợp số làm đầu vào và trả về cùng một tập hợp số được sắp xếp theo thứ tự tăng dần. Nhật ký thực hiện kiểm tra trông như sau.  Cấu hình môi trường: hàm sắp xếp bản dựng 2.002.2182, bộ test case (ca kiểm thử): TCS-3, số TC: 5 ID chạy kiểm thử: 736 Bắt đầu 12:43:21.003 12:43:21.003 Thực thi TC1.  Đầu vào: 3. Đầu ra: 3. Kết quả: đạt 12:43:21.003 Thực thi TC2.  Đầu vào: 3 11 6 5. Đầu ra: 3 5 6 11. Kết quả: đạt 12:43:21.004 Thực thi TC3.  Đầu vào: 8 7 3 7 1. Đầu ra: 1 3 7 8. Kết quả: thất bại 12:43:21.005 Thực thi TC4.  Đầu vào: -2 -2 -2 -3 -3.  Đầu ra: -3 -2.   Kết quả: thất bại 12:43:21.005 Thực thi TC5.  Đầu vào: 0 -2 0 3 4 4. Đầu ra: -2 0 3 4. Kết quả: thất bại Kết thúc 12:43:21.005 Tổng thời gian của chu kỳ kiểm tra: 0:00:00.002 Điều nào sau đây cung cấp mô tả TỐT NHẤT về lỗi có thể được sử dụng trong báo cáo lỗi?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Hệ thống không thể sắp xếp một số bộ số. Tham khảo: TC3, TC4, TC5.\n  B) Hệ thống dường như bỏ qua các bản sao trong khi sắp xếp. Tham khảo: TC3, TC4, TC5.\n  C) Hệ thống không sắp xếp được số âm. Tham khảo: TC4, TC5.\n  D) TC3, TC4 và TC5 có khiếm khuyết (dữ liệu đầu vào trùng lặp) và cần được sửa chữa. Ngày 1 tháng 4 năm 2025\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Không đúng. Mặc dù câu này đúng nhưng nó không mang lại nhiều giá trị cho nhà phát triển\nb) Đúng. Từ kết quả kiểm tra, có vẻ như hệ thống sẽ bỏ qua các mục trùng lặp và sắp xếp danh sách mà không quan tâm đến các lần lặp lại. Đây có lẽ là nguyên nhân gây ra lỗi ở TC3, TC4, TC5. Thông tin như vậy có thể giúp nhà phát triển tìm ra lỗi và sửa lỗi hiệu quả hơn\nc) Không đúng. Hệ thống không thất bại trong việc sắp xếp các số âm.  Vấn đề nằm ở việc bỏ qua các bản sao\nđ) Không đúng. Các test case (ca kiểm thử) TC3, TC4 và TC5 đều thất bại nhưng chúng tôi không biết rằng các test case ("
  },
  {
    "n": 39,
    "ref": "Question #39 [FL-6.1.1]",
    "stem": "Given the following descriptions:  1. Support workflow tracking   2. Facilitate communication  3. Virtual machines  4. Support reviews    And the following test tool categories:  A. Static testing tools   B. Tools supporting scalability and deployment standardization  C. DevOps tools  D. Collaboration tools   Which of the following BEST matches the descriptions and categories?",
    "opts": [
      {
        "k": "a",
        "t": "A) 1A, 2B, 3C, 4D"
      },
      {
        "k": "b",
        "t": "B) 1B, 2D, 3C, 4A"
      },
      {
        "k": "c",
        "t": "C) 1C, 2D, 3B, 4A"
      },
      {
        "k": "d",
        "t": "D) 1D, 2C, 3A, 4B"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐưa ra các mô tả sau: 1. Hỗ trợ theo dõi quy trình làm việc 2. Tạo điều kiện giao tiếp 3. Máy ảo 4. Hỗ trợ đánh giá Và các danh mục công cụ kiểm tra sau: A. Công cụ kiểm tra tĩnh B. Công cụ hỗ trợ khả năng mở rộng và tiêu chuẩn hóa triển khai C. Công cụ DevOps D. Công cụ cộng tác Công cụ nào sau đây TỐT NHẤT phù hợp với mô tả và danh mục?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) 1A, 2B, 3C, 4D\n  B) 1B, 2D, 3C, 4A\n  C) 1C, 2D, 3B, 4A\n  D) 1D, 2C, 3A, 4B\n\n💡 GIẢI THÍCH CHI TIẾT:\nXem xét từng danh mục công cụ được liệt kê và mô tả của chúng: A. Công cụ kiểm tra tĩnh – hỗ trợ người kiểm tra thực hiện đánh giá và phân tích tĩnh (4) B. Các công cụ hỗ trợ khả năng mở rộng và tiêu chuẩn hóa triển khai – Ví dụ: máy ảo, công cụ chứa (3) C. Công cụ DevOps – hỗ trợ quy trình phân phối DevOps, theo dõi quy trình làm việc, (các) quy trình xây dựng tự động, tích hợp liên tục/phân phối liên tục (CI/CD) (1) D. Công cụ cộng tác – hỗ trợ giao tiếp (2) Do đó:\na) Không đúng\nb) Không đúng\nc) Đúng. Kết quả đúng là: 1C, 2D, 3B, 4A\nđ) Không đúng\n\n📌 Kiến thức: FL-6.1.1 (K2)"
  },
  {
    "n": 40,
    "ref": "Question #40 [FL-6.2.1]",
    "stem": "Which of the following is MOST likely to be a benefit of test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) It provides coverage measures that are too complicated for humans to derive"
      },
      {
        "k": "b",
        "t": "B) It shares responsibility for the testing with the tool vendor"
      },
      {
        "k": "c",
        "t": "C) It removes the need for critical thinking when analyzing test results"
      },
      {
        "k": "d",
        "t": "D) It generates test cases from an analysis of the program code"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "🇻🇳 DỊCH CÂU HỎI:\nĐiều nào sau đây có khả năng nhất là lợi ích của việc tự động hóa kiểm thử (test automation)?\n\n🇻🇳 DỊCH CÁC ĐÁP ÁN:\n  A) Nó cung cấp các biện pháp bao phủ quá phức tạp để con người có thể rút ra được\n  B) Nó chia sẻ trách nhiệm kiểm thử với nhà cung cấp công cụ\n  C) Nó loại bỏ nhu cầu tư duy phản biện khi phân tích kết quả kiểm tra\n  D) Nó tạo ra các test case (ca kiểm thử) từ việc phân tích mã chương trình\n\n💡 GIẢI THÍCH CHI TIẾT:\nA) Đúng. tự động hóa kiểm thử (test automation) có thể cung cấp các biện pháp quá phức tạp mà con người không thể rút ra được, chẳng hạn như các biện pháp bao phủ kiểm thử hộp trắng (white-box) cho tất cả trừ mã tầm thường nhất\nb) Không đúng. Bằng việc sử dụng công cụ kiểm thử, trách nhiệm về kiểm thử KHÔNG được chia sẻ với nhà cung cấp công cụ vì nhà cung cấp không tham gia vào kiểm thử và đó là trách nhiệm của người kiểm thử. Trách nhiệm duy nhất có thể được giao cho nhà cung cấp công cụ là nếu công cụ đó không hoạt động như mong đợi và cung cấp kết quả kiểm tra không chính xác.\nc) Không đúng. Người kiểm tra vẫn cần áp dụng tư duy phản biện khi phân tích những điểm bất thường trong kết quả kiểm tra để xác định nguyên nhân có thể xảy ra\nđ) Không đúng. Cả người kiểm thử và công cụ đều không thể tạo ra các trường hợp kiểm thử đơn giản từ việc phân tích mã chương trình vì mã là quá trình triển khai và không cung cấp thông tin về kết quả mong đợi, thông tin này sẽ cần đến từ một phần khác của cơ sở kiểm thử, chẳng hạn như đặc tả thiết kế.\n\n📌 Kiến thức: FL-6.2.1 (K1)"
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
