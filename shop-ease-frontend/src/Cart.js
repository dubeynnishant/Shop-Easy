import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
            <div key={index} style={{ padding: '10px' }}>
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
