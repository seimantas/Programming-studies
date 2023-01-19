/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const userWeightInput = document.querySelector("form");

const newElement = (text) => {
  const element = document.createElement("p");

  element.innerText = `${text}`;

  document.querySelector("#output").append(element);
};

userWeightInput.addEventListener("submit", (event) => {
  event.preventDefault();

  const userWeight = document.getElementById("search").value;
  const convertUserKgToLb = userWeight * 2.2046 + "Pounds";
  const convertUserKgToG = userWeight / 0.001 + "Grams";
  const convertUserKgToOz = userWeight * 35.274 + "Ounces";

  document.querySelector("#output").replaceChildren();

  newElement(convertUserKgToLb),
    newElement(convertUserKgToG),
    newElement(convertUserKgToOz);
});
