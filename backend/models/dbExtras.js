const mongoose = require("mongoose");

// structure

const extraSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const Extra = mongoose.model("extra", extraSchema);
module.exports = Extra;
