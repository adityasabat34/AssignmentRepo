import express from 'express';
import {
  getAllProducts,
  getSingleProductById,
} from '../controller/productController.js';

const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/:id').get(getSingleProductById);

export default router;
