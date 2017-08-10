import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Product from "./Product";

const Initial = props => {
  const { goToProducts } = props.props;
  return (
    <div>
      <h1> Initial </h1>
      <button onClick={() => goToProducts(1)}>Go To Products</button>
    </div>
  );
};

const switcher = props => {
  const { productId } = props;
  const component = productId
    ? <Product props={props} />
    : <Initial props={props} />;
  return component;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React First Router Example</h2>
        </div>
        <div className="App-intro">
          {switcher(this.props)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productId: state.products.productId
  };
};
const mapDispatchToProps = dispatch => ({
  goToProducts: id => dispatch({ type: "PRODUCT", payload: { id: id } })
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
