
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


/*
(calcula imc.js)


function calculaImc(peso,altura){
var imc = 0;

imc = peso / (altura*altura);

return imc.tofixed(2);

}


depois adicionar a variavel no validação do pesovalido e altura valida = a função (peso,altura)


no ((adicioina paciente))
ao pegar o valor do imc atribuir a funçãoIMC(peso, altura);
incluir um td com o valor do retorno da função imc.


------------------------//-----------------------------------

criar uma função para pegar as informações que o form necessita


function obterdadosPaciente (form){

var paciente2 = {
nome: form.nome.value,
peso: form.peso.value,
altura: form.altura.value,
gordura: form.gordura.value,
imc: calculaImc(form.peso.value, form.altura.value)
}
return paciente2
}


depois abaixo da variavel do form.
- var paciente2= nomedafuncao(form)




