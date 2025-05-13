const express = require('express');
const router = express.Router();

// Dummy product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a product description.',
    price: 999,
    image: 'https://via.placeholder.com/180'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is another product.',
    price: 1999,
    image: 'https://via.placeholder.com/180'
  }
];

// Route: GET /api/products
router.get('/', (req, res) => {
  res.json(products); // ✅ Return an array, not an object
});

module.exports = router;
