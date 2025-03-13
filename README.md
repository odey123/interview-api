# Interview API

## Overview
This is a simple REST API for creating and managing interview sessions. It allows users to create, retrieve, and manage interview data stored in MongoDB.

## Features
- Create an interview session with a title, description, and questions.
- Retrieve all interview sessions.
- Store interview data in MongoDB.

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/odey123/interview-api.git
   cd interview-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=7000
   ```

4. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

### 1. Create an Interview
**POST** `/api/interviews`

**Request Body:**
```json
{
  "title": "Backend Developer Interview",
  "description": "Technical interview for backend role",
  "questions": ["What is Node.js?", "Explain event loop?"]
}
```

**Response:**
```json
{
  "_id": "65f1d2b6e4a1c4d8f8a7d9e2",
  "title": "Backend Developer Interview",
  "description": "Technical interview for backend role",
  "questions": ["What is Node.js?", "Explain event loop?"],
  "__v": 0
}
```

### 2. Get All Interviews
**GET** `/api/interviews`

**Response:**
```json
[
  {
    "_id": "65f1d2b6e4a1c4d8f8a7d9e2",
    "title": "Backend Developer Interview",
    "description": "Technical interview for backend role",
    "questions": ["What is Node.js?", "Explain event loop?"],
    "__v": 0
  }
]
```

## Notes
- Ensure MongoDB is running before starting the server.
- Use Postman or any API testing tool to interact with the endpoints.

## License
This project is licensed under the MIT License.

