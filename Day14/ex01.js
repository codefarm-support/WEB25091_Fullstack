/**
 * 1. declaration function (named function)
 * 2. expression function
 * 3. Arrow function
// 4. IIFE
// từ khóa return, agrs,
// * Async function
// * Constructor function
// * Generate function
// * Hàm đệ quy
// * HOF
 */

/**
 * * Nhu cầu khi nào thì cần tạo hàm:
 * * 1. Tái sử dụng code.
 * * 2. Tạo một scope riêng biệt tránh ảnh hưởng đến global scope và khó maintain.
 * * 3. Dễ mở rộng với tư duy input, output
 */

console.log(sum(2, 3));

function sum(a, b) {
  // logic more...
  return a + b;
}

console.log(sum2(2, 3));
const sum2 = function () {
  console.log("hello");
};

document.getElementById("form").addEventListener(
  "submit",
  // anonymous function
  function () {
    console.log("submit form");
  }
);

const myAuth = {
  email: "hoang@gmail.com",
  password: "123",
  login: function () {
    console.log("Dang nhap thanh cong");
  },
};
