console.log("dom :- Document object model");
// document.getElementById("main").innerHTML="<h3>hello_world</h3>"
document.body.style.backgroundColor = "black"
document.body.style.color = "white"
// document.body.innerHTML="<h1>hello</h1>"
document.getElementById('main').className

document.head.title = "heading"

document.body.style.border = "2px solid black"

document.body.style.border = "2px solid white"

document.body.style.padding = "0px 10px 0px 10px"
const main = document.getElementById('main') // declare a function 
// const main1 = document.getElementsByClassName('heading')
//...
//these are property used to menipulate the content of html element
//....
main.textContent //all text, including hidden text,but no html tags
main.innerHTML //the complete html code inside an element
main.innerText //the text that a user would see on the page

//queryselectors
//querySelector() methodcan only be used to access a single element while
// querySelectorAll() method can be used to access all elements which match with a specified CSS selector
document.querySelector('#main') //select the id
document.querySelector('.heading') //select the class
//........nodelist
// A NodeList is an array - like collection(list) of Node Objects.
// The nodes in a NodeList can be accessed by index(starts at 0).
// The length property returns the number of nodes in a NodeList.
//..........
//.getElementbyClassName()
//convert any nodelist or html_collection into array
// using Array.from()
//........
console.log("DOM relations")
