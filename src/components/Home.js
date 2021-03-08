import React, { useContext, useEffect } from 'react';
import KonbiniContext from '../context/konbini/konbiniContext';
import Spinner from './utils/Spinner';
import jumbotronImg from '../assets/konbini-jumbotron.jpeg';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import PublicNav from '../components/common/PublicNav';
import Header from '../components/Header';
import PublicFooter from './common/PublicFooter';

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
        <PublicNav />
        <Header />
        <div classname='img-fluid jumbo-div'>
          <img src={jumbotronImg} alt='snack truck' className='jumbo-img' />
        </div>
        <div className='container'>
          <Slider {...settings}>
            {products.map((product) => (
              <div className='card p-3' key={product.productId}>
                <Link to={`/products/${product.productId}`}>
                  <div>
                    <img
                      src={product.images}
                      className='card-img-top'
                      alt={product.productNameEn}
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <PublicFooter />
      </>
    );
  }
};
export default Home;
