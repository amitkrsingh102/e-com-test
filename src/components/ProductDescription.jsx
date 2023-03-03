import React from "react";

function ProductDescription() {
  return (
    <div className="product-description-container">
      <div className="product-description-company-name">SNEAKER COMPANY</div>
      <div className="product-description-product-name">
        <h1>
          Fall Limited Edition <br /> Sneakers
        </h1>
      </div>
      <div className="product-description">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="product-description-product-price">
        <div className="product-description-product-net-price">$125.00</div>
        <div className="product-description-product-discount">50%</div>
      </div>
      <div className="product-description-product-previous-price">
        <del>$250.00</del>
      </div>
    </div>
  );
}

export default ProductDescription;
