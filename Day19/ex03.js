const student = {
  name: "Nhung Nguyen",
  major: "Information Technology",
  score: 8.8,
};

// console.log(new Object(1).valueOf()); // object literal
// console.log(Object.create(null)); // object null

const student2 = Object.create(student);

student2.name = "Hoang";

console.log(student2);

/**
 * * properties là các thuộc tính, phương thức của chính object đó.
 * * prototype: là các thuộc tính, phương thức kế thừa từ hàm tạo.
 * * Có thể dùng phương thức tĩnh Object.create() để tạo ra liên kết kế thừa.
 */

// console.log(student2.name);
// console.log(student2.major);
// console.log(student2.score);

// const User = {};

// const Student = Object.create(User);
// const Teacher = Object.create(User);
