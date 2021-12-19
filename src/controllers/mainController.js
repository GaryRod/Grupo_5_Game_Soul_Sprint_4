const juegosDB = require("../data/products.json");

const mainController = {
    index: (req, res) => {
        res.render('./index', {listaJuegos: juegosDB})
    },
}

module.exports = mainController