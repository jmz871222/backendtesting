const { response } = require("express");

const {router} = require ("./routers");


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