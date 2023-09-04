import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

const Header = () => {
  return (
    <View style={tw`flex w-full items-center justify-center py-2`}>
      <Text
        style={tw.style('text-[18px] font-bold text-gray-950 tracking-wide', {
          fontFamily: 'Nunito',
        })}>
        Checkins
      </Text>
    </View>
  );
};

export default Header;
