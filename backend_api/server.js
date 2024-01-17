const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let products = [
    { id: 1, name: 'Nasi Goreng', price: 10 },
    { id: 2, name: 'Mie Goreng', price: 8 },
    // ... tambahkan produk lainnya
];

let transactions = [];

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
});

app.get('/transactions', (req, res) => {
    res.json(transactions);
});

app.post('/transactions', (req, res) => {
    const newTransaction = req.body;
    transactions.push(newTransaction);
    res.json(newTransaction);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
