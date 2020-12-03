import React, { useState } from "react";

// components
import "./styles/Order.css";

// other
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";

// redux
import { useSelector } from "react-redux";
import { selectOrder } from "../features/order/orderSlice";

const Order = () => {
  const order = useSelector(selectOrder);
  const [showSlide, setShowSlide] = useState(false);

  const toggleSlide = () => {
    setShowSlide(!showSlide);
  };

  // calculate order total
  const getOrderTotal = (order) =>
    order?.reduce((amount, item) => parseFloat(item.price) + amount, 0);

  return (
    <div className="order">
      <div onClick={toggleSlide} className="order__icon">
        <p>your order || {order.length}</p>
        <ListAltIcon />
      </div>
      {showSlide && (
        <div className="order__slide">
          <div className="order__slide__list">
            {order.map((item, idx) => (
              <p key={idx}>
                {item.name} x {item.quantity}
              </p>
            ))}
          </div>
          <div></div>
          <Button>
            {" "}
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p id="subtotal">subtotal {value}</p>
                </>
              )}
              decimalScale={2}
              value={getOrderTotal(order)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"£"}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Order;
