class Car{
    brand:string;
    color:string="Black";
    display: () => void;

    start():void{
        console.log(`this is my car of brand: ${this.brand} and color is ${this.color}`);
    };
    constructor(){
        this.display = () =>{
            console.log("this is inside display");  
        };
    }
}

let c = new Car()
c.brand="maruti"
c.start();
console.log(c);
c.display();


//! constructors and inheritence


//! modules, prototype and 


//! Asynchronous programming
//?timer function
//? promises
//? async and awit(ES8 ,2017)

function task1(){
    console.log("TASK1");
}

function task2(){
    console.log("TASK2");
}

task1()
task2()
//* in this order it prints TASK1 then task2

//? setTimeOut ---> 3000 --> 3 sec means it will wait for 3 sec then execute
//? setInterval --> 3000 --> 3 sec. it means every 3 sec it will execute

console.log("start");
const id:number = setTimeout(()=>{
    console.log("task complete");
},2000)

console.log("end");


//?promise

let p1 = new Promise<string>((resolve, reject) => {
  let success = true;
  if (success) {
    console.log("login successful");
    resolve("User logged in");
  } else {
    console.log("login unsuccessful");
    reject("Login failed");
  }
});

p1.then((message) => {
  console.log("Resolved:", message);
}).catch((error) => {
  console.error("Rejected:", error);
});

function getUser():Promise<string>{
  return new Promise((resolve ,  reject)=>{
    resolve("user is there")
    reject("user not found")
  })
}

getUser().then((ele) =>{
  console.log(ele);
}).catch((res)=>{
  console.log(res);
})


let promis1 = new Promise<number>((resolve) => {
  resolve(10)
}) 
promis1.then(num=>num*20 // this statement takes num = 10 , then return num*10 and stores it in resolve
).then((res) => { // then in this statement res fetches the upadted value from resolve which is 200
  console.log(res);
})