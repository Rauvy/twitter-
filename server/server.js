import express from 'express';
import authRoutes from './routes/auth.routes.js'; // must put .js at the end
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config(); // load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

//connecting middleware to process auth routes
app.use("/api/auth", authRoutes); // it's like collection of similar routes, so the code remains clean and managable

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});