import nodemailer from "nodemailer";
import { activateEmailTemplate } from "../emails/activateEmailTemplate";

// auth: {
//   user: "simran19961303@gmail.com",
//   pass: "pgarriashbpgelvg",
// },

// const { SENDER_EMAIL_ADDRESS, SENDER_PASSWORD } = process.env;

export const sendEmail = async (to, url, text, subject, template) => {
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gangbuster74@gmail.com",
      pass: "mgirpkwdnasvzbqe",
    },
  });

  const mailOptions = {
    from: "gangbuster74@gmail.com",
    to: to,
    subject: subject,
    html: template(to, url),
  };

  try {
    const response = await smtpTransport.sendMail(mailOptions);
    smtpTransport.close();
  } catch (error) {
    console.log(error);
    smtpTransport.close();
  }
};
