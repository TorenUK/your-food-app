import React, { useState } from "react";

// components
import "./styles/Order.css";

// other
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// redux
import { useSelector } from "react-redux";
import { selectOrder } from "../features/order/orderSlice";

const Order = ({ toggleCheckout }) => {
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
        <p>
          your order || {order.length} item{order.length > 1 ? "s" : null}{" "}
        </p>
        {showSlide ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      {showSlide && (
        <div className="order__slide">
          <div className="order__slide__list">
            {order.map((item, idx) => (
              <div key={idx} className="order__item">
                <p>
                  {item.name} x {item.quantity}
                </p>
                <Button>
                  <DeleteForeverIcon />
                </Button>
              </div>
            ))}
          </div>
          <div></div>
          <Button
            onClick={() => {
              toggleSlide();
              toggleCheckout();
            }}
          >
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
