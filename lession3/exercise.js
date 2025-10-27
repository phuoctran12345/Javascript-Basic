//=========================================================
// Kiểm tra mảng có tất cả dương không
var numbersPositive = [1, 2, 3];

var numbersNagative = [];

var arrRong = [];

var flag = true;

if (numbersPositive.length === 0) {
  console.log("mang rỗng");
} else {
  for (var i = 0; i < numbersPositive.length; i++) {
    if (numbersPositive[i] > 0) {
      flag = false;
      break;
    }
  }

  if (flag) {
    console.log("Co so duong");
  } else {
    flag = false;
    console.log("Khong so duong");
  }
}

// var redFlag = true;

// for (var j = 0; j < numbersNagative.length; j++) {
//   if (numbersNagative[j] <= 0) {
//     redFlag = false;
//     break;
//   }
// }

// console.log(redFlag ? "Tất cả là số Dương" : "Cố số không Dương");

//=========================================================
// Kiểm tra mảng có điểm thi đạt yêu cầu

// var scores = [
//   { sub: "Toan", score: 9 },
//   { sub: "Ly", score: 6 },
//   { sub: "Hoa", score: 5 },
//   { sub: "Van", score: 6 },
// ];
// // var selectedSub = ["Toan", "Ly"];
// var check = false;

// for (var i = 0; i < scores.length; i++) {
//   if (scores[i].sub === "Toan" || scores[i].sub === "Ly") {
//     if (scores[i].score > 8) {
//       check = true;
//       break;
//     }
//   }
// }

// console.log(
//   check
//     ? "Co mon toan hoac ly dat tu diem 8 tro len"
//     : "Khong Co mon toan hoac ly dat tu diem 8 tro len"
// );

//==============================================================================
//Kiểm tra sản phẩm còn hàng
// var products = [
//   { name: "But", stock: 0 },
//   { name: "Sach", stock: 0 },
//   { name: "Tay", stock: 0 },
// ];

// var doubleCheck = false;
// for (var i = 0; i < products.length; i++) {
//   if (products[i].stock > 0) {
//     doubleCheck = true;
//     break;
//   }
// }

// console.log(
//   doubleCheck ? "Có sản phẩm còn hàng" : "Không có sản phẩm còn hàng"
// );

//==============================================================================
//Kiểm tra mảng có số lớn hơn 10 không

// var numbersTracking = [3, 7, 11, 9, 4];

// var numberCheckkkk = false;
// for (var i = 0; i < numbersTracking.length; i++) {
//   if (numbersTracking[i] < 10) {
//     flag = true;
//     break;
//   }
// }

// console.log(numberCheckkkk ? "K có số mo lớn hơn 10" : "có số lớn hơn 10");
