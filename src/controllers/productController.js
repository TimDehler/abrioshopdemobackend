const { getAllProducts, storeAllProducts } = require("../data/productData");

const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const storeProducts = async (req, res) => {
  try {
    const products = req.body;
    const storedProducts = await storeAllProducts(products);
    res.json(storedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  storeProducts,
};
