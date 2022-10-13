import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExerciseTwo = () => {
    const orders = [
        {orderId:'123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items:[
            {productId:'123',price: 55},
            {productId:'234', price: 30}
        ]},
        {orderId:'234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items:[
            {productId:'234',price: 30}
            
        ]},
        {orderId:'345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items:[
            {productId:'567',price: 30},
            {productId:'678', price: 80}
        ]},
        {orderId:'456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items:[
            {productId:'789',price: 12},
            {productId:'890', price: 90}
        ]},
        {orderId:'578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items:[
            {productId:'901',price: 43},
            {productId:'123', price: 55}
            
        ]},
    ];

 //1- Get a list of the orders for the customer with the ID 234 that have not been delivered?
 //2-Create a new property on each order with the total price of items ordered?
 //3-Have all the orders been delivered?
 //4-Has the customer with ID '123' made any orders?
 //5-Have any products with an Id of 123 been sold?

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //1- Get a list of the orders for the customer with the ID 234 that have not been delivered?

 const orderDelivered = orders.filter(order => order.customerId ==='234' && !order.delivered )
  console.log(orderDelivered)

  //Output-[{"customerId": "234", "delivered": false, "deliveryDate": "01-02-2020", "items": [[Object]], "orderId": "234"}]


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //2-Create a new property on each order with the total price of items ordered?
 //Here we are using JavaScript methods together
 const newProperty = orders.map(order => ({...order, orderTotal: order.items.reduce((acc,item)=> acc + item.price,0)}))
   console.log(newProperty)

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3-Have all the orders been delivered?  
//First of all we check with every function which returns true or false 
const haveOrderDelivered = orders.every(order =>order.delivered)
  console.log(haveOrderDelivered)
//Output-true

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4-Has the customer with ID '123' made any orders?
//Here we can use Filter or reduce method to achive this     This give us Boolean Value
const paricularId = orders.some(order => order.customerId === '123')
console.log('particular Id',paricularId)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5-Have any products with an Id of 123 been sold?

const ItemSold = orders.reduce((acc,order)=> acc + order.items.reduce((acc,item)=> acc + (item.productId === '123'),0),0)
console.log('Item Sold ==>',ItemSold)
//Output --> 2
  return (
    <View>
      <Text>ExerciseTwo</Text>
      {orderDelivered.map((val)=><Text>{val.customerId}{val.deliveryDate}{val.delivered}</Text>)}
      {newProperty.map((v)=><Text>{v.orderTotal}</Text>)} 
      
    </View>
  )
}

export default ExerciseTwo

