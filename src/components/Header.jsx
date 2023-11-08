import React from 'react';

const Header = () => {
  return (
    <>
      <div className="pre-navbar">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p>
              <Envelope size={18} /> <a href="mailto:example@example.com">example@example.com</a>
            </p>
          </div>
          <div className="col-6 text-end">
            <p>
              <Phone size={18} /> <a href="tel:+1234567890">+123-456-7890</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Header;
