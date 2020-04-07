function validarNome(){
    var inputNome = document.getElementById("nome");
    var msgNome = document.getElementById("msg_nome");

    msgNome.innerHTML= "";

    if ( inputNome.value.trim().length ==0){
        msgNome.innerHTML = "<br/> <div class='info'> O nome não pode ser nulo</div>";
        return false;
    }else{
            return true;
        }
}

function validarData(){
    var inputData = document.getElementById("data_nasc"); //variavel do id data_nasc
    var msgData = document.getElementById("msg_data_nasc"); //variavel do id msg_data_nasc

    regData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/; // variavel para o padrao da data
    
    msgData.innerHTML = ""; // apaga o valor do msgData de houver
    
    if( inputData.value.trim().length == 0){ //verificar se o valor do inputdata tem algo digitado
    
        msgData.innerHTML = "<br/> <div class='info'> A data não pode ser nula</div>";
    
        return false;
    
    }else if (!regData.test(inputData.value)){ // se o padrão for falso... faça

        msgData.innerHTML= "<br/> <div class='info'>Formato correto é DD/MM/AAAA></div>";
        
        return false;

    }
        return true;
}

function validarEmail(){
 var inputEmail = document.getElementById("email");
 var msgEmail = document.getElementById("msg_email");
 var regEmail = /^([a-z\_\.\-])+\@(([a-z0-9])+\.)+([a-z0-9]{2,4})/i;
    
    msgEmail.innerHTML= "";

    if (inputEmail.value.trim().length == 0){
        msgEmail.innerHTML= "<br/> <div class='info'>Necessário digitar um email</div>";   
        return false;
    }else if (!regEmail.test(inputEmail.value)){ //se o padrão for falso ..faça
        msgEmail.innerHTML= "<br/> <div class='info'> email fora do padrão permitido</div>";   
        return false;
    }else{
        return true;
    }
}

function validarEnd(){

    var inputEndereco = document.getElementById("endereco");
    var msgEndereco = document.getElementById("msg_endereco");

    msgEndereco.innerHTML = "";

    if(inputEndereco.value.trim().length == 0){
        msgEndereco.innerHTML= "<br/> <div class='info'> Endereço não pode ser vazio</div>";    
        return false;
    }return true;

}

function validarCep(){
    var inputCep = document.getElementById("cep");
    var msgCep = document.getElementById("msg_cep");

    msgCep.innerHTML="";

    regCep = /^[0-9]{5}\-[0-9]{3}/;

    if ( inputCep.value.trim().length == 0){
        msgCep.innerHTML= "<br/> <div class='info'> Endereço não pode ser vazio</div>";  
        return false;
        
    } else if (!regCep.test(inputCep.value)){

        msgCep.innerHTML = "<br/> <div class='info'>  Cep fora do padrão 00000-000</div>";  
            
            return false;  
    }   else true;  
}

function validarCidade(){
    var inputCidade = document.getElementById("cidade");
    var msgCidade = document.getElementById("msg_cidade");

    msgCidade.innerHTML = "";

    if ( inputCidade.value.trim().length == 0){
        msgCidade.innerHTML= "<br/> <div class='info'> Cidade não pode ser vazia</div>";  
        
        return false;

    }else{
        return true;
    }
}

function validarUF(){
    var inputUf = document.getElementById ("uf");
    var msgUf = document.getElementById ("msg_uf");
    
    msgUf.innerHTML = "";

    regUf = /^[A-Z]{2}/;

    if ( inputUf.value.trim().length == 0){
        msgUf.innerHTML= "<br/> <div class='info'>Estado não pode ser vazio</div>";  
        return false;
    }else if (!regUf.test(inputUf.value)){
        msgUf.innerHTML= "<br/> <div class='info'>Estado fora do padarão... EX: RJ </div>";  
        return false;
    }
        return true;
}

function validaDados(){

    var campoNome = validarNome();
    var campoData = validarData();
    var campoEmail = validarEmail();
    var campoEnd = validarEnd();
    var campoCep = validarCep();
    var campoCidade = validarCidade();
    var campoUf = validarUF();
    
    if (campoNome && campoData && campoEmail && campoEnd && campoCep && campoCidade && campoUf){
        console.log("Passou");
        alert("Campos validadeos!!!");
     }
}