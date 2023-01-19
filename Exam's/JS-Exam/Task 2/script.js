/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const clickCalculator = () => {
  const clickMeButton = document.querySelector("#btn__element");

  clickMeButton.addEventListener("click", () => {
    document.querySelector("#btn__state").innerHTML++;
  });
};

clickCalculator();

const resetCalculator = () => {
  const resetCalculatorButton = document.querySelector("#reset__btn__element");

  resetCalculatorButton.addEventListener("click", () => {
    document.querySelector("#btn__state").innerHTML = 0;
  });
};

resetCalculator();
