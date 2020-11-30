import React from "react";

// components
import "./styles/Item.css";

// other
import { Button } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

const Item = () => {
  return (
    <div className="item">
      <div className="item__text">item name</div>
      <div className="item__image">item image</div>
      <div className="item__interact">
        <AddBoxIcon />
      </div>
    </div>
  );
};

export default Item;
