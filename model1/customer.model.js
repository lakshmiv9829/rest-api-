const sql = require("../config/dbconfig");

// constructor
const Customer = function (customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};


Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
    //new Promise(resolve,reject){
      
   // }
    if (err) {
      console.log("error: ", err);
      result(err, null); 
      return;
    }
  

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customer.findById = (customerId, result) => {
  //console.log("111111")

  sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }
    //console.log('222222222')

    // not found Customer with the id
    result({ Message: "not_found" }, null);
  });
};

Customer.getAll = result => {
  sql.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }
    console.log("customer:", res);
    result(null, res)
  });
};
Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};
Customer.remove = (id, result) => {
  console.log("object")
  sql.query(`DELETE FROM customers WHERE id = ${id} `,(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ Message: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

module.exports = Customer;
