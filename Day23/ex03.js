const url = "https://dummyjson.com";

async function fetchProducts() {
  try {
    const { data } = await axios.get(`${url}/products`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
