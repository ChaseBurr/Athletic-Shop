import React from "react";

function ProductCard({
  children,
  productImage,
  imageAlt,
  productTitle,
  productDescription,
  productPrice,
}) {
  return (
    <div className="product-card">
      <div className="product-info">
        <h1 className="product-title">{productTitle}</h1>
        <h1 className="product-price">{productPrice}</h1>
        <h3 className="product-description">{productDescription}</h3>
      </div>
      <img className="product-img" src={productImage} alt={imageAlt} />
      <div className="product-button">{children}</div>
    </div>
  );
}

export default ProductCard;
