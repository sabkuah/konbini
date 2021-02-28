import React, { useState } from "react";
import { postNewProduct } from "../network";
import { useHistory } from "react-router-dom";
import uuid from "react-uuid";

const NewProduct = () => {
  //need to create a function that randomly generates productIds

  const history = useHistory();

  const [newProduct, setNewProduct] = useState({});
  const addProduct = async (e) => {
    e.preventDefault();
    const newId = await uuid();
    await setNewProduct({ ...newProduct, productId: newId });

    await postNewProduct(newProduct);
    history.push("/");
  };

  return (
    <div className="col-6 offset-3 prod-form">
      <form onSubmit={addProduct}>
        <div class="mb-3">
          <label for="productNameEn" class="form-label">
            Product Name (EN)
          </label>
          <input
            type="text"
            class="form-control"
            id="productNameEn"
            name="product[productNameEn]"
            value={newProduct.productNameEn}
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                productNameEn: e.target.value,
              });
            }}
          />
        </div>
        <div class="mb-3">
          <label for="images" class="form-label">
            Image URL:
          </label>
          <input
            type="text"
            class="form-control"
            id="images"
            name="product[images]"
            value={newProduct.images}
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                images: e.target.value,
              });
            }}
          />
        </div>

        <div class="mb-3">
          <label for="productNameJp" class="form-label">
            Product Name (JP)
          </label>
          <input
            type="text"
            class="form-control"
            id="productNameJp"
            name="product[productNameJp]"
            value={newProduct.productNameJp}
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                productNameJp: e.target.value,
              });
            }}
          />
        </div>
        <div className="row">
          <div class="mb-3 col-6">
            <label for="quantity" class="form-label">
              Quantity
            </label>
            <input
              type="text"
              class="form-control"
              id="quantity"
              name="product[quantity]"
              value={newProduct.quantity}
              onChange={(e) => {
                setNewProduct({
                  ...newProduct,
                  quantity: e.target.value,
                });
              }}
            />
          </div>
          <div class="mb-3 col-6">
            <label for="category" class="form-label">
              Category
            </label>
            <input
              type="text"
              class="form-control"
              id="category"
              name="product[category]"
              value={newProduct.category}
              onChange={(e) => {
                setNewProduct({
                  ...newProduct,
                  category: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="details" class="form-label">
            Details
          </label>
          <textarea
            class="form-control"
            id="details"
            name="product[details]"
            value={newProduct.details}
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                details: e.target.value,
              });
            }}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
