<?php

namespace Alura\Banco\Modelo;

class Funcionario extends Pessoa
{
    private $cargo;
    private $salario;

    public function __construct(string $nome, CPF $cpf, string $cargo, float $salario)
    {
        parent::__construct($nome, $cpf);
        $this->cargo = $cargo;
        $this->salario = $salario;
    }

     public function recuperaCargo(): string
    {
        return $this->cargo;
    }

    public function recuperaSalario(): string
    {
        return $this->salario;
    }

    public function calculaBonificacao(): string
    {
        return $this->salario * 0.1;
    }



}