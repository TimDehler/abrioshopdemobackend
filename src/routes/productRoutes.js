const express = require("express");
const router = express.Router();
const {
  getBasketProducts,
  storeBasketProducts,
  deleteBasket,
} = require("../controllers/basketProductController");
const {
  getProducts,
  storeProducts,
} = require("../controllers/productController");

router.get("/getAllProducts", getProducts);
router.post("/storeProducts", storeProducts);

router.get("/getBasketProducts", getBasketProducts);
router.post("/storeBasketProducts", storeBasketProducts);
router.get("/deleteStoredBasket", deleteBasket);

module.exports = router;
