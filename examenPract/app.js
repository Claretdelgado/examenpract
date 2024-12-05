import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/datos.controllers.js";

dotenv.config();
console.log("si se escucha", process.env.url_bd)
mongoose.connect(process.env.url_bd)

.then(()=>{
    console.log("si funciona");
})
.catch((error)=>{
    console.log("no funciona", error);
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha bien")
})
test()
