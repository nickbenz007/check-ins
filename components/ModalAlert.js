import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const ModalAlert = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      style={tw`flex w-80 h-96 rounded-lg bg-green-400 border border-gray-200`}
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={tw`flex w-40 h-40 rounded-lg bg-green-400 border border-gray-200`}>
        <Text
          style={tw.style(
            {fontFamily: 'Nunito'},
            'font-normal text-sm text-gray-900 tracking-wide',
          )}>
          This is Modal
        </Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false), navigation.navigate('Check-ins');
          }}>
          <Text
            style={tw.style(
              {fontFamily: 'Nunito'},
              'font-normal text-sm text-gray-900 tracking-wide',
            )}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalAlert;
