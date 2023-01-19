const firstName = "Eimantas";

let i = 3;

let times = 5;

let combo = "";

while (i > 0) {
  console.log(firstName);
  i--;
}

do {
  combo += firstName;
  times--;
} while (times > 0);
console.log(combo);
