// var a = 5;
// do {
//   console.log(a);
// } while (a > 6);

// const { Console } = require("console");

//keywork break ; continue
// for (var i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// var age = 1;
// switch (age) {
//   case 1:
//     console.log("1 tuổi");

//   case 2:
//     console.log("2 tuổi");

//   case 3:
//     console.log("3 tuổi");

//   case 4:
//     console.log("4 tuổi");

//   case 5:
//     console.log("5 tuổi");

//   case 6:
//     console.log("6 tuổi");

//   default:
//     console.log("....");
// }

//
// var sum = 0;
// var arr = [1, 2, 3, 4, 5];

// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// var sum = [(price = 0), (quantity = 0)];
// var sum = [{ price: 0, quantity: 0 }];
var sum1 = 0;
var sum2 = 0;

var result = 0;
var products = [
  { price: 50, quantity: 2 },
  { price: 150, quantity: 1 },
];
// var i = [{ price: 0, quantity: 0 }];

for (var i = 0; i < products.length; i++) {
  //   sum1 += products[i].price;
  //   sum2 += products[i].quantity;

  result += products[i].price * products[i].quantity;
}
// console.log("price: " + sum1 + " quantity: " + sum2);

console.log(result);
