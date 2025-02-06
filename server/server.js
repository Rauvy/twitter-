import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';


import authRoutes from './routes/auth.routes.js'; // must put .js at the end
import userRoutes from './routes/user.routes.js';


import connectMongoDB from './db/connectMongoDB.js';

dotenv.config(); // load environment variables from .env file

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET, 
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //for parsing req.body
app.use(express.urlencoded({ extended: true })); //parse form data (urlencoded)

app.use(cookieParser());

//connecting middleware to process auth routes
app.use("/api/auth", authRoutes); // it's like collection of similar routes, so the code remains clean and managable
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});