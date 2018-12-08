import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./Containers/Login"
import Shops from "./Containers/Shops"
import Users from "./Containers/Users"
const Routes = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/shops">Shops</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Login} />
        <Route path="/shops" component={Shops} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  );
}


export default Routes;