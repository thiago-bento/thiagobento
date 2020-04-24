<?php

require_once 'Conta.php';
require_once 'Titular.php';
require_once 'Cpf.php';


$thiago = new Titular('Thiado', '100.568.707-28');
$primeiraConta = new Conta ($thiago);

$jossao = new Titular('Jossao', '100.568.707-20');
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