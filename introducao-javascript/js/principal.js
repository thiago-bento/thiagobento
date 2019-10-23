
var titulo = document.querySelector (".container"); //Atribui uma variavel a uma seleção de tag

titulo.textContent = "Nutricionista"; //Seleciona a variavel e altera o conteudo.

/*

function calculaImc () {
var paciente = document.querySelector ("#primeiro-paciente"); //seleciona o ID da classe toda
var tdpeso = paciente.querySelector (".info-peso"); //seleciona o peso do ID acima
var peso = tdpeso.textContent; //seleciona somente o valor do tpeso

var taltura = paciente.querySelector (".info-altura"); // seleciona a altura do ID acima
var altura = taltura.textContent; //seleciona somente o valor da altura


var imc = peso / (altura * altura);
 
console.log (imc);
}
 
console.log (calculaImc());
*/


var paciente = document.querySelector ("#primeiro-paciente"); //seleciona o ID da classe toda

var peso = paciente.querySelector (".info-peso");
var tdpeso = peso.textContent;

var altura = paciente.querySelector (".info-altura");
var tdaltura = altura.textContent;

var imc = tdpeso / (tdaltura * tdaltura);
var tdimc = paciente.querySelector(".info-imc");

var validaAltura = true;
var validaPeso = true;


if (tdpeso > 200 || tdpeso < 20 ) {

    peso.textContent = "Peso incorreto";
    validaPeso = false;
} 

if (tdaltura > 3.00 || tdaltura < 1.00) {

    altura.textContent = "altura incorreta";
    validaAltura = false;
}

if (validaAltura && validaPeso) {
    tdimc.textContent = imc;
    
} else {
    tdimc.textContent = "Altura e/ou peso inválidos!"
}
    console.log (tdaltura);
    console.log (altura);