var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var list=document.querySelectorAll('li');
for(let i=0;i<list.length;i++){
    //create edit button element
    var editBtn=document.createElement('button');
    //Add classes to edit button
    editBtn.className = 'btn btn-success btn-sm float-right delete';
    //Append text node
    editBtn.appendChild(document.createTextNode('..'));
    //Append button to li
    list[i].appendChild(editBtn);
    // Append li to list
    itemList.appendChild(list[i]);
    }
    
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Add item
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    //create edit button element
    var editBtn=document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    //Add classes to edit button
    editBtn.className = 'btn btn-success btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //Append text node
    editBtn.appendChild(document.createTextNode('..'));
  
    // Append button to li
    li.appendChild(deleteBtn);
    
    //Append button to li
    li.appendChild(editBtn);
  
    // Append li to list
    itemList.appendChild(li);
  }
  
  // Remove item
  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }