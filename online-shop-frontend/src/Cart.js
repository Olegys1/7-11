import React from 'react';

const Cart = ({ cartItems, onRemoveAll }) => {
  if (cartItems.length === 0) {
    return (
      <div>
        <p>Your cart is empty. Please add some products.</p>
      </div>
    );
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: '20px' }}>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p><strong>Total cost: ${total.toFixed(2)}</strong></p>
      <button onClick={onRemoveAll}>Clear cart</button>
    </div>
  );
};

export default Cart;
