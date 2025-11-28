/**
 * * 1. Các phương thức thay đổi mảng gốc: pop, push, shift, unshift, slice, splice, reverse, flat, concat...
 * * 2. Các phương thức tìm kiếm:  includes, some, every, find, filter
 * * 3. Các phương thức khác: reduce, map, foreach
 * * 4. Sao chép và so sánh array/object.
 * * 5. ES6 với array: rest, spread, destructuring
 */

/**
 * * push thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
 * * pop cắt bỏ 1 phần tử cuối mảng và trả về chính phần tử bị loại bỏ.
 *
 * * unshift thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
 * * shift cắt bỏ 1 phần tử đầu mảng và trả về chính phần tử bị loại bỏ.
 */

const arr = ["a", "b", "c", "d"];
console.log(arr.push("e", "f"));
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift("Hoang", "Codẻ"));

console.log(arr);
