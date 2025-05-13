// functions
// function one(name) {
//     console.log("hey " + name + " how are you");
//     console.log("hey " + name + " you are diffent from others");
//     console.log("hey " + name + " you are good in work");
//     console.log("hey " + name + " you are mastermind");
//     console.log("hey " + name + " you are cute");


// }
// one ("vishal");
// one ("rohan");

// function nick(name) {
//     console.log("hey" + name + "how are you ");
//     console.log("hey" + name + "how are you ");
//     console.log("hey" + name + "how are you ");
//     console.log("hey" + name + "how are you ");
// }
// nick("vishal");

// sum
// function sum(a , b) {
//     console.log(a+b);
// }
// sum(5,8);

// function sum(c,d) {
//     return c+d;
// }
// result = sum(4,5);
// console.log("the sum of these no :",result);

// function sum(x,y,z=20) {
//     return x+y+z;   
// }
// result=sum(10,15);

// console.log("the sum of the these no:",result)

// arrow
const func1 = (a) => {
    console.log("i am an arroy function ", a);
}
func1(20);



// basic function
function nam() {
    console.log("vishal");
    console.log("aditya");
    console.log("ankush");
    console.log("pankaj");
    console.log("ayush");

}
nam();

function sum(a, b) {

    console.log(a + b);
}
sum(4, 8);

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return undefined;
    }
}
console.log(add(7, 8));

function findaverage(a, b, c, d) {
    average = a + b + c + d;
    return average / 4;
}
findaverage(3, 5, 7, 9);
console.log("your average is", average);

function findarea(l, b) {
    area = l * b;
    return area;
}
findarea(6, 9);
console.log("area of rectangle is :", area);

console.log("this is a aroow functions");
// this keyword
let person = {
    name: "vishal",
    greet: function () {
        console.log("hello my name is " + this.name);
        console.log(this);
    }
};
person.greet();
// in normal function
function findsubt(x, y) {
    subt = x - y;
    return subt;
}
findsubt(9, 3);
console.log("result in noraml function", subt);
// arrow function
const findsub = (a, b) => {
    sub = a - b;
    return sub;
}
findsub(5, 3);
console.log("result", sub);

// shorthand of functions

const multi = (num1, num2) => {
    return num1 * num2;
}
console.log("result", multi(9, 4));

// implesit return in arrow function and also the shorthand 

const divide = (num1, num2) => (num1 / num2);
console.log("result:", divide(10, 5));

// implesit return in arrow function using object and also the shorthand 
let obj = (nam) =>  ({username: "ram"}) ;
console.log(nam);