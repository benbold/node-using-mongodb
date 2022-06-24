import mongoose from 'mongoose';

import { ProductSchema } from '../models/models';

const Product = mongoose.model('Product', ProductSchema);

export const addNewProduct = (req, res) => {
  let newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    if(err) {
      res.send(err);
    }
    res.json(product);
  })
};

export const getProducts = (req, res) => {
  Product.find({}, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
};

export const getProductById = (req, res) => {
  Product.findById(req.params.productId, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
};
