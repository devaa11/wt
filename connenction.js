var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'mydb' //add this after the created database
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  //to create teh database
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  //to create the table in database 
con.query("create table mytable(name varchar(20),department varchar(20),phone_no int(10))",
    function(err,result){
        if (err) throw err;
        console.log("Created Table Sucessfully");

    });

