// console.log(a);
let a = 10;
a = 20;

if (true) {
  let myName = "Hoang";
}

// console.log(myName);

/**
 * Khái báo với var:
 * - Có thể khai báo lại.
 * - Có thể gán lại.
 * - Có thể gọi trước khi khai báo (hoisting) nhưng không nhận được giá trị (undefined).
 * - var có phạm vi sử dụng là global scope.
 */

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

/**
 * var: Không khuyến khích sử dụng, còn dùng vì lý do tương thích ngược.
 * let: dùng để khai báo biến có thể thay đổi được.
 * const: dùng để khai báo các hằng số hoặc các kiểu dữ liệu tham chiếu.
 */
