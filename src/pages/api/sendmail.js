const nodemailer = require('nodemailer');

export default function handler(req, res) {

  const message = {
    from: process.env.NEXT_PUBLIC_HOST_MAIL,
    to: process.env.NEXT_PUBLIC_TO_MAIL,
    subject: 'This is a new order',
    text:'Shipping Details',
    html: `<div>
    <p> Full Name: ${req.body.fullName}</p>
     <p>Address: ${req.body.address}</p>
      <p>City: ${req.body.city}</p>
       <p>Postal Code: ${req.body.postalCode}</p>
        <p>Email: ${req.body.mail}</p>
         <p>Phone Number: ${req.body.phoneNumber}</p>
         
    </div>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_HOST_MAIL,
      pass: process.env.NEXT_PUBLIC_HOST_MAIL_PW,
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {

      if (err) {
        res.status(404).json({
            error: `Connection refused at ${err.address}`
        });
      } else {
        res.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}