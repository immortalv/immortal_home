import axios from "./axios.service";
import { EMAIL_GATEWAY_ULR } from "constants/api.constants";

const CORS = "https://cors-anywhere.herokuapp.com";

export const sendEmail = (toEmails, subject = "Immortal QR Code", message) =>
  axios.post(`${CORS}/${EMAIL_GATEWAY_ULR}`, {
    toEmails,
    subject: subject || "Immortal QR Code",
    message,
  });
