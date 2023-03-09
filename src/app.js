import express from "express";
import ProductManager from "./ProductManager.js";
import errorMessage from "./ErrorMsg.js";

const app = express();
const productManager = new ProductManager('src/data.json');
const PORT = 8080;

app.listen(PORT,()=>{
  console.log("Puerto 8080");
})

app.get("/productos", async (req, res) => {
  const datos = await productManager.getProducts();
  let {limit} = req.query
  if (limit) {
    const products = datos.slice(0, limit)
    res.json(`${JSON.stringify(products)}}`)
  } else {
    res.json(`${JSON.stringify(datos)}}`)
  }
});

app.get("/productos/:idProduct", async (req, res) => {
  const idProduct = parseInt(req.params.idProduct);
    const data = await productManager.getById(parseInt(idProduct)) 
    if(data) {
        res.json(`El producto buscado es: ${JSON.stringify(data)}`)
    } else {
        res.json(`El producto con ID: ${idProduct} no existe`)
    }
});