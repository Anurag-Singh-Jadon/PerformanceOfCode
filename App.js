/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, Text, FlatList, View} from 'react-native';
import ExerciseFive from './src/Screens/ArrayMethod/ExerciseFive';
import ExerciseFour from './src/Screens/ArrayMethod/ExerciseFour';
//import ExerciseOne from './src/Screens/ArrayMethod/ExerciseOne';
import ExerciseThree from './src/Screens/ArrayMethod/ExerciseThree';
import ExerciseTwo from './src/Screens/ArrayMethod/ExerciseTwo';
import ConditionalRendering from './src/Screens/ConditionalRendering';
import DimensionUse from './src/Screens/DimensionUse';
import FlatListPerformance from './src/Screens/FlatListPerformance';
import Memo from './src/Screens/Memo';
import UseCallback from './src/Screens/UseCallback';
import UseMemoHook from './src/Screens/UseMemoHook';
import ExerciseOneHere from './src/Screens/JavaScriptExercise/ExerciseOne';
import ExercisePracticeTwo from './src/Screens/JavaScriptExercise/ExercisePracticeTwo';
import ExercisePracticeThree from './src/Screens/JavaScriptExercise/ExercisePracticeThree';
import ImageSlider from './src/Screens/AnimatedImageSlider/ImageSlider';
import ImageGalary from './src/Screens/AnimatedImageGalary/ImageGalary';
//import DarkThemeScreen from './src/Screens/DarkModeTheme/DarkThemeScreen';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/Screens/SharedElement/Home';
import Detail from './src/Screens/SharedElement/Detail';
import {createSharedElementStackNavigator,S} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}    options={{headerShown: false}}/>
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
          sharedElements={(route,otherRoute,showing)=>{
              
              return[`image1`,{animation:'fade'}]
          }}
          // sharedElements={(route, otherRoute, showing) => {
           
          //   return [`image1`];
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
