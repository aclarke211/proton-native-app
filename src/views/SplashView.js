import React from 'react';
import { View, Text, Image } from 'proton-native';

import InputArea from '../components/elements/text/InputArea';

const SplashView = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 400,
        padding: 30,
      }}
    >
      <Image
        source={{
          uri: 'https://velopert.com/wp-content/uploads/2016/03/react.png',
        }}
        style={{
          width: 300,
          height: 150,
        }}
      />

      <InputArea></InputArea>
    </View>
  );
};

export default SplashView;
