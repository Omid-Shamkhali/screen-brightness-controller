let brightnessInput=document.querySelector('input');
let containerElem=document.getElementsByClassName('container')[0];

function chngeBright(event){
   let target=event.target.value;
   containerElem.style.filter='brightness('+target+'%)'
}
brightnessInput.addEventListener('input',chngeBright)