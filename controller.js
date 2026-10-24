const service = require("./service");

const welcomeProductAPI = (req, res) => {
  res.status(200).json({ message: "Bienvenido a la API de productos" });
};

const getProducts = async (req, res) => {
  try {
    const products = await service.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", data: null });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await service.getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", data: null });
  }
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await service.createProduct(name, price);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el producto", data: null });
  }
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const product = await service.updateProductById(id, name, price);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto", data: null });
  }
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await service.deleteProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", data: null });
  }
};

module.exports = { welcomeProductAPI, getProducts, getProductById, createProduct, updateProductById, deleteProductById };