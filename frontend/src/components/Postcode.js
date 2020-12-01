import React, { useState } from "react";

// components
import "./styles/Postcode.css";

// other
import { Button } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { getDistance } from "geolib";
import axios from "axios";

const Postcode = () => {
  const [success, setSuccess] = useState(false);
  const [distance, setDistance] = useState("");
  const [postcode, setPostcode] = useState("");
  const [loading, setLoading] = useState(false);

  const baseCoordinates = {
    latitude: 52.62886,
    longitude: -1.122674,
  };

  const hanndleSubmit = () => {
    setLoading(true);

    findDistance(postcode).then(() => {
      setSuccess(true);

      if (distance !== "") {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    });
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

  return (
    <div className="postcode">
      <h4>
        111 London Road, Leicester, LE2 1ND <LocationOnIcon />
      </h4>
      <h3>Do we deliver to you?</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          hanndleSubmit();
        }}
      >
        <input
          value={postcode}
          onChange={(e) => setPostcode(e.target.value.replace(/\s/g, ""))}
          name="postcode"
          type="text"
          placeholder="your postcode"
          autoComplete="postal-code"
          required
        />
        <Button type="submit">check</Button>
      </form>
      {success && (
        <h4>
          {distance < 5
            ? "yes - we deliver to your area!"
            : "sorry, we don't currently service your area"}
        </h4>
      )}
    </div>
  );
};

export default Postcode;
