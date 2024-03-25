const { getCollection } = require("../config/dbConnection");

async function storeAllBasketProducts(products, userId) {
  try {
    const storedProducts = await getCollection(userId).insertMany(products);
    return storedProducts;
  } catch (error) {
    console.error("Error storing basket products:", error);
    throw error;
  }
}

async function getAllBasketProducts(userId) {
  try {
    const basketProducts = await getCollection(userId).find({}).toArray();
    return basketProducts;
  } catch (error) {
    console.error("Error fetching basket products:", error);
    throw error;
  }
}

async function deleteAllBasketProducts(userId) {
  try {
    await getCollection(userId).drop();
  } catch (error) {
    console.error("Error deleting basket products", error);
    throw error;
  }
}

module.exports = {
  getAllBasketProducts,
  storeAllBasketProducts,
  deleteAllBasketProducts,
};
