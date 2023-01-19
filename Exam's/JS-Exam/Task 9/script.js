/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus su 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  title;
  director;
  budget;

  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget > 100_000_000) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  }
}

const goodMove = new Movie("Best Years", "Eimantas Sipas", 200_000_000);

console.log(goodMove);

console.log(goodMove.wasExpensive());

const badMove = new Movie("The Worst Years", "Bernard McSmith", 100_000);

console.log(badMove);

console.log(badMove.wasExpensive());
