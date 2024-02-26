const car = {
  brand: "Toyota",
  model: "Camry",
  year: 1996,
  displayInfo: function () {
    return `Car ${car.brand}`;
  },
};

//---1---///

console.log(car);

///---2---///

car.year = 2024;
console.log(car.year);

///-----3--------///

car.carColor = "aqua";
console.log(car);

///-----4-------///

delete car.model;
console.log(car);

///----5-------///
console.log(car.displayInfo());
///---6-----///

const person = {
  name: "Adilet",

  address: {
    city: "Bishkek",
    street: "Namys",
  },
};
console.log(person);

///---7---///

const objfirst = {
  number: 100,
};

const objsecond = {
  number: 100,
};
console.log(objfirst > objsecond);

///----8------///
let addToObj = (car.price = "47000$");
console.log(car);

///----9-------///
const userCars = Object.assign({}, car);

console.log(userCars);
