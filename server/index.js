const express = require('express');
const cors = require('cors');
const server = require('./server');

const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
  server.getProductsList(req.query.search)
    .then(items => res.json(items))
    .catch(error => res.status(500).send(error));
});


app.get('/api/items/:id', (req, res) => {
  server.getProductDetail(req.params.id)
    .then(item => res.json(item))
    .catch(error => res.status(error.status).send(error));
});

app.listen(5000, () => {
  console.log('Server started in port 5000');
});