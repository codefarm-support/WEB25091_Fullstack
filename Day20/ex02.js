console.log({ Number });

let a = 10.3456;
let b = 10;
let c = 10 / 3;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite(b));
// console.log(Number.isFinite(c));
// console.log(c);

// console.log(Number.isInteger(a));
// console.log(Number.isInteger(b));
// console.log(Number.isInteger(c));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(new Number("Hoang").valueOf()));
console.log(Number.isNaN(+"hoang"));

/**
 * ? Number.isNaN() thì khác gì với isNaN()
 * * Number.isNaN() chỉ kiểm tra giá trị có phải NaN hay không?
 * * isNaN() ép sang kiểu số, sau đó kiểm tra -> Mục đích thường dùng cho việc kiểm tra xem 1 giá trị bất kỳ có thể chuyển sang thành 1 number hợp lệ được không?
 */

console.log(Number.isNaN("Hoang"));

console.log(isNaN("Hoang"));

// let result = +window.prompt("Moi nhap tuoi");

console.log(Number.parseFloat(10.444));
console.log(Number.parseInt(10.444));
