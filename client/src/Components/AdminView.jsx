import React, { useState } from "react";
import "./AdminView.css";

function AdminView({ addItems }) {
  const [donations, setDonations] = useState({
    title: "",
    description: "",
    url: "",
  });

  /*  const sendThankYouEmail = async () => {
    try {
      const response = await fetch("/api/sendThankYouEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "recipient@example.com", // replace with the recipient's email address
          subject: "Thank You for Being a Secret Santa",
          message: "Thank you for your generous donation!",
        }),
      });

      if (!response.ok) {
        console.error(
          "Failed to send thank you email:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error sending thank you email:", error);
    }
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    addItems(donations);
    await sendThankYouEmail();
    setDonations({
      title: "",
      description: "",
      url: "",
    });
  };

  function handleClick(e) {
    e.preventDefault();
    alert("Your donation has been received. A gift is being wrapped!");
    S;
  }

  return (
    <div className="admin-view">
      <h2>Secret Santa</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit" onClick={handleClick}>
          Send Thank You
        </button>
      </form>
    </div>
  );
}

export default AdminView;
