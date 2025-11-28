const arr = [1, 2, null, NaN, undefined, "Hoang", 0, 1000, "", false];

//* Tạo ra 1 mảng mới loại bỏ các falsy values ở mảng arr (không được dùng method, chỉ dùng vòng lặp for/for...of)

/**
 * false
 * 0, -0
 * null
 * NaN
 * undefined
 * ""
 */

const newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    newArr[newArr.length] = arr[i];
  }
}

console.log(newArr);
