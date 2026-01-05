const btn = document.getElementsByClassName("btn")[0];
console.log(btn);
btn.setAttribute("data-abc", "01");
console.log(btn.getAttribute("data-abc"));
btn.href = "abc.com";
btn.setAttribute("hrefffff", "abc.com");
console.log(btn.getAttribute(""));

const btnxx = document.getElementsByTagName("button")[1];
btnxx.setAttribute("data-xx", "abc");
console.log(btnxx);
const btnExample = document.querySelector("button[data-xx]");
console.log(btnExample);
