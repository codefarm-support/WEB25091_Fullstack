/**
 * !
 * AND (&&):
 * * Toán tử AND kiểm tra các vế của điều kiện từ trái qua phải và sẽ dừng kiểm tra khi gặp falsy values -> trả về falsy value tìm được.
 * * Nếu biểu thức không có falsy values -> nhận giá trị thuộc vế cuối cùng.
 *
 * OR (||)
 * * Toán tử OR kiểm tra các vế từ trái qua phải và sẽ dừng kiểm tra khi gặp truthy values -> trả về truthy value.
 * * Nếu không tìm được giá trị truthy value -> nhận vế cuối.
 */

// console.log(!true);
// console.log(!"Hoang");
// console.log(!0);
// console.log(!"0");
// console.log(!!"Hoang");

console.log(true && false);
console.log("Hoang" && 1 && [] && "CodeFarm" && null);
console.log("Hoang" && "Phuong");
const myInfor = {
  email: "hoang@gmail.com",
};

console.log(myInfor && myInfor.email);

console.log("" || null || undefined || 0 || "CodeFarm" || NaN);

console.log([] || ("OR" && "AND")); // []
