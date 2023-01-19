// 1. Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams,
//    kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų).
//    O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk
//    programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input
//    elementu - atsirastų tekstas su pervedamu bonusu.
//    Pvz: [16] => "Jūsų bonusas: 100 eurų".

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const workerInput = document.getElementById("work-Experience").value;

  let workerBonus = 50;
  if (workerInput >= 10) {
    workerBonus += 50;
    console.log(workerBonus);
  }
  if (workerInput >= 20) {
    workerBonus += 100;
  }

  document.getElementById("output").innerText = `Jūsų premija: ${workerBonus}`;
});
