let string = "Hoang";

const age = 33;

console.log(new String("Huy"));
console.log(typeof new String("Huy"));

console.log(string.toUpperCase());

/**
 * * Boxing là hành vi đóng gói giá trị nguyên thuỷ thành object để thực hiện mục đích nào đó.
 * * Auto boxing là khả năng tự động đóng gói thành object của các giá trị nguyên thuỷ để truy cập phương thức, thuộc tính khi thực hiện lệnh, sau khi hoàn tất, giá trị nguyên thuỷ lại được unboxing.
 * * Trong thực tế nên khai báo giá trị nguyên thuỷ là nguyên thuỷ thay vì dùng hàm khởi tạo để tiết kiệm bộ nhớ, tăng hiệu suất.
 */

// * string -> String
// * number -> Number
// * boolean -> Boolean

console.log(new Boolean(true));
console.log(new Boolean(true).toString());
console.log(new Boolean(true).valueOf());
