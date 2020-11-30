const mongoose = require("mongoose");

// structure

const mainSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const Main = mongoose.model("main", mainSchema);
module.exports = Main;
