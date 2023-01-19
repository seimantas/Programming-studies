const vardas = 'Eimantas';
const clientAge = 32;
const legalAge = 18;

console.log(vardas.length < 5 ? "Short Name" : "Long Name")

clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

clientAge < 0 || clientAge > 120 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");
