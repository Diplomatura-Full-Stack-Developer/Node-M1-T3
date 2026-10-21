const express = require("express");
const { getProducts, getProductById, createProduct, deleteProduct, updateProduct } = require("./service");

const router = express.Router();


router.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido a la API de productos" });
});

router.get("/products", (req, res) => {
  const products = getProducts();
  res.status(200).json({
    message: "Productos obtenidos correctamente",
    data: products,
  });
});

router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = getProductById(id);
  res.status(200).json({ product });
});

router.post("/product", (req, res) => {
  const { name, price } = req.body;
  const product = createProduct(name, price);
  res.status(200).json({ product });
});

router.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const product = updateProduct(id, name, price);
  res.status(200).json({ product });
});

router.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  const product = deleteProduct(id);
  res.status(200).json({ product });
});

module.exports = router;