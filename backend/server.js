import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  const { StdName, FtrName, PH, DemoClass } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sfainstitute01@gmail.com",
        pass: "nsxm onro oqrk mdmk",
      },
    });

    const mailOptions = {
      from: "sfainstitute01@gmail.com",
      to: "sfainstitute01@gmail.com",
      subject: "Free Demo Class Registration",
      text: `
Student Name: ${StdName}
Father Name: ${FtrName}
Phone Number: ${PH}
Demo Class: ${DemoClass}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.send("Your Form is Successfully Submited");
  } catch (error) {
    console.log(error);
    res.send("Error Sending Email");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
