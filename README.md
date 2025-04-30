# Student Management System

A full-stack application for managing student data with React frontend and Node.js/Express backend.

## Features

- CRUD operations for student data
- MongoDB database integration
- RESTful API endpoints
- Modern React frontend with Vite

## Tech Stack

### Frontend
- React
- Vite
- Axios
- ESLint

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install frontend dependencies:
```bash
cd frontend/harsh
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Create a .env file in the backend directory with your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend/harsh
npm run dev
```

## API Endpoints

- GET /users - Get all students
- POST /users - Create a new student
- PUT /users/:id - Update a student
- DELETE /users/:id - Delete a student

## License

MIT 