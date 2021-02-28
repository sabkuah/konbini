import React, { useEffect, useState } from "react";
import { getProductById } from "../network";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const item = await getProductById(productId);
      await setProduct(item);
      console.log("product>>>>", product);
    })();
  }, []);
  return (
    <div class="container mt-3">
      <div className="row">
        {/* LEFT IMAGE */}
        <div className="col-4 d-flex justify-content-center">
          <img src={product.images}></img>
        </div>
        {/* RIGHT DETAILS */}
        <div className="col-7 product-details">
          <h2 class="text-center product-name">{product.productNameEn}</h2>
          <div className="row d-flex justify-content-center my-3">
            <button class="btn btn-primary mx-3">Edit</button>
            <button class="btn btn-danger mx-3">Delete</button>
          </div>
          <p>ID: {product.productId}</p>
          <p>Category: {product.category}</p>
          <p>Japanese Name: {product.productNameJp}</p>
          <p>Details: {product.details}</p>
          {/* FORM FOR UPDATING ITEM QUANTITY */}
          {/* should write a diff lambda function for just changing quantity */}
          <div className="row col-6 offset-3">
            <form>
              <button
                class="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  setProduct({ ...product, quantity: (product.quantity -= 1) });
                }}
              >
                -
              </button>
              <input
                value={product.quantity}
                class="mx-3"
                style={{ textAlign: "center" }}
              />
              <button
                class="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  setProduct({ ...product, quantity: (product.quantity += 1) });
                }}
              >
                +
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
