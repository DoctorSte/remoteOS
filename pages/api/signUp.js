const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.firstName}\r\n
  Email: ${body.email}\r\n
  `;

  const data = {
    to: "st.dobrescu@gmail.com",
    from: "steph@scalehub.io",
    subject: "Someone tried to sign up",
    text: message,
  };

  mail.send(data);

  res.status(200).json({ status: "Ok" });
}
