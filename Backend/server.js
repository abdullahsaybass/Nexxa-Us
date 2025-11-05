import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// POST: Send Email
app.post("/send-email", async (req, res) => {
  const { name, email, phone, zip, part, make, model, year } = req.body;

  

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Add a unique ID to avoid email threading
    const uniqueId = Date.now();

    const mailOptions = {
      from: `"Nexxa Auto Inquiry" <no-reply@nexxaauto.com>`,
      to: "nexxaauto@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name || "Customer"} (#${uniqueId})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Client Inquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Zipcode:</b> ${zip}</p>
          <hr/>
          <p><b>Vehicle Details:</b></p>
          <p>Year: ${year}</p>
          <p>Make: ${make}</p>
          <p>Model: ${model}</p>
          <p>Part Ordered: ${part}</p>
          <hr/>
          <p style="font-size:12px; color:#777;">
            Sent automatically from NexxaAuto.com (Local Development)
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    
    res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Failed to send email.", error: error.message });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Nexxa Auto Mail API running locally.");
});

app.listen(PORT, () => {
  console.log(`Server running locally on port ${PORT}`);
});
