# 🚀 To-Do API

![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg) ![Status](https://img.shields.io/badge/status-complete-brightgreen.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)

> API poderosa e escalável construída com tecnologias modernas.

---

## 📚 Sobre

Esta é uma API RESTful projetada para gerenciar tarefas de usuários com suporte completo de contas. Permite que os usuários se registrem, façam login e gerenciem suas tarefas pessoais de forma segura. O sistema utiliza JWT para autenticação e bcrypt para hash de senhas, garantindo que os dados dos usuários sejam tratados com as melhores práticas de segurança.

---

## 🧰 Tecnologias Utilizadas

- ⚙️ Node.js & NestJS  
- 📘 TypeScript  
- 🗃️ MySQL  
- 🔐 JWT para autenticação  
- 🧂 bcrypt para hash de senhas  

---

## 📂 Estrutura do Projeto

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

## 📬 Principais Endpoints e Funcionalidades

### 🔐 AuthController

| Método | Rota               | Descrição                     |
| ------ | ------------------ | ----------------------------- |
| POST   | /api/auth/register | Registrar um novo usuário     |
| POST   | /api/auth/login    | Autenticar e logar um usuário |


###  👤 UserController

| Método | Rota             | Descrição                        |
| ------ | ---------------- | -------------------------------- |
| PATCH  | /api/user/update | Atualizar informações do usuário |
| PATCH  | /api/user/delete | Soft delete do usuário atual     |



###  🛡️ AdminController 

| Método | Rota                    | Descrição                             |
| ------ | ----------------------- | ------------------------------------- |
| GET    | /api/task/userTasks     | Recuperar todas as tarefas do usuário |
| POST   | /api/task/create        | Criar uma nova tarefa                 |
| PATCH  | /api/task/complete/\:id | Marcar uma tarefa como concluída      |
| PATCH  | /api/task/update/\:id   | Atualizar detalhes de uma tarefa      |
| DELETE | /api/task/delete/\:id   | Deletar uma tarefa                    |


---

## 🖥️ Rodando o Projeto

### 🔧 1. Clonar o Repositório

```bash
git clone https://github.com/Hugolelis/ToDoAPI.git
cd ToDoAPI
```

### 📦 2. Instalar Dependências

```bash
npm install
```

### ⚙️ 3. Configurar Variáveis de Ambiente (.env)

```bash
DATABASE_URL="mysql://root@localhost:3306/todoapi"
PORT="3000"
JWT_SECRET="secreto123"
```

### ▶️ 4. Iniciar o Servidor

```bash
npm start
```
