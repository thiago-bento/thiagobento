var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener("click", function(){

console.log("Buscando pacientes.");

var xrh = new XMLHttpRequest();

xrh.open ("GET", "http://api-pacientes.herokuapp.com/pacientes");


xrh.addEventListener("load", function() {

    var erroAjax = document.querySelector("#erro-ajax");
        if (xrh.status == 200) {
            erroAjax.classList.add("invisivel");


var resposta = xrh.responseText;
console.log(resposta);
console.log(typeof resposta);


var pacientes = JSON.parse(resposta);

    pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
        
    });
}else{

    console.log (xrh.status);
    console.log (xrh.responseText);
    erroAjax.classList.remove("invisivel");
}
});

xrh.send();

})