const fs = require("fs");
const path = require("path");

const getProducts = () => {
  try {
    const filePath = path.join(__dirname, "products.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);
    return data.products;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return [];
  }
};


const getProductById = (id) => {
  try {
    const product = getProducts().find((product) => product.id === Number(id));
    if (!product) {
      return {
        message: "Producto no encontrado",
        data: null,
      };
    }
    return {
      message: "Producto obtenido correctamente",
      data: product,
    };
  } catch (error) {
    return {
      message: "Error al obtener el producto",
      data: null,
    };
  }
};


const createProduct = (name, price) => {
  try {
    const products = getProducts();
    const product = { id: products.length + 1, name, price };
    products.push(product);
    fs.writeFileSync(path.join(__dirname, "products.json"), JSON.stringify({ products }, null, 2));
    return {
      message: "Producto creado correctamente",
      data: product,
    };
  } catch (error) {
    return {
      message: "Error al crear el producto",
      data: null,
    };
  }
};


const updateProduct = (id, name, price) => {
  try {
    const products = getProducts();
    const productIndex = products.findIndex((product) => product.id === Number(id));
    if (productIndex === -1) {
      return {
        message: "Producto no encontrado",
        data: null,
      };
    }
    products[productIndex].name = name;
    products[productIndex].price = Number(price);
    fs.writeFileSync(path.join(__dirname, "products.json"), JSON.stringify({ products }, null, 2));
    return {
      message: "Producto actualizado correctamente",
      data: products[productIndex],
    };
  } catch (error) {
    return {
      message: "Error al actualizar el producto",
      data: null,
    };
  };
};

const deleteProduct = (id) => {
  try {
    const products = getProducts();
    const productIndex = products.findIndex((product) => product.id === Number(id));
    if (productIndex === -1) {
      return {
        message: "Producto no encontrado",
        data: null,
      };
    }
    const [product] = products.splice(productIndex, 1);
    fs.writeFileSync(path.join(__dirname, "products.json"), JSON.stringify({ products }, null, 2));
    return {
      message: "Producto eliminado correctamente",
      data: product,
    };
  } catch (error) {
    return {
      message: "Error al eliminar el producto",
      data: null,
    };
  }
};

module.exports = { getProducts, getProductById, createProduct, deleteProduct, updateProduct };