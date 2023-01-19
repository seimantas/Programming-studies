const firstName = "Eimantas";

const h2 = document.createElement("h2");

const firstListItem = document.querySelector("ol li:first-child");

const secondListItem = document.querySelector("ol li:nth-child(2)");

const bmw_group = firstListItem.textContent;

const vw_group = secondListItem.textContent;

h2.textContent = firstName;
document.body.append(h2);

document.getElementById("maneName").textContent = firstName;

document.querySelector("ul li:last-child").textContent = "Sūris";

document.querySelector(".bluetext > span").textContent = "blue";

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;
