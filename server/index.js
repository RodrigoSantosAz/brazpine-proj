const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'c3yassLOE',
  database:'brazpinedb',
})
app.use(cors());
app.use(express.json());

app.get('/getData',(req,res)=>{
  let SQL = "SELECT * FROM g_dbconnection";
  db.query(SQL,(err,result) =>{
    if(err) console.log(err)
    else res.send(result);
  })
})

app.post('/checkname',(req,res) =>{
  
  const {name} = req.body;

  let SQL = "SELECT * FROM g_dbconnection WHERE name = " + "'"+ name +"'"

  db.query(SQL,(err,result) =>{
    if(err) console.log(err);
    else {console.log(result);res.send(result)  }
  })
})

app.post('/register',(req,res) =>{

  const {id} = req.body;
  const {createdBy} = req.body;
  const {createdOn} = req.body;
  const {updatedby} = req.body;
  const {updatedOn} = req.body;
  const {isActive} = req.body;
  const {name} = req.body;
  const {client} = req.body;
  const {host} = req.body;
  const {port} = req.body;
  const {user} = req.body;
  const {password} = req.body;
  const {database} = req.body;
  const {poolMin} = req.body;
  const {poolMax} = req.body;
  const {filename} = req.body;
  const {connectionString} = req.body;

  let testeOn = createdOn.substr(0, 9);
  console.log('deu isso =' +createdOn)
  let create = createdOn.substr(0, 9);
  console.log('deu isso =' +updatedOn)


  let SQL = "INSERT INTO g_dbconnection VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"

  db.query(SQL,[id,createdBy,createdOn,updatedby,updatedOn,isActive,name,client,host,port,user,password,database,poolMin,poolMax,filename,connectionString],(err,result) =>{
    console.log(err)  
  })
})

app.put('/update',(req,res) =>{

  const {id} = req.body;
  const {createdBy} = req.body;
  const {createdOn} = req.body;
  const {updatedby} = req.body;
  const {updatedOn} = req.body;
  const {isActive} = req.body;
  const {name} = req.body;
  const {client} = req.body;
  const {host} = req.body;
  const {port} = req.body;
  const {user} = req.body;
  const {password} = req.body;
  const {database} = req.body;
  const {poolMin} = req.body;
  const {poolMax} = req.body;
  const {filename} = req.body;
  const {connectionString} = req.body;

  let SQL = "UPDATE `brazpinedb`.`g_dbconnection` SET `isActive` = ?, `name` = ?, `client` = ?, `host` = ?, `port` = ?, `user` = ?, `password` = ?, `database` = ?, `poolMin` = ?, `poolMax` = ?, `filename` = ?, `connectionString` = ? WHERE (`id` = ?);"
  console.log('aqui chego pelo menos')
  db.query(SQL,[isActive,name,client,host,port,user,password,database,poolMin,poolMax,filename,connectionString,id],(err,result) =>{
    console.log(err)  
  })
})

app.delete('/delete/:id',(req,res) =>{
  const {id} = req.params;
  let SQL = "DELETE FROM g_dbconnection WHERE id = ?"

  db.query(SQL,[id],(err,result) =>{
    if(err) console.log(err)
    else res.send(result);
  })
})

app.listen(3001,() =>{
  console.log('rodando servidor')
});