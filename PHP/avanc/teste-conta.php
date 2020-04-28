<?php

use Alura\Banco\Modelo\Conta\{ContaPoupanca, ContaCorrente, Titular};
use Alura\Banco\Modelo\{CPF,Endereco};

require_once 'autoload.php';

$conta = new ContaCorrente (
    new Titular (
        new CPF ('123.456.789-10'), 'Thiago',
            new Endereco ('cidade123', 'Bairro 123', 'rua joaquina', '55' )
    )
);


$conta->deposita('500');
$conta->saca('100');

echo $conta->recuperaSaldo() .PHP_EOL;
