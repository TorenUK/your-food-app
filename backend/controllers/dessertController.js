//desserts_all

const Dessert = require("../models/dbDesserts");

const desserts_all = (req, res) => {
  Dessert.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  desserts_all,
};
