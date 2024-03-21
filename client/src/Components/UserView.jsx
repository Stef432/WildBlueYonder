import React, { useState, useEffect } from "react";
import "./UserView.css";

import ImageGrid from "./ImageGrid";

function UserView() {
  const [selectedItems, setSelectedItems] = useState(null);
  const [donations, setDonations] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch("/api/donations");
        if (!response.ok) {
          console.error(
            "Error fetching donations:",
            response.status,
            response.statusText
          );
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setDonations(data.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []);

  const handleDonationSelect = (donation) => {
    setSelectedItems(donation);
  };

  const handleAddToBasket = () => {
    if (selectedItems) {
      setBasket([...basket, selectedItems]);
      alert("Your donation has been received. A gift is being wrapped!");
      setSelectedItems([null]);
    }
  };

  return (
    <div className="user-view">
      <h2 style={{ color: "black" }}>Be a Secret Santa!</h2>
      <h2 style={{ color: "black" }}>
        See our Gift List for Vulnerable Young People
      </h2>
      <ImageGrid
        donations={donations}
        onDonationSelect={handleDonationSelect}
      />

      <div className="donations-items">
        <h3 style={{ color: "black" }}>Choose between our gift options</h3>
      </div>

      <div className="selected-items">
        {selectedItems ? (
          <div>
            <p>Title: {selectedItems.item}</p>
            <p>Description: {selectedItems.itemDescription}</p>
            <p style={{ color: "gold" }}>Price: €{selectedItems.itemPrice} </p>
            <p>
              <a
                href={selectedItems.itemUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </p>
            <button onClick={handleAddToBasket}>Buy</button>
          </div>
        ) : (
          <p>No gift selected</p>
        )}
      </div>

      <div className="basket">
        <p style={{ color: "black" }}>Total items in basket: {basket.length}</p>
        <ul>
          {basket.map((item, index) => (
            <li key={index}>
              {/* <button
                type="button"
                onClick={item.filter((item) => item.id !== item.id)}
              >
                X
              </button> */}
              {item.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserView;
