import React, { useEffect, useState } from "react";
import { getProductById, emptyObject } from "../network";
import { useParams, Link } from "react-router-dom";
import placeholder from "../assets/konbini-no-image.png";
import isURL from "validator/lib/isURL";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(emptyObject);

  useEffect(() => {
    (async () => {
      const item = await getProductById(productId);
      await setProduct(item);
      console.log("product>>>>", product);
    })();
  }, []);
  return (
    <div className="container mt-3">
      <div className="row">
        {/* LEFT IMAGE */}
        <div className="col-4 d-flex justify-content-center">
          <div className="d-flex align-items-center">
            {product?.images && isURL(product?.images) ? (
              <img src={product.images} />
            ) : (
              <img src={placeholder} className="img-fluid" />
            )}
          </div>
        </div>
        {/* RIGHT DETAILS */}
        <div className="col-7 product-details">
          <h2 className="text-center product-name">{product.productNameEn}</h2>
          <div className="row d-flex justify-content-center my-3">
            <button className="btn btn-primary mx-3">
              <Link
                to={`/products/${product.productId}/edit`}
                style={{ color: "white" }}
              >
                Edit
              </Link>
            </button>
            <button className="btn btn-danger mx-3">Delete</button>
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
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  setProduct({ ...product, quantity: (product.quantity -= 1) });
                }}
              >
                -
              </button>
              <input
                value={product.quantity}
                className="mx-3"
                style={{ textAlign: "center" }}
                readOnly
              />
              <button
                className="btn btn-success"
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
