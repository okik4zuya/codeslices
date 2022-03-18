import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import store from "./store/store";
import "./index.css";
import { extendThemeChakra } from "./extendThemeChakra";

ReactDOM.render(
  <ChakraProvider theme={extendThemeChakra}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
