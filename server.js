const express = require('express');
const path = require('path');
const app = express();

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Route delegation
app.use('/', require('./routes/index'));
app.use('/products', require('./routes/productRoutes'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));