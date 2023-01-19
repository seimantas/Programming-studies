const express = require("express");
const cors = require("cors");

const PORT = 5000;

const app = express();

let cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.use(express.json());
app.use(cors());

app.get("/cars/:brand", (req, res) => {
  const { brand } = req.params;

  const models = cars[brand];

  res.send(models).end();
});

app.listen(PORT, () => {
  console.log(`${PORT} Server is running`);
});
