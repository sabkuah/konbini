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
    <div>
      <h1>{product.productNameEn}</h1>
      <p>Japanese Name: {product.productNameJp}</p>
    </div>
  );
};

export default ProductDetail;
