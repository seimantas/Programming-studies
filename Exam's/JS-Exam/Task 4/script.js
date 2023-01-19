/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const fechMakers = async (user) => {
  try {
    const response = await fetch(ENDPOINT);
    const makers = await response.json();

    return makers;
  } catch (error) {
    console.error(error);
  }
};

const renderMakers = async () => {
  const userData = await fechMakers();

  userData.forEach((makers) => {
    const makersCard = document.createElement("div");
    const makersBrandElement = document.createElement("h2");
    const makersModelsElement = document.createElement("p");

    makersCard.setAttribute("id", "makers-card");

    makersBrandElement.innerText = makers.brand;

    makersModelsElement.innerText = makers.models;

    makersCard.append(makersBrandElement, makersModelsElement);

    document.querySelector("#output").append(makersCard);
  });
};

renderMakers();
