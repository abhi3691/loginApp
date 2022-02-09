import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
const stack = createStackNavigator();
function MyStack() {
  return(
    <stack.Navigator
    screenOptions={{headerShown:false}}
    >
      <stack.Screen name='Login' component={Login}/>
      <stack.Screen name='Home' component={Home}/>
    </stack.Navigator>
  )
}
export default function App ()  {
   return (
  <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
  );
};

