import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// initial screen
import Login from '../screens/Login';
import Users from '../screens/Users';
import Detailuser from '../screens/Users/DetailUser';
import EditUser from '../screens/Users/EditUser';
import AddUser from '../screens/Users/AddUser';
import Tenants from '../screens/Tenants';
import AddTenant from '../screens/Tenants/addTenant';
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
        <Screen name="user" component={Users} />
        <Screen name="tenant" component={Tenants} />
        <Screen
          name="detailuser"
          component={Detailuser}
          options={{title: 'detail user'}}
        />
        <Screen
          name="editUser"
          component={EditUser}
          options={{title: 'edit user'}}
        />
        <Screen
          name="addUser"
          component={AddUser}
          options={{title: 'add user'}}
        />
        <Screen
          name="addTenant"
          component={AddTenant}
          options={{title: 'add tenant'}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;
