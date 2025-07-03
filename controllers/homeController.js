const products = require('../data/products');

exports.home = (req, res) => {
  const latest = products.filter(p => p.tags.includes('latest')).slice(0, 5);
  const popular = products.filter(p => p.tags.includes('popular')).slice(0, 20);
  const discounts = products.filter(p => p.tags.includes('discount')).slice(0, 5);

  res.render('index', {
    title: '3D Print Store',
    latest,
    popular,
    discounts
  });
};