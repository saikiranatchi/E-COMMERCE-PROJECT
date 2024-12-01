import React, { useState } from 'react';
// import './ProductCard.css';

const ProductCard = ({ name, price, description, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <button className="prev" onClick={handlePrevImage}>❮</button>
        <img src={images[currentImageIndex]} alt={name} />
        <button className="next" onClick={handleNextImage}>❯</button>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">₹{price}</p>
    </div>
  );
};

export default ProductCard;
