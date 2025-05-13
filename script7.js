// array in javascript
// array are variable which can hold more than one value..
// in the javascript array are resizeeable
console.log("it is a chapter `array`");
const fruits = ["banana", "apple", "graphs"];
console.log(fruits);
console.log(fruits[0]);
console.log(typeof fruits); //type of array object (it is a non-primitive datatype).
const myarr = new Array(1, 3, 5, 7); // array declare in another way
console.log(myarr);
myarr[0]; // accessing the value
console.log(myarr.length); //finding the lenght
myarr[2] = 9; //changing the values
console.log(myarr);

//array methods

console.log("There are some important array methods ");
console.log("(1)...join method...");
// join method
// joins all the array element using a separate
const arr = [3, 6, 9, "himesh", "ram"];
console.log(arr.join(" and "));
//.........
console.log("(2)...push method...");
//push method
//adds a new element at the end of the array
const newelement = ["ram", "shyam", "radha"];
console.log(newelement.push("hanuman")); // modifies the array returns the new array lenght
console.log(newelement); //return new array 
//also push the element in that way
let n = [2, 4, 6, 8];
n.push(5);
console.log(n);
//..........
console.log("(3)...pop method...");
//pop method
// remove last element from the array
const Myarr = ["vishal", "ayush", "aditya"];
console.log(Myarr);
Myarr.pop();
console.log(Myarr);
//........
console.log("(4)...shift method...");
//shift method
//removes first element and return it.
const MYarr = ["arush", "ankul", "aradhya"]
console.log(MYarr);
MYarr.shift()
console.log(MYarr);
//........
console.log("(5)...unshift method...");
//unshift method
//adds element to the beginning returns the new array
console.log(MYarr);
MYarr.unshift("anurag")
console.log(MYarr);
//......
console.log("(6)...delete method...");
//delete method
//array element can deleted using the delete method(operator)
let a = [2, 3, 4, 5, 8]
console.log(a);
delete a[1]
console.log(a);
//........
console.log("(7)...concat method...");
//concat method
//it is used to join arrays to the given array
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a1.concat(a2, a3));
//........
console.log("(8)...reverce method...");
//reverce() method
// reverses the element in the source array
let r1 = [3, 5, 7, 9]
console.log(r1);
console.log(r1.reverse());
//........
console.log("(9)...splice method...");
//splice() method
//splice can used to add new items to the array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 8];
console.log(number);
number.splice(8, 8, 9, 10); //(position to add no , no of the element to remove , element to be added)
console.log(number);
//...........
console.log("(9)...slice method...");
//slice method()
//slices out a piece from an array. it creates a new array
const num = [2, 3, 4, 5, 6, 7, "hello", 8, 9,]
console.log(num);
console.log(num.slice(7));
//..........
console.log("(10)...sort method...");
// sort method()
//sort method() is used to sort an array alphabetically
let srtArray = ["a", "c", "b", "e", "d"];
console.log(srtArray);
console.log(srtArray.sort());
//.....
let d = [11, 2, 22, 1]
console.log(d);
d.sort((a, b) => a - b)
console.log(d);
//.........
console.log("(11)...includes method...");
//includes method()
//the includes() method returns true if a array contains a specified array
let incArray = ["hey", "how", "are", "you"]
console.log(incArray);
console.log(incArray.includes("you")); //true
console.log(incArray.includes("the")); //false
//.......
console.log("(12)...spread operator...");
//spread opr
//spread operator can be used to concatenate more than one array
const marvel_heroes = ["ironman", "captain America", "thor", "hulk"]
const dc_heroes = ["superman", "batman", "flash", "jocker"]
const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes);
//........
console.log("(13)...flat method...");
//flat method
//it is used to flatten an array creating a new array with all the sub-array element concatenated into it recursively up to a specific depth
let subarr = [1, 2, [4, 5, [6, 7], [2, 5]], [9, 3]] //sub-arrays
let newarr = subarr.flat(Infinity)
console.log(newarr);


//.............................
console.log("looping through array");
// array can be looped through using the classical javascript for loop or through some other methods discussed below
// for loop 
console.log("for loop");
let arry = [2, 4, 6, 9]
for (let index = 1; index < arry.length; index++) {
    const element = arry[index];
    console.log(element);
}
//for each loop
console.log("for each loop");
console.log("basic");
let each = [55, 77, 23, 79, 12]
each.forEach(function (value) {
    console.log(value);
})
//....
console.log("using arrow function");
const ipl = ["rcb", "pbks", "mi", "gt"]
ipl.forEach((ipl) => {
    console.log(ipl);
})
//....
console.log("for each using object");
const team = [
    {
        'team': 'rcb',
        'captain': 'rajat patidar'
    },
    {
        'team': 'mi',
        'captain': 'hardik pandya'
    },
    {
        'team': 'pbks',
        'captain': 'shrish iyar'
    },
    {
        'team': 'gt',
        'captain': 'shubham gill'
    }

]
team.forEach((item) => {
    console.log(item);
    console.log(item.captain);
})

