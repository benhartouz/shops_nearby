const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
// start server
const port = 8080;

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    let db = database.db("shope_nearby");
    require("./routes")(app, db);
    app.listen(port, () => {
        console.log("We are live on " + port);
    });
});
