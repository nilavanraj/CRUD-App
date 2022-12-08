
import mysql from "mysql";

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : undefined,
    database : 'test'
  });
   
connection.connect((err)=>{
  if(!err){
   // console.log("Connected")
  } else {
    // console.log(err)

  }
});
export default connection;
