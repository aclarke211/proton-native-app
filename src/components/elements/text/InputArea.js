import React from "react";
import { View, Text, TextInput } from "proton-native";

const InputArea = () => {
  return (
    <View style={{ backgroundColor: "cyan", flex: 0.5, height: 100, margin: 20 }}>
      <Text>TextInput Label:</Text>
      <TextInput></TextInput>
    </View>
  );
};

export default InputArea;
