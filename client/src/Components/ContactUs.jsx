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
      to_name: userNameRef.current.value,
      to_email: userEmailRef.current.value,
      message: messageRef.current.value,
    };

    console.log(object);
    emailjs
      .send(serviceId, templateId, object, {
        publicKey: "tAoXO-yyMwRlio-eF",
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
    <div className="container">
      <form className="contact_us" onSubmit={handleSubmit}>
        Leave your message and we'll get in touch
        <br />
        <br />
        <label htmlFor="to_name">Name</label>
        <input type="text" name="to_name" id="to_name" ref={userNameRef} />
        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          ref={userEmailRef}
        />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" ref={messageRef} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
