import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
import banner4 from "./images/banner4.jpg";
// import './HomePage.css';

const categories = [
  { name: 'Smartphones', image: banner1 },
  { name: 'Laptops', image: banner2 },
  { name: 'Tablets', image: banner3 },
  { name: 'Headphones', image: banner4 },
];


const HomePage = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (isAuthenticated) {
      navigate(`/products/${category}`);
    } else {
      alert('Please log in to view products!');
      navigate('/login'); // Redirect to login if not authenticated
    }
  };

  const handleBannerClick = () => {
    if (isAuthenticated) {
      navigate('/products');
    } else {
      alert('Please log in to view products!');
      navigate('/login'); // Redirect to login if not authenticated
    }
  };

  return (
    <div className="home-page">
      <HomeBanner handleBannerClick={handleBannerClick} />
      <div className="category-section">
        <h2>Shop by Categories</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="category-card"
              onClick={() => handleCategoryClick(category.name.toLowerCase())}
            >
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
