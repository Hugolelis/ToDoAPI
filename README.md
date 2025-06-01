# 🚀 To-Do API

![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg) ![Status](https://img.shields.io/badge/status-complete-brightgreen.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)


> Powerful and scalable backend API built with modern technologies.

---

## 📚 About

This is a RESTful API designed to handle user task management with full account support. It allows users to register, log in, and manage their personal tasks securely. The system uses JWT for authentication and bcrypt for password hashing, ensuring user data is handled with best security practices.

---

## 🧰 Tech Stack

- ⚙️ Node.js & NesJs 
- 📘 TypeScript  
- 🗃️ MySQL 
- 🔐 JWT for Authentication
- 🧂 bcrypt for Password Hashing 

---

## 📂 Project Structure

```bash
📦 backend
├── 📁 dist/
├── 📁 generated/
├── 📁 node_modules/
├── 📁 prisma/
│   └── schema.prisma
├── 📁 src/
│   ├── 📁 app/
│   ├── 📁 common/
│   │   ├── 📁 interceptors/
│   │   ├── 📁 jwt/
│   │   └── 📁 public/
│   ├── 📁 database/
│   ├── 📁 resources/
│   │   ├── 📁 auth/
│   │   ├── 📁 task/
│   │   └── 📁 user/
│   └── main.ts

```
---

## 📬 Main Endpoints and Features

### 🔐 AuthController

| Method | Route              | Description                   |
| ------ | ------------------ | ----------------------------- |
| POST   | /api/auth/register | Register a new user           |
| POST   | /api/auth/login    | Authenticate and login a user |

###  👤 UserController

| Method | Route            | Description                  |
| ------ | ---------------- | ---------------------------- |
| PATCH  | /api/user/update | Update user information      |
| PATCH  | /api/user/delete | Soft delete the current user |


###  🛡️ AdminController 

| Method | Route                   | Description                              |
| ------ | ----------------------- | ---------------------------------------- |
| GET    | /api/task/userTasks     | Retrieve all tasks belonging to the user |
| POST   | /api/task/create        | Create a new task                        |
| PATCH  | /api/task/complete/\:id | Mark a task as completed                 |
| PATCH  | /api/task/update/\:id   | Update task details                      |
| DELETE | /api/task/delete/\:id   | delete a task                            |


---

## 🖥️ Running the Project

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/Hugolelis/ToDoAPI.git
cd ToDoAPI
```

### 📦 2. Install Dependencies

```bash
npm install
```

### ⚙️ 3. Set Up Environment Variables (.env)

```bash
DATABASE_URL="mysql://root@localhost:3306/todoapi"
PORT="3000"
JWT_SECRET="secreto123"
```

### ▶️ 4. Start the Server

```bash
npm start
```
