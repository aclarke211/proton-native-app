import React, { Component } from "react"; // import from react

import { Window, App } from "proton-native"; // import the proton-native components

import TestComponent from './src/components/test/TestComponent.js';

export default class Example extends Component {
  render() {
    // all Components must have a render method
    return (
      <App>
        {/* you must always include App around everything */}
        <Window style={{ width: 300, height: 300, backgroundColor: "blue" }}>
          <TestComponent />
        </Window>
      </App>
    );
  }
}
