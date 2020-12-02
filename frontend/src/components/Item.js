import React, { useState } from "react";

// components
import "./styles/Item.css";

// other
import { Button } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

const Item = ({ name, price, image }) => {
  const [showSlide, setShowSlide] = useState(false);

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
          <form>
            <label for="quantity">quantity</label>
            <select name="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <Button>add to order</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Item;
