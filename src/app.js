import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();
const productManager = new ProductManager('src/data.json');
const PORT = 8080;

app.listen(PORT,()=>{
  console.log("puerto 8080");
})

app.get("/productos", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    res.json(products);
  } catch {
    res.json({ mensaje: error.message });
  }
});

app.get("/productos/:id", async (req, res) => {
  try {
    const idProd = req.params.id
    const product = await productManager.getById(idProd);
    res.json(product);
  } catch {
    res.json({ mensaje: error.message });
  }

});
app.get("/productos", async (req, res) => {
  try {
    const {limite} = req.params
    const products = await productManager.getProducts();
    res.json(products);
  } catch {
    res.json({ mensaje: error.message });
  }
});
