import React from "react";

function PromotionCard({ text, img }) {
  return (
    <div className="promo-card">
      <div className="promo-background" style={{ background: `url(${img})` }}>
        <div className="promo-content">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
}

export default PromotionCard;
