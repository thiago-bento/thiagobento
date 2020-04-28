<?php

require_once 'autoload.php';

use Alura\Banco\Modelo\{Funcionario,CPF};
use Alura\Banco\Service\ControladorDeBonificacoes;

$umFuncionario = new Funcionario ('Thiago', 
new CPF ('100.658.707-25'), 'Desenv', 
1100
);


$umaFuncionaria = new Funcionario ('BIA', 
new CPF ('100.658.707-22'), 'Geren', 
3100
);

$controlador = new ControladorDeBonificacoes();
$controlador->adicionaBonificacaoDe($umFuncionario);
$controlador->adicionaBonificacaoDe($umaFuncionaria);

echo $controlador->recuperaTotal();