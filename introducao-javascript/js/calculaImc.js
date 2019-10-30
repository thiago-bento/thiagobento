

var pacientes = document.querySelectorAll (".paciente"); //seleciona o ID da classe toda

for (var i=0 ; i < pacientes.length ; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector (".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector (".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var validaAltura = true;
    var validaPeso = true;    
    
        if (peso > 200 || peso < 20 ) {
            validaPeso = false;
            tdPeso.textContent = peso + " ->Peso incorreto";
            paciente.style.backgroundColor = "lightcoral";
            paciente.classList.add ("paciente-invalido");
        } 
    
        if (altura >= 3.00 || altura < 1.00) {
            validaAltura = false;
            tdAltura.textContent = altura + " ->altura incorreta";
            paciente.classList.add ("paciente-invalido");
        }
        
        if (validaAltura == false && validaPeso == false) {
            tdImc.textContent = "Altura e/ou peso inválidos!";
            console.log (validaAltura,validaPeso);
        }
    
        if (validaAltura && validaPeso) {
            var imc = calculaImc(peso,altura);
            tdImc.textContent = imc;
            
        } 
}
   

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}



