//extras_all

const Extra = require("../models/dbExtras");

const extras_all = (req, res) => {
  Extra.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  extras_all,
};
