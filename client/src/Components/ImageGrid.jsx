import React from "react";
import "./ImageGrid.css";
function ImageGrid({ donations, onDonationSelect }) {
  return (
    <div className="image-grid">
      {donations.map((donation) => (
        <div key={donation.id} className="image-item">
          <img
            src={donation.itemImg}
            alt={donation.item}
            onClick={() => onDonationSelect(donation)}
          />
          <button onClick={() => onDonationSelect(donation)}>
            <i className="fi fi-br-shopping-cart-add"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
