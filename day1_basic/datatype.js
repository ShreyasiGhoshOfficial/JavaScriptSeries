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