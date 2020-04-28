<?php

use Alura\Banco\Modelo\Conta\Conta.php;
use AluraBanco\Modelo\Conta\Titular.php;
use Alura\Banco\Modelo\CPF.php;

require_once 'autoload.php';

$conta = new Conta (
    new Titular (
        new CPF ('123.456.789-10'), 'Thiago',
            new Endereco ('cidade123', 'Bairro 123', 'rua joaquina', '55' )

        )
    )
);


$conta->deposita('500');
$conta->saque('100');

echo $conta->recuperaSaldo();
