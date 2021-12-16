const juegosDB = require("../data/products.json");

const productController = {
    index: (req, res) => {
        res.render('./products/index', {title: "Home", listaJuegos: juegosDB})
    },
    products: (req, res) => {
        res.render('./products/products', {title: "Productos", listaJuegos: juegosDB})
    },
    createProduct: (req, res) => {
        res.render('./products/createProduct', {title: "Crear Producto" })
    },
    productCart: (req, res) => {
        res.render('./products/productCart', {title: "Carrito"})
    },
    productDetail: (req, res) => {
        let juegoUnico = juegosDB.find(juego => juego.id == req.params.id)

        res.render('./products/productDetail', {title: "Detalles", juego: juegoUnico})
    },
    editProduct: (req, res) => {
        res.render('./products/editProduct', {title: "Editar producto"})
    }

}

module.exports = productController