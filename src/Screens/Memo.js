import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import React,{useCallback, useState} from 'react'
import CounterComp from './CounterComp';

const Memo = () => {
const[number,setNumber]=useState(0)
const[rendomNumber,setRandomNumber] = useState(0);
 // Using memo will cause  React to skip rendering  a component if its props have not changed
const onIncreament = useCallback(() =>{
    //alert(number)
    setNumber(number + 1)
      },[number])
  const onDecreament = useCallback(() =>{
        //alert(number)
        setNumber(number - 1)
          },[number])

     const onRandomNumber = useCallback(() =>{
        setRandomNumber(Math.random())
     },)    
  return (
    <View style={styles.constiner}>
        <TouchableOpacity onPress={onDecreament}>
           <Text style={{fontWeight:'bold',fontSize:25}}>-</Text> 
        </TouchableOpacity>
      <Text onPress={onRandomNumber} style={{fontWeight:'bold',fontSize:25}} >{rendomNumber}</Text>
      <CounterComp number={number}/>
      <TouchableOpacity onPress={onIncreament}>
            <Text style={{fontWeight:'bold',fontSize:25}}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Memo

const styles = StyleSheet.create({
    constiner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})