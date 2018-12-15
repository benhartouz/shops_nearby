const users = (app, db) => {
  // Signup route
  app.post("/signup", (req, res) => {
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

  // Signup route
  app.post("/login", (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    let results = {
      code: "",
      message: "",
      data: {}
    };

    //console.log("req.body.username:",req.body.username);
    const email = req.body.username;
    const password = req.body.password;
    if (email === undefined || password === undefined) {
      results.code = 400;
      results.message = "Usersname and password can not be empty";
      res.send(results);
      res.end(results);
    }
   // const user = { email: req.body.username, password: req.body.password };
    const details = { "email" : email , "password" :  password };
    db.collection('users').findOne(details, (err, user) => {
      if (err) {
        results.code = 401;
        results.message = "An error has occurred";
        res.send(results);
      } else {
          if(user === null){
            results.code = 404;
            results.message = "User with detials inserted not found";
            res.send(results);
          }else{
            results.code = 200;
            results.message = "Your logged succesfully";
            results.data = user;
            res.send(results);
          }
        
      }
    });
  });
};
module.exports = users;
