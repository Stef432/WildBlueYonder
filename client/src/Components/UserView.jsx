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

  function handleClick(e) {
    e.preventDefault();
    setSelectedItems(!selectedItems);
  }

  return (
    <div className="user-view">
      <h2 style={{ color: "black" }}>Be a Secret Santa!</h2>
      <h3 style={{ color: "black" }}>
        See our Gift List for Vulnerable Young People
      </h3>
      <ImageGrid
        donations={donations}
        onDonationSelect={handleDonationSelect}
      />

      <div className="donations-items">
        <h3 style={{ color: "black" }}>Selected items</h3>
      </div>

      <div className="selected-items">
        {selectedItems ? (
          <div className="price-box">
            <button type="button" onClick={handleClick}>
              X
            </button>
            <h4>Title: {selectedItems.item}</h4>
            <h4>Description: {selectedItems.itemDescription}</h4>
            <p style={{ color: "black" }}>Price: €{selectedItems.itemPrice} </p>
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
          <h4>No gift selected</h4>
        )}
        <div className="basket">
          <p style={{ color: "black" }}>
            Total items in basket: {basket.length}
          </p>
          <ul>
            {basket.map((item, index) => (
              <li key={index}>{item.item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserView;
