import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer);

const StoreProvider = ({ children, ...restProps }) => {
  return (
    <Provider store={store} {...restProps}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
