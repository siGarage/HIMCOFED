'use strict';
const nodemailer = require('nodemailer');

module.exports = {
  async create(ctx) {
    const { name, email, phone, subject, message } = ctx.request.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!name || !email || !subject || !message) {
      return ctx.badRequest("All required fields must be filled.");
    }

    if (!emailRegex.test(email)) {
      return ctx.badRequest("Invalid email format.");
    }

    if (phone && !phoneRegex.test(phone)) {
      return ctx.badRequest("Invalid phone number.");
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_TO,
        subject: `Suggestion Box: ${subject}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
        `,
      };

      await transporter.sendMail(mailOptions);
      ctx.send({ message: '✅ Suggestion sent successfully!' });
    } catch (error) {
      console.error("Email Error:", error);
      ctx.internalServerError("❌ Failed to send suggestion.");
    }
  },
};
