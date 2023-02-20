const express = require("express");
const app = express();
const port = 3000;
const calculatorRouter = require("./exercise3");
app.use("/calculator", calculatorRouter);
const router = require("./exercise3");
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
 '/api-docs',
 swaggerUi.serve,
 swaggerUi.setup(swaggerDocument)
);

app.use("/calculator", router);
app.use(express.static(__dirname + "/public"));

app.get("/calculator", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// app.get("/calculator/add", (req, res) => {
//   const num1 = Number(req.query.num1);
//   const num2 = Number(req.query.num2);
//   const result = num1 + num2;
//   res.json({ result });
// });

// app.get("/calculator/subtract", (req, res) => {
//   const num1 = Number(req.query.num1);
//   const num2 = Number(req.query.num2);
//   const result = num1 - num2;
//   res.json({ result });
// });

// app.get("/calculator/multiply", (req, res) => {
//   const num1 = Number(req.query.num1);
//   const num2 = Number(req.query.num2);
//   const result = num1 * num2;
//   res.json({ result });
// });

// app.get("/calculator/divide", (req, res) => {
//   const num1 = Number(req.query.num1);
//   const num2 = Number(req.query.num2);
//   const result = num1 / num2;
//   res.json({ result });
// });

// app.get("/calculator/exponent", (req, res) => {
//   const { num1, num2 } = req.query;
//   const result = Math.pow(num1, num2);
//   res.json({ result });
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });