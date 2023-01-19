// 3. Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja
// ir atvaizduoja tą pačią temperatūrą Farenheitu.

const convertToFarenheit = (event) => {
  const celciusInputValue = event.target.value;
  const outputElement = document.getElementById("output");
  if (celciusInputValue) {
    const celcius = Number(celciusInputValue);
    const farenheit = (celcius * 1.8 + 32).toFixed(1);
    outputElement.innerText = farenheit;
  } else {
    outputElement.innerText = "";
  }
};

document
  .getElementById("celcius")
  .addEventListener("input", convertToFarenheit);
