/**
 * * MAP dữ liệu API sang dạng bảng
 * * VD: Id: 1, name: Viet, Full Address : Hanoi-Cau Giay
 */

const users = [
  { id: 1, name: "Viet", address: { city: "Hanoi", district: "Cau Giay" } },
  { id: 2, name: "Trang", address: { city: "HCM", district: "Q1" } },
];

/**
 * * Chuyển chuỗi thành mảng object có cấu trúc
 * * VD: str= "viet:8,trang:9.5,minh:7"
 * * -> [{name: viet, score:8},{name: trang, score: 9.5},{name: minh,score: 7}]
 */
