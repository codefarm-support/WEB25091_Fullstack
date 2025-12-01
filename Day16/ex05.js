/**
 * * some(): cần tối thiểu 1 phần tử được duyệt đều cần thoả mãn -> true.
 *
 * * every(): mỗi phần tử được duyệt đều cần thoả mãn -> true.
 */

const teamLayKinh = [
  { id: 1, name: "Duong Tam Tang", age: 30, gender: "male" },
  { id: 2, name: "Ngo Khong", age: 1000, gender: "male" },
  { id: 3, name: "Bat Gioi", age: 1500, gender: "male" },
  { id: 4, name: "Bo Tat", age: 100000, gender: "female" },
];

console.log(teamLayKinh.some((item) => item.age >= 18));
// * some: Có tối thiểu 1 người từ đủ 18 tuổi.

// * xem arr teamLayKinh có tối thiểu 1 giới tính nữ.
console.log(teamLayKinh.some((item) => item.gender === "female"));

// * xem arr teamLayKinh có tối thiểu 1 giới tính nữ từ đủ 1000 tuổi trở lên không?

console.log(
  teamLayKinh.some((item) => item.gender === "female" && item.age >= 1000)
);

// * Cả arr có phải toàn là nữ không?
console.log(teamLayKinh.every((item) => item.gender === "female"));

// * Cả arr có phải toàn người trên 18 tuổi không?
console.log(teamLayKinh.every((item) => item.age));
