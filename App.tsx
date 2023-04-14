import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Home from './Screen/Home';
import Form from './Screen/Form';
import Project from './Screen/Project';
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { Animated } from 'react-native';

const screenOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 500,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 500,
      },
    },
  },

};


const Main = () => {

  return (

  <Stack.Navigator  

  screenOptions={screenOptions}
  

  
  
  >
       <Stack.Screen name="Project" component={Project} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Form" component={Form} options={{headerShown:false}} />
   
    </Stack.Navigator>

  )


}

export default function App() {
  return (
    <NavigationContainer>

      <Main/>

    </NavigationContainer>
  );
}