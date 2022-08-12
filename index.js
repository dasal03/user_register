const app = require("./app");

require("./database");

// starting the server
app.listen(app.get("port"), () => {
  console.log(`server on port http://localhost:${app.get("port")}`);
});
