import React from "react";

function ProductCard({
  productImage,
  imageAlt,
  productTitle,
  productDescription,
}) {
  return (
    <div className="product-card">
      <div className="product-info">
        <h1 className="product-title">{productTitle}</h1>
        <h3 className="product-description">{productDescription}</h3>
      </div>
      <img className="product-img" src={productImage} alt={imageAlt} />
    </div>
  );
}

export default ProductCard;
