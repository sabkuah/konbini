import React, { useState, useContext } from 'react';
import KonbiniContext from '../context/konbini/konbiniContext';
import { useParams } from 'react-router-dom';

const EditProduct = ({ handleClose }) => {
  const konbiniContext = useContext(KonbiniContext);
  const { updateProduct, product } = konbiniContext;
  const [editedProduct, setEditedProduct] = useState({ product });
  const { productId } = useParams();

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    console.log('item being added', product);
    await updateProduct(productId, editedProduct);
    handleClose();
  };

  return (
    <form onSubmit={handleUpdateProduct}>
      <div className='mb-3'>
        <label htmlFor='productNameEn' className='form-label'>
          Product Name (EN)
        </label>
        <input
          type='text'
          className='form-control'
          id='productNameEn'
          name='product[productNameEn]'
          value={editedProduct.productNameEn}
          onChange={(e) => {
            setEditedProduct({
              ...product,
              productNameEn: e.target.value,
            });
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='images' className='form-label'>
          Image URL:
        </label>
        <input
          type='text'
          className='form-control'
          id='images'
          name='product[images]'
          value={editedProduct.images}
          onChange={(e) => {
            setEditedProduct({
              ...product,
              images: e.target.value,
            });
          }}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='productNameJp' className='form-label'>
          Product Name (JP)
        </label>
        <input
          type='text'
          className='form-control'
          id='productNameJp'
          name='product[productNameJp]'
          value={editedProduct.productNameJp}
          onChange={(e) => {
            setEditedProduct({
              ...product,
              productNameJp: e.target.value,
            });
          }}
        />
      </div>
      <div className='row'>
        <div className='mb-3 col-6'>
          <label htmlFor='quantity' className='form-label'>
            Quantity
          </label>
          <input
            type='text'
            className='form-control'
            id='quantity'
            name='product[quantity]'
            value={editedProduct.quantity}
            onChange={(e) => {
              setEditedProduct({
                ...product,
                quantity: e.target.value,
              });
            }}
          />
        </div>
        <div className='mb-3 col-6'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <input
            type='text'
            className='form-control'
            id='category'
            name='product[category]'
            value={editedProduct.category}
            onChange={(e) => {
              setEditedProduct({
                ...product,
                category: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='details' className='form-label'>
          Details
        </label>
        <textarea
          className='form-control'
          id='details'
          name='product[details]'
          value={editedProduct.details}
          onChange={(e) => {
            setEditedProduct({
              ...product,
              details: e.target.value,
            });
          }}
        ></textarea>
      </div>
      <div className='d-flex justify-content-center'>
        <button type='submit' className='btn btn-success'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditProduct;
