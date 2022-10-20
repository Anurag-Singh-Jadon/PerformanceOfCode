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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
/* 2-Write a JavaScript Program to get the extension of a filename */
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('anurag.singh'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*3 Write a JavaScript program to replace every character in a given string with the character following it in
the alphabet */

/*Here we have to use few JavaScript Function 
String.fromCharCode
charCodeAt*/

const moveCharsForward = (str) =>str
                             .split('')
                             .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
                             .join('');
         console.log(moveCharsForward('abcde'))                    

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*4 Write a Javascript Program to get the current date.

Expected Output :
 mm-dd-yyyy , mm/dd/yyyy or dd-mm-yyyy , dd/mm/yyyy     */
 
 const formatDate = (date = new Date()) =>{
  const days =date.getDate(); 
  const months = date.getMonth();
  const years = date.getFullYear();
  return `${days}-${months}-${years}`
 }
console.log(formatDate())

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*5-Write a JavaScript program to create a new string adding "New!" in front of a given string.Date
If the given string begin with "New!" already then return the original string. */

const addNew = (str) =>str.indexOf('New!') === 0 ? str :
 `New! ${str}`;
console.log(addNew('New! offers'));

const ExerciseOne = () => {
  return (
    <View>
      <Text>ExerciseOne</Text>
    </View>
  )
}

export default ExerciseOne

