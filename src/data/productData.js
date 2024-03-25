const { getCollection } = require("../config/dbConnection");

async function getAllProducts() {
  try {
    const products = await getCollection("products").find({}).toArray();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

async function storeAllProducts(products) {
  try {
    const storedProducts = await getCollection("products").insertMany(products);
    return storedProducts;
  } catch (error) {
    console.error("Error storing basket products:", error);
    throw error;
  }
}

module.exports = {
  getAllProducts,
  storeAllProducts,
};
