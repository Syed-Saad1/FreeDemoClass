import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Your Form Submit Successfully");
});

app.post("/", async (req, res) => {
  const { StdName, FtrName, Age, PH, DemoClass } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Free Demo Class Registration",
      text: `
Student Name: ${StdName}
Father Name: ${FtrName}
Age: ${Age}
Phone Number: ${PH}
Demo Class: ${DemoClass}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Form Submitted Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error Sending Email");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
