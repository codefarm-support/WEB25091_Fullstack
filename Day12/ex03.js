// console.log(a);
let a = 10;
a = 20;

if (true) {
  let myName = "Hoang";
}

// console.log(myName);

/**
 * Khai bao voi let
 * - không khai báo lại được (trong cùng 1 block scope).
 * - gán lại được.
 * - có hoisting nhưng giá trị bị rơi vào vùng TDZ và không thể truy cập trước khai báo.
 * - có phạm vi hoạt động là block scope
 */

const pi = 3.14;
pi = 10;
console.log(pi);

/**
 * Khai bao voi const
 * - không khai báo lại được (trong cùng 1 block scope).
 * - không gán lại được (có thể thay đổi bên trong với các kiểu dữ liệu tham chiếu - referencetype).
 * - có hoisting nhưng giá trị bị rơi vào vùng TDZ và không thể truy cập trước khai báo.
 * - có phạm vi hoạt động là block scope
 */
