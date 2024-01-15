const express = require('express');
const router = express.Router();

const conexion = require('./database/db');


//ruta pagina inicio
router.get('/', (req,res) =>{
    console.log('Ruta Login funccionando');
    res.render('login')

});


//ruta para hacer el login
router.post('/checklogin', (req,res) => {

    conexion.query('SELECT * FROM login WHERE user_name = ? AND user_pass = ?', [req.body.username, req.body.password], (error,results) => {
        
        if(error){
            throw error;
        }
        if(results.length > 0){
            res.redirect('index')
        }else{
            res.redirect('/')
        }
    })
})


//ruta tabla tareas (index)
router.get('/index', (req,res) =>{
    conexion.query('SELECT * FROM tareas', (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('index', {results:results})
        }
    })
});


//la ruta para crear
router.get('/crear', (req,res)=> {
    res.render('crear');
});


//la ruta para editar
router.get('/editar/:id', (req,res) => {
    const id = req.params.id; 
    conexion.query('SELECT * FROM tareas WHERE id=?',[id], (error,results) => {
        if(error){
            console.log('error');
        }else{
            res.render('editar', {tarea:results[0]});
        }
    
    });
});



//ruta para eliminar
router.get('/delete/:id', (req,res) => {
    const id = req.params.id
    conexion.query('DELETE FROM tareas WHERE id= ?', [id], (error, results)=> {
        if(error){
            console.log('error');
        }else{
            res.redirect('/index');
        }
    });
});






const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update/:id', crud.update);



module.exports = router;
