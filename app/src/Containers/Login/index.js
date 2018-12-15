import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../Redux/Actions/login";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: purple[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[500]
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: purple[500]
    }
  },
  notchedOutline: {},
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green
  },
  typography: { useNextVariants: true }
});

let classes = {};

class Login extends React.Component {
  constructor(props) {
    super(props);
    classes = props.classes;
    this.state = {
      email: "",
      password: ""
    };
  }

  // Login using api 
  login = () => {
    this.props.login(
      () => {
        console.log("Loging");
      },
      {
        email: this.state.email,
        password: this.state.password
      }
    );
    console.log("login");
  };

  render() {
    return (
      <div className={classes.container}>
        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="custom-css-standard-input"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
          >
            Email
          </InputLabel>
          <Input
            id="custom-css-standard-input"
            classes={{
              underline: classes.cssUnderline
            }}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="custom-css-standard-input"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
          >
            Password
          </InputLabel>
          <Input
            id="custom-css-standard-input"
            classes={{
              underline: classes.cssUnderline
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.login}
        >
          Login
        </Button>
      </div>
    );
  }
}

let LoginWithStyle = withStyles(styles)(Login);

export default connect(
  null,
  dispatch => {
    return {
      login: bindActionCreators(login, dispatch)
    };
  }
)(LoginWithStyle);
