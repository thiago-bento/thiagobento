<?php

echo "Chaves Personalizadas ".PHP_EOL;

$arrayPersona=  array ( 1=>"A", 3=>"B", 5=>"F");

//inclusão de nova chave
$arrayPersona[]='G';

echo "Array com a inclusão da chave G ".PHP_EOL;
print_r ($arrayPersona);

//exclindop a chave "A"
unset($arrayPersona[3]);


echo "Array com a exclusao da chave 'A' ".PHP_EOL;
print_r ($arrayPersona);