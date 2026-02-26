// let array=[10,267,636,738,427]
// //!homogeneous array

// let arr1=[10,"bcbsd",true,null,undefined]
// //!heterogeneous array
// let stud=["ram",21,"JECRC","CS",true,21]

// console.log(arr1);
// console.log(stud[2]);
// delete stud[2]
// console.log(stud);


// //?objects
// let student={
//     name:"ram",
//     age:21,
//     college:"JECRC"
// }
// console.log(student);
// console.log(student.name);
// student.name="sita"
// console.log(student.name);
// console.log(student);

// delete student.college
// console.log(student);


// function add(){
//     let a=10
//     let b=20
//     console.log(a+b);
// }
// add()
// add()

// //named function
// function sub(a,b=5){
//     console.log(a-b);
//     return a-b
// }
// console.log(sub(10))
// console.log(a(10,10));


//anomous function
// const a=function (){
//     console.log("hii");
//      return 10
// }
// console.log(a());
// a();


// (function (){
//     console.log("hello");
// })()

/**
 * declaration
 * initialiazation
 * re decalartion
 * re initialiazation
 *  dec+init in same line
 * dec+init in diff line
 * redec+reinit in same line
 * redec +reinit in diff line
 */

/**
 * var
 * let 
 * const
 */

//var
// var a;
// a = 5
// var a =10
// var b= a
// var a = 9
// console.log(b);


//let
// let c;
// c = 4
// let d = 6
// let d = 7
// d = 8

//const
// const f = 5
// const e;
// e= 6
// const f = 6


// g = 43
// console.log(g);//bare decleration 

// var a=10;
// let b=10;
// const c=10;

// console.log(a);
// console.log(b);
// console.log(c);

// function abc(){
//     var d=10;
//     let e=11;
//     const f=12;
//     console.log(d);
//     console.log(e);
//     console.log(f);
// }
// console.log(d);
// console.log(e);
// console.log(f);
// {
//     let x=10;
//     var y=12;
//     const z=13;
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// console.log(x);
    // console.log(y);
//     console.log(z);

// abc()


 let a = n=> n*2
 //!function storing inside the variable is known as function expression

 //!whichever function we are storing inside the variable is known as first class function/first citizen function
 //
    // console.log("hii");
   
    // console.log("Class");
//  a()
 console.log(a(4));