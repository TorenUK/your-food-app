import React from "react";

// components
import "./styles/Checkout.css";

// other
import { Button } from "@material-ui/core";

// redux
import { useSelector } from "react-redux";
import { selectOrder } from "../features/order/orderSlice";

const Checkout = ({ toggleCheckout }) => {
  const order = useSelector(selectOrder);

  return (
    <div className="checkout">
      <h1>checkout</h1>
      <div className="checkout__items">
        {order.map((item, idx) => (
          <p key={idx}>
            {item.name} x {item.quantity}
          </p>
        ))}
      </div>
      <div className="checkout__buttons">
        <Button onClick={toggleCheckout}>cancel</Button>
        <Button>pay now</Button>
      </div>
    </div>
  );
};

export default Checkout;
