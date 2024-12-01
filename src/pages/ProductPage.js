import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component
import iphone161 from './images/iphone16-1.jpg';
import iphone162 from './images/iphone16-2.jpg';
import iphone163 from './images/iphone16-3.jpg';
import iphone164 from './images/iphone16-4.jpg';
import iphone165 from './images/iphone16-5.jpg';
import iphone166 from './images/iphone16-6.jpg';
import samsungs241 from './images/samsungs241.webp';
import samsungs242 from './images/samsungs242.jpg';
import samsungs243 from './images/samsungs243.jpg';
import samsungs231 from './images/samsungs231.jpg';
import samsungs232 from './images/samsungs232.jpg';
import samsungs233 from './images/samsungs233.jpg';
import realme121 from './images/realme121.jpg';
import realme122 from './images/realme122.jpg';
import realme123 from './images/realme123.jpg';
import realme131 from './images/realme131.jpg';
import realme132 from './images/realme132.jpg';
import realme133 from './images/realme133.jpg';
import dell1 from './images/dell1.jpg';
import dell2 from './images/dell2.jpg';
import dell3 from './images/dell3.jpg';
import dell4 from './images/dell4.jpg';
import dell5 from './images/dell5.jpg';
import dell6 from './images/dell6.jpg';
import dell7 from './images/dell7.jpg';
import dell8 from './images/dell8.jpg';
import dell9 from './images/dell9.jpg';
import hp1 from './images/hp1.jpg';
import hp2 from './images/hp2.jpg';
import hp3 from './images/hp3.jpg';
import hp4 from './images/hp4.jpg';
import hp5 from './images/hp5.jpg';
import hp6 from './images/hp6.jpg';
import hp7 from './images/hp7.jpg';
import hp8 from './images/hp8.jpg';
import hp9 from './images/hp9.jpg';
import sony1 from './images/sony1.jpg';
import sony2 from './images/sony2.jpg';
import sony3 from './images/sony3.jpg';
import sony4 from './images/sony4.jpg';
import sony5 from './images/sony5.jpg';
import sony6 from './images/sony6.jpg';
import sony7 from './images/sony7.jpg';
import sony8 from './images/sony8.jpg';
import sony9 from './images/sony9.jpg';
import bose1 from './images/bose1.jpg';
import bose2 from './images/bose2.jpg';
import bose3 from './images/bose3.jpg';
import bose4 from './images/bose4.jpg';
import bose5 from './images/bose5.jpg';
import bose6 from './images/bose6.jpg';
import bose7 from './images/bose7.jpg';
import bose8 from './images/bose8.jpg';
import bose9 from './images/bose9.jpg';
import samtab1 from './images/samtab1.webp';
import samtab2 from './images/samtab2.jpg';
import samtab3 from './images/samtab3.jpg';
import samtab4 from './images/samtab4.webp';
import samtab5 from './images/samtab5.jpg';
import samtab6 from './images/samtab6.jpg';
import samtab7 from './images/samtab7.webp';
import samtab8 from './images/samtab8.jpg';
import samtab9 from './images/samtab9.jpg';
import ipad1 from './images/ipad1.jpg';
import ipad2 from './images/ipad2.jpg';
import ipad3 from './images/ipad3.jpg';
import ipad4 from './images/ipad4.jpg';
import ipad5 from './images/ipad5.jpg';
import ipad6 from './images/ipad6.jpg';
import ipad7 from './images/ipad7.jpg';
import ipad8 from './images/ipad8.jpg';
import ipad9 from './images/ipad9.jpg';

