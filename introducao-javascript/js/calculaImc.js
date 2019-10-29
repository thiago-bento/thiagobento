

var pacientes = document.querySelectorAll (".paciente"); //seleciona o ID da classe toda

for (var i=0 ; i < pacientes.length ; i++){
    var paciente = pacientes[i];

    var peso = paciente.querySelector (".info-peso");
    var tdpeso = peso.textContent;
    
    var altura = paciente.querySelector (".info-altura");
    var tdaltura = altura.textContent;
    
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
            var imc = tdpeso / (tdaltura * tdaltura);
            tdimc.textContent = imc.toFixed(2);
            
            } else {
            tdimc.textContent = "Altura e/ou peso inválidos!"
        }
}
   




