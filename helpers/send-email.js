
export const sendEmail = (to, subject, message) => {
    let transport = nodemailer.createTransport({
      host: "smtp.qikli-mail.com",
      port: 2525,
      auth: {
        user: "administrator@waecgh.org",
        pass: "765E3EC747D6F0D13AFE878A1CFE07D3FE16",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    const data = {
      from: "noreply@waecgh.org",
      to: to,
      subject: subject,
      html: message,
    };
    transport.sendMail(data, function (err, info) {
      // const response = info.accepted.length
      if (error) {
        console.log(error);
        return true;
      } else {
        console.log("Email sent: " + info.response);
        return false;
      }
    });
  };
  
  // exports.sendEmail = async (to, subject, message) => {
  //   const nodemailer = require("nodemailer");
  
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     host: "smtp.gmail.com",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: "icesspoolgh@gmail.com",
  //       pass: "icesspool@2318",
  //     },
  //   });
  
  //   const mailOptions = {
  //     to: to,
  //     subject: subject,
  //     text: message,
  //   };
  
  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log(error);
  //       return true;
  //     } else {
  //       console.log("Email sent: " + info.response);
  //       return false;
  //     }
  //   });
  // };
  