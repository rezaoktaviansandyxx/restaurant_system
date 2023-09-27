require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/swagger/v1/swagger.json", (req, res) => {
  res.json(swaggerFile);
});

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    explorer: true,
    swaggerOptions: {
      docExpansion: "none",
      urls: [
        {
          url: "/swagger/v1/swagger.json",
          name: "v1",
        },
      ],
    },
  })
);

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
