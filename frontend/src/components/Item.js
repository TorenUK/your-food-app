import React from "react";

// components
import "./styles/Item.css";

// other
import AddBoxIcon from "@material-ui/icons/AddBox";

const Item = ({ name, price, image }) => {
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
        <AddBoxIcon />
      </div>
    </div>
  );
};

export default Item;
