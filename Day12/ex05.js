let i = 0;
console.log(i++);
console.log(i);

/**
 * Hậu tố:
 * - Thực hiện biểu thức với giá trị hiện tại của biến trước, sau đó cập nhật sau.
 *
 * Tiền tố:
 * - Thực hiện cập nhật giá trị của biến trước, sau đó sử dụng giá trị mới này.
 */

let j = 10;

console.log(j++ + --j);

let x = 10;
console.log(x++ + ++x - x-- - --x);

//* ? + ? - ? - ? = ?
//* 10 + 12 - 12 - 10 = 0
