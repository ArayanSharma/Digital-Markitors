📦 Digital-Markitors/
│
├── 📁 Backend/
│   ├── 📁 Config/
│   │   └── 📄 db.js
│   ├── 📁 Controller/
│   │   ├── 📄 careerController.js
│   │   └── 📄 contactController.js
│   ├── 📁 middleware/
│   │   └── 📄 upload.js
│   ├── 📁 Model/
│   │   ├── 📄 Career.js
│   │   └── 📄 Contact.js
│   ├── 📁 routes/
│   │   ├── 📄 careerRoutes.js
│   │   └── 📄 contactRoutes.js
│   ├── 📁 uploads/
│   ├── 📄 server.js
│   └── 📄 package.json
│
├── 📁 Frontend/
│   ├── 📁 public/
│   ├── 📁 src/
│   │   ├── 📁 assets/
│   │   ├── 📁 Components/
│   │   │   ├── 📁 Cards/
│   │   │   ├── 📁 Sections/
│   │   │   ├── 🧩 Button.jsx
│   │   │   ├── 🧩 Footer.jsx
│   │   │   ├── 🧩 Header.jsx
│   │   │   ├── 🧩 Navbar.jsx
│   │   │   └── 🧩 Sidebar.jsx
│   │   ├── 📁 layout/
│   │   │   ├── 🧩 AdminLayout.jsx
│   │   │   └── 🧩 UserLayout.jsx
│   │   ├── 📁 Pages/
│   │   │   ├── 📁 admin/
│   │   │   ├── 📄 About.jsx
│   │   │   ├── 📄 Career.jsx
│   │   │   ├── 📄 Contact.jsx
│   │   │   └── 📄 Home.jsx
│   │   ├── 📁 Styles/
│   │   ├── 📄 App.jsx
│   │   ├── 🎨 App.css
│   │   ├── 🎨 index.css
│   │   └── 📄 main.jsx
│   ├── 📄 package.json
│   ├── ⚙️ vite.config.js
│   └── ⚙️ tailwind.config.js
│
└── 📘 README.md
└── -


🧭 Project Workflow


The project has two parts that work together:

🎨 1. Frontend – what users see and interact with (the website)
⚙️ 2. Backend – what handles data behind the scenes (forms, database, admin)



Step 1: Backend goes live first-->

The backend server starts up — this is what stores and processes data (like contact form submissions or job applications).

Step 2: Frontend goes live next -->
      
      The website (frontend) starts up and connects to that backend so it can send and receive data.


Step 3: Build/update the UI-->

      Any visual changes — new pages, buttons, sections — happen on the frontend side.

Step 4: Connect forms to backend-->

     When a user submits a form (Contact, Career, etc.), the frontend sends that data to the backend, which saves it.


Step 5: Test everything--> 

     Before going live, we test the Contact form, Career form, and Admin panel to confirm data flows correctly end-to-end.



🔄 3. Development Flow

🟢 Run the backend server.
🟢 Run the frontend development server.
🎨 Make UI changes in the frontend.
🔗 Connect frontend forms to backend APIs.
✅ Test contact, career, and admin flows.


📦 4. Typical File Purpose

Folder / File                                   Purpose

📄 Pages/                 -                   Page-level UI
🧩 Components/            -                Reusable UI blocks
🎨 Styles/                -                    CSS files
🌐 routes/                -                   API endpoints
🧠 Controller/            -                  Business logic
🗄️ Model/                 -                  Database schema 


🧪 Testing Checklist

 1.Contact form submits and saves to DB
 2.Career form submits and saves to DB
 3.File uploads work (uploads/ folder)
 4.Admin pages load and display data correctly



💬 Summary-

 The frontend is the visible website, the backend stores and processes the data, and they're connected through APIs. We run both servers together, build/test the UI, and confirm forms (Contact, Career, Admin) properly save data to the backend.
