const express = require('express');
const bodyParser = require('body-parser');
const brevo = require('brevo');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Brevo API setup
const client = new brevo.ApiClient();
client.authentications['api-key'].apiKey = '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';

const sendSmtpEmail = new brevo.TransactionalEmailsApi();

// Endpoint to send verification code
app.post('/send-code', async (req, res) => {
  const { email } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  const emailData = {
    to: [{ email }],
    sender: { email: 'noreply.verify.pn@gmail.com' },
    subject: 'Your Verification Code',
    textContent: `Your verification code is: ${verificationCode}`,
  };

  try {
    await sendSmtpEmail.sendTransacEmail(emailData);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ success: false });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
