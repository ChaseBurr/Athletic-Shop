import React from "react";
import Hero from "./../components/Hero/Hero";
// import StoreItems from "./../components/Store/StoreItems";
import PromotionCard from "./../components/Cards/PromotionCard";
import ProductCard from "./../components/Cards/ProductCard";
import { Button } from "./../components/Button/Button";
import { startInterval } from "./../main";

import { newProducts } from "./../components/Store/Items";

function Home({ addToCart }) {
   startInterval();
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
                  {newProducts.map((product) => (
                     <ProductCard
                        productImage={product.imgSrc}
                        imgAlt={product.name}
                        productTitle={product.name}
                        productDescription={product.description}
                        productPrice={product.price_with_symbol}
                     >
                        <Button
                           buttonSize="btn-medium"
                           buttonStyle="btn-primary"
                           onClick={addToCart}
                        >
                           Add to Cart
                        </Button>
                     </ProductCard>
                  ))}
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
                  productImage="/Athletic-Shop/img/bai-1.jpg"
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
                  productImage="/Athletic-Shop/img/bai-1.jpg"
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
