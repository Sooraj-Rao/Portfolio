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

    const accountSid = process.env.TWILIO_ID!;
    const authToken = process.env.TWILIO_TOKEN!;

    const client = twilio(accountSid, authToken);

    await client.messages.create({
      body: `${sender} \n\n${message}`,
      from: process.env.TWILIO_NO_S!,
      to: process.env.TWILIO_NO_R!,
    });
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
}
