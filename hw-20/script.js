const createPull = {
  name: "basketboll",
  price: 2095,
};
(createPull.price = 2095 + 500), console.log(createPull);
///
console.log((createPull.deliveryTime = "3 day"));
///
const baipak = {
  name: "Korea baipagy",
  price: 140,
};
console.log(baipak);

function comparePrice() {
  if (createPull.price > baipak.price) {
    console.log(baipak.price);
  } else {
    console.log(createPull.price);
  }
}
comparePrice();
///
const productFirts = {
  name: "Basketball",
  price: 500,
};

const productSecond = {
  name: "Basketball",
  price: 1000,
};

const productThird = {
  name: "Basketball",
  price: 1500,
};

function comparePriceSecond(a, b) {
  return a.name === b.name && a.price === b.price;
}
console.log(comparePriceSecond(productSecond, productThird));
console.log("Good Morning, TESTING".toLowerCase());
