# Real-Time Chat Application

A full-stack real-time messaging application built using the MERN stack, enabling users to communicate through instant messaging with secure authentication and real-time communication.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** Socket.io
- **Authentication:** JSON Web Tokens (JWT)

## Features

- **User Authentication:** Secure user registration and login using JWT authentication.
- **Real-Time Messaging:** Instant message exchange using Socket.io.
- **RESTful APIs:** Backend APIs for handling application requests and data exchange.
- **Database Management:** MongoDB for storing and managing user and conversation data.
- **Responsive Interface:** User-friendly interface built with React.js and Tailwind CSS.

## Project Structure

```text
chat-application/
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── README.md
```

*Note: Adjust the folder structure above to match your actual repository.*

## Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd chat-application
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Configure the required environment variables before running the application. Never commit your `.env` file or expose secret credentials.

## Learning Outcomes

- Gained practical experience with full-stack MERN development.
- Learned to implement real-time communication using Socket.io.
- Practiced JWT-based authentication and REST API integration.
- Improved understanding of frontend-backend communication and database operations.

## Author

**Shubham Ghai**

