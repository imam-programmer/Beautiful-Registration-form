let firstname=document.querySelector('#firstname');
let lastname=document.querySelector('#lastname');
let email=document.querySelector('#email');
let password=document.querySelector('#password');
let submit=document.querySelector('#submit')

submit.addEventListener('click',(event)=>{
    event.preventDefault()
    if(!firstname.value){
        firstname.style.border='2px solid red'
    }else{
        firstname.style.border='none'
    }
    if(!lastname.value){
        lastname.style.border='2px solid red'
    }else{
        lastname.style.border='none'
    }
    if(!email.value){
        email.style.border='2px solid red'
    }else{
        email.style.border='none'
    }
    if(!password.value){
        password.style.border='2px solid red'
    }else{
        password.style.border='none'
    }
  if(firstname.value!=='' && lastname.value!=='' && email.value!=='' && password.value!==''){
   location.href='https://imam-programmer.github.io/dark-light-E-commerce/'
  }
   
})
