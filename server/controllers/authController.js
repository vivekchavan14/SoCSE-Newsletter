import User from "../models/authModel.js";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import dotenv from 'dotenv';
import { errorHandler } from "../utils/error.js";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_if_not_set_in_env";


export const signup = async (req,res,next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({username, email, password : hashedPassword});
    try {
        await newUser.save();
        res.status(200).json({message : "User created successfully"});
    }
    catch(err)
    {
        next(err);
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email: email });
        if (!validUser) return next(errorHandler(404, 'User not found'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
        const token = jwt.sign({ id: validUser._id }, JWT_SECRET);
        const {password : pass, ...rest} = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    } catch (err) {
        next(err);
    }
}

