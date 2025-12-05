const numbers = [1, 2, 3, 4];

const result = numbers.map((item) => {
  return item * 2;
});

console.log(numbers * 2);
console.log(result);

const VIP = [
  { id: 1, firstName: "Long", lastName: "Ly Tieu" },
  { id: 2, firstName: "Donal", lastName: "Trump" },
  { id: 3, firstName: "Phương", lastName: "Bùi Minh" },
];

/**
 * ? Dùng map để biến mảng VIP thành mảng VIP2 có bổ sung cho mỗi người 1 trường là fullName = firstName + " " + LastName
 */

const VIP2 = VIP.map((item) => ({
  ...item,
  fullname: item.firstName + " " + item.lastName,
}));
console.log(VIP2);

/**
 * 1 point
 * * Làm lại bài về students với phương thức map() và phương thức join()
 * * Bổ sung thêm tính năng: ai xuất sắc thì tô background-color: orange cả dòng.
 */
