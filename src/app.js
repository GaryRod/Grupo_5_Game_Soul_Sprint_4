const express = require("express");
const app = express();
const path = require('path')
const methodOverride = require('method-override');

const mainRoutes = require('./routes/mainRoutes')
const productsRoutes = require('./routes/productsRoutes')
const userRoutes = require('./routes/userRoutes')

// Archivos estáticos
app.use(express.static('public'));

// Requerimientos para templates
app.set('view engine', 'ejs')
app.set("views", path.resolve(__dirname, "./views"))

// Requerimientos para formularios
const methodOverride =  require('method-override'); 
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Rutas
app.use('/', mainRoutes)
app.use('/', productsRoutes)
app.use('/users', userRoutes)

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(methodOverride('__method'));

// Error 404
app.use((req,res,next)=>{
    res.status(404).render(path.resolve(__dirname,'views/products/not-found'))
})

const port = 3000

app.listen(process.env.PORT || port, () => { 
    console.log(`Servidor funcionando ${port}`)
});