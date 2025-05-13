console.log("string");
let nam = "harry";
console.log(typeof nam);


// add two strings
let str = "vishal";
let strr = "thakur";
merge = str + strr;
console.log(merge);
console.log(str + strr);
// string interpolation
console.log(`Hello my name is ${str} and my sername is ${strr}`);

// how to declare string
const namee = new String("vishal");
console.log(namee);

// string methods 

let strname = "ram";
console.log(strname.length); //check the length of the string
console.log(strname.toUpperCase()); //convert string into the uppercase
console.log(strname.toLowerCase()); //convert string into the lowercase
console.log(strname.slice(0,1)); //slice the string
console.log(strname.substring(-3)); // substring is similar as the slice but it can contain or allow negitive values
// replace the string 
let newstr = strname.replace("ram","shyam");
console.log(newstr);
// removes whitespaces in the strings using trim method
let space = "   how are you sir  "  //this string contains or allot the extra boxes in the database
console.log(space.trim());
console.log(space.trimStart());
console.log(space.trimEnd());
// split method
let text = "how are you doing today";
console.log(text.split(" ")); //splits a string into an array of substring
const myarray = text.split(" "); 
text.split(" ",3); //spits the characters using the limit parameters 
let word = myarray[1];//split the words and return the second word
console.log(word);
// startwith() method
// the stringwith( method ) returns true if a string starts with a specified string otherwise it returns false
// this method is also case sensitive
let textt = "if you think you can do!"
// string start with the characters of this string returing true or false as approprite
console.log(textt.startsWith("if")); //true
console.log(textt.startsWith("how")); //false
//  string ends with the characters of this string returing true or false as approprite
console.log(textt.endsWith("do!")); //true
console.log(textt.endsWith("do")); //false
// includes method
// the includes() method returns true if a string contains a specified string 
console.log("this is includes() method");
let char = "all the right thing will heppen"
console.log(char.includes("right")); //true
console.log(char.includes("wrong"));











