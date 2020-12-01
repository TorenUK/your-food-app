import React, { useState } from "react";

// components
import "./styles/Postcode.css";

// other
import { Button } from "@material-ui/core";
import { getDistance } from "geolib";
import axios from "axios";

const Postcode = () => {
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState("");
  const [postcode, setPostcode] = useState("");

  const baseCoordinates = {
    latitude: 52.625669,
    longitude: -1.116733,
  };

  const findDistance = async (postcode) => {
    try {
      let response = await axios.get(
        `https://api.postcodes.io/postcodes/${postcode}`
      );

      const { latitude, longitude } = response.data.result;

      const distance =
        getDistance(baseCoordinates, { latitude, longitude }) / 1000;

      setDistance(distance);
    } catch (err) {
      console.log(err);
    }
  };

  const hanndleSubmit = (e) => {
    setLoading(true);

    const inputPostcode = e.target.postcode.value;

    setPostcode(inputPostcode.replace(/\s/g, ""));
    findDistance(postcode);
    console.log(distance);
  };

  return (
    <div className="postcode">
      <h3>Do we deliver to you?</h3>
      <h4>123 London Road, Leicester, LE2 1ND</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          hanndleSubmit(e);
        }}
      >
        <input
          name="postcode"
          type="text"
          placeholder="your postcode"
          autoComplete="postal-code"
          required
        />
        <Button type="submit">{loading ? "checking" : "check"}</Button>
      </form>
    </div>
  );
};

export default Postcode;
