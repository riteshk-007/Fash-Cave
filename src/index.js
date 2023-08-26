import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./utils/Context";
import { store } from "./store/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContext>
    </Provider>
  </React.StrictMode>
);
