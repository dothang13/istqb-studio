/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 04 (Giải chi tiết TV) (37 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 04 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (37 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-5.5.2]",
    "stem": "Which of the following are product risks? (See the figure for the list of risks a–e.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) b, c and e"
      },
      {
        "k": "b",
        "t": "B) b, d and e"
      },
      {
        "k": "c",
        "t": "C) a, b and e"
      },
      {
        "k": "d",
        "t": "D) b, c and d"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Product risk là rủi ro về CHẤT LƯỢNG của sản phẩm bàn giao: (a) phần mềm giao đi dễ hỏng (failure-prone) — chất lượng sản phẩm; (b) phần mềm không thực hiện đúng chức năng dự kiến — chất lượng sản phẩm; (e) tính toàn vẹn và chất lượng dữ liệu kém — chất lượng sản phẩm. Project risk là rủi ro với NĂNG LỰC THỰC HIỆN dự án: (c) thiếu nhân sự kiểm thử — vấn đề nguồn lực; (d) môi trường kiểm thử không sẵn sàng đúng hạn — vấn đề môi trường/tiến độ. Vậy product risks = {a, b, e} ⇒ (c).\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.5.2 Product and Project Risks."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-5.2.3]",
    "stem": "Which of the following is NOT a typical entry criterion?",
    "opts": [
      {
        "k": "a",
        "t": "A) Estimates of defect density or reliability measures"
      },
      {
        "k": "b",
        "t": "B) Test tool readiness in the test environment"
      },
      {
        "k": "c",
        "t": "C) Test environment availability and readiness"
      },
      {
        "k": "d",
        "t": "D) Testable code availability"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Ước lượng mật độ defect hoặc số đo độ tin cậy là các NGƯỠNG CHẤT LƯỢNG dùng làm EXIT criteria (điều kiện để kết thúc kiểm thử và đánh giá mức độ hoàn thành), không phải điều kiện để bắt đầu ⇒ (a) không phải entry criterion. Ba phương án còn lại đều là entry criteria điển hình — các điều kiện “sẵn sàng” phải thỏa trước khi bắt đầu một hoạt động/mức kiểm thử: (b) công cụ kiểm thử sẵn sàng trong môi trường; (c) môi trường kiểm thử khả dụng và sẵn sàng; (d) mã có thể kiểm thử được đã sẵn có.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2.3 Entry Criteria and Exit Criteria."
  },
  {
    "n": 3,
    "ref": "Câu 3 [FL-4.4.1]",
    "stem": "Which of the following BEST describes a methodical approach to the error guessing test technique?",
    "opts": [
      {
        "k": "a",
        "t": "A) A tester dynamically designs and executes tests based on their knowledge, exploration of the test item and the results of previous tests"
      },
      {
        "k": "b",
        "t": "B) An experienced tester makes a list of potential defects and failures, and designs and runs tests that would generate these failures should the defects be present in the code"
      },
      {
        "k": "c",
        "t": "C) A tester designs, implements and executes tests to cover test conditions found in checklists that are based on what is important for the user"
      },
      {
        "k": "d",
        "t": "D) An inexperienced tester is asked to attempt to guess errors that may have been missed by experienced testers during formal test design"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Cách tiếp cận CÓ PHƯƠNG PHÁP của error guessing (thường gọi là FAULT ATTACK): tester giàu kinh nghiệm lập DANH SÁCH các defect/failure có thể có, rồi thiết kế và chạy các test nhằm làm bộc lộ chúng nếu defect thật sự tồn tại trong mã ⇒ (b). (a) là mô tả của EXPLORATORY testing. (c) là CHECKLIST-BASED testing. (d) ngược bản chất — error guessing dựa trên KINH NGHIỆM (về ứng dụng đã vận hành thế nào, developer hay mắc lỗi gì, defect từng gặp ở hệ thống tương tự), không phải giao cho người thiếu kinh nghiệm đoán mò. (Xem thêm khái niệm nền của error guessing tại Câu 9 – Đề 2.)\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.4.1 Error Guessing."
  },
  {
    "n": 4,
    "ref": "Câu 4 [FL-4.1.1]",
    "stem": "Which of the following is a black-box test design technique?",
    "opts": [
      {
        "k": "a",
        "t": "A) Decision coverage"
      },
      {
        "k": "b",
        "t": "B) Error guessing"
      },
      {
        "k": "c",
        "t": "C) Statement coverage"
      },
      {
        "k": "d",
        "t": "D) Equivalence partitioning"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "EQUIVALENCE PARTITIONING suy dẫn test từ đặc tả hành vi (phân chia miền dữ liệu thành các phân vùng được xử lý như nhau) — thuộc nhóm BLACK-BOX ⇒ (d). (a) decision coverage và (c) statement coverage là các tiêu chí ĐỘ PHỦ của kỹ thuật WHITE-BOX (dựa trên cấu trúc mã). (b) error guessing thuộc nhóm EXPERIENCE-BASED (dựa trên kinh nghiệm), là nhóm thứ ba, không phải black-box.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.1.1 Categories of Test Techniques & 4.2.1."
  },
  {
    "n": 5,
    "ref": "Câu 5 [FL-4.3.1]",
    "stem": "Consider the pseudo code in the figure (an if–else construct where both branches contain a print statement). What is the minimum number of test cases required to guarantee 100% statement coverage and 100% decision coverage respectively?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Statement coverage = 2, Decision coverage = 1"
      },
      {
        "k": "b",
        "t": "B) Statement coverage = 1, Decision coverage = 2"
      },
      {
        "k": "c",
        "t": "C) Statement coverage = 2, Decision coverage = 2"
      },
      {
        "k": "d",
        "t": "D) Statement coverage = 3, Decision coverage = 3"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Đoạn mã có một quyết định (If X > Y) với CẢ HAI nhánh đều chứa câu lệnh (nhánh true: Print dòng 4; nhánh false/else: Print dòng 6). Statement coverage: để thực thi được cả dòng 4 lẫn dòng 6 buộc phải chạy cả hai nhánh → tối thiểu 2 test (ví dụ X>Y và X≤Y). Decision coverage: quyết định phải nhận cả hai kết cục true/false → cũng 2 test. Vậy SC = 2, DC = 2 ⇒ (c). Lưu ý: nếu KHÔNG có nhánh else chứa lệnh thì 1 test đã đủ 100% statement (nhưng decision vẫn cần 2) — đó là bẫy của phương án (b).\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.1 Statement Coverage & 4.3.2 Decision Coverage."
  },
  {
    "n": 6,
    "ref": "Câu 6 [FL-2.2.4]",
    "stem": "Where, and by whom, is beta testing normally performed?",
    "opts": [
      {
        "k": "a",
        "t": "A) By an independent test team at the developing organization's location"
      },
      {
        "k": "b",
        "t": "B) By customers or potential customers at their own locations"
      },
      {
        "k": "c",
        "t": "C) At the developing organization's site, but not by the developing team"
      },
      {
        "k": "d",
        "t": "D) By customers or potential customers at the developing organization's site"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "BETA testing (field testing) là hình thức acceptance testing do KHÁCH HÀNG hoặc khách hàng tiềm năng thực hiện tại ĐỊA ĐIỂM CỦA CHÍNH HỌ, trên môi trường thực tế của họ ⇒ (b). Đối chiếu: ALPHA testing cũng do người dùng/khách hàng tiềm năng (hoặc đội độc lập) thực hiện nhưng tại ĐỊA ĐIỂM của tổ chức phát triển — đó là nội dung của phương án (d)/(c). (a) mô tả kiểm thử nội bộ bởi đội độc lập, không phải beta.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2.4 Acceptance Testing (alpha & beta testing)."
  },
  {
    "n": 7,
    "ref": "Câu 7 [FL-1.2.3]",
    "stem": "Which of the following is a possible reason for introducing a defect into software code?",
    "opts": [
      {
        "k": "a",
        "t": "A) Improper unit testing"
      },
      {
        "k": "b",
        "t": "B) Rushing to meet a tight deadline to turn the code over for testing"
      },
      {
        "k": "c",
        "t": "C) Improper system testing"
      },
      {
        "k": "d",
        "t": "D) Focusing on static testing over dynamic testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Defect được đưa VÀO mã do ERROR của con người, và các nguyên nhân điển hình gây error gồm: ÁP LỰC THỜI GIAN, sự mệt mỏi/mất tập trung, thiếu kinh nghiệm/kỹ năng, hiểu lầm yêu cầu, độ phức tạp của hệ thống… Vội vàng cho kịp hạn bàn giao mã đúng là áp lực thời gian ⇒ (b). (a) và (c) sai bản chất: kiểm thử kém chỉ khiến defect KHÔNG BỊ PHÁT HIỆN, chứ không TẠO RA defect trong mã. (d) ưu tiên kiểm thử tĩnh cũng không phải nguyên nhân sinh defect — kiểm thử tĩnh còn giúp phát hiện defect sớm hơn.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.2.3 Errors, Defects and Failures."
  },
  {
    "n": 8,
    "ref": "Câu 8 [FL-1.2.2]",
    "stem": "Which of the following is NOT correct regarding testing and quality?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testing can give confidence in the quality of the software if it finds few or no defects"
      },
      {
        "k": "b",
        "t": "B) A properly designed test that passes reduces the overall level of risk in a system"
      },
      {
        "k": "c",
        "t": "C) Testing should not be integrated as one of the quality assurance activities, in order to remain independent"
      },
      {
        "k": "d",
        "t": "D) By understanding the root causes of defects found in other projects, testing processes can be improved"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Phát biểu SAI là (c): syllabus khẳng định kiểm thử NÊN được tích hợp như MỘT TRONG các hoạt động đảm bảo chất lượng (QA) — kiểm thử đóng góp vào chất lượng, tính độc lập của kiểm thử không đồng nghĩa tách nó khỏi hệ thống QA ⇒ (c). Ba phương án còn lại đều đúng: (a) kiểm thử (được thiết kế đúng) tìm thấy ít hoặc không có defect làm tăng niềm tin vào chất lượng; (b) test được thiết kế tốt và ĐẠT sẽ giảm mức rủi ro tổng thể của hệ thống; (d) phân tích nguyên nhân gốc defect của các dự án khác giúp cải tiến quy trình (bài học kinh nghiệm — một phần của QA).\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.2.2 Quality and Quality Assurance."
  },
  {
    "n": 9,
    "ref": "Câu 9 [FL-1.2.3]",
    "stem": "According to the ISTQB syllabus, a human being can make (A), which produces (B) in the program code or in a document. Which of the following combinations is correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) A – Fault, B – Mistake"
      },
      {
        "k": "b",
        "t": "B) A – Fault, B – Error"
      },
      {
        "k": "c",
        "t": "C) A – Defect, B – Bug"
      },
      {
        "k": "d",
        "t": "D) A – Error, B – Fault"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Chuỗi thuật ngữ chuẩn: con người mắc ERROR (mistake — sai lầm của con người), error tạo ra DEFECT (fault, bug — khiếm khuyết) trong mã nguồn hoặc tài liệu; khi mã chứa defect được thực thi có thể gây FAILURE (hành vi sai quan sát được). Vậy A = Error, B = Fault ⇒ (d). (a) và (b) đảo ngược chiều nhân quả (fault không “tạo ra” error/mistake). (c) defect và bug là TỪ ĐỒNG NGHĨA — không phải quan hệ “tạo ra”.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.2.3 Errors, Defects and Failures & ISTQB Glossary."
  },
  {
    "n": 10,
    "ref": "Câu 11 [FL-4.3.2]",
    "stem": "Inspect the piece of pseudo code in the figure (a nested if for payment handling). How many test cases at least are needed to achieve full decision coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
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
      "b"
    ],
    "multi": false,
    "exp": "Mã có hai quyết định lồng nhau: D1 — thanh toán bằng tiền mặt? (2 kết cục); D2 — là Việt Nam Đồng? (2 kết cục, chỉ đạt tới được khi D1 = true). Để phủ decision coverage: cần D2 = true và D2 = false → 2 test đều phải có D1 = true (tiền mặt-VND: “Accept”; tiền mặt-ngoại tệ: “Exchange”); cộng thêm 1 test D1 = false (thanh toán thẻ: “Pay by Credit Card”). Không thể ít hơn vì hai kết cục của D2 buộc phải nằm ở hai test khác nhau và cả hai đều chưa phủ được D1 = false. Tối thiểu = 3 ⇒ (b).\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Coverage."
  },
  {
    "n": 11,
    "ref": "Câu 12 [FL-5.3]",
    "stem": "Which of the following is NOT correct about the metrics which should be collected during and at the end of a test level, in order to assess the testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) The adequacy of the test objectives for that test level"
      },
      {
        "k": "b",
        "t": "B) The adequacy of the test approaches taken"
      },
      {
        "k": "c",
        "t": "C) The effectiveness of the testing with respect to the objectives"
      },
      {
        "k": "d",
        "t": "D) The adequacy of how well the testers anticipated defects based on their experience"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Theo syllabus, số đo được thu thập trong và cuối mỗi test level nhằm đánh giá BA khía cạnh: (1) sự PHÙ HỢP của các MỤC TIÊU kiểm thử đặt ra cho level đó; (2) sự PHÙ HỢP của CÁCH TIẾP CẬN kiểm thử đã dùng; (3) HIỆU QUẢ của việc kiểm thử so với mục tiêu. Phương án (d) — “đánh giá mức độ tester dự đoán defect dựa trên kinh nghiệm” — không thuộc danh sách này và cũng đi ngược nguyên tắc không dùng số đo kiểm thử để đánh giá cá nhân ⇒ (d).\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.3 Test Monitoring and Control (mục đích của số đo kiểm thử)."
  },
  {
    "n": 12,
    "ref": "Câu 13 [FL-5.1.1]",
    "stem": "Several levels of test independence are defined below. Which of the following has the LOWEST independence?",
    "opts": [
      {
        "k": "a",
        "t": "A) Tests designed by the person who wrote the software under test"
      },
      {
        "k": "b",
        "t": "B) Tests designed by another person"
      },
      {
        "k": "c",
        "t": "C) Tests designed by a person from a different organizational group, or by test specialists"
      },
      {
        "k": "d",
        "t": "D) Tests designed by a person from a different organization or company"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Các mức độc lập từ THẤP đến CAO: (1) không có tester độc lập — developer tự test mã của mình (mức độc lập THẤP NHẤT vì chịu trọn thiên kiến của tác giả); (2) developer/người khác trong cùng nhóm thiết kế test; (3) tester/nhóm test độc lập trong tổ chức (nhóm khác, chuyên gia kiểm thử); (4) tester từ tổ chức/công ty KHÁC (thuê ngoài, chứng nhận bên thứ ba) — cao nhất. Vậy thấp nhất là (a). Lưu ý: độc lập thấp không có nghĩa vô dụng — developer tự test vẫn tìm được nhiều defect sớm và rẻ.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.1.1 Independent Testing."
  },
  {
    "n": 13,
    "ref": "Câu 16 [FL-1.2.3]",
    "stem": "A software application incorrectly gave customers a discount of 50% off their total purchases when the purchases exceeded $100. It was discovered through an audit that the discount should have been only 5%. A root cause analysis uncovered that the requirements incorrectly stated 50% instead of 5% in this scenario. Which of the following statements is correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) The incorrect discount is the root cause; the root cause analysis led to investigating the software code, design and requirements"
      },
      {
        "k": "b",
        "t": "B) A defect in the code is determined to be the root cause of the incorrect calculation"
      },
      {
        "k": "c",
        "t": "C) The incorrect customer discount is the effect, and the reason for the requirement error is the root cause"
      },
      {
        "k": "d",
        "t": "D) The audit found the root cause; the incorrect calculation of 50% is the defect and the incorrect requirement is the effect"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Chuỗi nhân quả: ROOT CAUSE (lý do khiến người viết yêu cầu ghi nhầm 50% thay vì 5% — ví dụ thiếu hiểu biết nghiệp vụ, thiếu review) → DEFECT (con số 50% sai trong TÀI LIỆU YÊU CẦU, được cài vào mã đúng theo yêu cầu sai) → EFFECT/FAILURE (khách hàng nhận chiết khấu sai khi hệ thống vận hành). Vậy chiết khấu sai cho khách là HẬU QUẢ, còn nguyên nhân dẫn đến lỗi trong yêu cầu là ROOT CAUSE ⇒ (c). (a) gọi nhầm hậu quả là root cause. (b) sai: mã cài đúng theo yêu cầu — defect nằm ở YÊU CẦU, không phải code. (d) đảo ngược: yêu cầu sai là DEFECT chứ không phải effect.\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.2.3 Errors, Defects and Failures (defects, root causes and effects)."
  },
  {
    "n": 14,
    "ref": "Câu 17 [FL-3.2.1]",
    "stem": "Which of the following relates to a typical “fixing and reporting” activity of a formal review?",
    "opts": [
      {
        "k": "a",
        "t": "A) Recording the updated status of defects (in formal reviews)"
      },
      {
        "k": "b",
        "t": "B) Communicating identified potential defects"
      },
      {
        "k": "c",
        "t": "C) Analyzing potential defects, and assigning ownership and status to them"
      },
      {
        "k": "d",
        "t": "D) Noting potential defects, recommendations and questions"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Hoạt động FIXING AND REPORTING của quy trình review gồm: tạo defect report cho các phát hiện cần sửa, author sửa defect, TRAO ĐỔI defect với người/nhóm sở hữu sản phẩm liên quan, GHI NHẬN TRẠNG THÁI CẬP NHẬT của defect (trong review chính thức), thu thập số đo, kiểm tra exit criteria và chấp nhận work product khi đạt ⇒ (a). Các phương án còn lại thuộc hoạt động khác: (b) và (c) thuộc ISSUE COMMUNICATION AND ANALYSIS (trao đổi, phân tích issue, gán chủ sở hữu và trạng thái); (d) thuộc INDIVIDUAL REVIEW (ghi nhận defect tiềm ẩn, khuyến nghị, câu hỏi khi review cá nhân).\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.1 Work Product Review Process."
  },
  {
    "n": 15,
    "ref": "Câu 18 [FL-6.1.2]",
    "stem": "Which of the following is NOT a risk of using testing tools?",
    "opts": [
      {
        "k": "a",
        "t": "A) Underestimating the time, cost and effort needed to achieve significant and continuing benefits from the tool"
      },
      {
        "k": "b",
        "t": "B) Having unrealistic expectations for the tool"
      },
      {
        "k": "c",
        "t": "C) Greater consistency and repeatability"
      },
      {
        "k": "d",
        "t": "D) Neglecting version control of test assets within the tool"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "“Tính nhất quán và khả năng lặp lại cao hơn” là LỢI ÍCH của việc dùng công cụ (công cụ thực hiện cùng thao tác theo cùng cách mỗi lần chạy), không phải rủi ro ⇒ (c). Ba phương án còn lại đều là rủi ro điển hình được syllabus liệt kê: (a) đánh giá thấp thời gian/chi phí/công sức để đạt lợi ích đáng kể và BỀN VỮNG; (b) kỳ vọng phi thực tế về công cụ (xem công cụ là “thuốc tiên”); (d) sao nhãng việc quản lý phiên bản các test asset trong công cụ.\n📌 Kiến thức: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.1.2 Benefits and Risks of Test Automation."
  },
  {
    "n": 16,
    "ref": "Câu 19 [FL-6.1.1]",
    "stem": "Which of the following tools measures the percentage of specified types of code structure that have been exercised?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test harness / unit test framework tools"
      },
      {
        "k": "b",
        "t": "B) Test comparators"
      },
      {
        "k": "c",
        "t": "C) Coverage measurement tools"
      },
      {
        "k": "d",
        "t": "D) Security testing tools"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "COVERAGE MEASUREMENT TOOLS đo tỷ lệ phần trăm các loại cấu trúc mã đã được thực thi bởi bộ test — ví dụ statement coverage, decision/branch coverage ⇒ (c). (a) test harness/unit test framework tạo môi trường chạy test đơn vị (thay stub/driver), không đo độ phủ. (b) test comparator so sánh kết quả thực tế với kết quả mong đợi. (d) công cụ kiểm thử bảo mật đánh giá các đặc tính an ninh, không liên quan độ phủ cấu trúc mã.\n📌 Kiến thức: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.1.1 Test Tool Classification."
  },
  {
    "n": 17,
    "ref": "Câu 20 [FL-4.1.1]",
    "stem": "Which of the following describes structure-based test case design techniques?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases are derived systematically from models of the system"
      },
      {
        "k": "b",
        "t": "B) Test cases are derived systematically from the tester's experience"
      },
      {
        "k": "c",
        "t": "C) Test cases are derived systematically from the delivered code"
      },
      {
        "k": "d",
        "t": "D) Test cases are derived from the developers' experience"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Kỹ thuật STRUCTURE-BASED (white-box) suy dẫn test một cách hệ thống từ CẤU TRÚC BÊN TRONG của test object — mã nguồn đã bàn giao, kiến trúc, thiết kế chi tiết ⇒ (c). (a) “từ mô hình của hệ thống” mô tả các kỹ thuật SPECIFICATION-BASED/black-box (mô hình hình thức hoặc phi hình thức của hành vi). (b) và (d) “từ kinh nghiệm của tester/developer” mô tả nhóm EXPERIENCE-BASED.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.1.1 Categories of Test Techniques & 4.3 White-box Techniques."
  },
  {
    "n": 18,
    "ref": "Câu 21 [FL-6.1.1]",
    "stem": "Which of the following tools is necessary for the storage and version management of testware and related software, especially when configuring more than one hardware/software environment (in terms of operating system versions, compilers, browsers)?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test management tools"
      },
      {
        "k": "b",
        "t": "B) Requirements management tools"
      },
      {
        "k": "c",
        "t": "C) Incident management tools"
      },
      {
        "k": "d",
        "t": "D) Configuration management tools"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Công cụ QUẢN LÝ CẤU HÌNH (configuration management) lưu trữ và quản lý PHIÊN BẢN của testware cùng các phần mềm liên quan — đặc biệt cần thiết khi phải duy trì nhiều cấu hình môi trường phần cứng/phần mềm khác nhau (phiên bản hệ điều hành, trình biên dịch, trình duyệt…), bảo đảm truy vết được test nào chạy trên phiên bản/cấu hình nào ⇒ (d). (a) test management tool quản lý test case/tiến độ/báo cáo; (b) requirements management tool quản lý yêu cầu và truy vết; (c) incident (defect) management tool quản lý vòng đời defect — đều không đảm nhiệm quản lý phiên bản đa môi trường.\n📌 Kiến thức: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.1.1 Test Tool Classification (& Chương 5, mục 5.4 Configuration Management)."
  },
  {
    "n": 19,
    "ref": "Câu 22 [FL-5.3]",
    "stem": "Which of the following is NOT a test control action in test progress monitoring and control?",
    "opts": [
      {
        "k": "a",
        "t": "A) Making decisions based on information from test monitoring"
      },
      {
        "k": "b",
        "t": "B) Setting an exit criterion requiring fixes to have been re-tested"
      },
      {
        "k": "c",
        "t": "C) Re-prioritizing tests when an identified risk occurs"
      },
      {
        "k": "d",
        "t": "D) Changing the test schedule due to availability or unavailability of a test environment"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "TEST CONTROL là các hành động điều chỉnh trong lúc thực hiện dựa trên thông tin giám sát: (a) ra quyết định dựa trên thông tin từ test monitoring; (c) tái ưu tiên test khi một rủi ro đã nhận diện xảy ra; (d) thay đổi lịch kiểm thử do môi trường (không) sẵn sàng — cả ba đều là ví dụ chuẩn của test control. Riêng (b) là bẫy: ví dụ trong syllabus là “đặt một ENTRY criterion yêu cầu bản sửa phải được developer kiểm tra lại (re-test) trước khi nhận vào build” — phương án đổi thành “EXIT criterion” là sai; hơn nữa việc ĐẶT tiêu chí thuộc về LẬP KẾ HOẠCH, không phải hành động kiểm soát ⇒ (b).\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.3 Test Monitoring and Control."
  },
  {
    "n": 20,
    "ref": "Câu 23 [FL-5.5.2]",
    "stem": "Which of the following is a project risk?",
    "opts": [
      {
        "k": "a",
        "t": "A) An improper attitude toward, or expectations of, testing"
      },
      {
        "k": "b",
        "t": "B) The potential that the software/hardware could cause harm to an individual or company"
      },
      {
        "k": "c",
        "t": "C) Poor data integrity and quality"
      },
      {
        "k": "d",
        "t": "D) Software that does not perform its intended functions"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "PROJECT RISK liên quan đến các yếu tố đe dọa việc quản lý và thực hiện dự án — trong đó có các VẤN ĐỀ TỔ CHỨC như thái độ hoặc kỳ vọng không đúng đắn về kiểm thử (ví dụ không trân trọng giá trị của việc tìm defect) ⇒ (a). Ba phương án còn lại là PRODUCT RISK: (b) khả năng phần mềm/phần cứng gây hại cho con người hoặc tổ chức; (c) tính toàn vẹn và chất lượng dữ liệu kém; (d) phần mềm không thực hiện đúng các chức năng dự kiến — đều là vấn đề chất lượng của chính sản phẩm.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.5.2 Product and Project Risks."
  },
  {
    "n": 21,
    "ref": "Câu 24 [FL-3.2.3]",
    "stem": "Regarding the technical review process, consider the three statements in the figure (A: less focus on higher-level and related documents; B: the moderator does not perform a formal entry check because the document is not ready yet; C: the steps are the same as in the inspection process, but the objective is different). Which of the following is true?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) A is true; B and C are false"
      },
      {
        "k": "b",
        "t": "B) A and B are true, C is false"
      },
      {
        "k": "c",
        "t": "C) A, B and C are all true"
      },
      {
        "k": "d",
        "t": "D) A and C are true; B is false"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "(A) ĐÚNG: technical review tập trung đạt ĐỒNG THUẬN về nội dung KỸ THUẬT của chính tài liệu; việc đối chiếu chặt chẽ với tài liệu cấp cao hơn/tài liệu liên quan bằng rules và checklist là đặc trưng của INSPECTION, nên technical review ít chú trọng khía cạnh đó hơn. (C) ĐÚNG: các bước tiến hành (lập kế hoạch, review cá nhân, họp, sửa chữa, theo dõi) về cơ bản giống inspection, nhưng MỤC TIÊU khác — thảo luận, ra quyết định kỹ thuật, đánh giá phương án thay vì quy trình phát hiện defect chính thức tối đa. (B) SAI: technical review không có bước kiểm tra entry chính thức là do quy trình ÍT HÌNH THỨC HƠN inspection, chứ không phải “vì tài liệu chưa sẵn sàng” — lý do nêu ra là ngụy biện. Vậy A, C đúng; B sai ⇒ (d).\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.3 Review Types (technical review so với inspection)."
  },
  {
    "n": 22,
    "ref": "Câu 27 [FL-4.2.1]",
    "stem": "A money order system is designed to calculate the charge for a transfer: amounts from 1 to 1999 are charged EUR 10; amounts from 2000 to 5000 are charged EUR 15; amounts below EUR 1 or above EUR 5000 are not accepted. Assume that only integer values can occur. Which of these sets of amounts covers all equivalence classes?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 0.99 – 1 – 2000 – 4999.99"
      },
      {
        "k": "b",
        "t": "B) 0 – 100 – 2000 – 6000"
      },
      {
        "k": "c",
        "t": "C) 1 – 2000 – 5001 – 10000"
      },
      {
        "k": "d",
        "t": "D) 0 – 1999 – 2000 – 5000"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Với ràng buộc chỉ nhận SỐ NGUYÊN, có 4 phân vùng tương đương: P1 ≤ 0 (không chấp nhận), P2 = 1–1999 (phí 10 EUR), P3 = 2000–5000 (phí 15 EUR), P4 ≥ 5001 (không chấp nhận). Xét từng phương án: (b) 0 ∈ P1, 100 ∈ P2, 2000 ∈ P3, 6000 ∈ P4 — phủ đủ CẢ 4 phân vùng ⇒ (b). (a) chứa 0.99 và 4999.99 không phải số nguyên (giá trị không thể xảy ra) và bỏ sót P4. (c) 1 ∈ P2, 2000 ∈ P3, 5001 và 10000 đều ∈ P4 — bỏ sót P1. (d) 0 ∈ P1, 1999 ∈ P2, 2000 và 5000 đều ∈ P3 — bỏ sót P4.\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 23,
    "ref": "Câu 28 [FL-2.1.1]",
    "stem": "Which of the following is true about the V-model?",
    "opts": [
      {
        "k": "a",
        "t": "A) It has the same steps as the waterfall model for software development"
      },
      {
        "k": "b",
        "t": "B) It enables test planning to start as early as possible"
      },
      {
        "k": "c",
        "t": "C) It is referred to as a cyclical model for software development"
      },
      {
        "k": "d",
        "t": "D) It enables the production of a working version of the system as early as possible"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Điểm cốt lõi của V-model: mỗi giai đoạn PHÁT TRIỂN bên nhánh trái có một mức KIỂM THỬ tương ứng bên nhánh phải, và các hoạt động kiểm thử (lập kế hoạch, phân tích, thiết kế test) BẮT ĐẦU SONG SONG với giai đoạn phát triển tương ứng — tức test planning có thể khởi động ngay từ giai đoạn yêu cầu, sớm nhất có thể ⇒ (b). (a) sai: V-model mở rộng waterfall bằng cách tích hợp kiểm thử vào từng giai đoạn, không “giống hệt các bước”. (c) sai: V-model là mô hình TUẦN TỰ, không phải mô hình vòng lặp. (d) “có phiên bản chạy được sớm nhất” là đặc điểm của mô hình LẶP/TĂNG TRƯỞNG (iterative/incremental).\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.1.1 Software Development Lifecycle Models."
  },
  {
    "n": 24,
    "ref": "Câu 29 [FL-1.5.2]",
    "stem": "Which statement BEST describes the key difference between a mindset for test activities and a mindset for development activities?",
    "opts": [
      {
        "k": "a",
        "t": "A) A tester is interested in building solutions, while a developer is concerned with verifying the product"
      },
      {
        "k": "b",
        "t": "B) A tester is concerned with finding defects, while a developer is interested in designing solutions"
      },
      {
        "k": "c",
        "t": "C) A tester is concerned with verifying the product, while a developer possesses professional pessimism"
      },
      {
        "k": "d",
        "t": "D) A tester possesses professional pessimism, while a developer is concerned with validating the product"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Khác biệt then chốt: tư duy TESTER hướng tới TÌM DEFECT/FAILURE (tò mò, bi quan nghề nghiệp, con mắt phản biện, chú ý chi tiết), còn tư duy DEVELOPER hướng tới THIẾT KẾ VÀ XÂY DỰNG GIẢI PHÁP ⇒ (b). (a) đảo ngược hai vế. (c) gán “bi quan nghề nghiệp” cho developer — sai, đó là nét của tester. (d) vế đầu đúng (tester có professional pessimism) nhưng vế sau sai — “validate sản phẩm” không phải trọng tâm tư duy của developer, khiến cả phát biểu không mô tả đúng SỰ KHÁC BIỆT. (Câu 27 – Đề 2 hỏi một PHẨM CHẤT đặc trưng của tester; câu này hỏi phát biểu so sánh hai lối tư duy.)\n📌 Kiến thức: Chương 1 – Nền tảng kiểm thử, mục 1.5.2 Tester's and Developer's Mindsets."
  },
  {
    "n": 25,
    "ref": "Câu 30 [FL-6.2.3]",
    "stem": "Which of the following is a factor that could NEGATIVELY influence the success of the deployment of a tool within an organization?",
    "opts": [
      {
        "k": "a",
        "t": "A) Introducing the tool to all the test teams of the organization at the same time"
      },
      {
        "k": "b",
        "t": "B) Collecting usage information about the tool from the early projects"
      },
      {
        "k": "c",
        "t": "C) Providing training and coaching for new users of the tool"
      },
      {
        "k": "d",
        "t": "D) Adapting and improving the processes to fit the usage of the tool"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "Yếu tố thành công khi triển khai công cụ là TRIỂN KHAI TĂNG DẦN (roll out incrementally) từ dự án pilot sang các nhóm còn lại; đưa công cụ đến TẤT CẢ các nhóm CÙNG LÚC (big-bang) đi ngược khuyến nghị, dễ gây quá tải hỗ trợ, thiếu bài học điều chỉnh — là yếu tố ảnh hưởng tiêu cực ⇒ (a). Ba phương án còn lại đều là yếu tố thành công theo syllabus: (b) thu thập thông tin sử dụng/bài học từ các dự án đầu; (c) đào tạo, huấn luyện, kèm cặp người dùng mới; (d) điều chỉnh và cải tiến quy trình cho khớp với việc dùng công cụ.\n📌 Kiến thức: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.2.3 Success Factors for Tools."
  },
  {
    "n": 26,
    "ref": "Câu 31 [FL-2.1.1]",
    "stem": "Which of the following test levels is a part of the V-model?",
    "opts": [
      {
        "k": "a",
        "t": "A) White-box testing"
      },
      {
        "k": "b",
        "t": "B) Black-box testing"
      },
      {
        "k": "c",
        "t": "C) Experience-based testing"
      },
      {
        "k": "d",
        "t": "D) Component testing"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "V-model định nghĩa các TEST LEVEL gắn với từng giai đoạn phát triển: COMPONENT testing (ứng với thiết kế chi tiết), integration testing (ứng với thiết kế kiến trúc), system testing (ứng với đặc tả hệ thống) và acceptance testing (ứng với yêu cầu). Trong các phương án chỉ có component testing là một test level của V-model ⇒ (d). (a), (b), (c) đều là NHÓM KỸ THUẬT thiết kế test (white-box, black-box, experience-based) — chúng phân loại CÁCH suy dẫn test, không phải các mức kiểm thử của mô hình vòng đời.\n📌 Kiến thức: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.1.1 & 2.2 Test Levels."
  },
  {
    "n": 27,
    "ref": "Câu 33 [FL-5.2]",
    "stem": "Which of the following is NOT a test planning activity?",
    "opts": [
      {
        "k": "a",
        "t": "A) Determining the scope and risks, and identifying the objectives of testing"
      },
      {
        "k": "b",
        "t": "B) Integrating and coordinating the testing activities into the software lifecycle activities"
      },
      {
        "k": "c",
        "t": "C) Assigning resources for the different activities defined"
      },
      {
        "k": "d",
        "t": "D) Estimating the tasks based on estimates made by the owners of the tasks or by experts"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "Các hoạt động LẬP KẾ HOẠCH kiểm thử điển hình: xác định phạm vi, rủi ro và mục tiêu kiểm thử (a); tích hợp và điều phối hoạt động kiểm thử vào các hoạt động của vòng đời phần mềm (b); quyết định test gì, ai làm, làm thế nào; lên lịch các hoạt động; PHÂN BỔ NGUỒN LỰC cho các hoạt động đã định (c); chọn số đo giám sát; định mức chi tiết cho tài liệu test. Riêng (d) — “ước lượng các tác vụ dựa trên ước lượng của chủ nhiệm tác vụ hoặc chuyên gia” — là mô tả của CÁCH TIẾP CẬN ƯỚC LƯỢNG EXPERT-BASED (thuộc chủ đề test estimation), không phải một hoạt động trong danh sách lập kế hoạch ⇒ (d).\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.2 Test Planning (đối chiếu 5.2.6 Test Estimation)."
  },
  {
    "n": 28,
    "ref": "Câu 34 [FL-4.3.2]",
    "stem": "Consider the pseudo code in the figure (three consecutive independent if-statements: Time < 12 → “am”; Time > 12 → “pm”; Time = 12 → “noon”). How many test cases are needed to achieve 100% decision coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
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
      "c"
    ],
    "multi": false,
    "exp": "Mã có BA quyết định ĐỘC LẬP, tuần tự (không else): D1: Time < 12; D2: Time > 12; D3: Time = 12. Ba điều kiện này loại trừ lẫn nhau — với một giá trị Time bất kỳ, đúng MỘT quyết định nhận true và hai quyết định kia nhận false. Muốn D1 = true cần một test Time < 12 (vd 11); muốn D2 = true cần một test Time > 12 (vd 13); muốn D3 = true cần một test Time = 12 — ba kết cục true bắt buộc nằm ở BA test khác nhau. Với đúng 3 test đó, mỗi quyết định cũng đã nhận đủ kết cục false từ hai test còn lại → 100% decision coverage với tối thiểu 3 test ⇒ (c).\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Coverage."
  },
  {
    "n": 29,
    "ref": "Câu 35 [FL-4.3.2]",
    "stem": "Inspect the piece of code in the figure (an IF Age > 18 block containing a nested IF Gender = “Male” … ELSE …, followed by a separate IF CustomerCountry <> “Vietnam” … ELSE …). How many test cases at least are needed to cover decision coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 2 test cases"
      },
      {
        "k": "b",
        "t": "B) 3 test cases"
      },
      {
        "k": "c",
        "t": "C) 4 test cases"
      },
      {
        "k": "d",
        "t": "D) 5 test cases"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "Có ba quyết định: D1 (Age > 18) — 2 kết cục; D2 (Gender = “Male”) — lồng bên trong nhánh true của D1, 2 kết cục; D3 (Country ≠ “Vietnam”) — độc lập phía sau, 2 kết cục. Hai kết cục của D2 buộc phải nằm ở hai test khác nhau và CẢ HAI đều cần D1 = true; thêm ít nhất một test D1 = false. Ba test đủ dùng, ví dụ: T1 (Age 25, Male, nước ngoài) → D1=T, D2=T, D3=T; T2 (Age 30, Female, Việt Nam) → D1=T, D2=F, D3=F; T3 (Age 15, bất kỳ, bất kỳ) → D1=F, D3 đã đủ hai kết cục từ T1/T2. Tối thiểu = 3 ⇒ (b).\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Coverage."
  },
  {
    "n": 30,
    "ref": "Câu 37 [FL-4.1.1]",
    "stem": "Which of the following are most characteristic of structure-based (white-box) testing? (See the figure for statements (i)–(iv).)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) (ii) and (iv)"
      },
      {
        "k": "b",
        "t": "B) (i) and (iii)"
      },
      {
        "k": "c",
        "t": "C) (ii) and (iii)"
      },
      {
        "k": "d",
        "t": "D) (i) and (ii)"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "(i) “Thông tin về CÁCH PHẦN MỀM ĐƯỢC XÂY DỰNG được dùng để suy dẫn test case” — đúng bản chất white-box (dựa trên cấu trúc/mã). (ii) “Có thể ĐO statement coverage và/hoặc decision coverage cho các test case hiện có” — đúng: độ phủ cấu trúc là thước đo đặc trưng của white-box, kể cả để đánh giá bộ test được thiết kế bằng kỹ thuật khác. (iii) “Kiến thức và kinh nghiệm của con người được dùng để suy dẫn test” — đặc trưng của EXPERIENCE- BASED. (iv) “Test được suy dẫn từ MÔ HÌNH hoặc ĐẶC TẢ của hệ thống” — đặc trưng của SPECIFICATION-BASED (black-box). Vậy (i) và (ii) ⇒ (d).\n📌 Kiến thức: Chương 4 – Kỹ thuật kiểm thử, mục 4.1.1 Categories of Test Techniques & 4.3 White-box."
  },
  {
    "n": 31,
    "ref": "Câu 38 [FL-5.1.2]",
    "stem": "Which of the following is a typical tester's task?",
    "opts": [
      {
        "k": "a",
        "t": "A) Writing test summary reports based on the information gathered during testing"
      },
      {
        "k": "b",
        "t": "B) Selecting tools to support testing, and organizing any training in tool use for testers"
      },
      {
        "k": "c",
        "t": "C) Analyzing, reviewing and assessing user requirements, specifications and models for testability"
      },
      {
        "k": "d",
        "t": "D) Contributing the testing perspective to other project activities, such as integration planning"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Phân tích, review và đánh giá yêu cầu người dùng, đặc tả, mô hình về TÍNH KIỂM THỬ ĐƯỢC là nhiệm vụ điển hình của TESTER (thuộc test analysis) ⇒ (c). Ba phương án còn lại là nhiệm vụ của TEST MANAGER/test leader: (a) viết test summary report từ thông tin thu thập trong kiểm thử; (b) lựa chọn công cụ hỗ trợ và tổ chức đào tạo sử dụng công cụ; (d) đóng góp góc nhìn kiểm thử vào các hoạt động khác của dự án như lập kế hoạch tích hợp.\n📌 Kiến thức: Chương 5 – Quản lý kiểm thử, mục 5.1.2 Tasks of a Test Manager and Tester."
  },
  {
    "n": 32,
    "ref": "Câu 39 [FL-3.2.3]",
    "stem": "Which of the following review types has the purpose of discussing, making decisions, evaluating alternatives, solving technical problems and checking conformance to specifications, plans, regulations and standards?",
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
      "c"
    ],
    "multi": false,
    "exp": "Các mục tiêu nêu trong đề — đạt ĐỒNG THUẬN qua thảo luận, RA QUYẾT ĐỊNH, ĐÁNH GIÁ CÁC PHƯƠNG ÁN thay thế, GIẢI QUYẾT VẤN ĐỀ KỸ THUẬT và kiểm tra sự tuân thủ với đặc tả, kế hoạch, quy định, chuẩn — đúng nguyên văn danh sách mục tiêu của TECHNICAL REVIEW ⇒ (c). Đối chiếu: informal review nhằm phát hiện defect nhanh, chi phí thấp, không theo quy trình; walkthrough do author dẫn, nhằm tìm defect, truyền đạt nội dung, tạo hiểu biết chung, thu thập ý kiến; inspection là loại chính thức nhất, nhằm tìm defect tối đa theo quy trình chuẩn với rules/checklists, entry–exit criteria và số đo, kèm cải tiến quy trình. (Đề 1 – Câu 21 đã hỏi về inspection; Đề 2 – Câu 35 về walkthrough.)\n📌 Kiến thức: Chương 3 – Kiểm thử tĩnh, mục 3.2.3 Review Types. PHẦN BỔ SUNG – CÂU HỎI THEO NỘI DUNG MỚI CỦA CTFL v4.0"
  },
  {
    "n": 33,
    "ref": "Câu bổ sung 1 [FL-1.3]",
    "stem": "In the CTFL v4.0 syllabus, the fifth testing principle is called “Tests wear out”. Which of the following BEST explains this principle?",
    "opts": [
      {
        "k": "a",
        "t": "A) Automated tests physically degrade over time and must be re-installed regularly"
      },
      {
        "k": "b",
        "t": "B) If the same tests are repeated over and over, they eventually stop finding new defects, so tests and test data may need to be modified and new tests written; however, in regression testing, repeating the same tests can still show a beneficial outcome"
      },
      {
        "k": "c",
        "t": "C) Test cases must be deleted after each release, because old tests are no longer valid for new versions"
      },
      {
        "k": "d",
        "t": "D) Testers become less effective the longer they stay on the same project"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "“Tests wear out” là cách gọi mới trong v4.0 của hiện tượng trước đây gọi là PESTICIDE PARADOX: nếu cứ lặp lại y nguyên cùng một bộ test, chúng dần MẤT HIỆU LỰC trong việc phát hiện defect MỚI — cần chỉnh sửa test/test data hiện có và viết test mới ⇒ (b). Điểm tinh tế mà v4.0 bổ sung: việc lặp lại cùng bộ test KHÔNG phải lúc nào cũng xấu — trong REGRESSION testing, chạy lại đúng các test cũ mà vẫn đạt là kết quả CÓ LỢI (chứng tỏ thay đổi không phá vỡ chức năng cũ). (a), (c), (d) đều hiểu sai nghĩa “wear out”.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.3 Testing Principles (nguyên tắc 5)."
  },
  {
    "n": 34,
    "ref": "Câu bổ sung 2 [FL-5.2.3]",
    "stem": "According to CTFL v4.0, risk analysis consists of two main activities. Which of the following pairs is correct?",
    "opts": [
      {
        "k": "a",
        "t": "A) Risk mitigation and risk monitoring"
      },
      {
        "k": "b",
        "t": "B) Risk identification and risk assessment"
      },
      {
        "k": "c",
        "t": "C) Risk acceptance and risk transfer"
      },
      {
        "k": "d",
        "t": "D) Risk planning and risk reporting"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "v4.0 tách bạch: RISK ANALYSIS (phân tích rủi ro) = RISK IDENTIFICATION (nhận diện rủi ro — tạo danh sách rủi ro bằng brainstorming, workshop, phỏng vấn, phân tích nhân–quả…) + RISK ASSESSMENT (đánh giá rủi ro — phân loại, xác định likelihood và impact, tính risk level, xếp ưu tiên và đề xuất cách xử lý) ⇒ (b). Còn RISK CONTROL (kiểm soát rủi ro) gồm risk mitigation (giảm thiểu) và risk monitoring (giám sát) — đó là nội dung của phương án (a), thuộc bước SAU phân tích. (c) là hai lựa chọn đáp ứng rủi ro; (d) không phải thuật ngữ của syllabus.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.2.3 Product Risk Analysis (& 5.2.4 Product Risk Control)."
  },
  {
    "n": 35,
    "ref": "Câu bổ sung 3 [FL-5.1.4]",
    "stem": "A project estimates its test effort as follows: the development effort is estimated at 600 person- days, and the organization's historical data shows that the development-to-testing effort ratio on similar projects is 3:2. The test effort is therefore estimated at 400 person-days. Which estimation technique is being used?",
    "opts": [
      {
        "k": "a",
        "t": "A) Extrapolation"
      },
      {
        "k": "b",
        "t": "B) Wideband Delphi"
      },
      {
        "k": "c",
        "t": "C) Estimation based on ratios"
      },
      {
        "k": "d",
        "t": "D) Three-point estimation"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "Đây là kỹ thuật ƯỚC LƯỢNG DỰA TRÊN TỶ SỐ (estimation based on ratios) — một kỹ thuật dựa trên số đo (metrics-based): lấy tỷ số chuẩn thu thập từ các dự án TƯƠNG TỰ trong nội bộ tổ chức (ở đây tỷ lệ công sức phát triển : kiểm thử = 3:2), rồi áp vào con số của dự án hiện tại: 600 × 2/3 = 400 person-days ⇒ (c). (a) extrapolation ngoại suy từ số đo của CHÍNH dự án hiện tại (các iteration đầu). (b) Wideband Delphi dựa trên đồng thuận chuyên gia, không dùng tỷ số lịch sử. (d) three-point dùng ba ước lượng lạc quan/khả dĩ/bi quan với công thức (a + 4m + b)/6.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.4 Estimation Techniques."
  },
  {
    "n": 36,
    "ref": "Câu bổ sung 4 [FL-5.1.4]",
    "stem": "An Agile team has completed the first three iterations of a project. The average test effort measured over these iterations is used to predict the test effort for the next iteration. Which estimation technique is being applied?",
    "opts": [
      {
        "k": "a",
        "t": "A) Extrapolation"
      },
      {
        "k": "b",
        "t": "B) Estimation based on ratios"
      },
      {
        "k": "c",
        "t": "C) Planning poker"
      },
      {
        "k": "d",
        "t": "D) Three-point estimation"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "EXTRAPOLATION (ngoại suy) là kỹ thuật metrics-based: ĐO số liệu ngay trong dự án hiện tại ở các giai đoạn/iteration sớm, rồi dùng chúng (ví dụ trung bình toán học) để dự báo công sức cho các phần tiếp theo — đúng như tình huống: trung bình effort của 3 iteration đầu dự báo iteration thứ tư ⇒ (a). Điểm phân biệt với (b) estimation based on ratios: ratios lấy số liệu từ các DỰ ÁN KHÁC trong quá khứ, còn extrapolation lấy từ CHÍNH dự án đang chạy. (c) planning poker dựa trên đồng thuận nhóm (expert-based). (d) three-point dùng ba mức ước lượng và công thức trung bình có trọng số.\n📌 Kiến thức: CTFL v4.0 — Chương 5, mục 5.1.4 Estimation Techniques."
  },
  {
    "n": 37,
    "ref": "Câu bổ sung 5 [FL-1.5.1]",
    "stem": "According to CTFL v4.0, which of the following BEST describes how testers should communicate when reporting defects to authors and other stakeholders?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers should communicate defects as criticism of the work product, not of its author, starting with collaboration rather than battles, and emphasizing the benefits of finding the defect"
      },
      {
        "k": "b",
        "t": "B) Testers should report defects only through the defect management tool and avoid any direct conversation with the developers"
      },
      {
        "k": "c",
        "t": "C) Testers should soften the facts of the defect so that the author does not feel offended, even if this makes the report less accurate"
      },
      {
        "k": "d",
        "t": "D) Testers should escalate every defect directly to senior management to make sure it gets fixed quickly"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "v4.0 xếp GIAO TIẾP vào nhóm kỹ năng thiết yếu của tester và nêu rõ cách truyền đạt thông tin “tiêu cực” (defect, kết quả xấu): trình bày SỰ VIỆC khách quan, xem defect là lời phê bình đối với SẢN PHẨM CÔNG VIỆC chứ không phải đối với TÁC GIẢ; bắt đầu bằng tinh thần hợp tác thay vì đối đầu; nhấn mạnh LỢI ÍCH của việc tìm ra defect (sản phẩm tốt hơn, tiết kiệm chi phí về sau) ⇒ (a). (b) né giao tiếp trực tiếp đi ngược tinh thần cộng tác. (c) làm mềm đến mức sai lệch sự thật vi phạm tính khách quan. (d) leo thang mọi defect lên quản lý cấp cao phá hoại quan hệ làm việc.\n📌 Kiến thức: CTFL v4.0 — Chương 1, mục 1.5.1 Generic Skills Required for Testing."
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
