const { response } = require("express");
let express = require("express");

let app = express();

let router = express.Router();

router.get("/home", (request, response) => {
    response.send("Welcome to Dev 2");
});

router.get("/sum", (request, response) => {
    let sum = request.query.a + request.query.b;
    response.send("sum" + sum);
});

app.use(router);

app.get();

app.listen(3000, (errors) => {
    if (errors) {
        console.log(errors);
    }
    else {
        console.log("Server started on port 3000");
    }
});