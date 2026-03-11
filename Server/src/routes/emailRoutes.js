import express from "express";

import {
  previewEmail,
  sendEmailController
} from "../controllers/emailController.js";

const router = express.Router();

router.post("/preview", previewEmail);
router.post("/send", sendEmailController);

export default router;