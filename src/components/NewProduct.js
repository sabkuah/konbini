import React from "react";

const NewProduct = () => {
  //need to create a function that randomly generates productIds
  return (
    <div className="col-6">
      <form>
        <div className="mb-3">
          <label htmlFor="productNameEn" className="form-label">
            Product Name (EN)
          </label>
          <input
            type="text"
            className="form-control"
            id="productNameEn"
            name="product[productNameEn]"
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
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
