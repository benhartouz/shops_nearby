const express  = require("express");
const MongoClient  = require("mongodb").MongoClient;
const bodyParser  = require("body-parser");
const app = express();


// start server 
const port = 8080;
app.listen( port  , () => {
    console.log("your server is connected to 8080" + port);
});