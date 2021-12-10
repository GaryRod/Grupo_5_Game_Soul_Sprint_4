const express = require('express');
const router = express.Router();
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/', productController.index);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
router.get('/productDetail/:juegoId', productController.productDetail);

router.get('/createProduct',productController.createProduct);

router.get('/productCart', productController.productCart)

router.get("/editProduct", productController.editProduct);

module.exports = router
