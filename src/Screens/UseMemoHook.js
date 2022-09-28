import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import React,{useCallback, useMemo, useState} from 'react'
import CounterComp from './CounterComp';

const UseMemoHook = () => {
const[number,setNumber]=useState(0)
const[rendomNumber,setRandomNumber] = useState(0);
 // Using memo will cause  React to skip rendering  a component if its props have not changed
const onIncreament = useCallback(() =>{    //memoized function
    //alert(number)
    setNumber(number + 1)
      },[number])
  const onDecreament = useCallback(() =>{   ////memoized function
        //alert(number)
        setNumber(number - 1)
          },[number])

          const onRandomNumber = useCallback(() =>{  //memoized function
            setRandomNumber(Math.random())
         },) 

          const expensiveCalculation = (num) => {
            console.log("Calculating...");
            for (let i = 0; i < 1000000000; i++) {
              num += 1;
            }
            return num;
          };

          //const calculation = useMemo(()=> expensiveCalculation(number),[number] ) 
          const calculation = useMemo(()=> expensiveCalculation(number)) 

       
  return (
    <View style={styles.constiner}>
        <TouchableOpacity onPress={onDecreament}>
           <Text style={{fontWeight:'bold',fontSize:25}}>-</Text> 
        </TouchableOpacity>
      <Text>Random Number</Text>
      <Text onPress={onRandomNumber} style={{fontWeight:'bold',fontSize:25}} >{rendomNumber}</Text>
      <Text  style={{fontWeight:'bold',fontSize:25}} >{calculation}</Text>
      <CounterComp    //memoized component
      number={number}/>    
      <TouchableOpacity onPress={onIncreament}>
            <Text style={{fontWeight:'bold',fontSize:25}}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default UseMemoHook

const styles = StyleSheet.create({
    constiner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})