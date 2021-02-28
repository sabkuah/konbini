import React, { useState, useEffect } from "react";
import { getProducts } from "../network";
import { Link } from "react-router-dom";
import { nodeName } from "jquery";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const items = await getProducts();
      //console.log("items>>>", items);
      await setProducts(JSON.parse(items));
      console.log("products>>>", products);
    })();
  }, []);

  return (
    <div className="body">
      <div className="container">
        <table className="table mt-1">
          <thead className="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name (EN)</th>
              <th scope="col">Product Name (JP)</th>
              <th scope="col">Category</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId}>
                <td>
                  <Link to={`/products/${product.productId}`}>
                    {product.productId.slice(0, 7)}
                  </Link>
                </td>
                <td>{product.productNameEn}</td>
                <td>{product.productNameJp}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button class="btn btn-success">
            <Link to="/products/new" style={{ color: "white" }}>
              Add Product
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
