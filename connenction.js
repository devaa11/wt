var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'mydb1' //add this after the created database
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  //to create teh database
//   con.query("CREATE DATABASE mydb1", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });

  //to create the table in database 
// con.query("create table mytable(name varchar(20),department varchar(20),phone_no int(10))",
//     function(err,result){
//         if (err) throw err;
//         console.log("Created Table Sucessfully");
//
//   });

//To insert the multiple data into the table
var record=[
          ["Kartik paul","Information Technology",7887317651],
          ["Ganesh Mulye","BCOM ",7887017651],
          ["Nikhil Patil","Information Technology",7887317851],
]

    // var InsertSql = "INSERT INTO mytable (name, department,phone_no) VALUES ? ";
    // con.query(InsertSql,[record],
    //   function(err,result){
    //       if (err) throw err;
    //       console.log("Inserted Sucessfully");
  
    //   });

      //to enter data in the table
    // var InsertSql = "INSERT INTO mytable (name, department,phone_no) VALUES ("Devendra bharambe","Computer science",7887317651) ";
    // con.query(InsertSql,
    //   function(err,result){
    //       if (err) throw err;
    //       console.log("Inserted Sucessfully");
  
    //   });

    //to retirve the data from the mytable
      var retriveSql = "Select * from mytable";
      con.query(retriveSql,
        function(err,result,fields){
            if (err) throw err;
            console.log(result);
            console.log(" Sucessfully");
    
        });

      //to retrive the data using where caulse
        con.query("SELECT * FROM mytable WHERE department = 'Information Technolo'", function (err, result) {
          if (err) throw err;
          console.log(result);
        });
