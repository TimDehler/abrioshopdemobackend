const {
  getAllBasketProducts,
  storeAllBasketProducts,
} = require("../data/basketProductData");

const getBasketProducts = async (req, res) => {
  try {
    const basketProducts = await getAllBasketProducts();
    res.json(basketProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const storeBasketProducts = async (req, res) => {
  try {
    const products = req.body;
    const storedProducts = await storeAllBasketProducts(products);
    res.json(storedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBasketProducts,
  storeBasketProducts,
};
