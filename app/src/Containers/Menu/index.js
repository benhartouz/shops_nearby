import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function Menu(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <Link
          to="/"
          style={{
            textDecoration: "underline",
            marginLeft: "5px",
            color: "#000000"
          }}
        >
          My Prefered Shops
        </Link>
      </ListItem>
      <ListItem>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <Link
          to="/shops"
          style={{
            textDecoration: "none",
            marginLeft: "5px",
            color: "#000000"
          }}
        >
          Nearby Shops
        </Link>
      </ListItem>
      <ListItem>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
        <Link
          to="/users"
          style={{
            textDecoration: "none",
            marginLeft: "5px",
            color: "#000000"
          }}
        >
          Deconnection
        </Link>
      </ListItem>
    </List>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
