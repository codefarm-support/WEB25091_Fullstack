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

  let string = "";
  let length = arguments.length;

  for (let i = 0; i < length; i++) {
    console.log(arguments[i]);
    if (i !== length - 1) {
      string += JSON.stringify(arguments[i]) + " ";
    } else {
      string += JSON.stringify(arguments[i]);
    }
  }
  return string;
}

console.log(
  consoleCopy(
    1,
    true,
    null,
    "Hoang",
    "CodeFarm",
    { fullname: "Nguyen Minh Hoang" },
    [1, 2, 3]
  )
);
/**
 * * Viết hàm sumary có tính chất sau:
 * * - Nhập vào số lượng đối số bất kỳ không giới hạn.
 * * - Kiểm tra và ép kiểu cho các phần tử sang kiểu số.
 * * - Với những giá trị không hợp lệ -> bỏ qua.
 * * - Với các giá trị hợp lệ, tính tổng, trung bình cộng và trung vị, sau đó trả ra 3 giá trị này trong 1 object {sum: ?, mean: ?, median: ? }
 */

function sumary() {
  const objSumary = {
    sum: 0,
    mean: null,
    median: null,
  };
  for (let i = 0; i < arguments.length; i++) {
    let number = +arguments[i];
    if (!Number.isNaN(number)) {
      // * SUM
      // * MEAN
      // * MEDIAN
    }
  }

  return objSumary;
}
