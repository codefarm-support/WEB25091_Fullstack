const anchor1 = document.getElementsByClassName("anchor-1")[0];
console.log(anchor1);

setTimeout(() => {
  anchor1.innerText = "Trang chu Google";
  anchor1.href = "https://google.com";
  anchor1.style.color = "red";
  anchor1.style.backgroundColor = "blue";
  anchor1.title = "Google - công cụ tìm kiếm phổ biến nhất thế giới!";
}, 2000);

const btn = document.getElementsByClassName("btn")[0];
console.log(btn);
console.log(btn.style);
btn.style.cssText = /*css */ `
  color: red;
  background-color: pink;
  border: 1px solid #ccc;
  padding: 12px 24px;
  border-radius: 12px;
`;
