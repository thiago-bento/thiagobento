
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
   
titulo.addEventListener("click", function (){ //quando clicar no titulo exibira a msg.
    console.log ("Titulo da página");
}); 

var botaoAdicionar = document.querySelector ("#adicionar-paciente");  // cria uma variavel para o ID do botao, para fazer algo.

botaoAdicionar.addEventListener("click", function(event){ //atribui a variavel do botáo a funcao adicionar uma lista de eventos e cria uma funcao anonima dentro qnd clicar.

        event.preventDefault(); //não deixa a tela atualizar quando clicar no botao.

        var botaoForm = document.querySelector("#btAdicionar");  //cria uma variavel para o ID do <Form> para poder ler as informacoes que ha dentro dele.

        var inNome = botaoForm.nome.value; //atribiu o valor digitado à varivel do nome do id dentro do form.
        var inpeso = botaoForm.peso.value;
        var inAltura = botaoForm.altura.value;
        var inGordura = botaoForm.gordura.value;
        
        var trNova = document.createElement("tr");  //atribiu uma varivel a uma nova <TR>

        var tdNome = document.createElement("td"); //atribiu uma varivel a uma nova <TD>
        var tdPeso = document.createElement("td");
        var tdAltura = document.createElement("td");
        var tdGordura = document.createElement("td");
        var tdImc= document.createElement("td");

        tdNome.textContent = inNome; // com a variavel para criar uma TD, pega o valor da varivel do input.
        tdPeso.textContent = inpeso;
        tdAltura.textContent = inAltura;
        tdGordura.textContent = inGordura;
         
       trNova.appendChild(tdNome); //Cria o valor da TD dentro da TR
       trNova.appendChild(tdPeso);
       trNova.appendChild(tdAltura); 
       trNova.appendChild(tdGordura);
       
       var tbodyNovo = document.querySelector ("#tabela-pacientes");

       tbodyNovo.appendChild(trNova);

       
});



