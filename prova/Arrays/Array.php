<?php

$n=6;
//Arrays 
$arr = array (2,3,5,6,7);

$arr[]=$n;                               //inclui um elemento dentro de um array no final/

array_push($arr,22);                     //inclui um elemento dentro de um array no final/

unset($arrayPersona[1]);                 //REMOVE um elemento dentro de um arrayno na posição indicada/

array_pop($arr);                        //REMOVE um elemento dentro de um array no final/

array_unshift($arr, 33);                //inclui um elemento dentro de um array no Inicio/

array_shift($arr);                      //Exclui um elemento dentro de um array no Inicio/

sort($arr);                             //Oganiza os elementos em ondem crescente ignorando os indices 0 1 2 3
asort($arr);                           //organiza os elementos em ordem crescente  JUNTO com os índices/ ou seja, os indices ficaram embaralhados.  

rsort($arr);                          //Oganiza os elementos em ondem DECRESCENTE ignorando os indices 0 1 2 3
arsort($arr);                         //organiza os elementos em ordem DECESCENTE   JUNTO com os índices/ ou seja, os indices ficaram embaralhados.  

ksort($arr);                            //organiza os índices em ordem crescente ignorando os elementeos.
krsort($arr);                           //organiza os índices em ordem Decrescente ignorando os elementeos.





echo  "ARRAY's".PHP_EOL;
echo "O array vetor possui ".count($arr)." posições".PHP_EOL;

foreach ($arr as  $value) {          //para cada elemento do $arr tratado como $valuer...faça
    echo "valor das chaves é $value".PHP_EOL;
}


