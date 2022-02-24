const { response } = require("express");
let express = require("express");

let app = express();

let router = express.Router();

router.get("/home", (request, response) => {
    response.send("Welcome to Dev 2");
});

app.use(router);

app.listen(3000, (errors) => {
    if (errors) {
        console.log(errors);
    }
    else {
        console.log("Server started on port 3000");
    }
});