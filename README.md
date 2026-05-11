# Full Stack Vehicle Insurance Management System

A full-stack Vehicle Insurance Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to register, login, manage vehicles, apply for insurance policies, and raise insurance claims through a responsive dashboard interface.

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout Functionality

## Dashboard
- Responsive Dashboard UI
- Statistics Cards
- Recent Activity Section

## Vehicle Management
- Add Vehicle
- View Vehicles
- Delete Vehicle
- Dynamic Vehicle Cards

## Insurance Policies
- Apply for Insurance Policy
- View Policies
- Policy Status Tracking

## Claims Management
- Raise Insurance Claim
- View Claims
- Claim Status Tracking

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Fetch API

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# Project Structure

bash

Full-Stack Vehicle Insurance/

│

├── client/

│   ├── src/

│   ├── public/

│   └── package.json

│

├── server/

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── middleware/

│   ├── config/

│   └── package.json

│

├── .gitignore

└── README.md

# How To Run The Application

## Step 1 — Clone Repository

bash

git clone https://github.com/Vishalguleria1/Full-Stack-Insurance-Application.git

Step 2 — Backend Setup

1. Navigate to server folder:

cd server

2. Install dependencies:

npm install

3. Create a .env file inside server folder and add:

PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

4. Start backend server:

npm run dev

5. Backend will run on:

http://localhost:5000

Step 3 — Frontend Setup

1. Open another terminal and navigate to client folder:

cd client

2. Install dependencies:

npm install

3. Start frontend server:

npm run dev

4. Frontend will run on:

http://localhost:5173

Step 4 — Run Application

1. Open browser and visit:

http://localhost:5173

2. You can now:

## Register User
<img width="612" height="752" alt="b2" src="https://github.com/user-attachments/assets/1b7ab08f-b54c-4a5d-b7d5-42a0684269b9" />

## Login
<img width="1201" height="812" alt="b1" src="https://github.com/user-attachments/assets/cddd685e-f9e9-4d75-a33f-de368f4f19cf" />

## Add Vehicles
<img width="1232" height="835" alt="b4" src="https://github.com/user-attachments/assets/50fc92b2-2da5-43a8-872c-61799624fa10" />

## Manage Policies
<img width="1241" height="832" alt="b5" src="https://github.com/user-attachments/assets/479d2731-5458-47cf-9853-0ab5a721696e" />

## Raise Claims
<img width="1252" height="811" alt="b6" src="https://github.com/user-attachments/assets/ef6e248b-20c5-4010-b1cb-238c08226653" />
