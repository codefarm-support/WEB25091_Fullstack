// const arr = [1, 3, 5, 2, 6, -1, 100];

// console.log(arr.sort());

// const arr2 = ["Hoang", "Phuong", "Anh", "Huynh", "Hoa", "Ha", "Yen"];

// console.log(arr2.sort());

// console.log(arr.sort((a, b) => b - a));

/**
 * * sort:
 * * mặc định sẽ sắp xếp theo chuỗi (ASCII)
 * * sort thay đổi mảng gốc
 */

const products = [
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

/**
 * * 1. Sắp xếp mảng sản phẩm trên theo giá tăng dần.
 * * 2. Sắp xếp mảng theo quantity giảm dần.
 * * 3. Sắp xếp theo tên a-z
 * * Gợi ý: dùng toSorted()
 */

const arr1 = products.toSorted((a, b) => a.price - b.price);

console.log(arr1);

const arr2 = products.toSorted((a, b) => b.quantity - a.quantity);

console.log(arr2);

const arr3 = products.toSorted((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.log(arr3);

const arr4 = products.toSorted((a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  return 0;
});

console.log(arr4);
