// 1 -----------------

// function makeArray (num, str){
//   let array = [];
//   for (let i = 0; i< num; i++){
//     array.push(str);
//   }
//   console.log(array);
// }

// makeArray(10, "hedgehog");


// 2 ----------------
// function makeNewArray(num, str) {
//   let obj = {};
//   for (i = 0; i < num; i++) {
//     obj[str + i] = str + i;
//   }
//   console.log(obj);
// }

// makeNewArray(3, "cat");


// 3 ---------------------
// let sumEven = 0;
// let sumOdd = 0;
// function getArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sumEven += arr[i];
//     } else sumOdd += arr[i];
//   }
//   console.log("sumEven = " + sumEven + "; " + "sumOdd = " + sumOdd);
// }

// function biggerNum(sumEven, sumOdd) {
//   if (sumEven > sumOdd) {
//     console.log("bigger is sumEven: " + sumEven);
//   } else if (sumEven < sumOdd) {
//     console.log("bigger is sumOdd: " + sumOdd);
//   } else console.log("sumEven and sumOdd are equal");
// }

// getArray([2, 53, 65, 5, 67, 23, 90, 56, 17, 34, 0, -7, 5])
// biggerNum(sumEven, sumOdd);


// 4 -----------------
// function tempFar(tempC) {
//   tempFar = tempC * 1.8 + 32;
//   console.log(tempC + " degrees in Celsium = " + (Math.round(tempFar) + " degrees in Fahrenheit"));
// }
//
// tempFar(37);



const display = document.getElementById("название_моего div");

 let result = "";
 car.forEach((item) => {const htmlDiv = <h1>${item.title, .price, .count }</h1>;result += htmlDiv;});
display.innerHTML = result;
