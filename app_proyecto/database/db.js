//invocamos mysql 
const mysql = require('mysql');

//creamos la conexion con la base de datos mysql
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto_tareas'
});

conexion.connect((error) => {
    if(error){
        console.error('el error de conection es:' +error);
        return
    }
    console.log('Conectado a DB Mysql');
});

module.exports = conexion;