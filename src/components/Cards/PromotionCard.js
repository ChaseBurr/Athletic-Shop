import React from "react";

function PromotionCard({ text, imgSource, imgAlt }) {
  return (
    <div className="promo-card">
      <img className="promo-img" src={imgSource} alt={imgAlt} />
      <div className="promo-content">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default PromotionCard;
