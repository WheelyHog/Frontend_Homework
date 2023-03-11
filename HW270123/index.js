// 1. Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys() согласно примеру:
// Пример:
let someObj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
}

function getKeys(obj) {
  let array_keys = [];
  for (key in someObj) {
    array_keys.push(key)
  }
  return array_keys
}
// console.log(getKeys(someObj));

// console.log(array_keys)

// Результат: ['key1','key2','key3','key4']

// =====================================================
// 2. Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение
// Пример: 
// let arr = [1,2,3,4,5]

function getAvg(arr) {
  return (arr.reduce((el, accum) => accum += el)) / arr.length;
}
// console.log(getAvg(arr));

// Результат: 3

// =========================================================
// 3. Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’
// Пример: 
let array = [1, true, '3', 'value1', 9, 'key'];
// 1 вариант
function countString(array) {
  let result = array.filter(el => typeof el == 'string').length;
  console.log(result);
}

// countString(array);

// 2 вариант
function countString2(array){
  let result = array.reduce((accum, elem) => typeof elem == 'string' ? accum+=1 : accum, 0);
  console.log(result)
}

// countString2(array);
// Результат: 3

// =========================================================
// 4. Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.entries() согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }
// Примечание: Использовать класс Object нельзя

// 1 вариант
function getEntries(obj) {
  let array_keys = [];
  for (key in someObj) {
    array_keys.push([key, someObj[key]])
  }
  return array_keys
}
// console.log(getEntries(someObj));


// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]

// =========================================================
// 5. Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива


// Пример: 
let arr = [1, true, '3', 'value1', 9, 'key']

let obj = {}
function foo(arr){
for(index in arr){
obj[`key${++index}`] = arr[index]
}
return obj
}

console.log(foo(arr));

// 	Результат:
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }


