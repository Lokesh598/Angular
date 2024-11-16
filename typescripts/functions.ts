function add(num1: number, num2: number): number {
    return num1 + num2;
}

const sub = (num1: number, num2: number): number => num1 - num2;


function addThree (num1:number, num2:number, num3?:number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

function addThree1 (num1:number, num2:number, num3 = 10): number { //can pass default number as well
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

function add1(num1: number, num2: number, ...num3:number[]): number {
    return num1 + num2 + num3.reduce((a,b) => a+b, 0);
}

let numbers = [10, 20, 30, 40, 50];
console.log(add1(10, 20, ...numbers));//180


//generic function in typescript

function identity<T>(arg: T): T {
    return arg;
}

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatVal = getItems<number>([10, 20, 30]);

let concatVal1 = getItems<string>(['lokesh', 'suresh', 'ramesh']);