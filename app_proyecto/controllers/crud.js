const conexion= require('../database/db');


//exportamos la nueva tarea
exports.save = (req,res)=> {
    const email = req.body.email;
    const fecha = req.body.fecha;
    const tarea = req.body.tarea;
    conexion.query('INSERT INTO tareas SET ?', {user_id:email, created_at:fecha, task:tarea}, (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/index');
        }
    })

    console.log(email +' - '+ fecha +' - '+ tarea +' - ')
    
}

//hacemos update al editar la tarea
exports.update = (req,res)=> {
    const email = req.body.email;
    const fecha = req.body.fecha;
    const tarea = req.body.tarea;
    const id = req.params.id;
    
    conexion.query('UPDATE tareas SET user_id=?, created_at=?, task=? WHERE id = ? ',[email,fecha,tarea, id], (error, results) => {
        if(error){
            console.log('error al actualizar', error);
        }else{
            res.redirect('/index');
        }
    })
        
}



