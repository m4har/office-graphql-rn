import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const BottomTab = () => {
  const {Navigator, Screen} = createMaterialBottomTabNavigator();
  return (
    <Navigator
      activeColor="#fff"
      inactiveColor="#78909c"
      barStyle={{backgroundColor: '#102f4a'}}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTab;
