import React, {useState} from 'react';
import {View, Image, Text, FlatList, Alert} from 'react-native';
import tw from 'twrnc';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useQuery} from '@apollo/client';
import {CHECK_INS_DATA} from '../api/graphql_query';
import Loader from '../components/Loader';

const CheckIns = () => {
  const [receivedData, setReceivedData] = useState([]);

  const {error, loading} = useQuery(CHECK_INS_DATA, {
    onCompleted: data => {
      const sortedData = data.check_in.slice().sort((a, b) => (b.id = a.id));
      setReceivedData(sortedData);
    },
  });
  //test by nick

  if (loading) {
    return <Loader LoadingText={'Loading Check-Ins'} />;
  }
  if (error) {
    console.log(error, 'Oops something went wrong');
  }
  return (
    <View style={tw`flex w-auto bg-gray-100 h-auto`}>
      <FlatList
        data={receivedData || []}
        renderItem={({item}) => {
          return (
            <View
              style={tw`mx-4 my-4 py-4 bg-white rounded-xl items-center justify-center`}>
              <View style={tw`flex w-80 h-56 bg-gray-200 rounded-xl`}>
                {item?.image_url ? (
                  <Image
                    resizeMode={'cover'}
                    source={{
                      uri: item?.image_url ? item?.image_url : null,
                      cache: 'only-if-cached',
                    }}
                    style={tw`w-80 h-56 rounded-xl`}
                    alt={'Card Image'}
                  />
                ) : (
                  <Image
                    resizeMode={'cover'}
                    source={require('../assets/images/image_175.png')}
                    style={tw`w-80 h-56 rounded-xl`}
                    alt={'Card Image'}
                  />
                )}
              </View>
              <View
                style={tw`flex flex-row w-[310px] my-3 py-2 justify-start items-start`}>
                <View
                  style={tw`w-14 h-14 bg-gray-300 rounded-xl items-center justify-center`}>
                  <FontAwesome5 name={'users'} size={30} color={'white'} />
                </View>
                <View style={tw`flex flex-col items-start justify-end ml-4`}>
                  <Text
                    style={tw`font-normal text-base text-gray-950 tracking-wide`}>
                    {item.name}
                  </Text>
                  <Text
                    style={tw`font-normal text-sm text-[#4027DFFC] tracking-wide`}>
                    Created: {new Date(item?.created_at).toLocaleDateString()}
                  </Text>
                </View>
              </View>
              <View style={tw`flex w-[300px]`}>
                <Text
                  style={tw.style(
                    {fontFamily: 'Nunito'},
                    'font-normal text-left text-[#171A1F] text-[16px] tracking-wide',
                  )}>
                  {item.comment}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CheckIns;
