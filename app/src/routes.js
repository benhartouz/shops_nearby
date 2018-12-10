import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./Containers/Login";
import Shops from "./Containers/Shops";
import Users from "./Containers/Users";
import Menu from "./Containers/Menu";
const Routes = () => {
  return (
    <Router>
      <div>
        <div style={{
           float: "left" , 
           width: "15%" , 
           borderRight : "1px solid #ccc",
           marginRight : "20px"
        }}>
          <Menu />
        </div>
        <div style={{
           float: "left" , 
           width: "81%"
        }}>
        <Route exact path="/" component={Login} />
        <Route path="/shops" component={Shops} />
        <Route path="/users" component={Users} />
        </div>
      </div>
    </Router>
  );
}


export default Routes;