/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: ASTQB Sample Exam #4 (40 câu chuẩn) (40 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — ASTQB Sample Exam #4 (40 câu chuẩn)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (40 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Question 1 [FL-1.2.2]",
    "stem": "In what way does root cause analysis contribute to quality  assurance?",
    "opts": [
      {
        "k": "a",
        "t": "A) Helps to better identify and correct the root cause of defects"
      },
      {
        "k": "b",
        "t": "B) Outlines how development teams can code faster"
      },
      {
        "k": "c",
        "t": "C) Specifies the desired root causes to be achieved by other teams"
      },
      {
        "k": "d",
        "t": "D) Contributes to the justification of future project funding"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nPhân tích nguyên nhân gốc rễ góp phần đảm bảo chất lượng bằng cách nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Giúp xác định tốt hơn và khắc phục nguyên nhân gốc rễ của lỗi\n  B) Phác thảo cách các nhóm phát triển có thể viết mã nhanh hơn\n  C) Chỉ định các nguyên nhân gốc rễ mong muốn mà các nhóm khác phải đạt được\n  D) Góp phần chứng minh nguồn tài trợ cho dự án trong tương lai\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Phân tích nguyên nhân gốc rễ có thể xác định nguyên nhân phổ biến của vấn đề. Giải quyết những nguyên nhân phổ biến này bằng cách cải tiến quy trình có thể nâng cao chất lượng. B không chính xác vì phân tích nguyên nhân cốt lõi sẽ không làm cho nhà phát triển viết mã nhanh hơn, có thể tốt hơn chứ không phải nhanh hơn. C không chính xác vì nguyên nhân cốt lõi nói chung không phải là điều tốt nên được chuyển giao giữa các nhóm. D không đúng vì nó sẽ không cải thiện được nguồn tài trợ.\n\nTham chiếu: FL-1.2.2 (K1) Recall the relation between testing and quality  assurance"
  },
  {
    "n": 2,
    "ref": "Question 2 [FL-1.5.2]",
    "stem": "You are working in an Agile team where the testers are being  accused of slowing down the process because of the time  system testing is taking. Which of the following would be an  approach that would better spread the skills of the team to  complete the tasks?",
    "opts": [
      {
        "k": "a",
        "t": "A) Whole Team"
      },
      {
        "k": "b",
        "t": "B) Team Split"
      },
      {
        "k": "c",
        "t": "C) Behavior-Driven Development"
      },
      {
        "k": "d",
        "t": "D) Waterfall"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang làm việc trong một nhóm Agile, nơi những tester (kiểm thử viên) đang bị cáo buộc làm chậm quá trình vì mất nhiều thời gian cho việc kiểm thử hệ thống (system testing). Cách tiếp cận nào sau đây sẽ giúp phổ biến tốt hơn các kỹ năng của nhóm để hoàn thành nhiệm vụ?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Toàn đội\n  B) Chia nhóm\n  C) Phát triển theo hướng hành vi\n  D) Thác nước\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Cách tiếp cận của cả nhóm sẽ hỗ trợ các nhà phát triển thực hiện các nhiệm vụ kiểm thử thay vì chờ tester (kiểm thử viên) hoàn thành tất cả các bài kiểm thử.\n\nTham chiếu: FL-1.5.2 (K1) Recall the advantages of the  whole team approach"
  },
  {
    "n": 3,
    "ref": "Question 3 [FL-1.1.2]",
    "stem": "Which of the following is an example of debugging?",
    "opts": [
      {
        "k": "a",
        "t": "A) A tester finds a defect and reports it"
      },
      {
        "k": "b",
        "t": "B) A tester retests a fix from the developer and finds a regression"
      },
      {
        "k": "c",
        "t": "C) A developer finds and fixes a defect"
      },
      {
        "k": "d",
        "t": "D) A developer performs unit testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là một ví dụ về gỡ lỗi?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người kiểm thử tìm thấy lỗi và báo cáo lỗi đó\n  B) Tester (kiểm thử viên) kiểm tra lại bản sửa lỗi từ nhà phát triển và tìm thấy hồi quy\n  C) Nhà phát triển tìm và sửa lỗi\n  D) Một nhà phát triển thực hiện kiểm thử đơn vị\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Gỡ lỗi là những gì nhà phát triển thực hiện để xác định nguyên nhân gây ra lỗi, phân tích và sửa lỗi. D có thể liên quan đến việc gỡ lỗi, nếu nhà phát triển tìm thấy lỗi, nhưng hành động kiểm tra đơn vị không giống như gỡ lỗi.\n\nTham chiếu: FL-1.1.2 (K2) Differentiate testing from debugging"
  },
  {
    "n": 4,
    "ref": "Question 4 [FL-1.3.1]",
    "stem": "Which of the following is a true statement about exhaustive  testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is a form of stress testing"
      },
      {
        "k": "b",
        "t": "B) It is not feasible except in the case of trivial software"
      },
      {
        "k": "c",
        "t": "C) It is commonly done with test automation"
      },
      {
        "k": "d",
        "t": "D) It is normally the responsibility of the developer during unit testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nPhát biểu nào sau đây là đúng về kiểm thử toàn diện?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đây là một hình thức kiểm tra căng thẳng\n  B) Nó không khả thi ngoại trừ trường hợp phần mềm tầm thường\n  C) Nó thường được thực hiện với tự động hóa kiểm thử (test automation)\n  D) Thông thường, trách nhiệm của nhà phát triển trong quá trình kiểm thử đơn vị\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. kiểm thử toàn diện, tất cả các kết hợp đầu vào và điều kiện tiên quyết, đều không khả thi trừ khi phần mềm đơn giản đến mức tầm thường.  Nếu không, nó sẽ mất quá nhiều thời gian và thậm chí có thể không thực hiện được.\n\nTham chiếu: FL-1.3.1 (K2) Explain the seven testing principles."
  },
  {
    "n": 5,
    "ref": "Question 5 [FL-1.4.4]",
    "stem": "If you need to provide a report showing test case execution  coverage of the requirements, what do you need to track?",
    "opts": [
      {
        "k": "a",
        "t": "A) Traceability between the test cases and the requirements"
      },
      {
        "k": "b",
        "t": "B) Coverage of the risk items by test case"
      },
      {
        "k": "c",
        "t": "C) Traceability between the requirements and the risk items"
      },
      {
        "k": "d",
        "t": "D) Coverage of the requirements by the test cases that have been designed"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNếu bạn cần cung cấp một báo cáo hiển thị phạm vi thực hiện trường hợp kiểm thử của các yêu cầu, bạn cần theo dõi những gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Truy xuất nguồn gốc giữa các test case (ca kiểm thử) và các yêu cầu\n  B) Bao phủ các hạng mục rủi ro theo test case (ca kiểm thử)\n  C) Truy xuất nguồn gốc giữa các yêu cầu và các hạng mục rủi ro\n  D) Bao phủ các yêu cầu của các test case (ca kiểm thử) đã được thiết kế\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Để hiển thị phạm vi thực hiện kiểm thử của các yêu cầu, bạn sẽ cần truy xuất nguồn gốc giữa các yêu cầu và trường hợp kiểm thử. Khi các trường hợp kiểm thử được thực thi, khả năng truy xuất nguồn gốc này có thể được sử dụng để ghi lại các kiểm thử được thực hiện theo yêu cầu. B không đúng vì nó đang tìm kiếm phạm vi bảo hiểm yêu cầu chứ không phải phạm vi rủi ro. C không đúng vì nó đang tìm kiếm việc thực hiện kiểm thử chứ không phải các mục rủi ro. D không đúng vì nó đang tìm kiếm các trường hợp kiểm thử đã được thực thi chứ không chỉ được thiết kế.\n\nTham chiếu: FL-1.4.4 (K2) Explain the value of maintaining  traceability"
  },
  {
    "n": 6,
    "ref": "Question 6 [FL-1.4.5]",
    "stem": "Who normally writes the test plan for a project?",
    "opts": [
      {
        "k": "a",
        "t": "A) The project manager"
      },
      {
        "k": "b",
        "t": "B) The product owner"
      },
      {
        "k": "c",
        "t": "C) The test manager"
      },
      {
        "k": "d",
        "t": "D) The tester"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nAi thường viết kế hoạch kiểm thử cho một dự án?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người quản lý dự án\n  B) Chủ sở hữu sản phẩm\n  C) Người test manager (quản lý kiểm thử)\n  D) Tester (kiểm thử viên)\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Viết và cập nhật kế hoạch kiểm thử thường là trách nhiệm của người quản lý kiểm thử. A, B và D có thể đóng góp vào kế hoạch kiểm thử nhưng trách nhiệm chung thuộc về người quản lý kiểm thử.\n\nTham chiếu: FL-1.4.5 (K2) Compare the different roles in testing"
  },
  {
    "n": 7,
    "ref": "Question 7 [FL-1.4.3]",
    "stem": "Your team has conducted a quality risk analysis and has  determined the likelihood, impact and mitigation plan for each  identified risk. This information should be captured in what  work product?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test strategy"
      },
      {
        "k": "b",
        "t": "B) Test plan"
      },
      {
        "k": "c",
        "t": "C) Risk register"
      },
      {
        "k": "d",
        "t": "D) Risk plan"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhóm của bạn đã tiến hành phân tích rủi ro chất lượng và xác định khả năng xảy ra, tác động và kế hoạch giảm thiểu cho từng rủi ro được xác định. Thông tin này cần được ghi lại trong sản phẩm công việc nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Chiến lược kiểm thử\n  B) Kế hoạch kiểm tra\n  C) Đăng ký rủi ro\n  D) Kế hoạch rủi ro\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng, theo giáo trình. Thông tin này phải được ghi lại trong sổ đăng ký rủi ro. Việc đăng ký rủi ro nên được tham chiếu trong kế hoạch kiểm thử (test plan) cho dự án.\n\nTham chiếu: FL-1.4.3 (K2) Differentiate the testware that supports the  test activities"
  },
  {
    "n": 8,
    "ref": "Question 8 [FL-1.5.1]",
    "stem": "You are working with a junior tester who has been given a user  story to test. They have created only one positive path test for  the story. You know there are more areas that should be tested  for this story, including negative scenarios.\n\nWhich of the following generic skills do they appear to be  lacking?",
    "opts": [
      {
        "k": "a",
        "t": "A) Communication"
      },
      {
        "k": "b",
        "t": "B) Curiosity"
      },
      {
        "k": "c",
        "t": "C) Confidence"
      },
      {
        "k": "d",
        "t": "D) Creativity"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang làm việc với một tester (kiểm thử viên) cấp dưới, người đã được giao một câu chuyện của người dùng để kiểm tra. Họ chỉ tạo ra một bài kiểm tra đường dẫn tích cực cho câu chuyện. Bạn biết rằng có nhiều lĩnh vực hơn cần được kiểm thử cho câu chuyện này, bao gồm cả các tình huống tiêu cực.\n\nHọ dường như đang thiếu những kỹ năng chung nào sau đây?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Truyền thông\n  B) Tò mò\n  C) Sự tự tin\n  D) Sáng tạo\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Có vẻ như họ thiếu tính sáng tạo trong việc thiết kế các kịch bản kiểm thử. A không đúng vì không có dấu hiệu nào cho thấy họ giao tiếp không hiệu quả. B không đúng, mặc dù nếu họ tò mò hơn, họ có thể đã điều tra thêm. C không đúng vì có vẻ như sự tự tin không phải là một yếu tố, mà là họ không tiếp cận quá trình tạo bài kiểm tra một cách sáng tạo.\n\nTham chiếu: FL-1.5.1 (K2) Give examples of the generic skills required for testing"
  },
  {
    "n": 9,
    "ref": "Question 9 [FL-2.1.2]",
    "stem": "Which of the following is an example of a good testing practice?",
    "opts": [
      {
        "k": "a",
        "t": "A) Different test levels should have specific test objectives"
      },
      {
        "k": "b",
        "t": "B) Testers should have development experience"
      },
      {
        "k": "c",
        "t": "C) Developers should determine the order of test execution in the test procedures"
      },
      {
        "k": "d",
        "t": "D) Test design should begin when the code is complete to avoid changes"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là ví dụ về phương pháp kiểm thử tốt?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các cấp độ kiểm tra khác nhau nên có mục tiêu kiểm tra cụ thể\n  B) Người kiểm thử phải có kinh nghiệm phát triển\n  C) Nhà phát triển nên xác định thứ tự thực hiện kiểm thử trong quy trình kiểm thử\n  D) Thiết kế kiểm thử nên bắt đầu khi mã hoàn tất để tránh thay đổi\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Đây là một thực hành kiểm thử tốt. B không phải là một yêu cầu đối với nhiều tester (kiểm thử viên). C không đúng vì điều này phải được người kiểm thử xác định dựa trên mức độ ưu tiên, rủi ro, tính khả dụng, v.v. D không đúng vì thiết kế kiểm thử phải bắt đầu trong quá trình thiết kế và triển khai mã.\n\nTham chiếu: FL-2.1.2 (K1) Recall good testing practices that apply to all software  development lifecycles"
  },
  {
    "n": 10,
    "ref": "Question 10 [FL-2.1.3]",
    "stem": "Which development approach captures the requirements in a  simple test case format?",
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
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nPhương pháp phát triển nào nắm bắt được các yêu cầu trong một định dạng test case (ca kiểm thử) đơn giản?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) TDD\n  B) BDD\n  C) ATDD\n  D) TBD\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Sự phát triển theo hướng hành vi sử dụng định dạng đã cho/khi/khi đó để xác định các trường hợp kiểm thử. Sau đó, chúng được sử dụng làm yêu cầu để phát triển mã.\n\nTham chiếu: FL-2.1.3 (K1) Recall the examples of test-first  approaches to development"
  },
  {
    "n": 11,
    "ref": "Question 11 [FL-2.2.2]",
    "stem": "Usability testing is an example of which type of testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Functional"
      },
      {
        "k": "b",
        "t": "B) Non-functional"
      },
      {
        "k": "c",
        "t": "C) Structural"
      },
      {
        "k": "d",
        "t": "D) Change-related"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKiểm tra khả năng sử dụng là một ví dụ về loại kiểm thử (test type) nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Chức năng\n  B) Không có chức năng\n  C) Kết cấu\n  D) Liên quan đến thay đổi\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Khả năng sử dụng là một trong những loại kiểm thử (test type) phi chức năng theo ISO 25010.\n\nTham chiếu: FL-2.2.2 (K2) Distinguish the different test types"
  },
  {
    "n": 12,
    "ref": "Question 12 [FL-2.2.3]",
    "stem": "You have been receiving daily builds from the developers. Even  though they are documenting the fixes they are including in  each build, you are finding that the fixes either aren’t in the  build or are not working. What type of testing is best suited for  finding these issues?",
    "opts": [
      {
        "k": "a",
        "t": "A) Unit testing"
      },
      {
        "k": "b",
        "t": "B) System testing"
      },
      {
        "k": "c",
        "t": "C) Confirmation testing"
      },
      {
        "k": "d",
        "t": "D) Regression testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đã nhận được các bản dựng hàng ngày từ các nhà phát triển. Mặc dù họ đang ghi lại các bản sửa lỗi mà họ đưa vào mỗi bản dựng nhưng bạn sẽ nhận thấy rằng các bản sửa lỗi đó không có trong bản dựng hoặc không hoạt động. loại kiểm thử (test type) nào phù hợp nhất để tìm ra những vấn đề này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra đơn vị\n  B) Kiểm tra hệ thống\n  C) Kiểm tra xác nhận\n  D) Kiểm tra hồi quy\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Kiểm tra xác nhận sẽ xác định xem bản dựng có bản sửa lỗi hay không và liệu nó có thực sự sửa được lỗi mà nó đáng lẽ phải sửa hay không. A không đúng vì việc này sẽ được nhà phát triển thực hiện khi họ khắc phục sự cố. Mặc dù nó có thể phát hiện được bản sửa lỗi không hoạt động nhưng nó không có khả năng phát hiện được quá trình đăng ký/xây dựng đang loại trừ bản sửa lỗi khỏi bản dựng.  B không đúng vì quá trình kiểm tra hệ thống sẽ mất nhiều thời gian hơn để xác định sự cố này và có thể dẫn đến mất nhiều thời gian khắc phục sự cố hơn khi sự cố được phát hiện lại. D không đúng vì đây là kiểm thử được thực hiện để xem liệu có bất kỳ thay đổi ngoài ý muốn nào trong hoạt động của phần mềm hay không.\n\nTham chiếu: FL-2.2.3 (K2) Distinguish confirmation testing from  regression test"
  },
  {
    "n": 13,
    "ref": "Question 13 [FL-2.1.6]",
    "stem": "Your team has just completed a retrospective. They have  discussed what was successful and should be retained,  and they discussed what improvements are needed. What  else do they need to discuss in order to recognize process  improvements?",
    "opts": [
      {
        "k": "a",
        "t": "A) When will the accepted changes be made"
      },
      {
        "k": "b",
        "t": "B) Who is to blame for the shortcomings of the project"
      },
      {
        "k": "c",
        "t": "C) How much money was spent that could have been saved"
      },
      {
        "k": "d",
        "t": "D) Why changes were not made earlier in the project"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhóm của bạn vừa hoàn thành một cuộc hồi cứu. Họ đã thảo luận về những gì đã thành công và cần được giữ lại, đồng thời họ thảo luận về những cải tiến cần thiết. Họ cần thảo luận điều gì khác để ghi nhận những cải tiến trong quy trình?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Khi nào những thay đổi được chấp nhận sẽ được thực hiện\n  B) Ai là người chịu trách nhiệm về những thiếu sót của dự án\n  C) Số tiền đã bỏ ra có thể tiết kiệm được\n  D) Tại sao những thay đổi không được thực hiện sớm hơn trong dự án\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Thật tuyệt khi thu thập thông tin, nhưng để thay đổi thực sự được thực hiện, nó phải được lên kế hoạch thực hiện trong các lần chạy nước rút/phát hành/dự án trong tương lai. B không đúng vì hồi tưởng không có nghĩa là đổ lỗi. C không phải là một phần của quá trình hồi cứu, mặc dù thông tin này có thể được người quản lý dự án thu thập. D cũng có xu hướng đổ lỗi nhưng đó là điều cần được cân nhắc vì nó có thể ảnh hưởng đến khả năng thực hiện các thay đổi trong tương lai.\n\nTham chiếu: FL-2.1.6 (K2) Explain how retrospectives can be used as a mechanism for process  improvement"
  },
  {
    "n": 14,
    "ref": "Question 14 [FL-2.1.4]",
    "stem": "Your organization has decided to implement DevOps. One of  the biggest concerns from the operations people is that there  have been ongoing performance issues in production. How will  implementing DevOps and CI/CD help with this problem?",
    "opts": [
      {
        "k": "a",
        "t": "A) It won’t - the problem needs to be addressed during design"
      },
      {
        "k": "b",
        "t": "B) Performance testing can be integrated into the CI/CD pipeline to test it incrementally and repeatedly throughout development"
      },
      {
        "k": "c",
        "t": "C) Performance testing will be the main focus of the system integration testing, after the code has been delivered to the test environment"
      },
      {
        "k": "d",
        "t": "D) Performance testing experts will be used to conduct the performance testing in an isolated environment which is developed using Infrastructure as Code"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTổ chức của bạn đã quyết định triển khai DevOps. Một trong những mối quan tâm lớn nhất của những người vận hành là các vấn đề về hiệu suất đang diễn ra trong sản xuất. Việc triển khai DevOps và CI/CD sẽ giúp giải quyết vấn đề này như thế nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Sẽ không - vấn đề cần được giải quyết trong quá trình thiết kế\n  B) Kiểm tra hiệu suất có thể được tích hợp vào quy trình CI/CD để kiểm tra tăng dần và lặp lại trong suốt quá trình phát triển\n  C) Kiểm thử hiệu năng sẽ là trọng tâm chính của kiểm thử tích hợp hệ thống, sau khi mã đã được chuyển đến môi trường kiểm thử\n  D) Các chuyên gia kiểm tra hiệu suất sẽ được sử dụng để tiến hành kiểm tra hiệu suất trong một môi trường biệt lập được phát triển bằng Cơ sở hạ tầng dưới dạng Mã\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Với việc triển khai CI/CD, kiểm thử hiệu suất có thể được triển khai trong toàn bộ quy trình, bắt đầu bằng kiểm thử đơn vị và tiếp tục đến sản phẩm được phát triển hoàn chỉnh. CI/CD cũng sẽ giúp đảm bảo rằng việc phân phối được đưa vào môi trường thích hợp có thể hỗ trợ các loại kiểm thử (test type) khác nhau. A là không đúng. Vấn đề có thể cần được giải quyết trong quá trình thiết kế, nhưng nó cần được kiểm tra trong suốt quy trình. C không đúng vì hiệu suất kiểm tra chỉ trong SIT không tận dụng được khả năng của quy trình kiểm tra. D không đúng vì kiểm thử hiệu suất có thể được tiến hành sớm và thường xuyên thông qua đường ống, mặc dù cũng có thể cần kiểm thử cuối cùng trong môi trường biệt lập.\n\nTham chiếu: FL-2.1.4 (K2) Summarize how  DevOps might have an impact on testing"
  },
  {
    "n": 15,
    "ref": "Question 15 [FL-3.1.1]",
    "stem": "Which of the following techniques is a form of static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Error guessing"
      },
      {
        "k": "b",
        "t": "B) Automated regression testing"
      },
      {
        "k": "c",
        "t": "C) Providing inputs and examining the resulting outputs"
      },
      {
        "k": "d",
        "t": "D) Code review"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKỹ thuật nào sau đây là một hình thức kiểm thử tĩnh (static testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Lỗi đoán\n  B) Kiểm tra hồi quy tự động\n  C) Cung cấp đầu vào và kiểm tra kết quả đầu ra\n  D) Đánh giá mã\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng, theo giáo trình. A, B và C đều là các dạng kiểm thử động (dynamic testing).\n\nTham chiếu: FL-3.1.1 (K1) Recognize types of work products that can be examined by  static testing techniques"
  },
  {
    "n": 16,
    "ref": "Question 16 [FL-3.2.5]",
    "stem": "You are frequently asked to participate in reviews of  requirements. Unfortunately, you usually receive the document  to be reviewed the night before the review meeting will be  held. This is resulting in your not doing a thorough review and  having to work significant overtime to get the review done.  What review success factor is missing from this process?",
    "opts": [
      {
        "k": "a",
        "t": "A) Management support for the overall review process"
      },
      {
        "k": "b",
        "t": "B) Reviewing only small chunks at a time"
      },
      {
        "k": "c",
        "t": "C) Training for the proper performance in the meetings"
      },
      {
        "k": "d",
        "t": "D) Allowing adequate time to conduct the review"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn thường xuyên được yêu cầu tham gia đánh giá các yêu cầu. Thật không may, bạn thường nhận được tài liệu để xem xét vào đêm trước khi cuộc họp đánh giá được tổ chức. Điều này dẫn đến việc bạn không thực hiện đánh giá kỹ lưỡng và phải làm việc ngoài giờ đáng kể để hoàn thành việc đánh giá.  Yếu tố đánh giá thành công nào bị thiếu trong quá trình này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hỗ trợ quản lý cho quá trình xem xét tổng thể\n  B) Chỉ xem lại các phần nhỏ tại một thời điểm\n  C) Huấn luyện để thực hiện đúng trong các cuộc họp\n  D) Dành đủ thời gian để tiến hành đánh giá\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Người đánh giá không được cung cấp đủ thời gian để tiến hành đánh giá. A không đúng nhưng có thể là một vấn đề vì đây là vấn đề lặp đi lặp lại và có thể cho thấy lịch trình không thực tế. B không đúng vì không có dấu hiệu nào cho thấy sản phẩm công việc quá lớn, chỉ là nó được giao quá muộn. C không đúng vì vấn đề không nằm ở cuộc họp.\n\nTham chiếu: FL-3.2.5 (K1) Recall the  factors that contribute to a successful review"
  },
  {
    "n": 17,
    "ref": "Question 17 [FL-3.1.3]",
    "stem": "What is the main difference between static and dynamic  testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Static testing is performed by developers; dynamic testing is performed by testers"
      },
      {
        "k": "b",
        "t": "B) Manual test cases are used for dynamic testing; automated tests are used for static testing"
      },
      {
        "k": "c",
        "t": "C) Static testing must be executed before dynamic testing"
      },
      {
        "k": "d",
        "t": "D) Dynamic testing requires executing the software; the software is not executed during static testing"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nSự khác biệt chính giữa kiểm thử tĩnh (static testing) và động là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra tĩnh được thực hiện bởi các nhà phát triển; kiểm thử động (dynamic testing) được thực hiện bởi tester (kiểm thử viên)\n  B) Các trường hợp kiểm thử thủ công được sử dụng để kiểm thử động; kiểm tra tự động được sử dụng để kiểm tra tĩnh\n  C) Kiểm tra tĩnh phải được thực hiện trước khi kiểm tra động\n  D) Kiểm thử động yêu cầu thực thi phần mềm; phần mềm không được thực thi trong quá trình kiểm thử tĩnh\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Kiểm thử động được thực hiện khi phần mềm thực sự đang chạy trong khi kiểm thử tĩnh phụ thuộc vào việc kiểm tra phần mềm khi phần mềm không chạy. A không đúng vì cả hai loại kiểm thử (test type) đều có thể được thực hiện bởi cả nhà phát triển và tester (kiểm thử viên). B không đúng vì kiểm thử thủ công và tự động có thể được sử dụng cho kiểm thử động. C không đúng vì kiểm thử tĩnh (static testing) có thể xảy ra bất cứ lúc nào mặc dù nó thường được thực hiện trước kiểm thử động (dynamic testing).\n\nTham chiếu: FL-3.1.3 (K2) Compare and contrast static  testing and dynamic testing"
  },
  {
    "n": 18,
    "ref": "Question 18 [FL-3.2.4]",
    "stem": "If a review session is led by the author of the work product,  what type of review is it?",
    "opts": [
      {
        "k": "a",
        "t": "A) Ad hoc"
      },
      {
        "k": "b",
        "t": "B) Walkthrough"
      },
      {
        "k": "c",
        "t": "C) Inspection"
      },
      {
        "k": "d",
        "t": "D) Audit"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNếu phiên đánh giá được dẫn dắt bởi tác giả của sản phẩm thì đó là loại đánh giá gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đặc biệt\n  B) Hướng dẫn\n  C) Kiểm tra\n  D) Kiểm toán\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Trong phần hướng dẫn, tác giả thường dẫn dắt buổi đánh giá. A không đúng vì đây thường không phải là một phiên họp có tổ chức. C không đúng vì việc kiểm tra thường do người điều phối (người điều hành) chủ trì. D không đúng vì việc kiểm tra thường do bên thứ ba chủ trì.\n\nTham chiếu: FL-3.2.4 (K2) Compare and contrast the different review types"
  },
  {
    "n": 19,
    "ref": "Question 19 [FL-4.1.1]",
    "stem": "If test cases are derived from looking at the code, what type of  test technique is being used?",
    "opts": [
      {
        "k": "a",
        "t": "A) Black-box"
      },
      {
        "k": "b",
        "t": "B) White-box"
      },
      {
        "k": "c",
        "t": "C) Specification-based"
      },
      {
        "k": "d",
        "t": "D) Behavior-based"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNếu các trường hợp kiểm thử bắt nguồn từ việc xem mã thì loại kỹ thuật kiểm thử nào đang được sử dụng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hộp đen\n  B) Hộp trắng\n  C) Dựa trên đặc điểm kỹ thuật\n  D) Dựa trên hành vi\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. A, C và D đều là hộp đen và sử dụng các thông số kỹ thuật hoặc yêu cầu cho thiết kế kiểm thử.\n\nTham chiếu: FL-4.1.1 (K2) Distinguish black-box,  white-box, and experience-based test techniques"
  },
  {
    "n": 20,
    "ref": "Question 20 [FL-4.3.1]",
    "stem": "How is statement coverage determined?",
    "opts": [
      {
        "k": "a",
        "t": "A) Number of test decision points divided by the number of test cases"
      },
      {
        "k": "b",
        "t": "B) Number of branches tested divided by the total number of executable statements"
      },
      {
        "k": "c",
        "t": "C) Number of possible test case outcomes divided by the total number of function points"
      },
      {
        "k": "d",
        "t": "D) Number of executable statements tested divided by the total number of executable statements"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMức độ bao phủ của tuyên bố được xác định như thế nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Số điểm quyết định kiểm thử chia cho số ca kiểm thử\n  B) Số nhánh được kiểm tra chia cho tổng số câu lệnh thực thi\n  C) Số kết quả ca kiểm thử có thể có chia cho tổng số điểm chức năng\n  D) Số câu lệnh thực thi được kiểm tra chia cho tổng số câu lệnh thực thi được\n\n[GIẢI THÍCH CHI TIẾT]\nD đúng, theo giáo trình vì mỗi câu được kiểm tra đều được coi là đã được thực hiện. A, B và C không phải là biện pháp hợp lệ.\n\nTham chiếu: FL-4.3.1 (K2) Explain  statement testing"
  },
  {
    "n": 21,
    "ref": "Question 21 [FL-4.3.3]",
    "stem": "You are working on a project with very tight deadlines. The  code is being developed but is not yet executable. What type of  testing could you apply that would help find defects now?",
    "opts": [
      {
        "k": "a",
        "t": "A) Black-box"
      },
      {
        "k": "b",
        "t": "B) White-box"
      },
      {
        "k": "c",
        "t": "C) Experience-based"
      },
      {
        "k": "d",
        "t": "D) Factor-based"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang thực hiện một dự án với thời hạn rất chặt chẽ. Mã đang được phát triển nhưng chưa thể thực thi được. loại kiểm thử (test type) nào bạn có thể áp dụng để giúp tìm ra lỗi ngay bây giờ?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hộp đen\n  B) Hộp trắng\n  C) Dựa trên kinh nghiệm\n  D) Dựa trên yếu tố\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Bạn có mã có thể được xem xét về mặt cấu trúc cho các mục như cách xử lý phân nhánh thích hợp. A và C không đúng vì chưa thể thực thi được gì. D không đúng vì đây không phải là một loại bài kiểm tra.\n\nTham chiếu: FL-4.3.3 (K2) Explain the value of white-box testing"
  },
  {
    "n": 22,
    "ref": "Question 22 [FL-4.4.1]",
    "stem": "If you are using error guessing to target your testing, which  type of testing are you doing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Specification-based"
      },
      {
        "k": "b",
        "t": "B) Structure-based"
      },
      {
        "k": "c",
        "t": "C) Experience-based"
      },
      {
        "k": "d",
        "t": "D) Reference-based"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNếu bạn đang sử dụng tính năng đoán lỗi để nhắm mục tiêu kiểm thử của mình thì bạn đang thực hiện loại kiểm thử (test type) nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Dựa trên đặc điểm kỹ thuật\n  B) Dựa trên cấu trúc\n  C) Dựa trên kinh nghiệm\n  D) Dựa trên tài liệu tham khảo\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Đây là một kỹ thuật dựa trên kinh nghiệm.\n\nTham chiếu: FL-4.4.1 (K2) Explain  error guessing"
  },
  {
    "n": 23,
    "ref": "Question 23 [FL-4.4.2]",
    "stem": "When exploratory testing is conducted using time-boxing and  test charters, what is it called?",
    "opts": [
      {
        "k": "a",
        "t": "A) Schedule-based testing"
      },
      {
        "k": "b",
        "t": "B) Session-based testing"
      },
      {
        "k": "c",
        "t": "C) Risk-based testing"
      },
      {
        "k": "d",
        "t": "D) Formal chartering"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKhi kiểm thử thăm dò (exploratory testing) được tiến hành bằng cách sử dụng time-boxing và test Charter, nó được gọi là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra theo lịch trình\n  B) Kiểm tra dựa trên phiên\n  C) Kiểm thử dựa trên rủi ro\n  D) Thuê tàu chính thức\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Điều này thường được gọi là kiểm tra theo phiên và có thể sử dụng các trang phiên. A là không đúng. Thăm dò thường không tuân theo lịch trình mà cho phép tester (kiểm thử viên) khám phá và tìm hiểu về phần mềm. Khó đánh giá mức độ bao phủ, đó là một trong những lý do khiến khó có thể cân đối thời gian bỏ ra với số lượng đã hoàn thành. C là không đúng. Đây có thể là một trong những hình thức kiểm thử dựa trên rủi ro, nhưng nó không hoàn toàn là RBT. D không đúng vì đây thực sự không phải là một thuật ngữ kiểm thử.\n\nTham chiếu: FL-4.4.2 (K2) Explain exploratory testing"
  },
  {
    "n": 24,
    "ref": "Question 24 [FL-4.5.2]",
    "stem": "You are writing some acceptance criteria for a story. You have  decided to make a list of all the likely inputs to the code and the  expected outputs based on those inputs. What format are you  using?",
    "opts": [
      {
        "k": "a",
        "t": "A) IPO chart"
      },
      {
        "k": "b",
        "t": "B) Acceptance-based"
      },
      {
        "k": "c",
        "t": "C) Rules-oriented"
      },
      {
        "k": "d",
        "t": "D) Behavior-driven"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang viết một số tiêu chí chấp nhận cho một câu chuyện. Bạn đã quyết định lập danh sách tất cả các đầu vào có thể có cho mã và các đầu ra dự kiến ​​dựa trên các đầu vào đó. Bạn đang sử dụng định dạng nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Biểu đồ IPO\n  B) Dựa trên sự chấp nhận\n  C) Định hướng quy tắc\n  D) Định hướng hành vi\n\n[GIẢI THÍCH CHI TIẾT]\nC đúng theo giáo trình. Đây là một định dạng hướng đến quy tắc. A không đúng vì mặc dù bạn đang theo dõi đầu vào và đầu ra nhưng bạn không theo dõi quá trình xử lý. B không đúng vì đây không phải là định dạng được công nhận. D không đúng vì định dạng đã cho/khi/thì được coi là hướng theo kịch bản.\n\nTham chiếu: FL-4.5.2 (K2) Classify the different  options for writing acceptance criteria"
  },
  {
    "n": 25,
    "ref": "Question 25 [FL-4.2.1]",
    "stem": "You are testing a banking application that allows a customer  to withdraw 20, 100 or 500 dollars in a single transaction. The  values are chosen from a drop-down list and no other values  may be entered. How many equivalence partitions need to be  tested to achieve 100% equivalence partition coverage?",
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
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một ứng dụng ngân hàng cho phép khách hàng rút 20, 100 hoặc 500 đô la trong một giao dịch. Các giá trị được chọn từ danh sách thả xuống và không thể nhập giá trị nào khác. Có bao nhiêu phân vùng tương đương cần được kiểm tra để đạt được độ bao phủ phân vùng tương đương 100%?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1\n  B) 2\n  C) 3\n  D) 4\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Các giá trị cần kiểm tra là 20, 100, 500 và không có lựa chọn nào.\n\nTham chiếu: FL-4.2.1 (K3) Use equivalence partitioning to derive test cases"
  },
  {
    "n": 26,
    "ref": "Question 26 [FL-4.2.2]",
    "stem": "You are testing a scale system that determines shipping  rates for a regional web-based auto parts distributor. Due to  regulations, shipments cannot exceed 100 lbs. You want to  include boundary value analysis as part of your black-box  test design.\n\nHow many tests will you need to execute to achieve 100% two- value boundary value analysis?\n\nWeight 0 to 10 lbs. 11 to 25 lbs. 26 to 50 lbs. 51 lbs. to 100 Shipping Cost $5.00 $7.50 $12.00 $17.00",
    "opts": [
      {
        "k": "a",
        "t": "A) 4"
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
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một hệ thống cân xác định giá vận chuyển cho một nhà phân phối phụ tùng ô tô dựa trên web trong khu vực. Do quy định, lô hàng không thể vượt quá 100 lbs. Bạn muốn đưa phân tích giá trị biên vào như một phần của thiết kế kiểm thử hộp đen (black-box) của mình.\n\nBạn sẽ cần thực hiện bao nhiêu kiểm thử để đạt được 100% phân tích giá trị biên hai giá trị?\n\nTrọng lượng 0 đến 10 lbs. 11 đến 25 lbs. 26 đến 50 lbs. 51 pound. đến 100 Chi phí vận chuyển $5,00 $7,50 $12,00 $17,00\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 4\n  B) 8\n  C) 10\n  D) 12\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. 2 cho mỗi phạm vi trọng lượng hợp lệ cộng với một cho trọng lượng âm và một cho trọng lượng vượt quá 100 lbs (-1, 0, 10, 11, 25, 26, 50, 51, 100, 101).\n\nTham chiếu: FL-4.2.2 (K3) Use boundary value analysis to derive test cases"
  },
  {
    "n": 27,
    "ref": "Question 27 [FL-4.2.3]",
    "stem": "Which of the following is the correct decision table for the  following pseudocode for ordering a hamburger? Note: if you  add or delete items from the basic burger, you no longer get the  basic burger. \t Start Select basic burger If customer adds items \t While items to be added \t \t Ask customer which item \t \t Add item \t End while Endif If customer deletes items \t While items to be deleted \t \t Ask customer which item \t \t Delete item \t End while Endif If customer wants fries \t Add fries to order Endif Complete order End\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Bảng quyết định phương án (A) — xem hình 1 bên dưới"
      },
      {
        "k": "b",
        "t": "B) Bảng quyết định phương án (B) — xem hình 2 bên dưới"
      },
      {
        "k": "c",
        "t": "C) Bảng quyết định phương án (C) — xem hình 3 bên dưới"
      },
      {
        "k": "d",
        "t": "D) Bảng quyết định phương án (D) — xem hình 4 bên dưới"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBảng quyết định nào sau đây là đúng cho mã giả sau đây để gọi món hamburger? Lưu ý: nếu bạn thêm hoặc xóa các mục khỏi bánh mì kẹp thịt cơ bản, bạn sẽ không còn có bánh mì kẹp thịt cơ bản nữa. \t Bắt đầu Chọn món burger cơ bản Nếu khách hàng thêm món Trong khi các món cần thêm Hỏi khách hàng món nào Thêm món Kết thúc trong khi Kết thúc Nếu khách hàng xóa các món Trong khi các món cần xóa Hỏi khách hàng món nào Xóa món Kết thúc trong khi Kết thúc Nếu khách hàng muốn khoai tây chiên Thêm khoai tây chiên để đặt hàng Kết thúc Hoàn thành đơn hàng Kết thúc\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Bảng quyết định phương án (A) — xem hình 1 bên dưới\n  B) Bảng quyết định phương án (B) — xem hình 2 bên dưới\n  C) Bảng quyết định phương án (C) — xem hình 3 bên dưới\n  D) Bảng quyết định phương án (D) — xem hình 4 bên dưới\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. A không đúng vì nó cho rằng bạn không thể thêm và xóa các món khỏi chiếc bánh mì kẹp thịt. C không đúng vì nó đưa ra giả định giống như A và có các phép kiểm tra trùng lặp. D không đúng vì Kết quả của bốn bài kiểm tra đầu tiên đều sai.\n\nTham chiếu: FL-4.2.3 (K3) Use decision  table testing to derive test cases"
  },
  {
    "n": 28,
    "ref": "Question 28 [FL-4.2.4]",
    "stem": "You are testing an e-commerce transaction that has the  following states and transitions:\n\n1. Login (invalid) > Login 2. Login > Search 3. Search > Search 4. Search > Shopping Cart 5. Shopping Cart > Search 6. Shopping Cart > Checkout 7. Checkout > Search 8. Checkout > Logout\n\nFor a state diagram, how many transitions should be shown?",
    "opts": [
      {
        "k": "a",
        "t": "A) 4"
      },
      {
        "k": "b",
        "t": "B) 6"
      },
      {
        "k": "c",
        "t": "C) 8"
      },
      {
        "k": "d",
        "t": "D) 16"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang kiểm thử một giao dịch thương mại điện tử có các trạng thái và chuyển tiếp sau:\n\n1. Đăng nhập (không hợp lệ) > Đăng nhập 2. Đăng nhập > Tìm kiếm 3. Tìm kiếm > Tìm kiếm 4. Tìm kiếm > Giỏ hàng 5. Giỏ hàng > Tìm kiếm 6. Giỏ hàng > Thanh toán 7. Thanh toán > Tìm kiếm 8. Thanh toán > Đăng xuất\n\nĐối với sơ đồ trạng thái, cần hiển thị bao nhiêu lần chuyển đổi?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 4\n  B) 6\n  C) 8\n  D) 16\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Có 8 chuyển đổi cần được hiển thị trong sơ đồ trạng thái như được giải thích trong câu hỏi. A không đúng vì đây chỉ là kiểm tra một lần chuyển đổi từ mỗi trạng thái. B không đúng vì điều này có thể loại trừ đăng nhập > đăng nhập và tìm kiếm > tìm kiếm. D không đúng vì nó cũng đang kiểm tra các chuyển đổi không hợp lệ và những chuyển đổi đó sẽ được đưa vào bảng trạng thái chứ không phải sơ đồ trạng thái. Đó là: Đăng nhập (không hợp lệ) > Đăng nhập Đăng nhập > Tìm kiếm Đăng nhập > Giỏ hàng (chuyển đổi không hợp lệ) Đăng nhập > Thanh toán (chuyển đổi không hợp lệ) Tìm kiếm > Đăng nhập (chuyển đổi không hợp lệ) Tìm kiếm > Tìm kiếm Tìm kiếm > Giỏ hàng Tìm kiếm > Thanh toán (chuyển đổi không hợp lệ) Giỏ hàng > Đăng nhập (chuyển đổi không hợp lệ) Giỏ hàng > Tìm kiếm giỏ hàng > Giỏ hàng (chuyển đổi không hợp lệ) Giỏ hàng > Thanh toán Thanh toán > Đăng nhập (chuyển đổi không hợp lệ) Thanh toán > Tìm kiếm Thanh toán > Giỏ hàng (chuyển đổi không hợp lệ) Thanh toán > Đăng xuất\n\nTham chiếu: FL-4.2.4 (K3) Use state transition testing to derive test cases"
  },
  {
    "n": 29,
    "ref": "Question 29 [FL-4.5.3]",
    "stem": "You are creating test cases for the following story, applying the  ATDD approach. \t\n\n\t \t As a hotel owner \t \t I want to reserve all the rooms on a floor before moving to the next floor \t \t So I can maximize the efficiency of the housekeeping staff\n\n\t You have decided to apply boundary value analysis to this \t \t \t requirement and have identified the following partitions for \t\t \t the occupancy of a floor: \t \t 0 | 1 - floor full | overbooked \t You also want to be sure that the software is usable by the staff  and that it performs quickly in determining which floors have  availability.\n\nYou have designed the following test cases: \t 1. Test with 1 occupant on the floor 2. Test with the floor full and ensure the next floor is made available for \t \t \t bookings 3. Test with 0 occupants on the floor and ensure that floor is only available when  lower floors are fully booked 4. Test the usability to ensure hotel staff will find the software usable 5. Test for response time when the system is at average load and the hotel is  80% occupied\n\nWhat are you missing?",
    "opts": [
      {
        "k": "a",
        "t": "A) A test with a floor partially occupied but not fully occupied"
      },
      {
        "k": "b",
        "t": "B) A test for performance"
      },
      {
        "k": "c",
        "t": "C) A test for trying to assign someone to a floor that is full"
      },
      {
        "k": "d",
        "t": "D) A test for usability"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang tạo các test case (ca kiểm thử) cho câu chuyện sau, áp dụng phương pháp ATDD. \t\n\n\t \t Là chủ khách sạn, tôi muốn đặt tất cả các phòng trên một tầng trước khi chuyển sang tầng tiếp theo Để có thể tối đa hóa hiệu quả của nhân viên dọn phòng\n\n\t Bạn đã quyết định áp dụng phân tích giá trị biên cho yêu cầu này và đã xác định được các phân vùng sau cho sức chứa của một tầng: 0 | full tầng 1 | đặt trước quá nhiều Bạn cũng muốn chắc chắn rằng nhân viên có thể sử dụng được phần mềm và nó hoạt động nhanh chóng trong việc xác định tầng nào còn trống.\n\nBạn đã thiết kế các test case (ca kiểm thử) sau: 1. kiểm thử với 1 người ở trên tầng 2. kiểm thử với tầng đầy và đảm bảo tầng tiếp theo có sẵn để đặt chỗ 3. kiểm thử với 0 người ở trên tầng và đảm bảo rằng tầng chỉ có khi các tầng dưới đã được đặt kín 4. Kiểm tra khả năng sử dụng để đảm bảo nhân viên khách sạn sẽ thấy phần mềm có thể sử dụng được 5. Kiểm tra thời gian phản hồi khi hệ thống ở mức tải trung bình và khách sạn đã kín 80%\n\nBạn đang thiếu gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm thử với sàn được sử dụng một phần nhưng không được sử dụng hoàn toàn\n  B) Một bài kiểm tra hiệu suất\n  C) Bài kiểm tra việc cố gắng phân công ai đó vào một tầng đã kín chỗ\n  D) Kiểm tra khả năng sử dụng\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Bài kiểm tra còn thiếu là thử xem liệu bạn có thể phân bổ ai đó vào một tầng đã được đặt kín hay không. Đây là một kiểm thử tiêu cực và sẽ dẫn đến một lỗi. A được bao phủ bởi kiểm thử với một người ngồi trong xe. B và D được bảo hiểm.\n\nTham chiếu: FL-4.5.3 (K3) Use acceptance test-driven  development (ATDD) to derive test cases"
  },
  {
    "n": 30,
    "ref": "Question 30 [FL-5.2.1]",
    "stem": "Level of risk is determined by which of the following?",
    "opts": [
      {
        "k": "a",
        "t": "A) Likelihood and impact"
      },
      {
        "k": "b",
        "t": "B) Priority and risk rating"
      },
      {
        "k": "c",
        "t": "C) Probability and practicality"
      },
      {
        "k": "d",
        "t": "D) Risk identification and mitigation"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMức độ rủi ro được xác định bởi yếu tố nào sau đây?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Khả năng và tác động\n  B) Mức độ ưu tiên và đánh giá rủi ro\n  C) Xác suất và tính thực tiễn\n  D) Xác định và giảm thiểu rủi ro\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Sự kết hợp giữa khả năng xảy ra và tác động thường được sử dụng để xác định mức độ rủi ro tổng thể (đôi khi được gọi là số ưu tiên rủi ro).\n\nTham chiếu: FL-5.2.1 (K1) Identify risk level by using risk likelihood and  risk impact"
  },
  {
    "n": 31,
    "ref": "Question 31 [FL-5.1.3]",
    "stem": "Which of the following is an example of a good exit criterion  from system testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) All tests should be completed"
      },
      {
        "k": "b",
        "t": "B) The project budget should be spent"
      },
      {
        "k": "c",
        "t": "C) All defects should be fixed"
      },
      {
        "k": "d",
        "t": "D) All severity 1 defects must be resolved"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là ví dụ về tiêu chí tốt để thoát khỏi kiểm thử hệ thống (system testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tất cả các bài kiểm tra phải được hoàn thành\n  B) Ngân sách dự án nên được chi tiêu\n  C) Mọi khuyết điểm cần được khắc phục\n  D) Tất cả các lỗi nghiêm trọng 1 phải được giải quyết\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Điều này có thể đo lường được và rõ ràng. A không đúng vì đã hoàn thành không phải là một thuật ngữ rõ ràng và đây có thể không phải là một mục tiêu hợp lý và “nên” không phải là một mục tiêu rõ ràng. B không đúng vì việc chi tiêu ngân sách nói chung không phải là mục tiêu và bạn sẽ không mong đợi ngân sách sẽ được chi tiêu khi quá trình kiểm thử hệ thống được thực hiện vì điều đó không để lại tiền cho việc kiểm thử chấp nhận (acceptance testing) hoặc triển khai. C không đúng vì đây là điều “nên” và cũng có thể không thực tế.\n\nTham chiếu: FL-5.1.3 (K2) Compare and contrast  entry criteria and exit criteria"
  },
  {
    "n": 32,
    "ref": "Question 32 [FL-5.1.7]",
    "stem": "You are working on a project and have determined that  exploratory testing is the best test technique to apply. Which  testing quadrant are you using?",
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
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang làm việc trên một dự án và đã xác định rằng kiểm thử thăm dò (exploratory testing) là kỹ thuật kiểm thử (test technique) tốt nhất để áp dụng. Bạn đang sử dụng tứ phân vị kiểm thử (testing quadrants) nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Q1\n  B) Q2\n  C) Q3\n  D) Q4\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. kiểm thử thăm dò (exploratory testing) thuộc góc phần tư thứ 3.\n\nTham chiếu: FL-5.1.7 (K2) Summarize the testing quadrants and their relationships with test  levels and test types"
  },
  {
    "n": 33,
    "ref": "Question 33 [FL-5.1.7]",
    "stem": "Which of the following is a project risk?",
    "opts": [
      {
        "k": "a",
        "t": "A) A defect that is causing a performance issue"
      },
      {
        "k": "b",
        "t": "B) A duplicate requirement"
      },
      {
        "k": "c",
        "t": "C) An issue with a data conversion procedure"
      },
      {
        "k": "d",
        "t": "D) A schedule that requires work during Christmas shutdown"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là rủi ro của dự án?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Một lỗi gây ra vấn đề về hiệu suất\n  B) Yêu cầu trùng lặp\n  C) Sự cố với quy trình chuyển đổi dữ liệu\n  D) Một lịch trình yêu cầu phải làm việc trong thời gian nghỉ lễ Giáng sinh\n\n[GIẢI THÍCH CHI TIẾT]\nD đúng, đây là rủi ro cho toàn bộ dự án. A, B và C là rủi ro sản phẩm.\n\nTham chiếu: FL-5.1.7 (K2) Summarize the testing quadrants and their  relationships with test levels and test types"
  },
  {
    "n": 34,
    "ref": "Question 34 [FL-5.3.3]",
    "stem": "You have just completed testing on a major ERP  implementation. The project has taken two years and  is now ready for final approval before go-live. What test  documentation should be produced at this time?",
    "opts": [
      {
        "k": "a",
        "t": "A) Formal test completion"
      },
      {
        "k": "b",
        "t": "B) Testing team task board"
      },
      {
        "k": "c",
        "t": "C) Email to the team congratulating them on their success"
      },
      {
        "k": "d",
        "t": "D) Burn down chart"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn vừa hoàn thành kiểm thử triển khai ERP chính. Dự án đã mất hai năm và hiện đã sẵn sàng để phê duyệt lần cuối trước khi đi vào hoạt động. Những tài liệu kiểm tra nào nên được sản xuất tại thời điểm này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hoàn thành bài kiểm tra chính thức\n  B) Bảng nhiệm vụ của nhóm kiểm tra\n  C) Gửi email cho nhóm chúc mừng thành công của họ\n  D) Biểu đồ đốt cháy\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Tại thời điểm này của dự án, cần chuẩn bị báo cáo hoàn thành kiểm thử chính thức. B và D được sử dụng để trao đổi thông tin trong quá trình thực hiện dự án. C có thể còn sớm vì vẫn chưa có phê duyệt cuối cùng và đây không phải là tài liệu kiểm tra\n\nTham chiếu: FL-5.3.3 (K2) Exemplify how to communicate the status of testing"
  },
  {
    "n": 35,
    "ref": "Question 35 [FL-5.4.1]",
    "stem": "You are working on a project that is releasing software to the  test team in iterations. In iteration 3 you identified a failure.  The developer found and fixed the defect and released the fix in  iteration 4. You confirmed the fix and closed the defect report.  You are now testing iteration 7 and the failure has occurred  again. You have talked to the developer and he doesn’t know  how or when the failure came back and has asked you to  investigate.\n\nHow can configuration management help you gather more  information on this failure?",
    "opts": [
      {
        "k": "a",
        "t": "A) You can see what changed in iteration 4 to fix the problem"
      },
      {
        "k": "b",
        "t": "B) You can reload and retest iterations 5 and 6 to see where the problem was re-introduced"
      },
      {
        "k": "c",
        "t": "C) You can review all the code changes that have occurred since iteration 4 to see what might have broken it"
      },
      {
        "k": "d",
        "t": "D) You can improve the regression testing to ensure the failure is caught earlier"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang làm việc trong một dự án phát hành phần mềm cho nhóm kiểm thử theo từng bước lặp lại. Trong lần lặp 3, bạn đã xác định được lỗi.  Nhà phát triển đã tìm thấy và sửa lỗi cũng như đưa ra bản sửa lỗi trong lần lặp 4. Bạn đã xác nhận bản sửa lỗi và đóng báo cáo lỗi.  Bây giờ bạn đang kiểm thử lần lặp 7 và lỗi lại xảy ra. Bạn đã nói chuyện với nhà phát triển và anh ta không biết lỗi xảy ra như thế nào và khi nào và đã yêu cầu bạn điều tra.\n\nQuản lý cấu hình có thể giúp bạn thu thập thêm thông tin về lỗi này như thế nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Bạn có thể xem những gì đã thay đổi trong lần lặp 4 để khắc phục sự cố\n  B) Bạn có thể tải lại và kiểm tra lại lần lặp 5 và 6 để xem vấn đề được tái hiện ở đâu\n  C) Bạn có thể xem lại tất cả các thay đổi mã đã xảy ra kể từ lần lặp 4 để xem điều gì có thể đã làm hỏng mã đó.\n  D) Bạn có thể cải thiện việc kiểm tra hồi quy để đảm bảo lỗi được phát hiện sớm hơn\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Vì bạn có quyền quản lý cấu hình nên bạn có thể lấy và cài đặt lại mã từ lần lặp 5 và 6, đồng thời xem sự cố đã xuất hiện lại ở đâu. A không đúng vì điều đó có thể giúp ích cho quá trình kiểm tra xác nhận ban đầu và có thể là kiểm tra hồi quy, nhưng nó không giúp giải quyết vấn đề hiện tại. C là trách nhiệm của nhà phát triển. D là một ý tưởng hay nhưng sẽ không giúp ích gì cho tình hình hiện tại.\n\nTham chiếu: FL-5.4.1 (K2) Summarize how configuration  management supports testing"
  },
  {
    "n": 36,
    "ref": "Question 36 [FL-5.1.4]",
    "stem": "You are estimating the testing time required for a new project.  You have gathered information from three experts and they  have given you the following numbers in days:\n\n\n\n\nUsing the average numbers from the table above and applying  the three-point estimation technique, what is the estimate?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 325 ± 45"
      },
      {
        "k": "b",
        "t": "B) 81.25 ± 8"
      },
      {
        "k": "c",
        "t": "C) 54.17 ± 7.5"
      },
      {
        "k": "d",
        "t": "D) 40 ± 2"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đang ước tính thời gian kiểm thử cần thiết cho một dự án mới.  Bạn đã thu thập thông tin từ ba chuyên gia và họ đã cung cấp cho bạn những con số sau trong vài ngày:\n\n\n\n\nSử dụng các số trung bình từ bảng trên và áp dụng kỹ thuật ước lượng ba điểm, ước tính là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 325 ± 45\n  B) 81,25 ± 8\n  C) 54,17 ± 7,5\n  D) 40 ± 2\n\n[GIẢI THÍCH CHI TIẾT]\nC là đúng. Công thức là (Lạc quan + 4(Có khả năng) + Bi quan)/6 nên câu trả lời là (30+220+75)/6 = 54,17 và độ lệch chuẩn là (75-30)/6 là 7,5.\n\nTham chiếu: FL-5.1.4 (K3) Use estimation techniques to calculate the  required test effort"
  },
  {
    "n": 37,
    "ref": "Question 37 [FL-5.1.5]",
    "stem": "Consider the following test cases that are used to test an  accounting system:\n\n\t Given this information, what is the proper order in which to  execute these test cases?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 5, 1, 3, 2, 4"
      },
      {
        "k": "b",
        "t": "B) 1, 2, 4, 5, 3"
      },
      {
        "k": "c",
        "t": "C) 1, 3, 2, 4, 5"
      },
      {
        "k": "d",
        "t": "D) 3, 4, 5, 1, 2"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét các trường hợp kiểm thử sau đây được sử dụng để kiểm tra hệ thống kế toán:\n\n\t Với thông tin này, thứ tự thích hợp để thực hiện các test case (ca kiểm thử) này là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 5, 1, 3, 2, 4\n  B) 1, 2, 4, 5, 3\n  C) 1, 3, 2, 4, 5\n  D) 3, 4, 5, 1, 2\n\n[GIẢI THÍCH CHI TIẾT]\nB đúng. Mục tiêu là chạy các bài kiểm tra có mức độ ưu tiên cao nhất càng sớm càng tốt. Sự phụ thuộc phải được xem xét để các bài kiểm thử thực sự được thực hiện. Để chạy kiểm thử có mức độ ưu tiên cao nhất càng sớm càng tốt, thứ tự đúng như sau: kiểm thử 1 phải được thực hiện trước vì mọi thứ khác đều phụ thuộc vào nó. Sau đó chúng ta cần làm 2 để có thể làm 4 và 5 (bài kiểm tra có mức độ ưu tiên cao nhất) và sau đó là 3 vì 5 không phụ thuộc vào nó. A không đúng vì 5 không thể chạy trước. C không đúng vì nó không chạy 5 sớm nhất có thể; nó trì hoãn nó cho đến khi sau 3 giờ chạy. D không đúng vì 3 không thể chạy trước vì nó yêu cầu 1 và 2.\n\nTham chiếu: FL-5.1.5 (K3) Apply test case prioritization"
  },
  {
    "n": 38,
    "ref": "Question 38 [FL-5.1.5]",
    "stem": "You have received the following description section in a defect  report:\n\nThe report executed per the attached steps, but the data was incorrect.  For example, the information in column 1 was wrong. See the attached  screenshot. This report is critical to the users and they will be unable to  do their jobs without this information.\n\nWhat is the biggest problem with this defect report?",
    "opts": [
      {
        "k": "a",
        "t": "A) The developer won’t know how important the problem is"
      },
      {
        "k": "b",
        "t": "B) The developer won’t know how to repeat the test"
      },
      {
        "k": "c",
        "t": "C) The developer won’t be able to see what the tester is saying is wrong"
      },
      {
        "k": "d",
        "t": "D) The developer won’t know what the tester expected to see"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đã nhận được phần mô tả sau trong báo cáo lỗi:\n\nBáo cáo được thực hiện theo các bước đính kèm nhưng dữ liệu không chính xác.  Ví dụ: thông tin ở cột 1 sai. Xem ảnh chụp màn hình đính kèm. Báo cáo này rất quan trọng đối với người dùng và họ sẽ không thể thực hiện công việc của mình nếu không có thông tin này.\n\nVấn đề lớn nhất với báo cáo lỗi này là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhà phát triển sẽ không biết vấn đề quan trọng như thế nào\n  B) Nhà phát triển sẽ không biết cách lặp lại kiểm thử\n  C) Nhà phát triển sẽ không thể biết người kiểm tra đang nói gì sai\n  D) Nhà phát triển sẽ không biết tester (kiểm thử viên) mong đợi thấy gì\n\n[GIẢI THÍCH CHI TIẾT]\nD là đúng. Từ thông tin này, nhà phát triển chỉ biết tester (kiểm thử viên) cho rằng thông tin đó sai chứ không rõ điều gì đã được mong đợi.  A không đúng vì mặc dù mơ hồ nhưng báo cáo sự cố dường như cho thấy đây là một vấn đề quan trọng. B không chính xác vì các bước được đính kèm (hoặc có thể nói như vậy). C sai vì ảnh chụp màn hình sẽ chỉ ra cột 1 sai.\n\nTham chiếu: FL-5.1.5 (K3) Apply test case  prioritization"
  },
  {
    "n": 39,
    "ref": "Question 39 [FL-6.1.1]",
    "stem": "What is the primary purpose of a test execution tool?",
    "opts": [
      {
        "k": "a",
        "t": "A) It runs automated test scripts to test the test object"
      },
      {
        "k": "b",
        "t": "B) It automatically records defects in the defect tracking system"
      },
      {
        "k": "c",
        "t": "C) It analyzes code to determine if there are any coding standard violations"
      },
      {
        "k": "d",
        "t": "D) It tracks test cases, defects and requirements traceability"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMục đích chính của một công cụ thực hiện kiểm thử là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nó chạy các tập lệnh kiểm tra tự động để kiểm tra đối tượng kiểm tra\n  B) Nó tự động ghi lại các lỗi trong hệ thống theo dõi lỗi\n  C) Nó phân tích mã để xác định xem có bất kỳ vi phạm tiêu chuẩn mã hóa nào không\n  D) Nó theo dõi các test case (ca kiểm thử), lỗi và truy xuất nguồn gốc yêu cầu\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Đây là mục đích chính của các công cụ thực hiện kiểm thử. B có thể là điều mà công cụ có thể làm được, nhưng đây không phải là mục đích chính.  C là công cụ phân tích tĩnh và D là công cụ quản lý kiểm tra.\n\nTham chiếu: FL-6.1.1 (K2) Explain how different types of test tools support testing"
  },
  {
    "n": 40,
    "ref": "Question 40 [FL-6.2.1]",
    "stem": "Which of the following is a risk with test automation?",
    "opts": [
      {
        "k": "a",
        "t": "A) Using an automation tool that will not be supported in the future"
      },
      {
        "k": "b",
        "t": "B) Developing test automation for particularly tedious manual testing areas"
      },
      {
        "k": "c",
        "t": "C) Using technical testers to implement the automation"
      },
      {
        "k": "d",
        "t": "D) Developing automated reporting"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là rủi ro khi tự động hóa kiểm thử (test automation)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Sử dụng một công cụ tự động hóa sẽ không được hỗ trợ trong tương lai\n  B) Phát triển tự động hóa kiểm thử (test automation) cho các khu vực kiểm thử thủ công đặc biệt tẻ nhạt\n  C) Sử dụng người kiểm tra kỹ thuật để thực hiện tự động hóa\n  D) Phát triển báo cáo tự động\n\n[GIẢI THÍCH CHI TIẾT]\nA là đúng. Đó là một rủi ro đã biết với tự động hóa kiểm thử (test automation) vì nó sẽ phụ thuộc vào công cụ được sử dụng để triển khai và công cụ đó có thể không được nhà cung cấp hoặc cộng đồng hỗ trợ. B, C và D là kết quả mong đợi từ quá trình tự động hóa và không phải là rủi ro.\n\nTham chiếu: FL-6.2.1 (K1) Recall  the benefits and risks of test automation"
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
