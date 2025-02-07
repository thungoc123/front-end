# [SkinTime Booking Service Application]

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/built_with-vite-orange.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-v18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-v4+-blue.svg)](https://www.typescriptlang.org/)

## 🌟 Giới thiệu

[Tên dự án] là một ứng dụng frontend hiện đại được xây dựng bằng:
- **Vite**: Công cụ build nhanh cho React.
- **React (TypeScript)**: Framework UI mạnh mẽ.
- **Zustand**: Quản lý trạng thái đơn giản và nhẹ.
- **ShadCN UI**: Thư viện giao diện tích hợp với TailwindCSS.
- **TailwindCSS**: Công cụ CSS tiện lợi để xây dựng UI nhanh chóng.

---

## 🚀 Tính năng ( Kham khảo file document ) 

✨ Tính năng chính
👰‍♀️ Guest (Khách truy cập)
 - [Xem thông tin trung tâm: tên, địa chỉ, giới thiệu, bảng giá, khung giờ làm việc.]
 - [Xem thông tin dịch vụ: giới thiệu, biểu phí, sơ đồ trị liệu, đánh giá.]
 - [khảo sát để được đề xuất dịch vụ chăm sóc da phù hợp.]
💆‍♀️ Customer (Khách hàng)
- [Làm trắc nghiệm để nhận đề xuất dịch vụ phù hợp.]
- [Đặt lịch dịch vụ: chọn chuyên viên và khung giờ làm việc.]
- [Đổi lịch hoặc hủy lịch đặt.]
- [Đặt cọc và thanh toán dịch vụ.]
- [Feedback và đánh giá chuyên viên/dịch vụ.]
- [Quản lý hồ sơ cá nhân: chỉnh sửa, cập nhật thông tin.]
👩‍🔬 Staff (Nhân viên)
-- Xem thông tin lịch đặt của khách hàng.
-- Check-in, check-out cho khách hàng.
🎓 Manager (Quản lý)
-- Quản lý đánh giá, feedback từ khách hàng.
-- Quản lý hồ sơ khách hàng và lịch sử đặt dịch vụ.
-- Tạo và quản lý thông tin trung tâm, bảng giá dịch vụ.
-- Xem báo cáo thống kê (thu nhập, lượt khách, ...).
🥼 Skin Therapist (Chuyên viên chăm sóc da)
-- Quản lý lịch làm việc cá nhân.
- Chỉnh sửa hồ sơ cá nhân.
💅 System Admin (Quản trị viên hệ thống)
-- Quản lý toàn bộ hệ thống: danh sách người dùng, danh mục dịch vụ, ...
-- Tạo tài khoản nhân viên (tên, số điện thoại, email, mật khẩu).

---

## 🛠️ Công nghệ sử dụng

- **Vite**: Khởi chạy ứng dụng nhanh chóng.
- **React (TypeScript)**: Tận dụng tính năng của TypeScript cho code an toàn và dễ bảo trì.
- **Zustand**: Đơn giản, không rườm rà để quản lý trạng thái toàn cục.
- **ShadCN UI**: Xây dựng UI với các component tối ưu hóa cho TailwindCSS.
- **TailwindCSS**: CSS Utility-first framework.

---

## 📂 Cấu trúc dự án

```plaintext
src/
├── assets/         # Tài nguyên tĩnh (hình ảnh, fonts, ...)
├── components/     # Các component React
├── hooks/          # Custom hooks
├── store/          # Quản lý trạng thái với Zustand
├── styles/         # Tệp cấu hình và CSS
├── utils/          # Hàm tiện ích
├── services/       # Xu ly nhung API
├── App.tsx         # Thành phần chính của ứng dụng
├── main.tsx        # Điểm vào ứng dụng



🔧 Cài đặt và chạy
Yêu cầu:
  Node.js: Phiên bản >= 16
  NPM hoặc Yarn
Bước 1: Clone repository
  git clone https://github.com/<tên-tài-khoản>/<tên-dự-án>.git
  cd <tên-dự-án>
Bước 2: Cài đặt các dependencies
Sử dụng npm hoặc yarn:
  npm install
  # hoặc
  yarn
Bước 3: Chạy ứng dụng
  npm run dev
  # hoặc
  yarn dev
Truy cập ứng dụng tại [deploy later ]
✨ Đóng góp
  Fork repository.
  Tạo nhánh mới (git checkout -b feature/tính-năng-mới).
  Commit thay đổi (git commit -m "Thêm tính năng X").
  Push nhánh (git push origin feature/tính-năng-mới).
  Tạo Pull Request.
