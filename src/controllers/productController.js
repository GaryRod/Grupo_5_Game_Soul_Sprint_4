const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products');

const productController = {
    products: (req, res) => {
		let producto = productModel.all();
        res.render('./products/products', {producto})
    },
    productDetail: (req, res) => {
		let producto = productModel.find(req.params.id)
		res.render('./products/productDetail', {producto})
    },
	productCart: (req,res) => {
		res.render('./products/productCart')
	},
	createProduct: (req, res) => {
		res.render('./products/createProduct',)
	},
    store: (req, res) => {
		let nuevoJuego = {
			nombre : req.body.nombre,
			descripcion : req.body.descripcion,
			precio : req.body.precio,
			edicion : req.body.edicion,      
			img: req.body.img,
			genero: req.body.genero,
			categoria : req.body.categoria
		}
		productModel.create(nuevoJuego)
		res.redirect('/')
	},
	editProduct: (req, res) => {
		let productToEdit = productModel.find(req.params.id)
		res.render('./products/editProduct', {productToEdit})
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
			genero: req.body.genero,
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