import React from "react";
import Mailchimp from "./MailChimp";

export default function MailchimpForm() {
  return (
    <Mailchimp
      style={{ margin: 10, color: "gray" }}
      action="https://facebook.us18.list-manage.com/subscribe/post?u=aa790382b14a1499621685a2e&amp;id=f5eaf15868"
      fields={[
        {
          name: "EMAIL",
          placeholder: "Email",
          type: "email",
          required: true
        }
      ]}
      messages={{
        sending: "Sending...",
        success: "Thank you for subscribing!",
        error: "An unexpected internal error has occurred.",
        empty: "You must write an e-mail.",
        duplicate: "This e-mail is already registered.",
        button: "Subscribe!"
      }}
    />
  );
}
