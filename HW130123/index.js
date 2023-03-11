//1. Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:
let elems = [
'<div><p class="text">Home</p></div>', 
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 
// Результат: ['Home','About','FAQ','Contacts']
// let res = elems.map(elem => {
//   return elem.slice(elem.indexOf('">') + 2, elem.indexOf('</'))
// })
// console.log(res);

// 2. Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру: 
let words = ['стакан','молоко','табуретка','вода'] 

// Результат: ['Cтакан','Молоко','Табуретка','Вода']
function initCap(arr) {
  
  let newArray = arr.map(elem => elem.slice(0, 1).toUpperCase() + elem.slice(1, elem.length));
  console.log(newArray);
}
initCap(words);

// 3.Задан массив names. 
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined 

// Пример: 
let names = [ 
'Steven King', 
'Jonh Snow', 
'Oliver', 
'Neena Stich',
 'Grant Laster', 
'Persius Master', 
'Lest' 
] 

// Результат: [ 
// ['Steven','King'], 
// ['Jonh','Snow'], 
// ['Oliver', undefined], 
// ['Neena','Stich'], 
// ['Grant','Laster'], 
// ['Persius','Master'],
// ['Lest', undefined] ]
// ]

// let full_names = names.map(elem => {
//   if(elem.includes(' ')){
//     return elem.split(' ');
//   } else return [`${elem}`, undefined] 
// })

// let full_names = names.map(elem => elem.includes(' ') ? elem.split(' ') : [`${elem}`, undefined]);
// console.log(full_names);
