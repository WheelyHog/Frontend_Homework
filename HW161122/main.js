let cars = [
  {
    title: "BMW",
    price: "40000",
    count: "15"
  },

  {
    title: "Toyota",
    price: "20000",
    count: "13"
  },

  {
    title: "Ford",
    price: "30000",
    count: "20"
  },

  {
    title: "Chevrolet",
    price: "60000",
    count: "9"
  },

  {
    title: "Volkswagen",
    price: "30000",
    count: "13"
  },
]

// 1) Создать пронумерованные списки с товарами (на основе массива с объектами);

const body = document.querySelector("body");
for (i = 0; i < cars.length; i++) {
  let ul = document.createElement("ul");
  ul.classList.add(`ul${i}`);
  let title = document.createElement("li");
  title.innerText = Object.keys(cars[0])[0] + ": " + cars[i].title;
  let price = document.createElement("li");
  price.innerText = Object.keys(cars[0])[1] + ": " + cars[i].price;
  let count = document.createElement("li");
  count.innerText = Object.keys(cars[0])[2] + ": " + cars[i].count;
  ul.append(title, price, count);
  body.append(ul);
}

// 2) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами с прошлой задачи), а внизу выводится итоговая сумма товаров и их количество.
let totalPrice = 0;
let totalCount = 0;
for (let i = 0; i < cars.length; i++) {
  totalPrice += cars[i].price * cars[i].count;
  totalCount += +cars[i].count;
}
const para = document.createElement("p");
para.innerText = "Total price = " + totalPrice + "; " + " Total Count = " + totalCount;
body.append(para);

// 3)Напишите скрипт, который выводит в интерфейс следующую таблицу:

let tableArray = [
  {
    number: "No",
    fullname: "Full Name",
    position: "Position",
    salary: "Salary",
  },
  {
    number: "1",
    fullname: "Bill Gates",
    position: "Founder Microsoft",
    salary: "$1000",
  },
  {
    number: "2",
    fullname: "Steve Jobs",
    position: "Founder Apple",
    salary: "$1200",
  },
  {
    number: "3",
    fullname: "Larry Page",
    position: "Founder Google",
    salary: "$1100",
  },
  {
    number: "4",
    fullname: "Mark Zuckerberg",
    position: "Founder Facebook",
    salary: "$1300",
  },
]

const table = document.createElement("table");
const thead = document.createElement("thead");
  
let thNumber = document.createElement("th");
  thNumber.innerText = tableArray[0].number;
  let thFname = document.createElement("th");
  thFname.innerText = tableArray[0].fullname;
  let thPos = document.createElement("th");
  thPos.innerText = tableArray[0].position;
  let thSal = document.createElement("th");
  thSal.innerText = tableArray[0].salary;
  let tr = document.createElement("tr");
  tr.append(thNumber, thFname, thPos, thSal);
  table.append(tr);

for (let i = 1; i < tableArray.length; i++) {
  let tdNumber = document.createElement("td");
  tdNumber.innerText = tableArray[i].number;
  let tdFname = document.createElement("td");
  tdFname.innerText = tableArray[i].fullname;
  let tdPos = document.createElement("td");
  tdPos.innerText = tableArray[i].position;
  let tdSal = document.createElement("td");
  tdSal.innerText = tableArray[i].salary;
  let tr = document.createElement("tr");
  tr.append(tdNumber, tdFname, tdPos, tdSal);
  table.append(tr);
}
body.append(table);