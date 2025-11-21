let date = new Date();
console.log(typeof date);
console.log({ date });
console.log(date.getDate()); // Ngay trong thang
console.log(date.getDay()); // Ngay trong tuan

let date2 = new Date("2025-01-06");
console.log(date2);
console.log(date2.getDay());

/**
 * * > Nhập vào từ bàn phím bất cứ 1 ngày nào dưới dạng yyyy-mm-dd
 * * > In ra ngày đó là thứ mấy (switch case)
 */

switch (3 > 2) {
  case true:
    console.log(`3 thi lon hon 2`);
    break;
  // case false:
  //   console.log(`3 thi khong lon hon 2`);
  default:
    console.log(`3 thi khong lon hon 2`);
}

// switch(bieu thuc dieu kien) {
//   case value:
//     // logic code
// }
