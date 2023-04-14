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


document.getElementById("reseña").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita que el formulario se envíe

  // Obtén los valores del formulario
  var nombrereseña = document.getElementById("nombrer").value;
  var textoreseña = document.getElementById("reseñar").value;

  // Crea un nuevo objeto jsPDF
  var pdf = new jsPDF();

  // Agrega el contenido al PDF
  pdf.text(20, 20, "Nombre del cliente: " + nombrereseña);
  pdf.text(20, 50, "Reseña del cliente: " + textoreseña);

  // Guarda el PDF como un archivo
  pdf.save("reseña de clientes.pdf");
});