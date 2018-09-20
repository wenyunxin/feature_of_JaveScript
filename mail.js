// sendMail.js
var mailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const author = {
  host: 'smtp..',
  port: 25,
  secure: true,
  auth: {
    user: '',
    pass: ''
  }
};

const mailOptions = {
  from: '"despicable" <@.com>',
  to: '@1.com, @.com',
  subject: 'hello from node.js',
  text: ''
};

async function sendMail(author, mailOptions) {
  try {
    const transporter = mailer.createTransport(smtpTransport(author));

    await transporter.verify();
    console.log('Ready to send mail')
    
    await transporter.sendMail(mailOptions);
    console.log('successfully')

  } catch (err) {
    console.log(err.message);
  }
}

sendMail(author, mailOptions)