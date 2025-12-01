/**
 * * concat: gom các mảng và các value thành mảng mới.
 * * flat(deeth): làm phẳng mảng.
 * * - deeth default value = 1.
 * * - làm phẳng hết: truyền Infinity.
 * * - Ngoài tác dụng làm phẳng, flat còn sửa được mảng thưa.
 */

const arr1 = ["Hoang", "Phuong"];
const arr2 = ["Quoc", "Huy"];

// console.log(arr1.concat(arr2, ["alo"], "X", 1, [[1000]]));
// console.log(arr1);
// console.log(arr2);

const arr = [1, 2, , , , 3, [4], [[5, , , , 6]], [[[7]]]];
console.log(arr);

console.log(arr.flat(Infinity));
