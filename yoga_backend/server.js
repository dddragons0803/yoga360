// server.js
const express = require('express');
const connectDb= require("./config/dbConnection");
const fs = require('fs');

const errorHandler = require("./middleware/errorHandler")
const multer = require('multer');
const cors = require('cors');
const dotenv = require("dotenv").config();
const path = require('path');

connectDb(); 
const videoRouter = require('./routes/video-routes')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.memoryStorage(); // Store file in memory buffer
const upload = multer({ storage: storage });

// Use middleware for handling file uploads
app.use('/api/videos', upload.single('thumbnail'), videoRouter);

app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


