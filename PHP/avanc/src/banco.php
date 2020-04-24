<?php

require_once 'Conta.php';
require_once 'Titular.php';
require_once 'Cpf.php';


$vinicius = new Titular(new CPF('123.456.789-10'), 'Vinicius Dias');
$primeiraConta = new Conta($vinicius);

$jossao = new Titular(new CP('Jossao', '100.568.707-20');
$segundaConta = new Conta ($jossao);


$primeiraConta -> deposita (500);
$primeiraConta-> saca(300);

echo $primeiraConta->recuperaNomeTitular() . PHP_EOL;
echo $primeiraConta->recuperaCpfTitular() . PHP_EOL;
echo $primeiraConta->get_Saldo() . PHP_EOL;
echo Conta::exibeNumeroConta() . PHP_EOL;

echo $segundaConta->recuperaNomeTitular() . PHP_EOL;
echo $segundaConta->recuperaCpfTitular() . PHP_EOL;
echo $segundaConta->get_Saldo() . PHP_EOL;
echo Conta::exibeNumeroConta() . PHP_EOL;