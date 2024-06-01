function sendVerification() {
    var email = document.getElementById('emailInput').value;
    // Send email to the server to generate and send the verification code
    fetch('/sendVerificationEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('verificationDiv').style.display = 'block';
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function verifyCode() {
    var code = document.getElementById('verificationCode').value;
    var email = document.getElementById('emailInput').value;
    // Send verification code to the server for validation
    fetch('/verifyCode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, code: code }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Email verified successfully!');
            // Redirect to a new page or perform any other action
        } else {
            alert('Verification code is incorrect.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
