const users_routes = require("./users");
const shops_routes = require("./shops");
module.exports = function(app, db) {
    users_routes(app, db);
    shops_routes(app, db);
};
