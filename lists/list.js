
window.console.log(window);
console.log(document.body);
let runagain=true;

var isage=(age)=>{
    return age<=18;
}
while(runagain){
    let age=prompt('enter your age');
    age=Number.parseInt(age);
    if(age<0){
        console.error('please enter a valid age');
        break;
    }
if(isage(age)){
   alert('you cannot drive');
}
else alert('you can drive');
runagain=confirm('Do you want to play it again?');
}