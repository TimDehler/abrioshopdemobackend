const express = require("express");
const router = express.Router();
const {
  getBasketProducts,
  storeBasketProducts,
} = require("../controllers/basketProductController");
const {
  getProducts,
  storeProducts,
} = require("../controllers/productController");

router.get("/getAllProducts", getProducts);
router.post("/storeProducts", storeProducts);

router.get("/getBasketProducts", getBasketProducts);
router.post("/storeBasketProducts", storeBasketProducts);

module.exports = router;
