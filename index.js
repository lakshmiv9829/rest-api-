// let express = require('express');
// let bodyparser = require('body-parser')
// const app = express();
// const db = require('./config/db')

// app.use()

// app.listen(8080)

// app.get('/', (req, res, next) =>{
//     console.log("basic router")

//     db.query(``, ()=>{

//     })
//     myFunction();
//     res.send("test response!")
// });

// app.get("/test", ()=>{

//     console.log("function-->");
// })


// function myFunction(){
//     let x = (1, 2, 3); 
//     console.log("x-value-> ", x);
// }
// let myAnotherFunction = (params) =>{
//     return 0;
// } 

/**
 * Create MySQL DB techactive
 * Create table users ( id(primary key), first_name, last_name, dob(date), email, mobile, created_at(datetime), updated_at(datetime))
 */
/** 
 * GET API to list the users from MySQL
 * Add user to the MySQL table and send the response true if added/error if error 
 * Update the user 
 * Delete 
 */

// app.get('/', (req, res) => {
//   res.send('Hello World!') 
// });


//


// const express = require('express')
// const app = express();
// const port = 8020;
// const {getUserList} = require('./TechActive')
// const userList=getUserList();
// app.get('/TechActive', function(req, res) {
//   // console.log("api is hitting")
//    return res.status(200).send({
//      success:'true',
//      message:'TechActive',
//      TechActive:getUserList()
//    })
//   });
// app.listen((port), () =>{
//   console.log(`app is listening port number ", ${port}`)
// })


// const express = require('express')
// const app = express();
// const port = 8020;
// app.get('/calculator/add', function (req, res) {
//   response = {
//     result: req.query.param1 + req.query.param2,
//  };
//  res.end(JSON.stringify(response));
// })

//requiring cal.js file
//requiring cal.js file
// const cal = require("./cal.js")  

// //Using the functions from cal.js 
// const sum = cal.sum(2, 2);
// console.log(sum); 

// const sub = cal.sub(10, 5);
// console.log(sub); 

// const product = cal.mul(2, 3);
// console.log(product);


// 

// const express=require(`express`)
// const app=express();
// const userList=require("./TechActive")


// import {getUserList} from `./TechActive`
// const list=getUserList();
// userList.func()
// app.get('/', (req, res) => {

//    return res.status(200).send({
//      success:'true',
//      message:'list',
//      list:userList
//    })

// });

// const port = 8020
// app.listen((port), () => {
//   console.log(`app is listening, ${port}`)
// }) ;

// const express=require(`express`)
// const app=express();
// const bodyParser = require('body-parser');
// const user=require('./app/routes/user.route.js')
// //require('./app/routes/user.route')
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.post('/api/addNum',(req,res)=>{
//   var num1 = req.body.num1;
//     var num2 = req.body.num2;
//    let result = num1 + num2
//    return res.status(200).send({
//          success:'true',
//          result:result
//        })
// })

const express = require(`express`)
const app = express();

app.post('/api/add', (req, res) => {
  var parm1 = parseInt(req.query.parm1);
  var parm2 = parseInt(req.query.parm2);
  let sum = parm1 + parm2
  //console.log(sum)
  return res.status(200).send({
    success: 'true',
    sum: sum
  });
})
// const express=require(`express`)
// const app=express();

app.post('/api/add/:parm1/:parm2', (req, res) => {
  var parm1 = parseInt(req.params.parm1);
  var parm2 = parseInt(req.params.parm2);
  let sum = parm1 + parm2
  //console.log(sum)
  return res.status(200).send({
    success: 'true',
    sum: sum
  });

  app.post('routes/user.route.js')(app)
})



const port = 8020
app.listen((port), () => {
  console.log(`app is listening, ${port}`)
}) ;


// const express=require(`express`)
// const app=express();
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// //const user=require('./app/routes/user.route.js')
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// var pool=mysql.createPool({
//   connectionLimit : 10,

//  //mysqlConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Lakshmi',
//   database: 'x-workz',
//   //multipleStatements: true
// });
// pool.getConnection((err)=>{
  
// //mysqlConnection.connect((err) => {
//   if (err)
//     console.log('Connection Failed!' + JSON.stringify(err, undefined, 2))
//   else
//     console.log('Connection Established successfully');
// });
// //function created(req,res){
// app.get==('/x-workz',(req, res) => {
//   mysqlConnection.query('SELECT * FROM techactive', (err, rows, fields) => {
//     if (!err)
//       res.send(rows);
//     else
//       console.log(err);
  
//   });
// });



// app.get('/x-workz/:id', (req, res) => {
//   mysqlConnection.query('SELECT * FROM   techactive WHERE id = ?', [req.params.id], (err, rows, fields) => {
//     if (!err)
//       res.send(rows);
//     else
//       console.log(err);
//   })
// });
// app.post('/x-workz', function (req, res) {
//   var postData = req.body;
//   mysqlConnection.query('INSERT INTO techactive SET ?', postData, function (err, results, fields) {
//     if (!err)
//       res.send("created successfully");
//     else
//       console.log(err);
//   })
// });

// app.put('/x-workz/:id', function (req, res) {
//   const { id } = req.params
//   const { FIRST_NAME, LAST_NAME, DOB, EMAIL, MOBILE_NO, CREATE_DATE, UPDATE_DATE } = req.body
//   //const list = 'UPDATE `techactive` SET  `FIRST_NAME`=? WHERE id=?'                              
//   mysqlConnection.query('UPDATE `techactive` SET  `FIRST_NAME`=? WHERE id=?', [FIRST_NAME, id], function (err, results) {
//     if (!err)
//       res.send(results);
//     else
//       console.log(err);
//   })

// });


// app.delete('/x-workz/:id', (req, res) => {
//   mysqlConnection.query('DELETE FROM techactive WHERE ID= ?', [req.params.id], (err, rows, fields) => {
//     if (!err)
//       res.send(' Record deleted successfully.');
//     else
//       console.log(err);
//   })
// });
// const port = 8020
// app.listen((port), () => {
//   console.log(`app is listening, ${port}`)
// });
// //};