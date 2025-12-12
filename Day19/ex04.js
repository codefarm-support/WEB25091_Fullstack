const student1 = {
  name: "Nhung Nguyen",
  major: "Information Technology",
  score: 8.8,
};

const student2 = Object.create(student1, {
  name: {
    value: "Hoang",
    writable: false,
    configurable: false,
    enumerable: false,
  },

  major: {
    value: "IT",
    writable: true,
    configurable: false,
    enumerable: true,
  },

  email: {
    value: "hoang@gmail.com",
    // gia tri cua key
    writable: false,
    // đại diện cho khả năng ghi đè hoặc bị xoá của key: value
    configurable: false,
    // đại diện cho khả năng đặt lại toàn bộ các giá trị của các thuộc tính các khác
    enumerable: true,
    // Đại diện cho khả năng liệt kê key/value -> nếu true thì key sẽ xuất hiện trong vòng lặp.
  },
});
console.log(student2);

for (let key in student2) {
  console.log(key);
}

student2.email = "phuong@gmail.com";
delete student2.email;
console.log(student2);

const Array2 = Object.create([], {
  length2: {
    writable: false,
    configurable: false,
    enumerable: false,
    value: 10,
  },
});

console.log(Array2);

console.log(new Array(1, 2, 3, 4));
