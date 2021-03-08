import React from 'react';
import vending from '../assets/konbini-machine.jpeg';

const About = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-6'>
          <img
            src={vending}
            alt='vending-machine'
            style={{ maxWidth: '100%' }}
          />
        </div>
        <div className='col-6'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            quasi sunt. Quasi, ad excepturi explicabo nobis unde non cum enim
            ullam animi? Perspiciatis in quos, dolor ex porro reprehenderit
            fuga!
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            numquam accusantium pariatur harum at sint debitis nesciunt! Porro
            expedita rem ex, vero repellat reiciendis tempore exercitationem
            sapiente quaerat! Ea, obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
