/**
 * ? So sanh:
 *
 *
 *
 */

const a = 10;
const b = 10;

console.log(a === b);

const obj1 = { name: "Hoang" };
const obj2 = { name: "Hoang" };
const obj3 = obj2;
//  * gán địa chỉ ô nhớ của obj2 cho obj3.

console.log(obj1 === obj2); /** Đây là so sanh địa chỉ ô nhớ: false */

obj3.age = 33;
console.log(obj2 === obj3);

console.log(obj2);
console.log(obj3);

// /////////////////////////////

// * Shallow copy:
// * Tất cả các phương thức, vòng lặp thông thường đều là cách sao chép nông.
//* Sao chép nông luôn chỉ sao chép được các giá trị nguyên thuỷ trong một object, array, không thực sự sao chép được các object, array lồng nhau.

const arr1 = [1, 2, 3, { name: "Hoang" }];

const arr2 = [...arr1];

console.log(arr1 === arr2);

arr2.push(1000);
console.log(arr1);
console.log(arr2);

arr1[3].age = 100;

console.log(arr1);
console.log(arr2);

/**
 * * Deep copy:
 *
 */

const arr3 = structuredClone(arr1);

arr3[3].address = "Bac Ninh";
console.log(arr3);
console.log(arr3 === arr2);
console.log(arr2);
console.log(arr1);
