/** 
var ul=document.querySelector('.items');
ul.firstElementChild.innerHTML='<h1>HELLO</h1>';
ul.firstElementChild.style.background='green';
ul.children[1].style.background='yellow';
console.log(ul.firstElementChild);**/

const btn=document.querySelector('.btn');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(nameInput.value);
    console.log(emailInput.value);
})
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
   btn.style.background='green'
})
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
   btn.style.background='blue';
})
