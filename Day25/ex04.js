/**
 * Nhóm sự kiện chuột
 * Nhóm sự kiện bàn phím
 * Nhóm sự kiện form
 * Nhóm sự kiện cảm ứng
 * Nhóm sự kiện từ chính trình duyệt.
 */

/**
 * Cách 1: Gắn sự kiện bằng Attribute HTML: chỉ viết được 1 attribute, không được trùng tên.
 *
 * Cách 2: Gắn sự kiện bằng JS: Tương tự như cách 1, nhưng dùng JS để thao tác.
 *
 * Cách 3: Dùng EventListener
 */

const btn01 = document.querySelector(".btn.btn-01");

btn01.addEventListener("click", function () {
  console.log(event);
  console.log("Add event 1");
});

btn01.addEventListener("click", function () {
  console.log("Add event 2");
});

btn01.addEventListener("click", function () {
  console.log("Add event 3");
});

document.getElementsByTagName("a")[0].addEventListener("click", function () {
  console.log(event);
  event.preventDefault();
  // * Loại bỏ hành vi mặc định của thẻ HTML
});

// * Bubbling - Sự kiện nổi bọt
// * Capturing - Sự kiện bắt
