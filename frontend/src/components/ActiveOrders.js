import React from "react";

// components
import "./styles/ActiveOrders.css";
import "../components/Banner";

// other
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const ActiveOrders = () => {
  return (
    <>
      <div className="activeOrders">
        <div className="activeOrders__content">
          <h1>your order: 12345678</h1>
          <h2>status: confirmed</h2>
          <p>Delivering to: </p>
          <Link to="/">
            <Button variant="outlined">home</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ActiveOrders;
