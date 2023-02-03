import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate('Detail')
      }}>
        <SharedElement id={`image1`}>
        <Image 
        source={require('../../Cycle.png')}
        style={{width:200,height:200}}
        resizeMode="contain"
        />
         </SharedElement>
   </TouchableOpacity>
        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})