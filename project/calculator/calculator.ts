let screenn = document.getElementById("screen") as HTMLElement;
let current = "0";
let previous = "";
let op = "";
function show() {
    screenn.textContent = current;
}
function number(num: string) {
    if (current === "0") {
        current = num;
    } else {
        current = current + num;
    }
    show();
}
function Dot() {
    if (current.indexOf(".") === -1) {
        current = current + ".";
    }
    show();
}
function operator(newOp: string) {
    previous = current;
    current = "0";
    op = newOp;
}
function Equals() {
    let a = parseFloat(previous);
    let b = parseFloat(current);
    let result = 0;
    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = a / b;
    current = String(result);
    previous = "";
    op = "";
    show();
}
function Clear() {
    current = "0";
    previous = "";
    op = "";
    show();
}
function Sign() {
    current = String(parseFloat(current) * -1);
    show();
}
function Percent() {
    current = String(parseFloat(current) / 100);
    show();
}
document.getElementById("one")!.addEventListener("click", () => number("1"));
document.getElementById("two")!.addEventListener("click", () => number("2"));
document.getElementById("three")!.addEventListener("click", () => number("3"));
document.getElementById("four")!.addEventListener("click", () => number("4"));
document.getElementById("five")!.addEventListener("click", () => number("5"));
document.getElementById("six")!.addEventListener("click", () => number("6"));
document.getElementById("seven")!.addEventListener("click", () => number("7"));
document.getElementById("eight")!.addEventListener("click", () => number("8"));
document.getElementById("nine")!.addEventListener("click", () => number("9"));
document.getElementById("zero")!.addEventListener("click", () => number("0"));

document.getElementById("dot")!.addEventListener("click", Dot);
document.getElementById("clear")!.addEventListener("click", Clear);
document.getElementById("sign")!.addEventListener("click", Sign);
document.getElementById("percent")!.addEventListener("click", Percent);
document.getElementById("equals")!.addEventListener("click", Equals);

document.getElementById("plus")!.addEventListener("click", () => operator("+"));
document.getElementById("minus")!.addEventListener("click", () => operator("-"));
document.getElementById("multiply")!.addEventListener("click", () => operator("*"));
document.getElementById("divide")!.addEventListener("click", () => operator("/"));

show();