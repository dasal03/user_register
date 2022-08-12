const mongoose = require("mongoose");

const URI =
  "mongodb+srv://dasal:1234abcd@cluster0.qpfdg.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
