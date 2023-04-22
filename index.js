var items=document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent='Hello World';
items[1].style.fontsize='bold';
//items[1].style.backgroundColor='yellow';
//items,s.style.backgroundColor='#f4f4f4';
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
}
//question
items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++){
    items[i].style.color='#00ff00';
    items[i].style.fontsize='bold';
}