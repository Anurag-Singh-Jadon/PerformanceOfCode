import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState} from 'react'

const ExerciseOne = () => {
    const[avgSalary,setAvgSalary] = useState({})
    const people =[
{firstName:'Sam',lastName:'Hughes',DOB:'07/07/1978',department:'Development',salary:'4500'},
{firstName:'Terri',lastName:'Bishop',DOB:'02/04/1989',department:'Development',salary:'3500'},
{firstName:'Jar',lastName:'Burke',DOB:'07/07/1985',department:'Marketing',salary:'38000'},
{firstName:'Julio',lastName:'Miller',DOB:'12/07/1991',department:'Sales',salary:'40000'},
{firstName:'Chester',lastName:'Flores',DOB:'03/15/1988',department:'Development',salary:'41000'},
{firstName:'Madison',lastName:'Marshall',DOB:'09/22/1980',department:'Sales',salary:'32000'},
{firstName:'Gabriella',lastName:'Steward',DOB:'08/26/1994',department:'Marketing',salary:'46000'},
{firstName:'Charles',lastName:'Campbell',DOB:'09/04/1977',department:'Sales',salary:'42000'},
{firstName:'Tiffany',lastName:'Lambert',DOB:'05/11/1990',department:'Development',salary:'34000'},
{firstName:'Antonio',lastName:'Gonzalez',DOB:'03/24/1985',department:'Office Management',salary:'49000'},
{firstName:'Aaron',lastName:'Garrett',DOB:'09/04/1985',department:'Development',salary:'39000'},

]


    //1-What is the average income of all the people in the Array?
//2-Who are the people that are currently older than 30?
//3-Get a list of the people's full name(firstName and lastName)
//4-Get a list of people in the array ordered from youngest to oldest.
//5-How many people are there in each department?

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1-What is the average income of all the people in the Array?

//const averageSalary = people.reduce((accumulator,people) => accumulator + people.salary)              ==> Approach One(Output)  [object Object]3500380004000041000320004600042000340004900039000
//const averageSalary = people.reduce((accumulator,people) => accumulator + parseInt(people.salary))  ==> Approach two(Output)  [object Object]3500380004000041000320004600042000340004900039000
//const averageSalary = people.reduce((accumulator,people) => accumulator + parseInt(people.salary),0) ===>Approach three        369000    
// const averageSalary = people.reduce((accumulator,people) => accumulator + parseInt(people.salary),0)/people.length
// console.log(averageSalary)              
// Output--> 33545.454545454544



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2-Who are the people that are currently older than 30?
//Sbse phle humme current date pata honi chahiye then hum previous date ko substract karenge
// Current date k liye  new Date().getFullYear
//Previous Date k liye  new Date(person.DOB).getFullYear()
//    const OlderthanThirty = people.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30  )
   
//     console.log('Get Data',OlderthanThirty)
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  3-Get a list of the people's full name(firstName and lastName)
 
 //Here we use simple map approach             
//  people.map(person => {person.firstName}{person.lastName})
 // people.map(({firstName,lastName})=>{firstName}{lastName}
//  people.map({...people,fullName:`{person.firstName}{person.lastName}`})



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  4-Get a list of people in the array ordered from youngest to oldest.
  //Here sorting approach is used
//  const youngestToOldest = people.sort((personA,personB)=> new Date(personA.DOB) - new Date(personB.DOB))
//     console.log(youngestToOldest)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5-How many people are there in each department?
 //Very Important Approach we should know
//const peopleInDepartment = people.reduce((accumulator,person)=>({...accumulator,[person.department]:accumulator[person.department] + 1}),{})
//console.log(peopleInDepartment)
//Output --> {"Development": NaN, "Marketing": NaN, "Office Management": NaN, "Sales": NaN}
const peopleInDepartment = people.reduce((accumulator,person)=>({...accumulator,[person.department]:accumulator[person.department] + 1 || 1}),{})
    console.log(peopleInDepartment)
//Output --> {"Development": NaN, "Marketing": NaN, "Office Management": NaN, "Sales": NaN}

  return (
    <View style={{flex:1,backgroundColor:'pink'}}>
      {/* <Text>{averageSalary }</Text> */}
      <Text>Hello</Text>
      {/* {youngestToOldest .map((val)=>{
        return <Text>{val.firstName}{val.lastName}{val.DOB}</Text>
      })} */}
      
    </View>
  )
}

export default React.memo(ExerciseOne)

