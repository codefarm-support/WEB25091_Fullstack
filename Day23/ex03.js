const url = "https://dummyjson.com";

async function fetchProducts() {
  try {
    const { data } = await axios.get(`${url}/products`);
    let content = "";
    data.products.forEach((item) => {
      content += /*html */ `
        <div>
        <img src="${item.thumbnail}" alt="" />
          <h2>${item.title}</h2>
          <p>Price: ${item.price}</p>
          <button onclick="">Them vao gio hang</button>
        </div>
      `;
    });
    document.write(content);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
