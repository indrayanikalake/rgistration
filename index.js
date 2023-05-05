const btn=document.querySelector('.btn');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const phoneno=document.querySelector('#phone');
let items = document.getElementById('items');
let form = document.getElementById('my-form');
form.addEventListener('submit', additems);
items.addEventListener('click', deleteitem);
items.addEventListener('click', Edititems);

obj = {
  personName: '',
  personEmail: '',
  personNumber: ''
}

function additems(e) {
  e.preventDefault();
  obj.personName = nameInput.value;
  obj.personEmail = emailInput.value;
  obj.personNumber = phoneno.value;

  let newobj = JSON.stringify(obj);
  axios.post("https://crudcrud.com/api/05238c5751bf4f1e8f1badcbb2d99650/appointmentData",obj)
  .then((response)=>{
    showNewUserOnScreen(response.data);
    console.leg(response);
  })
  .catch((error)=>{
   document.body.innerHTML=document.body.innerHTML + "<h4>Somthing went wrong</h4>";
    console.log(error);
  })
  //localStorage.setItem(email.value, newobj);
  // console.log(newobj)

  let items = document.getElementById('items');
  let newitem = nameInput.value + ' ' + emailInput.value + ' ' + phoneno.value;

  let li = document.createElement('li');
  let deletebtn = document.createElement('button');
deletebtn.style.width='5%';
deletebtn.style.height='20px';
deletebtn.style.backgroundColor='red';
  let Editbtn = document.createElement('button');
 Editbtn.style.width='5%';
 Editbtn.style.height='20px';
Editbtn.style.backgroundColor='blue';

  li.className = 'list-group-item';
  deletebtn.className = 'btn btn-danger btn-sm float-right delete';
  Editbtn.className = 'btn btn-primary btn-sm float-right Edit';

  li.innerText = newitem;
  deletebtn.innerText = 'X';
  Editbtn.innerText = '..';

  li.appendChild(deletebtn);
 
  li.appendChild(Editbtn);
  li.style.color='blue';
  li.style.background='transparent';
  li.style.boxShadow ='10px 10px 10px rgb(248, 245, 248)';
  items.appendChild(li);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}


function deleteitem(e) {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    let arr = li.firstChild.wholeText.split(' ');
    console.log(arr[arr.length - 2])
    localStorage.removeItem(arr[arr.length - 2]);
    items.removeChild(li);
  }
}

function Edititems(e) {
  e.preventDefault();
  if (e.target.classList.contains('Edit')) {
    let li = e.target.parentElement;
    let arr = li.firstChild.wholeText.split(' ');
   
    let global = localStorage.getItem(arr[arr.length - 2]);
    let newglobal = JSON.parse(global);
     console.log(newglobal);
    document.getElementById('name').value = newglobal.personName;
    document.getElementById('email').value = newglobal.personEmail;
    document.getElementById('phone').value = newglobal.personNumber;
    localStorage.removeItem(arr[arr.length - 2])
    items.removeChild(li);
  }
}
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
   btn.style.background='green'
})
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
   btn.style.background='blue';
})

