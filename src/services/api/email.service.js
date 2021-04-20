import axios from "./axios.service";
import { EMAIL_GATEWAY_URL } from "constants/api.constants";

export const sendEmail = (toEmails, subject = "Immortal QR Code", message) =>
  axios.post(`${EMAIL_GATEWAY_URL}`, {
    toEmails,
    subject: subject || "Immortal QR Code",
    message,
  });
