const express = require("express");
const router = express.Router();

const calculatorController = require("./exercise4");

router.get("/add", calculatorController.add);
router.get("/subtract", calculatorController.subtract);
router.get("/multiply", calculatorController.multiply);
router.get("/divide", calculatorController.divide);
router.get("/exponent", calculatorController.exponent);

module.exports = router;

// // Route for addition operation
// router.get("/calculator/add", (req, res) => {
//   const num1 = parseInt(req.query.num1);
//   const num2 = parseInt(req.query.num2);
//   const result = num1 + num2;
//   res.json({ result });
// });

// // Route for subtraction operation
// router.get("/calculator/subtract", (req, res) => {
//   const num1 = parseInt(req.query.num1);
//   const num2 = parseInt(req.query.num2);
//   const result = num1 - num2;
//   res.json({ result });
// });

// // Route for multiplication operation
// router.get("/calculator/multiply", (req, res) => {
//   const num1 = parseInt(req.query.num1);
//   const num2 = parseInt(req.query.num2);
//   const result = num1 * num2;
//   res.json({ result });
// });

// // Route for division operation
// router.get("/calculator/divide", (req, res) => {
//   const num1 = parseInt(req.query.num1);
//   const num2 = parseInt(req.query.num2);
//   const result = num1 / num2;
//   res.json({ result });
// });

// router.get("/calculator/exponentiate", (req, res) => {
//   const { num1, num2 } = req.query;
//   const result = Math.pow(num1, num2);
//   res.json({ result });
// });

// module.exports = router;


