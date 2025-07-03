const products = require('../data/products'); // Your product dataset

exports.product = (req, res) => {
  const productId = parseInt(req.params.id);

  // Find product by ID
  const product = products.find(p => p.id === productId);

  if (!product) {
    // If not found, show 404 page
    return res.status(404).render('404', { title: 'Product Not Found' });
  }

  // Render product view with data
  res.render('product', {
    title: product.name,
    product
  });
};