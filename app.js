const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/contacto', (req,res) => {
    res.render('pages/contacto', {
        title: 'Nachota.Inc | Contacto'
    })
});

app.get('/', (req,res) => {
    res.render('index', {
        title: 'Nachota.Inc',
        test: {
            name: 'Prueba'
        }
    })
});

app.listen(3000, () => {
    console.log('Puerto 3000');
});