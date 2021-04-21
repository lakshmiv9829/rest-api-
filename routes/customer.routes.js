const express = require("express");
const { Router } = express;
const customers = require('../controllers1/customer.controller')

const router = Router();

router.post("/customers", customers.create);
router.get("/customers/:customerId", customers.findOne);
router.get("/customers", customers.findAll);
router.put("/customers/:customerId", customers.update);
router.delete("/customers/:customerId",customers.delete,)
module.exports = router;


// module.export=app=>{
// const customers = require("../controllers1/customer.controller");
// router.post("/customers", customers.create);
// module.exports = router;
// };
