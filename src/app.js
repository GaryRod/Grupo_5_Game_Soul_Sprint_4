const express = require("express");
const app = express();
const productsRoutes = require('./routes/productsRoutes')
const userRoutes = require('./routes/userRoutes')
const path = require('path')
const methodOverride = require('method-override');


app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set("views", path.resolve(__dirname, "./views"))


app.use('/', productsRoutes)

app.use('/', userRoutes)

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(methodOverride('__method'));

app.use((req,res,next)=>{
    res.status(404).render(path.resolve(__dirname,'views/products/not-found'))
})


app.listen(process.env.PORT || 3000, () => { 
    console.log("Servidor funcionando")
});