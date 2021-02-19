<?php

echo "Arrays Associativos.";

$array1 = array( "nome"=> "Ana",
                       "idade"=> 42,
                        "peso"=> 78.8);

echo "Exibindo array criado";
print_r($array1);

//inclusão de um nova chave
$array1["fuma"] =true;


echo "Exibindo array com uma chave a mais associada";
print_r($array1);


foreach ($array1 as $posicaoArray => $value) {                      //para cada elemento do array1 tem a posicaoarray com o Value
    echo "O campo $posicaoArray possui o valor $value".PHP_EOL;
}