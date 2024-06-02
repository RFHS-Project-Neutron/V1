document.getElementById('verificationForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const response = await fetch('/send-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const result = await response.json();
  const messageDiv = document.getElementById('message');
  if (result.success) {
    messageDiv.innerText = 'Verification code sent!';
  } else {
    messageDiv.innerText = 'Error sending verification code.';
  }
});
