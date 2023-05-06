const btn = document.querySelector('.btn');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneno = document.querySelector('#phone');
const items = document.getElementById('items');
const form = document.getElementById('my-form');

form.addEventListener('submit', showDetails);
obj = {
    personName: '',
    personEmail: '',
    personNumber: ''
  }

function addUserToDom(user) {
  const newItem = document.createElement('li');
  newItem.innerHTML = `
    <div>
      <span>Name: ${user.personName}</span>
      <span>Email: ${user.personEmail}</span>
      <span>Phone: ${user.personNumber}</span>
    </div>
    <button class="delete-btn small" style="width:5%;height:5px;" data-id="${user._id}">X</button>
    <button class="edit-btn small" style="width:5%;height:5px;">e</button>
  `;
 
  const deleteBtn = newItem.querySelector('.delete-btn');
  deleteBtn.classList.add('small');
  deleteBtn.addEventListener('click', () => deleteUser(user._id, newItem));
  const editBtn = newItem.querySelector('.edit-btn');
  editBtn.classList.add('small');


  items.appendChild(newItem);
 
  newItem.querySelector('.delete-btn').addEventListener('click', deleteUser);
}

function showDetails(e) {
  e.preventDefault();
  obj.personName = nameInput.value;
  obj.personEmail = emailInput.value;
  obj.personNumber = phoneno.value;

  axios.post("https://crudcrud.com/api/79468c763b0a4bd59e1e51fc4c54f3ab/appointmentData", obj)
    .then((response) => {
      addUserToDom(response.data);
      console.log(response);
      nameInput.value = '';
      emailInput.value = '';
      phoneno.value = '';
    })
    .catch((error) => {
      document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
      console.log(error);
    });
}

function deleteUser(e) {
  const id = e.target.dataset.id;
  axios.delete(`https://crudcrud.com/api/79468c763b0a4bd59e1e51fc4c54f3ab/appointmentData/${id}`)
    .then((response) => {
      e.target.parentElement.remove();
    })
    .catch((error) => {
      document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
      console.log(error);
    });
}

function getUsersFromApi() {
  axios.get("https://crudcrud.com/api/79468c763b0a4bd59e1e51fc4c54f3ab/appointmentData")
    .then((response) => {
      items.innerHTML = response.data.map(user => `<li><div><span>Name: ${user.personName}</span><span>Email: ${user.personEmail}</span><span>Phone: ${user.personNumber}</span></div><button class="delete-btn" data-id="${user._id}">Delete</button><button class="edit-btn">Edit</button></li>`).join('');
      items.querySelectorAll('.delete-btn').forEach(btn => btn.addEventListener('click', deleteUser));
    })
    .catch((error) => {
      document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
      console.log(error);
    });
}

document.addEventListener('DOMContentLoaded', getUsersFromApi);
