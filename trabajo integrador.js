
/*JS del resumen*/
 
function mostrarResumen(){
  var nombrereseña = document.getElementById("nombrer").value;
  var textoreseña = document.getElementById("reseñar").value;

  var nombreResumen = document.getElementById("nombre-resumen");
  var resenaResumen = document.getElementById("resena-resumen");

  nombreResumen.innerHTML = nombrereseña;
  resenaResumen.innerHTML = textoreseña;

  var sectionResena = document.getElementById("resena");
  var sectionResumen = document.getElementById("resumen");

  sectionResena.classList.remove("visible");
  sectionResena.classList.add("oculta");

  sectionResumen.classList.remove("oculta");
  sectionResumen.classList.add("visible");

}



/*JS exportación a PDF*/

function exportarPDF (){
  var element = document.getElementById('resumen');
  var opt = {
  margin:       [50,50],
  filename:     'resena.pdf',
  jsPDF:        { unit: 'mm', format: 'a4'}
};

html2pdf().set(opt).from(element).save();
}



/*JS consumo de la API externa*/

async function representanteUno(){
  const representante = await fetch("https://reqres.in/api/users/2"); //Consumo
  const datoJSON = await representante.json(); //Paso los datos a json

  
  var nombreRep = document.getElementById('nombre-representante');
  var emailRep = document.getElementById('email-representante');

  nombreRep.innerHTML = "Nombre: " + datoJSON.data.first_name + " " + datoJSON.data.last_name;
  emailRep.innerHTML = "Email: " + datoJSON.data.email;

  const avatar = document.createElement("img") //Creo el elemento imagen
  avatar.setAttribute("src", `${datoJSON.data.avatar}`)
  avatar.setAttribute("alt", "una imagen");

  var sectionAvatar = document.getElementById("representante-avatar");
  sectionAvatar.appendChild(avatar); //Agrego la imagen al div
}