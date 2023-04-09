import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const app = express();



app.get("/", (req, res) => {
    res.status(201).json("server start");

});



mongoose.connect(process.env.DATABASE).then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  }).catch (error => console.log(error));



