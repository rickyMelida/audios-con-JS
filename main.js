
document.getElementById('btn').addEventListener('click', iniciar, false);
document.getElementById('btn1').addEventListener('click', pause, false);

var enReproduccion = new Audio();

enReproduccion.addEventListener('ended', siguiente, false);

enReproduccion.src = './canciones/Santiago_Benavides2.mp3';

function iniciar() {
  enReproduccion.play();
}

function pause() {
  enReproduccion.pause();
}

function siguiente() {
  enReproduccion.src = './canciones/Santiago_Benavides1.mp3';
  iniciar();
}
