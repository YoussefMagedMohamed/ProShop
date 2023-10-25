import axios from "axios";

// Get All Products To Home Screen
export let getAllProducts = async () => {
  let {data} = await axios.get("https://dummyjson.com/products");
  console.log(data.products);
  return data.products;
};

// Get Single Product To ProductDetails screen
export let getSingleProduct = async (id) => {
  let {data} = await axios.get(`https://dummyjson.com/products/${id}`);
  console.log(data);
  return data;
};
