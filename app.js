import React, { Component } from "react"; // import from react

import { Window, App } from "proton-native"; // import the proton-native components

import SplashView from './src/views/SplashView.js';

export default class Example extends Component {
  render() {
    // all Components must have a render method
    return (
      <App>
        {/* you must always include App around everything */}
        <Window style={{ width: 1280, height: 720, backgroundColor: "green" }}>
          <SplashView />
        </Window>
      </App>
    );
  }
}
