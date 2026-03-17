let arr = [10, 20, 30, 40,50, 60]

for(let i in arr){
    console.log(i); // gives indexing in array
}
for(let i of arr){
    console.log(i); // gives actual in values in case of arrays
}

//obj
let obj={
    key1 :"value1",
    key2 :"value2"
}
for(let i in obj){
    console.log(i); //gives keys in case of object
}
for(let i in obj){
    console.log(i); //gives keys in case of object
    console.log(obj[i]); //this gives actual values
}
//? for(let i of obj){
//?     console.log(i); 
// gives undifined cuz obj. are non iterable
//? }
