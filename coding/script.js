// DATA DO INÍCIO DO NAMORO — ajuste aqui
const dataInicio = new Date("2019-09-25T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const anos = Math.floor(dias / 365);

  document.getElementById("anos").textContent = anos;
  document.getElementById("dias").textContent = dias % 365;
  document.getElementById("horas").textContent = horas % 24;
  document.getElementById("minutos").textContent = minutos % 60;
  document.getElementById("segundos").textContent = segundos % 60;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// CARROSSEL DE FOTOS
const fotos = ["img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg"]; // troque pelos seus arquivos
let atual = 0;

function trocarFoto() {
  atual = (atual + 1) % fotos.length;
  document.getElementById("foto").src = fotos[atual];
}

setInterval(trocarFoto, 4000);
