/**
 * 
 */

const btn1 = document.getElementsByClassName("btn-1")[0]

console.log(btn1.className);
// * in ra chuỗi các className cách nhau bởi dấu cách.

console.log(Array.isArray(btn1.classList));
console.log((btn1.classList)); // interable
// * classList trả về một DOMTokenList có sẵn các phương thức để làm việc với class: add, remove, replace, toggle
setTimeout(() => {
  btn1.classList.add("disnable")
}, 2000)