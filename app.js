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
    data.getAllProducts((error, data) => {
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
            title,
            JSONBodyOfertas
        });
    });    
});

app.get('/productos', (req, res) => {
    res.render('pages/productos',{
        title: `${title} | Productos`,
    })
});

app.get('/figuras', (req, res) => {
    res.render('pages/figuras',{
        title: `${title} | Figuras`,
    })
});

app.get('/mangas', (req, res) => {
    res.render('pages/mangas',{
        title: `${title} | Mangas`,
    })
});

app.get('/contacto', (req, res) => {
    res.render('pages/contacto', {
        title:  `${title} | Contacto`
    })
});

app.listen(port, ()=>{
    console.log('Funcionando en el puerto 3000')
})