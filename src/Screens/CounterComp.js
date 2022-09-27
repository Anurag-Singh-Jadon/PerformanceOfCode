import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CounterComp = ({number = 0}) => {
    console.log("Counter component re-render",number)
  return (
    <View>
      <Text style={{fontWeight:'bold',fontSize:25}}>{number}</Text>
    </View>
  )
}

export default React.memo(CounterComp)

