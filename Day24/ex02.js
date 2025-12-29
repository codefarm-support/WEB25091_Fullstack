/**
 * * getter / setter
 * * innerText: Thêm/lấy ra text cho element.
 * * innerHTML: Thêm/lấy ra HTML cho element.
 * * outerText: Thêm/lấy ra text cho element (bao gồm cả bản thân phần tử.)
 * * outerHTML: Thêm/lấy ra HTML cho element (Bao gồm cả bản thân phần tử).
 * * textContent: tìm hiểu thêm.
 */

const h2Ele = document.getElementsByTagName("h2")[0]

// h2Ele.outerText = "Noi dung moi"
console.log(h2Ele.innerText);
console.log(h2Ele.outerText);
console.log(h2Ele.innerHTML);
console.log(h2Ele.outerHTML);

setTimeout(() => {
  h2Ele.outerHTML = /*html */`<div class="new">
  <h1>Noi dung the h1 update</h1>
</div>
`
}, 2000)