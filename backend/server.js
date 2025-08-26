// ------------------------------
// Portfolio Backend (server.js)
// ------------------------------

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// ------------------------------
// API: Contact Form Submission
// ------------------------------
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Configure transporter (use Gmail SMTP + App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vijaytamada333@gmail.com",   // replace with your Gmail
        pass: "izys xoux wofp lpqy"      // ⚠️ generate an App Password (not your Gmail password)
      }
    });

    // Define mail options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "vijaytamada333@gmail.com",       // your receiving email
      subject: `Portfolio Message from ${name}`,
      text: `
        New message from your portfolio website:

        👤 Name: ${name}
        📧 Email: ${email}
        
        📝 Message:
        ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// ------------------------------
// Start Server
// ------------------------------
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
