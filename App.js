import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Weather from './components/Weather';
import Timer from './components/Timer';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Weather} />
        <Tab.Screen name="Timer" component={Timer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
