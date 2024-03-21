import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactUs() {
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const messageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const serviceId = "service_hmy3li6";
    const templateId = "template_5g0sfqe";
    const object = {
      user_name: userNameRef.current.value,
      user_email: userEmailRef.current.value,
      message: messageRef.current.value,
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

    userNameRef.current.value = "";
    userEmailRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="contact_us">
          Leave your message and we'll get in touch
          <br />
          <br />
        </div>
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" ref={userNameRef} />

        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          ref={userEmailRef}
        />

        <label htmlFor="message">Message</label>
        <input name="message" id="message" ref={messageRef} />

        <button type="submit">Send</button>
      </form>
    </>
  );
}
