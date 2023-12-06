let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



let cangrejo = document.querySelector('.cangrejo')
let aparato = document.querySelector('.aparato')
let dony = document.querySelector('.dony')

cangrejo.addEventListener('click', Movimiento1Dony)

function Movimiento1Dony(){
  aparato.classList.remove('aparato')
  aparato.classList.add('aparato_visible')
  dony.classList.add('DonyMovimiento')
}


let dony2 = document.querySelector('.dony')
let Dialogo1 = document.querySelector('.dialogo1')

dony2.addEventListener('click', ApareceDialogo1)

function ApareceDialogo1(){
  Dialogo1.classList.remove('oculto')
}


let Buba = document.querySelector('.cangrejo_escena2')
let Dialogo2 = document.querySelector('.dialogo2')

Buba.addEventListener('click', ApareceDialogo2)

function ApareceDialogo2(){
  Dialogo2.classList.remove('oculto2')
}

let dony3 = document.querySelector('.dony_escena2')
let Dialogo3 = document.querySelector('.dialogo3')
let oculto2 = document.querySelector('.oculto2')

dony3.addEventListener('click', ApareceDialogo3)

function ApareceDialogo3(){
  Dialogo3.classList.remove('oculto3')
  oculto2.classList.add('oculto2')
}

let buba2 = document.querySelector('.buba_escena2')
let Dialogo4 = document.querySelector('.dialogo4')
let oculto3 = document.querySelector('.oculto3')

buba2.addEventListener('click', ApareceDialogo4)

function ApareceDialogo4(){
  Dialogo4.classList.remove('oculto4')
  oculto3.classList.add('oculto3')
}

let choza = document.querySelector('.choza_escena2')
let Dialogo5 = document.querySelector('.dialogo5')
let oculto4 = document.querySelector('.oculto4')
let FlechaOculta = document.querySelector('.flecha_oculta')

choza.addEventListener('click', ApareceDialogo5)

function ApareceDialogo5(){
  FlechaOculta.classList.remove('flecha_oculta')
  Dialogo5.classList.remove('oculto5')
  oculto4.classList.add('oculto4')
}


let FlechaVerde = document.querySelector('.flecha_verde')
let Buba3 = document.querySelector('.buba_escena2')
let dony4 = document.querySelector('.dony_escena2')

FlechaVerde.addEventListener('click', MovimientoBuba)

function MovimientoBuba(){
  buba2.classList.add('AnimacionBuba')
  dony4.classList.add('AnimacionDony')
  FlechaVerde.classList.remove('flecha_verde')
  FlechaVerde.classList.add('flecha_oculta')
}


