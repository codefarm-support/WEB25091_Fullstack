// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
let i = 0;
for (;;) {
  if (i <= 10) {
    console.log(i++);
  } else {
    break; // >< continue
  }
}

/**
 * * Bước 1: Khai báo và gán giá trị ban đầu cho biến đếm.
 * * Bước 2: Kiểm tra điều kiện, nếu đúng thực hiện block code, nếu sai -> thoát vòng lặp.
 * * Bước 3: Thực hiện bước nhảy và quay lại bước 2.
 */

// hãy in ra các số chẵn từ 0 đến 10

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
