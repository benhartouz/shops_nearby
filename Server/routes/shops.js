const shops = (app, db) => {

    // get all shops
    app.get("/shops", (req, res) => {
        // shops code goes here
        res.send("shops")
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
  