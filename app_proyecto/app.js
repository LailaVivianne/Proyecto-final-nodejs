//invocamos express
const express = require('express');
const app = express();


//invocamos el motor de plantillas
app.set('view engine', 'ejs');


// seteamos urlencoded para capturar los datos de la tabla
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', require('./router'));


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})








