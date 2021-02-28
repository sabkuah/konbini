import axios from "axios";
const BASE_URL =
    "https://bc0a6qqmm3.execute-api.ca-central-1.amazonaws.com/prod";

//=======================
//    Empty Object
//=======================

export const emptyObject = {
    category: "",
    details: "",
    images: "",
    productId: "empty",
    productNameEn: "",
    productNameJp: "",
    quantity: 0,
};

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

    return;
}
//=======================
//   Update Product
//=======================

//=======================
//    Delete Product
//=======================
export async function deleteProduct(product) {
    const response = await axios.delete(`${BASE_URL}/products/${productId}`);
    console.log("deleted item >>>>>>", response);
    return;
}
