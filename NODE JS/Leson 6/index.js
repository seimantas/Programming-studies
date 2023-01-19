const express = require("express");
const cors = require("cors");
const users = require("./users.js");

const PORT = 5000;

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (_, res) => {
  res.send(users).end();
  console.log(users);
});

app.get("/:car", (req, res) => {
  const { car } = req.params;
  const filterUsersByCar = users.filter((curCar) => curCar.car === car);

  res.send(filterUsersByCar).end();
});

app.get("/users/email", (_, res) => {
  const userEmails = users.map((user) => user.email);
  console.log(userEmails);
  res.send(userEmails).end();
});

app.get("/gender/:gender", (req, res) => {
  const { gender } = req.params;

  const doesGenderExists = users.find(
    (curGender) => curGender.gender === gender
  );
  if (doesGenderExists) {
    const filterByGender = users.filter(
      (curGender) => curGender.gender === gender
    );
    const filteredNames = filterByGender.map(
      (curGender) => `${curGender.first_name} ${curGender.last_name}`
    );

    res.send(filteredNames).end();
    return;
  }
  res.status(404).send("Gender does not exist").end();
});

app.get("/users/:id", (req, res) => {
  const id = +req.params.id;
  const filterUsersByid = users.filter((curid) => curid.id === id);

  res.send(filterUsersByid).end();
});

app.listen(PORT, () => {
  console.log(`${PORT} Server is running`);
});
