const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students'
});

connection.connect((error)=>{
    if(!error){
        console.log("Database has been connected successfully");
    }else{
        console.log("There was an error connecting to the database");
    }
});

module.exports = connection;