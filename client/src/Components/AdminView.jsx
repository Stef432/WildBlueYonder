import React, { useState } from "react";
import "./AdminView.css";

function AdminView({ addItems }) {
  const [donations, setDonations] = useState({
    title: "",
    description: "",
    url: "",
  });

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
  }

  return (
    <div className="admin-view">
      <h2>Secret Santa</h2>
      <h4>Social Workers for Change </h4>
      <br />

      <p>
        Welcome to Secret Santa Charity, where every gift is a gesture of
        kindness and generosity.
      </p>
      <p>
        Our mission: to spread love through anonymous giving. From handwritten
        notes to carefully chosen presents, each gift carries hope. Beyond the
        holidays, we partner with local organizations to support those in need.
        Our team works tirelessly to make a positive impact in our community.
        <br />
        <br />
        Join us in spreading joy and inspiring kindness. Let's make the world
        brighter, one gift at a time.
      </p>

      <h6 className="address">
        Secret Santa Initiative (SSI) <br />
        Sonnenbergstrasse 20 9038 <br />
        Rehetobel Switzerland
        <br />
        donations@secretsanta.org <br />
        www.secretsanta.org
      </h6>
      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.1250364459934!2d9.475758076703242!3d47.429005200224104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b19131ccafa75%3A0x2aab339c6794cf22!2sSonnenbergstrasse%2020%2C%209038%20Rehetobel%2C%20Switzerland!5e0!3m2!1sen!2sde!4v1711036188619!5m2!1sen!2sde"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      <form onSubmit={handleSubmit}>
        <button className="contact-btn" type="submit" onClick={handleClick}>
          Contact us
        </button>
      </form>
    </div>
  );
}

export default AdminView;
