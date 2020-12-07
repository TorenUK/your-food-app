import React, { useState, useEffect } from "react";

// components
import "./styles/ActiveOrders.css";
import "../components/Banner";

// other
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "../axios";

const ActiveOrders = () => {
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(() => {
    axios
      .get("/order/find?email=bobjones@google.com")
      .then((response) => {
        setActiveOrder(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(activeOrder);

  if (activeOrder) {
    for (let key in activeOrder.items) {
      let value = activeOrder.items[key];
      console.log(key, value);
    }
  }

  return (
    <>
      <div className="activeOrders">
        {activeOrder ? (
          <div className="activeOrders__content">
            <h1>Active Order</h1>
            <h2>
              status: <span>{activeOrder?.status}</span>{" "}
            </h2>
            <div className="activeOrders__customer">
              <p>{activeOrder?.name} </p>
              <p>{activeOrder?.address.line1}</p>
              <p>{activeOrder?.address.postcode}</p>
            </div>
            <Link to="/">
              <Button variant="outlined">home</Button>
            </Link>
          </div>
        ) : null}
      </div>
      <div className="activeOrders__bottom">
        <h2>full order tracking coming soon</h2>
      </div>
    </>
  );
};

export default ActiveOrders;
