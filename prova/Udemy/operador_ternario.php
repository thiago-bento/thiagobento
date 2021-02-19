<?php

function maior($n){

    $resultado = $n >=18 ? 'Maior de iddade' : 'Menor de idade';

    return $resultado;

}

function aposenta($n){

    $resultado = $n >=18 ? ($n >= 65 ? 'Aposentado' : 'Trabalha') : 'menor de iddade';

    return $resultado;
}

echo aposenta(17);