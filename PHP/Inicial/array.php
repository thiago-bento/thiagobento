<?php

$listaIdade = [2,3,55,78,98,100];



for ($i=0; $i<count($listaIdade); $i++) {

    echo $listaIdade[$i];

}


$conta1 = [

    'titular' => 'Thiago',
    'saldo' => 1000,

];

$conta2 = [

    'titular'=> 'jorge',
    'saldo' => 5600,

];

$conta3 = [


    'titular'=> 'maria',
    'saldo'=> '9000',

];


$contas = [$conta1, $conta2, $conta3];


for ($i=0; $i < count($contas) ; $i++) { 
    echo $contas[$i]['titular'].PHP_EOL;
}


