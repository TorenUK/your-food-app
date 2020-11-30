require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const itemRoutes = require("./routes/itemRoutes");

const localMongoPassword = process.env.LOCAL_MONGO_PASSWORD;

const connection_url = `mongodb+srv://admin:${localMongoPassword}@cluster0.kcqzi.mongodb.net/your-food-app?retryWrites=true&w=majority
`;

// app setup
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// db connection
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => {
  res.status(200).send("welcome to the party");
});

app.use(itemRoutes);

// listen
app.listen(4242, () => console.log("server running"));
