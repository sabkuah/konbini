import React, { useEffect, useContext } from 'react';
import KonbiniContext from '../context/konbini/konbiniContext';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import Spinner from './utils/Spinner';

const Home = () => {
  const konbiniContext = useContext(KonbiniContext);
  const { getProducts, setLoading, products, loading } = konbiniContext;

  useEffect(() => {
    setLoading();
    getProducts();
    // eslint-disable-next-line
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
