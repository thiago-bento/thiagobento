<?php


// Exibir os elementos de um array que não estao duplicados.

function noRepeat($a1){

    $naoRepetidos = array_count_values($a1);

    foreach ($naoRepetidos as $key => $value) {
        if($value == 1){
            echo "Os valores não repetidos: $key".PHP_EOL;
        }
    }
}

noRepeat([6,9,6,3,9,5,4,5,78]);

//A logica é contar todos os elementos do array verificar os values iguais depois exibir a chave do valor