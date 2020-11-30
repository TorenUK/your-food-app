//starters_all

const Starter = require("../models/dbStarters");

const starters_all = (req, res) => {
  Starter.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  starters_all,
};
