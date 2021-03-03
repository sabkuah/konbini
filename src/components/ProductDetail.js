import React, { useEffect, useState } from 'react';
import { getProductById, deleteProduct } from '../network';
import { useParams, useHistory } from 'react-router-dom';
import placeholder from '../assets/konbini-no-image.png';
import isURL from 'validator/lib/isURL';
import { Modal, Button } from 'react-bootstrap';
import EditProduct from './EditProduct';
import Spinner from './utils/Spinner';

const ProductDetail = ({ isAuthenticated }) => {
  const { productId } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState({});
  const [loading, isLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
    history.push('/');
  };

  useEffect(() => {
    (async () => {
      isLoading(true);
      const item = await getProductById(productId);
      await setProduct(item);
      isLoading(false);
      console.log('product>>>>', item);
    })();
  }, [productId]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container mt-3'>
        <div className='row'>
          {/* LEFT IMAGE */}
          <div className='col-4 d-flex justify-content-center'>
            <div className='d-flex align-items-center'>
              {product?.images && isURL(product?.images) ? (
                <img src={product.images} alt={product.productNameEn} />
              ) : (
                <img
                  src={placeholder}
                  className='img-fluid'
                  alt='placeholder'
                />
              )}
            </div>
          </div>
          {/* RIGHT DETAILS */}
          <div className='col-7 product-details'>
            <h2 className='text-center blue-title'>{product.productNameEn}</h2>
            <div className='row d-flex justify-content-center my-3'>
              {isAuthenticated ? (
                <>
                  <Button variant='primary' onClick={handleShow}>
                    Edit
                  </Button>

                  <button
                    className='btn btn-danger mx-3'
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteProduct(product.productId);
                    }}
                  >
                    Delete
                  </button>
                </>
              ) : (
                ''
              )}
            </div>
            <p>
              <text className='blue-title'>Id:</text> {product.productId}
            </p>
            <p>
              <text className='blue-title'>Category:</text> {product.category}
            </p>
            <p>
              <text className='blue-title'>Japanese Name:</text>{' '}
              {product.productNameJp}
            </p>
            <p>
              <text className='blue-title'>Details:</text> <br />
              {product.details}
            </p>
            {/* FORM FOR UPDATING ITEM QUANTITY */}
            {/* should write a diff lambda function for just changing quantity */}
            {isAuthenticated ? (
              <div className='row col-6 offset-3'>
                <form>
                  <button
                    className='btn btn-danger'
                    onClick={(e) => {
                      e.preventDefault();
                      let num = parseInt(product.quantity);
                      setProduct({
                        ...product,
                        quantity: (num -= 1),
                      });
                    }}
                  >
                    -
                  </button>
                  <input
                    value={product.quantity}
                    className='mx-3'
                    style={{ textAlign: 'center' }}
                    readOnly
                  />
                  <button
                    className='btn btn-success'
                    onClick={(e) => {
                      e.preventDefault();
                      let num = parseInt(product.quantity);
                      setProduct({
                        ...product,
                        quantity: (num += 1),
                      });
                    }}
                  >
                    +
                  </button>
                </form>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditProduct handleClose={handleClose} item={product} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default ProductDetail;
