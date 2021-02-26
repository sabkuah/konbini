import React from "react";

const NewProduct = () => {
  //need to create a function that randomly generates productIds
  return (
    <div className="col-6">
      <form>
        <div class="mb-3">
          <label for="productNameEn" class="form-label">
            Product Name (EN)
          </label>
          <input
            type="text"
            class="form-control"
            id="productNameEn"
            name="product[productNameEn]"
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
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
