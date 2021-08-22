const express = require('express');
const app = express();
const path = require('path');
const data = require('./utils/data');
const title = 'Nachota.Inc'
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    data.getAllDestacados((error, data) => {
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('index', {
            title,
            JSONBody
        });
    });
});

app.get('/ofertas', (req, res) => {
    data.getAllOfertas((error, data) => {
        if(error){
            return res.send({
                error
            })
        }
        const JSONBodyOfertas = JSON.parse(data);
        return res.render('pages/ofertas', {
            title: `${title} | Ofertas`,
            JSONBodyOfertas
        });
    });    
});

app.get('/productos', (req, res) => {
    data.getAllProductos((error, data) => {
        if(error){
            return res.send({
                error
            })
        }
        const JSONBodyProductos = JSON.parse(data);
        return res.render('pages/productos', {
            title: `${title} | Productos`,
            JSONBodyProductos
        });
    });    
});


app.get('/figuras', (req, res) => {
    data.getAllFiguras((error, data) => {
        if(error){
            return res.send({
                error
            })
        }
        const JSONBodyFiguras = JSON.parse(data);
        return res.render('pages/figuras', {
            title: `${title} | Figuras`,
            JSONBodyFiguras
        });
    });    
});

app.get('/mangas', (req, res) => {
    data.getAllMangas((error, data) => {
        if(error){
            return res.send({
                error
            })
        }
        const JSONBodyMangas = JSON.parse(data);
        return res.render('pages/mangas', {
            title: `${title} | Mangas`,
            JSONBodyMangas
        });
    });    
});


app.get('/contacto', (req, res) => {
    res.render('pages/contacto', {
        title:  `${title} | Contacto`
    })
});

app.listen(port, ()=>{
    console.log('Funcionando en el puerto 3000')
})