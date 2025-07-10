# File Sharing API

A simple Node.js + Express application that allows users to upload, download, and manage files via RESTful APIs.

---

## 🚀 Features

- Upload files via REST API
- Download files using unique IDs
- List all uploaded files
- Delete files by ID
- File metadata stored in MongoDB
- Multer-based storage with support for any file type
- Ready for Docker containerization

---

## 💠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **File Handling:** Multer
- **Testing:** Postman

---

## 📂 Folder Structure

```
project-root/
├── Controllers/
│   └── uploadfile.js
├── model/
│   └── uploadModel.js
├── routers/
│   └── filerouter.js
├── middleware/
│   └── uplo.js
├── config/
│   └── uploadConfig.js
├── uploads/
│   └── (uploaded files stored here)
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ API Endpoints

### Upload File

    POST http://localhost:5000/fileupload/
    Content-Type: multipart/form-data
    Body: file=<file>

### Get All Files

    GET http://localhost:5000/fileupload/

### Download File

    GET http://localhost:5000/fileupload/:id

### Delete File

    DELETE http://localhost:5000/fileupload/:id

---

## ▶️ Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/vineethm5/file-sharing.git
   cd file-sharing
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your MongoDB connection string in the environment/config file.
4. Start the server:
   ```sh
   npm start
   ```
5. Use Postman or similar tools to test the API endpoints.

---

## 👨‍💻 Author

Vineeth M
