const express = require("express");

let router = express.Router();

router.get("/home", (request, response) => {
    response.send("Welcome to Dev 2");
});

router.get("/sum", (request, response) => {
    let sum = request.query.a + request.query.b;
    response.send("sum" + sum);
});