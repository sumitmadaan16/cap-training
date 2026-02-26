var screenn = document.getElementById("screen");
var current = "0";
var previous = "";
var op = "";
function show() {
    screenn.textContent = current;
}
function pressNumber(num) {
    if (current === "0") {
        current = num;
    }
    else {
        current = current + num;
    }
    show();
}
function pressDot() {
    if (current.indexOf(".") === -1) {
        current = current + ".";
    }
    show();
}
function pressOperator(newOp) {
    previous = current;
    current = "0";
    op = newOp;
}
function pressEquals() {
    var a = parseFloat(previous);
    var b = parseFloat(current);
    var result = 0;
    if (op === "+")
        result = a + b;
    if (op === "-")
        result = a - b;
    if (op === "*")
        result = a * b;
    if (op === "/")
        result = a / b;
    current = String(result);
    previous = "";
    op = "";
    show();
}
function pressClear() {
    current = "0";
    previous = "";
    op = "";
    show();
}
function pressSign() {
    current = String(parseFloat(current) * -1);
    show();
}
function pressPercent() {
    current = String(parseFloat(current) / 100);
    show();
}
document.getElementById("one").addEventListener("click", function () { return pressNumber("1"); });
document.getElementById("two").addEventListener("click", function () { return pressNumber("2"); });
document.getElementById("three").addEventListener("click", function () { return pressNumber("3"); });
document.getElementById("four").addEventListener("click", function () { return pressNumber("4"); });
document.getElementById("five").addEventListener("click", function () { return pressNumber("5"); });
document.getElementById("six").addEventListener("click", function () { return pressNumber("6"); });
document.getElementById("seven").addEventListener("click", function () { return pressNumber("7"); });
document.getElementById("eight").addEventListener("click", function () { return pressNumber("8"); });
document.getElementById("nine").addEventListener("click", function () { return pressNumber("9"); });
document.getElementById("zero").addEventListener("click", function () { return pressNumber("0"); });
document.getElementById("dot").addEventListener("click", pressDot);
document.getElementById("clear").addEventListener("click", pressClear);
document.getElementById("sign").addEventListener("click", pressSign);
document.getElementById("percent").addEventListener("click", pressPercent);
document.getElementById("equals").addEventListener("click", pressEquals);
document.getElementById("plus").addEventListener("click", function () { return pressOperator("+"); });
document.getElementById("minus").addEventListener("click", function () { return pressOperator("-"); });
document.getElementById("multiply").addEventListener("click", function () { return pressOperator("*"); });
document.getElementById("divide").addEventListener("click", function () { return pressOperator("/"); });
show();
