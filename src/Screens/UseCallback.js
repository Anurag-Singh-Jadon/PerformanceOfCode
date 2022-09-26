import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import React,{useCallback, useState} from 'react'

const UseCallback = () => {
    const[number,setNumber]=useState(0)
 //Note--> Yaha pr humme sochna hai k humme number wali value humesha updated mitni hai.Jo k function recreation k wajah se hota hai
//     const onIncreament = () =>{
//   setNumber(number + 1)
//     }
//     const onDecreament = () =>{
//   setNumber(number - 1)
//     }

    


 // Ab humme function recreation ko stop karna hai. To hum useCallBack function ka use karenge.Now  
 
//  const onIncreament = useCallback(() =>{
//     alert(number)
//     setNumber(number + 1)
//       },[])
//Is case me function recreate nahi ho raha hai or value initial wali aa rahi hai
const onIncreament = useCallback(() =>{
    alert(number)
    setNumber(number + 1)
      },[number])
      const onDecreament = useCallback(() =>{
        alert(number)
        setNumber(number - 1)
          },[number])
  return (
    <View style={styles.constiner}>
        <TouchableOpacity onPress={onDecreament}>
           <Text style={{fontWeight:'bold',fontSize:25}}>-</Text> 
        </TouchableOpacity>
      <Text style={{fontWeight:'bold',fontSize:25}} >{number}</Text>
      <TouchableOpacity onPress={onIncreament}>
            <Text style={{fontWeight:'bold',fontSize:25}}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default UseCallback

const styles = StyleSheet.create({
    constiner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})