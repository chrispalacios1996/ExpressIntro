const express = require("express");

const app = express();
let http = require("http").Server(app);

app.use("/", express.static("./"));
 app.use("/", express.static("./client"));

let port = 3000;

http.listen(port);
console.log("Express is now running on port " + port + ".");
