const shops = (app, db) => {
  // get all shops
  app.get("/shops", (req, res) => {
    let results = {
      code: "",
      message: "",
      data: {}
    };
    db.collection("shops")
      .find({})
      .toArray((err, result) => {
        console.log(result);
        if (err) {
          results.code = 401;
          results.message = "An error has occurred";
          res.send(results);
        } else {
          results.code = 200;
          results.message = "You get shops with success";
          results.data = result;
          res.send(results);
        }
      });
  });

  // get shop by id
  app.get("/shop/:id", (req, res) => {
    // shops code goes here
    let results = {
      code: "",
      message: "",
      data: {}
    };
    const details = { email: email, password: password };
    db.collection("shops").findOne(details, (err, result) => {
      console.log(result);
      if (err) {
        results.code = 401;
        results.message = "An error has occurred";
        res.send(results);
      } else {
        results.code = 200;
        results.message = "You get shops with success";
        results.data = result;
        res.send(results);
      }
    });
  });

  // get shop by lat and lng
  app.post("/shopbydistance", (req, res) => {
    // shops code goes here
  });

  app.post("/like", (req, res) => {
    let results = {
      code: "",
      message: "",
      data: {}
    };
    const userId = req.body.userId;
    const shopId = req.body.shopId;
    if (email === undefined || password === undefined) {
      results.code = 400;
      results.message = "User id and shop id is required";
      res.send(results);
    }
    const likeShops = { userId: userId, shopId: shopId };
    db.collection("preferred_shop").insertOne(likeShops, (err, result) => {
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

  app.post("/dislike", (req, res) => {
    let results = {
      code: "",
      message: "",
      data: {}
    };
    const userId = req.body.userId;
    const shopId = req.body.shopId;
  });

};
module.exports = shops;
