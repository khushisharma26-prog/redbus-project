const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS
  }
});

const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text
    });

    console.log('✅ Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Email error:', error);
    throw error;
  }
};

module.exports = sendEmail;