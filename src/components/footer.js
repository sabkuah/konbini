const Footer = () => {
  return (
    <div className='main-footer pt-3'>
      <div className='container' style={{ backgroundColor: '#f8f9fa' }}>
        <div className='row mt-4'>
          {/* Column 1 */}
          <div className='col'>
            <h2 className='red-footer-title'>Konbini Co.</h2>
            <ul className='list-style'>
              <li>1234 Robson St </li>
              <li>Vanvouver BC</li>
              <li>Opens from 10am to 11pm everyday!</li>
              <li>shop@konbini.com</li>
              <li>604-682-3634</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className='col'>
            <h5 className='red-footer-title'>Stay in touch</h5>
            <ul className='list-style'>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
          {/* Colum 3 */}
          <div className='col'>
            <h5 className='red-footer-title'>Find us here!</h5>
            {/* Geo-map?  */}
            <p>Map?</p>
          </div>
        </div>
        <hr />
        {/* All right reserved / copy rights */}
        <div className='row d-flex justify-content-center'>
          <p>
            &copy;Konbini{new Date().getFullYear()} || All Rights Reserved ||
            Terms of service || Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
