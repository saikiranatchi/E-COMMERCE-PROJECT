import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart successfully!`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const handlePurchase = () => {
    if (cart.length > 0) {
      // Save the purchased items in the history
      setPurchaseHistory((prevHistory) => [...prevHistory, ...cart]);
      setCart([]);  // Clear the cart after purchase
      alert('Thank you for purchasing!');
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/'); // Redirect to HomePage after logout
  };

  return (
    <div className="app">
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} cart={cart} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/products" element={<ProductPage addToCart={addToCart} cart={cart} />} />
          <Route path="/products/:category" element={<ProductPage addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} setCart={setCart} handlePurchase={handlePurchase}/>} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage onRegister={() => {}} />} />
          <Route path="/profile" element={<ProfilePage purchaseHistory={purchaseHistory} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
