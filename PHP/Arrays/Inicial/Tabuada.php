<?php

echo "Calculadora";

$numero = 5;

    if ($numero >=0 && $numero<=10){

        for ($i = 0; $i <=10; $i++ ){
            
            $result = $numero * $i; 

              echo "$i X $numero = $result " . PHP_EOL;

        }
        
    }else{  

        echo "Numero precisa ser menor que 10 e maior que zero </br>". PHP_EOL;
    
    }
  
 


echo "Calculo de IMC" . PHP_EOL;

$peso = 40;
$altura = 1.76;
$result = 0;
$imc = $peso/($altura*$altura);

echo "Seu imc é : $imc, voce está com o peso ";

if ($imc <17){
    echo 'abaixo';

} else if ($imc >18 && $imc <30){
    echo 'correto';
}else{
    echo 'acima';
}

echo " do recomendado." .PHP_EOL;

