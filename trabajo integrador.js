var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  wrap: false
})

function mostrar(card) {
    document.getElementById(boton).style.display = 'block';
    document.getElementById(card).style.display = 'none';
    btn.style.display = 'none';
}