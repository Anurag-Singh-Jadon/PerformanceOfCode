import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'

const Detail = () => {
  return (
    <View style={{flex:1}}>
     <SharedElement id={`image1`}>
        <Image 

        source={require('../../Cycle.png')}
        style={{width:'100%',height:300}}
        resizeMode="cover"/>
        </SharedElement>
   <Text style={{fontSize:20,fontWeight:'600',margin:10}}>
    What is Lorem Ipsum?
   </Text>
   <Text style={{fontSize:20,fontWeight:'600',margin:10}}>
    {
        "Lorem Ipsum is a simply dummy text of the printing and typesetting Lorem Ipsum is a simply dummy text of the printing and typesetting Lorem Ipsum is a simply dummy text of the printing and typesetting Lorem Ipsum is a simply dummy text of the printing and typesetting Lorem Ipsum is a simply dummy text of the printing and typesetting Lorem Ipsum is a simply dummy text of the printing and typesetting"
    }
   </Text>
        
    </View>
  
  )
}

export default Detail

const styles = StyleSheet.create({})