import { SMTPClient } from "emailjs";

const client = new SMTPClient({
  user: "ShredNstyle@gmail.com",
  password: "Mollie32!",
  host: "smtp.gmail.com",
  ssl: true,
});

const sendEmail = (userEmail) => {
  client.send(
    {
      text: "This is a verification email stating you have sign up to ShredNstyle.com",
      from: "ShredNstyle@gmail.com>",
      to: userEmail,
      cc: "",
      subject: "Vertification",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
};

module.exports = { sendEmail };
