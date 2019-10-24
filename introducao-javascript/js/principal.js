
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
            validaPeso = false;
        } 
    
        if (tdaltura >= 3.00 || tdaltura < 1.00) {
    
            altura.textContent = "altura incorreta";
            validaAltura = false;
        }
    
        if (validaAltura && validaPeso) {
            tdimc.textContent = imc.toFixed(2   );
            
            } else {
            tdimc.textContent = "Altura e/ou peso inválidos!"
        }
    }

for (var i=0 ; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    calculaImc();
}
   