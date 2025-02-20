# Product API

## 📌 Overview
This is a **Node.js + Express.js + MongoDB** API for managing products. The API allows users to **create, read, update, and delete (CRUD)** product entries.

The project follows **best practices**, separating concerns into controllers, services, models, and routes while using **dotenv** for environment configuration.

---

## 🚀 Features
- **Product CRUD operations** (Create, Read, Update, Delete)
- **MongoDB database integration**
- **Environment variable management** using `.env`
- **Structured codebase** (Controllers, Routes, Models, Services)
- **Error handling and validation**
- **Scalable architecture**

---

## 🛠️ Tech Stack
- **Node.js** (Runtime environment)
- **Express.js** (Web framework)
- **MongoDB & Mongoose** (Database and ODM)
- **dotenv** (Environment variable management)

---

## 🏗️ Project Structure
```
📂 product-api
 ├── 📂 config
 │   ├── db.js            # Database connection logic
 │
 ├── 📂 models
 │   ├── product.model.js  # Mongoose Product Schema
 │
 ├── 📂 routes
 │   ├── product.routes.js # Product API Routes
 │
 ├── 📂 controllers
 │   ├── product.controller.js # Controller handling requests
 │
 ├── 📂 services
 │   ├── product.service.js # Business logic and database operations
 │
 ├── .env                  # Environment variables
 ├── .gitignore            # Ignoring unnecessary files
 ├── package.json          # Project dependencies
 ├── server.js             # Main entry point
 ├── README.md             # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/product-api.git
cd product-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/pos
```

### 4️⃣ Start the Server
```bash
npm start
```
_Server will run on **http://localhost:3000**_

---

## 📌 API Endpoints

### 🔹 Get All Products
```http
GET /api/products
```
_Response:_
```json
[
  {
    "_id": "6503f4d8a2b5b31a40ec5f6d",
    "name": "Laptop",
    "quantity": 10,
    "price": 1000,
    "image": "image-url"
  }
]
```

### 🔹 Create a Product
```http
POST /api/products
```
_Body:_
```json
{
  "name": "Laptop",
  "quantity": 10,
  "price": 1000,
  "image": "image-url"
}
```

### 🔹 Get a Single Product
```http
GET /api/products/:id
```

### 🔹 Update a Product
```http
PUT /api/products/:id
```
_Body:_
```json
{
  "name": "Gaming Laptop",
  "quantity": 5,
  "price": 1500
}
```

### 🔹 Delete a Product
```http
DELETE /api/products/:id
```

---

## 🛠️ Development & Contribution
### Running in Development Mode
To run in development mode with live-reload support, use:
```bash
npm run dev
```

### Contribution Guidelines
1. Fork the repository
2. Create a new feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request

---

## 📜 License
This project is licensed under the **MIT License**.

---

## ✨ Author
Developed by **Your Name** 🚀

💡 **Feel free to contribute and improve this project!**