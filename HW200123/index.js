//1. Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции

function checkDate() {
  let date = new Date()
  let currentdate = date.getTime()

  let endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1).getTime();

  console.log('До конца текущего месяца осталось: ' + Math.floor((endOfMonth - currentdate) / (1000 * 60 * 60 * 24)) + ' дней');
}

// checkDate();

// ==========================================================================================
//2. Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

// Предусмотрите вывод 4 пункта (дня, дней)

function isItFridayToday() {
  let currentDay = new Date().getDay();
  let currentString;

  if (currentDay == 5) {
    console.log('Сегодня пятница!');
  } else if (currentDay - 5 == 1) {
    console.log('Пятница была вчера');
  } else if (currentDay - 5 == -1) {
    console.log('Завтра пятница!');
  }
  else {
    let n = 5 - currentDay;
    if (n == 5 || n == 6) {
      currentString = 'дней';
    } else currentString = 'дня';

    console.log(`Пятница будет через ${n} ${currentString}`);
  }
}

// isItFridayToday();

// ==========================================================================================
// 3. Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива по примеру:

// Пример:
let prices = [
  'Цена товара - 1200$',
  'Стоимость - 500$',
  'Цена не определена', '9999',
  'Ценовая категория - больше 300$',
  'Цена за услугу 500 EUR',
]

// console.log(getInfo(prices))
// Результат: [3,3]

function getInfo(arr) {
  let string1 = 'Цена';
  let string2 = '$';
  let result = [];
  let countString1 = arr.reduce((accum, elem) => elem.includes(string1) ? accum += 1 : accum += 0, 0);
  let countString2 = arr.reduce((accum, elem) => elem.endsWith(string2) ? accum += 1 : accum += 0, 0);
  result.push(countString1, countString2)
  return result
}
// console.log(getInfo(prices));

// ==========================================================================================
// 4. Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру: 
let arrays = [
  '89840959944 exampleonemain@mail.ru',
  '+79840959933 forreason@yandex.net',
  'somemail@mail.ru',
  '89840959900 example@gmil.ru',
  '+79840959911',
  'grandthere@mail.ru',
  'jetpackfor@gmail.ru',
  '89840959922 some@yandex.com',
]

// Результат: ['89840959944','+79840959933','89840959900','+79840959911','89840959922'] ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']

let phonesArr = []
let emailArr = []
let regPhone = /^\W*\d{11}/
let regEmail = /\w{2,}@\w{2,}[.]\w{2,}/

for (elem of arrays) {

  let phone = elem.match(regPhone);
  if (phone) {
    phonesArr.push(phone[0])
  }

  let email = elem.match(regEmail);
  if (email) {
    emailArr.push(email[0])
  }
}

console.log(phonesArr);
console.log(emailArr);

// ==========================================================================================
// Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.

// Пример:
	let cards = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859', 
'4000 0016 3556 6899', 
'4000 0017 4456 4699'
]
	
// Результат: [
// '4000*****9499',
// '4000*****7379',
// '4000*****9869',
// '4000*****7859',
// '4000*****6899',
// '4000*****4699'
// ]

let encryptedCards = []
let reg = /\s\d{4}\s\d{4}\s/

for(let card of cards){
encryptedCards.push(card.replace(card.match(reg)[0], '*****'));
}
// console.log(encryptedCards);
