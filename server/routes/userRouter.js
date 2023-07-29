import { Router } from "express";
import { signUpController, loginController } from "../controller/userController.js";

const route = Router()

route.post('/signup',signUpController)

route.post('/login',loginController)

export default route