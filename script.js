console.log("hello world")
console.log("first program")
console.warn("this is a warning"); //to highlight potential issues that don't requires immediate action
console.info('data looaded successfully 🚀 ') //for informational messages that aren't warnings or errors
// veriables
//  var is a glovel variable
var x = 10;
var y = 20;
var z = "vishal";
console.log(x + y + z)
console.log(typeof x, typeof y, typeof z)
// document.title = "javascript tetorial";



// const is a unchangeable  variable it can't be changed after defined

// const x =50; it is defined it can't be changed

// let is a block varibale it is mostly use in the js
{
    let x = 10;
    console.log(x);
}
const men = {
    "name": "adita",
    "class": "10th",
}
console.log(men);
console.log(typeof men);


// data types
let a = "vishal 2";
let b = 20;
let c = 10.22;
const d = true;
let e = null;
let f = undefined;
let g = Symbol("symbol")

console.log(a, b, c, d, e, f, g);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f,typeof[g]);

// make a object
let o = {
    "name": "vishal",
    "job": "software developer"

}
console.log(o);
console.log(typeof o);

let student = {
    "name": "vishal thakur",
    "course": "bca",
    "cgpa": 7.18,
   

}
console.log(student);
console.log(typeof student);
//.........
// acess the object in different way
const jsuser ={
    name : "vishal",
    "full name" : "vishal kushwah",
    age : 20,
    location : "Dehradun",
    study : "perseuing BCA",
    email : "vishalkushwah@gmail.com"

}
console.log(jsuser);
console.log(jsuser.name);
console.log(jsuser["full name"]); // acess the string
//........
//overwrite values in the object
jsuser.email = "vishal@google.com" //email value is overwrite
console.log(jsuser);
//......
// lock values in the object (anyone can't update or edit the values in the object)
// Object.freeze(jsuser)
jsuser.age = 21
console.log(jsuser);

// acess symbol in the object
const mysym = Symbol("key")
const newobj = {
    js:"javascript",
    css : "cascading style sheet",
    html : "hyper text markup language",
    py : "python",
    [mysym] : "mysymbol" // acess symbol in the object using []
}
console.log(newobj);
console.log(newobj[mysym]);
console.log(typeof[mysym]);
//..........
// add function in the object

jsuser.greeting = function(){
    console.log("hello JS user");
    
}
console.log(jsuser.greeting());
//....
jsuser.greeting2 = function(){
    console.log(`hello JS user,${this.name}`);
}
console.log(jsuser.greeting2());

//..............
//singleton object
console.log("...........singleton object..............");
// const snapuser = new Object() // singleton object
const snapuser = {}  //non-singleton object
snapuser.username = "vishalrajput24"
snapuser.snapscore = "5,60,450"
snapuser.isloggedin = false
console.log(snapuser);
//..............
// nested object
console.log("nested objects");
const user = {
    email : "123@gmail.com",
    Name :{
        username :{
            firstname : "vishal",
            lastname : "thakur"
        }
    }
}
console.log(user.Name.username.firstname);
//........
//combine the object 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
 
// const obj3 = {obj1,obj2} this not a good way
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);
// spread the object 
 const obj4 = {...obj1,...obj2}
console.log(obj4);