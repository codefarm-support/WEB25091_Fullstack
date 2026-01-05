const cart = [
  { id: 1, name: "RAM 16GB", price: 300, quantity: 2 },
  { id: 2, name: "Xiaomi redme R1", price: 1000, quantity: 1 },
  { id: 3, name: "Airpod", price: 200, quantity: 3 },
];

/**
 * ? 1. Hiển thị danh sách sản phẩm lên màn hình dạng bảng.
 * * - truy cập 1 phần tử nào đó trong DOM.
 * * - Tạo ra content dạng bảng.
 * * - Gắn content vào phần tử của DOM.
 * ? 2. Nếu sản phẩm nào có giá từ 500 đô, in đậm cả dòng, và text có màu đỏ (dùng css với js).
 * ? 3. Giả sử như nếu mảng giỏ hàng rỗng -> hiển thị thông tin "giỏ hàng trống" thay vì hiển thị bảng giỏ hàng như thông thường.
 */

const cartTable = document.getElementById("cartTable");
const cartBody = document.getElementById("cartBody");

if (cart.length === 0) {
  cartTable.style.display = "none";
  document.body.innerHTML = /*html */ `
    <h2>Gio hang trong!</h2>
    <a href="./">Tiep tuc mua sam!</a>
  `;
}

let content = "";

cart.forEach((item, index) => {
  content += /*html*/ `
  <tr class=${item.price >= 500 && "highlight"}>
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>
      <button>-</button>
      <input type="text" value=${item.quantity} />
      <button>+</button>
    </td>
    <td>${item.price * item.quantity}</td>
  </tr>
  `;
});

cartBody.innerHTML = content;
