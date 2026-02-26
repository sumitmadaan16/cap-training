console.log("hiii")
//! type inference 

let a = 10
a = 20

//! type annotation
let b:string = "hello"
// b = 20 gives errror

//? number
let c:number = 242
c = 205

let d:boolean = true
let e:null //? can not be assigned to anything
let f:undefined //? can be assigned in js but not in TS

//* if no type is given then the first type of data given will be assigned will be its data type

let g:any= 20
g="anyType"

//! array and tuples

//? only homogeneous type is called array
let arr = [10,20,30,40,450]
let arr2:number[] = [10,20,30,40,450]
arr.push(50);

//? hetrogeneous will be called tuples
let arr3 = ["hello" , 20, true]
arr3.push(false)

//*specified data type
let arr4:[string, number, boolean] = ["hello" , 20, true]
arr4.push(378246) // it will add cuz pushed type is one of defined

//? this will give error
// let arr5:[string, number, boolean] = ["hello" , true, 20] 

//! objects

let student:{
    name:string,
    age?:number, // '?' make it optional when defining values
    rollNo:number
}={
    name:"sumit",
    rollNo:205
}

//! function

function greet(name:string, age:number){
    console.log(`name: ${name} and age is: ${age}`); //? we can pass optional arguments and also the default like age = 23 while declaring function.
    
}
greet("sumit" , 23)

//? function  with return type
function add(a:number, b:number):number{
    return a+b
}
console.log(add(10,30));

//? arrow function
let sum = (a:number,b:number):number=>{
    return a+b
}
console.log(sum(5,10));

let arr6:(string | number)[] = [1238, "any string" , 217309] //?pipeline operator ("|") is used to define that this array can input or can have defiend datatypes

/*
read only attribute of an array
let arr6: readonly (type)[] = [values]
*/

console.log(typeof(add));

//! interface

/**
 * syntax:
 * 
 * interface Interface_name{
 *    property:type
 * }
 */

interface Person{
    name:string,
    age:number,
    gender:string,
    readonly id:number
}

let obj:Person={
    name:"sumit",
    age:23,
    gender:"male",
    id:20
}

console.log(obj);

interface Animal{
    name:string,
    age:number
}
interface Dog extends Animal{
    breed:string,
    barks():string
    // barks?():string to make it optional
}

let myDog:Dog = {
    name:"Togo",
    age:12,
    breed:"Husky",
    barks(){
        return "yes"
    }
}
console.log(myDog);




