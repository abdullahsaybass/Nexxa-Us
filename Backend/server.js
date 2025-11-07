import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import mongoose from "mongoose";

dotenv.config();
const app = express();

// === Security & Middleware ===
app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "*",
    methods: ["GET", "POST"],
  })
);
app.use(morgan("tiny"));

// === Rate limiter ===
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // max requests per IP
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});
app.use("/send-email", limiter);

// === MongoDB Connection ===
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "productEnquiry", // ✅ stores data under 'productEnquiry'
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err.message));

// === Mongoose Schema ===
const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  zip: String,
  part: String,
  make: String,
  model: String,
  year: String,
  createdAt: { type: Date, default: Date.now },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

// === Email Route ===
app.post("/send-email", async (req, res) => {
  const { name, email, phone, zip, part, make, model, year } = req.body;

  if (!email || !phone || !part) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields (email, phone, part).",
    });
  }

  try {
    // Save inquiry to MongoDB
    await Inquiry.create({
      name,
      email,
      phone,
      zip,
      part,
      make,
      model,
      year,
    });

    // Configure SMTP Transport (IONOS)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ionos.com",
      port: process.env.SMTP_PORT || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const uniqueId = Date.now();

    const mailOptions = {
      from: `"Nexxa Auto Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || "nexxaauto@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name || "Customer"} (#${uniqueId})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color:#b91c1c;">New Client Inquiry</h2>
          <p><b>Name:</b> ${name || "N/A"}</p>
          <p><b>Email:</b> ${email || "N/A"}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <p><b>Zipcode:</b> ${zip || "N/A"}</p>
          <hr/>
          <p><b>Vehicle Details:</b></p>
          <ul>
            <li><b>Year:</b> ${year || "N/A"}</li>
            <li><b>Make:</b> ${make || "N/A"}</li>
            <li><b>Model:</b> ${model || "N/A"}</li>
            <li><b>Part:</b> ${part || "N/A"}</li>
          </ul>
          <hr/>
          <p style="font-size:12px; color:#777;">
            Sent automatically from NexxaAuto.com (Production Server)
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email sent and inquiry saved." });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process inquiry.",
      error:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// === Optional: Fetch All Inquiries ===
app.get("/inquiries", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, inquiries });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching inquiries." });
  }
});

// === Root Route ===
app.get("/", (req, res) => {
  res.send("Nexxa Auto Mail + MongoDB API is running on Production Server.");
});

// === Start Server ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || "production"} mode`);
});
