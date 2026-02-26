console.log("hiii");
//! type inference 
var a = 10;
a = 20;
//! type annotation
var b = "hello";
// b = 20 gives errror
//? number
var c = 242;
c = 205;
var d = true;
var e; //? can not be assigned to anything
var f; //? can be assigned in js but not in TS
//* if no type is given then the first type of data given will be assigned will be its data type
var g = 20;
g = "anyType";
//! array and tuples
//? only homogeneous type is called array
var arr = [10, 20, 30, 40, 450];
var arr2 = [10, 20, 30, 40, 450];
arr.push(50);
//? hetrogeneous will be called tuples
var arr3 = ["hello", 20, true];
arr3.push(false);
//*specified data type
var arr4 = ["hello", 20, true];
arr4.push(378246); // it will add cuz pushed type is one of defined
//? this will give error
// let arr5:[string, number, boolean] = ["hello" , true, 20] 
//! objects
var student = {
    name: "sumit",
    rollNo: 205
};
//! function
function greet(name, age) {
    console.log("name: ".concat(name, " and age is: ").concat(age)); //? we can pass optional arguments and also the default like age = 23 while declaring function.
}
greet("sumit", 23);
//? function  with return type
function add(a, b) {
    return a + b;
}
console.log(add(10, 30));
//? arrow function
var sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 10));
var arr6 = [1238, "any string", 217309]; //?pipeline operator ("|") is used to define that this array can input or can have defiend datatypes
/*
read only attribute of an array
let arr6: readonly (type)[] = [values]
*/
console.log(typeof (add));
var obj = {
    name: "sumit",
    age: 23,
    gender: "male",
    id: 20
};
console.log(obj);
var myDog = {
    name: "Togo",
    age: 12,
    breed: "Husky",
    barks: function () {
        return "yes";
    }
};
console.log(myDog);
