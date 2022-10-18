import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


/* 1 Write a JavaScript Program  to check two numbers and return true if one of the number is 100 or if the 
  sum of the two number is 100 */

  //Note- Here we get Boolean Result

  const isEqualTo100 = (a,b) => a===100 || b==100 || a+b === 100;
  console.log(isEqualTo100 (100,100))
  console.log(isEqualTo100(100,0))
  console.log(isEqualTo100(0,100))
  console.log(isEqualTo100(19,0))
  console.log(isEqualTo100(0,10))

 
/* 2-Write a JavaScript Program to get the extension of a filename */
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('anurag.singh'))

const ExerciseOne = () => {
  return (
    <View>
      <Text>ExerciseOne</Text>
    </View>
  )
}

export default ExerciseOne

