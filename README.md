**A simple Node.js + Express application that allows users to upload, download, and manage files via RESTful APIs.**


🚀 **Features**

📄 Upload files via REST API

📅 Download files using unique IDs

📋 List all uploaded files

❌ Delete files by ID

📈 File metadata stored in MongoDB

📂 Multer-based storage with support for any file type

📦 Ready for Docker containerization

--------------------------------------------------------------------------------------------------------------------
💠 **Tech Stack**

Backend: Node.js, Express.js

Database: MongoDB + Mongoose

File Handling: Multer

Deployment: Docker, Postman for testing

--------------------------------------------------------------------------------------------------------------------

📂 **Folder Structure**

project-root/
├── controllers/
│   └── fileController.js
├── models/
│   └── fileSchema.js
├── routes/
│   └── fileRoutes.js
├── uploads/
│   └── (uploaded files stored here)
├── .gitignore
├── app.js
├── Dockerfile
├── package.json
└── README.md

--------------------------------------------------------------------------------------------------------------------

⚙️ **API Endpoints**

POST /api/files
Content-Type: multipart/form-data
Body: file=<file>

**Get All Files**

GET /api/files

**Download File**

GET /api/files/:id

**Delete File**

DELETE /api/files/:id

--------------------------------------------------------------------------------------------------------------------

▶️ **Getting Started**

1. Clone the Repository

--------------------------------------------------------------------------------------------------------------------

👨‍💻 **Author**

Vineeth M
