
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
var peso = paciente.querySelector (".info-peso").textContent;
var altura = paciente.querySelector (".info-altura").textContent;
var imc = peso / (altura * altura);
var tdimc = paciente.querySelector(".info-imc");

var validaAltura = true;
var validaPeso = true;

function validaDados () {
if (peso > 200 || peso < 20 ) {

    tdimc.textContent = "Peso incorreto";
    validaPeso = false;
} 

if (altura > 3.00 || altura < 1.00) {

    tdimc.textContent = "altura incorreta";
    validaAltura = false;
}

if (validaAltura && validaPeso) {
    tdimc.textContent = imc;
    }
}


validaDados ();