const angleCos = Math.cos(0);

console.log(angleCos);

//////////////////////////

//Random number betwyn o and 5//
const random = Math.floor(Math.random() * 5) + 1;

console.log(random);

//Rondom number betwyn 5 and 12
const randomNumberBetwyn = Math.floor(Math.random() * (12 - 5 + 1)) + 5;

console.log(randomNumberBetwyn);

// Lotery
const randomNumber = Math.floor(Math.random() * 5) + 1;
if (randomNumber === 1) {
  alert("You won");
} else {
  alert("Try again next time");
}
