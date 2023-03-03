import React from "react";

const Cart = (props) => {
  const productCount = props.productCount;
  const total = productCount * 125;

  let cartContents = (
    <>
      <img src={props.product1thumbnail} alt="item" />
      <div className="card-contents-description">
        Fall Limited Edition Sneakers <br />
        {`$125.00 x ${productCount}  `}
        <strong style={{ color: "hsl(220, 13%, 13%)" }}>${total}.00</strong>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="14"
        height="16"
        className="cart-contents-delete"
        onClick={() => {
          props.changeCount(0);
        }}
      >
        <defs>
          <path
            id="a"
            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 015.213 0h3.571a.75.75 0 01.672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 01-.375.375H.375A.376.376 0 010 2.625zm13 1.75V14.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375zM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7z"
          ></path>
        </defs>
        <use xlinkHref="#a"></use>
      </svg>
    </>
  );
  let checkoutBtn = <button className="cart-button">Checkout</button>;
  if (productCount === 0) {
    cartContents = (
      <div className="cart-contetnts-empty">Your cart is empty</div>
    );
    checkoutBtn = "";
  }
  return (
    <div className="cart-container">
      <div className="cart-header">Cart</div>
      <div className="cart-contents">{cartContents}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {checkoutBtn};
      </div>
    </div>
  );
};

export default Cart;
