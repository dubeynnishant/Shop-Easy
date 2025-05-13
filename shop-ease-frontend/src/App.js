import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './ProductDetail';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛍️ ShopEase - Product Listing</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '5px',
            width: '200px'
          }}>
            <img src={product.image} alt={product.name} width="180" height="180" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>₹{product.price}</strong>
            <br />
            <a href={`/product/${product.id}`}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
