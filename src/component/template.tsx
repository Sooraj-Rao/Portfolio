import * as React from "react";

interface EmailTemplateProps {
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
}) => (
  <div>
    <br />
    <h1>{message}</h1>
  </div>
);
