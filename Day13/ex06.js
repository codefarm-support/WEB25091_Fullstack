/*
 * * Cho một chuỗi bất kỳ, đếm xem chuỗi đó có bao nhiêu ký tự "a"
 */

// let string = "CodeFarm - Hoc lap trinh cung doanh nghiep!";

// let countA = 0;
// for (let i = 0; i < string.length; i++) {
//   string[i] === "a" && countA++;
// }
// console.log(countA);

/**
 * Bước 1: Tạo biến tích lũy countA
 * Bước 2: Nếu tìm thấy "a" thì tăng countA
 */
let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// While kiem tra dieu kien ngay tu dau khi dieu kien dung thi moi chay vong lap
// chu y: them dieu kien ket thuc -> infinite loop

// do {
//   console.log(i);
//   i++;
// } while (i < 5);
//Chay toi thieu mot lan

// * yeu cau nguoi dung nhap tu ban phim so > 0 neu nguoi dung nhap so < 0 yeu cau nhap lai
// * bat buoc phai la so
let n = Number(window.prompt("nhap so:"));
while (isNaN(n) || n <= 0) {
  n = window.prompt("So khong hop le, nhap lai:");
}
console.log("so hop le", n);
