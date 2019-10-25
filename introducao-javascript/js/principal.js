
var titulo = document.querySelector (".container"); //Atribui uma variavel a uma seleção de tag

titulo.textContent = "Nutricionista"; //Seleciona a variavel e altera o conteudo.

var pacientes = document.querySelectorAll (".paciente"); //seleciona o ID da classe toda

function calculaImc(){
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
            paciente.style.backgroundColor = "lightcoral";
            
            validaPeso = false;
        } 
    
        if (tdaltura >= 3.00 || tdaltura < 1.00) {
    
            altura.textContent = "altura incorreta"
            paciente.classList.add ("paciente-invalido");
            validaAltura = false;
        }
    
        if (validaAltura && validaPeso) {
            tdimc.textContent = imc.toFixed(2);
            
            } else {
            tdimc.textContent = "Altura e/ou peso inválidos!"
        }
    }

for (var i=0 ; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    calculaImc();
}
   
titulo.addEventListener("click", function (){
    console.log ("Titulo da página");
}); 



var botaoAdicionar = document.querySelector ("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault(); //não deixa a tela atualizar.
        
        var botaoForm = document.querySelector("#btAdicionar")

        var inNome = botaoForm.nome.value;
        var inpeso = botaoForm.peso.value;
        var inAltura = botaoForm.altura.value;
        var inGordura = botaoForm.gordura.value;
        
        console.log (inNome, inpeso, inAltura, inGordura);

        var trNova = document.createElement("tr");

        var tdNome = document.createElement("td");
        var tdPeso = document.createElement("td");
        var tdAltura = document.createElement("td");
        var tdGordura = document.createElement("td");
        var tdImc = document.createElement("td");

   
       
       6 - ler o valor que foi pego nas variaveis TD e TR -> nomedavariavel.textContent = nome do TD
       
       7 - Atribuir os valores da TR nas TD (filho) - > nomedavaeriaveltr.appendChild(nomedavariavelTD)
       
       8- criar uma variavel para incluir a TR dentdo do <tbory> (tem im id de tabela-paciente) -> nomedavariavel = document.queruSelector (# nome do id do Tbody) .
       
       9- criando os filhos do Tbody - > nomedavariaveldoIDtbory.appendChild(nomevariavelTR).



