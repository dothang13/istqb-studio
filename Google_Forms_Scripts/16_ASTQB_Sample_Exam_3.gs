/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ASTQB Sample Exam #3 (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ASTQB Sample Exam #3 (40 câu chuẩn)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (40 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question 1 [FL-1.1.1]",
    "stem": "When the tester verifies the test basis while designing tests  early in the lifecycle, which test objective is being achieved?",
    "opts": [
      {
        "k": "a",
        "t": "A) Gaining confidence"
      },
      {
        "k": "b",
        "t": "B) Finding defects"
      },
      {
        "k": "c",
        "t": "C) Evaluating work products"
      },
      {
        "k": "d",
        "t": "D) Providing information for decision making"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKhi người kiểm thử xác minh cơ sở kiểm thử trong khi thiết kế kiểm thử sớm trong vòng đời, mục tiêu kiểm thử nào sẽ đạt được?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đạt được sự tự tin\n  B) Tìm khuyết điểm\n  C) Đánh giá sản phẩm công việc\n  D) Cung cấp thông tin cho việc ra quyết định\n\n[GIẢI THÍCH CHI TIẾT]\nC đúng theo giáo trình. Ba mục tiêu còn lại đạt được chủ yếu bằng cách thực thi kiểm thử động. Điều này hơi phức tạp vì bạn rất có thể tìm thấy những khiếm khuyết khi thực hiện phân tích này và điều này có thể dẫn đến việc đạt được hoặc phá hủy sự tự tin và cần cung cấp thông tin cho những người ra quyết định. Những gì đang diễn ra ở đây là việc đánh giá sản phẩm công việc, trong trường hợp này là các yêu cầu.\n\nTham chiếu: FL-1.1.1 (K1) Identify typical test  objectives"
  },
  {
    "n": 2,
    "ref": "Question 2 [FL-1.5.2]",
    "stem": "In some Agile teams, people are encouraged to use their skills  to help the team, regardless of their role. This could mean that  testers help the developers write code and developers help  testers test. What is this approach called?",
    "opts": [
      {
        "k": "a",
        "t": "A) Team Aid"
      },
      {
        "k": "b",
        "t": "B) Whole Team"
      },
      {
        "k": "c",
        "t": "C) Skills First"
      },
      {
        "k": "d",
        "t": "D) First Aid"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong một số nhóm Agile, mọi người được khuyến khích sử dụng các kỹ năng của mình để giúp đỡ nhóm, bất kể vai trò của họ là gì. Điều này có thể có nghĩa là tester (kiểm thử viên) giúp nhà phát triển viết mã và nhà phát triển giúp tester (kiểm thử viên) kiểm tra. Cách tiếp cận này được gọi là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hỗ trợ nhóm\n  B) Toàn đội\n  C) Kỹ năng đầu tiên\n  D) Sơ cứu\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Đây là một ví dụ về cách tiếp cận Toàn nhóm trong đó các thành viên trong nhóm tận dụng các kỹ năng của mình, bất kể vai trò, để hoàn thành các mục tiêu của nhóm.\n\nTham chiếu: FL-1.5.2 (K1) Recall the advantages of the whole  team approach"
  },
  {
    "n": 3,
    "ref": "Question 3 [FL-1.2.3]",
    "stem": "Which of the following is a correct statement?",
    "opts": [
      {
        "k": "a",
        "t": "A) A developer makes a mistake which causes a defect that may be seen as a failure during dynamic testing"
      },
      {
        "k": "b",
        "t": "B) A developer makes an error which results in a failure that may be seen as a fault when the software is executed"
      },
      {
        "k": "c",
        "t": "C) A developer has introduced a failure which results in a defect that may be seen as a mistake during dynamic testing"
      },
      {
        "k": "d",
        "t": "D) A developer makes a mistake which causes a bug that may be seen as a defect when the software is executed"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nPhát biểu nào sau đây là đúng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhà phát triển mắc lỗi gây ra lỗi có thể được coi là lỗi trong quá trình kiểm thử động\n  B) Nhà phát triển mắc lỗi dẫn đến lỗi có thể được coi là lỗi khi phần mềm được thực thi\n  C) Nhà phát triển đã đưa ra lỗi dẫn đến lỗi có thể được coi là lỗi trong quá trình kiểm thử động\n  D) Nhà phát triển mắc lỗi gây ra lỗi có thể được coi là lỗi khi phần mềm được thực thi\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Nhà phát triển mắc lỗi/lỗi gây ra lỗi/lỗi/lỗi có thể gây ra lỗi khi mã được kiểm tra hoặc thực thi động. B sai vì lỗi và hư hỏng bị đảo ngược. C sai vì lỗi và lỗi bị đảo ngược. D không chính xác vì đó là một lỗi được nhìn thấy trong quá trình thực thi chứ không phải lỗi đó. Sự thất bại là một triệu chứng của khiếm khuyết.\n\nTham chiếu: FL-1.2.3 (K2) Distinguish between root cause, error, defect, and failure"
  },
  {
    "n": 4,
    "ref": "Question 4 [FL-1.3.1]",
    "stem": "Why is it important to avoid the principle of tests wearing out?",
    "opts": [
      {
        "k": "a",
        "t": "A) Dynamic testing is less reliable in finding bugs"
      },
      {
        "k": "b",
        "t": "B) Running the same tests repeatedly will consistently find new failures"
      },
      {
        "k": "c",
        "t": "C) Tests should not be context dependent"
      },
      {
        "k": "d",
        "t": "D) Running the same tests repeatedly will reduce the chance of finding new failures"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTại sao điều quan trọng là phải tránh nguyên tắc kiểm thử hao mòn?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm thử động kém tin cậy hơn trong việc tìm lỗi\n  B) Chạy các bài kiểm thử giống nhau nhiều lần sẽ liên tục tìm thấy những lỗi mới\n  C) Các bài kiểm thử không nên phụ thuộc vào ngữ cảnh\n  D) Chạy các bài kiểm thử giống nhau nhiều lần sẽ làm giảm cơ hội tìm ra lỗi mới\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Khi các bài kiểm tra được chạy lặp đi lặp lại, các bài kiểm tra sẽ trở nên kém hiệu quả hơn. A không đúng vì nên sử dụng kiểm thử động (dynamic testing) và giúp giảm bớt sự hao mòn của kiểm thử.\n\nB là không đúng. Các bài kiểm tra tương tự sẽ bị hao mòn. C không đúng vì việc kiểm tra phải phụ thuộc vào ngữ cảnh.\n\nTham chiếu: FL-1.3.1 (K2) Explain the seven testing principles."
  },
  {
    "n": 5,
    "ref": "Question 5 [FL-1.4.1]",
    "stem": "When following a standard test process, when should the test  control activity take place?",
    "opts": [
      {
        "k": "a",
        "t": "A) During the planning activities"
      },
      {
        "k": "b",
        "t": "B) During the implementation and execution activities"
      },
      {
        "k": "c",
        "t": "C) During the monitoring activities"
      },
      {
        "k": "d",
        "t": "D) During all the activities"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKhi tuân theo quy trình kiểm tra tiêu chuẩn, khi nào hoạt động kiểm soát kiểm tra nên diễn ra?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Trong hoạt động lập kế hoạch\n  B) Trong quá trình triển khai và thực hiện các hoạt động\n  C) Trong các hoạt động giám sát\n  D) Trong mọi hoạt động\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Kiểm soát xảy ra trong suốt dự án để đảm bảo rằng nó đi đúng hướng dựa trên kế hoạch và thực hiện bất kỳ bước khắc phục nào có thể cần thiết. Thông tin giám sát được sử dụng để xác định xem có cần thực hiện các hành động kiểm soát hay không.\n\nTham chiếu: FL-1.4.1 (K2) Explain the different test activities and related tasks"
  },
  {
    "n": 6,
    "ref": "Question 6 [FL-1.4.1]",
    "stem": "Which of the following is the activity that compares the  planned test progress to the actual test progress?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test monitoring"
      },
      {
        "k": "b",
        "t": "B) Test planning"
      },
      {
        "k": "c",
        "t": "C) Test closure"
      },
      {
        "k": "d",
        "t": "D) Test control"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHoạt động nào sau đây so sánh tiến độ kiểm thử theo kế hoạch với tiến độ kiểm thử thực tế?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Giám sát kiểm tra\n  B) Lập kế hoạch kiểm tra\n  C) Kết thúc kiểm thử\n  D) Kiểm soát kiểm thử\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Giám sát kiểm thử bao gồm việc so sánh liên tục tiến độ thực tế với kế hoạch kiểm thử. B sai vì nó xác định mục tiêu kiểm thử.\n\nC sai vì các hoạt động đã hoàn thành và dự án sắp kết thúc. D sai vì kiểm soát kiểm tra là khi bạn thực hiện các hành động để khắc phục bất kỳ vấn đề nào được phát hiện trong quá trình giám sát.\n\nTham chiếu: FL-1.4.1 (K2) Explain the different test activities and related tasks"
  },
  {
    "n": 7,
    "ref": "Question 7 [FL-1.4.2]",
    "stem": "You are working on a project that is constrained by time and  budget, which is pressuring testing to be done quickly. How  should the test approach be adjusted?",
    "opts": [
      {
        "k": "a",
        "t": "A) Develop detailed test cases to reduce the test automation effort"
      },
      {
        "k": "b",
        "t": "B) Use techniques such as exploratory and checklist testing to spend less time on test case development"
      },
      {
        "k": "c",
        "t": "C) Ensure that your testing starts only after the developers have completed integration tests"
      },
      {
        "k": "d",
        "t": "D) Develop end-to-end test automation before performing manual testing so the automation can be used sooner"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang thực hiện một dự án bị hạn chế về thời gian và ngân sách, điều này đang gây áp lực buộc việc kiểm tra phải được thực hiện nhanh chóng. cách tiếp cận kiểm thử nên được điều chỉnh như thế nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phát triển các test case (ca kiểm thử) chi tiết để giảm nỗ lực tự động hóa kiểm thử (test automation)\n  B) Sử dụng các kỹ thuật như kiểm tra thăm dò và kiểm tra danh sách kiểm tra để dành ít thời gian hơn cho việc phát triển trường hợp kiểm thử\n  C) Đảm bảo rằng kiểm thử của bạn chỉ bắt đầu sau khi nhà phát triển đã hoàn thành kiểm thử tích hợp (integration testing)\n  D) Phát triển tự động hóa kiểm thử (test automation) từ đầu đến cuối trước khi thực thi kiểm thử thủ công để có thể sử dụng tự động hóa sớm hơn\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Những kỹ thuật này sẽ giúp điều chỉnh phù hợp với bối cảnh dự án nơi có áp lực phải kiểm tra nhanh chóng. Đây là những phương pháp đơn giản, yêu cầu ít thời gian chuẩn bị tài liệu hơn và cho phép thực hiện kiểm thử bắt đầu sớm hơn. A không đúng vì việc phát triển các ca kiểm thử chi tiết sẽ mất nhiều thời gian. C không đúng vì bắt đầu kiểm thử sớm hơn sẽ hữu ích chứ không phải muộn hơn. D không đúng vì đây sẽ là vấn đề tự động hóa và các máy tự động hóa sẽ bị chậm lại do những lỗi có thể được phát hiện trong quá trình kiểm thử thủ công.\n\nTham chiếu: FL-1.4.2 (K2) Explain the impact of context on the test process"
  },
  {
    "n": 8,
    "ref": "Question 8 [FL-1.5.3]",
    "stem": "What is the biggest problem with a developer testing his own  code?",
    "opts": [
      {
        "k": "a",
        "t": "A) Developers are not good testers"
      },
      {
        "k": "b",
        "t": "B) Developers are not quality focused"
      },
      {
        "k": "c",
        "t": "C) Developers are not objective about their own code"
      },
      {
        "k": "d",
        "t": "D) Developers do not have time to test their own code"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nVấn đề lớn nhất khi một nhà phát triển kiểm thử mã của chính mình là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhà phát triển không phải là tester (kiểm thử viên) giỏi\n  B) Các nhà phát triển không tập trung vào chất lượng\n  C) Các nhà phát triển không khách quan về mã của riêng họ\n  D) Các nhà phát triển không có thời gian để kiểm tra mã của riêng họ\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Đây là vấn đề lớn nhất vì các nhà phát triển có thành kiến ​​về độ chính xác và cách triển khai mã của riêng họ. tester (kiểm thử viên) và nhà phát triển nghĩ khác nhau và tester (kiểm thử viên) có thể khách quan hơn vì họ không đầu tư vào mã. A và B không nhất thiết đúng – một số nhà phát triển là tester (kiểm thử viên) giỏi và có chất lượng tập trung tốt. D không đúng vì kiểm thử đơn vị là một phần công việc của họ và thời gian nên được đưa vào lịch trình cho ít nhất là kiểm thử đơn vị.\n\nTham chiếu: FL-1.5.3 (K2) Distinguish the benefits and drawbacks of independence  of testing"
  },
  {
    "n": 9,
    "ref": "Question 9 [FL-2.1.2]",
    "stem": "Which of the following is an example of a good testing practice?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers should have development experience"
      },
      {
        "k": "b",
        "t": "B) Developers should determine the order of test execution in the test procedures"
      },
      {
        "k": "c",
        "t": "C) Test design should begin when the code is complete to avoid changes"
      },
      {
        "k": "d",
        "t": "D) Testers should review requirements documents as soon as a readable draft is available"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là ví dụ về phương pháp kiểm thử tốt?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người kiểm thử phải có kinh nghiệm phát triển\n  B) Nhà phát triển nên xác định thứ tự thực hiện kiểm thử trong quy trình kiểm thử\n  C) Thiết kế kiểm thử nên bắt đầu khi mã hoàn tất để tránh thay đổi\n  D) Người kiểm tra nên xem xét các tài liệu yêu cầu ngay khi có bản nháp có thể đọc được\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Đây là một thực hành kiểm thử tốt. A không phải là một yêu cầu đối với nhiều tester (kiểm thử viên). B không đúng vì điều này phải được người kiểm thử xác định dựa trên mức độ ưu tiên, rủi ro, tính khả dụng, v.v. C không đúng vì thiết kế kiểm thử phải bắt đầu trong quá trình thiết kế và triển khai mã.\n\nTham chiếu: FL-2.1.2 (K1) Recall good testing practices that apply to all software  development lifecycles"
  },
  {
    "n": 10,
    "ref": "Question 10 [FL-2.1.3]",
    "stem": "When coding is directed by the test cases, what development  approach is being used?",
    "opts": [
      {
        "k": "a",
        "t": "A) TDD"
      },
      {
        "k": "b",
        "t": "B) BDD"
      },
      {
        "k": "c",
        "t": "C) ATDD"
      },
      {
        "k": "d",
        "t": "D) TBD"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKhi mã hóa được chỉ đạo bởi các test case (ca kiểm thử), phương pháp phát triển nào đang được sử dụng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) TDD\n  B) BDD\n  C) ATDD\n  D) TBD\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Đây là một ví dụ về phát triển dựa trên kiểm thử.\n\nTham chiếu: FL-2.1.3 (K1) Recall the examples of test-first approaches to  development"
  },
  {
    "n": 11,
    "ref": "Question 11 [FL-2.2.1]",
    "stem": "During which level(s) of testing should non-functional tests be  executed?",
    "opts": [
      {
        "k": "a",
        "t": "A) Unit and integration only"
      },
      {
        "k": "b",
        "t": "B) System testing only"
      },
      {
        "k": "c",
        "t": "C) Integration, system and acceptance only"
      },
      {
        "k": "d",
        "t": "D) Unit, integration, system and acceptance only"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKiểm thử phi chức năng nên được thực hiện ở (những) cấp độ kiểm thử nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Chỉ đơn vị và tích hợp\n  B) Chỉ kiểm tra hệ thống\n  C) Chỉ tích hợp, hệ thống và chấp nhận\n  D) Đơn vị, tích hợp, hệ thống và chỉ chấp nhận\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Kiểm thử phi chức năng có thể và nên được thực hiện ở mọi cấp độ kiểm thử.\n\nTham chiếu: FL-2.2.1 (K2) Distinguish the different test levels"
  },
  {
    "n": 12,
    "ref": "Question 12 [FL-2.3.1]",
    "stem": "When a system is targeted for decommissioning, what type of  maintenance testing may be required?",
    "opts": [
      {
        "k": "a",
        "t": "A) Retirement testing"
      },
      {
        "k": "b",
        "t": "B) Regression testing"
      },
      {
        "k": "c",
        "t": "C) Data migration testing"
      },
      {
        "k": "d",
        "t": "D) Patch testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKhi một hệ thống được dự định ngừng hoạt động, loại kiểm thử (test type) bảo trì nào có thể được yêu cầu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra nghỉ hưu\n  B) Kiểm tra hồi quy\n  C) Kiểm tra di chuyển dữ liệu\n  D) Kiểm tra bản vá\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng, theo giáo trình. Có thể cần phải di chuyển dữ liệu sang hệ thống khác hoặc di chuyển dữ liệu sang hệ thống lưu trữ. A là không chính xác.  Đây có thể là yếu tố kích hoạt kiểm thử bảo trì (maintenance testing), nhưng nó không phải là một loại kiểm thử (test type) thực tế. B không đúng vì điều này phù hợp hơn với hệ thống hiện tại chứ không phải hệ thống sắp ngừng hoạt động. D không chính xác vì điều này không có tác dụng gì đối với hệ thống đã ngừng hoạt động.\n\nTham chiếu: FL-2.3.1 (K2) Summarize maintenance testing and its triggers"
  },
  {
    "n": 13,
    "ref": "Question 13 [FL-2.1.1]",
    "stem": "In an iterative lifecycle model, which of the following is an  accurate statement about testing activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) For every development activity, there should be a corresponding testing activity"
      },
      {
        "k": "b",
        "t": "B) For every testing activity, appropriate documentation should be produced, versioned and stored"
      },
      {
        "k": "c",
        "t": "C) For every development activity resulting in code, there should be a testing activity to document test cases"
      },
      {
        "k": "d",
        "t": "D) For every testing activity, metrics should be recorded and posted to a metrics dashboard for all stakeholders"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong mô hình vòng đời lặp lại, phát biểu nào sau đây là chính xác về hoạt động kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đối với mỗi hoạt động phát triển cần có hoạt động kiểm thử tương ứng\n  B) Đối với mọi hoạt động kiểm thử, tài liệu thích hợp phải được tạo, phiên bản và lưu trữ\n  C) Đối với mọi hoạt động phát triển tạo ra mã, cần có hoạt động kiểm thử để ghi lại các trường hợp kiểm thử\n  D) Đối với mọi hoạt động kiểm thử, số liệu phải được ghi lại và đăng lên bảng điều khiển số liệu cho tất cả các bên liên quan\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Đối với bất kỳ mô hình vòng đời nào, đây là một tuyên bố đúng. B không đúng vì một số hoạt động kiểm thử có thể không tạo ra tài liệu, chẳng hạn như các bài đánh giá. C không đúng vì các trường hợp kiểm thử không phải lúc nào cũng được viết, đặc biệt là trong vòng đời Agile (là vòng đời lặp lại), trong đó chỉ có thể sử dụng kiểm thử thăm dò (exploratory testing). D không đúng vì không phải tất cả các hoạt động kiểm thử đều tạo ra các số liệu (chẳng hạn như tạo test case (ca kiểm thử), đánh giá, v.v.) và ngay cả khi chúng làm như vậy thì không phải tất cả các bên liên quan đều quan tâm đến các số liệu đó.\n\nTham chiếu: FL-2.1.1 (K2) Explain the impact of the chosen software development  lifecycle on testing"
  },
  {
    "n": 14,
    "ref": "Question 14 [FL-2.1.5]",
    "stem": "In what way is CI/CD an example of the concept of shift-left?",
    "opts": [
      {
        "k": "a",
        "t": "A) It gets the code to production faster"
      },
      {
        "k": "b",
        "t": "B) It allows the developers to continuously integrate their code"
      },
      {
        "k": "c",
        "t": "C) It requires continuous testing throughout the pipeline"
      },
      {
        "k": "d",
        "t": "D) It elevates the testers as the owners of quality"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCI/CD là một ví dụ về khái niệm shift-left theo cách nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nó nhận được mã để sản xuất nhanh hơn\n  B) Nó cho phép các nhà phát triển liên tục tích hợp mã của họ\n  C) Nó yêu cầu kiểm thử liên tục trong toàn bộ đường ống\n  D) Nó nâng cao những tester (kiểm thử viên) như những người sở hữu chất lượng\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. CI/CD yêu cầu kiểm thử liên tục, bao gồm cả tự động hóa kiểm thử (test automation), phải được triển khai cho toàn bộ quy trình. Việc này sẽ bắt đầu kiểm thử càng sớm càng tốt và chuyển nó sang bên trái trong dòng thời gian. A không đúng vì đây không phải là khái niệm dịch chuyển sang trái. B đúng với việc triển khai CI/CD nhưng không chuyển sang trái kiểm thử. D không đúng vì khi triển khai CI/CD tốt, mọi người đều sở hữu chất lượng.\n\nTham chiếu: FL-2.1.5 (K2) EExplain shift-left"
  },
  {
    "n": 15,
    "ref": "Question 15 [FL-3.2.3]",
    "stem": "In a formal review, which role is normally responsible for  documenting all the open issues?",
    "opts": [
      {
        "k": "a",
        "t": "A) The facilitator"
      },
      {
        "k": "b",
        "t": "B) The author"
      },
      {
        "k": "c",
        "t": "C) The scribe"
      },
      {
        "k": "d",
        "t": "D) The manager"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong một cuộc rà soát chính thức, vai trò nào thường chịu trách nhiệm ghi lại tất cả các vấn đề còn tồn tại?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người hướng dẫn\n  B) Tác giả\n  C) Người ghi chép\n  D) Người quản lý\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Người ghi chép thường chịu trách nhiệm ghi lại tất cả các vấn đề, vấn đề và điểm mở. Tác giả cũng có thể ghi chép, nhưng đó không phải là vai trò chính của họ.\n\nTham chiếu: FL-3.2.3 (K1) Recall which  responsibilities are assigned to the principal roles when performing  reviews"
  },
  {
    "n": 16,
    "ref": "Question 16 [FL-3.2.1]",
    "stem": "What is the primary reason to get early and frequent feedback  from stakeholders regarding a product being developed?",
    "opts": [
      {
        "k": "a",
        "t": "A) To make them feel involved"
      },
      {
        "k": "b",
        "t": "B) To ensure that their vision for the product will be realized"
      },
      {
        "k": "c",
        "t": "C) To create more meetings"
      },
      {
        "k": "d",
        "t": "D) To use the stakeholders as testers"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLý do chính để nhận được phản hồi sớm và thường xuyên từ các bên liên quan về sản phẩm đang được phát triển là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Để họ cảm thấy được tham gia\n  B) Để đảm bảo rằng tầm nhìn của họ về sản phẩm sẽ được hiện thực hóa\n  C) Để tạo thêm cuộc họp\n  D) Sử dụng các bên liên quan làm tester (kiểm thử viên)\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng theo giáo trình. Bằng cách nhận được phản hồi của họ, nhóm có thể đảm bảo rằng những gì họ đang xây dựng là những gì các bên liên quan mong muốn. A không đúng vì mặc dù việc họ cảm thấy mình là một phần của nhóm có thể có ích nhưng đó không phải là lý do chính để nhận phản hồi của họ. C không đúng vì không ai cần họp thêm nữa. D không đúng mặc dù các bên liên quan có thể được sử dụng cho UAT. Phản hồi của họ là cần thiết sớm hơn nhiều so với UAT.\n\nTham chiếu: FL-3.2.1 (K1) Identify the benefits of early and frequent stakeholder  feedback"
  },
  {
    "n": 17,
    "ref": "Question 17 [FL-3.1.2]",
    "stem": "Which of the following is a benefit of static analysis?",
    "opts": [
      {
        "k": "a",
        "t": "A) Defects can be identified that might not be caught by dynamic testing"
      },
      {
        "k": "b",
        "t": "B) Early defect identification requires less documentation"
      },
      {
        "k": "c",
        "t": "C) Early execution of the code provides a gauge of code quality"
      },
      {
        "k": "d",
        "t": "D) Tools are not needed because reviews are used instead of executing code"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là lợi ích của phân tích tĩnh?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các lỗi có thể được xác định mà kiểm thử động (dynamic testing) không thể phát hiện được\n  B) Xác định lỗi sớm yêu cầu ít tài liệu hơn\n  C) Việc thực thi mã sớm cung cấp thước đo về chất lượng mã\n  D) Không cần công cụ vì việc đánh giá được sử dụng thay vì thực thi mã\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng, theo giáo trình. Phân tích tĩnh bằng máy phân tích tĩnh có thể được sử dụng để tìm ra các lỗi như các biến chưa được khởi tạo có thể khó phát hiện bằng kiểm thử động (dynamic testing). B không chính xác vì các lỗi vẫn cần được ghi lại bất kể chúng được tìm thấy sớm như thế nào. C sai vì đây là phân tích động. D sai vì phân tích tĩnh thường yêu cầu sử dụng các công cụ.\n\nTham chiếu: FL-3.1.2 (K2) Explain the value of static testing"
  },
  {
    "n": 18,
    "ref": "Question 18 [FL-3.2.2]",
    "stem": "For a formal review, at what point in the process are the exit  criteria defined?",
    "opts": [
      {
        "k": "a",
        "t": "A) Planning"
      },
      {
        "k": "b",
        "t": "B) Review initiation"
      },
      {
        "k": "c",
        "t": "C) Individual review"
      },
      {
        "k": "d",
        "t": "D) Fixing and reporting"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐối với một cuộc đánh giá chính thức, tiêu chí cuối cùng được xác định ở thời điểm nào trong quy trình?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Quy hoạch\n  B) Bắt đầu xem xét\n  C) Đánh giá cá nhân\n  D) Sửa chữa và báo cáo\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Các tiêu chí đầu vào và đầu ra cần được xác định trong bước lập kế hoạch trong quá trình xem xét. Những điều này cần được đánh giá ở mỗi bước để đảm bảo sản phẩm đã sẵn sàng cho bước tiếp theo trong quy trình. B, C và D không đúng vì ở điểm này các tiêu chí đã được xác định rồi.\n\nTham chiếu: FL-3.2.2 (K2) Summarize the activities of the review process"
  },
  {
    "n": 19,
    "ref": "Question 19 [FL-4.1.1]",
    "stem": "Which of the following test techniques uses the requirements  specifications as a test basis?",
    "opts": [
      {
        "k": "a",
        "t": "A) Structure-based"
      },
      {
        "k": "b",
        "t": "B) Black-box"
      },
      {
        "k": "c",
        "t": "C) White-box"
      },
      {
        "k": "d",
        "t": "D) Exploratory"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKỹ thuật kiểm thử nào sau đây sử dụng các đặc tả yêu cầu làm cơ sở kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Dựa trên cấu trúc\n  B) Hộp đen\n  C) Hộp trắng\n  D) Khám phá\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng, theo giáo trình. Kiểm thử hộp đen dựa trên các tài liệu yêu cầu. A và C không đúng vì chúng sử dụng cấu trúc của phần mềm làm cơ sở kiểm thử. D sai vì kiểm thử thăm dò thường được thực hiện khi không có thông số kỹ thuật, do đó mang lại cho người kiểm thử cơ hội tìm hiểu về phần mềm trong khi kiểm thử.\n\nTham chiếu: FL-4.1.1 (K2) Distinguish black-box, white-box, and experience-based  test techniques"
  },
  {
    "n": 20,
    "ref": "Question 20 [FL-4.3.2]",
    "stem": "If you are testing a module of code, how do you determine the  level of branch coverage you have achieved?",
    "opts": [
      {
        "k": "a",
        "t": "A) By taking the number of branches you have tested and dividing that by the total number of executable statements in the module"
      },
      {
        "k": "b",
        "t": "B) By taking the number of branches you have tested and dividing that by the total number of branches in the module"
      },
      {
        "k": "c",
        "t": "C) By taking the number of branches you have tested and dividing that by the total lines of code in the module"
      },
      {
        "k": "d",
        "t": "D) By taking the number of branches you have tested and dividing that by the total number of test cases you have executed for the module"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNếu bạn đang kiểm thử một mô-đun mã, làm cách nào để xác định mức độ phủ nhánh (branch coverage) mà bạn đã đạt được?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Bằng cách lấy số nhánh bạn đã kiểm tra và chia cho tổng số câu lệnh thực thi trong mô-đun\n  B) Bằng cách lấy số nhánh bạn đã kiểm tra và chia cho tổng số nhánh trong mô-đun\n  C) Bằng cách lấy số nhánh bạn đã kiểm tra và chia cho tổng số dòng mã trong mô-đun\n  D) Bằng cách lấy số nhánh bạn đã kiểm tra và chia cho tổng số trường hợp kiểm thử bạn đã thực hiện cho mô-đun\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Phạm vi nhánh xem xét số lượng nhánh được kiểm tra so với số lượng nhánh trong mã đang được kiểm tra.\n\nTham chiếu: FL-4.3.2 (K2) Explain branch testing"
  },
  {
    "n": 21,
    "ref": "Question 21 [FL-4.3.2]",
    "stem": "If you have a section of code that has one simple IF statement,  how many tests will be needed to achieve 100% branch  coverage?",
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
        "t": "C) 5"
      },
      {
        "k": "d",
        "t": "D) Unknown with this information"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNếu bạn có một đoạn mã có một câu lệnh IF đơn giản, thì cần bao nhiêu lần kiểm tra để đạt được độ bao phủ 100% chi nhánh?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1\n  B) 2\n  C) 5\n  D) Không xác định với thông tin này\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Một câu lệnh IF đơn giản sẽ bao gồm If ... then ... else end if. Có hai kết quả nhánh, một cho kết quả của If là đúng và một cho kết quả của If là sai. Vì phạm vi bao phủ 100% nhánh yêu cầu ít nhất một test case (ca kiểm thử) cho mỗi kết quả của nhánh nên cần có hai kiểm thử. A và C sai vì đây là số lần kiểm tra sai. D sẽ đúng nếu điều này không được định nghĩa là một câu lệnh if đơn giản vì một câu lệnh if phức tạp có thể bao gồm nhiều hơn hai kết quả.\n\nTham chiếu: FL-4.3.2 (K2) Explain branch testing"
  },
  {
    "n": 22,
    "ref": "Question 22 [FL-4.4.2]",
    "stem": "Which of the following is a good reason to use experience-based  testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) You can find defects that might be missed by more formal techniques"
      },
      {
        "k": "b",
        "t": "B) You can test for defects that only experienced users would encounter"
      },
      {
        "k": "c",
        "t": "C) You can target the developer’s efforts to the areas that users will be more likely to use"
      },
      {
        "k": "d",
        "t": "D) It is supported by strong tools and can be automated"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLý do nào sau đây là lý do chính đáng để sử dụng kiểm thử dựa trên kinh nghiệm?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Bạn có thể tìm thấy những khiếm khuyết có thể bị bỏ qua bằng các kỹ thuật chính thức hơn\n  B) Bạn có thể kiểm tra các lỗi mà chỉ người dùng có kinh nghiệm mới gặp phải\n  C) Bạn có thể nhắm mục tiêu nỗ lực của nhà phát triển vào các lĩnh vực mà người dùng sẽ có nhiều khả năng sử dụng hơn\n  D) Nó được hỗ trợ bởi các công cụ mạnh mẽ và có thể được tự động hóa\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. kiểm thử dựa trên kinh nghiệm thường được sử dụng để lấp đầy những khoảng trống do các kỹ thuật kiểm thử (test technique) chính thức hơn để lại. B không đúng vì nó được sử dụng bởi những tester (kiểm thử viên) có kinh nghiệm và không liên quan gì đến mức độ trải nghiệm của người dùng. C không đúng vì đây là kỹ thuật kiểm thử, không phải kỹ thuật phát triển. D là không đúng. Không có nhiều công cụ hỗ trợ cho các kỹ thuật này và tự động hóa thường không phải là mục tiêu vì tính hiệu quả phụ thuộc vào kinh nghiệm của tester (kiểm thử viên).\n\nTham chiếu: FL-4.4.2 (K2) Explain exploratory testing"
  },
  {
    "n": 23,
    "ref": "Question 23 [FL-4.4.1]",
    "stem": "What is error guessing?",
    "opts": [
      {
        "k": "a",
        "t": "A) A testing technique used to guess where a developer is likely to have made a mistake"
      },
      {
        "k": "b",
        "t": "B) A technique used for assessing defect metrics"
      },
      {
        "k": "c",
        "t": "C) A development technique to verify that all error paths have been coded"
      },
      {
        "k": "d",
        "t": "D) A planning technique used to anticipate likely schedule variances due to faults"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐoán lỗi là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Một kỹ thuật kiểm tra được sử dụng để đoán xem nhà phát triển có thể đã mắc lỗi ở đâu\n  B) Một kỹ thuật được sử dụng để đánh giá số liệu lỗi\n  C) Một kỹ thuật phát triển để xác minh rằng tất cả các đường dẫn lỗi đã được mã hóa\n  D) Một kỹ thuật lập kế hoạch được sử dụng để dự đoán những sai lệch về lịch trình có thể xảy ra do lỗi\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Đoán lỗi là một kỹ thuật được sử dụng để dự đoán những chỗ mà nhà phát triển có thể mắc lỗi và tạo ra các bài kiểm thử để giải quyết những lĩnh vực đó. B, C và D đều sai.\n\nTham chiếu: FL-4.4.1 (K2) Explain error guessing"
  },
  {
    "n": 24,
    "ref": "Question 24 [FL-4.5.1]",
    "stem": "When using the 3 C’s technique for user story development,  what is the work product that is created for the Confirmation  aspect?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test Approach"
      },
      {
        "k": "b",
        "t": "B) Acceptance Criteria"
      },
      {
        "k": "c",
        "t": "C) Entry Criteria"
      },
      {
        "k": "d",
        "t": "D) Exit Criteria"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKhi sử dụng kỹ thuật 3C để phát triển câu chuyện của người dùng, sản phẩm công việc được tạo ra cho khía cạnh Xác nhận là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phương pháp kiểm thử\n  B) Tiêu chí chấp nhận\n  C) Tiêu chí đầu vào\n  D) Tiêu chí đầu ra (exit criteria)\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Khía cạnh xác nhận của 3C là tiêu chí chấp nhận.\n\nTham chiếu: FL-4.5.1 (K2) Explain how to write user stories in collaboration  with developers and business representatives"
  },
  {
    "n": 25,
    "ref": "Question 25 [FL-4.2.1]",
    "stem": "You are testing a machine that scores exam papers and assigns  grades. Based on the score achieved the grades are as follows:  1-49 = F, 50-59 = D-, 60-69 = D, 70-79 = C, 80-89 = B, 90-100=A\n\nIf you apply equivalence partitioning, how many test cases will  you need to achieve minimum test coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 6"
      },
      {
        "k": "b",
        "t": "B) 8"
      },
      {
        "k": "c",
        "t": "C) 10"
      },
      {
        "k": "d",
        "t": "D) 12"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm tra một chiếc máy chấm bài thi và chấm điểm. Dựa trên số điểm đạt được, các điểm như sau: 1-49 = F, 50-59 = D-, 60-69 = D, 70-79 = C, 80-89 = B, 90-100=A\n\nNếu bạn áp dụng phân vùng tương đương, bạn sẽ cần bao nhiêu trường hợp kiểm thử để đạt được phạm vi kiểm thử tối thiểu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 6\n  B) 8\n  C) 10\n  D) 12\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Bạn cần kiểm tra mức không hợp lệ quá thấp (0 hoặc ít hơn), một lần cho mỗi phân vùng hợp lệ và một lần kiểm tra mức không hợp lệ quá cao (>100). Nó có thể không cho phép bạn nhập giá trị > 100, nhưng nó cần được kiểm tra để đảm bảo nó cung cấp lỗi thích hợp.\n\nTham chiếu: FL-4.2.1 (K3) Use equivalence partitioning to  derive test cases"
  },
  {
    "n": 26,
    "ref": "Question 26 [FL-4.2.2]",
    "stem": "You are testing a thermostat for a heating/air conditioning  system. You have been given the following requirements:\n\n•\t When the temperature is below 70 degrees, turn on the \t \t \t heating system •\t When the temperature is above 75 degrees, turn on the air \t \t conditioning system •\t When the temperature is between 70 and 75 degrees, \t \t \t inclusive, turn on fan only\n\nWhich of the following is the minimum set of test temperature  values to achieve 100% two-value boundary value analysis  coverage?",
    "opts": [
      {
        "k": "a",
        "t": "A) 70, 75"
      },
      {
        "k": "b",
        "t": "B) 65, 72, 80"
      },
      {
        "k": "c",
        "t": "C) 69, 70, 75, 76"
      },
      {
        "k": "d",
        "t": "D) 70, 71, 74, 75, 76"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử bộ điều nhiệt cho hệ thống sưởi/điều hòa không khí. Bạn đã được đưa ra các yêu cầu sau:\n\n• Khi nhiệt độ dưới 70 độ, bật hệ thống sưởi • Khi nhiệt độ trên 75 độ, bật hệ thống điều hòa • Khi nhiệt độ từ 70 đến 75 độ, chỉ bật quạt\n\nĐiều nào sau đây là tập hợp các giá trị nhiệt độ kiểm thử tối thiểu để đạt được phạm vi phân tích giá trị biên hai giá trị 100%?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 70, 75\n  B) 65, 72, 80\n  C) 69, 70, 75, 76\n  D) 70, 71, 74, 75, 76\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Đối với hệ thống sưởi, các giá trị cần kiểm tra là 69, 70 Đối với hệ thống điều hòa không khí, các giá trị là 75, 76 Riêng đối với quạt, các giá trị là 69, 70, 75, 76\n\n<-- 69 | 70 – 75 | 76 --> Bộ kiểm tra thích hợp kết hợp tất cả các giá trị này, 69, 70, 75, 76\n\nTham chiếu: FL-4.2.2 (K3) Use boundary value analysis to derive test cases"
  },
  {
    "n": 27,
    "ref": "Question 27 [FL-4.2.3]",
    "stem": "You have been given the following conditions and results from  those condition combinations. Given this information, using  the decision table technique, what is the minimum number of  test cases you would need to test these conditions? Conditions: Valid cash Valid credit card Valid debit card Valid pin Bank accepts Valid Selection Item in Stock Results: Reject Cash Reject Card Error Message Return Cash Refund Card Sell Item",
    "opts": [
      {
        "k": "a",
        "t": "A) 7"
      },
      {
        "k": "b",
        "t": "B) 13"
      },
      {
        "k": "c",
        "t": "C) 15"
      },
      {
        "k": "d",
        "t": "D) 18"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đã được cung cấp các điều kiện và kết quả sau đây từ những tổ hợp điều kiện đó. Với thông tin này, sử dụng kỹ thuật bảng quyết định, số lượng ca kiểm thử tối thiểu bạn cần để kiểm tra các điều kiện này là bao nhiêu? Điều kiện: Tiền mặt hợp lệ Thẻ tín dụng hợp lệ Thẻ ghi nợ hợp lệ Mã pin hợp lệ Ngân hàng chấp nhận Lựa chọn hợp lệ Mặt hàng trong kho Kết quả: Từ chối tiền mặt Từ chối thông báo lỗi thẻ Trả lại tiền mặt Hoàn tiền thẻ Bán mặt hàng\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 7\n  B) 13\n  C) 15\n  D) 18\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Xem bảng dưới đây.\n\nTham chiếu: FL-4.2.3 (K3) Use decision table testing to  derive test cases"
  },
  {
    "n": 28,
    "ref": "Question 28 [FL-4.2.4]",
    "stem": "You have been given the following requirement:\n\nA user must log in to the system with a valid username and  password. If they fail to enter the correct combination three  times, they will receive an error and will have to wait 10  minutes before trying again. The test terminates when the user  successfully logs in.\n\nHow many test cases are needed to provide 100% valid  transitions coverage?",
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
        "t": "C) 4"
      },
      {
        "k": "d",
        "t": "D) 5"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đã được đưa ra yêu cầu sau:\n\nNgười dùng phải đăng nhập vào hệ thống bằng tên người dùng và mật khẩu hợp lệ. Nếu không nhập đúng tổ hợp ba lần, họ sẽ gặp lỗi và phải đợi 10 phút trước khi thử lại. Quá trình kiểm tra kết thúc khi người dùng đăng nhập thành công.\n\nCần bao nhiêu test case (ca kiểm thử) để cung cấp phạm vi chuyển tiếp hợp lệ 100%?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1\n  B) 2\n  C) 4\n  D) 5\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Theo sơ đồ bên dưới, chỉ cần một bài kiểm tra: Đăng nhập, Thất bại, Thất bại, Thất bại =3, Đợi, Đăng nhập, Trang chủ. Nếu bạn được yêu cầu thoát ra sau thời gian Chờ, thì bạn sẽ phải thực hiện bài kiểm tra thứ hai nhưng câu hỏi không chỉ ra rằng cần phải thoát ra.\n\nTham chiếu: FL-4.2.4 (K3) Use state transition testing to derive test cases"
  },
  {
    "n": 29,
    "ref": "Question 29 [FL-4.5.3]",
    "stem": "You are creating test cases for the following story, applying the  ATDD approach.\n\n\t As a hotel owner \t I want to reserve all the rooms on a floor before moving to \t \t the next floor  \t So I can maximize the efficiency of the housekeeping staff\n\nYou have decided to apply equivalence partitioning to this  requirement and have identified the following partitions for  the occupancy of a floor:\n\n\t 0 | 1 - floor full | overbooked\n\nYou also want to be sure that the software is usable by the staff  and that it performs quickly in determining which floors have  availability.\n\nGiven this information, what should be the priority order for  the tests you will design?",
    "opts": [
      {
        "k": "a",
        "t": "A) 0, 1-floor full, overbooked, usability, performance"
      },
      {
        "k": "b",
        "t": "B) Performance, 1-floor full, usability, overbooked, 0"
      },
      {
        "k": "c",
        "t": "C) Usability, performance, overbooked, 0, 1-floor full"
      },
      {
        "k": "d",
        "t": "D) Overbooked, 0, 1-floor full, performance, usability"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang tạo các test case (ca kiểm thử) cho câu chuyện sau, áp dụng phương pháp ATDD.\n\n\t Là chủ khách sạn, tôi muốn đặt tất cả các phòng trên một tầng trước khi chuyển sang tầng tiếp theo Để có thể tối đa hóa hiệu quả của nhân viên dọn phòng\n\nBạn đã quyết định áp dụng phân vùng tương đương cho yêu cầu này và đã xác định các phân vùng sau cho sức chứa của một tầng:\n\n\t 0 | full tầng 1 | đặt trước quá nhiều\n\nBạn cũng muốn chắc chắn rằng nhân viên có thể sử dụng được phần mềm và nó hoạt động nhanh chóng trong việc xác định tầng nào còn trống.\n\nVới thông tin này, thứ tự ưu tiên cho các bài kiểm thử bạn sẽ thiết kế là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 0, đầy đủ 1 tầng, đặt trước quá nhiều, tiện ích, hiệu suất\n  B) Tiện ích, đầy đủ 1 tầng, tiện ích, đặt trước quá nhiều, 0\n  C) Tiện dụng, hiệu suất, đặt trước quá nhiều, 0, 1 tầng đầy đủ\n  D) Đặt trước quá nhiều, 0, 1 tầng đầy đủ, hiệu suất, tiện ích\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Điều này kiểm tra các kịch bản hợp lệ trước tiên, sau đó là không hợp lệ (đăng ký trước quá nhiều), sau đó là kiểm tra phi chức năng.\n\nTham chiếu: FL-4.5.3 (K3) Use  acceptance test-driven development (ATDD) to derive test cases"
  },
  {
    "n": 30,
    "ref": "Question 30 [FL-5.3.1]",
    "stem": "A metric that tracks the number of test cases passed is gathered  during which activity in the test process?",
    "opts": [
      {
        "k": "a",
        "t": "A) Planning"
      },
      {
        "k": "b",
        "t": "B) Implementation"
      },
      {
        "k": "c",
        "t": "C) Execution"
      },
      {
        "k": "d",
        "t": "D) Reporting"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMột số liệu theo dõi số lượng trường hợp kiểm thử đã vượt qua được thu thập trong hoạt động nào trong quy trình kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Quy hoạch\n  B) Thực hiện\n  C) Thi hành\n  D) Báo cáo\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Số liệu thực hiện kiểm thử được thu thập trong hoạt động Thực hiện kiểm thử. Các số liệu này được sử dụng trong báo cáo.\n\nTham chiếu: FL-5.3.1 (K1) Recall metrics used for testing"
  },
  {
    "n": 31,
    "ref": "Question 31 [FL-5.1.1]",
    "stem": "You are working in a team of testers who are all writing test  cases. You have noticed that there is a significant inconsistency  with the length and amount of detail in the different test cases.  Where should the criteria for test case writing be documented?",
    "opts": [
      {
        "k": "a",
        "t": "A) The test plan"
      },
      {
        "k": "b",
        "t": "B) The test approach"
      },
      {
        "k": "c",
        "t": "C) The test case template"
      },
      {
        "k": "d",
        "t": "D) The project plan"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang làm việc trong một nhóm tester (kiểm thử viên), tất cả đều viết các test case (ca kiểm thử). Bạn nhận thấy rằng có sự mâu thuẫn đáng kể về độ dài và số lượng chi tiết trong các test case (ca kiểm thử) khác nhau.  Các tiêu chí để viết test case nên được ghi lại ở đâu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kế hoạch kiểm tra\n  B) Phương pháp kiểm thử\n  C) Mẫu test case (ca kiểm thử)\n  D) Kế hoạch dự án\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Mức độ chi tiết và cấu trúc của tài liệu kiểm thử phải được đưa vào kế hoạch kiểm thử như một phần tiêu chí để thực hiện các hoạt động kiểm thử.\n\nTham chiếu: FL-5.1.1 (K2) Exemplify the purpose  and content of a test plan"
  },
  {
    "n": 32,
    "ref": "Question 32 [FL-5.1.7]",
    "stem": "Unit tests belong in which testing quadrant?",
    "opts": [
      {
        "k": "a",
        "t": "A) Q1"
      },
      {
        "k": "b",
        "t": "B) Q2"
      },
      {
        "k": "c",
        "t": "C) Q3"
      },
      {
        "k": "d",
        "t": "D) Q4"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBài kiểm tra đơn vị thuộc về góc phần tư kiểm tra nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Q1\n  B) Q2\n  C) Q3\n  D) Q4\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Các bài kiểm tra đơn vị hoặc thành phần thuộc về góc phần tư 1.\n\nTham chiếu: FL-5.1.7 (K2) Summarize the testing quadrants and their relationships with test  levels and test types"
  },
  {
    "n": 33,
    "ref": "Question 33 [FL-5.2.2]",
    "stem": "Which of the following is a project risk?",
    "opts": [
      {
        "k": "a",
        "t": "A) A module that performs incorrect calculations due to a defect in a formula"
      },
      {
        "k": "b",
        "t": "B) A failed performance test"
      },
      {
        "k": "c",
        "t": "C) An issue with the interface between the system under test and a peripheral device"
      },
      {
        "k": "d",
        "t": "D) A problem with the development manager which is resulting in his rejecting all defect reports"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là rủi ro của dự án?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Một mô-đun thực hiện các phép tính không chính xác do có lỗi trong công thức\n  B) Kiểm tra hiệu suất không thành công\n  C) Sự cố với giao diện giữa hệ thống được kiểm thử và thiết bị ngoại vi\n  D) Có vấn đề với người quản lý phát triển dẫn đến việc anh ta từ chối tất cả các báo cáo lỗi\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Ba rủi ro còn lại là rủi ro sản phẩm.\n\nTham chiếu: FL-5.2.2 (K2) Distinguish between project risks and product risks"
  },
  {
    "n": 34,
    "ref": "Question 34 [FL-5.3.2]",
    "stem": "Which of the following variances should be explained in the  Test Summary Report?",
    "opts": [
      {
        "k": "a",
        "t": "A) The variances between the weekly status reports and the test exit criteria"
      },
      {
        "k": "b",
        "t": "B) The variances between the defects found and the defects fixed"
      },
      {
        "k": "c",
        "t": "C) The variances between what was planned for testing and what was actually tested"
      },
      {
        "k": "d",
        "t": "D) The variances between the test cases executed and the total number of test cases"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nSự khác biệt nào sau đây cần được giải thích trong Báo cáo tóm tắt kiểm thử?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Sự khác biệt giữa các báo cáo trạng thái hàng tuần và tiêu chí đầu ra (exit criteria) khỏi bài kiểm tra\n  B) Sự khác biệt giữa các lỗi được tìm thấy và các lỗi đã sửa\n  C) Sự khác biệt giữa những gì đã được lên kế hoạch để kiểm thử và những gì đã được kiểm thử thực tế\n  D) Sự khác biệt giữa các ca kiểm thử được thực hiện và tổng số ca kiểm thử\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Những khác biệt hoặc sai lệch giữa kế hoạch kiểm thử và kiểm thử đã thực hiện phải được giải thích trong báo cáo tóm tắt kiểm thử. A không chính xác vì nếu báo cáo trạng thái hàng tuần được theo dõi không chính xác theo tiêu chí đầu ra (exit criteria) kiểm thử thì có điều gì đó không ổn và lẽ ra phải được phát hiện sớm hơn rất nhiều. B không đúng vì thông tin này phải được đưa vào báo cáo tóm tắt kiểm thử, nhưng dự kiến ​​sẽ có sự khác biệt. D không đúng vì điều này cần được theo dõi trong phần số liệu của báo cáo chứ không phải dưới dạng phương sai.\n\nTham chiếu: FL-5.3.2 (K2) Summarize the purposes, content, and audiences for test  reports"
  },
  {
    "n": 35,
    "ref": "Question 35 [FL-5.4.1]",
    "stem": "If the developers are releasing code for testing that is not  version controlled, what process is missing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Configuration management"
      },
      {
        "k": "b",
        "t": "B) Debugging"
      },
      {
        "k": "c",
        "t": "C) Test and defect management"
      },
      {
        "k": "d",
        "t": "D) Risk analysis"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNếu các nhà phát triển đang phát hành mã để kiểm thử mà không được kiểm soát phiên bản thì quy trình nào bị thiếu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Quản lý cấu hình\n  B) Gỡ lỗi\n  C) Kiểm tra và quản lý lỗi\n  D) Phân tích rủi ro\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Thiếu quản lý cấu hình nếu mã không được phiên bản và theo dõi đúng cách.\n\nTham chiếu: FL-5.4.1 (K2) Summarize how  configuration management supports testing"
  },
  {
    "n": 36,
    "ref": "Question 36 [FL-5.1.4]",
    "stem": "Your team is using Planning Poker to estimate the effort for a  story.\n\nDeveloper Vote Tester Vote First vote 3 8 Second vote 5 8 Third vote 5 5 \t Although three votes were taken to reach consensus, how many  story points should be allocated to the story?",
    "opts": [
      {
        "k": "a",
        "t": "A) 10 because that’s the sum of the points"
      },
      {
        "k": "b",
        "t": "B) 8 because that was the highest number"
      },
      {
        "k": "c",
        "t": "C) 3 because that was the lowest number"
      },
      {
        "k": "d",
        "t": "D) 5 because that was the consensus"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhóm của bạn đang sử dụng Planning Poker để ước tính nỗ lực cho một câu chuyện.\n\nNhà phát triển Bình chọn Người kiểm tra Bình chọn Bình chọn đầu tiên 3 8 Bình chọn thứ hai 5 8 Bình chọn thứ ba 5 5 Mặc dù đã thực hiện ba phiếu bầu để đạt được sự đồng thuận, nhưng nên phân bổ bao nhiêu điểm câu chuyện cho câu chuyện?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 10 vì đó là tổng số điểm\n  B) 8 vì đó là con số cao nhất\n  C) 3 vì đó là con số thấp nhất\n  D) 5 vì đó là sự đồng thuận\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Việc bỏ phiếu sẽ tiếp tục cho đến khi đạt được sự đồng thuận và con số đó sẽ được sử dụng để ấn định điểm cho câu chuyện.\n\nTham chiếu: FL-5.1.4 (K3) Use estimation techniques to calculate the required test effort"
  },
  {
    "n": 37,
    "ref": "Question 37 [FL-5.1.5]",
    "stem": "You have been given the following set of test cases to run.  You have been instructed to run them in order by risk and  to accomplish the testing as quickly as possible to provide  feedback to the developers as soon as possible.\n\nGiven this information, what is the best order in which to run  these tests?\n\nTest Case ID Duration Risk Priority Dependency 1 30 mins Low 6 2 10 mins Medium none 3 45 mins High 1 4 30 mins High 2 5 10 mins Medium 4 6 15 mins Low 2",
    "opts": [
      {
        "k": "a",
        "t": "A) 2, 4, 5, 6, 1, 3"
      },
      {
        "k": "b",
        "t": "B) 4, 3, 2, 5, 6, 1"
      },
      {
        "k": "c",
        "t": "C) 2, 5, 6, 4, 1, 3"
      },
      {
        "k": "d",
        "t": "D) 6, 1, 3, 2, 4, 5"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đã được cung cấp bộ trường hợp kiểm thử sau đây để chạy.  Bạn đã được hướng dẫn chạy chúng theo thứ tự rủi ro và hoàn thành kiểm thử càng nhanh càng tốt để cung cấp phản hồi cho nhà phát triển càng sớm càng tốt.\n\nVới thông tin này, thứ tự tốt nhất để chạy các bài kiểm thử này là gì?\n\nID trường hợp kiểm thử Thời lượng Rủi ro Ưu tiên Phụ thuộc 1 30 phút Thấp 6 2 10 phút Trung bình không 3 45 phút Cao 1 4 30 phút Cao 2 5 10 phút Trung bình 4 6 15 phút Thấp 2\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 2, 4, 5, 6, 1, 3\n  B) 4, 3, 2, 5, 6, 1\n  C) 2, 5, 6, 4, 1, 3\n  D) 6, 1, 3, 2, 4, 5\n\n[GIẢI THÍCH CHI TIẾT]\nA đúng vì nó giải quyết các bài kiểm thử có rủi ro cao nhất và nhanh nhất trước tiên.  Nó chạy kiểm thử trung bình nhanh trước kiểm thử chậm và có độ rủi ro cao phụ thuộc nhiều hơn vì điều này sẽ cung cấp phản hồi cho nhà phát triển nhanh hơn.\n\nTham chiếu: FL-5.1.5 (K3) Apply test case prioritization"
  },
  {
    "n": 38,
    "ref": "Question 38 [FL-5.5.1]",
    "stem": "You have been testing software that will be used to track credit  card purchases. You have found a defect that causes the system  to crash, but only if a person has made and voided 10 purchases  in a row. What is the proper priority and severity rating for this  defect?",
    "opts": [
      {
        "k": "a",
        "t": "A) Priority high, severity high"
      },
      {
        "k": "b",
        "t": "B) Priority high, severity low"
      },
      {
        "k": "c",
        "t": "C) Priority low, severity low"
      },
      {
        "k": "d",
        "t": "D) Priority low, severity high"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử phần mềm sẽ được sử dụng để theo dõi việc mua hàng bằng thẻ tín dụng. Bạn đã tìm thấy một lỗi khiến hệ thống gặp sự cố nhưng chỉ khi một người đã thực hiện và hủy 10 lần mua hàng liên tiếp. Mức độ ưu tiên và mức độ nghiêm trọng thích hợp cho lỗi này là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Mức độ ưu tiên cao, mức độ nghiêm trọng cao\n  B) Mức độ ưu tiên cao, mức độ nghiêm trọng thấp\n  C) Mức độ ưu tiên thấp, mức độ nghiêm trọng thấp\n  D) Mức độ ưu tiên thấp, mức độ nghiêm trọng cao\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Điều này khó có khả năng xảy ra nên mức độ khẩn cấp cần khắc phục thấp nhưng nó làm hỏng hệ thống nên mức độ ảnh hưởng đến hệ thống cao nên mức độ nghiêm trọng phải cao.\n\nTham chiếu: FL-5.5.1 (K3) Prepare a defect report"
  },
  {
    "n": 39,
    "ref": "Question 39 [FL-6.1.1]",
    "stem": "Which of the following is an example of a tool that supports  static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) A tool that assists with tracking the results of reviews"
      },
      {
        "k": "b",
        "t": "B) A defect tracking tool"
      },
      {
        "k": "c",
        "t": "C) A test automation tool"
      },
      {
        "k": "d",
        "t": "D) A tool that helps design test cases for security testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là ví dụ về công cụ hỗ trợ kiểm thử tĩnh (static testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Công cụ hỗ trợ theo dõi kết quả đánh giá\n  B) Công cụ theo dõi lỗi\n  C) Một công cụ tự động hóa kiểm thử (test automation)\n  D) Một công cụ giúp thiết kế các test case (ca kiểm thử) để kiểm tra bảo mật\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Đánh giá là một dạng kiểm thử tĩnh (static testing) và công cụ hỗ trợ đánh giá là một ví dụ về công cụ hỗ trợ kiểm thử tĩnh (static testing). B là một ví dụ về công cụ quản lý được sử dụng để quản lý lỗi.\n\nC là một ví dụ về công cụ thực hiện kiểm thử. D là một ví dụ về công cụ thiết kế kiểm thử.\n\nTham chiếu: FL-6.1.1 (K2) Explain how different types of test tools support testing"
  },
  {
    "n": 40,
    "ref": "Question 40 [FL-6.2.1]",
    "stem": "Which of the following is a benefit of test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test execution is faster"
      },
      {
        "k": "b",
        "t": "B) Manual testing becomes obsolete"
      },
      {
        "k": "c",
        "t": "C) ROI is easy to determine"
      },
      {
        "k": "d",
        "t": "D) Test implementation is faster"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là lợi ích của tự động hóa kiểm thử (test automation)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Thực hiện kiểm thử nhanh hơn\n  B) Kiểm tra thủ công trở nên lỗi thời\n  C) ROI rất dễ xác định\n  D) Việc thực thi kiểm thử nhanh hơn\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Việc thực hiện kiểm thử bằng phương pháp tự động hóa sẽ nhanh hơn so với kiểm thử thủ công khi các trường hợp kiểm thử đã được phát triển. Việc phát triển tự động hóa mất nhiều thời gian hơn so với việc viết các trường hợp kiểm thử thủ công (thường) nên D sai. B sai vì kiểm thử thủ công không hề lỗi thời, nó có thể tập trung vào các lĩnh vực mới. C không chính xác vì lợi tức đầu tư (ROI) có thể khó tính toán vì nó phải dựa trên nỗ lực kiểm tra thủ công tương đương\n\nTham chiếu: FL-6.2.1 (K1) Recall the benefits and risks of test automation"
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
