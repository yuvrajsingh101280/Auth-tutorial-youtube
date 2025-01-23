# Authentication API

This project implements a simple authentication system with features like signup, login, logout, and user verification using Node.js, Express.js, MongoDB, and JSON Web Tokens (JWT).

## Features

- **User Signup**: Create a new user account with a hashed password.
- **User Login**: Authenticate users and set a secure HTTP-only cookie with a JWT.
- **User Logout**: Clear the authentication cookie.
- **Verify User**: Verify if a user is authenticated using the token in the cookie.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/) (optional, for testing)

### Steps to Run Locally

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. **Install the packages**
npm install

3. **Create a env file**
PORT=8000
MONG_URL=<Your MongoDB Connection String>

SECRET_KEY=hello world

NODE_ENV=development

4. **Run the Server**

npm run dev


### The Server will start at (http://localhost:8000)


