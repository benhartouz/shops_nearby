import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
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
      password: "",
      loading: false
    };
  }

  // Login using api
  login = () => {
    if (this.state.loading) return;
    this.setState({
      loading: true
    });
    this.props.login(
      result => {
        console.log(result);
        if (result.code === 200) {
        }
        this.setState({
          loading: false
        });
      },
      {
        username: this.state.email,
        password: this.state.password
      },
      error => {
        console.log(error);
        this.setState({
          loading: false
        });
      }
    );
  };

  render() {
    return (
      <div className={classes.container}>
        <FormControl className={classes.margin}>
          <TextField
            id="standard-password-input-username"
            label="Username"
            className={classes.textField}
            type="text"
            autoComplete="current-username"
            margin="normal"
            onChange={e => {
              let value = e.target.value;
              this.setState({
                password: value
              });
            }}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <TextField
            id="standard-password-input-password"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={e => {
              let value = e.target.value;
              this.setState({
                password: value
              });
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.login}
        >
          {this.state.loading ? "Loading.." : "Login"}
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
