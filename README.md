# React Auth App

This is a React + TypeScript application featuring **user authentication with JWT**, powered by:
- Zustand for global state management
- Private & public route guards
- Token persistence via `localStorage`
- Backend-ready integration with role-based access

---

## 🔧 Tech Stack

- ⚛️ React 18
- 🧠 Zustand for global state
- 🔐 JWT Authentication
- 🔄 Axios for API calls
- 📦 TypeScript
- 📁 Modular folder structure (views, services, models, store, routes)
- 🌐 React Router DOM

---

## 📁 Folder Structure

\`\`\`
src/
│
├── authentication/         # Login & Register screens
├── components/             # Reusable UI components
├── constants/              # API base URLs or constants
├── models/                 # TypeScript interfaces
├── routes/                 # Route guards (PublicRoute, PrivateRoute)
├── screens/                # App feature screens (Dashboard, Profile, etc.)
├── services/               # API service functions
├── store/                  # Zustand global state (authStore)
├── hooks/                 # Custom reusable hooks
├── utils/                 # Utility functions (date, auth, etc.)
└── App.tsx                # Entry point for routes
\`\`\`

---

## ✅ Features

- 🔐 **JWT Login/Register**
- 🚫 **Blocks access to login/register when already authenticated**
- ✅ **Protects dashboard & other private routes**
- 🧠 **Zustand for fast, lightweight auth state**
- ♻️ **Token and user info stored in `localStorage`**
- 🧾 **Role-based structure ready** (admin/member)

---

## 🚀 Getting Started

### Special (My GitHUb NodeApiSecureLogin download because Here api asa )

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Environment setup

Create a \`.env\` file:

\`\`\`env
REACT_APP_API_URL=http://localhost:4000/api
\`\`\`

(Adjust as needed to match your backend.)

### 4. Run the project

\`\`\`bash
npm start
\`\`\`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

---

## 🔐 Auth Flow

- On **Login/Register**, the backend responds with:
  \`\`\`json
  {
    "token": "...",
    "role": "member",
    "user": {
      "id": "...",
      "name": "...",
      "email": "..."
    }
  }
  \`\`\`
- Token is stored in Zustand & \`localStorage\`
- Public routes are blocked (\`/login\`, \`/register\`)
- Protected routes use \`<PrivateRoute />\` wrapper

---

## 🧠 Zustand Auth Store

Zustand handles:
- Login / Logout
- Token & user state
- Persistent storage via \`localStorage\`

\`\`\`ts
login: (token, user) => { ... }
logout: () => { ... }
\`\`\`

---

## 🛡 Route Guards

- \`PublicRoute\`: prevents access to \`/login\` and \`/register\` after login
- \`PrivateRoute\`: blocks access to \`/dashboard\` or other routes unless logged in

---

## 📦 Scripts

\`\`\`bash
npm start       # Run development server
npm run build   # Build for production
npm test        # Run unit tests (if configured)
\`\`\`

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
