const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'flixohelp@gmail.com',
        pass: 'yourpassword', // Replace with your Gmail password
    },
});

// Generate and send verification code
app.post('/sendVerificationEmail', (req, res) => {
    const email = req.body.email;
    const verificationCode = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit verification code
    const mailOptions = {
        from: 'flixohelp@gmail.com',
        to: email,
        subject: 'Email Verification Code',
        text: `Your verification code is: ${verificationCode}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.json({ success: false, message: 'Failed to send verification email.' });
        } else {
            res.json({ success: true });
        }
    });
});

// Verify verification code
app.post('/verifyCode', (req, res) => {
    const email = req.body.email;
    const code = req.body.code;
    // Here you would compare the received code with the one stored on your server
    // If they match, mark the email as verified
    // For simplicity, I'm assuming the code always matches
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
