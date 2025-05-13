// conditions
console.log("hello i am a contional tetorial")

// if else statement 

let age = 20
if (age >= 18) {
    console.log("you can drive");
}
else {
    console.log("you cant");
}

let agee = 5
if (agee >= 18) {
    console.log("you can drive");
}

else {
    console.log("you cant");
}

let x = 10;
let y = 50
if (x > y) {
    console.log("x is greater")
}
else if (x == y) {
    console.log("both are equal")
}
else if (x < y) {
    console.log("y is greater")
}
else {
    console.log("statement is wrong")
}
// ternory operator
// condition ? Expressioniftrue : Expressioniffalse                                                            

let agge = 30;
let message = agge >= 18 ? "you are adult" : "you are a minor"
console.log(message);
// operators 
// arithmetic operator
console.log("arithmetic opp.");
let a = 20;
let b = 50;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);
console.log(a++);
console.log(a--);

// assigning 
console.log("assignment opp.");
let p = 20;
let q = 40;
console.log(p = q);
console.log(p += q); //p=p+q
console.log(p -= q); //p=p-q 
console.log(p *= q); //p=p*q
console.log(p /= q); //p=p/q
console.log(p %= q); //p=p%q
console.log(p **= q); //p=p**q

//comparison operator
console.log("comparision opp.");
let s = 50;
let t = 40;
// ==(equal to)
if (s == t) {
    console.log("true");
}
else {
    console.log("false");
}
// !=(not equal to)
if (s != p) {
    console.log("s is not equal to t");
}
else {
    console.log("s is equal to t");
}
//===(equal value and type)
if (s === t) {
    console.log("true");
}
else {
    console.log("false");
}
//!==( not equal value and type)
if (s !== t) {
    console.log("true");
}
else {
    console.log("false");
}
//>(greater than)
if (s > t) {
    console.log("true");
}
else {
    console.log("false");
}
//<(less than)
if (s < t) {
    console.log("true");
}
else {
    console.log("false");
}
//>=(greater than and equal to)
if (s >= t) {
    console.log("true");
}
else {
    console.log("false");
}
//<=(less than and equal to)
if (s <= t) {
    console.log("true");
}
else {
    console.log("false");
}

// logical operator
console.log("logical opp.")
let d = 20;
let e = 50;
let f = 50;
let g = 80;
// &&(logical end)
if (e == f && d != g) {
    console.log("true");
}
else {
    console.log("false");
}
//||(logical or)
if (e > f || d < g) {
    console.log("true");
}
else {
    console.log("false");
}
//!(logical not)
if (e >= f != d == g) {
    console.log("true");
}
else {
    console.log("false");
}
console.log("spread opr.");
//spread operator
//spread operator is used to iterables like array and strings or properties of objects.
//1.adding multiple element spread opr
let Aa =[2,4,6,7]
let Bb =[...Aa,9,10,11]
console.log(Bb);

//parctice set
console.log("practice set");

// let Age = prompt("enter your age");
// if (Age >= 15) {
//     console.log("you are a teanager");
// }
// else if (Age < 15) {
//     console.log("you are kid");
// }
// else {
//     console.log("prompt is empty");
// }

//write a program to find whether a number is divisible by 2 and 3 and both
// let num = prompt("enter the number");
// if (num % 2 == 0) {
//     console.log("number is divisible by 2");
// }
// else if (num % 3 == 0) {
//     console.log("number is divisible by 3");
// }

// else{
//     console.log("number is not divisible by 2 and 3 both");
// }

// let numm = prompt("enter the number");
//  if (numm % 2 == 0 && numm % 3 == 0) {
//     console.log("number is  divisible by 2 and 3 both");
// }
// else{
//     console.log("number is not divisible by both 2 and 3");
// }

//write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive
// let AGE = prompt("enter your age");
// if (AGE >= 18) {
//     // alert("you can drive");
//     console.log("you can drive");
// }

// else if (AGE == 1 || AGE<18 ){
//     alert("you can't drive ");
// }
// else{
//     console.error("not exist");
// }


