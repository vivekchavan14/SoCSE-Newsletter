import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/authRoutes.js'
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.get('/',(req,res)=>{
    res.send('Hello');
})



mongoose.connect("mongodb+srv://vivek:xyz@cluster0.mkx0jfi.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Mongodb connected")
})
.catch((err)=> {
    console.log(err.message);
})

app.use(express.json());
app.use('/api/auth',authRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    })
})

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})