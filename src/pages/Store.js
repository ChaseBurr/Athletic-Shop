import React from "react";
import ProductCard from "./../components/Cards/ProductCard";
import { Button } from "./../components/Button/Button";

function Store() {
   return (
      <div className="store-page">
         <h1 className="section-header">Featured Items</h1>
         <div className="featured-items">
            <ProductCard
               productImage="/Athletic-Shop/img/bai-1.jpg"
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
               productImage="/Athletic-Shop/img/bai-1.jpg"
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
               productImage="/Athletic-Shop/img/bai-1.jpg"
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
         <h1 className="section-header">New Items</h1>
         <div className="new-items">
            <ProductCard
               productImage="/Athletic-Shop/img/bai-1.jpg"
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
               productImage="/Athletic-Shop/img/bai-1.jpg"
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
               productImage="/Athletic-Shop/img/bai-1.jpg"
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
      </div>
   );
}

export default Store;
