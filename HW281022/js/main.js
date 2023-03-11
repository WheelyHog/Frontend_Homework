let num = prompt("Enter a number:");
if (num === "0") {
  alert("This number is equal 0");
} else if (num % 2 == 0) {
  alert("This number is even");
} else {
  alert("this number is odd");
}

// ++++++++++++++++++++++++++++++++++

let string = prompt("Enter a number:");
if (isNaN(string)){
  alert("This number cannot be converted to a number. It become a NaN.");
} else alert("This number can be converted");