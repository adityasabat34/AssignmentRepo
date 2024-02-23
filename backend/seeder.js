import colors from 'colors';
import Product from './model/productModel.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();

    const sampleProduct = products.map((product) => {
      return { ...product };
    });

    await Product.insertMany(sampleProduct);

    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

importData();
