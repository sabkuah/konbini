import React, { useContext, useEffect } from 'react';
import KonbiniContext from '../context/konbini/konbiniContext';
import Spinner from './utils/Spinner';
import jumbotronImg from '../assets/konbini-jumbotron.jpeg';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export const Home = () => {
  const context = useContext(KonbiniContext);
  const { getProducts, setLoading, products, loading } = context;

  var settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  };

  useEffect(() => {
    setLoading();
    getProducts();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <img src={jumbotronImg} alt='snack truck' className='jumbotron' />
        <div className='container'>
          <Slider {...settings}>
            {products.map((product) => (
              <div
                className='card p-3'
                //style={{ width: '23%' }}
                key={product.productId}
              >
                <Link to={`/products/${product.productId}`}>
                  <div>
                    <img
                      src={product.images}
                      className='card-img-top'
                      alt={product.productNameEn}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
};
export default Home;
