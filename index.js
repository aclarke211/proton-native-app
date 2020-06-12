import React from "react";
import { AppRegistry } from "proton-native";
import App from "./app";

AppRegistry.registerComponent("App", <App />);

// ================================================================================
/* Hot Reloading - on run in dev build */
if (module.hot) {
  module.hot.accept(["./app"], function() {
    const app = require("./app")["app"];
    AppRegistry.updateProxy(app);
  });
}
