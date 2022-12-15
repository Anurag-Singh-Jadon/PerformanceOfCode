import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Programming = () => {

    0-Write a program to reverse a string-->

 

function revString (str){
const emptyarr =[]

for(let i = str.length -1;i>=0;i--){
emptyarr.push(str[i])
}
return emptyarr.join('')
}

console.log(revString ('Anurag'))

 

Output-->garunA

 

1-Prime Number Program in JS using prompt-->

 

const number = prompt("enter number")
if(number == 1){
console.log(`${number} is not prime neither composite`)
}else if(number < 1){
console.log(`prime number of ${number} is not possible `)
}else{
for(let i=2;i<number;i++){
if(number%i==0){
var result = `${number} is not prime number`
}else{
var result = `${number} is prime number`
}
}
console.log(result)
}

 

Output--> 7 is  prime number

 

2-Factorial Program--->

 

const inputNum = prompt("Please enter the number")
var fact = 1;

if(inputNum<0){
console.log(`Factorial of ${ inputNum} is not possible`)
}else{
for(let i =1;i<=inputNum;i++){
fact = fact*i
}
console.log(`Factorial of ${inputNum} is ${fact}`)
}

 

 

Output-->Factorial of 4  is 24

 

3-Program to find even  element in an array -->

 

const arr = [1,2,3,4,5,6,7,8]
const evenelem = arr.filter((a)=>{
return a%2 == 0
})
console.log( evenelem)

Output-->[ 1, 3, 5, 7 ]

 

4-Program to find Odd  element in an array -->

 

const arr = [1,2,3,4,5,6,7,8]
const oddelem = arr.filter((a)=>{
return a%2 == !0
})
console.log(oddelem)

 

Output-->[ 1, 3, 5, 7 ]

 

5-Find Maximum Value in an array-->

 

const arr = [10,4,5,65,34,23]

const maxValue = arr.reduce((a,b)=>{
return a>b?a:b
})
console.log(maxValue)

Output-->65

 

6-To find value of missing Array-->

 

const arrNum = [1,2,3,4,6,7,8,10]
const missArray = []


const missingValue = (arr) =>{
//First of all to find min or max value in an array
const minValue = Math.min(...arr)
const maxValue = Math.max(...arr)

for(let i =minValue;i<maxValue;i++ ){
if(arr.indexOf(i)<0){
missArray.push(i)
}
}
return (missArray)
}
console.log(missingValue(arrNum ))

 

 

7-To find vowels in string-->

 

const string = prompt("Enter the String")

if(string =='a'||string =='e'||string =='i'||string =='o'||string =='u'){
console.log(` ${string} is vowel`)
}else{
console.log(` ${string} is not vowel`)
}

 

8-Calculator program in JavaScript-->

 

var operator = prompt(`Please select the operator +/-*`)
var num1 = parseFloat(prompt(`Please enter the first number`))
var num2 = parseFloat(prompt(`Please enter the second number`))

if(operator == '+'){
result = num1 + num2
}else if(operator == '-'){
result = num1 - num2
}else if(operator == '/'){
result = num1 / num2
}else if(operator == '*'){
result = num1*num2
}
console.log(`${num1} ${operator} ${num2} = ${result}`)

 

9-Find Duplicate element in an array -->

 

const arr = [1,1,2,3,4,5,6,5]

const duplicateElement = arr.filter((elem,index,array) => array.indexOf(elem) !== index)
console.log(duplicateElement )

 

Output--> [ 1, 5 ]

 

 

10-How to sort elements in an array-->

 

const arr = [1,5,2,3,4,7,6]
const sorting = arr.sort((a,b)=>{
return a-b
})
console.log(sorting)

 

Output-->[ 1, 2, 3, 4, 5, 6, 7 ]

 

11-How to sort String in an array-->

 

const unsorted =['Jan','Feb','Mar','April','June']

console.log(unsorted.sort())

 

Output-->[ 'April', 'Feb', 'Jan', 'June', 'Mar' ]

 

 

12-Program of Anagram -->

 

const str1 = 'Anurag'
const str2 = 'Garuna'

const Anagram = (str1,str2)=>{
let a = str1.toLowerCase() ;
let b = str1.toLowerCase();

a = a.split("").sort().join("")
b = b.split("").sort().join("")
return a==b
}
console.log( Anagram(str1,str2))

 

Output-->true

 

13-How to check if an array contains any element of another array-->

 

const arr1 = [10,4,5,65,34,23]
const arr2=[10,4]

let checkMatch = arr1.some(ele => arr2.includes(ele));
console.log(checkMatch)

 

Output-->true

 

 

 
  return (
    <View>
      <Text>Programming</Text>
    </View>
  )
}

export default Programming

const styles = StyleSheet.create({})