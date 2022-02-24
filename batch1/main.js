const { response } = require("express");

const express = require("express");

const database =  require("./data");

let router = express.Router();

router.get("/home", (request, response) => {
    response.send("Welcome to Dev 2");
});



router.get("/sum", (request, response) => {
    let sum = request.query.a + request.query.b;
    response.send("sum" + sum);
});

router.get("/user/all", (request, response) => {
   let users = database.get_all_users();
   response.send(users);

});

router.get("/user/by-uid", (request, response) => {
    let users = database.get_user_by_user_id(request.query.user_id);
    response.send(users);
  });

router.get("/user/add", (request, response) => {
    let user = request.body;
    database.add_user(user);
    response.send("User added");
  });


let app = express();

app.use(router);

//app.get();

app.listen(3000, (errors) => {
    if (errors) {
        console.log(errors);
    }
    else {
        console.log("Server started on port 3000");
    }
});