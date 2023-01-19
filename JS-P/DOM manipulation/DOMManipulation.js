// 1. H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas
//  atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

document.querySelector("h1").addEventListener("click", (event) => {
  event.target.style.textAlign = "center";
  event.target.style.fontSize = "4rem";
  event.target.style.color = "red";
});

// 2. Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas
// position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko,
// jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę.
// Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

const button = document.querySelector("button");
button.style.cssText = "position:absolute; top:0; left:0;";

let isInOriginalPosition = true;
const changePosition = (event) => {
  event.target.style.cssText = isInOriginalPosition
    ? "position:absolute; bottom:0; right:0;"
    : "position:absolute; top:0; left:0;";
  isInOriginalPosition = !isInOriginalPosition;
};

button.addEventListener("click", changePosition);

// 3. Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą.
// Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio
// fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias.

document.getElementById("name").addEventListener("input", (event) => {
  const name = event.target.value;
  document.body.style.backgroundColor = name.length < 3 ? "red" : "green";
});

// 4. Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom
// (["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo spalva
// pasikeičia į atsitiktinę spalvą.

const buttonColors = ["red", "green", "blue", "yellow"];
document.getElementById("colors").addEventListener("click", (event) => {
  const randomIndex = Math.round(Math.random() * 4);
  event.target.style.backgroundColor = buttonColors[randomIndex];
});

// 5. Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas.
// Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai),
// šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite,
// kad paspaudus ant mygtuko, jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.

const generateRandomColor = () => {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
};

document.getElementById("rondomColor").addEventListener("click", (event) => {
  event.target.style.backgroundColor = generateRandomColor();
});
