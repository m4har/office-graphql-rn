import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// initial screen
import Login from '../screens/Login';

//bottomtabs dashboard
import Dashboard from './BottomTab';
const screenOptions = {
  headerStyle: {
    backgroundColor: '#102f4a',
  },
  headerTintColor: '#fff',
  ...TransitionPresets.FadeFromBottomAndroid,
};
const Root = () => {
  const {Screen, Navigator} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name="login" component={Login} />
        <Screen name="dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;
