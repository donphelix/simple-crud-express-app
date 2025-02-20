const express = require("express");
const ProductController = require("../controllers/product.controller");

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProducts);

module.exports = router;
