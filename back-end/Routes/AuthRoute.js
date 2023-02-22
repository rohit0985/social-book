import express from 'express';
import { loginUser, registerUser } from '../Controller/AuthController.js';
const AuthRoute = express.Router();


AuthRoute.post("/register", registerUser);
AuthRoute.post("/login", loginUser);

export default AuthRoute;