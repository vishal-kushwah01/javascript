console.log("numbers and maths ");
//The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
const num = 500
console.log(num);
const balance = new Number(300)
console.log(balance);
//.......
// number method
console.log("1. tostring");
//string
//The toString() returns a number as a string.
const number = 2000
console.log(number.toString().length);
console.log(typeof number);
//......
console.log("2. tofixed");
//fixed
//The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.
let numm = 300;
let n = numm.toFixed(2);
console.log(n);
//........
console.log("3. toPrecision");
//toPrecision()
//The toPrecision() method formats a number to a specified length.
// A decimal point and nulls are added(if needed), to create the specified length.
const othernum = 34.499
console.log(othernum.toPrecision(3));
//.......
console.log("4. tolocalestring");
//tolocalestring()
//The toLocaleString() returns a number as a string, using local language format.
//The language format depends on the locale setup on your computer.
let Num = 1000000;
let text = Num.toLocaleString("en-IN", { style: "currency", currency: "INR", currencyDisplay: "name" });
console.log(text);
//....
console.log("5. toExponential");
//toExponential()
//The toExponential() method of Number values returns a string representing this number in exponential notation.
const exp = 345.234
console.log(exp.toExponential(3));
//......
console.log("6. valueof");
//valueOf()
//The valueOf() method of Number values returns the value of this number.
const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const newmynum = numObj.valueOf();
console.log(newmynum);
// Expected output: 42

console.log(typeof newmynum);
// Expected output: "number"

//---------------------------------------------
console.log("------------maths------------");

// math methods
// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// acosh(x)	Returns the hyperbolic arccosine of x
// asin(x)	Returns the arcsine of x, in radians
// asinh(x)	Returns the hyperbolic arcsine of x
// atan(x)	Returns the arctangent of x as a numeric value between - PI / 2 and PI / 2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	Returns the hyperbolic arctangent of x
// cbrt(x)	Returns the cubic root of x
// ceil(x)	Returns x, rounded upwards to the nearest integer
// clz32(x)	Returns the number of leading zeros in a 32 - bit binary representation of x
// cos(x)	Returns the cosine of x(x is in radians)
// cosh(x)	Returns the hyperbolic cosine of x
// E	Returns Euler's number (approx. 2.718)
// exp(x)	Returns the value of Ex
// expm1(x)	Returns the value of Ex minus 1
// floor(x)	Returns x, rounded downwards to the nearest integer
// fround(x)	Returns the nearest(32 - bit single precision) float representation of a number
// LN2	Returns the natural logarithm of 2(approx. 0.693)
// LN10	Returns the natural logarithm of 10(approx. 2.302)
// log(x)	Returns the natural logarithmof x
// log10(x)	Returns the base - 10 logarithm of x
// LOG10E	Returns the base - 10 logarithm of E(approx. 0.434)
// log1p(x)	Returns the natural logarithm of 1 + x
// log2(x)	Returns the base - 2 logarithm of x
// LOG2E	Returns the base - 2 logarithm of E(approx. 1.442)
// max(x1, x2,..)	Returns the number with the highest value
// min(x1, x2,..)	Returns the number with the lowest value
// PI	Returns PI(approx. 3.14)
// pow(x, y)	Returns the value of x to the power of y
// random()	Returns a random number between 0 and 1
// round(x)	Rounds x to the nearest integer
// sign(x)	Returns the sign of a number(checks whether it is positive, negative or zero)
// sin(x)	Returns the sine of x(x is in radians)
// sinh(x)	Returns the hyperbolic sine of x
// sqrt(x)	Returns the square root of x
// SQRT1_2	Returns the square root of 1 / 2(approx. 0.707)
// SQRT2	Returns the square root of 2(approx. 1.414)
// tan(x)	Returns the tangent of an angle
// tanh(x)	Returns the hyperbolic tangent of a number
// trunc(x)	Returns the integer part of a number(x)
//.......................................................................
// some imp methods
console.log(Math);
console.log(Math.abs(-5)); //A numeric expression for which the absolute value is needed.
//Returns the absolute value of a number(the value without regard to whether it is positive or negative). 
console.log(Math.round(9.6)); //The value to be rounded to the nearest integer.Returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.floor(8.9)); //Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.ceil(8.9)); //Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.min(2, 4, 6, 8, 1)); //Returns the smaller of a set of supplied numeric expressions.
console.log(Math.max(2, 4, 6, 8, 1)); //Returns the larger of a set of supplied numeric expressions.
// random() is imp method
console.log(Math.random()); //Returns a pseudorandom number between 0 and 1.
console.log(Math.random()*20);
console.log((Math.random() * 10)+1);
// generic formula

const min = 10
const max =30
console.log(Math.floor(Math.random() * (max - min + 1) + min));
//-------------------------------date and time----------------------------------------------------------------
console.log("date");
let mydate = new Date()
console.log(typeof mydate);
console.log(mydate.toString()); // output (Tue May 06 2025 08:11:33 GMT+0530 (India Standard Time))
console.log(mydate.toISOString()); //output(2025-05-06T02:43:26.715Z
console.log(mydate.toDateString()); //Tue May 06 2025
console.log(mydate.toLocaleDateString()); //5/6/2025
//...................


// declare a new date according to need
let newdate = new Date(2025,4,7,9,15) //month will start with 0 index like:- 0-jan , 1-feb , 2-march
console.log(newdate.toDateString());
console.log(newdate.toLocaleString());
// new syntax to declare date and time 
let declaredate = new Date("2025-05-7") // in this month will start with 1 index like:- 1-jan , 2-feb , 3-march
console.log(declaredate.toLocaleDateString());
//..................
//time stamp
console.log("timestamp");
let mytimestamp = Date.now()
console.log(mytimestamp); // it gaves time in the minisec 
console.log(newdate.getTime()); //convert into time
console.log(newdate.getTime());