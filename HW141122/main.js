let products = [
  {
    id: 1,
    title: "велосипед",
    price: 45000,
    discount: 10,
    quantity: 150
  },
  {
    id: 2,
    title: "ролики",
    price: 15000,
    discount: 5,
    quantity: 420
  },
  {
    id: 3,
    title: "самокат",
    price: 10000,
    discount: 30,
    quantity: 200
  },
  {
    id: 4,
    title: "лыжи",
    price: 25000,
    discount: 20,
    quantity: 1500
  },
  {
    id: 5,
    title: "скейт",
    price: 10000,
    discount: 0,
    quantity: 800
  }
]

// 1. Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

for (let i = 0; i < products.length; i++) {
  console.log(products[i].id + " " + products[i].title + " :" + " price with discount = " + (products[i].price - products[i].price * products[i].discount / 100));
}

// 2. Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки)

function getMaxPrice(products) {
  let mExProduct = {};
  let maxPrice = products[0].price;
  let minPrice = products[0].price;
  let minId = 0;
  let allPrice = 0;
  for (let i = 0; i < products.length; i++) {
    if (maxPrice <= products[i].price) {
      maxPrice = products[i].price;
      mExProduct = products[i];
    }
    if (minPrice >= products[i].price) {
      minPrice = products[i].price;
      minId = i;
    }
    allPrice += products[i].quantity * products[i].price;
  }
  console.log("the most expensive product : " + mExProduct.title + ", price : " + mExProduct.price);
  console.log(mExProduct);
  console.log("the cheapest product : " + products[minId].title + ", price : " + products[minId].price);
  console.log("Price of all items = " + allPrice);
}
getMaxPrice(products);