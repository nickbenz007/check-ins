import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import tw from 'twrnc';
import {CHECK_INS_DATA, INSERT_CHECKIN} from '../api/graphql_query';
import {useMutation} from '@apollo/client';
import Loader from '../components/Loader';

const Submit = ({navigation}) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [MyMutation, {error, loading}] = useMutation(INSERT_CHECKIN, {
    refetchQueries: [CHECK_INS_DATA, 'GetCheckIn'],
  });

  if (loading) {
    return <Loader LoadingText={'Submitting...'} />;
  }

  if (error) {
    return (
      <Text style={tw.style('font-normal text-sm text-red-600 tracking-wide')}>
        {error}
      </Text>
    );
  }

  const handleSubmit = () => {
    MyMutation({
      variables: {
        check_ins: {
          name: name,
          comment: comment,
          image_url: imageUrl,
        },
      },
    })
      .then(response => {
        setName('');
        setComment('');
        setImageUrl('');
        Alert.alert(
          'Check-ins added successfully',
          'Click OK to see Check-ins',
          [
            {
              text: 'Done',
              onPress: () => navigation.navigate('Check-ins'),
            },
          ],
        );
      })
      .catch(err => {
        console.log(err, 'Error occurred while Submitting the Form Data');
      });
  };

  return (
    <TouchableWithoutFeedback>
      <View style={tw`flex bg-gray-100 h-full items-center`}>
        <View style={tw`flex w-[300px] h-full py-4 items-center`}>
          <TextInput
            value={name}
            placeholder={'Name'}
            placeholderTextColor={'gray'}
            onChangeText={text => setName(text)}
            style={tw.style(
              {fontFamily: 'Nunito'},
              'w-[353px] h-[50px] px-4 my-2 text-[16px] bg-white rounded-lg border border-gray-300',
            )}
          />
          <TextInput
            value={comment}
            placeholder={'Comment'}
            placeholderTextColor={'gray'}
            onChangeText={text => setComment(text)}
            style={tw.style(
              {fontFamily: 'Nunito'},
              'w-[353px] h-[50px] px-4 my-2 text-[16px] bg-white rounded-lg border border-gray-300',
            )}
          />
          <TextInput
            value={imageUrl}
            placeholder={'ImageUrl'}
            placeholderTextColor={'gray'}
            onChangeText={text => setImageUrl(text)}
            style={tw.style(
              {fontFamily: 'Nunito'},
              'w-[353px] h-[50px] px-4 my-2 text-[16px] bg-white rounded-lg border border-gray-300',
            )}
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={tw`w-[353px] h-[50px] my-4 items-center justify-center rounded-lg bg-[#4027DFFC]`}>
            <Text
              style={tw.style(
                {fontFamily: 'Nunito'},
                'font-bold text-[16px] text-gray-100 tracking-normal',
              )}>
              ADD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Submit;
