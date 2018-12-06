const note_routes = require("./users");
module.exports = function(app, db) {
  note_routes(app, db);
};
