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
    await transporter.sendMail(mailOptions);
    
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

const sendConfirmationEmail = async (userEmail, products, productCount) => {
  let total = 0;
  let productString = "";

  products.forEach((product) => {
    total += product.dataValues.price * productCount[product.dataValues.id];
    productString += `<li>${productCount[product.dataValues.id]} ${product.dataValues.name}: $${product.dataValues.price}</li>`;
  });

  let email = `<p>Your order has been placed through ShredNStyles marketplace.</p> <div> Your total: $${total}</div><div><ul>${productString}</ul></div>`;

  const mailOptions = {
    from: "ShredNStyle@gmail.com",
    to: userEmail,
    subject: "Order Confirmation",
    html: email,
  }
  try {
    await transporter.sendMail(mailOptions);
    
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}

module.exports = { sendVerificationEmail, sendConfirmationEmail };
