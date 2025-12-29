/**
 * * Thao tác với Element Node
 * * Thao tác với Attribute Node
 * * Thao tác với Text Node
 * * Các thao tác khác.
 * * Sự kiện và xử lý sự kiện
 * * Làm việc với form.
 *
 */

let prod1 = document.getElementById("product-title");
let prod2 = document.getElementsByClassName("product-name");
let prod3 = document.getElementsByTagName("h2");
let prod4 = document.querySelector(
  "div.product > h2#product-title.product-name"
);
let prod5 = document.querySelectorAll("h2.product-name");

console.log(prod1);
// console.log(typeof prod1);
// console.log({ prod1 });
// * Lấy phần tử đầu tiên theo id. -> số ít
console.log(prod2[0]);
// * Lấy tất cả các phần tử theo class -> số nhiều
console.log(prod3[0]);
// * Lấy tất cả các phần tử theo tên thẻ -> số nhiều
console.log(prod4);
// * Lấy phần tử đầu tiên khớp bộ chọn CSS.
console.log(prod5[0]);
// * Lấy tất cả các phần tử khớp bộ chọn CSS.
