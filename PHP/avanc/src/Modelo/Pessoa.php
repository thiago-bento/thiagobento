<?php

namespace Alura\Banco\Modelo;

class Pessoa
{
    protected $nome;
    protected $cpf;

    public function __construct(string $nome, CPF $cpf)
    {
        $this->validaNome($nome);
        $this->nome = $nome;
        $this->cpf = $cpf;
    }

    public function recuperaNome(): string
    {
        return $this->nome;
    }

    public function recuperaCpf(): string
    {
        return $this->cpf->recuperaNumero();
    }

    protected function validaNome(string $nome)
    {
        if (strlen($nome) < 5) {
            echo "Nome precisa ter pelo menos 5 caracteres";
            exit();
        }
    }

    public function alteraNome(string $nome): void
    {
    $this->validaNomeTitular($nome);
    $this->nome = $nome;
    }       
}