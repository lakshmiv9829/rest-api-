const Customer = require("../model1/customer.model");

// function a() { 
//   dfdkfdkfk
// }
module.exports.create = (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body, "jj")
  // // Create a Customer
  const customer = new Customer({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });
  console.log(customer)
  // // Save Customer in the database
  exports.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};
exports.findOne = async (req, res) => {
  try {
  
    const result = await this.getUser(req.params.customerId)
    console.log('3333333333', result)
    res.send(result)

  } catch (error) {
    res.status(500).send({
      message: "id not found"
    });
  }
}

exports.getUser = (customerId) => new Promise((resolve, reject) => {
  Customer.findById(customerId, (err, data) => {
    if (err) {
      console.log(err)
      reject(err)
    } else
      console.log('22222222222', data)
    resolve(data)
    // } else res.send(data);
  })
})

exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    console.log("object")
    if (err)
    //
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};
    
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};
exports.delete = async (req, res) => {
  try {
    const result = await this.deleteUser(req.params.id)
    res.send({
      message: 'delectd successfully'
    });
  } catch {
    res.send({
      message: 'could not delete'
    });

  }

};
exports.deleteUser = (id) => new Promise((resolve, reject) => {
  Customer.remove(id, (err, data) => {
    if (err) {
      reject(err)
    } else
      console.log('22222222222')
    resolve(data)
    // } else res.send(data);
  })
});

  // Customer.remove(req.params.customerId, (err, data) => {
  //   if (err) {
  //     if (err.kind === "not_found") {
  //       res.status(404).send({
  //         message: `Not found Customer with id ${req.params.customerId}.`
  //       });
  //     } else {
  //       res.status(500).send({
  //         message: "Could not delete Customer with id " + req.params.customerId
  //       });
  //     }
  //   } else res.send({ message: `Customer was deleted successfully!` });
  // });
