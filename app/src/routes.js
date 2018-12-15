import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import Login from "./Containers/Login";
import Shops from "./Containers/Shops";
import Users from "./Containers/Users";
import Menu from "./Containers/Menu";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Login />
      )
    }
  />
);

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      isAuthenticated: props.isAuthenticated
    };
  }

  render() {
    return (
      <Router>
        <div>
          <div
            style={{
              float: "left",
              width: "15%",
              borderRight: "1px solid #ccc",
              marginRight: "20px"
            }}
          >
            <Menu />
          </div>
          <div
            style={{
              float: "left",
              width: "81%"
            }}
          >
            <PrivateRoute path="/shops" component={Shops} />
            {/*<Route exact path="/" component={Login} />
          <Route path="/shops" component={Shops} />
          <Route path="/users" component={Users} />*/}
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => {
    return {
      isAuthenticated: state.isAuthenticated
    };
  },
  null
)(Routes);
