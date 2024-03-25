const { getCollection } = require("../config/dbConnection");

async function storeAllBasketProducts(products) {
  try {
    const storedProducts = await getCollection("shoppingcart").insertMany(
      products
    );
    return storedProducts;
  } catch (error) {
    console.error("Error storing basket products:", error);
    throw error;
  }
}

async function getAllBasketProducts() {
  try {
    const basketProducts = await getCollection("shoppingcart")
      .find({})
      .toArray();
    return basketProducts;
  } catch (error) {
    console.error("Error fetching basket products:", error);
    throw error;
  }
}

async function deleteAllBasketProducts() {
  try {
    await getCollection("shoppingcart").deleteMany({});
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
