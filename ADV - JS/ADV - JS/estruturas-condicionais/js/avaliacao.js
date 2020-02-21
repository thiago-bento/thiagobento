 function mostraSituacao (){
    
    // pega os dados digitados no imput relacionados ao ID
    nome = document.getElementById ("nome").value;
    media = parseFloat (document.getElementById("media").value);
    
    // pega os dados do ID de saida
    outNome = document.getElementById("nome_aluno");
    outSituacao = document.getElementById("situacao");


    if (media >=7 && media <=10){
        outSituacao.innerHTML = "Aprovado";
        outSituacao.className = "aprovado";

    }else if (media >=5 && media <=6){
        outSituacao.innerHTML = "Prova Final";
        outSituacao.className = "prova_final";

    }else if (media == 4 ){
        outSituacao.innerHTML = "Recuperação";
        outSituacao.className = "recuperacao";

    }else if ( media >= 11 ){
        outSituacao.innerHTML = "O valor da média tem que ser até 10";

    }else{
        outSituacao.innerHTML = "Reprovado";
        outSituacao.className = "reprovado";
    }
    // pega a variavel de saida e atribui o valor digitado na entrada.
  outNome.innerHTML = nome;

}