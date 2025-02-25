// const express = require("express");
// const dotenv = require("dotenv")
import  dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";
import authRoutes from "./routes/app.route.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
import userRoutes from "./routes/user.route.js";
import path from "path";

import messageRoutes from "./routes/message.route.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000 ;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname , "/frontend/dist")));





// app.get("/",(req,res)=>{
//   res.send("Hello World");
// })

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

server.listen(PORT,()=>{
  connectToMongoDb();
  console.log("server running on PORT "+PORT)
  }
);