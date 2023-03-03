import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import ProductImages from "./components/ProductImages";
import ProductDescription from "./components/ProductDescription";
import ProductCounter from "./components/ProductCounter";
import AddToCartButton from "./components/AddToCartButton";
import images from "./imageImports";

function App() {
  const [productCount, setProductCount] = useState(0);
  const changeCount = (num) => {
    setProductCount(num);
    return;
  };

  return (
    <div>
      <NavigationBar
        logo={images.logo}
        cart={images.cart}
        photo={images.photo}
        product1thumbnail={images.product1thumbnail}
        productCount={productCount}
        changeCount={changeCount}
      />
      <div className="product-body">
        <ProductImages
          product1thumbnail={images.product1thumbnail}
          product2thumbnail={images.product2thumbnail}
          product3thumbnail={images.product3thumbnail}
          product4thumbnail={images.product4thumbnail}
          product1image={images.product1image}
          product2image={images.product2image}
          product3image={images.product3image}
          product4image={images.product4image}
        />
        <div className="product-action">
          <ProductDescription />
          <div className="final-action">
            <ProductCounter
              changeCount={changeCount}
              productCount={productCount}
            />
            <AddToCartButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
