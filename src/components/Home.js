import React, { useState, useEffect } from 'react';
import { getProducts } from '../network';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import Spinner from './utils/Spinner';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    (async () => {
      isLoading(true);
      const items = await getProducts();
      //console.log("items>>>", items);
      await setProducts(JSON.parse(items));
      isLoading(false);
      //console.log('products>>>', products);
    })();
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='body'>
        <div className='container'>
          <table className='table mt-1'>
            <thead className='thead'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Product Name (EN)</th>
                <th scope='col'>Product Name (JP)</th>
                <th scope='col'>Category</th>
                <th scope='col'>Quantity</th>
                <th scope='col'></th>
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
                  <td>
                    <button className='btn'>
                      <Link to={`/products/${product.productId}`}>
                        <FaEdit />
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-success'>
              <Link to='/products/new' style={{ color: 'white' }}>
                Add Product
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
