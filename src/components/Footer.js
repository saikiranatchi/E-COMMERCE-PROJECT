import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            ShopEase is your go-to platform for the best shopping experience. We provide top-quality products at unbeatable prices, delivered right to your door.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <strong>Email:</strong> support@shopease.com
          </p>
          <p>
            <strong>Phone:</strong> +123-456-7890
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <p>© 2024 ShopEase. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
