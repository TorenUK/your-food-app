//mains_all

const Main = require("../models/dbMains");

const mains_all = (req, res) => {
  Main.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  mains_all,
};
