import transporter from "../config/smtp.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function sendEmail({ to, subject, html }) {

  const resumePath = path.join(__dirname, "../../resume/ResumeSR3.08.pdf");

  if (!fs.existsSync(resumePath)) {
    throw new Error("Resume file not found: " + resumePath);
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
    attachments: [
      {
        filename: "Sumit_Rathod_Resume.pdf",
        path: resumePath
      }
    ]
  };

  const info = await transporter.sendMail(mailOptions);

  return info;
}