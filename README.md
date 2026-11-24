<div align="center">

# 🎯 ISTQB Studio
### Interactive Study Platform & Exam Simulator for ISTQB® CTFL v4.0

[![ISTQB Syllabus](https://img.shields.io/badge/ISTQB%C2%AE-CTFL%20v4.0.1-E26348.svg?style=for-the-badge&logo=target&logoColor=white)](https://www.istqb.org/)
[![Total Questions](https://img.shields.io/badge/Question%20Bank-610%20Questions-18181B.svg?style=for-the-badge&logo=databricks&logoColor=white)](#-ngân-hàng-đề-thi--cấu-trúc-dữ-liệu)
[![Pass Rate Target](https://img.shields.io/badge/Passing%20Score-%E2%89%A5%2065%25%20(26%2F40)-15803D.svg?style=for-the-badge&logo=checkmarx&logoColor=white)](#)
[![Google Forms Integration](https://img.shields.io/badge/Google%20Forms-1--Click%20Generator-4285F4.svg?style=for-the-badge&logo=googleforms&logoColor=white)](#-tích-hợp-tự-động-tạo-google-forms)
[![License](https://img.shields.io/badge/License-MIT-gray.svg?style=for-the-badge)](#)

<p align="center">
  <b>Hệ thống luyện đề, học thuộc nhanh và giả lập phòng thi chuẩn quốc tế ISTQB Certified Tester Foundation Level (CTFL v4.0).</b><br>
  Tự động trích xuất từ 16 bộ đề thi thử PDF chính thức, tích hợp sơ đồ/bảng biểu trực quan, phân tích câu sai thông minh và bộ sinh Google Forms tự động.
</p>

[✨ Trải Nghiệm Trực Tiếp (Live Demo)](https://dothang13.github.io/istqb-studio/) •
[🚀 Tính Năng Nổi Bật](#-tính-năng-nổi-bật) •
[📖 Cấu Trúc Đề](#-ngân-hàng-đề-thi--cấu-trúc-dữ-liệu) •
[⌨️ Phím Tắt](#️-hệ-thống-phím-tắt-tiện-lợi) •
[📝 Tạo Google Form](#-tích-hợp-tự-động-tạo-google-forms)

---

</div>

## 🌟 Tổng Quan (Overview)

**ISTQB Studio** được xây dựng nhằm giải quyết bài toán lớn nhất của sinh viên Công nghệ Phần mềm và Tester khi chuẩn bị cho kỳ thi ISTQB CTFL v4.0: **Khối lượng câu hỏi quá lớn (hơn 600 câu), các file PDF rời rạc khó học thuộc, và việc nhập thủ công lên Google Forms tốn hàng chục giờ đồng hồ.**

Dự án tự động hóa toàn bộ quy trình:
1. **Pipeline bóc tách dữ liệu thông minh** từ 16 tài liệu đề thi PDF (ASTQB, ISTQB Official, và bộ 10 đề giải thích tiếng Việt).
2. **Web App ôn tập hiện đại (Client-side 100%)** không cần cài đặt hay server backend phức tạp.
3. **Bộ sinh mã Google Apps Script 1-click** giúp tạo 17 Google Forms trắc nghiệm tự động chấm điểm và phản hồi giải thích chi tiết trong 10 giây.

---

## ✨ Tính Năng Nổi Bật (Key Features)

### 1. 🎨 Giao Diện Editorial "Warm Paper" & Obsidian Dark Mode
- Thiết kế theo tiêu chuẩn typography cao cấp với font chữ **Plus Jakarta Sans** (nội dung) và **JetBrains Mono** (mã số, đáp án, bảng số liệu).
- Tông màu giấy ấm `#F6F5F0` được tối ưu đặc biệt cho việc đọc hàng trăm câu hỏi liên tục mà **không gây mỏi mắt**, hỗ trợ chuyển đổi Dark Mode linh hoạt.

### 2. ⚡ 3 Chế Độ Ôn Luyện Toàn Diện
- **📖 Chế độ Học thuộc nhanh (Quick Study)**: Chọn đáp án tới đâu chấm điểm xanh/đỏ tức thì, hiển thị ngay lời giải thích chi tiết và tham chiếu mục kiến thức trong Syllabus v4.0. Có nút `👁 Hiện hết đáp án` để đọc lướt nhanh toàn bộ đề thi trước ngày thi.
- **🎴 Chế độ Flashcard 1 Câu (Focus Mode)**: Tập trung sâu vào từng câu hỏi, kèm bộ phím tắt bàn phím (`1`–`4`, `Space`, `Arrow Keys`, `F`) cho tốc độ ôn luyện nhanh gấp 3 lần.
- **⏱️ Chế độ Làm Form Thi thử (Exam Simulator)**: Giả lập phòng thi thực tế (đồng hồ đếm ngược 60 phút), ẩn toàn bộ đáp án khi làm bài, tự động chấm điểm theo chuẩn đậu ISTQB (tối thiểu **26/40 câu - 65%**).

### 3. 🎲 Đề Thi Thử Ngẫu Nhiên Chuẩn ISTQB v4.0
- Tự động bốc ngẫu nhiên 40 câu hỏi từ kho đề thi theo **đúng tỷ lệ phân bổ của ISTQB Official**:
  - **Chương 1 (Fundamentals of Testing)**: 8 câu
  - **Chương 2 (Testing Throughout the SDLC)**: 6 câu
  - **Chương 3 (Static Testing)**: 4 câu
  - **Chương 4 (Test Analysis and Design)**: 11 câu
  - **Chương 5 (Managing Test Activities)**: 9 câu
  - **Chương 6 (Test Tools)**: 2 câu

### 4. 📊 Trích Xuất Toàn Vẹn 94 Sơ Đồ & Bảng Biểu Cắt Nét Cao
- Tự động phát hiện và cắt trực tiếp 94 bảng quyết định (Decision Table), sơ đồ chuyển trạng thái (State Transition Diagram), bảng phân vùng tương đương (Equivalence Partitioning) và ma trận truy vết (Traceability Matrix) từ file PDF gốc để hiển thị trực quan kèm tính năng Lightbox phóng to.

### 5. 🧠 Hệ Thống Ôn Tập Lặp Lại Thông Minh (Spaced Repetition Tracking)
- Tự động ghi nhớ các câu Thắng từng làm sai vào **Kho Câu Hay Làm Sai** để luyện lại trước ngày thi.
- Gắn sao **★ Đánh dấu câu khó** để tiện xem lại chỉ với 1 click.
- Tùy chọn chuyển đổi giữa **Bộ Chuẩn 565 Câu Thầy Dạy** và **Bộ Full 610 Câu (gồm 45 câu bổ sung v4.0)**, kèm tính năng **Khử trùng lặp thông minh**.

---

## 📚 Ngân Hàng Đề Thi & Cấu Trúc Dữ Liệu

| Phân Nhóm | Số Bộ Đề | Tổng Số Câu | Đặc Điểm |
| :--- | :---: | :---: | :--- |
| **10 Đề Giải Chi Tiết Tiếng Việt** | 10 Đề | **344 câu** | 299 câu chính + 45 câu bổ sung v4.0 cập nhật mới, giải thích tiếng Việt chi tiết từng phương án A/B/C/D. |
| **ISTQB Sample Exam A – D** | 4 Đề (5 phần) | **186 câu** | Đề thi mẫu chính thức từ ISTQB (Đề A gồm 40 câu chính + 26 câu Additional; Đề B, C, D mỗi đề 40 câu). |
| **ASTQB Sample Exam #3 & #4** | 2 Đề | **80 câu** | Đề chuẩn từ Hội đồng Kiểm thử Phần mềm Hoa Kỳ (ASTQB) tương thích syllabus v4.0.1. |
| **Tổng Kho Cốt Lõi (Core)** | **16 Bộ** | **565 câu** | Trùng khớp 100% với số lượng đề cương giảng viên cung cấp. |
| **Tổng Kho Đầy Đủ (Full Pool)** | **17 Bộ** | **610 câu** | Bao gồm đầy đủ 45 câu cập nhật mở rộng. |

---

## ⌨️ Hệ Thống Phím Tắt Tiện Lợi (Keyboard Shortcuts)

Khi ở chế độ **Flashcard 1 câu**, bạn có thể sử dụng bàn phím để thao tác cực nhanh:

| Phím Tắt | Chức Năng |
| :---: | :--- |
| <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> / <kbd>4</kbd> hoặc <kbd>A</kbd> / <kbd>B</kbd> / <kbd>C</kbd> / <kbd>D</kbd> | Chọn nhanh phương án trả lời A, B, C, D |
| <kbd>Space</kbd> (Phím Cách) | Đóng / Mở phần giải thích chi tiết & tham chiếu Syllabus |
| <kbd>→</kbd> hoặc <kbd>J</kbd> | Chuyển sang câu hỏi tiếp theo |
| <kbd>←</kbd> hoặc <kbd>K</kbd> | Quay lại câu hỏi trước đó |
| <kbd>F</kbd> | Bật / Tắt đánh dấu sao (★) câu hỏi cần lưu ý |

---

## 🤖 Tích Hợp Tự Động Tạo Google Forms

Dự án cung cấp sẵn mã nguồn **Google Apps Script** cho cả 17 bộ đề trong thư mục [`Google_Forms_Scripts/`](./Google_Forms_Scripts):

```
Google_Forms_Scripts/
├── 01_De_Thi_Thu_01.gs
├── 02_De_Thi_Thu_02.gs
...
├── 10_De_Thi_Thu_10.gs
├── 11_ISTQB_Sample_Exam_A.gs
├── 12_ISTQB_Sample_Exam_A_Additional.gs
├── 13_ISTQB_Sample_Exam_B.gs
├── 14_ISTQB_Sample_Exam_C.gs
├── 15_ISTQB_Sample_Exam_D.gs
├── 16_ASTQB_Sample_Exam_3.gs
└── 17_ASTQB_Sample_Exam_4.gs
```

### 3 Bước Tạo Google Form Tự Động:
1. Mở bất kỳ file `.gs` nào (hoặc bấm nút **`+ Xuất Google Form`** ngay trên thanh công cụ của Web App để copy mã).
2. Truy cập [script.google.com](https://script.google.com) → Chọn **Dự án mới (New Project)** → Dán toàn bộ mã code vào.
3. Bấm **Lưu (Ctrl+S)** rồi bấm nút **Chạy (Run)** hàm `createISTQBQuizForm`.
   > ✅ **Kết quả**: Form trắc nghiệm tự động xuất hiện trên Google Drive của bạn, có sẵn điểm số (1 điểm/câu), đánh dấu đáp án đúng/sai và gắn sẵn lời giải thích vào phần Feedback!

---

## 📁 Cấu Trúc Dự Án (Project Structure)

```text
istqb-studio/
├── index.html                   # Giao diện Web App SPA hoàn chỉnh
├── questions_data.js           # Bộ dữ liệu 610 câu hỏi dạng JavaScript Object (chạy offline)
├── questions_data.json         # Dữ liệu JSON chuẩn dùng cho API / xử lý dữ liệu
├── extract_all_questions.py     # Python script bóc tách tự động từ 16 file PDF gốc
├── generate_gform_scripts.py    # Python script tự sinh 17 file Google Apps Script
├── Google_Forms_Scripts/        # 17 file Apps Script sẵn sàng 1-click tạo Form
├── images/                      # 94 hình ảnh, sơ đồ, bảng biểu cắt trực tiếp từ PDF
└── README.md                    # Tài liệu hướng dẫn dự án
```

---

## 🚀 Hướng Dẫn Sử Dụng & Triển Khai (Deployment)

### Chạy Offline Trên Máy Tính
Không cần cài đặt Node.js hay Python để sử dụng Web App:
1. Tải repository về máy tính.
2. Bấm đúp trực tiếp vào file [`index.html`](./index.html) để mở trên Chrome, Edge, Safari hoặc Firefox.

### Bật GitHub Pages Trong 30 Giây
1. Đẩy mã nguồn lên repository GitHub của bạn:
   ```bash
   git add .
   git commit -m "feat: launch ISTQB Studio v1.0"
   git branch -M main
   git remote add origin https://github.com/dothang13/istqb-studio.git
   git push -u origin main
   ```
2. Trên trang GitHub, vào **Settings** → **Pages** → Trong mục **Build and deployment**, chọn Branch `main` và folder `/ (root)` → Bấm **Save**.
3. Sau khoảng 1 phút, trang web sẽ online tại: `https://dothang13.github.io/istqb-studio/`.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Frontend Core**: Pure Vanilla JavaScript (ES6+), Modern HTML5, Semantic CSS3 with CSS Custom Properties (Theme Variables).
- **Typography & Icons**: Plus Jakarta Sans, JetBrains Mono, Instrument Serif.
- **Data Engineering**: Python 3.10+, PyMuPDF (`fitz`) for PDF layout analysis, OCR vector drawing clustering, and lossless DPI clipping.
- **Cloud Automation**: Google Apps Script (`FormApp`, `DriveApp`).

---

## 👨‍💻 Tác Giả & Ghi Nhận (Author & Acknowledgements)

- **Phát triển & Đóng gói**: [dothang13](https://github.com/dothang13)
- **Cố vấn Kỹ thuật & Đồng hành**: Trần Gia Bách (Bách)
- **Tài liệu tham khảo**:
  - *ISTQB® Certified Tester Foundation Level Syllabus v4.0*
  - *ASTQB – American Software Testing Qualifications Board*
  - *Bộ giải chi tiết đề thi thử ISTQB CTFL by Nhựt Võ*

<div align="center">
  <sub>Được xây dựng với sự tâm huyết để phục vụ kỳ thi KTPM Cuối Kỳ & Chứng chỉ ISTQB Quốc tế. Chúc bạn ôn tập hiệu quả và đạt điểm tuyệt đối! 💯</sub>
</div>
