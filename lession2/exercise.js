// var sum = 0;

// var inventory = [
//   { name: "Laptop", price: 15000000, stock: 2 },
//   { name: "Chuot", price: 200000, stock: 0 },
//   { name: "Ban phim", price: 500000, stock: 3 },
//   { name: "Tai nghe", price: 300000, stock: 1 },
// ];

// for (var i = 0; i < inventory.length; i++) {
//   sum += inventory[i].price * inventory[i].stock;
// }

// console.log(sum);


// Tính tổng điểm của các môn học được chọn
var sum = 0;

var scores = [
  { sub: "Toan", score: 8 },
  { sub: "Ly", score: 7 },
  { sub: "Hoa", score: 9 },
  { sub: "Anh", score: 6 },
  { sub: "Toan", score: 10 },
];

var selectedSub = ["Toan", "Hoa"];

for (var i = 0; i < scores.length; i++) {
  for (var j = 0; j < selectedSub.length; j++) {
    if (scores[i].sub === selectedSub[j]) {
      sum += scores[i].score;
    }
  }
}
console.log(sum);
// console.log("hello");
