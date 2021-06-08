let panels = document.querySelectorAll('.infopanel');
let welcome = document.querySelector('.welcome')
let burak = document.querySelector('.burak');
let button = document.querySelector('#swapbutton');
let buttons = ['Click for info','Go back']




panels[1].classList.add('hidden');

//console.log(panels[0].classList);

function showHide() {
  if(panels[1].classList.contains('hidden')) {
  panels[0].classList.add('hidden'); 
  panels[1].classList.remove('hidden'); 
  burak.classList.remove('hidden');
  welcome.classList.add('hidden')
  button.innerHTML = buttons[1];
}  
  else if(panels[0].classList.contains('hidden')) {
  panels[1].classList.add('hidden'); 
  panels[0].classList.remove('hidden'); 
  burak.classList.add('hidden');
  welcome.classList.remove('hidden')
  button.innerHTML = buttons[0];
}
}
button.addEventListener("click",showHide,false);