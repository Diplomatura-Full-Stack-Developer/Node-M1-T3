const express = require("express");
const { welcomeProductAPI, getProducts, getProductById, createProduct, updateProductById, deleteProductById } = require("./controller");

const router = express.Router();



router.get("/", welcomeProductAPI);

router.get("/products", getProducts);

router.get("/products/:id", getProductById);

router.post("/product", createProduct);

router.put("/product/:id", updateProductById);

router.delete("/product/:id", deleteProductById);

module.exports = router;