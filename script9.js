console.log("DOM relations")
//select parent using dom
document.body.style.backgroundColor = "yellow";
document.querySelector('.parent')
const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children); // acess the children 
console.log(parent.children[1].innerHTML);
parent.style.border = "2px solid black"
parent.style.padding = "10px";
// styling children using parent
parent.children[0].style.color ="green"
// tareg element using parent element("move child using the parent")
//1.firstelement
console.log(parent.firstElementChild); // acess first child 
//2. lastelement
console.log(parent.lastElementChild); // acess last child
// target parent using( child element("move parent using the child")
 const dayone = document.querySelector('.day')
 console.log(dayone);
console.log(dayone.parentElement); // move to the parent
console.log(dayone.nextElementSibling); // next sibling (tuesday)
console.log("nodes :",parent.childNodes);


