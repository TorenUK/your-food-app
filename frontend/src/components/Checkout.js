import React from "react";

// components
import "./styles/Checkout.css";

// other
import { Button } from "@material-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// redux
import { useSelector } from "react-redux";
import { selectOrder } from "../features/order/orderSlice";

const Checkout = ({ toggleCheckout }) => {
  const order = useSelector(selectOrder);

  const cardStyle = {
    style: {
      base: {
        color: "#fff",
        fontFamily: "poppins, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "18px",
        "::placeholder": {
          color: "#fff",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

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
      <div className="checkout__form">
        <form>
          <input name="name" placeholder="full name" type="text" />
          <input name="line1" placeholder="address line 1" type="text" />
          <input name="postcode" placeholder="postcode" type="text" />
        </form>
      </div>
      <div className="checkout__element">
        <CardElement id="card-element" options={cardStyle} />
      </div>
      <div className="checkout__buttons">
        <Button id="pay">pay now</Button>
        <Button onClick={toggleCheckout}>cancel</Button>
      </div>
    </div>
  );
};

export default Checkout;
