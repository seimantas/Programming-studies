/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const getUsers = async (user) => {
  try {
    const response = await fetch(ENDPOINT);
    const user = await response.json();

    return user;
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("#btn").addEventListener("click", async () => {
  document.querySelector("#output").replaceChildren();
  const userData = await getUsers();

  userData.forEach((user) => {
    const userCard = document.createElement("div");
    const userloginElement = document.createElement("h2");
    const userAvatarElement = document.createElement("img");

    userCard.setAttribute("id", "user-card");

    userAvatarElement.setAttribute("src", `${user.avatar_url}`, "id", "img");

    userloginElement.innerText = user.login;

    userAvatarElement.innerText = user.avatar_url;

    userCard.append(userloginElement, userAvatarElement);

    document.querySelector("#output").append(userCard);
  });
});
