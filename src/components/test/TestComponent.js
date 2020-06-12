import React from "react";
import { View, Text } from "proton-native";

const TestComponent = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }}>
        <Text>View component (or container) 1</Text>
      </View>
      <View style={{ backgroundColor: "red", flex: 0.5 }}>
        <Text>View component 2</Text>
      </View>
      <Text>Hello World!</Text>
    </View>
  );
};

export default TestComponent;
