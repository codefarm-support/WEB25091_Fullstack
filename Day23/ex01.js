console.log("Viec 1");
fetch("https://dummyjson.com/carts/1", {
  method: "GET",
  // body:
  // "Content-Type": "application/json"
})
  .then((res) => {
    console.log({ res });
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

console.log("Viec 2");

/**
 * fetch là một phương thức (hàm) global.
 * trả về 1 promise
 */

fetch("https://dummyjson.com/products?skip=0&limit=12")
  .then((res) => res.json())
  .then((data) => {
    let content = "";
    data.products.forEach((item) => {
      content += /*html */ `
        <div>
          <h2>${item.title}</h2>
          <p>Price: ${item.price}</p>
          <button>Them vao gio hang</button>
        </div>
      `;
    });
    document.write(content);
  });
