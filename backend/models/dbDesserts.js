const mongoose = require("mongoose");

// structure

const dessertSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const Dessert = mongoose.model("dessert", dessertSchema);
module.exports = Dessert;
