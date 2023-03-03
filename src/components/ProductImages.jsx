import React, { useState } from "react";

function ProductImages(props) {
  const [displayImage, setDisplayImage] = useState(
    <img src={props.product1image} alt="img1"></img>
  );
  return (
    <div className="product-image-container">
      <div className="productimage-main">{displayImage}</div>
      <div className="product-image-thumbnail-container">
        <img
          src={props.product1thumbnail}
          alt="img1t"
          onClick={() => {
            setDisplayImage(<img src={props.product1image} alt="img1"></img>);
          }}
        />
        <img
          src={props.product2thumbnail}
          alt="img2t"
          onClick={() => {
            setDisplayImage(<img src={props.product2image} alt="img2"></img>);
          }}
        />
        <img
          src={props.product3thumbnail}
          alt="img3t"
          onClick={() => {
            setDisplayImage(<img src={props.product3image} alt="img3"></img>);
          }}
        />
        <img
          src={props.product4thumbnail}
          alt="img4t"
          onClick={() => {
            setDisplayImage(<img src={props.product4image} alt="img4"></img>);
          }}
        />
      </div>
    </div>
  );
}

export default ProductImages;
