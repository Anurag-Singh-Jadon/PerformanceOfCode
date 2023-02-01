import {StyleSheet, Text, View, TextInput, TouchableOpacity,Appearance} from 'react-native';
import React,{useEffect,useState} from 'react';

const DarkThemeScreen = () => {
    const [theme,setTheme] = useState('')
    useEffect(()=>{
      const colorScheme =   Appearance.getColorScheme()
      console.log('Aa gaya color',colorScheme )
      if(colorScheme ==='dark'){
           setTheme('DARK')
      }else{
        setTheme('LIGHT')
      }
    },[])
  return (
    <View style={{flex: 1,backgroundColor: theme ==='LIGHT'?'#fff':'#000'}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 200,
          fontSize: 20,
          fontWeight: '800',
          color:theme ==='LIGHT'?'#000':'#fff'
        }}>
        Login
      </Text>
      <TextInput
        placeholder="Enter Email Id"
        placeholderTextColor={theme ==='LIGHT'?'#000':'#fff'}
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          alignSelf: 'center',
          borderWidth: 1,
          borderColor:theme ==='LIGHT'?'#000':'#fff',
          marginTop:50,
          paddingLeft:20
        }}
      />
          <TextInput
        placeholder="Enter Password"
        placeholderTextColor={theme ==='LIGHT'?'#000':'#fff'}
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          alignSelf: 'center',
          borderWidth: 1,
          borderColor:theme ==='LIGHT'?'#000':'#fff',
          marginTop:50,
          paddingLeft:20
        }}
      />
      <TouchableOpacity style={{borderRadius:10,width:'90%',height:50,marginTop:30,alignSelf:'center',backgroundColor:theme ==='LIGHT'?'#000':'#fff',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:theme ==='LIGHT'?'#fff':'#000',fontSize: 18}}>Login</Text>
      </TouchableOpacity>
      <Text style={{marginTop:30,alignSelf:'center',textDecorationLine:'underline',color:theme ==='LIGHT'?'#000':'#fff',fontSize: 18}}>Or Create a New Account</Text>
    </View>
  );
};

export default DarkThemeScreen;

const styles = StyleSheet.create({});
