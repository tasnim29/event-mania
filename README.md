# 🎉 Event Mania – A Local Event Discovery Platform

Event Mania is a full-stack web application where users can discover and explore a wide range of upcoming local events—tech conferences, art exhibitions, workshops, sports events, and more. Authenticated users can view detailed information, reserve seats, manage their profile, and enjoy a seamless user experience through an intuitive and responsive UI.

![Banner](https://i.ibb.co/q3nDHz93/Screenshot-2025-06-25-133104.png) <!-- Replace with your actual banner screenshot -->

---

## 🔗 Live Site & Repositories

🌐 [Live Website](https://assignment-9-bc372.web.app/)

---

## 🧑‍💻 Technologies Used

### 🌐 Frontend

- React.js
- React Router DOM
- Firebase Auth
- Tailwind CSS + DaisyUI
- Swiper Slider
- React Hook Form
- React Icons
- SweetAlert2 / Toastify
- Aos Animation

---

## 🚀 Features

- 👤 **Protected Routes** using React Router DOM
- 📅 **Upcoming Events Showcase** with details
- 📝 **Event Details Page** with seat reservation form
- 📄 **User Profile Page** (edit name & photo using `updateProfile()`)
- 👁️ **Toggle Password Visibility** (eye icon toggle on register form)
- 📧 **Forget Password Feature** (reset via Firebase)
- 🧭 **Dynamic Title** per page (React Helmet)
- 🌙 **Fully Responsive Design** for mobile, tablet, desktop
- 🔄 **Auth Persistence** on Reload using `onAuthStateChanged`
- 🧾 **404 Not Found Page**
- ➕ **Extra Protected Route** (e.g., Bookmarked Events or Reserved List)
- 🎠 **Interactive Slider** (Swiper.js)
- 🎨 **AOS Animation** on scroll elements

---

## 📦 NPM Dependencies

### Frontend

```bash
"react"
"react-dom"
"react-router-dom"
"firebase"
"react-hook-form"
"tailwindcss"
"daisyui"
"swiper"
"aos"
"react-icons"
"react-helmet"
"sweetalert2"
```

---

## 🛠️ How to Run Locally

### 🔽 Step 1: Clone the Project

```bash
git clone https://github.com/yourusername/event-explorer-client.git
cd event-explorer-client
npm install
```

### 🔐 Step 2: Setup Environment Variables

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚠️ Do NOT push this .env file to GitHub

### ▶️ Step 3: Run the App

```
npm run dev
```

## 🔗 Relevant Links

### 🔥 Firebase Docs: https://firebase.google.com/docs
