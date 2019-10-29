
var botaoAdicionar = document.querySelector ("#adicionar-paciente");  // cria uma variavel para o ID do botao, para fazer algo.

botaoAdicionar.addEventListener("click", function(event){ //atribui a variavel do botáo a funcao adicionar uma lista de eventos e cria uma funcao anonima dentro qnd clicar.

        event.preventDefault(); //não deixa a tela atualizar quando clicar no botao.

        var form = document.querySelector("#form-adiciona");  //cria uma variavel para o ID do <Form> para poder ler as informacoes que ha dentro dele.
       
        var nome = form.nome.value; //atribiu o valor digitado à varivel do nome do id dentro do form.
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;
        
        var pacienteTr = document.createElement("tr");  //atribiu uma varivel a uma nova <TR>

        var nomeTd = document.createElement("td");//atribiu uma varivel a uma nova <TD>
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");
        
        nomeTd.textContent = nome;// com a variavel para criar uma TD, pega o valor da varivel do input.
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;
        imcTd.textContent = calculaImc(peso,altura);
        
       pacienteTr.appendChild(nomeTd); //Cria o valor da TD dentro da TR
       pacienteTr.appendChild(pesoTd);
       pacienteTr.appendChild(alturaTd);
       pacienteTr.appendChild(gorduraTd);
       pacienteTr.appendChild(imcTd);
       
       var tabela = document.querySelector("#tabela-pacientes");

       tabela.appendChild(pacienteTr);
});

function calculaImc(peso, altura){
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }