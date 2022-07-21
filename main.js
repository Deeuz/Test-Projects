const subscribeButton = document.querySelector('button');
const closeButton = document.querySelector('#close');
const box = document.querySelector('.box');
const form = document.querySelector('form');

subscribeButton.addEventListener('click',openBox);
function openBox (){
  box.style.display = 'grid';
}
// close box//
closeButton.addEventListener('click',closebox);
function closebox (){
    box.classList.add('close-box-anim');
    setTimeout(()=>{
        box.style.display = 'none';
        window.location.reload();
    }, 1000)

}

form.addEventListener('submit', submitForm);

function submitForm(){
   const card = document.querySelector('.card');
   card.innerHTML ="<h2>Thank you for subscribing!</h2>";
   setTimeout(()=>{
    closebox();
   },3000);

}
