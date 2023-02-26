const con_pwd=document.querySelector('#cnfrmpwd');
const pwd=document.querySelector('#pwd');
const output=document.querySelector('output');
const pat=pwd.value;
con_pwd.setAttribute("pattern",pat);


con_pwd.addEventListener('input',()=> {
    if(pwd.value!=con_pwd.value){
        output.textContent="*Passwords don't match";
        
    }
    else{
        output.textContent="";
        
    }
})