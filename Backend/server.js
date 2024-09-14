import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import { LoginRoute, RegisterRoute } from './route/auth.route.js';

mongoose.connect("mongodb://localhost:27017/Compass").then(
    ()=>console.log("Connected to DataBase")
).catch(
    (err)=>console.log(err)
)

const app = express();
app.use(express.json());
app.use(cors())

app.listen(3001,()=>{
    console.log("Server Listening at port 3001")
})

app.get("/hello",(req,res)=>{
    res.send("Hello world!")
})

app.use("/auth",RegisterRoute);
app.use("/auth",LoginRoute);

app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statuscode).json({
        success:false,
        message,
        statuscode,
    });
});