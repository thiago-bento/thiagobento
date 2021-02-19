<?php


echo "Calculo de IMC" . PHP_EOL;




$peso = 82;
$altura = 1.76;

$imc= $peso/($altura*$altura);
    
    if ($imc <17){
        $resultado= 'abaixo';
    
    } else if ($imc >18 && $imc <30){
        $resultado='Ideal';
    }else{
        $resultado='acima';
    }
    

    echo "Seu imc é ".(round($imc,2))." voce está com o peso $resultado do recomendado. ".PHP_EOL;    

    echo strlen("hello world");


  