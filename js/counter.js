let count = 0;
let counter = document.getElementById("counter")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let reset = document.getElementById("reset")
let switchColor = document.getElementById("switchColor")

plus.addEventListener("click" , () =>{
    count++;
    counter.textContent = count;
})
minus.addEventListener("click" , () =>{
    count--;
    if(count<=0){
        alert("count less then 0")
        counter.textContent = 0;
        return;
    }
    counter.textContent = count;
    
})
reset.addEventListener("click", ()=>{
    count = 0;
    counter.textContent = count;
})

let cont = document.getElementById("container");
let flag = true;  // declare once, outside
let head1 = document.getElementById("heading")
let counter1 = document.getElementById("counter")
let btn = document.getElementsByClassName("button")
switchColor.addEventListener("click", () => {
    if (flag === true) {
        flag = false;
        document.body.style.backgroundColor = "whitesmoke";
        cont.style.backgroundColor = "#323232";
        head1.style.color = "whitesmoke"
        counter1.style.color="whitesmoke"
        switchColor.textContent = "dark"
        for (let i = 0; i < btns.length; i++) { btns[i].style.backgroundColor = "whitesmoke"; btns[i].style.color =   "#323232";
        }
    } else {
        flag = true;
        document.body.style.backgroundColor = "#323232";
        cont.style.backgroundColor = "whitesmoke";
        head1.style.color = "#323232"
        counter1.style.color="#323232"
        switchColor.textContent = "light"
        for (let i = 0; i < btns.length; i++) { btns[i].style.backgroundColor = "#323232"; btns[i].style.color = "whitesmoke"; }
    }
});
