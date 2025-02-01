// const express = require("express");
// const dotenv = require("dotenv")
import  dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";
import authRoutes from "./routes/app.route.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
import userRoutes from "./routes/user.route.js";

import messageRoutes from "./routes/message.route.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000 ;

app.use(express.json());
app.use(cookieParser())


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



// app.get("/",(req,res)=>{
//   res.send("Hello World");
// })

server.listen(PORT,()=>{
  connectToMongoDb();
  console.log("server running on PORT "+PORT)
  }
);