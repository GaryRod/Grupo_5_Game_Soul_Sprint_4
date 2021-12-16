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
        let juegoUnico = juegos.find(juego => juego.id == req.params.id)

        res.render('./products/productDetail', {title: "Detalles", juego: juegoUnico})
    },
    editProduct: (req, res) => {
        res.render('./products/editProduct', {title: "Editar producto"})
    },
    store: (req, res) => {
		let nuevoJuego = {
			nombre : req.body.nombre,
			descripcion : req.body.descripcion,
			precio : req.body.precio,
			edicion : req.body.edicion,      
			img: req.body.img,
			categoria : req.body.categoria
		}
		productModel.create(nuevoJuego)
		res.redirect('/')
	},
    update: (req, res) => {
		let productToUpdate = productModel.find(req.params.id)
		let objetoAct ={
			id : productToUpdate.id,
			nombre : req.body.nombre,
			descripcion : req.body.descripcion,
			precio : req.body.precio,
			edicion : req.body.edicion,      
			img: productToUpdate.img,
			categoria : req.body.categoria
        }

		productModel.update(objetoAct)
		res.redirect('/')
			
	},
    destroy : (req, res) => {
		productModel.delete(req.params.id)
		
		res.redirect('/')
		
	}

}

module.exports = productController