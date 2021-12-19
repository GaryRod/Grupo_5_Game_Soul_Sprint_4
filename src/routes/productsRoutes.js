const express = require('express');
const router = express.Router();
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
// router.get('/', productController.index);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
router.get('/products', productController.products)

router.get('/products/:id', productController.productDetail);

router.get('/productCart', productController.productCart);

router.get('/create', productController.createProduct);
router.post('/create', productController.store);

router.get('/products/edit/:id', productController.editProduct);
router.put('/products/edit/:id', productController.update);

router.delete('/products/delete/:id', productController.destroy)

module.exports = router
