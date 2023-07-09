import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "intro.js/introjs.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { compose } from "redux";
import store from "./app/store";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
