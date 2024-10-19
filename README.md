# Course Management System

## Overview

This is a Course Management System built with Node.js, Express, MongoDB, and JWT for authentication. The system includes user authentication, course creation and enrollment, lesson management, and progress tracking for enrolled users. It also features role-based access control for admin and teacher users.

## Features

- **User Authentication**: Register, login, and access protected routes using JWT tokens.
- **Role-based Access**: Admins and teachers can create, update, and delete courses and lessons, while users can only enroll and track their progress.
- **Course Management**: Admins and teachers can manage courses, including creating, updating, and deleting them.
- **Enrollment**: Users can enroll in courses and track their progress by completing lessons.
- **Lesson Management**: Admins and teachers can manage lessons within each course.
- **Progress Tracking**: Users' lesson completion is tracked within their enrollments.
- **Real-time Updates**: Course and lesson updates are immediately available to enrolled users.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Other**: bcrypt for password hashing, cookie-parser for handling cookies

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/vrajpatel0007/course-management-system.git
   cd course-management-system
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory:
   ```bash
   PORT=5000
   SECRET_key=your_jwt_secret_key
   MONGO_URI=your_mongodb_connection_string
   ```

4. Run the application:
   ```bash
   npm start
   ```

5. Visit the app at:
   ```
   http://localhost:5000
   ```

## API Endpoints

### User Authentication

- **POST** `/user/register`: Register a new user.
- **POST** `/user/login`: Log in a user and receive a JWT token.

### Course Management (Admin/Teacher Only)

- **POST** `/course/createcourse`: Create a new course.
- **PUT** `/course/updatecourse/:id`: Update an existing course.
- **DELETE** `/course/deletecourse/:id`: Delete a course.
- **GET** `/course/courses`: Get all courses (accessible to all users).

### Enrollment

- **POST** `/enrollment/enroll`: Enroll a user in a course.
- **POST** `/enrollment/complete`: Mark a lesson as completed by the user.
- **GET** `/enrollment/userenrollments`: Get all enrollments for the authenticated user.

### Lesson Management (Admin/Teacher Only)

- **POST** `/lesson/createlesson/:courseId`: Create a new lesson for a course.
- **PUT** `/lesson/updatelesson/:id`: Update an existing lesson.
- **DELETE** `/lesson/deletelesson/:id`: Delete a lesson.
- **GET** `/lesson/getlessonbyid/:id`: Get a lesson by ID.
- **GET** `/lesson/course/:courseId`: Get all lessons for a course.

## Middleware

- **authUser**: Middleware that verifies the JWT token and authenticates the user.
- **authorizeAdmin**: Middleware that checks if the user has Admin or Teacher roles for certain restricted routes.
