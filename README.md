Learning Management System (LMS) API
Overview
This project is a backend API for a Learning Management System (LMS) built using Node.js, Express, MongoDB, and JWT for user authentication. The API allows users to sign up, log in, and manage their profiles. It also handles secure user sessions using JWT stored in cookies.

Features
User Signup: Users can register by providing their name, email, and password.
User Login: Registered users can log in and receive a JWT token for authentication.
Profile Management: Users can view and update their profile details (name and email).
JWT Authentication: Routes are protected using JWT to ensure only authenticated users have access to certain resources.
Database Connectivity: MongoDB is used to store user information, with automatic reconnection logic if the database connection is lost.
Prerequisites
To run this project, ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (Running locally or a MongoDB Atlas instance)

Technologies Used
Node.js: JavaScript runtime for server-side development.
Express.js: Web framework for building APIs.
MongoDB: NoSQL database for storing user data.
Mongoose: MongoDB ODM for managing database connections and schema models.
JWT (jsonwebtoken): For user authentication and authorization.
Cors: Middleware to enable Cross-Origin Resource Sharing between the frontend and backend.
