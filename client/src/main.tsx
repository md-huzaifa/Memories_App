import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import {
//   applyMiddleware,
//   compose,
//   legacy_createStore as createStore
// } from "redux";
// import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
// import reducers from "./reducers";
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
