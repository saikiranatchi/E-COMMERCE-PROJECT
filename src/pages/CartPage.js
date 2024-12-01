import React, { useState } from 'react';

const CartPage = ({ cart, removeFromCart, handlePurchase }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    paymentMethod: 'Credit Card',
  });

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!userDetails.name || !userDetails.address) {
      alert('Please fill in all the details');
      return;
    }
    alert('Purchase Successful!');
    handlePurchase(); // Clear the cart or finalize the purchase
  };

  return (
    <div className="cart-page">
      {!isCheckout ? (
        <>
          <h1>Your Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="cart-items">
              {cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <img src={product.images[0]} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">₹{product.price}</p>
                  <button onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              ))}
            </div>
          )}

          <div className="cart-summary">
            <p>Total: ₹{total}</p>
            <button
              className="checkout-button"
              onClick={() => setIsCheckout(true)}
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="checkout-form">
          <h2>Checkout</h2>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              placeholder='Enter Your Name'
            />
            <textarea
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              placeholder='Enter Your Address'
            />
          <label>
            Payment Method:
            <select
              name="paymentMethod"
              value={userDetails.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </label>
          <button onClick={handleCheckout}>Submit Payment</button>
          <button onClick={() => setIsCheckout(false)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
