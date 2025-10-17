// Kĩ thuật đặt cờ
//Dùng để : kiểm tra sự tồn tại hoặc tính chất trong
//Kiểm tra trong mảng có số chẵn hãy không
var numbers = [1, 3, 5, 8];
var isEvenFound = false;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    isEvenFound = true;
    break;
  }
}
if (isEvenFound) {
  console.log("Có số chẵn");
} else {
  console.log("Không có số chẵn");
}

//Kiểm tra mảng gỉam dần
var numbers1 = [10, 8, 6, 4];
var isDescreating = true;
for (var i = 0; i < numbers1.length - 1; i++) {
  if (numbers1[i] <= numbers[i + 1]) {
    isDescreating = false;
    break;
  }
}

console.log(isDescreating ? "Giảm dần" : "không giảm dần");
