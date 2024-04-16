import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

interface SendMessageRequest {
  body: {
    sender: string;
    message: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { body } = req as SendMessageRequest;
    const { sender, message } = body;

    const accountSid = "AC8fa8bd96fb9504a9d722f585ccd571be";
    const authToken = "aa78cb50ee64959974764273dd09505e";

    const client = twilio(accountSid, authToken);

    const twilioMessage = await client.messages.create({
      body: `${sender} \n\n${message}`,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+918970889647",
    });

    console.log(twilioMessage.sid);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
}
