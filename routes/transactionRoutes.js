const express = require("express");
const { addNew, getAll, getSpecific } = require("../controllers/transactionController");


const router = express.Router();

router.post("/addNew", addNew);
router.get("/getAllTransactions", getAll);
router.post("/getSpecificTransaction", getSpecific);


module.exports = router;