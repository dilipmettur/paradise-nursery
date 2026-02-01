import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import CartItem from './CartItem'; // Import your Cart component

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false); // New state for Cart

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Where Greenery Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <AboutUs />
        </div>
      ) : (
        /* This is where the magic happens: conditional rendering */
        <div className={`product-container ${showCart ? 'changed' : ''}`}>
          {showCart ? (
            <CartItem onContinueShopping={() => setShowCart(false)} />
          ) : (
            <ProductList onCartClick={() => setShowCart(true)} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;