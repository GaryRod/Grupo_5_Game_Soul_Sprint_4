const express = require('express');
const router = express.Router();
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/', productController.index);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
router.get('/products', productController.products)

router.get('/products/:id', productController.productDetail);
router.post('/products/:id', productController.store);

router.get('/products/create',productController.createProduct);

router.get('/productCart', productController.productCart)

router.get("/products/:id/edit", productController.editProduct);
router.put("/products/:id/edit", productController.update);

router.delete("/products/delete/:id", productController.destroy)

module.exports = router