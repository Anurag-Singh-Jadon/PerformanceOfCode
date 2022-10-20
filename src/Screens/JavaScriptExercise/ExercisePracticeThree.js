import { View, Text } from 'react-native'
import React from 'react'

const ExercisePracticeThree = () => {
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
/*1)Write a JavScript program  to find the number of even digits in an array of integers */

const countEvenNumber = (arr) => arr.filter(num => num % 2 === 0).length

console.log(countEvenNumber([1,2,3,4,5,6]))
console.log(countEvenNumber([1,2,3,4,5,6,8,10]))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*2)Write a JavaScript program to find the number of even values up to a given number */


const createArrayOfNumber = (num) =>{
     const returnArray = [];
     for(let i = 1;i<=num ;i+= 1){
      returnArray.push(i);
     }
     return returnArray
}
console.log(createArrayOfNumber(6))
console.log(countEvenNumber(createArrayOfNumber(9)))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*3)Write a Javascript program to check whether a given array of integers is sorted is ascending order */
const isAscending = (arr) =>{
    for(let i =0;i< arr.length; i+=1){
      if(arr[i+1]<arr[i])
      return false
    }
    return true;
}
console.log(isAscending([1,2,3,4,5,6]))
console.log(isAscending([7,10,9,4,11,12]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*4) Write a JavaScript program to get the largest even number from an array of integers  */

const largestEvent = (arr) =>Math.max(...arr.filter(num => num%2 === 0));
console.log('Largest even number is',largestEvent([1,2,3,44,55,66,5]))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*5)Write a JavaScript program to replace the first digit in a string(should contains at least digit)
with $ character */


    
  return (
    <View>
      <Text>JavaScriptPracticeThree</Text>
    </View>
  )
}

export default ExercisePracticeThree