const allProducts = {
  smartphones: [
    { id: "S01", brand: 'iPhone', name: 'iPhone 16pro', price: 145000, description: 'A high-performance iPhone.', images: [iphone161,iphone162,iphone163]},
    { id: "S02", brand: 'iPhone', name: 'iPhone 16', price: 75000, description: 'A newer iPhone with amazing features.', images: [iphone164,iphone165,iphone166] },
    { id: "S03", brand: 'Samsung', name: 'Galaxy S24ultra', price: 128000, description: 'A high-performance Samsung smartphone.', images: [samsungs241,samsungs242,samsungs243] },
    { id: "S04", brand: 'Samsung', name: 'Galaxy S23ultra', price: 75000, description: 'Samsung smartphone with top features.', images: [samsungs231,samsungs232,samsungs233] },
    { id: "S05", brand: 'Realme', name: 'Realme 12pro', price: 25000, description: 'Affordable Realme smartphone.', images: [realme121,realme122,realme123] },
    { id: "S06", brand: 'Realme', name: 'Realme 13', price: 18000, description: 'Realme smartphone with premium features.', images: [realme131,realme132,realme133] },
  ],
  laptops: [
    { id: "L01", brand: 'Dell', name: 'Dell Inspiron 7440', price: 66000, description: 'Dell productivity laptop.', images: [dell1,dell2,dell3] },
    { id: "L02", brand: 'Dell', name: 'Dell G15-5530 Gaming', price: 90000, description: 'Premium Dell laptop.', images: [dell4,dell5,dell6] },
    { id: "L03", brand: 'Dell', name: 'Dell 15 Thin & Light Laptop', price: 45000, description: 'Premium Dell laptop.', images: [dell7,dell8,dell9] },
    { id: "L04", brand: 'HP', name: 'HP Victus Gaming Laptop', price: 69000, description: 'HP Gaming laptop.', images: [hp1,hp2,hp3] },
    { id: "L05", brand: 'HP', name: 'HP Spectre x360', price: 163000, description: 'High-end HP laptop.', images: [hp4,hp5,hp6] },
    { id: "L06", brand: 'HP', name: 'HP Envy x360', price: 76000, description: 'High-end HP laptop.', images: [hp7,hp8,hp9] },
  ],
  headphones: [
    { id: "H01", brand: 'Sony', name: 'Sony WH-1000XM4', price: 21000, description: 'Noise-canceling headphones.', images: [sony1,sony2,sony3] },
    { id: "H02", brand: 'Sony', name: 'Sony WH-CH720N', price: 10000, description: 'Latest Sony headphones.', images: [sony4,sony5,sony6] },
    { id: "H03", brand: 'Sony', name: 'Sony WH-CH520', price: 4000, description: 'Latest Sony headphones.', images: [sony7,sony8,sony9] },
    { id: "H04", brand: 'Bose', name: 'Bose QuietComfort Ultra', price: 35000, description: 'High-quality sound.', images: [bose1,bose2,bose3] },
    { id: "H05", brand: 'Bose', name: 'Bose New QuietComfort Wireless', price: 40000, description: 'Bose premium headphones.', images: [bose4,bose5,bose6] },
    { id: "H06", brand: 'Bose', name: 'Bose QC45', price: 45000, description: 'Bose premium headphones.', images: [bose7,bose8,bose9] },
  ],
  tablets: [
    { id: "T01", brand: 'Samsung', name: 'Samsung Galaxy Tab S7 FE', price: 35000, description: 'Samsung tablet for multimedia.', images: [samtab1,samtab2,samtab3] },
    { id: "T02", brand: 'Samsung', name: 'Samsung Galaxy Tab S8 FE', price: 38000, description: 'Premium Samsung tablet.', images: [samtab4,samtab5,samtab6] },
    { id: "T03", brand: 'Samsung', name: 'Samsung Galaxy Tab S9 FE', price: 45000, description: 'Premium Samsung tablet.', images: [samtab7,samtab8,samtab9] },
    { id: "T04", brand: 'Apple', name: 'Apple iPad Pro 11″ (M4)', price: 99000, description: 'Apple iPad for productivity.', images: [ipad1,ipad2,ipad3] },
    { id: "T05", brand: 'Apple', name: 'Apple iPad Pro 12.9″', price: 115000, description: 'High-end Apple iPad.', images: [ipad4,ipad5,ipad6] },
    { id: "T06", brand: 'Apple', name: 'Apple iPad Pro 13″ (M4)', price: 125000, description: 'High-end Apple iPad.', images: [ipad7,ipad8,ipad9] },

  ],
};

const categories = ['smartphones', 'laptops', 'headphones', 'tablets'];

const ProductPage = ({ addToCart }) => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'smartphones');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200000]);

  const categoryProducts = allProducts[selectedCategory] || [];

  // Extract unique brands for the selected category
  const brands = ['All', ...new Set(categoryProducts.map((product) => product.brand))];

  // Filter products based on selected brand and price range
  const filteredProducts = categoryProducts.filter((product) => {
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesBrand && matchesPrice;
  });

  const navigate = useNavigate();
  const goToCart = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="product-page">
      <h1>Our Products</h1>

      {/* Category Navigation */}
      <div className="sub-navbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedBrand('All'); // Reset filters when switching categories
              setPriceRange([0, 200000]);
            }}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        {/* Brand Filter */}
        <label htmlFor="brand-filter">Filter by Brand:</label>
        <select
          id="brand-filter"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Price Filter */}
        <label htmlFor="price-filter">Filter by Price:</label>
        <input
          type="range"
          id="price-filter"
          min="0"
          max="200000"
          step="5000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
        />
        <span>{`₹${priceRange[0]} - ₹${priceRange[1]}`}</span>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="productcard">
              <ProductCard {...product} />
              <div className='cart-buttons'>
              <button className='add-to-cart' onClick={() => addToCart(product)}>Add to Cart</button>
              <button className="go-to-cart" onClick={goToCart}>Go to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in the selected range.</p>
        )}
      </div>

      {/* Go to Cart Button */}
      {/* <button className="go-to-cart" onClick={goToCart}>
        Go to Cart
      </button> */}
    </div>
  );
};

export default ProductPage;
