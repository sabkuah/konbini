import axios from 'axios';
const BASE_URL =
  'https://bc0a6qqmm3.execute-api.ca-central-1.amazonaws.com/prod';

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
export async function postNewProduct(product) {
  const response = await axios.post(`${BASE_URL}/products`, {
    product: product,
  });
  console.log(response);
  return;
}
//=======================
//   Update Product
//=======================

export async function updateProduct(productId, product) {
  const response = await axios.put(`${BASE_URL}/products/${productId}`, {
    product: product,
  });
  console.log(response);
  return;
}

// export async function updateQuantity(productId, quantity) {
//   const response = await axios.patch(`${BASE_URL}/products/${productId}`, {
//     product: {
//       quantity: quantity,
//     },
//   });
//   console.log(response);
//   return;
// }

//=======================
//    Delete Product
//=======================
export async function deleteProduct(productId) {
  await axios.delete(`${BASE_URL}/products/${productId}`);

  return;
}
