/** 
var ul=document.querySelector('.items');
ul.firstElementChild.innerHTML='<h1>HELLO</h1>';
ul.firstElementChild.style.background='green';
ul.children[1].style.background='yellow';
console.log(ul.firstElementChild);**/

const btn=document.querySelector('.btn');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const phoneno=document.querySelector('#phone');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let object={name:nameInput.value,
                email:emailInput.value,
                phoneno:phoneno.value};
    let obj_serialized=JSON.stringify(object); 
    localStorage.setItem('object',obj_serialized);        
    let obj_deserialized=JSON.parse(localStorage.getItem('object'));
    console.log(obj_deserialized);
})
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
   btn.style.background='green'
})
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
   btn.style.background='blue';
})
