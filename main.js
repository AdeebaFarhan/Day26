function updateVariable() {
    var number = 10;
    console.log("Initial value:", number);
    number = 30;
    console.log("Updated value:", number);
}
updateVariable();
function swapValues() {
    var a = 10, b = 6;
    console.log("a=", a, "b=", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("a=", a, "b=", b);
}
swapValues();
function useCompoundsOperator() {
    var x = 4;
    console.log("Initial x:", x);
    x += 4;
    console.log("After addition :", x);
    x -= 2;
    console.log("After subtraction :", x);
    x *= 2;
    console.log("After multiply :", x);
    x /= 4;
    console.log("After division:", x);
    x %= 4;
    console.log("Reminder :", x);
}
useCompoundsOperator();
