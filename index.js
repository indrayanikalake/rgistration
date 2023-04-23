
//q1
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';


var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden';

//q2
var odd=document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
    
}
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color="green";
