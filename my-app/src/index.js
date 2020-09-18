import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppContextProvider, { AppContext } from "../src/Context/AuthContext";

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
