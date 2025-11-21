/**
 * * > Nhập vào từ bàn phím bất cứ 1 ngày nào dưới dạng yyyy-mm-dd
 * * > In ra ngày đó là thứ mấy (switch case)
 */

/**
 *
 */

let date = new Date(window.prompt("moi nhap ngay dinh dang yyyy-mm-dd"));

// switch (date.getDay()) {
//   case 0:
//     console.log("Chu nhat");
//     break;
//   case 1:
//     console.log("Thu 2");
//     break;
//   case 2:
//     console.log("Thu 3");
//     break;
//   case 3:
//     console.log("Thu 4");
//     break;
//   case 4:
//     console.log("Thu 5");
//     break;
//   case 5:
//     console.log("Thu 6");
//     break;
//   case 6:
//     console.log("Thu 7");
//     break;
//   default:
//     console.log("Invalid");
//   //
// }

/**
 * * Nếu từ thứ 2 đến thứ 6 thì chỉ cần in ra là "ngày trong tuần, đi làm", còn lại thì in ra "cuối tuần"
 */
// * DRY = Don't Repeat Youself

switch (date.getDay()) {
  case 0:
  case 6:
    console.log("Cuoi tuan");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Trong tuan");
    break;
  default:
    console.log("Invalid");
}

switch (date.getDay()) {
  case (0, 6):
    console.log("Cuoi tuan");
    break;
  case (1, 2, 3, 4, 5):
    console.log("Trong tuan");
    break;
  default:
    console.log("Invalid");
}
