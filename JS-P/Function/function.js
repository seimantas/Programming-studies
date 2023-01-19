alertName = (firsrtName) => {
  alert(firsrtName);
};

alertName("Eimantas");

randomNumber = () => {
  return console.log(Math.floor(Math.random() * 5) + 1);
};
randomNumber();

const getFirstNameAndSurnameLength = (firstName, surname) => {
  return firstName.length + surname.length;
};

console.log(getFirstNameAndSurnameLength("Eimantas", "sipas"));

const getLetterByIndex = (i) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return alphabet[i];
};

console.log(getLetterByIndex(6));

const calculate = (n1, n2, operator) => {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 / n2;
  }
};
console.log(calculate(1, 2, "sum"));

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const squareNumber = (generateRandomNumber) => {
  return Math.pow(generateRandomNumber, 2);
};

console.log(squareNumber(generateRandomNumber()));
