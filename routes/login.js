import { loginUser } from "../controller/login.js";
import express from "express";
const loginRouter = express.Router();

loginRouter.post("/", loginUser);

export default loginRouter