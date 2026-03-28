# 🚀 Cold Mail Composer (AI + Automation)

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blue.svg)](https://github.com/Sumitr995)

**Cold Mail Composer** is a backend-driven email automation system that generates, customizes, previews, and sends personalized cold emails using dynamic placeholders, structured link injection, and SMTP integration.

It is designed to help automate outreach workflows while maintaining high levels of personalization and control.

---

## ✨ Features

- **🔍 Dynamic Placeholder System:** Use tags like `[Name]`, `[Company]`, or `[profile.github]` to personalize content instantly.
- **🔗 Structured Link Injection:** Centralized link management (Profiles, Projects, System links).
- **👁️ Email Preview:** Live HTML rendering to see exactly what your recipient sees.
- **📧 SMTP Email Sending:** Reliable delivery using Gmail via Nodemailer.
- **📄 Resume Support:** Automatic attachment of your professional resume (`ResumeSR3.08.pdf`).
- **✍️ Signature Injection:** Professional branding watermark included in every mail.
- **🧩 Modular Architecture:** Clean, service-oriented backend design.

---

## 🧠 How It Works

1. **Email Template (Text)** → 
2. **Placeholder Processing** → 
3. **Link Injection** (from `links.json`) → 
4. **Signature Injection** → 
5. **HTML Conversion** → 
6. **SMTP Email Sent** ✅

---

## 📁 Project Structure

```bash
Server/
├── src/
│   ├── controllers/      # emailController.js
│   ├── services/         # emailService.js, placeholderService.js
│   ├── config/           # smtp.js, links.json
│   ├── routes/           # emailRoutes.js
│   ├── utils/            # signature.js
│   └── app.js            # Express app configuration
├── resume/               # ResumeSR3.08.pdf
├── server.js             # Entry point
├── .env                  # Environment variables
└── package.json          # Dependencies
