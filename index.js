import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/index.js";
import authRoutes from "./routes/routes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
