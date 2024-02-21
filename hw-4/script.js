const myTrue = 10;
if (myTrue == 10) {
  console.log("true");
} else {
  console.log("false");
}

//
let batir = prompt("Батирдин номерин жазыңыз 1 ден  90 го чейин");

if (batir >= 1 && batir <= 20) {
  console.log("Сиздин батириңис биринчи подъезде!");
} else if (batir >= 20 && batir <= 48) {
  console.log("Сиздин батиринис экинчи подъезде");
} else if (batir >= 49 && batir <= 90) {
  console.log("Сиздин батиңис үчүнчү подъезде");
} else {
  console.warn("Ондой батир жок!");
}

let aName = 5;

if (aName >= 0 && aName <= 5) {
  console.log(true);
} else {
  console.log(false);
}

//

const time = 17;

if (time >= 1 && time <= 6) {
  console.log("Добрый вечер");
} else if (time >= 7 && time <= 10) {
  console.log("Добрый утро ");
} else if (time >= 11 && time <= 16) {
  console.log("Добрый день ");
} else if (time >= 17 && time <= 24) {
  console.log("Добрый вечер ");
}
//
const age = 66;

if (age >= 6 && age <= 65) {
  console.log("Сизге скидка жок");
} else {
  console.log("Сиздин скидканыс 65%");
}
let randomizer = Math.random();

if (randomizer <= 1 && randomizer >= 2 / 3) {
  console.log(Орел);
} else {
  console.log(Решка);
}

const number = 7;

if (number % 2 === 1) {
  console.log("Число чётное");
} else {
  console.log("Число нечётное");
}
let nums = 5;

nums == 5 ? console.log("Five") : console.log("Not five");
