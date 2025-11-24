// function sum(a, b) {
//   console.log(a + b);
// }

// sum(2, 3);

// const result = sum(10, 20);
// console.log({ result });

/**
 * * Hàm không có return trả về undefined.
 * * Code sau return sẽ không được thực hiện
 */

// function checkEven(n) {
//   if (n % 2 === 0) {
//     console.log("n la so chan");
//     return;
//   }
//   console.log("n la so le");
// }

// checkEven(10);

// function test() {
//   console.log(arguments);
//   console.log(typeof arguments);
// }

// test();

// console.log(1);
// console.log(1, 2, 3, 4, "Hoang");

/**
 * * Viết hàm cosoleCopy
 * * Input: nhận vào số lượng phần tử không biết trước, các phần tử cách nhau dấu ",",
 * * Output: trả về chuỗi các phần tử này nối với nhau bởi dấu cách.
 * */

function consoleCopy() {
  console.log(Array.isArray(arguments)); // false.
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    // * Logic để trả về chuỗi các phần tử nối với nhau bởi dấu cách.
  }
}

consoleCopy(1, 2, 3);
/**
 * Viết hàm sumary có tính chất sau:
 * - Nhập vào số lượng đối số bất kỳ không giới hạn.
 * - Kiểm tra và ép kiểu cho các phần tử sang kiểu số.
 * - Với những giá trị không hợp lệ -> bỏ qua.
 * - Với các giá trị hợp lệ, tính tổng, trung bình cộng và trung vị, sau đó trả ra 3 giá trị này trong 1 object {sum: ?, mean: ?, median: ? }
 */
