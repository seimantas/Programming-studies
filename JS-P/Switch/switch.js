const carMake = prompt("type car make");

switch (carMake) {
    case "vw":
        alert("VW Group");
        break;

    case "audi":
        alert("VW Group");
        break;

    case "bentley":
        alert("VW Group");
        break;

    case "bugatti":
        alert("VW Group");
        break;

    case "lamborgini":
        alert("VW Group");
        break;

    case "porsche":
        alert("VW Group");
        break;

    case "bmw":
        alert("BMW Group");
        break;

    case "mini":
        alert("BMW Group");
        break;

    case "rolls-royce":
        alert("BMW Group");
        break;

    default:
        alert("Unknowing car maker group")
}


const userInput = prompt("Fruit or Wegetable? Type here");

switch (userInput) {
    case "orange":
        alert("Fruit");
        break;

    case "blackberry":
        alert("Fruit");
        break;

    case "banana":
        alert("Fruit");
        break;

    case "meleon":
        alert("Fruit");
        break;

    case "blueberry":
        alert("Fruit");
        break;

    case "carrot":
        alert("Vegetable");
        break;

    case "potato":
        alert("Vegetable");
        break;

    case "tomato":
        alert("Vegetable");
        break;

    case "cucumber":
        alert("Vegetable");
        break;

    case "pumkin":
        alert("Vegetable");
        break;

    default:
        alert("Unknowing vegetable or fruit")
}

let weekDay = new Date().getDay();
switch (weekDay) {
    case 0:
        weekDay = 'Sekmadienis';
        break;
    case 1:
        weekDay = 'Pirmadienis';
        break;
    case 2:
        weekDay = 'Antradienis';
        break;
    case 3:
        weekDay = 'Trečiadienis';
        break;
    case 4:
        weekDay = 'Ketvirtadienis';
        break;
    case 5:
        weekDay = 'Penktadienis';
        break;
    case 6:
        weekDay = 'Šeštadienis';
        break;
}
console.log(weekDay);