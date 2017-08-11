import { NOT_FOUND } from "redux-first-router";
import { Record } from "immutable";

const Model = new Record({
  productId: undefined
});

const init = () => {
  return new Model({ productId: undefined });
};

const productsReducer = (state = init(), action = {}) => {
  switch (action.type) {
    case "HOME":
      return state.setIn(["productId"], undefined);
    case "PRODUCT":
      return state.setIn(["productId"], action.payload.id);
    case NOT_FOUND:
      return null;
    default:
      return state;
  }
};

export default productsReducer;
