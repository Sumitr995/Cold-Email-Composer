import { processPlaceholders } from "../services/placeholderService.js";
import { getSignature } from "../utils/signature.js";
import { sendEmail } from "../services/emailService.js";

export const previewEmail = async (req, res) => {

  try {

    const { company, name, emailText } = req.body;

    let html = processPlaceholders(emailText, { company, name });

    html += getSignature();

    res.json({ preview: html });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


export const sendEmailController = async (req, res) => {

  try {

    const { company, name, email, subject, emailText } = req.body;

    let html = processPlaceholders(emailText, { company, name });

    html += getSignature();

    const info = await sendEmail({
      to: email,
      subject,
      html
    });

    res.json({
      status: "Email Sent",
      messageId: info.messageId
    });

  } catch (error) {

  console.error("SEND EMAIL ERROR:", error);

  res.status(500).json({
    error: error.message
  });

}

};