//for of loop
console.log("for of loop");
for (const value of arry) {
    console.log(value);
}
//
console.log("-------");
const greetings = "hello_world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}
//......
console.log("map operator");
//map operator
//creates a new array by performing some operation on each array element
// map objects holds the key-value pairs and remembers that original insertion order of the keys.
const mpp = [2, 4, 6]
console.log(mpp);
const newmpp = mpp.map((element) => {
    return element ** 2
})
console.log(newmpp);
//...
console.log("map using loop");
const map = new Map()
//set:-Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated
map.set('name', 'vishal')
map.set('course', 'bca')
map.set('sem', 'fourth')
map.set('name', 'aditya')
console.log(map);
console.log("for of loop");
for (const [key, value] of map) {
    console.log(key, ':-', value);
}


//......
console.log("filter method");
//filter 
// filters an array with values that passes a test creates a new array
console.log("basics of filter method");
const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mynum);
//using filter
// const newmynum = mynum.filter((num) => (num > 4))
//if you use {} this then use use return keyword 
const newmynum = mynum.filter((num) => {
    return num > 5
})
console.log(newmynum);

const IPL = [
    {
        team: 'team1',
         teamname: 'rcb',
         teamcaptain: 'Rajat Patidar',
         points_table: '1',
         titles: 'never will single tilte till now',
         owner: 'United Spirits Limited'
    },
    {
        team: 'team2', 
        teamname: 'pbks', 
        teamcaptain: 'Shreyas Iyer',
         points_table: '2',
         titles: 'never will single tilte till now',
         owner: 'Preity Zinta , Ness Wadia,Mohit Burman and karan Paul'
    },
    {
        team: 'team3',
         teamname: 'mi',
         teamcaptain: 'Hardik Pandya', 
        points_table: '3', 
        titles: 'win[year:-]',
         owner: 'nita_ambani'
    },
    {
        team: 'team4',
         teamname: 'gt',
         teamcaptain: 'Shubman Gill',
         points_table: '4', 
        titles: 'win[year:-]', 
        owner: 'CVC capital partners'
    },
    {
        team: 'team5',
         teamname: 'dc', 
        teamcaptain: 'Axar Patel',
         points_table: '5', 
        titles: 'never will single tilte till now',
         owner: 'GMR group & JSW sports'
    },
    {
        team: 'team6',
         teamname: 'lsg', 
        teamcaptain: 'Rishabh Pant',
         points_table: '7', 
        titles: 'never will single tilte till now',
         owner: 'sanjiv goiyanka'
    },
    {
        team: 'team7',
         teamname: 'kkr', 
        teamcaptain: 'Ajinkya Rahane',
         points_table: '6', 
        titles: 'win[year:-]', 
        owner: 'srk, juhi chawla, jay mehta'
    },
    {
        team: 'team8',
         teamname: 'rr',
         teamcaptain: 'Sanju Samson',
         points_table: '8',
         titles: 'win[year:-]',
         owner: 'Manoj Badale'
    },
    {
        team: 'team9',
         teamname: 'srh', 
        teamcaptain: 'Pat cummins', 
        points_table: '9', 
        titles: 'never will single tilte till now',
         owner: 'Kalanithi Manan'
    },
    {
        team: 'team10',
         teamname: 'csk',
         teamcaptain: 'Ruturaj Gaikwad', 
        points_table: '10',
         titles: 'win[year:-]',
         owner: 'N.srinivasan'
    }
]
// console.log(IPL.filter((team)=>{
//     return team.titles ==='win[year:-]'
// }));
// also return value declare a new array
let iplteams = IPL.filter((team) => {
    return team.points_table <= 4 && team.titles === 'win[year:-]'
})
console.log(iplteams);
//.......................
//chaining
const mynumm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
newnumm = mynumm
    .map((num) => { return num * 2 })
    .map((num) => { return num + 5 })
    .filter((num) => { return num % 3 == 0 })

console.log(newnumm);
//....................
console.log("reduce method");
//reduce method
//reduce method executes a user-supplied "reducer" callback function on each element of the array.
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14,]
const newarray = array1.reduce((accumulator, currentvalue) => {
    console.log(`acc:${accumulator} and curvel:${currentvalue}`);
    return accumulator + currentvalue
}, 0)
console.log(newarray);
//reduce using object
const shopingcart = [
    {
        course: 'js course',
        price: 1999
    },
    {
        course: 'cpp course',
        price: 3999
    },
    {
        course: 'web dev course',
        price: 5999
    },
    {
        course: 'cloud computing course',
        price: 2999
    },
]
const totalamm = shopingcart.reduce((acc, item) => {
    return acc + item.price
}, 0)
console.log(totalamm);
