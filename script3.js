// loops
console.log("i am a tetorial on loops")
// for:-loop a block of codes of Times
// forin:- loops thoughts the keys of the Object
// forof:- loops thoughts the value of the Object
// while:-loops a block based on the spacific Condition
// do-while:-while loop variable which runs atleast once

// for
let a = 1
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}
// forin
// let object = {
//     name: "vishal",
//     role: "developer",
//     company: "google",

// }
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key, element);
//     }
// }

// forof
for (const c of "vishal") {
    console.log(c)
}

// while
let i = 0;
while (i < 10) {
    console.log(i)
    i++;
}
// do while
let v = 10;
do {
    console.log(v)
    v++;
} while (v < 5);


//practice questions

// write a program  to print the marks of the stuudent in an object using for loop  
let obj = {
    harry: 98,
    rohan: 70,
    aakash: 75,

}
for (let i = 0; i < 1; i++) {
    console.log(obj);
}

// write a program  to print the marks of the stuudent in an object using forin loop

let object = {
    vishal: 30,
    kashish: 20,
    prachi: 10,
}
for (const key in object) {

    const element = object[key];
    console.log(key, element);

}
// write a function to find the mean of the 5 numbers 
function findmean(num1, num2, num3, num4, num5) {
    sum = num1 + num2 + num3 + num4 + num5;
    return sum / 5;
}
console.log("mean of the numbers is:", findmean(4, 5, 6, 7, 8));

// write a program to print "try again " until the user enters the correct number
let correctnum = 7;
const usernum = null;
while (true) {
    let definenum =prompt("enter the number");
    if(correctnum==definenum){
        alert("correct");
        break;
    }
    else{
        alert("try again");
    }
}