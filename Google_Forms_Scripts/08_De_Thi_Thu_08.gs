/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 08 (Giải chi tiết TV) (19 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 08 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (19 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-1.2.3]",
    "stem": "During the development of a software change for a system, the developer makes a mistake in his work, which leads to a fault in the code. Unfortunately the fault is not found by software testing and is released into live. What is the DEFINITE consequence of this mistake?",
    "opts": [
      {
        "k": "a",
        "t": "A) The system will fail, causing a defect"
      },
      {
        "k": "b",
        "t": "B) If the defect is executed, the system may fail"
      },
      {
        "k": "c",
        "t": "C) Loss of money, time, or business reputation"
      },
      {
        "k": "d",
        "t": "D) Contractual requirements have not been met by testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong quá trình phát triển một thay đổi phần mềm cho hệ thống, nhà phát triển đã mắc lỗi trong công việc của mình, dẫn đến lỗi mã. Thật không may, lỗi không được tìm thấy bằng cách kiểm tra phần mềm và được đưa vào hoạt động. Hậu quả CHẮC CHẮN của sai lầm này là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hệ thống sẽ bị lỗi, gây ra lỗi\n  B) Nếu lỗi được thực thi, hệ thống có thể bị lỗi\n  C) Mất tiền, thời gian hoặc danh tiếng kinh doanh\n  D) Yêu cầu hợp đồng chưa được đáp ứng bằng kiểm thử\n\n[GIẢI THÍCH CHI TIẾT]\nChuỗi nhân quả không phải là tất định: mistake (error) → defect (fault) trong mã → CHỈ KHI đoạn mã chứa defect được THỰC THI thì hệ thống MỚI CÓ THỂ (may) fail. Defect nằm im trong nhánh mã không bao giờ chạy, hoặc chạy nhưng không gặp điều kiện kích hoạt, sẽ không gây failure nào — vì vậy điều chắc chắn duy nhất là mệnh đề có điều kiện ở (b). (a) sai hai lần: failure không chắc xảy ra, và failure không “gây ra” defect (chiều ngược lại). (c) chỉ là hậu quả TIỀM NĂNG khi failure thực sự xảy ra. (d) không suy ra được — kiểm thử không thể tìm hết defect (nguyên tắc 1), bỏ sót một defect không đồng nghĩa vi phạm hợp đồng.\n\nTham chiếu: CTFL v4.0 — Chương 1, mục 1.2.3 Errors, Defects, Failures and Root Causes."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-1.5.2]",
    "stem": "Which ONE of the following is the BEST way to take advantage of the different mindsets of testers and developers?",
    "opts": [
      {
        "k": "a",
        "t": "A) Insist on independent testing at all stages in the lifecycle"
      },
      {
        "k": "b",
        "t": "B) Have all developers undergo ISTQB training"
      },
      {
        "k": "c",
        "t": "C) Keep developers and testers in separate teams"
      },
      {
        "k": "d",
        "t": "D) Bring the two mindsets together"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMỘT trong những cách sau đây là cách TỐT NHẤT để tận dụng những suy nghĩ khác nhau của tester (kiểm thử viên) và nhà phát triển?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhấn mạnh vào kiểm thử độc lập ở tất cả các giai đoạn trong vòng đời\n  B) Yêu cầu tất cả các nhà phát triển phải trải qua khóa đào tạo ISTQB\n  C) Giữ các nhà phát triển và tester (kiểm thử viên) ở các nhóm riêng biệt\n  D) Kết hợp hai tư duy lại với nhau\n\n[GIẢI THÍCH CHI TIẾT]\nHai lối tư duy — developer hướng xây dựng giải pháp, tester hướng phản biện và tìm defect — BỔ SUNG cho nhau; cách khai thác tốt nhất là ĐƯA CHÚNG LẠI GẦN NHAU: cộng tác trong review, pair work, cùng làm rõ yêu cầu, phản hồi sớm — nhờ đó vừa xây tốt vừa soi kỹ ⇒ (d). Đây cũng chính là tinh thần whole-team của v4.0. (a) độc lập ở MỌI khâu là cứng nhắc và tốn kém — mức độc lập cần chọn theo rủi ro; (c) tách biệt hai nhóm còn làm mất cơ hội cộng tác — một hạn chế của độc lập; (b) đào tạo ISTQB cho developer hữu ích nhưng không phải cách “tận dụng sự khác biệt tư duy”.\n\nTham chiếu: CTFL v4.0 — Chương 1, mục 1.5.2 Whole Team Approach (đối chiếu 2018: 1.5.2 mindsets)."
  },
  {
    "n": 3,
    "ref": "Câu 3 [FL-1.5.3]",
    "stem": "Which of the following statements correctly emphasize the viewpoints of a developer and a tester with respect to testing psychology? (I) If a developer implements a fundamental design error (e.g., a conceptual misunderstanding), it is HIGHLY probable that he/she will not find it using their own tests; (II) The tester can observe the object under test without prejudice — it is not their own product, and the assumptions and misunderstandings of the developer are, in general, not the same as those of the tester; (III) An independent tester must acquire knowledge about the object under test in order to create test cases, whereas the developer already has good knowledge of it, which saves time — hence it is advisable to assign the test activities to the developer; (IV) The weakness of tests done by the developer is that developers tend to be optimistic about their own software; the risk is that reasonable test cases are forgotten because the developer is more interested in development than in testing.",
    "opts": [
      {
        "k": "a",
        "t": "A) I, II and III"
      },
      {
        "k": "b",
        "t": "B) I, II and IV"
      },
      {
        "k": "c",
        "t": "C) I and II only"
      },
      {
        "k": "d",
        "t": "D) III and IV"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây nhấn mạnh chính xác quan điểm của nhà phát triển và người kiểm thử về tâm lý kiểm thử? (I) Nếu nhà phát triển mắc phải một lỗi thiết kế cơ bản (ví dụ: hiểu sai về khái niệm), thì RẤT NHIỀU khả năng là họ sẽ không tìm thấy lỗi đó bằng các bài kiểm thử của riêng họ; (II) tester (kiểm thử viên) có thể quan sát đối tượng được kiểm thử mà không có thành kiến ​​- đó không phải là sản phẩm của riêng họ và những giả định cũng như hiểu lầm của nhà phát triển nói chung không giống với những giả định và hiểu lầm của tester (kiểm thử viên); (III) Người kiểm thử độc lập phải có kiến ​​thức về đối tượng được kiểm thử để tạo ra các ca kiểm thử, trong khi nhà phát triển đã có kiến ​​thức tốt về đối tượng đó, giúp tiết kiệm thời gian - do đó nên giao các hoạt động kiểm thử cho nhà phát triển; (IV) Điểm yếu của các bài kiểm thử do nhà phát triển thực hiện là các nhà phát triển có xu hướng lạc quan về phần mềm của chính họ; rủi ro là các test case (ca kiểm thử) hợp lý bị lãng quên vì nhà phát triển quan tâm đến việc phát triển hơn là kiểm thử.\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) I, II và III\n  B) I, II và IV\n  C) Chỉ I và II\n  D) III và IV\n\n[GIẢI THÍCH CHI TIẾT]\n(I) ĐÚNG: nếu developer hiểu SAI Ý TƯỞNG NỀN TẢNG (conceptual misunderstanding), chính cách hiểu sai đó cũng chi phối các test họ tự viết — test và mã cùng sai một kiểu nên test “đạt” mà defect vẫn còn. (II) ĐÚNG: tester nhìn sản phẩm không mang thiên kiến của tác giả; giả định và hiểu lầm của họ nói chung KHÁC của developer, nhờ đó phát hiện được những gì developer bỏ qua. (IV) ĐÚNG: developer lạc quan về mã của mình và quan tâm phát triển hơn kiểm thử — dễ bỏ quên các test hợp lý. (III) SAI ở phần KẾT LUẬN: đúng là tester độc lập phải học về đối tượng test, nhưng suy ra “nên giao kiểm thử cho developer để tiết kiệm thời gian” là đánh đổi sai — cái giá của thi"
  },
  {
    "n": 4,
    "ref": "Câu 4 [FL-2.2.1]",
    "stem": "Which of the following apply to system testing? (a) It may satisfy legal requirements; (b) It can use system specifications as a test basis; (c) It is often the responsibility of business users; (d) Its main goal is to establish confidence; (e) It should focus on the communication between systems.",
    "opts": [
      {
        "k": "a",
        "t": "A) a and c"
      },
      {
        "k": "b",
        "t": "B) b and d"
      },
      {
        "k": "c",
        "t": "C) a and b"
      },
      {
        "k": "d",
        "t": "D) c and e"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây áp dụng cho kiểm thử hệ thống (system testing)? a) Có thể đáp ứng các yêu cầu pháp lý; (b) Nó có thể sử dụng các thông số kỹ thuật của hệ thống làm test basis (cơ sở kiểm thử); (c) Đó thường là trách nhiệm của người dùng doanh nghiệp; (d) Mục tiêu chính của nó là tạo dựng lòng tin; (e) Nó nên tập trung vào việc giao tiếp giữa các hệ thống.\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) A và c\n  B) B và d\n  C) A và b\n  D) C và e\n\n[GIẢI THÍCH CHI TIẾT]\n(b) ĐÚNG: test basis điển hình của system testing là ĐẶC TẢ HỆ THỐNG/phần mềm (system and software requirement specifications), cùng use case, quy trình nghiệp vụ. (d) ĐÚNG: một mục tiêu chính của system testing là XÂY DỰNG NIỀM TIN vào chất lượng của toàn hệ thống trước khi chuyển sang acceptance. Các mục còn lại thuộc mức khác: (a) đáp ứng yêu cầu PHÁP LÝ là mục tiêu của ACCEPTANCE testing (contractual & regulatory); (c) do NGƯỜI DÙNG NGHIỆP VỤ chịu trách nhiệm là đặc trưng của USER acceptance testing — system testing thường do đội kiểm thử độc lập thực hiện; (e) tập trung GIAO TIẾP GIỮA CÁC HỆ THỐNG là trọng tâm của SYSTEM INTEGRATION testing. Vậy b và d ⇒ (b).\n\nTham chiếu: CTFL v4.0 — Chương 2, mục 2.2.1 Test Levels (system testing; đối chiếu Câu 20 – Đề 6)."
  },
  {
    "n": 5,
    "ref": "Câu 5 [FL-2.3]",
    "stem": "Which of the following are triggers for maintenance testing? (a) System migration from one platform to another; (b) Retirement of a system; (c) Preparation for an audit of the system; (d) Modifications to the system; (e) Development of a whole new system.",
    "opts": [
      {
        "k": "a",
        "t": "A) a, c and d"
      },
      {
        "k": "b",
        "t": "B) b, c and e"
      },
      {
        "k": "c",
        "t": "C) a, d and e"
      },
      {
        "k": "d",
        "t": "D) a, b and d"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là yếu tố kích hoạt để kiểm tra bảo trì? (a) Di chuyển hệ thống từ nền tảng này sang nền tảng khác; (b) Ngừng sử dụng hệ thống; (c) Chuẩn bị cho việc đánh giá hệ thống; (d) Sửa đổi hệ thống; (e) Phát triển một hệ thống hoàn toàn mới.\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) A, c và d\n  B) B, c và e\n  C) A, d và e\n  D) A, b và d\n\n[GIẢI THÍCH CHI TIẾT]\nBa nhóm TÁC NHÂN kích hoạt maintenance testing theo syllabus: (d) SỬA ĐỔI hệ thống — cải tiến theo kế hoạch, sửa lỗi, thay đổi khẩn cấp, thay đổi môi trường (nâng cấp HĐH/DBMS, vá bảo mật); (a) DI TRÚ (migration) — chuyển nền tảng, kèm kiểm thử vận hành trên môi trường mới và kiểm thử chuyển đổi dữ liệu; (b) LOẠI BỎ (retirement) — khi khai tử hệ thống, cần kiểm thử data migration/archiving. Vậy a, b, d ⇒ (d). (c) chuẩn bị cho một cuộc audit KHÔNG phải trigger của maintenance testing — audit là hoạt động đánh giá quy trình; (e) phát triển hệ thống HOÀN TOÀN MỚI thuộc kiểm thử phát triển thông thường, không phải bảo trì. (Lưu ý: đáp án in trong bộ đề gốc là “a, c, d” — SAI so với syllabus; retirement là trigger chuẩn, audit thì không.)\n\nTham chiếu: CTFL v4.0 — Chương 2, mục 2.3 Maintenance Testing (đối chiếu Câu bổ sung 4 – Đề 6)."
  },
  {
    "n": 6,
    "ref": "Câu 6 [FL-2.2.2]",
    "stem": "A system requirement states that up to 100 users should be able to carry out transactions simultaneously, with responses returned within 5 seconds. What type of non-functional testing would you carry out to VERIFY this requirement?",
    "opts": [
      {
        "k": "a",
        "t": "A) Stress testing"
      },
      {
        "k": "b",
        "t": "B) Maintenance testing"
      },
      {
        "k": "c",
        "t": "C) Load testing"
      },
      {
        "k": "d",
        "t": "D) Usability testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nYêu cầu hệ thống nêu rõ rằng tối đa 100 người dùng có thể thực hiện giao dịch đồng thời và phản hồi được trả về trong vòng 5 giây. Bạn sẽ thực hiện loại kiểm thử (test type) phi chức năng nào để XÁC MINH yêu cầu này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra căng thẳng\n  B) Kiểm tra bảo trì\n  C) Kiểm tra tải\n  D) Kiểm tra khả năng sử dụng\n\n[GIẢI THÍCH CHI TIẾT]\nYêu cầu nêu một MỨC TẢI XÁC ĐỊNH (100 người dùng đồng thời) và một chỉ tiêu thời gian đáp ứng (≤ 5 giây) — kiểm chứng hệ thống đạt yêu cầu TẠI mức tải dự kiến chính là LOAD TESTING ⇒ (c). Phân biệt với (a) STRESS testing: đẩy hệ thống VƯỢT QUÁ giới hạn dự kiến (ví dụ 150, 200 người dùng) để xem nó suy giảm/hồi phục thế nào — không phải mục tiêu ở đây. (b) maintenance testing là kiểm thử khi hệ thống vận hành bị thay đổi — không liên quan; (d) usability đánh giá tính dễ dùng. (Đáp án in trong bộ đề gốc là “stress” — sai: kiểm chứng đúng mức tải yêu cầu là load, không phải stress.)\n\nTham chiếu: CTFL v4.0 — Chương 2, mục 2.2.2 Test Types (non-functional; ISO 25010 performance efficiency)."
  },
  {
    "n": 7,
    "ref": "Câu 7 [FL-3.1]",
    "stem": "Which of the following would be a KEY difference between a peer review of code and static analysis of code using a tool?",
    "opts": [
      {
        "k": "a",
        "t": "A) Static analysis targets the code technically, whereas a peer review is applicable to further aspects as well"
      },
      {
        "k": "b",
        "t": "B) Peer reviews cannot find missing requirements, whereas static analysis can"
      },
      {
        "k": "c",
        "t": "C) A peer review finds failures, while static analysis finds defects"
      },
      {
        "k": "d",
        "t": "D) A peer review finds defects, while static analysis finds failures"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây sẽ là điểm khác biệt CHÍNH giữa đánh giá ngang hàng về mã và phân tích mã tĩnh bằng cách sử dụng một công cụ?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phân tích tĩnh nhắm mục tiêu mã về mặt kỹ thuật, trong khi đánh giá ngang hàng cũng có thể áp dụng cho các khía cạnh khác\n  B) Đánh giá ngang hàng không thể tìm thấy các yêu cầu còn thiếu, trong khi phân tích tĩnh có thể\n  C) Đánh giá ngang hàng tìm thấy lỗi, trong khi phân tích tĩnh tìm thấy khuyết điểm\n  D) Đánh giá ngang hàng tìm thấy khuyết điểm, trong khi phân tích tĩnh tìm thấy lỗi\n\n[GIẢI THÍCH CHI TIẾT]\nSTATIC ANALYSIS bằng công cụ chỉ kiểm được những gì MÁY “đọc” được theo quy tắc hình thức: cú pháp, mẫu lỗi đã biết, vi phạm chuẩn lập trình, độ phức tạp, luồng dữ liệu — tức nhắm vào khía cạnh KỸ THUẬT của mã. PEER REVIEW do CON NGƯỜI thực hiện nên vươn xa hơn: đánh giá được cả LOGIC nghiệp vụ có đúng ý đồ không, thiết kế có hợp lý, mã có dễ hiểu/bảo trì, có khớp yêu cầu — những khía cạnh công cụ không phán xét được ⇒ (a). (b) đảo ngược: chính review của con người mới phát hiện được yêu cầu THIẾU; công cụ không biết “điều gì lẽ ra phải có”. (c) và (d) sai thuật ngữ: CẢ HAI đều tìm DEFECT trực tiếp trong work product mà không cần thực thi — failure chỉ xuất hiện trong kiểm thử động.\n\nTham chiếu: CTFL v4.0 — Chương 3, mục 3.1 Static Testing Basics (review so với static analysis)."
  },
  {
    "n": 8,
    "ref": "Câu 8 [FL-3.2]",
    "stem": "You are performing a review of your colleague's test cases based on the test basis document shown in the figure (a User Login screen with 'User Name' and 'Password' fields, and a validation table: V1 – User Name mandatory, error 12; V2 – User Name must already exist on the database, error 23; V3 – Password mandatory, error 13; V4 – Password must match the user's password on the database, error 24). The test cases are: TC1. Success – valid 'User Name' and 'Password'; 'Customer Menu' displayed. TC2. Failure – 'User Name' field blank; error 12 displayed. TC3. Failure – 'User Id' entered does not exist on the database; error 23 displayed. TC4. Failure – 'Password' does not match the user's password on the database; error 24 displayed. You are guided by this checklist: C1 – there must be one test case to cover success; C2 – there must be one test case for each error path; C3 – each test case must use terminology consistent with the test basis document (field names, error numbering, etc.). Record a separate defect for each missing test case (C1, C2) and for each test case that does not meet C3. How many defects should you record?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
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
    "exp": "[DỊCH CÂU HỎI]\nBạn đang thực hiện đánh giá các trường hợp kiểm thử của đồng nghiệp dựa trên tài liệu cơ sở kiểm thử được hiển thị trong hình (màn hình Đăng nhập người dùng với các trường 'Tên người dùng' và 'Mật khẩu' và bảng xác thực: V1 – Tên người dùng bắt buộc, lỗi 12; V2 – Tên người dùng phải tồn tại trên cơ sở dữ liệu, lỗi 23; V3 – Mật khẩu bắt buộc, lỗi 13; V4 – Mật khẩu phải khớp với mật khẩu của người dùng trên cơ sở dữ liệu, lỗi 24). Các test case (ca kiểm thử) là: TC1. Thành công – 'Tên người dùng' và 'Mật khẩu' hợp lệ; 'Menu khách hàng' được hiển thị. TC2. Lỗi – trường 'Tên người dùng' trống; lỗi 12 hiển thị. TC3. Lỗi – 'Id người dùng' đã nhập không tồn tại trên cơ sở dữ liệu; lỗi 23 hiển thị. TC4. Lỗi – 'Mật khẩu' không khớp với mật khẩu của người dùng trên cơ sở dữ liệu; lỗi 24 hiển thị. Bạn được hướng dẫn bởi danh sách kiểm tra này: C1 – phải có một test case (ca kiểm thử) để đảm bảo thành công; C2 – phải có một ca kiểm thử cho mỗi đường dẫn lỗi; C3 – mỗi trường hợp kiểm thử phải sử dụng thuật ngữ phù hợp với tài liệu cơ sở kiểm thử (tên trường, đánh số lỗi, v.v.). Ghi lại một lỗi riêng cho từng test case bị thiếu (C1, C2) và cho từng test case không đáp ứng C3. Bạn nên ghi lại bao nhiêu lỗi?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1\n  B) 2\n  C) 3\n  D) 4\n\n[GIẢI THÍCH CHI TIẾT]\nSoát theo từng mục checklist: C1 — có test case thành công (TC1) ⇒ đạt, không ghi defect. C2 — test basis có BỐN đường lỗi V1–V4: V1 được TC2 phủ, V2 được TC3 phủ, V4 được TC4 phủ, còn V3 (Password bỏ trống → error 13) KHÔNG có test case nào ⇒ 1 defect (thiếu test case). C3 — soát thuật ngữ từng test case: TC3 dùng “User Id” trong khi test basis gọi trường này là “User Name” ⇒ 1 defect; TC1 nêu kết quả “Customer Menu displayed” — màn hình/thuật ngữ này KHÔNG tồn tại trong tài liệu test basis (tài liệu chỉ đặc tả màn hình login và bảng validation) "
  },
  {
    "n": 9,
    "ref": "Câu 9 [FL-4.2.3]",
    "stem": "Your company is developing a system with complex business rules and many branches in the structure of its code components. You need to choose ONE black-box technique and ONE white-box technique for test case design. Which of the following offers the BEST choice?",
    "opts": [
      {
        "k": "a",
        "t": "A) Statement testing and exploratory testing"
      },
      {
        "k": "b",
        "t": "B) Decision testing and equivalence partitioning"
      },
      {
        "k": "c",
        "t": "C) Decision testing and decision table testing"
      },
      {
        "k": "d",
        "t": "D) Boundary value analysis and decision table testing"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCông ty của bạn đang phát triển một hệ thống với các quy tắc kinh doanh phức tạp và nhiều nhánh trong cấu trúc các thành phần mã của nó. Bạn cần chọn MỘT kỹ thuật hộp đen và MỘT kỹ thuật hộp trắng để thiết kế ca kiểm thử. Điều nào sau đây mang lại sự lựa chọn TỐT NHẤT?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra tuyên bố và kiểm tra thăm dò\n  B) Kiểm tra quyết định và phân vùng tương đương\n  C) Kiểm tra quyết định và kiểm tra bảng quyết định\n  D) Phân tích giá trị biên và kiểm tra bảng quyết định\n\n[GIẢI THÍCH CHI TIẾT]\nÁnh xạ nhu cầu với kỹ thuật: “QUY TẮC NGHIỆP VỤ PHỨC TẠP” (tổ hợp nhiều điều kiện → hành động) là địa bàn sở trường của DECISION TABLE TESTING — black-box; “NHIỀU NHÁNH trong cấu trúc mã” đòi hỏi phủ các kết cục rẽ nhánh — DECISION/BRANCH TESTING — white-box. Cặp (c) đáp ứng đúng cả hai vế, mỗi vế một nhóm kỹ thuật ⇒ (c). Soi các phương án khác: (a) exploratory là EXPERIENCE-BASED chứ không phải black-box, và statement testing yếu hơn decision testing với mã nhiều nhánh; (b) EP là black-box hợp lệ nhưng không chuyên trị “quy tắc nghiệp vụ phức tạp” bằng decision table; (d) gồm HAI kỹ thuật black-box (BVA + decision table) — thiếu hẳn kỹ thuật white-box theo yêu cầu. (Đáp án in trong bộ đề gốc là (d) — sai vì lý do trên.)\n\nTham chiếu: CTFL v4.0 — Chương 4, mục 4.2.3 Decision Table Testing & 4.3.2 Branch Testing."
  },
  {
    "n": 10,
    "ref": "Câu 10 [FL-4.2.2]",
    "stem": "A garden irrigation system allows the user to specify two inputs: (1) Frequency — the number of times the system should be switched on automatically per day, minimum once, maximum 5 times; (2) Duration — the duration of operation in WHOLE minutes each time it is switched on, ranging from 1 to 60. Applying 2-value boundary value analysis, which of the following options is the correct test set of valid and invalid boundary values?",
    "opts": [
      {
        "k": "a",
        "t": "A) Frequency: 1, 5; Duration: 1, 60"
      },
      {
        "k": "b",
        "t": "B) Frequency: 0, 1, 5, 6; Duration: 59 seconds, 1 minute, 60 minutes, 60 minutes 1 second"
      },
      {
        "k": "c",
        "t": "C) Frequency: 0, 1, 5, 6; Duration: 0, 1, 60, 61"
      },
      {
        "k": "d",
        "t": "D) Frequency: 0, 1, 2, 5, 6; Duration: 0, 1, 30, 60, 61"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHệ thống tưới vườn cho phép người dùng chỉ định hai đầu vào: (1) Tần suất - số lần hệ thống được bật tự động mỗi ngày, tối thiểu một lần, tối đa 5 lần; (2) Thời lượng - thời lượng hoạt động tính bằng TOÀN BỘ phút mỗi lần bật, từ 1 đến 60. Áp dụng phân tích giá trị biên 2 giá trị, tùy chọn nào sau đây là bộ kiểm tra chính xác của các giá trị biên hợp lệ và không hợp lệ?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tần số: 1, 5; Thời lượng: 1, 60\n  B) Tần số: 0, 1, 5, 6; Thời lượng: 59 giây, 1 phút, 60 phút, 60 phút 1 giây\n  C) Tần số: 0, 1, 5, 6; Thời lượng: 0, 1, 60, 61\n  D) Tần số: 0, 1, 2, 5, 6; Thời lượng: 0, 1, 30, 60, 61\n\n[GIẢI THÍCH CHI TIẾT]\nBVA 2 ĐIỂM lấy tại mỗi biên đúng HAI giá trị: giá trị biên (hợp lệ) và giá trị sát ngoài biên (không hợp lệ), theo ĐƠN VỊ TĂNG nhỏ nhất của miền dữ liệu. Frequency ∈ [1, 5], bước 1 lần: {0, 1} và {5, 6}. Duration tính theo PHÚT NGUYÊN ∈ [1, 60] — bước tăng nhỏ nhất là 1 PHÚT, nên hàng xóm ngoài biên là 0 và 61 phút: {0, 1} và {60, 61} ⇒ (c). (a) chỉ có giá trị hợp lệ, thiếu toàn bộ biên không hợp lệ. (b) là bẫy tinh vi: dùng “59 giây” và “60 phút 1 giây” — nhưng trường chỉ nhận PHÚT NGUYÊN nên các giá trị theo giây không thể tồn tại trong miền dữ liệu. (d) thừa các giá trị 2 và 30 không phải giá trị biên.\n\nTham chiếu: CTFL v4.0 — Chương 4, mục 4.2.2 Boundary Value Analysis (2-value BVA)."
  },
  {
    "n": 11,
    "ref": "Câu 11 [FL-1.3]",
    "stem": "The diagram in the figure lists the operating systems (5 types), databases (3 types) and application servers (3 types) supported by the application under test. For COMPLETE coverage of all combinations, how many configurations would have to be tested?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 11"
      },
      {
        "k": "b",
        "t": "B) 5"
      },
      {
        "k": "c",
        "t": "C) 45"
      },
      {
        "k": "d",
        "t": "D) 3"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nSơ đồ trong hình liệt kê các hệ điều hành (5 loại), cơ sở dữ liệu (3 loại) và máy chủ ứng dụng (3 loại) được ứng dụng đang kiểm thử hỗ trợ. Để bao phủ HOÀN TOÀN tất cả các kết hợp, cần kiểm tra bao nhiêu cấu hình?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 11\n  B) 5\n  C) 45\n  D) 3\n\n[GIẢI THÍCH CHI TIẾT]\nBa yếu tố cấu hình ĐỘC LẬP kết hợp theo phép NHÂN: 5 hệ điều hành × 3 cơ sở dữ liệu × 3 application server = 45 tổ hợp ⇒ (c). Bẫy của (a): CỘNG 5 + 3 + 3 = 11 — phép cộng chỉ cho tổng số “giá trị”, không phải số tổ hợp. Bài này minh họa trực quan nguyên tắc 2 (exhaustive testing is impossible): chỉ 3 tham số môi trường đã sinh 45 cấu hình; thêm phiên bản trình duyệt, ngôn ngữ… con số bùng nổ theo cấp số nhân — vì vậy thực tế phải dùng phân tích rủi ro và các kỹ thuật tổ hợp (như pairwise, ngoài phạm vi Foundation) thay vì kiểm thử vét cạn mọi tổ hợp.\n\nTham chiếu: CTFL v4.0 — Chương 1, mục 1.3 (nguyên tắc 2) & Chương 4 (khái niệm coverage item)."
  },
  {
    "n": 12,
    "ref": "Câu 12 [FL-5.1.5]",
    "stem": "The following test cases are available for testing changes made to the functions associated with borrowers in a Library Management System: 1 – Add a new borrower; 2 – Update a borrower's data; 3 – Remove a borrower; 4 – Loan a book to a borrower; 5 – Return a book from a borrower; 6 – Reserve a book for a borrower; 7 – Send a \"reservation ready\" message to a borrower. Which of the following test sequences represents a possible use case? (Each sequence starts with test 1.)",
    "opts": [
      {
        "k": "a",
        "t": "A) 1 – 4 – 2 – 7 – 5 – 6 – 3"
      },
      {
        "k": "b",
        "t": "B) 1 – 6 – 2 – 5 – 7 – 4 – 3"
      },
      {
        "k": "c",
        "t": "C) 1 – 6 – 4 – 7 – 5 – 3 – 2"
      },
      {
        "k": "d",
        "t": "D) 1 – 2 – 6 – 7 – 4 – 5 – 3"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCác trường hợp kiểm thử sau đây có sẵn để kiểm tra các thay đổi được thực hiện đối với các chức năng liên quan đến người mượn trong Hệ thống Quản lý Thư viện: 1 – Thêm người mượn mới; 2 – Cập nhật dữ liệu người vay; 3 – Loại bỏ người vay; 4 – Cho người mượn sách; 5 – Trả lại sách từ người mượn; 6 – Giữ sổ cho người mượn; 7 – Gửi tin nhắn “sẵn sàng đặt chỗ” cho người vay. Trình tự kiểm tra nào sau đây đại diện cho một trường hợp sử dụng có thể xảy ra? (Mỗi chuỗi bắt đầu bằng bài kiểm tra 1.)\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1 – 4 – 2 – 7 – 5 – 6 – 3\n  B) 1 – 6 – 2 – 5 – 7 – 4 – 3\n  C) 1 – 6 – 4 – 7 – 5 – 3 – 2\n  D) 1 – 2 – 6 – 7 – 4 – 5 – 3\n\n[GIẢI THÍCH CHI TIẾT]\nMột use case hợp lệ phải tôn trọng các RÀNG BUỘC LOGIC nghiệp vụ: thông báo “sách đặt đã sẵn sàng” (7) chỉ có nghĩa SAU khi đã đặt trước (6); trả sách (5) chỉ sau khi mượn (4); xóa độc giả (3) phải là bước CUỐI (sau khi xóa thì không thao tác gì được nữa). Kiểm từng phương án: (a) gửi thông báo (7) khi CHƯA hề đặt sách (6 đứng sau 7) — vô lý. (b) trả sách (5) khi chưa mượn (4 đứng sau 5) — vô lý. (c) cập nhật thông tin độc giả (2) SAU khi đã xóa độc giả (3) — vô lý. (d) 1 thêm → 2 cập nhật → 6 đặt sách → 7 báo sẵn sàng → 4 mượn → 5 trả → 3 xóa — trình tự nhất quán trọn vòng đời ⇒ (d). Đây là tư duy xếp lịch thực thi theo PHỤ THUỘC LOGIC giữa các test case.\n\nTham chiếu: CTFL v4.0 — Chương 5, mục 5.1.5 Test Case Prioritization (ràng buộc phụ thuộc) & use case."
  },
  {
    "n": 13,
    "ref": "Câu 13 [FL-6.1]",
    "stem": "You have been asked to improve the way test automation tools are being used in your company. Which ONE of the following is the BEST approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) Selecting and automating scripts that test new functionality, to find the most defects"
      },
      {
        "k": "b",
        "t": "B) Using a keyword-driven testing approach to separate the actions and the data from the tool's script"
      },
      {
        "k": "c",
        "t": "C) Ensuring that all data, inputs and actions are stored inside the tool's script for ease of maintenance"
      },
      {
        "k": "d",
        "t": "D) Keeping the expected results separate from the automation tool, to allow the testers to check the results manually"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn đã được yêu cầu cải thiện cách sử dụng các công cụ tự động hóa kiểm thử (test automation) trong công ty của bạn. Cách tiếp cận nào sau đây là TỐT NHẤT?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Chọn và tự động hóa các tập lệnh kiểm tra chức năng mới để tìm ra nhiều lỗi nhất\n  B) Sử dụng phương pháp kiểm thử dựa trên từ khóa để tách các hành động và dữ liệu khỏi tập lệnh của công cụ\n  C) Đảm bảo rằng tất cả dữ liệu, đầu vào và hành động được lưu trữ bên trong tập lệnh của công cụ để dễ bảo trì\n  D) Giữ kết quả mong đợi tách biệt với công cụ tự động hóa, để cho phép người kiểm tra kiểm tra kết quả theo cách thủ công\n\n[GIẢI THÍCH CHI TIẾT]\nThực hành tốt của tự động hóa là TÁCH “cái gì” khỏi “làm thế nào”: với KEYWORD- DRIVEN testing, hành động nghiệp vụ được biểu diễn bằng từ khóa (đăng_nhập, tạo_đơn…) và DỮ LIỆU nằm ngoài script; script chỉ là máy thông dịch. Nhờ đó khi ứng dụng đổi, chỉ sửa một chỗ; người không biết lập trình cũng thiết kế được test ⇒ (b). (a) ngược thực tiễn: tự động hóa phát huy ở REGRESSION lặp lại; tính năng MỚI biến động cao, tự động sớm tốn công bảo trì và “tìm nhiều defect nhất” là kỳ vọng sai cho automation. (c) là ANTI-PATTERN: nhét cứng dữ liệu/hành động vào script khiến mỗi thay đổi phải sửa mọi script. (d) tách kết quả mong đợi để người kiểm TAY là vứt bỏ lợi ích so sánh tự động của công cụ. (Đáp án in trong bộ đề gốc là (a) — sai.)\n\nTham chiếu: CTFL v4.0 — Chương 6, mục 6.1–6.2 (đối chiếu 2018: data-driven & keyword-driven scripting)."
  },
  {
    "n": 14,
    "ref": "Câu 14 [FL-4.1]",
    "stem": "Why is it important to select and apply a suitable test technique?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test techniques define the number of regression cycles, which in turn impacts the project schedule"
      },
      {
        "k": "b",
        "t": "B) Selecting the right test technique in a given situation increases the effectiveness of the test process, by creating tests with a higher chance of finding defects"
      },
      {
        "k": "c",
        "t": "C) The only way to test a software application is by using well-proven test techniques"
      },
      {
        "k": "d",
        "t": "D) There are usually too many test cases that may be run on a system; test techniques mainly help reduce the number of tests"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTại sao việc lựa chọn và áp dụng một kỹ thuật kiểm thử phù hợp lại quan trọng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kỹ thuật kiểm thử xác định số chu kỳ hồi quy, từ đó tác động đến tiến độ dự án\n  B) Việc chọn đúng kỹ thuật kiểm thử trong một tình huống nhất định sẽ làm tăng hiệu quả của quá trình kiểm thử, bằng cách tạo ra các bài kiểm thử có cơ hội tìm ra lỗi cao hơn\n  C) Cách duy nhất để kiểm thử một ứng dụng phần mềm là sử dụng các kỹ thuật kiểm thử đã được chứng minh rõ ràng.\n  D) Thường có quá nhiều test case (ca kiểm thử) có thể được chạy trên một hệ thống; kỹ thuật kiểm tra chủ yếu giúp giảm số lượng bài kiểm tra\n\n[GIẢI THÍCH CHI TIẾT]\nGiá trị của kỹ thuật kiểm thử nằm ở tính HIỆU QUẢ CÓ HỆ THỐNG: mỗi kỹ thuật nhắm một LỚP DEFECT đặc thù (EP/BVA cho lỗi xử lý miền và biên; decision table cho lỗi tổ hợp quy tắc; state transition cho lỗi luồng trạng thái; white-box cho phần mã chưa được thử) — chọn ĐÚNG kỹ thuật cho ĐÚNG tình huống làm tăng xác suất test tìm ra defect, với chi phí hợp lý ⇒ (b). (a) sai: số vòng regression do THAY ĐỔI và rủi ro quyết định, không phải do kỹ thuật. (c) tuyệt đối hóa sai — kiểm thử experience-based ít hình thức vẫn có giá trị. (d) chỉ đúng MỘT NỬA: kỹ thuật giúp chọn tập test nhỏ mà đủ mạnh, nhưng mục đích cốt lõi là HIỆU QUẢ PHÁT HIỆN, không đơn thuần là cắt giảm số lượng.\n\nTham chiếu: CTFL v4.0 — Chương 4, mục 4.1 Test Techniques Overview. PHẦN BỔ SUNG – CÂU HỎI THEO NỘI DUNG MỚI CỦA CTFL v4.0 10 câu dưới đây được biên soạn mới hoàn toàn theo dạng TÌNH HUỐNG THỰC TIỄN của CTFL v4.0, nhóm chủ đề Agile và quy trình: nhận diện ATDD, ứng dụng test pyramid (kim tự tháp ngược), áp dụng Definition of Done, xếp ưu tiên theo ma trận rủi ro, tính ước lượng ba điểm, nhận diện các thực hành shift-left, retrospective, giới hạn của branch coverage so với path, các yếu tố gây khó cho impact ana"
  },
  {
    "n": 15,
    "ref": "Câu bổ sung 1 [FL-2.1.3]",
    "stem": "An Agile team works as follows: for each user story, the whole team first writes acceptance tests based on the acceptance criteria and automates them; developers then write the code, and the story is considered implemented when all these acceptance tests pass. Which test-first practice is the team applying?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test-driven development (TDD)"
      },
      {
        "k": "b",
        "t": "B) Acceptance test-driven development (ATDD)"
      },
      {
        "k": "c",
        "t": "C) Exploratory testing"
      },
      {
        "k": "d",
        "t": "D) Regression-averse testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMột nhóm Agile hoạt động như sau: đối với mỗi câu chuyện của người dùng, trước tiên cả nhóm viết các bài kiểm tra chấp nhận dựa trên các tiêu chí chấp nhận và tự động hóa chúng; Sau đó, các nhà phát triển sẽ viết mã và câu chuyện được coi là đã triển khai khi tất cả các bài kiểm thử chấp nhận này vượt qua. Nhóm đang áp dụng phương pháp kiểm thử đầu tiên nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phát triển dựa trên kiểm thử (TDD)\n  B) Phát triển dựa trên kiểm thử chấp nhận (acceptance testing) (ATDD)\n  C) Kiểm thử thăm dò (exploratory testing)\n  D) Kiểm thử chống hồi quy\n\n[GIẢI THÍCH CHI TIẾT]\nDấu hiệu nhận diện: test được viết TRƯỚC KHI lập trình, ở mức ACCEPTANCE (suy ra từ ACCEPTANCE CRITERIA của user story), do cả nhóm cộng tác, và trở thành ĐỊNH NGHĨA HOÀN THÀNH cho story — đó chính là ATDD ⇒ (b). Phân biệt với (a) TDD: cũng test-first nhưng ở mức ĐƠN VỊ/component — developer viết unit test nhỏ, viết mã cho qua, rồi refactor theo chu kỳ ngắn; đơn vị dẫn dắt là test kỹ thuật, không phải tiêu chí chấp nhận của story. (c) exploratory không viết test trước — thiết kế và thực thi đồng thời. (d) “regression-averse” là một hướng chiến lược tận dụng tự động hóa chống thoái lui, không phải quy trình test-first.\n\nTham chiếu: CTFL v4.0 — Chương 2, mục 2.1.3 Testing as a Driver for Software Development (TDD/ATDD/BDD)."
  },
  {
    "n": 16,
    "ref": "Câu bổ sung 2 [FL-5.1.6]",
    "stem": "A team's automated test suite consists of 900 end-to-end UI tests (slow, fragile, expensive to maintain), 100 API/service tests, and 50 unit tests. Nightly runs take six hours and often fail for environmental reasons. According to the TEST PYRAMID model in CTFL v4.0, what should the team do?",
    "opts": [
      {
        "k": "a",
        "t": "A) Add even more UI tests, since they are closest to the real user experience"
      },
      {
        "k": "b",
        "t": "B) Invert the distribution: build a large base of fast, isolated unit tests, a medium layer of API/service tests, and keep only a small number of high-level UI tests"
      },
      {
        "k": "c",
        "t": "C) Delete all automated tests and rely on manual testing only"
      },
      {
        "k": "d",
        "t": "D) Keep the distribution unchanged but run the UI tests less frequently"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBộ kiểm tra tự động của một nhóm bao gồm 900 bài kiểm tra giao diện người dùng từ đầu đến cuối (chậm, dễ hỏng, tốn kém để bảo trì), 100 bài kiểm tra API/dịch vụ và 50 bài kiểm tra đơn vị. Các cuộc chạy hàng đêm mất sáu giờ và thường thất bại vì lý do môi trường. Theo mô hình TEST PYRAMID trong CTFL v4.0, nhóm nên làm gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Thêm nhiều kiểm thử giao diện người dùng hơn nữa vì chúng gần nhất với trải nghiệm người dùng thực\n  B) Đảo ngược quá trình phân phối: xây dựng một cơ sở lớn gồm các bài kiểm thử đơn vị nhanh, riêng biệt, lớp kiểm thử dịch vụ/API ở mức trung bình và chỉ giữ lại một số lượng nhỏ các bài kiểm thử giao diện người dùng cấp cao\n  C) Xóa tất cả các bài kiểm tra tự động và chỉ dựa vào kiểm tra thủ công\n  D) Giữ nguyên mức phân phối nhưng chạy kiểm thử giao diện người dùng ít thường xuyên hơn\n\n[GIẢI THÍCH CHI TIẾT]\nTEST PYRAMID khuyến nghị: tầng ĐÁY là số lượng LỚN test hạt mịn (unit/component) — chạy nhanh, cô lập, rẻ bảo trì; càng LÊN CAO (service/API rồi UI/end-to- end) test càng to, chậm, dễ vỡ nên số lượng phải càng ÍT. Đội này đang có “KIM TỰ THÁP NGƯỢC” (ice-cream cone): 900 UI / 100 API / 50 unit — đúng nguyên nhân của 6 giờ chạy đêm và fail vì môi trường. Giải pháp đúng mô hình: đảo lại phân bố — nhiều unit test, tầng giữa API vừa phải, giữ một nhóm nhỏ UI test cho các luồng xuyên suốt quan trọng ⇒ (b). (a) làm trầm trọng vấn đề; (c) cực đoan vứt bỏ giá trị regression tự động; (d) né tránh chứ không sửa cấu trúc.\n\nTham chiếu: CTFL v4.0 — Chương 5, mục 5.1.6 Test Pyramid."
  },
  {
    "n": 17,
    "ref": "Câu bổ sung 3 [FL-5.1.3]",
    "stem": "A team's Definition of Done (DoD) for user stories requires: unit tests passed, code reviewed, acceptance tests executed and passed, and documentation updated. At the end of the iteration, a story has all its code written and unit-tested, but the acceptance tests have not been run and the code review is still pending. The developer says the story is \"done, except for some formalities\". What is the correct assessment?",
    "opts": [
      {
        "k": "a",
        "t": "A) The story is Done, because the code is complete and unit tests pass"
      },
      {
        "k": "b",
        "t": "B) The story is not Done: the Definition of Done is a team commitment, and an item that does not meet ALL its criteria must not be treated as completed (e.g., presented as finished or released)"
      },
      {
        "k": "c",
        "t": "C) The story is Done if the product owner is too busy to check the DoD"
      },
      {
        "k": "d",
        "t": "D) The DoD can be silently reduced for this story so that the iteration report looks better"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐịnh nghĩa Hoàn thành (DoD) của một nhóm đối với các câu chuyện của người dùng yêu cầu: vượt qua các bài kiểm tra đơn vị, xem xét mã, thực hiện và vượt qua các bài kiểm tra chấp nhận cũng như cập nhật tài liệu. Khi kết thúc quá trình lặp lại, một câu chuyện có tất cả mã được viết và kiểm thử đơn vị, nhưng các kiểm thử chấp nhận vẫn chưa được chạy và quá trình xem xét mã vẫn đang chờ xử lý. Nhà phát triển cho biết câu chuyện đã \"xong rồi, ngoại trừ một số thủ tục\". Đánh giá đúng là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Câu chuyện đã xong, vì mã đã hoàn thành và các bài kiểm tra đơn vị đã vượt qua\n  B) Câu chuyện chưa hoàn thành: Định nghĩa Hoàn thành là cam kết của nhóm và một mục không đáp ứng TẤT CẢ các tiêu chí của nó sẽ không được coi là đã hoàn thành (ví dụ: được trình bày là đã hoàn thành hoặc đã phát hành)\n  C) Câu chuyện là Xong nếu chủ sở hữu sản phẩm quá bận để kiểm tra DoD\n  D) DoD có thể được giảm âm thầm cho câu chuyện này để báo cáo lặp lại trông đẹp hơn\n\n[GIẢI THÍCH CHI TIẾT]\nDoD đóng vai trò EXIT CRITERIA của hạng mục công việc trong Agile: một story chỉ được coi là HOÀN THÀNH khi thỏa TOÀN BỘ các tiêu chí đã cam kết — ở đây còn thiếu hai tiêu chí (acceptance test chưa chạy, code review chưa xong), nên story CHƯA Done, bất kể mã “đã viết xong” ⇒ (b). Giá trị của DoD chính là chống lại kiểu “xong, trừ vài thủ tục”: các “thủ tục” đó (review, acceptance test) là lưới an toàn chất lượng; bỏ qua chúng là tích lũy nợ kỹ thuật và rủi ro ẩn. (c) DoD không phụ thuộc lịch bận của PO; (d) âm thầm hạ chuẩn để báo cáo đẹp là phá vỡ tính minh bạch — nếu DoD bất hợp lý, nhóm thay đổi nó CÔNG KHAI trong retrospective, không lách trong lúc chạy.\n\nTham chiếu: CTFL v4.0 — Chương 5, mục 5.1.3 Entry Criteria and Exit Criteria (Definition of Ready/Done)."
  },
  {
    "n": 18,
    "ref": "Câu bổ sung 4 [FL-5.2.2]",
    "stem": "A risk assessment produced the following product risks: R1 — likelihood: high, impact: low; R2 — likelihood: high, impact: high; R3 — likelihood: low, impact: low; R4 — likelihood: low, impact: high. Following a risk-based testing strategy, which risk area should be tested FIRST and most thoroughly?",
    "opts": [
      {
        "k": "a",
        "t": "A) R1"
      },
      {
        "k": "b",
        "t": "B) R2"
      },
      {
        "k": "c",
        "t": "C) R3"
      },
      {
        "k": "d",
        "t": "D) R4"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐánh giá rủi ro tạo ra các rủi ro sản phẩm sau: R1 — khả năng xảy ra: cao, tác động: thấp; R2 — khả năng xảy ra: cao, tác động: cao; R3 — khả năng xảy ra: thấp, tác động: thấp; R4 — khả năng xảy ra: thấp, tác động: cao. Theo chiến lược kiểm thử dựa trên rủi ro, lĩnh vực rủi ro nào cần được kiểm thử ĐẦU TIÊN và kỹ lưỡng nhất?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) R1\n  B) R2\n  C) R3\n  D) R4\n\n[GIẢI THÍCH CHI TIẾT]\nMức rủi ro (risk level) được xác định từ KHẢ NĂNG XẢY RA × TÁC ĐỘNG. Xếp hạng bốn rủi ro: R2 (cao × cao) đứng đầu — vừa dễ xảy ra vừa gây hậu quả nặng; R1 và R4 ở nhóm giữa (một chiều cao, một chiều thấp); R3 (thấp × thấp) cuối bảng. Kiểm thử theo hướng rủi ro phân bổ nỗ lực TỶ LỆ với mức rủi ro: vùng R2 được kiểm SỚM NHẤT, KỸ NHẤT (kỹ thuật mạnh hơn, độ phủ cao hơn, người giàu kinh nghiệm hơn), R3 có thể chỉ kiểm nhẹ hoặc chấp nhận rủi ro ⇒ (b). Đây chính là cách phân tích rủi ro định hướng: phạm vi, độ kỹ lưỡng, thứ tự ưu tiên của kiểm thử.\n\nTham chiếu: CTFL v4.0 — Chương 5, mục 5.2.2 Risk Assessment & 5.2.4 Product Risk Control."
  },
  {
    "n": 19,
    "ref": "Câu bổ sung 5 [FL-5.1.4]",
    "stem": "Using three-point estimation, a tester produces the following estimates for a testing task: most optimistic a = 6 person-days, most likely m = 9 person-days, most pessimistic b = 18 person- days. What is the final estimate E according to the formula used in CTFL v4.0?",
    "opts": [
      {
        "k": "a",
        "t": "A) 9 person-days"
      },
      {
        "k": "b",
        "t": "B) 10 person-days"
      },
      {
        "k": "c",
        "t": "C) 11 person-days"
      },
      {
        "k": "d",
        "t": "D) 33 person-days"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBằng cách sử dụng ước tính ba điểm, tester (kiểm thử viên) đưa ra các ước tính sau cho nhiệm vụ kiểm thử: lạc quan nhất a = 6 người-ngày, rất có thể m = 9 người-ngày, bi quan nhất b = 18 người-ngày. Ước tính E cuối cùng theo công thức được sử dụng trong CTFL v4.0 là bao nhiêu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 9 ngày-người\n  B) 10 người-ngày\n  C) 11 người-ngày\n  D) 33 ngày-người\n\n[GIẢI THÍCH CHI TIẾT]\nCông thức ước lượng ba điểm: E = (a + 4m + b) / 6 — trung bình CÓ TRỌNG SỐ, trong đó giá trị “khả dĩ nhất” m được nhân 4. Thay số: E = (6 + 4×9 + 18) / 6 = (6 + 36 + 18) / 6 = 60 / 6 = 10 person-days ⇒ (b). Bẫy thường gặp: (a) lấy luôn m = 9 (quên hai cận); (d) cộng thô 6 + 9 + 18 = 33 (quên chia). Ý nghĩa của công thức: kết quả bị “kéo” về phía kịch bản khả dĩ nhất nhưng vẫn phản ánh độ bất định — ở đây cận bi quan xa (18) kéo ước lượng lên 10, cao hơn m một chút. (So sánh bài tương tự với bộ số khác: Câu bổ sung 9 – Đề 2.)\n\nTham chiếu: CTFL v4.0 — Chương 5, mục 5.1.4 Estimation Techniques (three-point estimation)."
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
