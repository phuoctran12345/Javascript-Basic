//=========================================================
// thuật toán Max min
var numbers = [5, 10, 2, 8];
var max = numbers[0];
var min = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
}

for (var i = 1; i < numbers.length; i++) {
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log("Max value: " + max);
console.log("Min value: " + min);

//=========================================================
// Tính tăng giảm
// đếm lần tăng với đếm lần giảm

var number1 = [5, 3, 7, 2, 8];

var increaseCount = 0;
var descreaseCount = 0;

for (var i = 0; i < number1.length - 1; i++) {
  if (increaseCount < number1[i + 1]) {
    increaseCount++;
  }
}

for (var j = 0; j < number1.length; j++) {
  if (number1[j] > number1[j + 1]) {
    descreaseCount++;
  }
}

console.log(increaseCount);

console.log(descreaseCount);

//=========================================================
// Tổng các phần tử trong mảng
var matrix = [
  [1, 2],
  [3, 4],
];

var sum = 1;

for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix.length; j++) {
    sum *= matrix[i][j];
  }
}

console.log("" + sum);
