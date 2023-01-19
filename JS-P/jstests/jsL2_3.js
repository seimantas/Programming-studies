//Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".

const yourAge = prompt("Type your age");

if (yourAge > 100 || yourAge < 0) {
  alert("Invalid age");
} else if (yourAge >= 18 && yourAge < 99) {
  alert("Adult");
} else alert("Child");
