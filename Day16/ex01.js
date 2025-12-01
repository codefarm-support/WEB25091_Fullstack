const arr = [1, 2, 3, 4];
// arr.push(5);
// arr.unshift(100);

console.log(arr.slice(1, 3));
console.log(arr.slice(3, 1));
console.log(arr);

console.log(arr.slice(-3, -1));
console.log(arr.slice(-3));

/**
 * * slice(start, end)
 * * 1. Sao chép 1 phần của mảng, không làm thay đổi mảng gốc.
 * * 2. Chỉ số âm được đếm từ cuối mảng, bắt đầu từ -1.
 * * 3. Nếu chỉ truyền 1 tham số, thì end = arr.length (clone đến hết mảng.)
 *
 *
 * ! splice(start, length, ...items)
 * * splice là 1 phương thức đa năng, vừa có thể thêm, xóa, cập nhật mảng ở bất cứ vị trí nào của mảng.
 */

const teamLayKinh = ["Su phu", "Ngo Khong", "Bat Gioi"];

console.log(teamLayKinh.splice(1, 2, "Sa Tang", "Huy"));
console.log(teamLayKinh);
