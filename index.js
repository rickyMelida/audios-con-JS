
function accionPlay(){
   var reproducir = new Audio();
   reproducir.src= "https://www.sshhtt.com/images/sampledata/ambient/Amaneceramanecer%20en%20el%20campo%20con%20aves34.mp3";
   reproducir.play();
   alert('sale');
}

function iniciar(){
   var button= document.querySelector("#btn");
   button.addEventListener("click", accionPlay, false);
}
window.addEventListener("load", iniciar, false);
