const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/api/payments" , paymentController.allPayments);
router.post("/api/payment", paymentController.newPayment);

module.exports = router;