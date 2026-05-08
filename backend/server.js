import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

app.use(
  cors({
    origin: "https://free-demo-class.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.post("/", async (req, res) => {
  try {
    const { StdName, FtrName, Age, PH, DemoClass } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Free Demo Class Registration",
      text: `
Student Name: ${StdName}
Father Name: ${FtrName}
Age: ${Age}
Phone: ${PH}
Demo Class: ${DemoClass}
      `,
    });

    res.status(200).send("Form Submitted Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error Sending Email");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
