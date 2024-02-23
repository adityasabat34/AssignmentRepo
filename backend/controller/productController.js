import Product from '../model/productModel.js';
import asyncHandler from 'express-async-handler';

/**
 * @desc		Get all products
 * @route		GET /api/products
 * @access	public
 */

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/**
 * @desc		Get single product
 * @route		GET /api/products/:id
 * @access	public
 */

const getSingleProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

export { getAllProducts, getSingleProductById };
