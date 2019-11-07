
var botaoAdicionar = document.querySelector ("#adicionar-paciente");  // cria uma variavel para o ID do botao, para fazer algo.
    botaoAdicionar.addEventListener("click", function(event){ //atribui a variavel do botáo a funcao adicionar uma lista de eventos e cria uma funcao anonima dentro qnd clicar.
        event.preventDefault(); //não deixa a tela atualizar quando clicar no botao.

        var form = document.querySelector("#form-adiciona");  //cria uma variavel para o ID do <Form> para poder ler as informacoes que ha dentro dele.
      
        var paciente = obtemPacienteDoFormulario(form); //Extraindo informações do objeto do paciente do FORM.
        var pacienteTr = montaTr(paciente); //Monta a TR com base no Paciente
        
        var erro = validaPaciente(paciente);

        if (erro.length >0) {
            var mensagemErro = document.querySelector("#mensagem-erro");
            mensagemErro.textContent = erro;
            form.reset();
            return;
        }

        var tabela = document.querySelector("#tabela-pacientes"); //  le toda a tabela do TBODY

    tabela.appendChild(pacienteTr); // Cria uma TR a partir da tabela

    form.reset();

});    
   
    function obtemPacienteDoFormulario(form) {

        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente;
    }
    
    function montaTr(paciente){
        var pacienteTr = document.createElement("tr");  //Cria uma TR
        pacienteTr.classList.add("paciente");
           
       pacienteTr.appendChild(montaTd (paciente.nome, "info-nome")); //Cria o valor da TD dentro da TR
       pacienteTr.appendChild(montaTd (paciente.peso, "info-peso"));
       pacienteTr.appendChild(montaTd (paciente.altura, "info-altura"));
       pacienteTr.appendChild(montaTd (paciente.gordura, "info-gordura"));
       pacienteTr.appendChild(montaTd (paciente.imc, "info-imc"));
       
       
        return pacienteTr;
    }

    function montaTd (dado, classe){

        var td = document.createElement("td");
        td.textContent =  dado;
        td.classList.add(classe);
        return td;
    }

    function validaPaciente(paciente) {
        if (pesoCorreto(paciente.peso)) {
            return "";
        } else {
            return "Peso Inválido, o máximo é de 300 kg e minino 1gk";
        }
    }