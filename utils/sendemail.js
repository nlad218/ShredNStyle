const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ShredNStyle@gmail.com",
    pass: "mgqh ewit lqcj fzjc",
  },
});

const sendVerificationEmail = async (userEmail) => {
  const mailOptions = {
    from: "ShredNStyle@gmail.com",
    to: userEmail,
    subject: "Account Verification",
    html: "<p>Your account has been successfully signed up to ShredNStyle.com</p>",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = { sendVerificationEmail };
