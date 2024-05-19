import { EmailTemplate } from "@/component/template";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

interface SendMessageRequest {
  body: {
    sender: string;
    message: string;
  };
}

const resend = new Resend(process.env.RESEND);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body } = req as SendMessageRequest;
  const { sender, message } = body;
  const { data, error } = await resend.emails.send({
    from: "soorajrao.xyz@resend.dev",
    to: ["soorajrao630@gmail.com"],
    subject: `${sender} sent a message`,
    react: EmailTemplate({ message }),
  });

  if (error) {
    return res
      .status(200)
      .json({ error: true, message: "Failed to send message" });
  }

  res.status(200).json({ message: "Successfully sent message " });
}
