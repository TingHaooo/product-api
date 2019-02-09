var express = require('express');
var router = express.Router();
var Bag = require('../modules/Bag');

router.get('/products.json', (req, res, next) => {
  Bag.find({}).then(data => {
    res.json(data);
  }).catch(next);
});

router.post('/products', (req, res, next) => {
  Bag.create(req.body).then(data => {
    res.json(data);
  }).catch(next);
});

router.put('/products', (req, res, next) => {
  Bag.update({}, { $unset: {quantity: ""} }).then(() => {
    Bag.find({}).then(data => {
      res.json(data);
    }).catch(next);
  })
})

router.delete('/products/:sku', (req, res, next) => {
  Bag.findOneAndDelete({sku: req.params.sku}).then(data => {
    res.send(data);
  }).catch(next);
});

module.exports = router;
