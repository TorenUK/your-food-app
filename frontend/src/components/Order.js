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
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { selectOrder, removeFromOrder } from "../features/order/orderSlice";

const Order = ({ toggleCheckout, guest, setGuest, toggleSignUp }) => {
  const order = useSelector(selectOrder);
  const user = useSelector(selectUser);

  const [showSlide, setShowSlide] = useState(false);

  const dispatch = useDispatch();

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
              <div key={idx} id={item.id} className="order__item">
                <p>
                  {item.name} x {item.quantity}
                </p>
                <div className="order__item__button">
                  <Button
                    onClick={() => {
                      dispatch(removeFromOrder({ id: item.id }));
                    }}
                  >
                    <DeleteForeverIcon />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div></div>
          <Button
            onClick={() => {
              if (user || guest) {
                toggleSlide();
                toggleCheckout();
              } else {
                toggleSignUp();
              }
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
