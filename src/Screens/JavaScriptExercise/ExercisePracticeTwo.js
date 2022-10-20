import { View, Text, ProgressBarAndroidBase } from 'react-native'
import React from 'react'

const ExercisePracticeTwo = () => {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*1) Write a JavaScript program to create a new string from a given string taking the first 3 characters and
      and the last 3 characters of a string and adding them together. The string length must be 3 or more,
      if not,the original string is returned.   */

const makeNewString = (str) => str.length < 3 ? str : str.slice(0,3) + str.slice(-3);
console.log(makeNewString('AnuragSingh'))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*2) Write a Javascript program to extract the first half of a string of even length. */

const firstHalf = (str) =>str.slice(0,str.length/2)
console.log(firstHalf('Anurag'))
console.log(firstHalf('Ravi'))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*3)Write a JavaScript program to concatenate two strings except their first character. */
const concatenate =(str1,str2) => str1.slice(1) + str2.slice(2)

console.log(concatenate('Anurag','Singh'))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*4)Given two values, write a JavaScript program to find out which one is nearest to 100       */

const closetTo100 = (a,b) => (100 - a ) < (100 - b) ? a : b ;
console.log('Closest to 100 value is ',closetTo100(15,10))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*5)Write a JavaScript Program to check a given string contains 2 to 4 occurrences of a specified character.  */

const countChars = (str, char) => str.split('').filter(ch => ch === char).length;
const contains2To4 = (str,char) => countChars(str,char) >=2 && countChars(str,char) <=4;
console.log(contains2To4('Anurag','Singh'))
console.log(contains2To4('An','h'))
console.log(contains2To4('ooh!','o'))
  return (
    <View>
      <Text>ExercisePracticeTwo</Text>
    </View>
  )
}

export default ExercisePracticeTwo