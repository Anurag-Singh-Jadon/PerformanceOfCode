import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import Size from '../utils/Size'

const DimensionUse = () => {
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height
  return (
    <View style={styles.container}>
      <View style={{width:Dimensions.get('window').width - 0.25,height:Dimensions.get('window').height - 0.22,backgroundColor:'pink'}}>
           <Text>Hii</Text>
      </View>
    </View>
  )
}

export default DimensionUse

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})


//how to take padding, height  this is the exact method
//eg padding : deviceWidth < 450 ? hp('4%'): hp('2%)
//height: deviceHeight < 650 ? 500 : 650