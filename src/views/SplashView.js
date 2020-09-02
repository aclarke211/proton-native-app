import React from "react";
import { View, Text } from "proton-native";

import InputArea from '../components/elements/text/InputArea';

const SplashView = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 400,
        padding: 30,
      }}
    >
      <View style={{ backgroundColor: "red", flex: 0.3 }}>
        <Text>Renamer - Desktop App</Text>
      </View>


      <InputArea></InputArea>

    </View>
  );
};

export default SplashView;
