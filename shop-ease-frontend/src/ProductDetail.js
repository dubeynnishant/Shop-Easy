import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Get the product ID from the URL

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error fetching product details:', err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" height="300" />
      <p>{product.description}</p>
      <strong>₹{product.price}</strong>
    </div>
  );
}

export default ProductDetail;
