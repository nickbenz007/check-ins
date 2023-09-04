import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import tw from 'twrnc';

const Loader = ({LoadingText}) => {
  return (
    <View style={tw`flex items-center justify-center w-full h-full`}>
      <ActivityIndicator size={'large'} color={'indigo'} style={tw`py-4`} />
      <Text
        style={tw.style(
          {fontFamily: 'nunito'},
          'font-semibold text-lg text-gray-900 tracking-wide text-center',
        )}>
        {LoadingText}
      </Text>
    </View>
  );
};

export default Loader;
