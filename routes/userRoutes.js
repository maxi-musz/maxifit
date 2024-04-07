import express from "express";

import {
    registerUser
} from "../controllers/userCtrlr.js";

const router = express.Router();

router
.route('/register')
.post(registerUser)

export default router;