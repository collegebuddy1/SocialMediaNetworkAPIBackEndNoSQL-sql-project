const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");

const PORT = process.env.PORT || 3066;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });
});
