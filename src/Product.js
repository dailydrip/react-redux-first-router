import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    const { goToHome } = this.props;
    return (
      <div className="App">
        <h2>Product</h2>
        <p className="App-intro">
          <button onClick={() => goToHome()}>Go To Home</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ userId }) => ({ userId });
const mapDispatchToProps = dispatch => ({
  goToHome: () => dispatch({ type: "HOME" })
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;
