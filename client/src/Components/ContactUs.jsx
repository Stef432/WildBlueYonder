import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { getParsedCommandLineOfConfigFile, setEmitFlags } from "typescript";

export const ContactUs = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const serviceId = "service_hmy3li6";
    const templateId = "template_5g0sfqe";
    const object = {
      user_name: FormData.get("user_name"),
      user_email: FormData.get("user_email"),
      message: FormData.get("message"),
    };

    console.log(object);
    emailjs
      .send(serviceId, templateId, object, {
        publicKey: "1ViX0LeCXwEFavQqm",
      })
      .then(
        (response) => {
          alert("Message sent.");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert(error.text);
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user_name">Name</label>
      <input type="text" name="user_name" id="user_name" />

      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email" />

      <label htmlFor="message">Message</label>
      <input name="message" id="message" />

      <button type="submit" />
    </form>
  );
};
