# 💊 Medic Panda – Online Pharmacy E-Commerce Application

**Medic Panda** is a modern, scalable, single-vendor e-commerce web application for selling medicine and healthcare products online. Built with **Next.js**, **MUI**, and **Redux Toolkit**, this app features a clean, responsive UI with powerful admin and customer-facing functionalities.

---

## 🔗 Important Links

- 🔴 **Live Demo:** [Visit the app](https://medic-panda.vercel.app/)
- 🧩 **Backend Code:** [Click Here](https://github.com/Sujoy-Kumar-Das/medic-panda-backend)

---

## 📸 Screenshots

### 🏠 Landing Page

![Landing Page](https://github.com/user-attachments/assets/6d95e197-083f-45b9-9470-bd3aeeafffcb)

> 👉 <a href="#more-screenshots">Click Here For More Screnshots</a>

---

## 🚀 Features

### 🛒 Customer Features

- Browse and search medicines by **category** and **name**
- Advanced **filtering**, **pagination**, and real-time search
- Product details include stock level and discount logic
- Add to cart (persistent in browser even without login)
- Checkout and place orders securely with **SSLCommerz**
- View and manage orders from a **user dashboard**
- Authentication via cookies: login, register, verify email, change email, reset password
- Fully responsive mobile-friendly UI

---

### 🔄 Cart Synchronization Logic

- Unauthenticated users can add items to cart (saved in localStorage)
- Upon login, cart merges into the user account cart (on the server)
- Cart is automatically synced or cleared based on login state

---

### 🔐 Authentication System

- Secure **JWT authentication** via **HTTP-only cookies**
- Role-based access: `user`, `admin`, `super-admin`
- Users can:
  - View and update their account
  - Track orders
  - Access a dynamic dashboard
- Admins and Super Admins can:
  - View and update all orders
  - Manage users (block/unblock, promote to admin)
  - Access an admin dashboard

---

### 🧑‍💼 Admin Panel

- Full **CRUD** operations on products, categories, and manufacturers
- Manage discounts with **automatic expiry detection**
- Moderate all reviews and replies
- Dynamic dashboard with analytics (per role)
- Strict role-based route protection

---

### 💳 Payment Integration

- Integrated with **SSLCommerz Payment Gateway**
- Real-time redirection and secure transaction handling
- Full sandbox and live mode support
- Order status updates based on payment results

---

### 🔮 Upcoming Features

- 🧠 **AI-Powered Prescription Reader**
  - Upload prescriptions
  - Detect and suggest products from text/image
  - Auto-generate a total **cash memo**

---

## 📦 Technologies Used

| Frontend                | Backend            | Others                    |
| ----------------------- | ------------------ | ------------------------- |
| Next.js 14 (App Router) | Node.js + Express  | MongoDB + Mongoose        |
| MUI + Tailwind CSS      | RESTful APIs       | Redux Toolkit + RTK Query |
| Sonner (Toast)          | JWT Auth (Cookies) | Zod Validation            |
| Swiper.js (Slider)      |                    | Axios, Cloudinary         |

---

## 📁 Project Structure (Frontend)

---

## 📁 Project Structure (Frontend)

medic-panda-frontend/src

├── app/

│ ├── globals.css

│ ├── layout.tsx

│ └── page.tsx

│ ├── not-found.tsx

│ ├── loading.tsx

│ ├── (withCommonLayout)/

│ ├── (withDashboardLayout)/

│ ├── (withRegisterLayout)/

│ ├── api/

│ ├── assets/

│ ├── common/

├── components/

│ ├── api/

├── lib/

├── public/

├── styles/

├── types/

├── .env.example

├── next.config.js

├── package.json

├── tailwind.config.js

└── tsconfig.json

---

## 🌐 Setup & Installation

### 1. Clone the repo

```bash
git clone https://github.com/Sujoy-Kumar-Das/medic-panda-frontend.git
cd medic-panda-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create .env file

```bash
NEXT_PUBLIC_base_url_local=http://localhost:5000/api/v1
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### 4. Start Project

```bash
npm run dev
```

Visit the app at: http://localhost:3000

---

<h2 id="more-screenshots">📸 More Screenshots</h2>

### 🛍️ Product Page

![Product Page](https://github.com/user-attachments/assets/ffc62e62-6dbb-444d-8ace-5c994b75c57d)

---

### 📦 User Dashboard (Orders)

![User Dashboard](https://github.com/user-attachments/assets/db690a51-ed6f-44d7-9a0b-368810989f9a)

---

### 👤 Admin Dashboard (Users)

![Admin Users](https://github.com/user-attachments/assets/3394bb91-ae62-4740-901a-422929822352)
