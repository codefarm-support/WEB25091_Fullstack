/**
 * * 1. Các phương thức thay đổi mảng gốc: pop, push, shift, unshift, slice, splice, reverse, flat, concat...
 * * 2. Các phương thức tìm kiếm:  includes, some, every, find, filter
 * * 3. Các phương thức khác: reduce, map, foreach
 * * 4. Sao chép và so sánh array/object.
 * * 5. ES6 với array: rest, spread, destructuring
 */

// const students = [
//   { id: 1, name: "Nguyen Minh Hoang", gender: "Male", address: "Bắc Ninh" },
//   { id: 2, name: "Le Quoc Huy", gender: "Male", address: "Hà Nội" },
//   { id: 3, name: "Phan Thi Phuong", gender: "Female", address: "Hà Nội" },
//   {
//     id: 4,
//     name: "Tran Thi Thu Hương",
//     gender: "Female",
//     address: "Ho Chi Minh",
//   },
// ];

/**
 * * viết hàm filterByGender
 * * tham số 1: arrStudents
 * * tham số 2: giới tính.
 * * return: trả về mảng mới với toàn những students có giới tính chỉ định
 */
// Lọc những phần tử thoả mãn điều kiện và trả về một mảng mới

// function filterByGender(arr, gender) {
//   // logic
//   return students.filter((item) => item.gender === gender);
// }
// console.log(filterByGender(students, "Female"));

// * addToCart(cart, product)
// * Nếu sản phẩm chưa tồn tại trong cart, thêm mới với quantity = 1.
// * Nếu đã tồn tại, tăng quantity lên 1.
// Goi y : su dung find , push
const products = [
  {
    id: "p1",
    name: "iPhone 15 Pro Max",
    price: 33990000,
    image: "/img/p1.jpg",
  },
  { id: "p2", name: "Galaxy S24 Ultra", price: 28990000, image: "/img/p2.jpg" },
  { id: "p3", name: "MacBook Air M3", price: 25990000, image: "/img/p3.jpg" },
  { id: "p4", name: "AirPods Pro 2", price: 5790000, image: "/img/p4.jpg" },
  { id: "p5", name: "Xiaomi 14", price: 17990000, image: "/img/p5.jpg" },
];

const carts = [
  {
    userId: "user123",
    items: [
      { productId: "p1", qty: 1, selected: true },
      { productId: "p4", qty: 2, selected: true },
    ],
  },
  {
    userId: "user456",
    items: [
      { productId: "p2", qty: 1, selected: false },
      { productId: "p3", qty: 1, selected: true },
    ],
  },
];
function addToCart(cart, product) {}

// * removeFromCart(cart, id)
// * Nếu quantity > 1, giảm quantity.
// * Nếu quantity = 1, xoá sản phẩm khỏi giỏ hàng.
// Goi y: su dung filter
function removeFromCart(cart, id) {}
// * getTotal(cart)
// * Tính tổng tiền (price * quantity).
function getTotal(cart, id) {}
