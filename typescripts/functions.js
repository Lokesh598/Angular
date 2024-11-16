"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const sub = (num1, num2) => num1 - num2;
function addThree(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
function addThree1(num1, num2, num3 = 10) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
function add1(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [10, 20, 30, 40, 50];
console.log(add1(10, 20, ...numbers)); //180
//generic function in typescript
function identity(arg) {
    return arg;
}
function getItems(items) {
    return new Array().concat(items);
}
let concatVal = getItems([10, 20, 30]);
let concatVal1 = getItems(['lokesh', 'suresh', 'ramesh']);
