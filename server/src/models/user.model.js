const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("Users", DataSchema);
module.exports = users;
