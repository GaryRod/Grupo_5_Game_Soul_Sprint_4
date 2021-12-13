const juegosDB = require("../data/products.json");

const productController = {
    index: (req, res) => {
        res.render('./products/index', {title: "Home", listaJuegos: juegos})
    },
    products: (req, res) => {
        res.render('./products/products', {title: "Productos", listaJuegos: juegos})
    },
    createProduct: (req, res) => {
        res.render('./products/createProduct', {title: "Crear Producto" })
    },
    productCart: (req, res) => {
        res.render('./products/productCart', {title: "Carrito"})
    },
    productDetail: (req, res) => {
        let juegoUnico = juegos.find(juego => juego.id == req.params.juegoId)

        res.render('./products/productDetail', {title: "Detalles", juego: juegoUnico})
    },
    editProduct: (req, res) => {
        res.render('./products/editProduct', {title: "Editar producto"})
    }
}

module.exports = productController


const juegos = [
    {
        id: 1,
        nombre: "Cyber Punk 2077",
        precio: "10.000",
        descripcion: "Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad.",
        img: "cyberpunk-2077-250px.jpg"
    },
    {
        id: 2,
        nombre: "Fifa 22",
        precio: "11.000",
        descripcion: "Juega a FIFA 22 y consigue un artículo de jugador de nueva generación. Recibe un artículo de jugador de nueva generación intransferible en FIFA Ultimate Team a partir del 15 de diciembre por jugar a FIFA 22 antes del 14 de enero de 2022.",
        img: "fifa-22-250px.jpg"
    },
    {
        id: 3,
        nombre: "Forza Horizon 5",
        precio: "11.000",
        descripcion: "¡La aventura Horizon definitiva te espera! Explora los vibrantes paisajes de mundo abierto en constante evolución situado en México, y disfruta de una acción de conducción ilimitada y divertida con cientos de los mejores coches del mundo.",
        img: "forza-horizon-5-250px.jpg"
    },
    {
        id: 4,
        nombre: "Battlefield 4",
        precio: "12.500",
        descripcion: "Battlefield™ 2042 es un shooter en primera persona que marca el regreso a la emblemática guerra total de la franquicia. En un mundo en el futuro cercano transformado por el desorden, adáptate y sobrevive con la ayuda de tu patrulla y un arsenal de vanguardia en campos de batalla en constante...",
        img: "battlefield.jpg"
    },
    {
        id: 5,
        nombre: "AOE 4",
        precio: "10.500",
        descripcion: "Uno de los juegos de estrategia en tiempo real más queridos vuelve a demostrar todo su esplendor con Age of Empires IV, donde serás la estrella de las épicas batallas históricas que moldearon el mundo que hoy conocemos.",
        img: "age-of-empires-4-150px.jpg"
    },
    {
        id: 6,
        nombre: "Yakuza Kiwami",
        precio: "9.500",
        descripcion: "El aclamado juego de SEGA que dio pie a una leyenda de los videojuegos. Conviértete en Kazuma Kiryu, un integrante de la yakuza que asume la culpa por el asesinato de un jefe del crimen organizado. 10 años después, sale de la trena y se encuentra un mundo muy distinto al que dejó.",
        img: "yakuza-kiwami-250px.jpg"
    },
    {
        id: 7,
        nombre: "Inscryption",
        precio: "12.500",
        descripcion: "Inscryption es un juego de cartas, una odisea negra como la tinta que mezcla el «roguelike» de creación de mazos, puzles de estilo «escape room» y terror psicológico en un batido con un toque de sangre. Pero más oscuros aún son los secretos inscritos en las cartas...",
        img: "inscryption-250px.jpg"
    },
    {
        id: 8,
        nombre: "Assassin's Creed Valhalla",
        precio: "11.500",
        descripcion: "Bayek de Siwa y Aya de Alejandría fueron los precursores de la Hermandad de los Asesinos, entonces conocida como la Orden de los Ocultos. Desde el principio, su destino estuvo ligado al de la Orden de los Antiguos, que más tarde adquirió otro nombre, el de los Templarios. Las centurias pasaron, pero el conflicto entre ambos credos se prolongó en el tiempo, hasta acariciar el presente. La historia de Assassin's Creed Valhalla, el nuevo trabajo de Ubisoft Montreal, abandona el mundo antiguo para situarse en el siglo IX d.c., un período más cercano a la época de la refundación del culto.",
        img: "ACValhalla-250px.jpg"
    },
    {
        id: 9,
        nombre: "God of War 4",
        precio: "10.000",
        descripcion: "Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre en los dominios de los dioses y monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir… y enseñar a su hijo a hacerlo también.",
        img: "God_of_War-150px.jpg"
    }
]
