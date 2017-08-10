import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRoutes } from "redux-first-router";
import productsReducer from "./reducers/productsReducer";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createHistory();

// THE WORK:
const routesMap = {
  HOME: "/", // action <-> url path
  PRODUCT: "/product/:id" // :id is a dynamic segment
};

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap); // yes, 3 redux aspects

// and you already know how the story ends:
const rootReducer = combineReducers({
  location: reducer,
  products: productsReducer
});
const middlewares = applyMiddleware(middleware);

const composeEnhancers = (enhancer, middlewares) =>
  typeof window !== "undefined"
    ? composeWithDevTools(middlewares, enhancer)
    : compose(enhancer, middlewares);

const store = createStore(rootReducer, composeEnhancers(enhancer, middlewares));

export default store;
