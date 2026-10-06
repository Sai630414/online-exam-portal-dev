# Online Exam Portal

A full-stack online examination portal built with Node.js/Express (Backend) and React (Frontend).

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v14+)
- **MongoDB** running locally on `mongodb://localhost:27017`

---

### 2. Installation

Install dependencies for all modules:

```bash
# Backend
cd backend
npm install

# Admin Portal Frontend
cd ../frontend
npm install --legacy-peer-deps

# Student/Teacher Portal Frontend
cd ../user-portal-frontend
npm install --legacy-peer-deps
```

---

### 3. Running the Application

#### Start Backend Service
```bash
cd backend
npm start
# Running on http://localhost:5000
```

#### Start Admin Frontend
```bash
cd frontend
npm start
# Running on http://localhost:3000
```

#### Start Student/Teacher Portal Frontend
```bash
cd user-portal-frontend
set PORT=3001 && npm start
# Running on http://localhost:3001
```

---

## 🔑 Default Admin Credentials

- **Username:** `Sai_reddy6304`
- **Password:** `Sai@redy9866`

---

## 🛠️ Project Structure

- `backend/` – Express API server & MongoDB models
- `frontend/` – React admin panel
- `user-portal-frontend/` – React student & teacher portal
