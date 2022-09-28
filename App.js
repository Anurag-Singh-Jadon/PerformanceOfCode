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
import UseMemoHook from './src/Screens/UseMemoHook';





const App = () => {


  return (
  
      <UseMemoHook/>
  
  
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
