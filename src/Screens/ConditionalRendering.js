import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ConditionalRendering = (props) => {

  const [index,setIndex] = useState(1)

  
  const viewOne = (props) =>{
    return(
      <View style={{flex:1,backgroundColor:'orange',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize: index == 1 ? hp('4%'): hp('2%') ,color: index == 1 ? 'yellow':'black'}}>Get the Orange Color</Text>
      </View>
    )
  }
  const viewTwo = () =>{
    return(
      <View style={{flex:1,backgroundColor:'yellow',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize: index == 2 ? hp('4%'): hp('2%'), color: index == 2 ? 'red':'black'}}>Get the Yellow Color</Text>
      </View>
    )
  }
  const viewThree = () =>{
    return(
      <View style={{flex:1,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize: index == 3 ? hp('4%'): hp('2%') ,color: index == 3 ? 'green':'black'}}>Get the Pink Color</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
    
      <View style={styles.flexView}>
        <TouchableOpacity style={{...styles.btn,backgroundColor:'pink'}} onPress={()=> setIndex(1)} >
          <Text style={{color: index == 1 ? 'red' : 'black'}}>View 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.btn,backgroundColor:'orange'}} onPress={()=> setIndex(2)}>
          <Text style={{color: index == 2 ? 'green' : 'black'}}>View 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.btn,backgroundColor:'yellow'}} onPress={()=> setIndex(3)} >
          <Text style={{color: index == 3 ? 'blue' : 'black'}}>View 3</Text>
        </TouchableOpacity>
      </View>
     
    {index == 1? viewOne() : index == 2 ? viewTwo() :  viewThree()}
     
    </View>
  )
}

export default ConditionalRendering

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  flexView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:wp('2%')
  },
  btn:{
    width:wp('20%'),
    height:hp('7%'),
    alignItems:'center',
    justifyContent:'center'
  }
})