import React from "react";

// components
import "./styles/Item.css";

// other
import AddBoxIcon from "@material-ui/icons/AddBox";

const Item = ({ name, price }) => {
  return (
    <div className="item">
      <div className="item__text">{name}</div>
      <div className="item__image">item image</div>
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
