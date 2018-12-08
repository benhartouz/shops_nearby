const shops = (app, db) => {

    // get all shops
    app.get("/shops", (req, res) => {
        let results = {
            code: "",
            message: "",
            data: {}
          };
      
          console.log("req.body.username:",req.body.username);
          const email = req.body.username;
          const password = req.body.password;
          if (email === undefined || password === undefined) {
            results.code = 400;
            results.message = "Email and password can not be empty";
            res.send(results);
          }
          const user = { email: req.body.username, password: req.body.password };
          db.collection("users").insertOne(user, (err, result) => {
            if (err) {
              results.code = 401;
              results.message = "An error has occurred";
              res.send(results);
            } else {
              results.code = 200;
              results.message = "you are signed up with success";
              results.data = result.ops[0];
              res.send(results);
            }
          });
    });

    // get shop by id
    app.get("/shop/:id", (req, res) => {
        // shops code goes here
    });

    // get shop by lat and lng
    app.post("/shopbydistance", (req, res) => {
        // shops code goes here
    });

  };
  module.exports = shops;
  