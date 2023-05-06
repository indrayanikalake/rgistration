const btn = document.querySelector('.btn');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneno = document.querySelector('#phone');
const items = document.getElementById('items');
const form = document.getElementById('my-form');

let editUserId = '';

form.addEventListener('submit', showDetails);
items.addEventListener('click', handleItemActions);

function addUserToDom(user) {
  const newItem = document.createElement('li');
  newItem.innerHTML = `
    <div>
      <span>Name: ${user.personName}</span>
      <span>Email: ${user.personEmail}</span>
      <span>Phone: ${user.personNumber}</span>
   
    </div>
    <button class="btn btn-danger btn-sm delete-btn" data-id="${user._id}">Delete</button>
    <button class="btn btn-primary btn-sm edit-btn" data-id="${user._id}">Edit</button>
  `;
  newItem.style.boxShadow='10px 10px 10px rgb(248, 245, 248)';
  items.appendChild(newItem);
}

function showDetails(e) {
  e.preventDefault();
  obj = {
    personName: nameInput.value,
    personEmail: emailInput.value,
    personNumber: phoneno.value
  };
  
  if (editUserId) {
    axios.put(`https://crudcrud.com/api/d362839f9edb4d34b3b64b2e1d3e6175/appointmentData/${editUserId}`, obj)
      .then((response) => {
        const updatedUser = response.data;
        const updatedItem = items.querySelector(`[data-id="${updatedUser._id}"]`).parentNode;
        updatedItem.innerHTML = `
          <span>Name: ${updatedUser.personName}</span>
          <span>Email: ${updatedUser.personEmail}</span>
          <span>Phone: ${updatedUser.personNumber}</span>
          <button class="btn btn-danger btn-sm delete-btn" data-id="${updatedUser._id}">Delete</button>
          <button class="btn btn-primary btn-sm edit-btn" data-id="${updatedUser._id}">Edit</button>
        `;
        updatedItem.querySelector('.delete-btn').addEventListener('click', deleteUser);
      })
      .catch((error) => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
        console.log(error);
      })
      .finally(() => {
        editUserId = '';
        form.reset();
        btn.innerHTML = 'Add User';
      });
  } else {
    axios.post("https://crudcrud.com/api/d362839f9edb4d34b3b64b2e1d3e6175/appointmentData", obj)
      .then((response) => {
        addUserToDom(response.data);
        console.log(response);
      })
      .catch((error) => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
        console.log(error);
      })
      .finally(() => {
        form.reset();
      });
  }
}

function deleteUser(e) {
  const id = e.target.dataset.id;
  axios.delete(`https://crudcrud.com/api/d362839f9edb4d34b3b64b2e1d3e6175/appointmentData/${id}`)
    .then((response) => {
      e.target.parentElement.remove();
    })
    .catch((error) => {
      document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
      console.log(error);
    });
}

function handleItemActions(e) {
  const editBtn = e.target.closest('.edit-btn');
  const deleteBtn = e.target.closest('.delete-btn');
  
  if (editBtn) {
  const item = editBtn.parentNode;
  const name = item.querySelector('span:nth-child(1)').textContent.split(':')[1].trim();
  const email = item.querySelector('span:nth-child(2)').textContent.split(':')[1].trim();
  const phone = item.querySelector('span:nth-child(3)').textContent.split(':')[1].trim();
  nameInput.value = name;
  emailInput.value = email;
  phoneno.value = phone;

  editUserId = editBtn.dataset.id;
}

if (deleteBtn) {
const id = deleteBtn.dataset.id;
axios.delete('https://crudcrud.com/api/d362839f9edb4d34b3b64b2e1d3e6175/appointmentData/${id}')
.then((response) => {
deleteBtn.parentNode.remove();
})
.catch((error) => {
document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
console.log(error);
})
}
}
function getUsersFromApi() {
    axios.get("https://crudcrud.com/api/d362839f9edb4d34b3b64b2e1d3e6175/appointmentData")
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








