const header = document.createElement("h1");

const unorderedList = document.createElement("ul");

const listItemThree = document.createElement("li");

const listItemOne = document.createElement("li");

const listItemTwo = document.createElement("li");

header.textContent = "Eimantas";
header.style.color = "red";
document.body.append(header);

document.body.append(unorderedList);

listItemOne.textContent = "VW";
unorderedList.append(listItemOne);

listItemTwo.textContent = "BMW";
unorderedList.append(listItemTwo);

listItemThree.textContent = "AUDI";
unorderedList.append(listItemThree);

////////////////////////////////////

const fruitsList = document.createElement("ul");

fruitsList.textContent = "Fruits List";
fruitsList.style.color = "blue";
document.body.append(fruitsList);

const fruitsListItems = ("Banana", "Apple", "Orange");

for (fruitsListItem of fruitsListItems) {
  const listItem = document.createElement("li");
  listItem.textContent = fruitsListItems;
  fruitsList.append(listItem);
}
