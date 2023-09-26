require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
