import React from "react";
import { AppRegistry } from "proton-native";
import Example from "./app";

AppRegistry.registerComponent("example", <Example />);

// ================================================================================
/* Hot Reloading - on run in dev build */
if (module.hot) {
  module.hot.accept(["./app"], function() {
    const app = require("./app")["default"];
    AppRegistry.updateProxy(app);
  });
}
