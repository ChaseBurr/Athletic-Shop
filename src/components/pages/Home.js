import React from "react";
import Hero from "../Hero";
import StoreItems from "../StoreItems";
import PromotionCard from "./../Cards/PromotionCard";
import ProductCard from "./../Cards/ProductCard";
import { Button } from "../Button";

function Home() {
  return (
    <div>
      <Hero />
      <div className="promo-section">
        <h1 className="promo-header">Current Promotions</h1>
        <div className="container">
          <div className="promo-cards flex">
            <PromotionCard imgSource="/img/promo-1.png" text="Nutrition" />
            <PromotionCard imgSource="/img/promo-2.jpg" text="Nutrition" />
            <PromotionCard imgSource="/img/promo-3.jpg" text="Nutrition" />
          </div>
        </div>
      </div>
      <div className="product-section">
        <div className="container">
          <h1>
            <span className="primary-color">New</span> Products
          </h1>
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
      <div className="supplement-section container">
        <div className="supplement-overlay"></div>
        <div className="supplement-content">
          <h1>
            Nutrition for
            <br />
            Every Life
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            link="/supplements"
            buttonSize="btn-large"
            buttonStyle="btn-secondary"
          >
            Get Started
          </Button>
        </div>
        <div className="supplement-products">
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
  );
}

export default Home;
