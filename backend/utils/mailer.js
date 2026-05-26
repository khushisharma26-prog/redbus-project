const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ks9172258@gmail.com',      // your gmail
    pass: 'xpxo vuiv ydcd hyoy'          // app password
  }
});

const sendEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: 'ks9172258@gmail.com',
    to,
    subject,
    text
  });
};

module.exports = sendEmail;
