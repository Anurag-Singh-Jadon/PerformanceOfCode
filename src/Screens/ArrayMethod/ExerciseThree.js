import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExerciseThree = () => {
    const users = [
        {id: '88f24bea-3825-4237-a0d1-efb6b92d37a4',firstName: 'Sam',lastName:'Hughes'},
        {id: '2a35032d-e02b-4508-b3b5-6393aff75a53',firstName: 'Terri',lastName:'Bishop'},
        {id: '7f053852-7440-4e44-838c-ddac24611050',firstName: 'Jar',lastName:'Burke'},
        {id: 'd456e3af-596a-4224-b1dc-dd990a34c0cf',firstName: 'Julio',lastName:'Miller'},
        {id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64',firstName: 'Chester',lastName:'Flores'},
        {id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985',firstName: 'Madison',lastName:'Marshall'},
        {id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c',firstName: 'Ava',lastName:'Pena'},
        {id: '7f0ce45a-bdca-4067-968b-d908e79276ce',firstName: 'Gabriella',lastName:'Steward'},
        {id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6',firstName: 'Charles',lastName:'Campbell'},
        {id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be',firstName: 'Madison',lastName:'Lambert'},
    ];
    
    const comments =[
        {userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4',text:'Great Job!'},
        {userId: '2a35032d-e02b-4508-b3b5-6393aff75a53',text:'Well done, I think I understand now!'},
        {userId: '7f053852-7440-4e44-838c-ddac24611050',text:'How do you do that?'},
        {userId: 'd456e3af-596a-4224-b1dc-dd990a34c0cf',text:'OK great thanks'},
        {userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64',text:'Cool,thanks!'},
        {userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985',text:'Nice one'},
        {userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c',text:'Got it'},
        {userId: '7f0ce45a-bdca-4067-968b-d908e79276ce',text:'Thanks!'},
        {userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6',text:'Cool'},
        {userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be',text:'Great stuff'},
    ]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1)What is Madison Marshall's user id?
  const findUserId =users.filter(u => u.firstName ==='Madison' && u.lastName ==='Marshall')
  console.log(findUserId)
//Output-  [{"firstName": "Madison", "id": "b4a306cb-8b95-4f85-b9f8-434dbe010985", "lastName": "Marshall"}]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2) Who wrote the first comment(assuming the first comment is the position 0 of the comment array)
 const firstComment = users.find(user =>user.id == comments[0].userId)
 console.log('User First Comment',firstComment)
//Output-- {"firstName": "Sam", "id": "88f24bea-3825-4237-a0d1-efb6b92d37a4", "lastName": "Hughes"}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3)Which user commented 'OK great thanks'?
 const CommentByUser = comments.find(user => user.text === 'OK great thanks').userId
  console.log('Here is the Id',CommentByUser)

 // Output-- d456e3af-596a-4224-b1dc-dd990a34c0cf
/// Another way for CommentByUser
const AnotherWayCommentByUser = users.find(user=> user.id === comments.find(txt => txt.text ==='OK great thanks').userId).id
console.log('I find another way to find Id',AnotherWayCommentByUser)

//Output --> d456e3af-596a-4224-b1dc-dd990a34c0cf

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //4)Add the user's first and last name to each comment in the comments array?
 // Add the text with first anf last name to each comment

 const AddFirstNameAndLastName = comments.map(comment =>{
  const { firstName,lastName }  = users.find(user => user.id === comment.userId)
  return {...comment,firstName,lastName}
 })

 console.log('Here first name and last name are added to 2nd array', AddFirstNameAndLastName)
 //Here in this output we can see the firstName and LastName are added to another Array(comments)
 //output--> [{"firstName": "Sam", "lastName": "Hughes", "text": "Great Job!", "userId": "88f24bea-3825-4237-a0d1-efb6b92d37a4"},
 // {"firstName": "Terri", "lastName": "Bishop", "text": "Well done, I think I understand now!", "userId": "2a35032d-e02b-4508-b3b5-6393aff75a53"},
 // {"firstName": "Jar", "lastName": "Burke", "text": "How do you do that?", "userId": "7f053852-7440-4e44-838c-ddac24611050"}, 
 //{"firstName": "Julio", "lastName": "Miller", "text": "OK great thanks", "userId": "d456e3af-596a-4224-b1dc-dd990a34c0cf"},
 // {"firstName": "Chester", "lastName": "Flores", "text": "Cool,thanks!", "userId": "58a1e37b-4b15-47c1-b95b-11fe016f7b64"}, {"firstName": "Madison", "lastName": "Marshall", "text": "Nice one", "userId": "b4a306cb-8b95-4f85-b9f8-434dbe010985"}, {"firstName": "Ava", "lastName": "Pena", "text": "Got it", "userId": "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c"}, {"firstName": "Gabriella", "lastName": "Steward", "text": "Thanks!", "userId": "7f0ce45a-bdca-4067-968b-d908e79276ce"}, {"firstName": "Charles", "lastName": "Campbell", "text": "Cool", "userId": "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6"}, {"firstName": "Madison", "lastName": "Lambert", "text": "Great stuff", "userId": "e789565f-fa5a-4d5e-8f6c-dd126cf995be"}]
 
 const AddCommentsToFirstArray = users.map(user =>{
  const { text } = comments.find(comment => comment.userId === user.id)
   return {...user,text}
 })

 console.log('Here comments are added witgfirst name and last name in array 1 ', AddCommentsToFirstArray)

 //Output--> [{"firstName": "Sam", "id": "88f24bea-3825-4237-a0d1-efb6b92d37a4", "lastName": "Hughes", "text": "Great Job!"},
 // {"firstName": "Terri", "id": "2a35032d-e02b-4508-b3b5-6393aff75a53", "lastName": "Bishop", "text": "Well done, I think I understand now!"},
 // {"firstName": "Jar", "id": "7f053852-7440-4e44-838c-ddac24611050", "lastName": "Burke", "text": "How do you do that?"},
 // {"firstName": "Julio", "id": "d456e3af-596a-4224-b1dc-dd990a34c0cf", "lastName": "Miller", "text": "OK great thanks"},
 // {"firstName": "Chester", "id": "58a1e37b-4b15-47c1-b95b-11fe016f7b64", "lastName": "Flores", "text": "Cool,thanks!"},
 // {"firstName": "Madison", "id": "b4a306cb-8b95-4f85-b9f8-434dbe010985", "lastName": "Marshall", "text": "Nice one"},
 // {"firstName": "Ava", "id": "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", "lastName": "Pena", "text": "Got it"},
 // {"firstName": "Gabriella", "id": "7f0ce45a-bdca-4067-968b-d908e79276ce", "lastName": "Steward", "text": "Thanks!"}, {"firstName": "Charles", "id": "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", "lastName": "Campbell", "text": "Cool"}, {"firstName": "Madison", "id": "e789565f-fa5a-4d5e-8f6c-dd126cf995be", "lastName": "Lambert", "text": "Great stuff"}]


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5) Get a list of the users who haven't commented
//const usersNotCommented = users.filter(user => comments.find(comment => comment.userId === user.id))  ==> Here users are commented
const usersNotCommented = users.filter(user => !comments.find(comment => comment.userId === user.id))
console.log('Users are not commented',usersNotCommented)

//Yaha pr agar agar kise id se comment nahi hua hota to wo yaha pr pata chal jata.

  return (
    <View>
      <Text>ExerciseThree</Text>
      {findUserId.map((val)=><Text>{val.id}</Text>)}
      
    </View>
  )
}

export default ExerciseThree

const styles = StyleSheet.create({})