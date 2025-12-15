console.log(Math);
console.log(Math.sqrt(16));

console.log(Math.min(1, 2, 34, 4, 5, 65, 6, 77, 7, 88, 8, 8));
console.log(Math.max(1, 2, 34, 4, 5, 65, 6, 77, 7, 88, 8, 8));
console.log(Math.random());

const students = ["Hoang", "Hoa", "Trung", "Dung", "Tien", "Huy"];
/**
 * * Viết hàm randomStudents() đưa vào students và return ngẫu nhiên 1 bạn bất kỳ.
 */

console.log();

function randomStudents(students) {
  const length = students.length;
  return students[Math.floor(Math.random() * length)];
}

console.log(randomStudents(students));

/**
 * Làm tròn với Mạth
 * * Floor:
 * ! Làm tròn xuống, trả về nguyên
 * * Trunc:
 * ! Làm tròn bằng cách bỏ đi phần thập phân. (khác so với floor khi làm việc với số âm)
 * * Ceil:
 * ! Luôn làm tròn lên.
 * * Round:
 * ! Làm tròn tới số nguyên gần nhất (trường hợp đúng bằng 0.5 thì làm tròn lên)
 */

console.log(Math.floor(-10.9));
console.log(Math.trunc(-10.9));
console.log(Math.ceil(10.001));
