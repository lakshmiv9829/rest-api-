const express = require("express");
const app = express();
const { connection } = require('./config/dbconfig')

//const bodyParser = require('body-parser');
const mysql = require('mysql');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const customerRoute = require('./routes/customer.routes');

app.use(customerRoute)

//app.use('my-route', cust);

//app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.get("/", (req, res) => {
  console.log('i am local 8020')
});
//app.use(router)

//require("./routes/customer.routes.js")(app);


// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Lakshmi",
//     database: "xworkz"
// });
// // open the MySQL connection
// connection.connect(error => {
//     if (!error) 
//     console.log(`Successfully connected to the database`);
//     else{
//         console.log("connection failed");
//     }
// });

const port = 8020
app.listen((port), () => {
  console.log(`app is listening to: ${port}`)
});