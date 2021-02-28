import React, { useState } from "react";

const EditProduct = () => {
  const [product, setProduct] = useState({});

  const editProduct = async () => {
    console.log("edit form submitted");
  };

  return (
    <div className="col-6 offset-3 prod-form mt-3">
      <h1 className="text-center">🛑 🚧 EDIT FORM 🚧 🛑</h1>
      <form onSubmit={editProduct}>
        <div className="mb-3">
          <label htmlFor="productNameEn" className="form-label">
            Product Name (EN)
          </label>
          <input
            type="text"
            className="form-control"
            id="productNameEn"
            name="product[productNameEn]"
            value={product.productNameEn}
            onChange={(e) => {
              setProduct({
                ...product,
                productNameEn: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">
            Image URL:
          </label>
          <input
            type="text"
            className="form-control"
            id="images"
            name="product[images]"
            value={product.images}
            onChange={(e) => {
              setProduct({
                ...product,
                images: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productNameJp" className="form-label">
            Product Name (JP)
          </label>
          <input
            type="text"
            className="form-control"
            id="productNameJp"
            name="product[productNameJp]"
            value={product.productNameJp}
            onChange={(e) => {
              setProduct({
                ...product,
                productNameJp: e.target.value,
              });
            }}
          />
        </div>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              name="product[quantity]"
              value={product.quantity}
              onChange={(e) => {
                setProduct({
                  ...product,
                  quantity: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="product[category]"
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label">
            Details
          </label>
          <textarea
            className="form-control"
            id="details"
            name="product[details]"
            value={product.details}
            onChange={(e) => {
              setProduct({
                ...product,
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

export default EditProduct;
