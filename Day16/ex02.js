/**
 * ! reverse (toReversed)
 */

const arr = ["superAdmin", "manager", "staff"];

// console.log(arr.reverse());
// console.log(arr);

console.log(arr.toReversed());
console.log(arr);

/**
 * * Viết 1 hàm symmetricalArr(arr) bất kỳ nhập vào một mảng, kiểm tra xem mảng có đối xứng hay không?
 */

function symmetricalArr(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
}

function symmetricalArr2(arr) {
  const toReversed = arr.toReversed();
  for (let i = 0; i < arr.length; i++) {
    if (toReversed[i] !== arr[i]) return false;
  }
  return true;
}
