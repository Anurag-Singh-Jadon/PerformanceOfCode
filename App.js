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
import Memo from './src/Screens/Memo';
import UseCallback from './src/Screens/UseCallback';





const App = () => {


  return (
  
      <Memo/>
  
  
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
