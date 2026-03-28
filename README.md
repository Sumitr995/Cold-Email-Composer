# 🚀 Cold Mail Composer (AI + Automation)

Cold Mail Composer is a backend-driven email automation system that generates, customizes, previews, and sends personalized cold emails using dynamic placeholders, structured link injection, and SMTP integration.

It is designed to help automate outreach workflows while maintaining personalization and control.

---

## ✨ Features

- Dynamic Placeholder System (e.g., [Name], [Company], [profile.github])
- Structured Link Injection (profile, projects, system links)
- Email Preview (HTML rendering)
- SMTP Email Sending (Gmail via Nodemailer)
- Resume Attachment Support
- Signature Injection with branding watermark
- Modular Backend Architecture

---

## 🧠 How It Works

Email Template (Text)  
→ Placeholder Processing  
→ Link Injection (from links.json)  
→ Signature Injection  
→ HTML Conversion  
→ SMTP Email Sent  

---

## 📁 Project Structure

Server/

src/
- controllers/emailController.js
- services/emailService.js
- services/placeholderService.js
- config/smtp.js
- config/links.json
- routes/emailRoutes.js
- utils/signature.js
- app.js

resume/
- ResumeSR3.08.pdf

server.js  
.env  
package.json  

---

## ⚙️ Setup Instructions

1. Clone the repository

git clone https://github.com/your-username/cold-mail-composer.git  
cd cold-mail-composer  

2. Install dependencies

npm install  

3. Create .env file

PORT=5000  
EMAIL_USER=yourgmail@gmail.com  
EMAIL_PASS=your_app_password  
SHEET_ID=your_google_sheet_id  

Note: Use a Gmail App Password, not your normal password.

4. Run the server

npm run dev  

Server runs at:  
http://localhost:5000  

---

## 🔗 API Endpoints

1. Preview Email  

POST /api/email/preview  

Request Body:

{
  "company": "Cheerio AI",
  "name": "Nishant",
  "emailText": "Hi [Name]\nCheck: [profile.github]"
}

Response:

{
  "preview": "<html content>"
}

---

2. Send Email  

POST /api/email/send  

Request Body:

{
  "company": "Cheerio AI",
  "name": "Nishant",
  "email": "hr@company.com",
  "subject": "Internship Inquiry",
  "emailText": "Hi [Name]..."
}

Response:

{
  "status": "Email Sent",
  "messageId": "<id>"
}

---

## 🧩 Placeholder System

Basic:

[Name]  
[Company]  

Profile Links:

[profile.github]  
[profile.linkedin]  
[profile.portfolio]  
[profile.resume]  

Project Links:

[projects.designathon.github]  
[projects.designathon.live]  
[projects.auth.github]  
[projects.ticket.github]  

System Links:

[system.tool]  

---

## 🔗 Example links.json

{
  "profile": {
    "github": "https://github.com/Sumitr995",
    "linkedin": "https://linkedin.com/in/Sumitr995",
    "portfolio": "https://yourportfolio.com",
    "resume": "https://drive.google.com/..."
  },
  "projects": {
    "designathon": {
      "github": "https://github.com/.../designathon",
      "live": "https://designathon.live"
    },
    "auth": {
      "github": "https://github.com/.../auth"
    }
  },
  "system": {
    "tool": "https://github.com/.../cold-mail-composer"
  }
}

---

## 🧪 Postman Testing

Preview Endpoint:

POST http://localhost:5000/api/email/preview  

Body:

{
  "company": "Test",
  "name": "User",
  "emailText": "Hi [Name]\n[profile.github]"
}

---

Send Endpoint:

POST http://localhost:5000/api/email/send  

Body:

{
  "company": "Test",
  "name": "User",
  "email": "your-email@gmail.com",
  "subject": "Test Email",
  "emailText": "Hi [Name]\nCheck: [profile.github]"
}

---

## ⚠️ Limitations

- Gmail SMTP sending limits (~500 emails/day)
- No email tracking (opens/clicks)
- No rate limiting implemented
- No batch sending yet

---

## 🚀 Future Improvements

- Google Sheets Logging (track sent emails)
- Batch Email Sending
- Rate Limiting Queue
- Email Analytics (opens, clicks)
- Frontend Dashboard (React UI)
- AI-based email generation integration

---

## 👨‍💻 Author

Sumit Rathod  
Full Stack Developer  

GitHub: https://github.com/Sumitr995  
LinkedIn: https://linkedin.com/in/Sumitr995  

---

## ⭐ Support

If you like this project, give it a star ⭐ and feel free to contribute!
