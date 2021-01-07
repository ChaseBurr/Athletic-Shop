import React from "react";
import Hero from "../Hero";
import StoreItems from "../StoreItems";
import PromotionCard from "./../Cards/PromotionCard";
import ProductCard from "./../Cards/ProductCard";

function Home() {
  return (
    <div>
      <Hero />
      <div className="promo-section">
        <div className="container">
          <div className="promo-cards flex">
            <PromotionCard img="/img/promo-1.png" text="Nutrition" />
            <PromotionCard img="/img/promo-2.jpg" text="Nutrition" />
            <PromotionCard img="/img/promo-3.jpg" text="Nutrition" />
          </div>
        </div>
      </div>
      <div className="product-section">
        <div className="container">
          <h1>New Products</h1>
          <div className="product-cards flex">
            <ProductCard
              productImage="/img/bai-1.jpg"
              imageAlt="bai"
              productTitle="Bai"
              productDescription="Bia description"
            />
            <ProductCard
              productImage="/img/bai-1.jpg"
              imageAlt="bai"
              productTitle="Bai"
              productDescription="Bia description"
            />
            <ProductCard
              productImage="/img/bai-1.jpg"
              imageAlt="bai"
              productTitle="Bai"
              productDescription="Bia description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
