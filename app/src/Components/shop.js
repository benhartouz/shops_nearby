import React , { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Styles/shop.css";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class Shop extends PureComponent {
  constructor(props) {
    super(props);
    this.shop = props.shop;
    this.state = { expanded: false };
  }

  handleLikeClick = () => {
    console.log("id of shop" , this.shop._id)
    alert("handleLikeClick");
  } 

  handleDisLikeClick = () => {
    alert("handleDisLikeClick");
  } 

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={"card"}>
        <CardHeader title={this.shop.name} />
        <CardMedia
          className={classes.media}
          image="https://c1.staticflickr.com/2/1878/30637164368_56873919b9_n.jpg"
          title="shop name"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions className={"action-container"} disableActionSpacing>
          <a href="#0" className={"like"} onClick={this.handleLikeClick}>
            {" "}
            Like
          </a>
          <a href="#0" className={"dislike"} onClick={this.handleDisLikeClick}>
            Dislike
          </a>
        </CardActions>
      </Card>
    );
  }
}

Shop.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Shop);
