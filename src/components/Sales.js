import React from 'react';
import InventoryList from './InventoryList';

const Sales = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col'>
          <div className='stats box-shadow'>
            <p>Items Sold:</p>
            <p>Total Sales:</p>
            <p>Site Traffic:</p>
          </div>
        </div>
        <div className='col '>
          <div className='graph box-shadow d-flex justify-content-center'>
            <img
              src='https://docs.telerik.com/blazor-ui/components/chart/types/images/exploded-pie-chart.png'
              alt='placeholder graph'
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <InventoryList />
      </div>
    </div>
  );
};

export default Sales;
