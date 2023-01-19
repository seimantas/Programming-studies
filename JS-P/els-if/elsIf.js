const legalAge = 20;

const clientAge = 17;

const myAge = 32;

const firstName = "eimantas";

if (clientAge < 20) {
  alert("ilegalAge");
} else {
  alert("legalAge");
}

if (firstName.length > 6) {
  alert("ilgasVardas");
}

if (myAge > 100 && myAge < 0) {
  alert("Invalid age");
} else if (myAge > 19 && myAge < 99) {
  alert("Adult");
} else myAge > 1 && myAge < 18;
alert("Child");
