// array in js is Oth index
// in ja array copy data as shallow copy


const arr=[1,2,3,4,5]
//console.log(arr[0]);
arr.push(6);
arr.push(7);
arr.pop();
//console.log(arr);
//console.log(arr.indexOf(4));

const newarr = arr.join();// convert into string using previous array value;
//console.log(arr);
//console.log(newarr);
//-------------------------Slice,splice-------------

const arr2 = arr.slice(1,3); // slice take character from index 1 to 2 only not take 3
//console.log(arr2);

const arr3 = arr.splice(1,3); // splice take character from index of 1 to 3 
//console.log(arr);// here splice remove element from specific index

//console.log(arr3);
//-------------spread operator---------------
const concatArray = [...arr,...arr2];
console.log(arr);
console.log(arr2);
console.log(concatArray);
//-----------flat array------------