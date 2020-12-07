import React, { useEffect, useState } from "react";

// components
import "./styles/Checkout.css";

// other
import { Button } from "@material-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../axios";

// redux
import { useSelector } from "react-redux";
import { selectOrder } from "../features/order/orderSlice";
import { selectUser } from "../features/user/userSlice";

const Checkout = ({ toggleCheckout }) => {
  const order = useSelector(selectOrder);
  const user = useSelector(selectUser);

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post("/create-payment-intent");

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret().catch((err) => console.log(err));
  }, [order]);

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: user,
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

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
        <h2>your order</h2>
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
        <CardElement
          onChange={handleChange}
          id="card-element"
          options={cardStyle}
        />
      </div>
      <div className="checkout__buttons">
        <Button
          disabled={processing || disabled || succeeded}
          onClick={handleSubmit}
          type="submit"
          id="pay"
        >
          <span>{processing ? <p>processing</p> : "pay now"}</span>
        </Button>
        {error && <div>{error}</div>}
        <Button onClick={toggleCheckout}>cancel</Button>
      </div>
    </div>
  );
};

export default Checkout;
