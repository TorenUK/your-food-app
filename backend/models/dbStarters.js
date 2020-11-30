const mongoose = require("mongoose");

// structure

const starterSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const Starter = mongoose.model("starter", starterSchema);
module.exports = Starter;
