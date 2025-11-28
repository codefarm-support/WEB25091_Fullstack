const arr = [
  { id: 1, title: "product A", price: 500 },
  { id: 2, title: "product B", price: 300 },
  { id: 3, title: "product C", price: 400 },
  { id: 4, title: "product D", price: 800 },
  { id: 4, title: "product E", price: 600 },
  { id: 4, title: "product F", price: 700 },
  { id: 4, title: "product G", price: 100 },
];

// * Viết hàm sortToCheapest(n, arr)
// * Input: n là 1 số nguyên dương, arr chính là mảng sản phẩm đầu vào.
// * Output: in ra mảng có n sản phẩm rẻ nhất.
// * Nếu n = 0, trả về mảng rỗng, nếu n lớn hơn arr.length, trả về arr. n không phải số hợp lệ, trả về "invalid"

function sortToCheapest(n, arr) {
  let temp = 0;
  let arr2 = [];
  if (n !== 0 && n < arr.length) {
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j]?.price > arr[j + 1]?.price) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    for (let a = 0; a < n; a++) {
      arr2.push(arr[a]);
    }
    console.log(arr2);
    return arr2;
  } else if (n == 0) {
    arr = [];
    console.log(arr);
  } else if (n > arr.length) {
    console.log(arr);
  } else if (Number.isNaN(n)) {
    console.log("invalid");
  }
  return; //...
}

sortToCheapest(3, arr); // => ?
