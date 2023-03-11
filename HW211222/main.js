// 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"
// let arr = [1,2,3];
// let str = '';
// arr.forEach(elem => str += elem + ", ");   <-- этот вариант выводит запятую после последнего elem: "1, 2, 3, "
// console.log(str);

let arr = [1,2,3];
let str = '';
str = arr.join();
console.log(str);


// 2)Используя метод reduce, посчитайте сколько людей проголосовали.
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let count = 0;
voters.reduce(((accum, elem) => elem.voted === true ? count++ : count),0)
console.log(count);


// 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let total = wishlist.reduce(((accum, elem) => accum+= elem.price), 0)
console.log(total);

// 4) Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, avgmark. Avgmark содержит среднеарифметическое значение marks.
// Массив для задачи:
const products =
 [
    {id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5]},
    {id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4]},
    {id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3]},
    {id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4]}
]
products.forEach((elem) => {
  elem.avgmark = (elem.marks.reduce((accum, elem) => {
   return accum += elem
  } 
  )) / elem.marks.length;
  delete elem.marks;
})
console.log(products);
