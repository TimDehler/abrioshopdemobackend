const {
  getAllBasketProducts,
  storeAllBasketProducts,
  deleteAllBasketProducts,
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
    console.log(req.body);
    const storedProducts = await storeAllBasketProducts(products);
    res.json(storedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBasket = async (req, res) => {
  try {
    await deleteAllBasketProducts();
    res.send("Stored basket was deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBasketProducts,
  storeBasketProducts,
  deleteBasket,
};
