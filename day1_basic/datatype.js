"use strict"; // treat all the code with new version

//alert("hello") // we are using nodejs, not browser


//JS Dynamic typed
//primitive type: String,Number,Null,Boolean,Undefined,Symbol
//Non Primitive type: Array, Objects, Function

const score = 56
const scoreValue = 78.99
const isLoggedin =false
const outsideTemp =null
let email;
const id = Symbol('123') 
// unique value

const anotherid = Symbol('123')

console.log(id === anotherid);
//----------------------------------------------------------------------------------------------
const fruits =["mango","banana","jackfruit"]
console.log(fruits); //array

let obj={
    name: "hitesh",
    age:20,
    address:"Kolkata",

}
console.log(obj); //object

const myFunc=function(){ //function
    console.log("hi");
}

myFunc()

//---------------------------------------------------------------------------------------------------------------

//----------Stack And Heap Memory-----------------------
//

let str ="helo world"
let str1 =str
str1 ="gi world"

console.log(str);
console.log(str1);

let obj1 ={
    email: "xyz@gmail.com",
    age:33,
    name:"jiya",
}
console.log(obj1);
let obj2 = obj1
obj2.email = "fff@gmail.com"

console.log(obj2);

//---------------------------------------------------------------------------------------------
