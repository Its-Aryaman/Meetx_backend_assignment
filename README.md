
# Basic Activity Booking App (Backend)

This is a Node.js backend for a basic activity booking application, built with Express.js, MongoDB, and Mongoose. The app allows users to register, log in, create activities, book activities, and view their bookings. It uses JSON Web Tokens (JWT) for authentication and includes a common service file for reusable logic.

---

## Features

- **User Authentication**: Register and log in users with JWT-based authentication.
- **Activity Management**: Create and list activities (e.g., cricket matches, movie nights) with filtering by type and date.
- **Booking System**: Book available activities and view user-specific bookings.
- **Reusable Services**: Centralized utility functions for validation and database operations.
- **MongoDB Integration**: Stores users, activities, and bookings using Mongoose schemas.

---

## Tech Stack

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for API routes.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB schema management.
- **JWT**: Authentication using JSON Web Tokens.
- **ES Modules**: Modern JavaScript module syntax.
- **dotenv**: Environment variable management.

---

## Project Structure

```
backend-assignment/
├── node_modules/
├── .env
├── package.json
├── index.js
├── routes/
│   └── v1/
│       ├── auth.js
│       ├── activities.js
│       └── bookings.js
├── controllers/
│   └── v1/
│       ├── authController.js
│       ├── activitiesController.js
│       └── bookingsController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   ├── Activity.js
│   └── Booking.js
├── services/
│   └── commonService.js
├── README.md
```

---

## Prerequisites

- **Node.js**: v16 or higher
- **MongoDB**: Local installation or cloud (e.g., MongoDB Atlas)
- **Postman** *(optional)*: For API testing

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_secure_jwt_secret
```

> Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., from MongoDB Atlas).
>  
> Generate a secure `JWT_SECRET` using:  
> `crypto.randomBytes(64).toString('hex')` in Node.js.

### 4. Start MongoDB

Ensure MongoDB is running locally (`mongod`) or accessible via your cloud provider.

### 5. Run the Server

```bash
npm start
```

The server will run on `http://localhost:3000`.

You should see:

```
Server running on port 3000
MongoDB connected
```

---

## License

This project is for learning/demo purposes. Customize as needed for production.
