const users = (app, db) => {
  // Get all users
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
      results.message = "Usersname and password can not be null ";
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
        results.message = "you are logged with success";
        results.data = result.ops[0];
        res.send(results);
      }
    });
  });
};
module.exports = users;
