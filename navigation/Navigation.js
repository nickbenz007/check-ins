import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CheckIns from '../screen/CheckIns';
import Submit from '../screen/Submit';

const Tab = createMaterialTopTabNavigator();

function MyNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Check-ins'}
        screenOptions={{
          tabBarInactiveTintColor: '#AEAEAE',
          tabBarActiveTintColor: '#000000',
          tabBarPressColor: '#4027DFFC',
          tabBarIndicatorStyle: {
            backgroundColor: '#000000',
          },
          tabBarLabelStyle: {
            fontFamily: 'Nunito',
            fontSize: 16,
            fontWeight: 700,
            textTransform: 'capitalize',
          },
        }}>
        <Tab.Screen name="Submit" component={Submit} />
        <Tab.Screen name="Check-ins" component={CheckIns} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyNavigation;
