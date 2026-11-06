import React, { useState } from 'react';
import Cart from './Cart';

const App = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 49.99 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', width: '150px' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
      <Cart cartItems={cart} onRemoveAll={clearCart} />
    </div>
  );
};

export default App;
