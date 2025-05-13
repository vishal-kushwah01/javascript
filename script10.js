console.log("create a element in DOM");
//create div 
document.createElement('div')
const div = document.createElement('div')
console.log(div);
// declare class or id 
div.className ="main"
div.id ="divone"
// declare id using math 
// div.id = Math.round(Math.random() * 10 + 2)
//..........
// create new attribute
div.setAttribute("title","js")
// add text into the div
// div.innerHTML ="create a element using dom"
// add text in the div using textnode
const addtext = document.createTextNode("create a element using dom")
div.appendChild(addtext)
// show on the webpage
document.body.appendChild(div)
//.....................................................................
console.log("edit and remove element in DOM ");
// add list item in the ul
//using function
function addlanguage(langname) {
    const li = document.createElement('li')
    li.innerHTML = `${langname}`
    document.querySelector('.language').appendChild(li)
}
addlanguage('PYTHON')
addlanguage('PHP')
//using function to optimize the code
function optilanguage(languagename) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(languagename))
    document.querySelector('.language').appendChild(li)
}
optilanguage('JAVA')
//......
function addtextt(text) {
    const para = document.createElement('p')
    para.appendChild(document.createTextNode(text))
    document.querySelector('.heading').appendChild(para)
}
addtextt('Add some text in this paragraph')

//edit the element
const seclang = document.querySelector('li:nth-child(2)')
// seclang.innerHTML ="CSS" 
const newli = document.createElement('li')
newli.textContent = "CSS"
seclang.replaceWith(newli)

//....
const firstlang = document.querySelector('li:first-child')
const firstli = document.createElement('li')
firstli.textContent = "TYPESCRIPT"
firstlang.replaceWith(firstli)

//....edit using outerhtml
const thirdlang = document.querySelector('li:nth-child(3)')
thirdlang.outerHTML = "<li> HTML </li>"

//....edit using innerhtml
const forthlang = document.querySelector('li:nth-child(4)')
forthlang.innerHTML = "C++"

//.........remove element
const divv = document.createElement('div')
divv.className = "greet"
const city = document.querySelector('.cities')
divv.appendChild(city)
document.body.appendChild(divv)

function addcities(cities) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(cities))
    document.querySelector('.cities').appendChild(li)
}
addcities("DEHRADUN")
addcities("MEERUT")
addcities("BULANDSHAHR")
addcities("KHURJA")
//....
const removelast = document.querySelector('li:last-child')
removelast.remove()
//....

