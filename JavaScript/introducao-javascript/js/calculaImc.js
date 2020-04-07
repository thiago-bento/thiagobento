

var pacientes = document.querySelectorAll (".paciente"); //seleciona o ID da classe toda

for (var i=0 ; i < pacientes.length ; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector (".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector (".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var validaAltura = alturaCorreta(altura);
    function alturaCorreta(altura){
    if (altura >= 0 && altura <= 3.00){
        return true;
        }else{
        return false;
        }    
    }

    var validaPeso = pesoCorreto(peso);    
    function pesoCorreto(peso){
    if (peso >= 0 && peso <= 200 ){
            return true;
            }else{
            return false;
        }    
    }
    
    if (!validaPeso || !validaAltura) {
        tdImc.textContent = " ->Peso/Altura incorretos";
        paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add ("paciente-invalido");
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



