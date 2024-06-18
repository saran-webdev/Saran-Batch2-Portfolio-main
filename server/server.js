const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://portfolio-saran.koyeb.app"],
    credentials: true
  })
);

app.use(bodyParser.json());
const USER = process.env.USER;
const PASS = process.env.PASS;

app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(req.body);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: USER,
      pass: PASS
    }
  });
  var mailOptions = {
    from: email,
    to: USER,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({
        success: true,
        message: "Mail Sent Success."
      });
    }
  });
});

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
