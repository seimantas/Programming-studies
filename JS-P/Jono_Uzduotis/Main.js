import { getPost } from "./modules/get_Post.js";
import { showPost } from "./modules/show_Post.js";
import { postInerBodyReplace } from "./modules/iner_Post_Body_Raplace.js";
//š jau naudoto https://jsonplaceholder.typicode.com/ fiktyvaus API back-end atvaizduoti postą nr. X (vartotojas įveda input  laukelyje skaičių (prisiminkit, kaip tikrinti)) ir prie posto input laukelį - pakeitus jame reikšmę, keičiasi ir posto aprašymas (prisiminkit, kokį HTTP metodą naudoti)

const form = document.querySelector("#getPosteNumberForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const postNumber = +document.querySelector("#posteNumbesInput").value;

  if (typeof postNumber === "number" && !Number.isNaN(postNumber)) {
    const post = await getPost(postNumber);

    await showPost(post);
  }
});

postInerBodyReplace();
