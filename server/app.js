import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/router.js";

dotenv.config();
const app = express();



app.get("/", (req, res) => {
    res.status(201).json("server start");

});
app.use(cors());
app.use(express.json());
app.use(router);


mongoose.connect(process.env.DATABASE).then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to DB, http://localhost:${process.env.PORT}`);
    });
  }).catch (error => console.log(error));



