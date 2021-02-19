<?php

echo "Calculadora";

function taboada($n){



        for ($i = 1; $i <=10; $i++ ){
            
            $conta = $n * $i; 

              echo "$i X $n = $conta ".PHP_EOL;
              
        }
       
        
    }
 echo taboada(55);

/*
 rsrsrsr
 */
echo "Calculo de IMC" . PHP_EOL;

$peso = 40;
$altura = 1.76;
$result = 0;
$imc = $peso/($altura*$altura);
const FATORIMC = 17;


echo "Seu imc é : $imc, voce está com o peso ";

if ($imc <FATORIMC){
    echo 'abaixo';

} else if ($imc >18 && $imc <30){
    echo 'correto';
}else{
    echo 'acima';
}

echo " do recomendado." .PHP_EOL;

