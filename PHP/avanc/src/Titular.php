<?php

class Titular 
{
    private $nome;
    
    private $cpf;
    

    public function __construct (string $nome, Cpf $cpf)
    {

        $this->nome= $nome;
        $this->validaNomeTitular($nome);
        $this->cpf = $cpf;
    }

    private function validaNomeTitular(string $nomeTitular)
    {
        if (strlen($nomeTitular) < 5) {
            echo "Nome precisa ter pelo menos 5 caracteres";
            exit();
        }
    

    }

    public function recuperaNome(): string
{
    return $this->nome;
}

public function recuperaCpfTitular(): string
{
    return $this->cpf->recuperaCpf();
}

}
