# 🚀 Falatu Backend API

A robust and scalable backend API built with Node.js, Express.js, and MongoDB for the Falatu social media platform.

## 🌟 Overview

This backend API powers the Falatu social media platform, providing secure and efficient endpoints for user management, authentication, post handling, and social interactions.

## 💻 Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Joi** - Data validation
- **Dotenv** - Environment management

## ⚡ Features

- 🔐 User Authentication & Authorization
- 👤 User Profile Management
- 📝 Post CRUD Operations
- 💬 Comment Management
- ❤️ Like/Unlike Functionality
- 🤝 Follow/Unfollow System
- 🔍 Advanced Search
- 🌓 Dark/Light Mode Preferences
- 📱 Push Notification System
- 📍 Location Services

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify token

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Posts
- `POST /api/posts` - Create post
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get post by ID
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### Comments
- `POST /api/posts/:id/comments` - Add comment
- `GET /api/posts/:id/comments` - Get comments
- `PUT /api/comments/:id` - Update comment
- `DELETE /api/comments/:id` - Delete comment

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/falatu-backend.git
```

## 🤝 Contributing

Contributions are welcome! Please submit a pull request with a clear description of the changes.

## 📄 License

This project is licensed under the MIT License.