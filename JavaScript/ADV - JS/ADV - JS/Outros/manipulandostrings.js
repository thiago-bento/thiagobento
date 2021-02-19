function processar (){
    var  palavra = "Curso ADV Informática Avançada";

    quantidade = palavra.length; //quantidade de caracteres
    posicao = palavra.indexOf("ADV"); //posicao da palavra ADV
    novaPalavra = palavra.replace ("ADV", "de");// substitui ADV por de
    minuscula = palavra.toLowerCase();
    maiuscula = palavra.toUpperCase();
    apagar = palavra.substr(0,22); //excliu Avancada

    document.getElementById("out_quant_letras").innerHTML = quantidade;
    document.getElementById("out_posicao").innerHTML = posicao;
    document.getElementById("out_substituicao").innerHTML = novaPalavra;
    document.getElementById("out_minusculo").innerHTML = minuscula;
    document.getElementById("out_maiusculo").innerHTML = maiuscula;
    document.getElementById("out_exclusao").innerHTML = apagar;

}