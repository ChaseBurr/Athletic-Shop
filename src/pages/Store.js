import React from "react";
import ProductCard from "./../components/Cards/ProductCard";
import { Button } from "./../components/Button/Button";
import { stopInterval } from "./../main";

function Store() {
   stopInterval();
   return (
      <>
         <div className="featured-items">
            <h1>Featured Items</h1>
         </div>
         <div className="new-items">
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
         </div>
         <div className="store-items"></div>
      </>
   );
}

export default Store;
