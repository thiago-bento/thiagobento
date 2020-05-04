<?php

use Alura\Banco\Modelo\Autenticavel;
use Alura\Banco\Modelo\Funcionario\Diretor;
use Alura\Banco\Modelo\Funcionario\Funcionario;
use Alura\Banco\Modelo\CPF;
use Alura\Banco\Service\Autenticador;

require_once "autoload.php";

$autenticador = new Autenticador();

$umDiretor = new Diretor('Joao da silva', 
             new CPF ('100.568.707-28'),
             10.000
);





$autenticador->tentaLogin ($umDiretor, '4321');