import React from 'react';
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
import banner4 from "./images/banner4.jpg";


const HomeBanner = ({ handleBannerClick }) => {
  return (
    <div className="banner-container" onClick={handleBannerClick}>
      <div className="banner-slide">
        <img src={banner1} alt="Banner 1" />
        <img src={banner2} alt="Banner 2" />
        <img src={banner3} alt="Banner 3" />
        <img src={banner4} alt="Banner 4" />
      </div>
      <div className="hero-section">
      <h1>Welcome to Our Store</h1>
        <p>
          Discover a wide range of products tailored to your needs. Shop with confidence!
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
