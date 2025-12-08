const arr = [1, 2, 3, 4];

const result = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log({ accumulator, currentValue, currentIndex, array });
  accumulator = accumulator + currentValue;
  return accumulator;
}, 0);

console.log(result);

/**
 * * Reduce
 * * callback: accumulator: biến tích luỹ, currentValue: giá trị của phần tử tại lần duyệt đó, currentIndex: index của phần tử tại lần duyệt đó, array.
 * * initialValue: là giá trị acc được nhận ở lần lặp đầu tiên, được gọi là giá trị khởi tạo -> thường giá trị này quyết định kiểu dữ liệu trả về.
 * * Return của lần lặp trước là accumulator của lần lặp sau
 * * Reduce thường dùng cho bài toán: phân loại, nhóm, đếm, loại bỏ trùng lặp, tính tích luỹ
 *
 */

const cart = [
  {
    id: "p1",
    name: "iPhone 15 Pro Max",
    price: 33990000,
    quantity: 2,
    image: "/img/p1.jpg",
  },
  {
    id: "p2",
    name: "Galaxy S24 Ultra",
    price: 28990000,
    quantity: 1,
    image: "/img/p2.jpg",
  },
  {
    id: "p3",
    name: "MacBook Air M3",
    price: 25990000,
    quantity: 3,
    image: "/img/p3.jpg",
  },
  {
    id: "p4",
    name: "AirPods Pro 2",
    price: 5790000,
    quantity: 5,
    image: "/img/p4.jpg",
  },
  {
    id: "p5",
    name: "Xiaomi 14",
    price: 17990000,
    quantity: 10,
    image: "/img/p5.jpg",
  },
];

const total = cart.reduce((acc, cur) => {
  acc += cur.price * cur.quantity;
  return acc;
}, 0);

console.log(total.toLocaleString());

/**
 * * Tính tổng tiền của giỏ hàng bằng reduce.
 */
