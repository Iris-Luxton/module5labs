//Create a single Express backend with multiple web servers (see slide 15) 
//each running on different ports. Each one should print a different message to differentiate them.
/*
    This is exercise 1 for labFive - module 5
    The slide for this is slide 18 in the module 5 slides

    Your task is to create multiple web servers that run on different ports
    Those web servers must have the same functionality.
*/
const express = require("express");

const app1 = express();
const app2 = express();
const app3 = express();

app1.get("/", (req, res) => {
  res.send("Hello from server 1!");
});

app2.get("/", (req, res) => {
  res.send("Hello from server 2!");
});

app3.get("/", (req, res) => {
  res.send("Hello from server 3!");
});

app1.listen(3000, () => {
  console.log("Server 1 is listening on port 3000");
});

app2.listen(3001, () => {
  console.log("Server 2 is listening on port 3001");
});

app3.listen(3002, () => {
  console.log("Server 3 is listening on port 3002");
});