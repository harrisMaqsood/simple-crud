const express = require('express');
const router = express.Router();
const connection = require('../models/db');

router.get('/' , (request , response)=>{
    connection.query('SELECT * FROM studentdata' , (error , results , fields)=>{
        if(!error){
            data = results;
            response.render('home' , data);
        }else{
            console.log('there was an error while getting the data');
        }
    });
});

router.post('/' , (request , response)=>{
    connection.query('INSERT INTO studentdata(id , fullName) VALUES(? , ?)' , [request.body.txtID , request.body.txtFullName] , (error , results , fields)=>{
        if(!error){
            console.log("data has been successfully inserted");
            response.redirect('/students');
        }else{
            console.log("there was an error while inserting the data");
        }
    });
});

router.get('/delete/:id' , (request , response)=>{
    connection.query('DELETE FROM studentdata where id = ?' , [request.params.id] , (error , result , fields)=>{
        if(!error){
            console.log("Data has been successfully deleted");
            response.redirect('/students');
        }else{
            console.log("There was an error while deleting");
        }
    })
})

router.get('/update/:id' , (request , response)=>{
    connection.query('SELECT * FROM studentdata where id = ?' , [request.params.id] , (error , result , field)=>{
        if(!error){
            data = result;
            response.render('update' , data);
        }else{
            console.log("There was an error while getting the update data");
        }
    });
});

router.post('/update' , (request , response)=>{
    connection.query('UPDATE studentdata SET fullName = ? where id = ?' , [request.body.txtFullName , request.body.txtID] , (error , result , fields)=>{
        if(!error){
            console.log("Data has been successfully updated");
            response.redirect('/students');
        }else{
            console.log("There was an error while updating the data");
        }
    });
});

module.exports = router;