# Login-Signup Project

A simple **Login & Signup application** built with **React, Node.js, MongoDB, Tailwind CSS, and Formik**.  
It allows users to register, login, and access a protected dashboard.  

---

## 🔹 Features

- User registration and login
- Form validation using **Formik** and **Yup**
- Styled with **Tailwind CSS** + some custom CSS
- **Protected routes** for authenticated users
- Data stored in **MongoDB**
- Backend built with **Node.js + Express**
- Authentication handled using **Passport.js**

---

## 💻 Tech Stack

| Frontend        | Backend         | Database     |
|-----------------|----------------|-------------|
| React           | Node.js         | MongoDB     |
| Tailwind CSS    | Express.js      | Mongoose    |
| Formik + Yup    | Passport.js     |             |
| Normal CSS      | CORS           |             |

---

## 📁 Project Structure

project-root/
├─ client/ # React frontend
│ ├─ src/
│ ├─ public/
│ └─ package.json
├─ server/ # Node.js backend
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ └─ package.json
├─ .gitignore
└─ README.md


---

## ⚡ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/login-signup-project.git
cd login-signup-project

2. Setup Backend
cd server
npm install

Create a .env file in the server folder:
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
PORT=3000

Start the backend server:
npm run dev

3. Setup Frontend
cd ../client
npm install
npm start


🚀 Usage
Open frontend in browser
Signup a new account
Login with the registered credentials
Access the Dashboard (protected route)


👨‍💻 Author
Sandesh Kumar
