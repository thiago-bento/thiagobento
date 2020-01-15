var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener("click", function(){

console.log("Buscando pacientes.");

var xrh = new XMLHttpRequest();

xrh.open ("GET", "http://api-pacientes.herokuapp.com/pacientes");


xrh.addEventListener("load", function() {

    console.log(xrh.responseText);
});

xrh.send();

})