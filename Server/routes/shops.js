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
  });

  // get shop by lat and lng
  app.post("/shopbydistance", (req, res) => {
    // shops code goes here
  });
};
module.exports = shops;
