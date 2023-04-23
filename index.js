//1 parentElemnt
var itemlist=document.querySelector('#items');
console.log(itemlist.parentElement);
//2 lastelementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='hello4';
//3 lastchild
console.log(itemlist.lastChild);
//5 firstelemnetchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='hello1';
//6 firstchild
console.log(itemlist.firstChild);
//7 nextsibling
console.log(itemlist.nextSibling);
//8 nextelementsibling
console.log(itemlist.nextElementSibling);
//9 prevsibling
console.log(itemlist.previousSibling);
//10 prevelementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color="green";
//11 createelement
var div=document.createElement('div');
//12 setAttrribute
div.setAttribute('title','hello div');
//13 createTextNode
var text=document.createTextNode('Hello World');
//14 appendChild
div.appendChild(text);
console.log(div);
