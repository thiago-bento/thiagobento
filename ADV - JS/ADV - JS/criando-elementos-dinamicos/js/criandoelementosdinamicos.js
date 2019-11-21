function apagaElementos(){

    document.getElementById("container").innerHTML="";
}

function criarElemento (){
        
    if (document.getElementById("opcao_span").checked){
        spam = document.createElement("span"); //cria uma tag span
        texto = document.createTextNode ("Isso foi criado no <span>"); //define um conteudo para ele
        spam.appendChild(texto); //cria um filho do span   
        document.getElementById("container").appendChild(spam); // adiciona o componente span dentro da div "Container"

        //escolheu um butao!
    }else if(document.getElementById ("opcao_button").checked){

        buttao = document.createElement ("button");
        texto = document.createTextNode ("Isto é um botão!");
        buttao.appendChild (texto);
        document.getElementById ("container").appendChild(buttao);
    
        //escolheu input

    }else if (document.getElementById("opcao_input").checked){
        input = document.createElement("input");
        input.setAttribute ("type","text"); //define o atributo 
        document.getElementById ("container").appendChild(input);
    }
    
    br = document.createElement ("br");
    document.getElementById("container").appendChild(br);
    

}