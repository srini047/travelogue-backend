const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.verify.v2
  .services(process.env.TWILIO_SERVICE_ID)
  .verifications.create({ to: "+916385685916", channel: "sms" })
  .then((verification) => console.log(verification.status));
