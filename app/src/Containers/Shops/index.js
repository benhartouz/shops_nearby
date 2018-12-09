import React, { Component } from "react";

import { getshops } from "../../Redux/Actions/shops";
import { Loader } from 'semantic-ui-react'
import Shop from '../../Components/shop';



import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Shops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: {
        loading: true,
        failed: false,
        payload: {
          data: []
        }
      }
    };
  }

  static getDerivedStateFromProps(state, props) {
    console.log("state.shops:", state.shops);
    return {
      shops: state.shops
    };
  }

  renderShops = () => {
    if (this.state.shops.payload.data === undefined) {
      return;
    }
    return this.state.shops.payload.data.map(shop => {
      return (
        <Shop key={shop.id} />
      );
    });
  };

  componentDidMount() {
    this.props.getShops();
  }

  render() {
    return (
      <div>
        {this.state.shops.loading === true ? (
          <Loader active inline />
        ) : (
          this.renderShops()
        )}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      shops: state.shops
    };
  },
  dipatch => {
    return {
      getShops: bindActionCreators(getshops, dipatch)
    };
  }
)(Shops);
