/**
 * GOOGLE APPS SCRIPT TỰ ĐỘNG TẠO GOOGLE FORM TRẮC NGHIỆM ISTQB CTFL v4.0
 * Bộ đề: Đề thi thử 07 (Giải chi tiết TV) (37 câu)
 * Hướng dẫn:
 * 1. Mở https://script.google.com -> Dự án mới (New Project)
 * 2. Dán toàn bộ nội dung file này vào -> Bấm Ctrl+S -> Bấm Run (Chạy) hàm createISTQBQuizForm
 * 3. Xem Nhật ký thực thi (Execution Log) ở dưới để lấy Link làm bài Google Form!
 */
function createISTQBQuizForm() {
  var formTitle = "ISTQB CTFL v4.0 — Đề thi thử 07 (Giải chi tiết TV)";
  var form = FormApp.create(formTitle);
  form.setIsQuiz(true);
  form.setDescription("Đề luyện thi cuối kỳ KTPM / ISTQB Foundation Level v4.0 (37 câu). Tự động chấm điểm và hiển thị giải thích chi tiết sau khi nộp bài.");
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(true);

  var questions = [
  {
    "n": 1,
    "ref": "Câu 1 [FL-4.3.1]",
    "stem": "The flowchart in the figure reads p, q, r, s and contains two consecutive decisions (P &gt; Q with a statement P = s/P on the true-branch labelled w, and P + r &lt; s with a statement r = r*P on the true-branch labelled y). The diagram represents the following paths through the code: A = v-w-y; B = v-w-z; C = v-x-y; D = v-x-z. What is the MINIMUM combination of paths required to provide full statement coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) A"
      },
      {
        "k": "b",
        "t": "B) A, B and D"
      },
      {
        "k": "c",
        "t": "C) A, B, C and D"
      },
      {
        "k": "d",
        "t": "D) A, C and D"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLưu đồ trong hình đọc p, q, r, s và chứa hai quyết định liên tiếp (P > Q với câu lệnh P = s/P trên nhánh đúng có nhãn w và P + r < s với câu lệnh r = r*P trên nhánh đúng có nhãn y). Sơ đồ thể hiện các đường dẫn sau thông qua mã: A = v-w-y; B = v-w-z; C = v-x-y; D = v-x-z. Sự kết hợp TỐI THIỂU của các đường dẫn cần thiết để cung cấp phạm vi bao phủ toàn bộ câu lệnh là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) A\n  B) A, B và D\n  C) A, B, C và D\n  D) A, C và D\n\n[GIẢI THÍCH CHI TIẾT]\nLiệt kê các CÂU LỆNH trong sơ đồ: “Read p,q,r,s” (mọi đường đều qua); “P = s/P” — chỉ nằm trên nhánh true của quyết định 1 (cạnh w); “r = r*P” — chỉ nằm trên nhánh true của quyết định 2 (cạnh y). Các cạnh x và z là nhánh false, KHÔNG chứa câu lệnh nào. Đường A = v- w-y đi qua CẢ w LẪN y, tức thực thi đủ cả ba câu lệnh → MỘT MÌNH đường A đã đạt 100% statement coverage ⇒ (a). Các phương án còn lại thêm đường thừa. Lưu ý: nếu hỏi DECISION coverage thì một đường là không đủ — cần thêm đường D (v-x-z) để phủ hai kết cục false.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.1 Statement Coverage."
  },
  {
    "n": 2,
    "ref": "Câu 2 [FL-4.2.4]",
    "stem": "Given the state transition diagram in the figure (states S1–S4; transitions: X: S1→S2, Z: S2→S3, V: S3→S4, Y: S2→S4, W: S4→S2, U: S4→S4), match the test cases below with the relevant set of state transitions: (i) X-Z-V-W; (ii) W-Y-U-U.\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) (i) = S1 – S2 – S3 – S4 – S2 and (ii) = S4 – S2 – S4 – S4 – S4"
      },
      {
        "k": "b",
        "t": "B) (i) = S1 – S2 – S3 – S4 – S4 and (ii) = S2 – S4 – S4 – S4 – S2"
      },
      {
        "k": "c",
        "t": "C) (i) = S2 – S3 – S4 – S2 – S2 and (ii) = S4 – S2 – S4 – S4 – S4"
      },
      {
        "k": "d",
        "t": "D) (i) = S2 – S3 – S4 – S4 – S2 and (ii) = S2 – S3 – S4 – S4 – S4"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCho sơ đồ chuyển đổi trạng thái trong hình (trạng thái S1–S4; chuyển đổi: X: S1→S2, Z: S2→S3, V: S3→S4, Y: S2→S4, W: S4→S2, U: S4→S4), hãy ghép các test case (ca kiểm thử) bên dưới với tập hợp các chuyển đổi trạng thái có liên quan: (i) X-Z-V-W; (ii) W-Y-U-U.\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) (i) = S1 – S2 – S3 – S4 – S2 và (ii) = S4 – S2 – S4 – S4 – S4\n  B) (i) = S1 – S2 – S3 – S4 – S4 và (ii) = S2 – S4 – S4 – S4 – S2\n  C) (i) = S2 – S3 – S4 – S2 – S2 và (ii) = S4 – S2 – S4 – S4 – S4\n  D) (i) = S2 – S3 – S4 – S4 – S2 và (ii) = S2 – S3 – S4 – S4 – S4\n\n[GIẢI THÍCH CHI TIẾT]\nLần theo từng sự kiện trên sơ đồ: (i) X-Z-V-W: X đưa S1 → S2; Z đưa S2 → S3; V đưa S3 → S4; W đưa S4 → S2. Chuỗi trạng thái: S1 – S2 – S3 – S4 – S2. (ii) W-Y-U-U: điểm xuất phát phải là S4 (nơi duy nhất W áp dụng được): W đưa S4 → S2; Y đưa S2 → S4; U là vòng tự quay S4 → S4; U lần nữa S4 → S4. Chuỗi trạng thái: S4 – S2 – S4 – S4 – S4. Cặp kết quả này khớp phương án (a).\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.4 State Transition Testing."
  },
  {
    "n": 3,
    "ref": "Câu 3 [FL-4.2.4]",
    "stem": "Based on the state table for the TV in the figure, which of the following represents an INVALID transition (N)?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) ‘Off’ from ‘Display Channel 1’"
      },
      {
        "k": "b",
        "t": "B) ‘Channel 2’ from ‘Display Channel 1’"
      },
      {
        "k": "c",
        "t": "C) ‘Stby’ from ‘Live’"
      },
      {
        "k": "d",
        "t": "D) ‘Channel 2’ from ‘Live’"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nDựa vào bảng trạng thái của TV trong hình, điều nào sau đây thể hiện quá trình chuyển đổi KHÔNG HỢP LỆ (N)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 'Tắt' khỏi 'Kênh hiển thị 1'\n  B) ‘Kênh 2’ từ ‘Kênh hiển thị 1’\n  C) ‘Stby’ từ ‘Trực tiếp’\n  D) ‘Kênh 2’ từ ‘Trực tiếp’\n\n[GIẢI THÍCH CHI TIẾT]\nTra bảng trạng thái (hàng = trạng thái hiện tại, cột = sự kiện): hàng “Display Channel 1”, cột “Off” = N — chuyển KHÔNG hợp lệ (đang xem kênh thì không tắt trực tiếp bằng Off được; phải qua Stby) ⇒ (a). Ba phương án còn lại đều hợp lệ theo bảng: “Channel 2” từ “Display Channel 1” → Display Channel 2; “Stby” từ “Live” → Standby; “Channel 2” từ “Live” → Display Channel 2. Bảng trạng thái (state table) chính là công cụ giúp nhìn thấy các chuyển KHÔNG hợp lệ — các ô N — mà sơ đồ trạng thái thường không vẽ ra.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.4 State Transition Testing."
  },
  {
    "n": 4,
    "ref": "Câu 4 [FL-5.1.1]",
    "stem": "What principle is BEST described when test designs are written by a third party?",
    "opts": [
      {
        "k": "a",
        "t": "A) Exploratory testing"
      },
      {
        "k": "b",
        "t": "B) Independent testing"
      },
      {
        "k": "c",
        "t": "C) Integration testing"
      },
      {
        "k": "d",
        "t": "D) Interoperability testing"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNguyên tắc nào được mô tả TỐT NHẤT khi thiết kế bài kiểm tra được viết bởi bên thứ ba?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm thử thăm dò (exploratory testing)\n  B) Kiểm thử độc lập\n  C) Kiểm tra tích hợp\n  D) Kiểm tra khả năng tương tác\n\n[GIẢI THÍCH CHI TIẾT]\nTest được thiết kế bởi BÊN THỨ BA — người ngoài nhóm/tổ chức phát triển — chính là biểu hiện của INDEPENDENT TESTING (kiểm thử độc lập): mức độc lập càng cao (người khác trong nhóm → nhóm test riêng trong tổ chức → tổ chức/công ty khác) càng tránh được thiên kiến của tác giả ⇒ (b). (a) exploratory là kỹ thuật kiểm thử dựa trên kinh nghiệm; (c) integration là một test level; (d) interoperability là một loại kiểm thử phi chức năng (khả năng tương tác) — cả ba đều không liên quan đến việc AI thiết kế test.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.1.1 Independent Testing."
  },
  {
    "n": 5,
    "ref": "Câu 5 [FL-4.2.3]",
    "stem": "Based on the insurance decision table in the figure (Rule 1: age &lt; 21, class A → premium £100, excess £2,500; Rule 2: age 21–29, class A or B → premium £90, excess £2,500; Rule 3: age 30–50, class B, C or D → premium £70, excess £500; Rule 4: age &gt; 50, class C or D → premium £70, excess £1,000), which of the following test cases and expected results is VALID?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) 23-year-old in insurance class A — premium is 90 and excess is 2,500"
      },
      {
        "k": "b",
        "t": "B) 51-year-old in insurance class C — premium is 70 and excess is 500"
      },
      {
        "k": "c",
        "t": "C) 31-year-old in insurance class B — premium is 90 and excess is 2,500"
      },
      {
        "k": "d",
        "t": "D) 43-year-old in insurance class D — premium is 70 and excess is 1,000"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nDựa trên bảng quyết định bảo hiểm trong hình (Quy tắc 1: tuổi < 21, hạng A → phí bảo hiểm £100, vượt quá £2.500; Quy tắc 2: 21–29 tuổi, hạng A hoặc B → phí bảo hiểm £90, vượt quá £2.500; Quy tắc 3: 30–50 tuổi, hạng B, C hoặc D → phí bảo hiểm £70, vượt quá £500; Quy tắc 4: tuổi > 50, hạng C hoặc D → phí bảo hiểm £70, vượt quá £1.000), test case (ca kiểm thử) nào sau đây và kết quả mong đợi là HỢP LỆ?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 23 tuổi tham gia bảo hiểm hạng A - phí bảo hiểm là 90 và phí vượt quá là 2.500\n  B) 51 tuổi tham gia bảo hiểm hạng C - phí bảo hiểm là 70 và phí vượt quá là 500\n  C) 31 tuổi tham gia bảo hiểm hạng B - phí bảo hiểm là 90 và phí vượt quá là 2.500\n  D) 43 tuổi tham gia bảo hiểm hạng D - phí bảo hiểm là 70 và phí vượt quá là 1.000\n\n[GIẢI THÍCH CHI TIẾT]\nĐối chiếu từng test case với rule tương ứng: (a) 23 tuổi, hạng A → Rule 2 (21–29, A/B): premium £90, excess £2,500 — kết quả mong đợi KHỚP ⇒ (a) hợp lệ. (b) 51 tuổi, hạng C → Rule 4 (>50, C/D): premium £70 nhưng excess phải là £1,000, không phải £500 — sai. (c) 31 tuổi, hạng B → Rule 3 (30–50, B/C/D): premium £70, excess £500, không phải 90/2,500 — sai. (d) 43 tuổi, hạng D → Rule 3: excess phải là £500, không phải £1,000 — sai.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.3 Decision Table Testing."
  },
  {
    "n": 6,
    "ref": "Câu 6 [FL-4.1.1]",
    "stem": "Which of the following BEST matches the descriptions with the different categories of test techniques? (See the figure: 1. Test cases are based on the test basis, which may include the requirements, use cases and user stories; 2. Test cases are based on the test basis, which may include the software architecture or code; 3. Test cases can show deviations from the requirements; 4. These test techniques are applicable to both functional and non-functional testing; 5. Tests are based on the knowledge of developers, users and other stakeholders.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Black: 1 &amp; 2; White: 3 &amp; 4; Experience: 5"
      },
      {
        "k": "b",
        "t": "B) Black: 2 &amp; 3; White: 1 &amp; 5; Experience: 1"
      },
      {
        "k": "c",
        "t": "C) Black: 1, 3 &amp; 4; White: 2; Experience: 5"
      },
      {
        "k": "d",
        "t": "D) Black: 2 &amp; 3; White: 1; Experience: 4 &amp; 5"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây TỐT NHẤT phù hợp với mô tả của các loại kỹ thuật kiểm thử khác nhau? (Xem hình: 1. Các trường hợp kiểm thử dựa trên cơ sở kiểm thử, có thể bao gồm các yêu cầu, trường hợp sử dụng và câu chuyện của người dùng; 2. Các trường hợp kiểm thử dựa trên cơ sở kiểm thử, có thể bao gồm kiến trúc hoặc mã phần mềm; 3. Các trường hợp kiểm thử có thể cho thấy những sai lệch so với yêu cầu; 4. Các kỹ thuật kiểm thử này có thể áp dụng cho cả kiểm thử chức năng và phi chức năng; 5. Kiểm thử dựa trên kiến thức của nhà phát triển, người dùng và các bên liên quan khác.)\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Đen: 1 & 2; Trắng: 3 & 4; Kinh nghiệm: 5\n  B) Đen: 2 & 3; Trắng: 1 & 5; Kinh nghiệm: 1\n  C) Đen: 1, 3 & 4; Trắng: 2; Kinh nghiệm: 5\n  D) Đen: 2 & 3; Trắng: 1; Kinh nghiệm: 4 & 5\n\n[GIẢI THÍCH CHI TIẾT]\nĐặc trưng của BLACK-BOX theo syllabus: test suy dẫn từ TEST BASIS gồm yêu cầu, use case, user story (1); test có thể phát hiện SAI LỆCH GIỮA HIỆN THỰC VÀ YÊU CẦU (3); áp dụng được cho CẢ kiểm thử chức năng LẪN phi chức năng (4). Đặc trưng của WHITE-BOX: test suy dẫn từ KIẾN TRÚC PHẦN MỀM hoặc MÃ NGUỒN (2). Đặc trưng của EXPERIENCE-BASED: test dựa trên KIẾN THỨC, KINH NGHIỆM của developer, người dùng và các bên liên quan (5). Vậy Black = 1, 3, 4; White = 2; Experience = 5 ⇒ (c). (Bài tập tương tự với bộ mô tả khác: Câu 20 – Đề 2.)\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.1.1 Categories of Test Techniques."
  },
  {
    "n": 7,
    "ref": "Câu 7 [FL-2.2.2]",
    "stem": "What is the difference between system integration testing and acceptance testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) System integration testing is testing non-functional requirements, while acceptance testing concentrates on the functionality of the system"
      },
      {
        "k": "b",
        "t": "B) System integration testing is executed by the developers, while acceptance testing is done by the customer"
      },
      {
        "k": "c",
        "t": "C) System integration testing verifies that a system interfaces correctly with other systems, while acceptance testing verifies compliance to requirements"
      },
      {
        "k": "d",
        "t": "D) System integration testing verifies compliance to requirements, while acceptance testing verifies correct interaction with other systems existing in the user's environment"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nSự khác biệt giữa kiểm thử tích hợp (integration testing) hệ thống và kiểm thử chấp nhận (acceptance testing) là gì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Kiểm tra tích hợp hệ thống đang kiểm tra các yêu cầu phi chức năng, trong khi kiểm tra chấp nhận tập trung vào chức năng của hệ thống\n  B) Kiểm tra tích hợp hệ thống được thực hiện bởi các nhà phát triển, trong khi kiểm tra chấp nhận được thực hiện bởi khách hàng\n  C) Kiểm tra tích hợp hệ thống xác minh rằng hệ thống giao tiếp chính xác với các hệ thống khác, trong khi kiểm tra chấp nhận xác minh việc tuân thủ các yêu cầu\n  D) Kiểm tra tích hợp hệ thống xác minh việc tuân thủ các yêu cầu, trong khi kiểm tra chấp nhận xác minh sự tương tác chính xác với các hệ thống khác hiện có trong môi trường của người dùng\n\n[GIẢI THÍCH CHI TIẾT]\nSYSTEM INTEGRATION testing tập trung kiểm tra hệ thống GIAO TIẾP ĐÚNG với các hệ thống KHÁC (dịch vụ bên ngoài, hệ thống của tổ chức khác, gói phần mềm bên thứ ba) — trọng tâm là giao diện và tương tác liên hệ thống; còn ACCEPTANCE testing xác nhận hệ thống TUÂN THỦ YÊU CẦU/nhu cầu nghiệp vụ để các bên có thẩm quyền ra quyết định chấp nhận ⇒ (c). (a) sai — cả hai mức đều có thể kiểm chức năng lẫn phi chức năng. (b) chỉ nói về NGƯỜI thực hiện (và cũng không chuẩn — SIT thường do tester làm), không phải khác biệt bản chất. (d) đảo ngược đúng nội dung của (c).\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.2.2 Integration Testing & 2.2.4 Acceptance Testing."
  },
  {
    "n": 8,
    "ref": "Câu 10 [FL-1.4.3]",
    "stem": "Which of the following BEST describes a test case?",
    "opts": [
      {
        "k": "a",
        "t": "A) A statement about \"what to test\" in terms of measurable coverage criteria, identified from analysis of the test basis"
      },
      {
        "k": "b",
        "t": "B) A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions"
      },
      {
        "k": "c",
        "t": "C) A description of the test objectives to be achieved, and the means and the schedule for achieving them"
      },
      {
        "k": "d",
        "t": "D) A source used to determine the expected results, to compare with the actual results of the system under test"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây TỐT NHẤT mô tả một test case (ca kiểm thử)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Tuyên bố về \"những gì cần kiểm tra\" theo tiêu chí bao quát có thể đo lường được, được xác định từ phân tích cơ sở kiểm tra\n  B) Một tập hợp các điều kiện tiên quyết, đầu vào, hành động (nếu có), kết quả mong đợi và hậu điều kiện, được phát triển dựa trên các điều kiện kiểm thử\n  C) Mô tả các mục tiêu kiểm tra cần đạt được, các phương tiện và lịch trình để đạt được chúng\n  D) Một nguồn dùng để xác định kết quả mong đợi, để so sánh với kết quả thực tế của hệ thống đang được kiểm thử\n\n[GIẢI THÍCH CHI TIẾT]\nĐịnh nghĩa TEST CASE theo Glossary: tập hợp gồm ĐIỀU KIỆN TIÊN QUYẾT (preconditions), ĐẦU VÀO, HÀNH ĐỘNG (nếu có), KẾT QUẢ MONG ĐỢI và HẬU ĐIỀU KIỆN (postconditions), được xây dựng dựa trên các test condition ⇒ (b). Các phương án còn lại là định nghĩa của khái niệm khác: (a) là TEST CONDITION — “cái cần test” với tiêu chí phủ đo được, rút ra từ phân tích test basis; (c) là TEST PLAN — mục tiêu, phương tiện và lịch trình đạt mục tiêu; (d) là TEST ORACLE — nguồn xác định kết quả mong đợi để so sánh với kết quả thực tế.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.4.3 Test Work Products & ISTQB Glossary."
  },
  {
    "n": 9,
    "ref": "Câu 11 [FL-4.2.3]",
    "stem": "Given the airline upgrade decision table in the figure (Rule 1: Gold + Business → free upgrade to First, discounted N/A; Rule 2: Gold + Economy → free upgrade to Business, discounted upgrade to First; Rule 3: Silver + Business → no free upgrade, discounted upgrade to First; Rule 4: Silver + Economy → free upgrade to Business, discounted none), what is the expected result for each of the following test cases? P) Gold frequent flyer, travelling in Economy class; Q) Silver frequent flyer, travelling in Business class.\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) P: Offer free upgrade to Business and discounted upgrade to First. Q: Offer discounted upgrade to First"
      },
      {
        "k": "b",
        "t": "B) P: Offer free upgrade to Business but cannot upgrade to First. Q: Offer discounted upgrade to First"
      },
      {
        "k": "c",
        "t": "C) P: Offer free upgrade to First. Q: Cannot upgrade to First"
      },
      {
        "k": "d",
        "t": "D) P: Offer discounted upgrade to First. Q: Offer free upgrade to First"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCho bảng quyết định nâng cấp hãng hàng không trong hình (Quy tắc 1: Vàng + Thương gia → nâng cấp miễn phí lên Hạng nhất, giảm giá N/A; Quy tắc 2: Vàng + Phổ thông → nâng cấp miễn phí lên Hạng nhất, được giảm giá nâng hạng lên Hạng nhất; Quy tắc 3: Bạc + Hạng thương gia → không nâng cấp miễn phí, giảm giá nâng cấp lên Hạng nhất; Quy tắc 4: Bạc + Hạng phổ thông → nâng cấp miễn phí lên Hạng nhất, không được giảm giá), kết quả mong đợi cho mỗi test case (ca kiểm thử) sau đây là gì? P) Khách hàng thường xuyên hạng Vàng, bay ở hạng Phổ thông; Q) Khách hàng thường xuyên hạng Bạc, bay ở hạng Thương gia.\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) P: Cung cấp nâng cấp miễn phí lên Doanh nghiệp và giảm giá nâng cấp lên Đầu tiên. Q: Cung cấp giảm giá nâng cấp lên First\n  B) P: Cung cấp nâng cấp miễn phí lên Business nhưng không thể nâng cấp lên First. Q: Cung cấp giảm giá nâng cấp lên First\n  C) P: Cung cấp nâng cấp miễn phí lên First. Q: Không thể nâng cấp lên First\n  D) P: Cung cấp giảm giá nâng cấp lên First. Q: Cung cấp nâng cấp miễn phí lên First\n\n[GIẢI THÍCH CHI TIẾT]\nP — khách Gold bay hạng Economy → khớp RULE 2: hành động gồm CẢ HAI — nâng hạng MIỄN PHÍ lên Business VÀ nâng hạng CÓ GIẢM GIÁ lên First. Q — khách Silver bay hạng Business → khớp RULE 3: KHÔNG có nâng hạng miễn phí, nhưng được đề nghị nâng hạng CÓ GIẢM GIÁ lên First. Vậy P = free lên Business + discounted lên First; Q = discounted lên First ⇒ (a). Bẫy của (b): bỏ sót hành động thứ hai của Rule 2 — với bảng quyết định, MỌI hành động có giá trị Yes trong cột rule tương ứng đều phải xuất hiện trong kết quả mong đợi.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.3 Decision Table Testing."
  },
  {
    "n": 10,
    "ref": "Câu 12 [FL-4.3.1]",
    "stem": "Consider the code in the figure: an if with a compound condition (temperature &lt; 0 or temperature &gt; 100) whose true-branch contains alert(\"DANGER\") and a nested if (speed &gt; 100 and load &lt;= 50) with the statement speed = 50; the else-branch contains check = false. How many test cases are needed to achieve 100% statement coverage?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
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
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nHãy xem xét đoạn mã trong hình: một if có điều kiện phức hợp (nhiệt độ < 0 hoặc nhiệt độ > 100) có nhánh thực chứa cảnh báo(\"DANGER\") và một if lồng nhau (tốc độ > 100 và tải <= 50) với câu lệnh speed = 50; nhánh khác chứa check = false. Cần bao nhiêu test case (ca kiểm thử) để đạt được mức độ bao phủ 100% câu lệnh?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 1\n  B) 2\n  C) 3\n  D) 4\n\n[GIẢI THÍCH CHI TIẾT]\nCác câu lệnh cần phủ: alert(\"DANGER\") — cần D1 (nhiệt độ ngoài [0,100]) đúng; speed = 50 — cần D1 đúng VÀ D2 (speed > 100 and load ≤ 50) đúng; check = false — cần D1 sai. Test 1: temperature = −5, speed = 120, load = 30 → vào nhánh true của D1 và true của D2 → phủ alert + speed = 50. Test 2: temperature = 50 → nhánh else → phủ check = false. Hai test phủ đủ mọi câu lệnh; không thể 1 test vì alert/speed=50 và check=false nằm trên hai nhánh loại trừ nhau ⇒ (b). (Nếu hỏi decision coverage thì cần 3 test — thêm trường hợp D1 đúng nhưng D2 sai.)\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.1 Statement Coverage."
  },
  {
    "n": 11,
    "ref": "Câu 13 [FL-4.2.1]",
    "stem": "A heating switch is switched OFF once the temperature falls below 18, and it is turned ON when the temperature is more than 21. Identify the equivalence values which belong to the SAME class.",
    "opts": [
      {
        "k": "a",
        "t": "A) 12, 16, 22"
      },
      {
        "k": "b",
        "t": "B) 24, 27, 17"
      },
      {
        "k": "c",
        "t": "C) 22, 23, 24"
      },
      {
        "k": "d",
        "t": "D) 14, 15, 19"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCông tắc sưởi được TẮT khi nhiệt độ giảm xuống dưới 18 và được BẬT khi nhiệt độ trên 21. Xác định các giá trị tương đương thuộc cùng loại.\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 12, 16, 22\n  B) 24, 27, 17\n  C) 22, 23, 24\n  D) 14, 15, 19\n\n[GIẢI THÍCH CHI TIẾT]\nHành vi của công tắc chia miền nhiệt độ thành BA phân vùng tương đương: dưới 18 (công tắc TẮT), từ 18 đến 21 (vùng trễ — không đổi trạng thái), trên 21 (công tắc BẬT). Các giá trị cùng thuộc MỘT phân vùng: (c) 22, 23, 24 — cả ba đều > 21, cùng phân vùng “bật” ⇒ (c). (a) 12, 16 thuộc vùng “tắt” nhưng 22 thuộc vùng “bật” — lẫn phân vùng; (b) 24, 27 vùng “bật” nhưng 17 vùng “tắt”; (d) 14, 15 vùng “tắt” nhưng 19 thuộc vùng giữa 18–21.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 12,
    "ref": "Câu 14 [FL-1.4.2]",
    "stem": "In which activity of the (fundamental) test process is the test environment set up?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test implementation and execution"
      },
      {
        "k": "b",
        "t": "B) Test planning and control"
      },
      {
        "k": "c",
        "t": "C) Test analysis and design"
      },
      {
        "k": "d",
        "t": "D) Evaluating exit criteria and reporting"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nMôi trường kiểm thử được thiết lập trong hoạt động nào của quy trình kiểm thử (cơ bản)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Triển khai và thực thi kiểm thử\n  B) Lập kế hoạch và kiểm soát kiểm thử\n  C) Phân tích và thiết kế kiểm thử\n  D) Đánh giá tiêu chí đầu ra (exit criteria) và báo cáo\n\n[GIẢI THÍCH CHI TIẾT]\nViệc DỰNG VÀ XÁC MINH MÔI TRƯỜNG kiểm thử là nhiệm vụ của TEST IMPLEMENTATION (trong quy trình 5 giai đoạn của syllabus cũ, giai đoạn này gộp chung thành “Test implementation and execution”): chuẩn bị testware, nạp test data, thiết lập môi trường sẵn sàng cho việc chạy test ⇒ (a). Giai đoạn planning & control chỉ LÊN KẾ HOẠCH về môi trường (yêu cầu, trách nhiệm); analysis & design chỉ THIẾT KẾ môi trường và nhận diện hạ tầng/công cụ cần có; evaluating exit criteria & reporting diễn ra sau khi thực thi. (Đối chiếu Câu 14 và Câu 39 – Đề 5 về ranh giới design/implementation/execution theo cách chia 7 hoạt động của bản 2018.)\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.4.2 Test Activities and Tasks."
  },
  {
    "n": 13,
    "ref": "Câu 15 [FL-3.1.2]",
    "stem": "Which of the following types of defect are typically found in reviews rather than in dynamic testing? (See the figure: a. deviations from standards; b. defects in interface implementation; c. poor maintainability of code; d. poor performance of the system; e. defects in requirements.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) a, c and e"
      },
      {
        "k": "b",
        "t": "B) a, b and d"
      },
      {
        "k": "c",
        "t": "C) b, d and e"
      },
      {
        "k": "d",
        "t": "D) a, c and d"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLoại lỗi nào sau đây thường thấy trong các bài đánh giá thay vì trong kiểm thử động (dynamic testing)? (Xem hình: a. sai lệch so với tiêu chuẩn; b. khiếm khuyết trong việc triển khai giao diện; c. khả năng duy trì mã kém; d. hiệu suất kém của hệ thống; e. khiếm khuyết trong các yêu cầu.)\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) A, c và e\n  B) A, b và d\n  C) B, d và e\n  D) A, c và d\n\n[GIẢI THÍCH CHI TIẾT]\nReview (kiểm thử tĩnh) soi trực tiếp work product nên tìm tốt các defect “đọc ra được”: (a) SAI LỆCH SO VỚI CHUẨN (coding/documentation standards) — thấy ngay khi đối chiếu tài liệu/mã với chuẩn; (c) KHẢ NĂNG BẢO TRÌ KÉM của mã (cấu trúc rối, trùng lặp, thiếu chú thích) — chỉ lộ khi con người đọc mã, kiểm thử động không phát hiện được; (e) DEFECT TRONG YÊU CẦU (mơ hồ, mâu thuẫn, thiếu sót) — phải review tài liệu vì chưa có gì để chạy. Ngược lại (b) defect trong HIỆN THỰC giao diện và (d) HIỆU NĂNG kém chỉ bộc lộ khi THỰC THI (integration testing, performance testing). Vậy a, c, e ⇒ (a).\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.1.2 Benefits of Static Testing (& 3.1.3)."
  },
  {
    "n": 14,
    "ref": "Câu 17 [FL-5.2.2]",
    "stem": "During which activity of the (fundamental) test process do you determine the exit criteria?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test analysis and design"
      },
      {
        "k": "b",
        "t": "B) Evaluating exit criteria and reporting"
      },
      {
        "k": "c",
        "t": "C) Test closure activities"
      },
      {
        "k": "d",
        "t": "D) Test planning and control"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong hoạt động nào của quy trình kiểm tra (cơ bản) bạn xác định tiêu chí đầu ra (exit criteria)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Phân tích và thiết kế kiểm thử\n  B) Đánh giá tiêu chí đầu ra (exit criteria) và báo cáo\n  C) Hoạt động kết thúc kiểm thử\n  D) Lập kế hoạch và kiểm soát kiểm thử\n\n[GIẢI THÍCH CHI TIẾT]\nEXIT CRITERIA được XÁC ĐỊNH (define) trong TEST PLANNING — lập kế hoạch quyết định “khi nào được phép dừng kiểm thử” (mức độ phủ, mật độ defect còn lại, ràng buộc thời gian/chi phí…) ⇒ (d). Bẫy của (b): giai đoạn “evaluating exit criteria and reporting” là nơi ĐÁNH GIÁ/ĐỐI CHIẾU kết quả so với exit criteria ĐÃ ĐỊNH, không phải nơi đặt ra chúng. (a) analysis & design suy dẫn test condition/test case; (c) test closure tổng kết, bàn giao testware, rút bài học. (Cùng logic với việc pass/fail criteria thuộc test plan — xem Câu 30 – Đề 1.)\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.2.2 & 5.2.3 (test planning và exit criteria)."
  },
  {
    "n": 15,
    "ref": "Câu 18 [FL-1.3]",
    "stem": "In the Foundation Level syllabus you will find the main basic principles of testing. Which of the following sentences describes one of these basic principles?",
    "opts": [
      {
        "k": "a",
        "t": "A) With automated testing you can make statements with more confidence about the quality of a product than with manual testing"
      },
      {
        "k": "b",
        "t": "B) Complete testing of software is attainable if you have enough resources and test tools"
      },
      {
        "k": "c",
        "t": "C) For a software system, it is not possible, under normal conditions, to test all input and output combinations"
      },
      {
        "k": "d",
        "t": "D) A goal of testing is to show that the software is defect-free"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong giáo trình Cấp độ Cơ bản, bạn sẽ tìm thấy các nguyên tắc cơ bản chính của kiểm tra. Câu nào sau đây mô tả một trong những nguyên tắc cơ bản này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Với kiểm thử tự động, bạn có thể đưa ra tuyên bố tự tin hơn về chất lượng sản phẩm so với kiểm thử thủ công\n  B) Có thể thực hiện được việc kiểm thử phần mềm hoàn chỉnh nếu bạn có đủ tài nguyên và công cụ kiểm tra\n  C) Đối với một hệ thống phần mềm, trong điều kiện bình thường, không thể kiểm tra tất cả các kết hợp đầu vào và đầu ra\n  D) Mục tiêu của kiểm thử là chứng tỏ phần mềm không có lỗi\n\n[GIẢI THÍCH CHI TIẾT]\nĐây là nguyên tắc 2 — EXHAUSTIVE TESTING IS IMPOSSIBLE: trừ các trường hợp tầm thường, không thể kiểm thử MỌI tổ hợp đầu vào, đầu ra và điều kiện tiên quyết; thay vào đó phải dùng phân tích rủi ro, kỹ thuật kiểm thử và độ ưu tiên để tập trung nỗ lực ⇒ (c). (b) phát biểu ngược nguyên tắc này — thêm tài nguyên/công cụ cũng không làm kiểm thử vét cạn trở nên khả thi. (d) ngược nguyên tắc 1 — kiểm thử cho thấy SỰ HIỆN DIỆN của defect, không chứng minh được phần mềm sạch lỗi. (a) không phải nguyên tắc nào — tự động hóa tăng tốc độ và tính lặp lại, không tự động cho “niềm tin cao hơn” về chất lượng.\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.3 Seven Testing Principles (nguyên tắc 2)."
  },
  {
    "n": 16,
    "ref": "Câu 19 [FL-2.3.4]",
    "stem": "Which of the following are characteristic of regression testing? (See the figure: i. regression testing is run ONLY once; ii. regression testing is used after fixes have been made; iii. regression testing is often automated; iv. regression tests need not be maintained.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) ii and iv"
      },
      {
        "k": "b",
        "t": "B) ii and iii"
      },
      {
        "k": "c",
        "t": "C) i, iii and iv"
      },
      {
        "k": "d",
        "t": "D) iii only"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là đặc điểm của kiểm thử hồi quy (regression testing)? (Xem hình: i. kiểm tra hồi quy CHỈ được chạy một lần; ii. kiểm tra hồi quy được sử dụng sau khi sửa lỗi; iii. kiểm tra hồi quy thường được tự động hóa; iv. kiểm tra hồi quy không cần phải duy trì.)\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Ii và iv\n  B) Ii và iii\n  C) Tôi, iii và iv\n  D) Iii chỉ\n\n[GIẢI THÍCH CHI TIẾT]\n(ii) ĐÚNG: regression testing được chạy SAU khi có sửa đổi/bản sửa lỗi — để kiểm tra thay đổi không gây tác dụng phụ lên phần không đổi. (iii) ĐÚNG: bộ regression được chạy đi chạy lại nhiều lần và thường ổn định nên là ứng viên số một cho TỰ ĐỘNG HÓA. (i) SAI: regression không chạy “chỉ một lần” — nó lặp lại ở mỗi bản build/release/iteration. (iv) SAI: bộ regression PHẢI ĐƯỢC BẢO TRÌ liên tục — cập nhật khi hệ thống thay đổi, loại bỏ test lỗi thời, bổ sung test cho tính năng mới; bỏ bê bảo trì là một rủi ro kinh điển. Vậy ii, iii ⇒ (b).\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.3.4 Change-related Testing."
  },
  {
    "n": 17,
    "ref": "Câu 20 [FL-4.2.5]",
    "stem": "Which of the following statements BEST describes how test cases are derived from a use case?",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases are defined based on non-functional requirements such as usability"
      },
      {
        "k": "b",
        "t": "B) Test cases are designed to cover the various user behaviours, including basic, exceptional or alternative, and error behaviours, associated with human users or systems"
      },
      {
        "k": "c",
        "t": "C) Test cases are created using white-box test techniques to execute scenarios of use cases"
      },
      {
        "k": "d",
        "t": "D) Test cases are derived based on pair testing between a user and a tester to find defects"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây mô tả TỐT NHẤT cách các ca kiểm thử được bắt nguồn từ một ca sử dụng?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Các test case (ca kiểm thử) được xác định dựa trên các yêu cầu phi chức năng như khả năng sử dụng\n  B) Các test case (ca kiểm thử) được thiết kế để bao quát các hành vi khác nhau của người dùng, bao gồm các hành vi cơ bản, đặc biệt hoặc thay thế và lỗi, liên quan đến người dùng hoặc hệ thống của con người.\n  C) Các trường hợp kiểm thử được tạo bằng kỹ thuật kiểm thử hộp trắng để thực hiện các kịch bản của các trường hợp sử dụng\n  D) Các trường hợp kiểm thử được bắt nguồn dựa trên việc kiểm thử cặp giữa người dùng và người kiểm thử để tìm ra lỗi\n\n[GIẢI THÍCH CHI TIẾT]\nUSE CASE mô tả tương tác giữa ACTOR (người dùng hoặc hệ thống khác) với hệ thống dưới dạng các KỊCH BẢN: luồng CƠ BẢN (basic/main flow), các luồng NGOẠI LỆ/THAY THẾ (exceptional/alternative) và các hành vi LỖI (error handling). Suy dẫn test từ use case nghĩa là thiết kế test PHỦ các hành vi/kịch bản đó ⇒ (b). (a) use case chủ yếu mô tả hành vi CHỨC NĂNG, không phải nguồn cho yêu cầu phi chức năng. (c) use case testing là kỹ thuật BLACK- BOX, không phải white-box. (d) “pair testing” giữa người dùng và tester là một thực hành cộng tác, không phải cách suy dẫn test từ use case.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.5 Use Case Testing (syllabus 2018)."
  },
  {
    "n": 18,
    "ref": "Câu 21 [FL-4.2.4]",
    "stem": "In the state table in the figure (S1: A→S2, D→S1; S2: B→S3; S3: B→S4, C→S2; S4: E→S4; blank cells are invalid), which of the following represents an INVALID transition?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Event C from S3"
      },
      {
        "k": "b",
        "t": "B) Event E from S4"
      },
      {
        "k": "c",
        "t": "C) Event B from S2"
      },
      {
        "k": "d",
        "t": "D) Event D from S4"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong bảng trạng thái trong hình (S1: A→S2, D→S1; S2: B→S3; S3: B→S4, C→S2; S4: E→S4; các ô trống không hợp lệ), điều nào sau đây thể hiện sự chuyển đổi KHÔNG HỢP LỆ?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Sự kiện C từ S3\n  B) Sự kiện E từ S4\n  C) Sự kiện B từ S2\n  D) Sự kiện D từ S4\n\n[GIẢI THÍCH CHI TIẾT]\nTra bảng: hàng S4, cột D là Ô TRỐNG — không có trạng thái đích, tức sự kiện D ở trạng thái S4 là chuyển KHÔNG HỢP LỆ ⇒ (d). Ba phương án còn lại đều có ô xác định: C từ S3 → S2 (hợp lệ); E từ S4 → S4 (vòng tự quay hợp lệ); B từ S2 → S3 (hợp lệ). Đây là công dụng chính của STATE TABLE so với sơ đồ trạng thái: bảng liệt kê ĐẦY ĐỦ mọi tổ hợp trạng thái × sự kiện, làm lộ ra các chuyển không hợp lệ (ô trống/N) cần được kiểm thử tiêu cực.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.4 State Transition Testing."
  },
  {
    "n": 19,
    "ref": "Câu 23 [FL-2.4]",
    "stem": "Which of the following is an appropriate reason for maintenance testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Bugs found in the field after upgrading the operating system"
      },
      {
        "k": "b",
        "t": "B) Bugs found during system testing"
      },
      {
        "k": "c",
        "t": "C) Bugs found during unit testing"
      },
      {
        "k": "d",
        "t": "D) Bugs found during integration testing"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nLý do nào sau đây là lý do thích hợp cho việc kiểm thử bảo trì?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Lỗi được tìm thấy trong trường sau khi nâng cấp hệ điều hành\n  B) Lỗi được tìm thấy trong quá trình kiểm tra hệ thống\n  C) Lỗi được tìm thấy trong quá trình kiểm tra đơn vị\n  D) Lỗi được tìm thấy trong quá trình kiểm tra tích hợp\n\n[GIẢI THÍCH CHI TIẾT]\nMAINTENANCE testing chỉ diễn ra khi hệ thống ĐÃ VẬN HÀNH (in production/in the field) và có thay đổi: sửa lỗi phát hiện ngoài thực địa, nâng cấp môi trường (như HỆ ĐIỀU HÀNH mới), cải tiến theo kế hoạch, chuyển đổi hoặc loại bỏ hệ thống. “Bug phát hiện ngoài thực địa SAU KHI nâng cấp hệ điều hành” hội đủ cả hai dấu hiệu: hệ thống đang vận hành + thay đổi môi trường ⇒ (a). (b), (c), (d) đều là defect tìm thấy trong các test level TRƯỚC KHI phát hành — thuộc kiểm thử phát triển thông thường, không phải maintenance testing. (Đối chiếu Câu 15 và 19 – Đề 6.)\n\nTham chiếu: Chương 2 – Kiểm thử trong vòng đời phần mềm, mục 2.4 Maintenance Testing."
  },
  {
    "n": 20,
    "ref": "Câu 25 [FL-5.6]",
    "stem": "Your Agile project has scheduled a final sprint before release, to fix and re-test all open defects with a priority level of 3 or above. The defect report in the figure shows the fields that are currently captured (title, date raised, author, status, what occurred, what should have occurred, priority, software build, test level, environment details). Which ONE of the following additional defect report fields would be MOST beneficial for the sprint team to add?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Severity"
      },
      {
        "k": "b",
        "t": "B) Test Script Id"
      },
      {
        "k": "c",
        "t": "C) Actual results"
      },
      {
        "k": "d",
        "t": "D) Expected results"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nDự án Agile của bạn đã lên lịch chạy nước rút cuối cùng trước khi phát hành, để sửa và kiểm tra lại tất cả các lỗi mở với mức độ ưu tiên từ 3 trở lên. Báo cáo lỗi trong hình hiển thị các trường hiện đang được ghi lại (tiêu đề, ngày nêu ra, tác giả, trạng thái, điều gì đã xảy ra, điều gì đáng lẽ phải xảy ra, mức độ ưu tiên, bản dựng phần mềm, cấp độ kiểm tra, chi tiết môi trường). MỘT trong những trường báo cáo lỗi bổ sung sau đây sẽ có lợi NHẤT cho nhóm chạy nước rút để thêm vào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Mức độ nghiêm trọng\n  B) Id tập lệnh kiểm tra\n  C) Kết quả thực tế\n  D) Kết quả mong đợi\n\n[GIẢI THÍCH CHI TIẾT]\nSoi các trường ĐÃ CÓ: “What occurred” chính là ACTUAL RESULTS và “What should have occurred” chính là EXPECTED RESULTS — nên (c) và (d) bị loại vì trùng lặp. Giữa hai trường còn thiếu, SEVERITY (mức độ nghiêm trọng — TÁC ĐỘNG của defect lên hệ thống/nghiệp vụ)\n\nbổ sung chiều thông tin mà PRIORITY (mức khẩn của việc sửa) chưa phản ánh: đội sprint đang chọn lọc defect để sửa và re-test cần biết cả tác động lẫn độ khẩn để quyết định đúng ⇒ (a). Test Script Id (b) hữu ích nhưng ít quan trọng hơn — các bước tái hiện đã có trong “What occurred” đủ để kiểm tra lại defect.\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.6 Defect Management (nội dung defect report)."
  },
  {
    "n": 21,
    "ref": "Câu 27 [FL-4.3.2]",
    "stem": "Consider the flowchart in the figure: Decision 1 (P &gt;= Q) — false leads to the message \"You lose\"; true leads to Decision 2 (P = Q) — false gives \"You win\", true gives \"Draw\". Which of the following pairs of test cases will exercise BOTH outcomes from Decision 2?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) P = 24, Q = 20 and P = 24, Q = 25"
      },
      {
        "k": "b",
        "t": "B) P = 36, Q = 36 and P = 37, Q = 35"
      },
      {
        "k": "c",
        "t": "C) P = 42, Q = 43 and P = 42, Q = 42"
      },
      {
        "k": "d",
        "t": "D) P = 37, Q = 36 and P = 35, Q = 36"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nXem xét sơ đồ trong hình: Quyết định 1 (P >= Q) — sai dẫn đến thông báo \"Bạn thua\"; true dẫn đến Quyết định 2 (P = Q) — false mang lại \"Bạn thắng\", true cho \"Hòa\". Cặp trường hợp kiểm thử nào sau đây sẽ thực hiện CẢ HAI kết quả từ Quyết định 2?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) P = 24, Q = 20 và P = 24, Q = 25\n  B) P = 36, Q = 36 và P = 37, Q = 35\n  C) P = 42, Q = 43 và P = 42, Q = 42\n  D) P = 37, Q = 36 và P = 35, Q = 36\n\n[GIẢI THÍCH CHI TIẾT]\nMuốn chạm tới Decision 2, test buộc phải qua nhánh TRUE của Decision 1, tức P ≥ Q. Cần một test P = Q (Decision 2 = true → “Draw”) và một test P > Q (Decision 2 = false → “You win”). Xét từng cặp: (b) P=36, Q=36 → P ≥ Q ✓ và P = Q → D2 true; P=37, Q=35 → P ≥ Q ✓ và P ≠ Q → D2 false — phủ CẢ HAI kết cục ⇒ (b). (a) test thứ hai (24, 25) có P < Q → rẽ “You\n\nlose”, không tới D2. (c) test thứ nhất (42, 43) có P < Q → không tới D2. (d) test thứ hai (35, 36) có P < Q → không tới D2.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.3.2 Decision Coverage."
  },
  {
    "n": 22,
    "ref": "Câu 28 [FL-1.1.2]",
    "stem": "Which statement correctly describes debugging?",
    "opts": [
      {
        "k": "a",
        "t": "A) Developers identify defects, testers locate defects, developers correct and confirm that the correction has cleared the original defect"
      },
      {
        "k": "b",
        "t": "B) Testers identify defects, developers locate and correct defects, testers confirm that the correction has cleared the original defect"
      },
      {
        "k": "c",
        "t": "C) Testers identify and locate defects, developers correct defects and confirm that the correction has cleared the original defect"
      },
      {
        "k": "d",
        "t": "D) Developers identify, locate and correct defects, testers confirm that the correction has cleared the original defect"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu lệnh nào mô tả chính xác việc gỡ lỗi?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhà phát triển xác định lỗi, người kiểm tra xác định lỗi, nhà phát triển sửa và xác nhận rằng việc sửa đã xóa lỗi ban đầu\n  B) Người kiểm thử xác định lỗi, nhà phát triển xác định và sửa lỗi, người kiểm thử xác nhận rằng việc sửa lỗi đã xóa lỗi ban đầu\n  C) Người kiểm thử xác định và xác định vị trí lỗi, nhà phát triển sửa lỗi và xác nhận rằng việc sửa lỗi đã xóa lỗi ban đầu\n  D) Nhà phát triển xác định, định vị và sửa lỗi, người kiểm thử xác nhận rằng việc sửa đã xóa lỗi ban đầu\n\n[GIẢI THÍCH CHI TIẾT]\nPhân công chuẩn giữa kiểm thử và debugging: TESTER (qua kiểm thử động) làm lộ failure và NHẬN DIỆN defect; DEVELOPER thực hiện DEBUGGING — tái hiện, ĐỊNH VỊ nguyên nhân gốc trong mã và SỬA nó; sau đó TESTER chạy CONFIRMATION testing để xác nhận bản sửa đã loại bỏ đúng defect ban đầu (kèm regression cho tác dụng phụ) ⇒ (b). (a) gán việc “định vị defect trong mã” cho tester — sai vai; (c) tương tự, tester không định vị trong mã; (d) đẩy toàn bộ cho developer, bỏ mất vai trò xác nhận độc lập của tester. (Xem quy trình debugging 3 bước theo v4.0 tại Câu bổ sung 1 – Đề 6.)\n\nTham chiếu: Chương 1 – Nền tảng kiểm thử, mục 1.1.2 Testing and Debugging & ISTQB Glossary."
  },
  {
    "n": 23,
    "ref": "Câu 29 [FL-4.2.1]",
    "stem": "In a system designed to work out the tax to be paid: an employee has £4,000 of salary tax-free; the next £1,500 is taxed at 10%; the next £28,000 is taxed at 22%; any further amount is taxed at 40%. Which of these groups of numbers would fall into the SAME equivalence class?",
    "opts": [
      {
        "k": "a",
        "t": "A) 28001, 32000, 35000"
      },
      {
        "k": "b",
        "t": "B) 5800, 28000, 32000"
      },
      {
        "k": "c",
        "t": "C) 5200, 5500, 28000"
      },
      {
        "k": "d",
        "t": "D) 4800, 14000, 28000"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTrong một hệ thống được thiết kế để tính toán số thuế phải nộp: một nhân viên có mức lương 4.000 bảng Anh được miễn thuế; 1.500 bảng tiếp theo bị đánh thuế 10%; 28.000 bảng tiếp theo bị đánh thuế ở mức 22%; bất kỳ khoản tiền nào nữa sẽ bị đánh thuế ở mức 40%. Nhóm số nào sau đây sẽ thuộc cùng lớp tương đương?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) 28001, 32000, 35000\n  B) 5800, 28000, 32000\n  C) 5200, 5500, 28000\n  D) 4800, 14000, 28000\n\n[GIẢI THÍCH CHI TIẾT]\nCác mốc: miễn thuế đến 4.000; 10% cho phần kế tiếp 1.500 → tổng lương 4.001 – 5.500; 22% cho phần kế tiếp 28.000 → tổng lương 5.501 – 33.500; 40% cho phần vượt → từ 33.501 trở lên. Bốn phân vùng: [0–4000], [4001–5500], [5501–33500], [33501–∞). Xét từng nhóm: (b) 5.800, 28.000, 32.000 — cả ba đều nằm trong [5501–33500] ⇒ cùng phân vùng ⇒ (b). (a) 28.001 và 32.000 thuộc [5501–33500] nhưng 35.000 thuộc [33501–∞). (c) 5.200 và 5.500 thuộc [4001–5500] nhưng 28.000 thuộc phân vùng kế. (d) 4.800 thuộc [4001–5500] nhưng 14.000 và 28.000 thuộc [5501–33500].\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.1 Equivalence Partitioning."
  },
  {
    "n": 24,
    "ref": "Câu 30 [FL-4.2.3]",
    "stem": "Given the decision table in the figure (conditions: weight &lt; 10 kg, price &lt; £10; Rule 1: T/T → must pay cash, no free delivery; Rule 2: T/F → no cash requirement, no free delivery; Rule 3: F/T → must pay cash, free delivery; Rule 4: F/F → no cash requirement, free delivery), what is the expected result for the test case: purchase a toaster weighing 9 kg for £10?\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) No need to pay in cash, no free delivery"
      },
      {
        "k": "b",
        "t": "B) Must pay in cash, no free delivery"
      },
      {
        "k": "c",
        "t": "C) No need to pay in cash, free delivery"
      },
      {
        "k": "d",
        "t": "D) Must pay in cash, free delivery"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCho bảng quyết định trong hình (điều kiện: trọng lượng < 10 kg, giá < £10; Quy tắc 1: T/T → phải thanh toán tiền mặt, không giao hàng miễn phí; Quy tắc 2: T/F → không yêu cầu tiền mặt, không giao hàng miễn phí; Quy tắc 3: F/T → phải thanh toán tiền mặt, miễn phí giao hàng; Quy tắc 4: F/F → không yêu cầu tiền mặt, miễn phí giao hàng), kết quả mong đợi của test case (ca kiểm thử): mua một máy nướng bánh mỳ nặng 9 kg với giá £10 là bao nhiêu?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Không cần thanh toán bằng tiền mặt, không cần giao hàng miễn phí\n  B) Phải thanh toán bằng tiền mặt, không giao hàng miễn phí\n  C) Không cần thanh toán bằng tiền mặt, giao hàng miễn phí\n  D) Phải thanh toán bằng tiền mặt, giao hàng miễn phí\n\n[GIẢI THÍCH CHI TIẾT]\nXác định giá trị của từng điều kiện cho test case: cân nặng 9 kg → “< 10 kg” = TRUE; giá £10 → “< £10” = FALSE (10 KHÔNG nhỏ hơn 10 — đây chính là cái bẫy biên của câu hỏi). Tổ hợp True/False khớp RULE 2: “Must pay in cash only” = False và “Free delivery” = False → không bắt buộc trả tiền mặt, không giao hàng miễn phí ⇒ (a). Ai đọc vội xem £10 là “< £10 = True” sẽ rơi vào Rule 1 và chọn nhầm (b).\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.3 Decision Table Testing."
  },
  {
    "n": 25,
    "ref": "Câu 32 [FL-6.2]",
    "stem": "When an organization considers the use of testing tools, it should:",
    "opts": [
      {
        "k": "a",
        "t": "A) Use a tool in order to help define a good test process, because the tool will force process repeatability and therefore enforce a good test process"
      },
      {
        "k": "b",
        "t": "B) Perform an analysis of the test process, and then assess whether it can be supported through the introduction of tool support"
      },
      {
        "k": "c",
        "t": "C) Allow the developers to select the testing tools, because tools are technical and developers have the appropriate skills to advise on test tool selection and configuration"
      },
      {
        "k": "d",
        "t": "D) Always start by bringing in automated test execution tools, as these tools have the greatest return on investment and therefore should be introduced first"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKhi một tổ chức xem xét việc sử dụng các công cụ kiểm tra, tổ chức đó nên:\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Sử dụng một công cụ để giúp xác định một quy trình kiểm thử tốt, bởi vì công cụ này sẽ buộc quy trình phải lặp lại và do đó thực thi một quy trình kiểm thử tốt\n  B) Thực hiện phân tích quy trình kiểm tra và sau đó đánh giá xem liệu quy trình đó có thể được hỗ trợ thông qua việc giới thiệu công cụ hỗ trợ hay không\n  C) Cho phép các nhà phát triển chọn các công cụ kiểm tra, vì các công cụ này mang tính kỹ thuật và các nhà phát triển có các kỹ năng phù hợp để tư vấn về việc lựa chọn và cấu hình công cụ kiểm tra\n  D) Luôn bắt đầu bằng cách sử dụng các công cụ thực hiện kiểm thử tự động, vì những công cụ này có lợi tức đầu tư lớn nhất và do đó cần được giới thiệu trước tiên.\n\n[GIẢI THÍCH CHI TIẾT]\nNguyên tắc vàng: QUY TRÌNH TRƯỚC — CÔNG CỤ SAU. Tổ chức cần PHÂN TÍCH quy trình kiểm thử hiện tại (điểm mạnh, điểm yếu, cơ hội) rồi mới đánh giá liệu công cụ có hỗ trợ được quy trình đó không ⇒ (b). (a) đảo ngược: đưa công cụ vào một quy trình hỗn loạn chỉ tự động hóa sự hỗn loạn — công cụ không “ép” ra quy trình tốt. (c) sai: lựa chọn công cụ kiểm thử cần sự tham gia của các bên dùng nó (tester, test manager) và đánh giá theo nhu cầu tổ chức, không khoán trắng cho developer. (d) sai: không có loại công cụ nào “luôn phải đưa vào trước” — ROI phụ thuộc bối cảnh, và test execution tool còn đòi hỏi quy trình/kỹ năng trưởng thành.\n\nTham chiếu: Chương 6 – Công cụ hỗ trợ kiểm thử, mục 6.2 (nguyên tắc lựa chọn và đưa công cụ vào tổ chức)."
  },
  {
    "n": 26,
    "ref": "Câu 33 [FL-4.2.3]",
    "stem": "The decision table in the figure shows a company's fuel expenses structure (Rule 1: neither car nor motorcycle driver → cannot claim; Rule 2: car + diesel + engine &lt; 1600cc → band A; Rule 3: car + diesel + engine &gt; 1600cc → band B; Rule 4: car + petrol + engine &lt; 1600cc → band C; Rule 5: car + petrol + engine &gt; 1600cc → band D; Rule 6: motorcycle → band A). Which of the following test cases based on the decision table are VALID? TC1: an employee who is neither a car nor a motorcycle driver attempts to claim fuel expenses — expected: claim not allowed. TC2: an employee who drives a 1700cc diesel car attempts to claim — expected: claim accepted at band C. TC3: an employee who rides a motorcycle attempts to claim — expected: claim accepted at band A.\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) Test cases 1 and 3 are valid; test case 2 is invalid"
      },
      {
        "k": "b",
        "t": "B) Test cases 2 and 3 are valid; test case 1 is invalid"
      },
      {
        "k": "c",
        "t": "C) Test cases 1, 2 and 3 are all valid"
      },
      {
        "k": "d",
        "t": "D) Test case 2 is valid; test cases 1 and 3 are invalid"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBảng quyết định trong hình thể hiện cơ cấu chi phí nhiên liệu của một công ty (Quy tắc 1: cả người lái ô tô và xe máy → không thể yêu cầu; Quy tắc 2: ô tô + diesel + động cơ < 1600cc → nhóm A; Quy tắc 3: ô tô + diesel + động cơ > 1600cc → nhóm B; Quy tắc 4: ô tô + xăng + động cơ < 1600cc → nhóm C; Quy tắc 5: ô tô + xăng + động cơ > 1600cc → nhóm D; Quy tắc 6: xe máy → nhóm A). test case (ca kiểm thử) nào sau đây dựa trên bảng quyết định là HỢP LỆ? TC1: một nhân viên không phải là người lái ô tô hay xe máy cố gắng yêu cầu chi phí nhiên liệu - dự kiến: không được phép yêu cầu bồi thường. TC2: một nhân viên lái chiếc ô tô diesel 1700cc cố gắng yêu cầu — dự kiến: yêu cầu được chấp nhận ở mức C. TC3: một nhân viên đi xe máy cố gắng yêu cầu — dự kiến: yêu cầu được chấp nhận ở mức A.\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Test case (ca kiểm thử) 1 và 3 đều hợp lệ; test case (ca kiểm thử) 2 không hợp lệ\n  B) Test case (ca kiểm thử) 2 và 3 đều hợp lệ; test case (ca kiểm thử) 1 không hợp lệ\n  C) Các test case (ca kiểm thử) 1, 2 và 3 đều hợp lệ\n  D) Test case (ca kiểm thử) 2 là hợp lệ; test case (ca kiểm thử) 1 và 3 không hợp lệ\n\n[GIẢI THÍCH CHI TIẾT]\nĐối chiếu từng test case: TC1 — không lái ô tô cũng không đi mô tô → RULE 1: “Can claim expenses” = No → kết quả mong đợi “không được phép” KHỚP ⇒ hợp lệ. TC2 — ô tô diesel 1700cc (> 1600cc) → RULE 3: band B; kết quả mong đợi ghi band C — SAI ⇒ không hợp lệ (band C thuộc Rule 4 dành cho xe XĂNG < 1600cc). TC3 — đi mô tô → RULE 6: được chấp nhận ở band A → KHỚP ⇒ hợp lệ. Vậy TC1, TC3 hợp lệ; TC2 không hợp lệ ⇒ (a).\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.2.3 Decision Table Testing."
  },
  {
    "n": 27,
    "ref": "Câu 34 [FL-4.1.1]",
    "stem": "Which of the following are structure-based techniques? (See the figure: a. decision table testing; b. boundary value analysis; c. multiple condition coverage; d. use case testing; e. decision testing.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
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
        "t": "C) b and e"
      },
      {
        "k": "d",
        "t": "D) c and e"
      }
    ],
    "ans": [
      "d"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nKỹ thuật nào sau đây là kỹ thuật dựa trên cấu trúc? (Xem hình: a. kiểm tra bảng quyết định; b. phân tích giá trị biên; c. bao phủ nhiều điều kiện; d. kiểm tra trường hợp sử dụng; e. kiểm tra quyết định.)\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) A và c\n  B) B và d\n  C) B và e\n  D) C và e\n\n[GIẢI THÍCH CHI TIẾT]\nNhóm STRUCTURE-BASED (white-box) suy dẫn test từ cấu trúc mã: (c) MULTIPLE CONDITION COVERAGE — phủ mọi tổ hợp giá trị của các điều kiện con trong một quyết định, và (e) DECISION TESTING — phủ các kết cục quyết định; cả hai là kỹ thuật/tiêu chí độ phủ white-box ⇒ c và e ⇒ (d). Các mục còn lại thuộc nhóm SPECIFICATION-BASED (black-box): (a) decision table testing — mô hình hóa tổ hợp điều kiện–hành động NGHIỆP VỤ từ đặc tả (đừng nhầm với decision testing!); (b) boundary value analysis — giá trị biên của phân vùng; (d) use case testing — kịch bản tương tác người dùng.\n\nTham chiếu: Chương 4 – Kỹ thuật kiểm thử, mục 4.1.1, 4.2 & 4.3."
  },
  {
    "n": 28,
    "ref": "Câu 35 [FL-5.1.2]",
    "stem": "Which of the following are tasks of a TESTER? (See the figure: i. interaction with the test tool vendor to identify the best ways to leverage the test tool on the project; ii. prepare and acquire test data; iii. implement tests on all test levels, execute and log the tests; iv. create the test specifications.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) i, ii and iii are true, and iv is false"
      },
      {
        "k": "b",
        "t": "B) ii, iii and iv are true, and i is false"
      },
      {
        "k": "c",
        "t": "C) i is true, and ii, iii and iv are false"
      },
      {
        "k": "d",
        "t": "D) iii and iv are correct, and i and ii are incorrect"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nNhiệm vụ nào sau đây là của kiểm thử? (Xem hình: i. tương tác với nhà cung cấp công cụ kiểm tra để xác định những cách tốt nhất để tận dụng công cụ kiểm tra trong dự án; ii. chuẩn bị và thu thập dữ liệu kiểm tra; iii. thực hiện kiểm tra ở tất cả các cấp độ kiểm tra, thực hiện và ghi lại các kiểm tra; iv. tạo các thông số kỹ thuật kiểm tra.)\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) I, ii và iii là đúng và iv là sai\n  B) Ii, iii và iv là đúng và i sai\n  C) Tôi đúng và ii, iii và iv sai\n  D) Iii và iv đúng, còn i và ii sai\n\n[GIẢI THÍCH CHI TIẾT]\nNhiệm vụ của TESTER gồm: (ii) CHUẨN BỊ và THU THẬP TEST DATA; (iii) HIỆN THỰC test ở các test level, THỰC THI và GHI LOG kết quả; (iv) TẠO TEST SPECIFICATION (đặc tả test case/test procedure) — cả ba đều đúng. Còn (i) LÀM VIỆC VỚI NHÀ CUNG CẤP CÔNG CỤ để khai thác công cụ cho dự án là nhiệm vụ của TEST MANAGER/leader (lựa chọn công cụ, tổ chức đào tạo, quan hệ nhà cung cấp) — sai với vai tester. Vậy ii, iii, iv đúng; i sai ⇒ (b). (Đối chiếu Câu 38 – Đề 4 và Câu 12 – Đề 5 về phân vai manager/tester.)\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.1.2 Tasks of a Test Manager and Tester."
  },
  {
    "n": 29,
    "ref": "Câu 36 [FL-5.1.1]",
    "stem": "Which of the following are benefits of an independent test team, and which are drawbacks? (See the figure: a. independent testers can find different defects; b. developers may put less emphasis on quality; c. independent testers can be seen as the reason for delayed projects; d. independent testers can verify assumptions made during the specification of a system.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) a and b are benefits; c and d are drawbacks"
      },
      {
        "k": "b",
        "t": "B) b and c are benefits; a and d are drawbacks"
      },
      {
        "k": "c",
        "t": "C) a and d are benefits; b and c are drawbacks"
      },
      {
        "k": "d",
        "t": "D) c and d are benefits; a and b are drawbacks"
      }
    ],
    "ans": [
      "c"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nĐiều nào sau đây là lợi ích của một nhóm kiểm thử độc lập và điều nào là nhược điểm? (Xem hình: a. những tester (kiểm thử viên) độc lập có thể tìm thấy các lỗi khác nhau; b. các nhà phát triển có thể ít chú trọng hơn đến chất lượng; c. những tester (kiểm thử viên) độc lập có thể được coi là lý do khiến các dự án bị trì hoãn; d. những tester (kiểm thử viên) độc lập có thể xác minh các giả định được đưa ra trong quá trình đặc tả hệ thống.)\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) A và b là lợi ích; c và d là nhược điểm\n  B) B và c là lợi ích; a và d là nhược điểm\n  C) A và d là lợi ích; b và c là nhược điểm\n  D) C và d là lợi ích; a và b là nhược điểm\n\n[GIẢI THÍCH CHI TIẾT]\nLỢI ÍCH của đội kiểm thử độc lập: (a) tester độc lập NHẬN RA CÁC LOẠI DEFECT KHÁC với developer — nhờ góc nhìn, thiên kiến khác; (d) tester độc lập có thể XÁC MINH/THÁCH THỨC CÁC GIẢ ĐỊNH mà các bên đưa ra khi đặc tả và hiện thực hệ thống. HẠN CHẾ: (b) developer có thể GIẢM Ý THỨC TRÁCH NHIỆM về chất lượng (ỷ lại “đã có tester”); (c) đội test độc lập dễ bị xem là NGUYÊN NHÂN LÀM TRỄ dự án (nút thắt cổ chai). Vậy a, d là lợi ích; b, c là hạn chế ⇒ (c). (Đối chiếu Câu 23 – Đề 5 và Câu bổ sung 6 – Đề 4.)\n\nTham chiếu: Chương 5 – Quản lý kiểm thử, mục 5.1.1 Independent Testing."
  },
  {
    "n": 30,
    "ref": "Câu 37 [FL-3.2.3]",
    "stem": "Which of the following statements about a formal review or inspection are true? (See the figure: i. led by a trained moderator, not the author; ii. no pre-meeting preparations; iii. formal follow- up process; iv. the main objective is to find defects.)\n[Lưu ý: Câu này có hình/bảng biểu trên Web App]",
    "opts": [
      {
        "k": "a",
        "t": "A) ii is true; i, iii and iv are false"
      },
      {
        "k": "b",
        "t": "B) i, iii and iv are true; ii is false"
      },
      {
        "k": "c",
        "t": "C) i, iii and iv are false; ii is true"
      },
      {
        "k": "d",
        "t": "D) iii is true; i, ii and iv are false"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây về việc xem xét hoặc thanh tra chính thức là đúng? (Xem hình: i. do người điều hành đã qua đào tạo hướng dẫn, không phải tác giả; ii. không chuẩn bị trước cuộc họp; iii. quy trình theo dõi chính thức; iv. mục tiêu chính là tìm ra khiếm khuyết.)\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Ii là đúng; i, iii và iv đều sai\n  B) I, iii và iv là đúng; tôi là sai\n  C) I, iii và iv là sai; tôi là sự thật\n  D) Iii là đúng; i, ii và iv đều sai\n\n[GIẢI THÍCH CHI TIẾT]\nĐặc điểm của INSPECTION — loại review chính thức nhất: (i) ĐÚNG — do MODERATOR ĐƯỢC ĐÀO TẠO dẫn dắt, không phải author (khác walkthrough); (iii) ĐÚNG — có quy trình FOLLOW-UP chính thức: kiểm tra defect đã sửa, đối chiếu exit criteria, thu thập số đo; (iv) ĐÚNG — mục tiêu chính là TÌM DEFECT (tối đa hóa số defect tiềm ẩn được phát hiện). (ii) SAI — inspection BẮT BUỘC có chuẩn bị cá nhân trước cuộc họp (individual review với checklist/rules); “không cần chuẩn bị trước” là đặc điểm của informal review/walkthrough (tùy chọn). Vậy i, iii, iv đúng; ii sai ⇒ (b).\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.2.3 Review Types (inspection)."
  },
  {
    "n": 31,
    "ref": "Câu 38 [FL-3.2.3]",
    "stem": "You are responsible for applying the correct technique for the review of the requirements document of a project. You identify the reviewers and the required roles, including the meeting leader — who is the requirements document author — and a separate role of scribe. Additionally, you decide to take a relatively informal approach to the review. The goal of the review is to find defects in the requirements document, such as omissions, inconsistencies and duplications. Another goal is to improve the application's usability and accessibility by considering the various stakeholders' viewpoints. Which review type and review technique does this scenario use?",
    "opts": [
      {
        "k": "a",
        "t": "A) A pair review type and a perspective-based review technique"
      },
      {
        "k": "b",
        "t": "B) A walkthrough review type and a perspective-based review technique"
      },
      {
        "k": "c",
        "t": "C) A walkthrough review type and a checklist-based review technique"
      },
      {
        "k": "d",
        "t": "D) A pair review type and a checklist-based review technique"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nBạn chịu trách nhiệm áp dụng đúng kỹ thuật để xem xét tài liệu yêu cầu của dự án. Bạn xác định người đánh giá và các vai trò cần thiết, bao gồm người chủ trì cuộc họp — tác giả tài liệu yêu cầu — và vai trò riêng của người ghi chép. Ngoài ra, bạn quyết định thực hiện một cách tiếp cận tương đối thân mật để đánh giá. Mục tiêu của việc xem xét là tìm ra các khiếm khuyết trong tài liệu yêu cầu, chẳng hạn như thiếu sót, mâu thuẫn và trùng lặp. Một mục tiêu khác là cải thiện khả năng sử dụng và khả năng tiếp cận của ứng dụng bằng cách xem xét quan điểm của các bên liên quan khác nhau. Kịch bản này sử dụng loại đánh giá và kỹ thuật đánh giá nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Loại đánh giá theo cặp và kỹ thuật đánh giá dựa trên quan điểm\n  B) Loại đánh giá hướng dẫn và kỹ thuật đánh giá dựa trên quan điểm\n  C) Loại đánh giá hướng dẫn và kỹ thuật đánh giá dựa trên danh sách kiểm tra\n  D) Loại đánh giá theo cặp và kỹ thuật đánh giá dựa trên danh sách kiểm tra\n\n[GIẢI THÍCH CHI TIẾT]\nNhận diện LOẠI review: cuộc họp do chính TÁC GIẢ tài liệu dẫn dắt, có scribe riêng, mức độ hình thức TƯƠNG ĐỐI THẤP, mục tiêu tìm defect và tạo hiểu biết — đó là dấu hiệu đặc trưng của WALKTHROUGH (loại review duy nhất do author dẫn). Nhận diện KỸ THUẬT review: đánh giá tài liệu từ GÓC NHÌN CỦA CÁC BÊN LIÊN QUAN KHÁC NHAU (người dùng cuối, nghiệp vụ, vận hành…) để cải thiện usability/accessibility — đó là PERSPECTIVE-BASED READING. Vậy walkthrough + perspective-based ⇒ (b). Không phải pair review (chỉ hai người, không có cấu trúc vai trò như mô tả) và không có dấu hiệu dùng checklist.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.2.3 Review Types & 3.2.4 Review Techniques."
  },
  {
    "n": 32,
    "ref": "Câu 39 [FL-3.1.2]",
    "stem": "Which of the following statements BEST states the value of static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) It is most effective when performed after dynamic testing"
      },
      {
        "k": "b",
        "t": "B) It can prevent defects later in design and coding, by uncovering issues in the requirements"
      },
      {
        "k": "c",
        "t": "C) It can detect exactly the same defects as those found by dynamic testing"
      },
      {
        "k": "d",
        "t": "D) It can eliminate the need for team member communication"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nCâu nào sau đây nêu rõ nhất giá trị của kiểm thử tĩnh (static testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nó hiệu quả nhất khi được thực hiện sau khi kiểm thử động (dynamic testing)\n  B) Nó có thể ngăn ngừa các lỗi sau này trong thiết kế và mã hóa bằng cách phát hiện các vấn đề trong yêu cầu.\n  C) Nó có thể phát hiện chính xác các lỗi tương tự như các lỗi được tìm thấy bằng kiểm thử động (dynamic testing)\n  D) Nó có thể loại bỏ nhu cầu giao tiếp của thành viên trong nhóm\n\n[GIẢI THÍCH CHI TIẾT]\nGiá trị cốt lõi của kiểm thử tĩnh nằm ở tính SỚM và PHÒNG NGỪA: phát hiện vấn đề ngay trong YÊU CẦU (mơ hồ, mâu thuẫn, thiếu sót) trước khi chúng lan xuống thiết kế và mã — mỗi defect yêu cầu bị chặn sớm tránh được hàng loạt defect “con cháu” ở các giai đoạn sau, với chi phí sửa rẻ hơn nhiều ⇒ (b). (a) ngược đời: kiểm thử tĩnh phát huy TRƯỚC kiểm thử động. (c) sai: hai loại tìm các PHỔ DEFECT KHÁC NHAU, bổ sung cho nhau (tĩnh tìm được defect mà động không thấy và ngược lại). (d) vô lý: review còn TĂNG CƯỜNG giao tiếp và hiểu biết chung trong nhóm — một lợi ích phụ quan trọng.\n\nTham chiếu: Chương 3 – Kiểm thử tĩnh, mục 3.1.2 Benefits of Static Testing (đối chiếu Câu 25 – Đề 3, Câu 7 – Đề 5).  PHẦN BỔ SUNG – CÂU HỎI THEO NỘI DUNG MỚI CỦA CTFL v4.0"
  },
  {
    "n": 33,
    "ref": "Câu bổ sung 1 [FL-4.2]",
    "stem": "Which of the following lists correctly reflects the test techniques covered by the CTFL v4.0 syllabus?",
    "opts": [
      {
        "k": "a",
        "t": "A) Black-box: equivalence partitioning, boundary value analysis, decision table testing, state transition testing; white-box: statement testing and branch testing; experience-based: error guessing, exploratory testing, checklist-based testing"
      },
      {
        "k": "b",
        "t": "B) Black-box: statement testing and branch testing; white-box: equivalence partitioning and boundary value analysis; experience-based: use case testing"
      },
      {
        "k": "c",
        "t": "C) Black-box: only equivalence partitioning; white-box: all techniques that use a specification; experience-based: decision table testing"
      },
      {
        "k": "d",
        "t": "D) The v4.0 syllabus abolished the classification of techniques; all techniques are now called exploratory"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nDanh sách nào sau đây phản ánh chính xác các kỹ thuật kiểm tra được đề cập trong giáo trình CTFL v4.0?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Hộp đen: phân vùng tương đương, phân tích giá trị biên, kiểm tra bảng quyết định, kiểm tra chuyển trạng thái; hộp trắng: kiểm tra câu lệnh và kiểm tra nhánh; dựa trên kinh nghiệm: đoán lỗi, kiểm tra thăm dò, kiểm tra dựa trên danh sách kiểm tra\n  B) Hộp đen: kiểm tra câu lệnh và kiểm tra nhánh; hộp trắng: phân vùng tương đương và phân tích giá trị biên; dựa trên kinh nghiệm: kiểm thử trường hợp sử dụng\n  C) Hộp đen: chỉ phân vùng tương đương; hộp trắng: tất cả các kỹ thuật sử dụng đặc tả; dựa trên kinh nghiệm: kiểm tra bảng quyết định\n  D) Giáo trình v4.0 bãi bỏ việc phân loại kỹ thuật; tất cả các kỹ thuật bây giờ được gọi là thăm dò\n\n[GIẢI THÍCH CHI TIẾT]\nDanh mục kỹ thuật của v4.0: nhóm BLACK-BOX gồm BỐN kỹ thuật — equivalence partitioning, boundary value analysis, decision table testing, state transition testing; nhóm WHITE-BOX gồm HAI kỹ thuật — statement testing (độ phủ câu lệnh) và BRANCH testing (độ phủ nhánh — thay cho “decision testing” của bản cũ); nhóm EXPERIENCE-BASED gồm BA — error guessing, exploratory testing, checklist-based testing ⇒ (a). Điểm cần lưu ý cho ai ôn bằng tài liệu cũ: USE CASE TESTING có trong syllabus 2018 (như Câu 20 của đề này) nhưng ĐÃ BỊ LOẠI khỏi danh mục kỹ thuật của v4.0.\n\nTham chiếu: CTFL v4.0 — Chương 4, mục 4.2 Black-box, 4.3 White-box, 4.4 Experience-based Test Techniques."
  },
  {
    "n": 34,
    "ref": "Câu bổ sung 2 [FL-4.4.2]",
    "stem": "According to CTFL v4.0, exploratory testing is sometimes conducted using session-based test management. Which of the following BEST describes this approach?",
    "opts": [
      {
        "k": "a",
        "t": "A) Testers execute only pre-scripted test cases in sessions of exactly one hour each"
      },
      {
        "k": "b",
        "t": "B) Exploratory testing is conducted within a defined time-box, the tester uses a test charter containing the test objectives to guide the session, and the results are documented in test session sheets"
      },
      {
        "k": "c",
        "t": "C) The whole team meets in a session to vote on which defects should be fixed"
      },
      {
        "k": "d",
        "t": "D) A tool randomly generates inputs during a session, and the tester only observes"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTheo CTFL v4.0, kiểm thử thăm dò (exploratory testing) đôi khi được tiến hành bằng cách sử dụng test manager (quản lý kiểm thử) theo phiên. Điều nào sau đây TỐT NHẤT mô tả phương pháp này?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Người kiểm tra chỉ thực hiện các trường hợp kiểm thử được viết sẵn theo kịch bản trong các phiên chính xác một giờ mỗi lần\n  B) Kiểm thử thăm dò (exploratory testing) được tiến hành trong một khung thời gian xác định, tester (kiểm thử viên) sử dụng test charter có chứa các mục tiêu kiểm thử để hướng dẫn phiên và kết quả được ghi lại trong bảng phiên kiểm thử\n  C) Cả nhóm họp lại để biểu quyết những lỗi cần khắc phục\n  D) Một công cụ tạo đầu vào ngẫu nhiên trong một phiên và người kiểm tra chỉ quan sát\n\n[GIẢI THÍCH CHI TIẾT]\nSESSION-BASED test management đưa cấu trúc vào exploratory testing: mỗi phiên kiểm thử diễn ra trong một KHUNG THỜI GIAN xác định (time-box); tester bám theo TEST CHARTER — bản mô tả MỤC TIÊU kiểm thử của phiên (có thể tạo trong test planning, cập nhật dần); trong phiên, việc thiết kế – thực thi – quan sát – học diễn ra đồng thời; kết quả (khu vực đã khám phá, defect, ý tưởng, câu hỏi) được ghi vào TEST SESSION SHEET và thường được trao đổi trong buổi debriefing sau phiên ⇒ (b). (a) mâu thuẫn với bản chất “không kịch bản trước” của exploratory; (c) và (d) không liên quan.\n\nTham chiếu: CTFL v4.0 — Chương 4, mục 4.4.2 Exploratory Testing."
  },
  {
    "n": 35,
    "ref": "Câu bổ sung 3 [FL-4.4.3]",
    "stem": "According to CTFL v4.0, how should checklists used for checklist-based testing be maintained?",
    "opts": [
      {
        "k": "a",
        "t": "A) A checklist must never be changed once created, to preserve comparability between test cycles"
      },
      {
        "k": "b",
        "t": "B) Checklists should be updated regularly based on defect analysis and experience; however, they should not become too long, since agility can be lost when every detail must be checked"
      },
      {
        "k": "c",
        "t": "C) Checklists should contain only items that can be verified automatically by a tool"
      },
      {
        "k": "d",
        "t": "D) Checklists should be discarded after each release and rewritten from an empty page"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTheo CTFL v4.0, nên duy trì danh sách kiểm tra được sử dụng để kiểm tra dựa trên danh sách kiểm tra như thế nào?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Danh sách kiểm tra không bao giờ được thay đổi sau khi được tạo để duy trì khả năng so sánh giữa các chu kỳ kiểm tra\n  B) Danh sách kiểm tra phải được cập nhật thường xuyên dựa trên kinh nghiệm và phân tích lỗi; tuy nhiên, chúng không nên quá dài vì có thể mất đi tính linh hoạt khi phải kiểm tra từng chi tiết.\n  C) Danh sách kiểm tra chỉ được chứa các mục có thể được xác minh tự động bằng công cụ\n  D) Danh sách kiểm tra nên được loại bỏ sau mỗi lần phát hành và viết lại từ một trang trống\n\n[GIẢI THÍCH CHI TIẾT]\nv4.0 nhấn mạnh việc BẢO TRÌ checklist: các mục trong checklist được xây dựng từ KINH NGHIỆM — phân tích defect trong quá khứ, hiểu biết về điều quan trọng với người dùng, cách phần mềm hay hỏng — nên phải được CẬP NHẬT ĐỊNH KỲ khi có bài học mới; đồng thời checklist KHÔNG NÊN QUÁ DÀI/quá chi tiết vì sẽ đánh mất tính linh hoạt và biến kiểm thử thành việc tích ô máy móc; nguy cơ khác là các mục quen thuộc dần bị kiểm qua loa theo thời gian ⇒ (b). (a) đóng băng checklist khiến nó “mòn” theo nguyên tắc tests wear out; (c) checklist chủ yếu phục vụ con người; (d) vứt bỏ mỗi release là lãng phí tri thức tích lũy.\n\nTham chiếu: CTFL v4.0 — Chương 4, mục 4.4.3 Checklist-Based Testing."
  },
  {
    "n": 36,
    "ref": "Câu bổ sung 4 [FL-1.4.1]",
    "stem": "According to CTFL v4.0, the test process is not carried out in the same way in every situation. Which of the following are CONTEXT factors that typically influence the test process of an organization or project?",
    "opts": [
      {
        "k": "a",
        "t": "A) Stakeholders' needs and expectations, team members' skills, the business domain, technical factors, project constraints (scope, time, budget), organizational factors, the software development lifecycle, and the availability of tools"
      },
      {
        "k": "b",
        "t": "B) Only the number of test cases planned for the release"
      },
      {
        "k": "c",
        "t": "C) Only the programming language in which the system is written"
      },
      {
        "k": "d",
        "t": "D) The test process is standardized worldwide and is never influenced by context"
      }
    ],
    "ans": [
      "a"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTheo CTFL v4.0, quy trình kiểm tra không được thực hiện giống nhau trong mọi tình huống. Yếu tố nào sau đây là BỐI CẢNH thường ảnh hưởng đến quá trình kiểm thử của một tổ chức hoặc dự án?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Nhu cầu và mong đợi của các bên liên quan, kỹ năng của thành viên nhóm, lĩnh vực kinh doanh, yếu tố kỹ thuật, ràng buộc của dự án (phạm vi, thời gian, ngân sách), yếu tố tổ chức, vòng đời phát triển phần mềm và tính sẵn có của các công cụ\n  B) Chỉ số lượng test case (ca kiểm thử) được lên kế hoạch phát hành\n  C) Chỉ ngôn ngữ lập trình mà hệ thống được viết\n  D) Quá trình kiểm tra được chuẩn hóa trên toàn thế giới và không bao giờ bị ảnh hưởng bởi bối cảnh\n\n[GIẢI THÍCH CHI TIẾT]\nKiểm thử PHỤ THUỘC NGỮ CẢNH (nguyên tắc 6), nên quy trình kiểm thử của mỗi tổ chức/dự án được định hình bởi hàng loạt yếu tố bối cảnh: NHU CẦU và kỳ vọng của các BÊN LIÊN QUAN; KỸ NĂNG của các thành viên nhóm; LĨNH VỰC NGHIỆP VỤ (mức độ an toàn – pháp lý); các yếu tố KỸ THUẬT (loại hệ thống, công nghệ); RÀNG BUỘC DỰ ÁN (phạm vi, thời gian, ngân sách, nguồn lực); yếu tố TỔ CHỨC (cấu trúc, chính sách); VÒNG ĐỜI PHÁT TRIỂN được chọn (tuần tự hay Agile); và CÔNG CỤ sẵn có ⇒ (a). Các yếu tố này ảnh hưởng đến mọi thứ: chiến lược, mức độ tài liệu, độ hình thức, số đo, mức tự động hóa. (b), (c) quá hẹp; (d) phủ nhận nguyên tắc 6.\n\nTham chiếu: CTFL v4.0 — Chương 1, mục 1.4.1 Test Process in Context."
  },
  {
    "n": 37,
    "ref": "Câu bổ sung 5 [FL-3.1.1]",
    "stem": "According to CTFL v4.0, which work products can be examined by static testing?",
    "opts": [
      {
        "k": "a",
        "t": "A) Only source code, because other documents cannot contain defects"
      },
      {
        "k": "b",
        "t": "B) Almost any work product that can be read — e.g., requirement specifications, source code, test plans and test cases, product backlog items, contracts, project documentation and models — while static ANALYSIS by tools additionally requires the work product to have a formal structure (e.g., code or formal models)"
      },
      {
        "k": "c",
        "t": "C) Only work products that have already passed dynamic testing"
      },
      {
        "k": "d",
        "t": "D) Only executable binaries delivered by third parties"
      }
    ],
    "ans": [
      "b"
    ],
    "multi": false,
    "exp": "[DỊCH CÂU HỎI]\nTheo CTFL v4.0, sản phẩm công việc nào có thể được kiểm tra bằng kiểm thử tĩnh (static testing)?\n\n[DỊCH CÁC ĐÁP ÁN]\n  A) Chỉ có mã nguồn, vì các tài liệu khác không thể chứa lỗi\n  B) Hầu hết mọi sản phẩm công việc đều có thể đọc được - ví dụ: thông số kỹ thuật yêu cầu, mã nguồn, kế hoạch kiểm thử và trường hợp kiểm thử, hạng mục sản phẩm tồn đọng, hợp đồng, tài liệu và mô hình dự án - trong khi PHÂN TÍCH tĩnh bằng các công cụ còn yêu cầu sản phẩm công việc phải có cấu trúc chính thức (ví dụ: mã hoặc mô hình chính thức)\n  C) Chỉ những sản phẩm hoạt động đã vượt qua kiểm thử động (dynamic testing)\n  D) Chỉ các tệp nhị phân thực thi được phân phối bởi bên thứ ba\n\n[GIẢI THÍCH CHI TIẾT]\nĐiểm mạnh của kiểm thử tĩnh là phạm vi áp dụng cực rộng: GẦN NHƯ MỌI work product ĐỌC ĐƯỢC đều review được — đặc tả yêu cầu (kể cả nghiệp vụ/chức năng/phi chức năng), mã nguồn, test plan/test case, hạng mục product backlog, test charter, tài liệu dự án, HỢP ĐỒNG, mô hình… Riêng STATIC ANALYSIS bằng công cụ đòi hỏi work product có CẤU TRÚC HÌNH THỨC để máy kiểm tra được (mã nguồn, mô hình hình thức) ⇒ (b). (a) sai — phần lớn giá trị của static testing nằm ở tài liệu TRƯỚC khi có mã; (c) ngược trình tự — static đi TRƯỚC dynamic; (d) sai — mã thực thi đóng gói của bên thứ ba là thứ KHÓ review nhất, không phải đối tượng điển hình.\n\nTham chiếu: CTFL v4.0 — Chương 3, mục 3.1.1 Work Products Examinable by Static Testing."
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
