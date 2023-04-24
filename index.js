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
const form=document.getElementById('my-form');
const items=document.getElementById('items')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
   
    let object={name:nameInput.value,
        email:emailInput.value,
        phoneno:phoneno.value};
    let obj_serialized=JSON.stringify(object); 
    localStorage.setItem(emailInput.value,obj_serialized); 
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value; 
    const li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(name));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(email));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(phone));
    //delete button
    const deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.style.backgroundColor='red';
    deleteBtn.style.width='5%';
    deleteBtn.style.height='10%';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    li.style.color='blue';
    items.appendChild(li);
    items.style.backgroundColor='pink';
})
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
   btn.style.background='green';
   
})
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
   btn.style.background='blue';
})
items.addEventListener('click', removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
      
        var li = e.target.parentElement;
        items.removeChild(li);
        localStorage.removeItem(emailInput.value); 
    }
  }
