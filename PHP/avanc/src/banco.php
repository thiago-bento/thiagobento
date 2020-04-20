<?php

require_once 'Conta.php';


$primeiraConta = new Conta('Thiado', '100.568.707-28');
$segundaConta = new Conta('Thiado', '100.568.707-28');

$primeiraConta -> deposita (500);
$primeiraConta-> saca(300);

echo $primeiraConta->exibeCpfTitular() . PHP_EOL;
echo $primeiraConta->exibeNomeTitular() . PHP_EOL;
echo $primeiraConta->exibeSaldo() . PHP_EOL;
echo Conta::exibeNumeroConta() . PHP_EOL;