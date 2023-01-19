document
  .querySelector("button")
  .addEventListener("click", () => alert("Emantas"));

document.getElementById("typeText").addEventListener("click", () => {
  document.querySelector("p").innerText = "Some text about me";
});

let counter = 0;

document.getElementById("counter").addEventListener("click", () => {
  counter++;

  document.querySelector("h1").innerText = counter;
});

document
  .getElementById("copyText")
  .addEventListener("copy", () => alert("Dont copy"));

document.getElementById("randomeCount").addEventListener("clik", () => {
  Math.floor(Math.random() * 100);
});

const generateRandomNumberFirst = () => {
  return Math.floor(Math.random() * 100) + 1;
};

document.getElementById("randomeCount").addEventListener("click", () => {
  const randomNumber = generateRandomNumberFirst();
  document.querySelector("h2").innerText = randomNumber;
});

document.getElementById("turi18m").addEventListener("click", () => {
  document.getElementById("pilnametis").innerText = "Prieiga suteikta";
});

document
  .getElementById("neturi18m")
  .addEventListener("click", () => alert("Nepilnametis! priega neleista"));

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 3) + 1;
};
const randomNumber = generateRandomNumber();
console.log(randomNumber);

document
  .getElementById("one")
  .addEventListener("click", () =>
    randomNumber === 1 ? alert("Yay") : alert("Nay")
  );
document
  .getElementById("two")
  .addEventListener("click", () =>
    randomNumber === 2 ? alert("Yay") : alert("Nay")
  );
document
  .getElementById("three")
  .addEventListener("click", () =>
    randomNumber === 3 ? alert("Yay") : alert("Nay")
  );

document.getElementById("dontPush").addEventListener("click", () => {
  document.getElementById("dontPush").innerText = "Neklausote manęs";
});

document
  .getElementById("output")
  .addEventListener(
    "mousemove",
    () =>
      (document.getElementById("output").innerText = "Kiek galima neklausyti?!")
  );
