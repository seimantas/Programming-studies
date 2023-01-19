//Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length).

const firstName = prompt("To know if your name is long, type here");

if (firstName.length > 6) {
  alert("You have long name");
} else alert("you have short name");
