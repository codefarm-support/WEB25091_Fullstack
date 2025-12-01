/**
 * * includes: Chỉ áp dụng được với primitive type.
 * * find(callback): Trả về phần tử đầu tiên tìm thấy phù hợp điều kiện
 */

const students = [
  "Huy",
  "Thinh",
  "Jack",
  { fullname: "Nguyen Minh Hoang", age: 18 },
];

// console.log(students.includes("Jack"));
// console.log(students.includes("Donal Trump"));
// console.log(students.includes({ fullname: "Nguyen Minh Hoang" }));
// console.log(students.find((item) => item.fullname === "Nguyen Minh Hoang"));

const teamLayKinh = [
  { id: 1, name: "Duong Tam Tang", age: 30 },
  { id: 2, name: "Ngo Khong", age: 1000 },
  { id: 3, name: "Bat Gioi", age: 1500 },
];

/**
 * * Tìm ra nhân vật đầu tiên từ đủ 1000 tuổi bằng find()
 * * Tìm ra nhân vật cuối cùng từ đủ 1000 tuổi bằng findLast()
 * * Tìm ra vị trí của nhân vật đầu tiên từ đủ 1000 tuổi bằng findIndex()
 * * Tìm ra vị trí nhân vật cuối cùng từ đủ 1000 tuổi bằng findLastIndex()
 */

console.log(teamLayKinh.find((item, index) => item.age >= 1000));
console.log(teamLayKinh.findLast((item, index) => item.age >= 1000));
console.log(teamLayKinh.findIndex((item, index) => item.age >= 1000));
console.log(teamLayKinh.findLastIndex((item, index) => item.age >= 1000));
