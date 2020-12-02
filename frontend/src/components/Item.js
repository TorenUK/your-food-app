import React, { useState } from "react";

// components
import "./styles/Item.css";

// other
import { Button } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

// redux
import { useDispatch } from "react-redux";
import { addToOrder } from "../features/order/orderSlice";

const Item = ({ name, price, image }) => {
  const [showSlide, setShowSlide] = useState(false);

  const handleSubmit = (e) => {
    let total = 0;
    const quantity = e.target.quantity.value;

    total = quantity * price;

    const parsedTotal = parseFloat(total).toFixed(2);

    toggleSlide();
    dispatch(
      addToOrder({
        name: name,
        quantity: quantity,
        price: parseFloat(parsedTotal),
      })
    );
  };

  const dispatch = useDispatch();

  const toggleSlide = () => {
    setShowSlide(!showSlide);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="item"
    >
      <div className="item__text">
        <p>{name}</p>
      </div>
      <div className="item__price">
        <p>£{price}</p>
      </div>
      <div className="item__interact">
        <AddBoxIcon onClick={toggleSlide} />
      </div>
      {showSlide && (
        <div className="item__slide">
          <div className="item__slide__info">
            <p>hi, this is where the item description will go 😊</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <label htmlFor="quantity">quantity</label>
            <select name="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <Button type="submit">add to order</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Item;
