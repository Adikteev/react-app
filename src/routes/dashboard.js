import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

class Website extends Component {
  render() {
    return <div />;
  }
}

export default connect(mapStateToProps)(Website);
