const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./src/routes");

const app = express();
const port = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_URI || "mongodb+srv://testemern:testemern123@cluster0.zb7nw.mongodb.net/testemern?retryWrites=true&w=majority";

mongoose.connect(
  CONNECTION_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB CONECTADO com sucesso!");
    }
  }
);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, function () {
  console.log(`Server runing on port ${port}`);
});
