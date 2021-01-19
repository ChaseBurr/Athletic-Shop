import React from "react";
import Hero from "../Hero/Hero";
import StoreItems from "./../Store/StoreItems";
import PromotionCard from "./../Cards/PromotionCard";
import ProductCard from "./../Cards/ProductCard";
import { Button } from "./../Button/Button";

function Home() {
   return (
      <>
         <Hero />
         <div className="promo-section">
            <div className="container">
               <div className="promo-cards flex">
                  <PromotionCard
                     imgSource="http://welldone.axiomthemes.com/wp-content/uploads/2016/03/1-2.jpg"
                     header="NUTRITION"
                     subHeader="OPTI-MEN"
                  >
                     <Button
                        link="/deals"
                        buttonSize="btn-large"
                        buttonStyle="btn-primary"
                     >
                        view more
                     </Button>
                  </PromotionCard>
                  <PromotionCard
                     imgSource="http://welldone.axiomthemes.com/wp-content/uploads/2016/03/Rectangle-102-copy.png"
                     header="UP TO 55% OFF"
                     subHeader="SPORTS NUTRITION"
                  >
                     <Button
                        link="/deals"
                        buttonSize="btn-large"
                        buttonStyle="btn-primary"
                     >
                        view more
                     </Button>
                  </PromotionCard>
                  <PromotionCard
                     imgSource="http://welldone.axiomthemes.com/wp-content/uploads/2016/03/91OayjJcduL.png"
                     header="Test Strips"
                     subHeader="Buy 3 get 1 free!"
                  >
                     <Button
                        link="/deals"
                        buttonSize="btn-large"
                        buttonStyle="btn-primary"
                     >
                        view more
                     </Button>
                  </PromotionCard>
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
                     imageAlt="gold standard pre-workout"
                     productTitle="gold standard pre-workout"
                     productDescription="energy pre-workout"
                     productPrice="$10.00 - $27.00"
                  >
                     <Button
                        link="/cart"
                        buttonSize="btn-medium"
                        buttonStyle="btn-primary"
                        // onClick="addToCart()"
                     >
                        Add to Cart
                     </Button>
                  </ProductCard>
                  <ProductCard
                     productImage="/img/bai-1.jpg"
                     imageAlt="WOMEN'S PROTEIN SHAKE"
                     productTitle="WOMEN'S PROTEIN SHAKE"
                     productPrice="$17.00"
                     productDescription="ENERGY PRE-WORKOUT PROTEIN PRODUCTS SALE"
                  >
                     <Button
                        link="/cart"
                        buttonSize="btn-medium"
                        buttonStyle="btn-primary"
                     >
                        Add to Cart
                     </Button>
                  </ProductCard>
                  <ProductCard
                     productImage="/img/bai-1.jpg"
                     imageAlt="PERFOMANCE PROTEIN"
                     productTitle="PERFOMANCE PROTEIN"
                     productPrice="$15.00 – $29.00"
                     productDescription="BARS & SNACKS BEST SELLERS PRE-WORKOUT"
                  >
                     <Button
                        link="/cart"
                        buttonSize="btn-medium"
                        buttonStyle="btn-primary"
                     >
                        Add to Cart
                     </Button>
                  </ProductCard>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
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
               >
                  <Button
                     link="/cart"
                     buttonSize="btn-medium"
                     buttonStyle="btn-primary"
                     // onClick="addToCart()"
                  >
                     Add to Cart
                  </Button>
               </ProductCard>
               <ProductCard
                  productImage="/img/bai-1.jpg"
                  imageAlt="bai"
                  productTitle="Bai"
                  productDescription="Bia description"
               >
                  <Button
                     link="/cart"
                     buttonSize="btn-medium"
                     buttonStyle="btn-primary"
                  >
                     Add to Cart
                  </Button>
               </ProductCard>
            </div>
         </div>
      </>
   );
}

export default Home;
