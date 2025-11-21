/**
 * * Mời người dùng nhập vào x,
 * * In ra x nếu x là số chính phương.
 */
{
  const x = +window.prompt("moi nhap vao x");
  if (Number.isNaN(x)) {
    console.log("x khong hop le!");
  }

  // if (Number.isInteger(Math.sqrt(x))) {
  //   console.log(`${x} la so chinh phuong`);
  // } else {
  //   console.log(`${x} khong la so chinh phuong`);
  // }

  Number.isInteger(Math.sqrt(x)) && console.log(`${x} la so chinh phuong`);

  Number.isInteger(Math.sqrt(x))
    ? console.log(`${x} la so chinh phuong`)
    : console.log(`${x} khong la so chinh phuong`);

  // dieu kien ? thuc hien doan code neu dieu kien dung : thuc hien neu dieu kien sai.
}

// * 1. validation x phai la 1 so?
// * 2. Kiểm tra x
// * 2.1. Tính căn bậc 2 của x. Math.sqrt()
// * 2.2. Kiểm tra giá trị căn bậc 2 này có nguyên.

// * Number
// * Math

// console.log(new Number(10));
// let y = 10;
// console.log(Math);
