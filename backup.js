// class ProductManager {
//     constructor() {
//       this.products = [];
//     }
  
//   generateId() {
//       const min = 1000000000;
//       const max = 9999999999;
//       return Math.floor(Math.random() * (max - min) + min).toString();
//     }
  
//     getProducts() {
//       return this.products;
//     }
  
//     getProductById(id) {
//       const product = this.products.find((product) => product.id === id);
//       if (!product) {
//         throw new Error('Producto no encontrado');
//       }
//       return product;
//     }
  
//     addProduct(product) {
//       if (this.products.find((p) => p.code === product.code)) {
//         throw new Error('El código ya está en uso');
//       }
//       const newProduct = {
//         ...product,
//         id: this.generateId(),
//       };
//       this.products.push(newProduct);
//       return newProduct;
//     }
  
//     updateProduct(id, updateFields) {
//       const index = this.products.findIndex((product) => product.id === id);
//       if (index === -1) {
//         throw new Error('Producto no encontrado');
//       }
//       const product = this.products[index];
//       const updatedProduct = {
//         ...product,
//         ...updateFields,
//         id,
//       };
//       this.products[index] = updatedProduct;
//       return updatedProduct;
//     }
  
//     deleteProduct(id) {
//       const index = this.products.findIndex((product) => product.id === id);
//       if (index === -1) {
//         throw new Error('Producto no encontrado');
//       }
//       this.products.splice(index, 1);
//     }
//   }
  
//   const productManager = new ProductManager();
  
//   // Agregar un producto
//   const newProduct = {
//     title: 'producto prueba',
//     description: 'Este es un producto prueba',
//     price: 200,
//     thumbnail: 'Sin imagen',
//     code: 'abc123',
//     stock: 25,
//   };
//   const addedProduct = productManager.addProduct(newProduct);
//   console.log('Producto agregado:', addedProduct);
  
//   // Obtener todos los productos
//   const allProducts = productManager.getProducts();
//   console.log('Todos los productos:', allProducts);
  
//   // Agregar un producto con código repetido
//   try {
//     productManager.addProduct(newProduct);
//   } catch (error) {
//     console.error('Error al agregar producto:', error.message);
//   }
  
//   // Obtener un producto por id
//   try {
//     const productById = productManager.getProductById(addedProduct.id);
//     console.log('Producto por id:', productById);
//   } catch (error) {
//     console.error('Error al obtener producto por id:', error.message);
//   }
  
//   // Actualizar un producto
//   const updateFields = {
//     title: 'Nuevo título',
//     description: 'Nueva descripción',
//     price: 300,
//   };
//   try {
//     const updatedProduct = productManager.updateProduct(addedProduct.id, updateFields);
//     console.log('Producto actualizado:', updatedProduct);
//   } catch (error) {
//     console.error('Error al actualizar producto:', error.message);
//   }
  
//   // Eliminar un producto
//   try {
//     productManager.deleteProduct(addedProduct.id);
//     console.log('Producto eliminado correctamente');
//   } catch (error) {
//     console.error('Error al eliminar producto:', error.message);
//   }
  
//   // Obtener todos los productos después de eliminar uno
//   const remainingProducts = productManager.getProducts();
//   console.log('Productos restantes:', remainingProducts);


// const fs = require("fs")

// const date = new Date().toDateString()

// fs.writeFile("archivo.txt", date, (err)=>{
//   if(err) console.log(err)

// })

// fs.readFile("archivo.txt", "utf-8",(err,str)=>{
//   if(err) console.log(err);
//   return console.log(str);})

//   fs.unlink("archivo.txt", (err)=>{
//     if(err) console.log(err);
//     else console.log("eliminado");
    
//   })



