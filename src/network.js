import axios from "axios";
const BASE_URL =
  "https://bc0a6qqmm3.execute-api.ca-central-1.amazonaws.com/prod";

//=======================
//    Scan Products
//=======================

export async function getProducts() {
  const response = await axios.get(`${BASE_URL}/products`);

  return response.data.body;
}

//=======================
//  Get Product By Id
//=======================

export async function getProductById(productId) {
  const response = await axios.get(`${BASE_URL}/products/${productId}`);

  return response.data;
}

//=======================
//     Add Product
//=======================

//=======================
//   Update Product
//=======================

//=======================
//    Delete Product
//=======================
