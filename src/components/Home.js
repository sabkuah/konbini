import React, { useState, useEffect } from "react";
import { getProducts } from "../network";

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
    <div>
      <p>Hello! Welcome!</p>

      {products.map((p) => (
        <p key={p.productId}>{p.productNameEn}</p>
      ))}
    </div>
  );
};

export default Home;
