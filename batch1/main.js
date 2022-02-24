const express = require("express");

const app = express();

app.listen(3000, (errors) => {
    if (errors) {
        console.log(errors);
    }
    else {
        console.log("Server started on port 3000");
    }
});
