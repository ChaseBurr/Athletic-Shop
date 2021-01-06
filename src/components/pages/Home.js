import React from "react";
import Hero from "../Hero";
import StoreItems from "../StoreItems";
import PromotionCard from "./../Cards/PromotionCard";

function Home() {
  return (
    <div>
      <Hero />
      <div className="promo-section container">
        <div className="promo-cards flex">
          <PromotionCard img="/img/promo-1.png" text="Nutrition" />
          <PromotionCard img="/img/promo-2.jpg" text="Nutrition" />
          <PromotionCard img="/img/promo-3.jpg" text="Nutrition" />
        </div>
      </div>
    </div>
  );
}

export default Home;
