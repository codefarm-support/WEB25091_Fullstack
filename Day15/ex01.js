// // * (): gọi hàm, trả về, gom biểu thức toán học.
// // * {}: object, block code(if...else, switch, for, function).
// // * []: array
// // * <>: typescript

// const products = [];

// const arr = [1, 2, 3, 4, 5, 6];

// // * tuy khai báo với const nhưng object, hay array đều cập nhật được nội dung bên trong vì chúng là kiểu dữ liệu tham chiếu.
// const categories = ["ao phong", "quan jean", , , , "vest nam"]; // * mảng thưa
// const students = ["Phuong"];
// const tags = new Array("html", "js");

// console.log(categories[3]);
// console.log(categories.length); // length = index phần tử cuối + 1.
// console.log(categories);

// * Object kiểu array

// console.log((categories[2] = "phu kien"));
// console.log(categories[1000]);
// console.log(categories[-1]);

const arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.length);
arr2.length === 10;
// console.log(arr2);
// console.log(arr2.length);

for (let index = 0; index < arr2.length; index++) {
  const element = arr2[index];
  console.log(element);
}

// * for...of: duyệt qua từng phần tử của mảng.
const students = ["Dam", "Phuong", "Obama"];
for (const element of students) {
  console.log(element);
}

// * for...in: duyệt qua từng key của object.
for (const index in students) {
  console.log(index);
}
