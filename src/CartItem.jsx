import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // FIX: calculate total using raw numbers (Required: 2 points)
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // FIX: multiply directly without .replace() (Required: 6 points)
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name} style={{display: 'flex', margin: '10px', borderBottom: '1px solid #ccc', padding: '10px'}}>
            <img className="cart-item-image" src={item.image} alt={item.name} style={{width: '100px'}} />
            <div className="cart-item-details" style={{marginLeft: '20px'}}>
              <div className="cart-item-name" style={{fontWeight: 'bold'}}>{item.name}</div>
              <div className="cart-item-cost">Unit Price: ${item.cost}</div>
              <div className="cart-item-quantity" style={{margin: '10px 0'}}>
                <button onClick={() => handleDecrement(item)}>-</button>
                <span style={{margin: '0 10px'}}>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Subtotal: ${calculateTotalCost(item)}</div>
              <button style={{marginTop: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px'}} onClick={() => dispatch(removeItem(item.name))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop: '20px'}}>
        <button className="get-started-button" onClick={onContinueShopping}>Continue Shopping</button>
        <button className="get-started-button" style={{marginLeft: '10px'}} onClick={() => alert('Functionality Coming Soon')}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;