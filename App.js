/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import FlatListPerformance from './src/Screens/FlatListPerformance';
import UseCallback from './src/Screens/UseCallback';





const App = () => {


  return (
  
      <UseCallback/>
  
  
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default App;
