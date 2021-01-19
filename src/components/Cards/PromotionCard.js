import React from "react";
import "./Cards.css";

function PromotionCard({ children, header, imgSource, imgAlt, subHeader }) {
   return (
      <div className="promo-card">
         <img className="promo-img" src={imgSource} alt={imgAlt} />
         <div className="promo-content">
            <h1 className="promo-title">{header}</h1>
            <h2 className="promo-sub-title">{subHeader}</h2>
            {children}
         </div>
      </div>
   );
}

export default PromotionCard;
