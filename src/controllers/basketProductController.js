const {
  getAllBasketProducts,
  storeAllBasketProducts,
  deleteAllBasketProducts,
} = require("../data/basketProductData");

const getBasketProducts = async (req, res) => {
  try {
    const userId = req.header("user-id");
    const basketProducts = await getAllBasketProducts(userId);
    res.json(basketProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const storeBasketProducts = async (req, res) => {
  try {
    const userId = req.header("user-id");
    const storedProducts = await storeAllBasketProducts(req.body, userId);
    res.json(storedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBasket = async (req, res) => {
  try {
    const userId = req.header("user-id");
    await deleteAllBasketProducts(userId);
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
