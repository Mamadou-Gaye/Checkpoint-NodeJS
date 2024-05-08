const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sama_email@gmail.com', // replace with your email
    pass: 'sama_password' // replace with your password
  }
});

let mailOptions = {
  from: 'your_email@gmail.com', // replace with your email
  to: 'recipient_email@example.com', // replace with recipient email
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using Nodemailer.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});