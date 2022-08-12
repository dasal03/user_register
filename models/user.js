const mongoose = require("mongoose");
Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: String },
  address: { type: String },
  birth: { type: String },
});

module.exports = mongoose.model("User", userSchema);
