import React, { useContext, useEffect } from 'react';
import KonbiniContext from '../context/konbini/konbiniContext';
import { Card } from 'react-bootstrap';
import Spinner from './utils/Spinner';

const Products = () => {
  const context = useContext(KonbiniContext);
  const { products, loading, setLoading, getProducts } = context;

  useEffect(() => {
    if (products.length === 0) {
      setLoading();
      getProducts();
    }
  }, []);

  if (loading) return <Spinner />;
  else
    return (
      <div className='container mt-4'>
        <div className='row'>
          {products.map((product) => (
            <Card
              key={product.productId}
              style={{ width: '20%', height: '20%' }}
            >
              <Card.Img
                variant='top'
                src={product.images}
                style={{ maxWidth: '100%', height: '100%' }}
              />
              <Card.Body>
                <Card.Text>{product.productNameEn}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
};

export default Products;
