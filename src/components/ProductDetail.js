import React, { useEffect, useState, useContext } from 'react';
import KonbiniContext from '../context/konbiniContext';
//import { deleteProduct, updateProduct } from '../network';
import { useParams, useHistory } from 'react-router-dom';
import placeholder from '../assets/konbini-no-image.png';
import isURL from 'validator/lib/isURL';
import { Modal, Button } from 'react-bootstrap';
import EditProduct from './EditProduct';
import Spinner from './utils/Spinner';

const ProductDetail = ({ isAuthenticated }) => {
  const konbiniContext = useContext(KonbiniContext);
  const {
    product,
    loading,
    setLoading,
    getProductById,
    deleteProduct,
    updateProduct,
  } = konbiniContext;
  const { productId } = useParams();
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteProduct = async () => {
    await deleteProduct(productId);
    history.push('/');
  };

  const handleUpdateQuantity = async () => {
    console.log('before number', product.quantity);
    await updateProduct({
      ...product,
      quantity: parseInt(product.quantity) + 1,
    });
  };

  //For updating product quantity
  useEffect(() => {
    updateProduct(productId, product);
    // eslint-disable-next-line
  }, [product.quantity]);

  //For getting product details
  useEffect(() => {
    (async () => {
      setLoading();
      getProductById(productId);
      //console.log('product>>>>', product);
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
                      handleDeleteProduct();
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
              <strong className='blue-title'>Id:</strong> {product.productId}
            </p>
            <p>
              <strong className='blue-title'>Category:</strong>{' '}
              {product.category}
            </p>
            <p>
              <strong className='blue-title'>Japanese Name:</strong>{' '}
              {product.productNameJp}
            </p>
            <p>
              <strong className='blue-title'>Details:</strong> <br />
              {product.details}
            </p>
            {/* FORM FOR UPDATING ITEM QUANTITY */}
            {/* should write a diff lambda function for just changing quantity */}
            {isAuthenticated ? (
              <div className='row col-6 offset-3'>
                <form>
                  <button
                    className='btn btn-danger'
                    onClick={async (e) => {
                      e.preventDefault();
                      handleUpdateQuantity();
                    }}
                  >
                    -
                  </button>
                  <input
                    value={product.quantity}
                    className='mx-3 form-control'
                    style={{ textAlign: 'center' }}
                    readOnly
                  />
                  <button
                    className='btn btn-success'
                    onClick={async (e) => {
                      e.preventDefault();
                      handleUpdateQuantity();
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
