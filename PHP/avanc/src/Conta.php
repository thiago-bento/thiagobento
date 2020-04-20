<?php

class Conta {

    private $nomeTitular;
    private $cpfTitular;
    private $saldo;
    private static $numeroConta=0;

    public function __construct(string $nome, string $cpf)
    {
        $this->nomeTitular = $nome;
        $this->validaNomeTitular($nome);        
        $this->cpfTitular = $cpf;
        $this->saldo = 0;

        self:: $numeroConta++;
    }

 

    public function saca(float $valorASacar)
    {
        if ($valorASacar > $this->saldo) {
            echo "Saldo indisponível";
            
            return;    //exemplo de como seria sem o else.
        }

        $this->saldo -= $valorASacar;
    }

    public function deposita(float $valorADepositar): void
    {
        if ($valorADepositar < 0) {
            echo "Valor precisa ser positivo";
        } else {
            $this->saldo += $valorADepositar;
        }
    }

    public function transfere(float $valorATransferir, Conta $contaDestino): void
        {   
            if ($valorATransferir > $this->saldo) {
                echo "Saldo indisponível";
        }else{
            $this->sacar($valorATransferir);
            $contaDestino->depositar($valorATransferir);
        }
    }

    public function exibeSaldo(): float //get
    {
         return $this->saldo;
    }

        public function exibeNomeTitular():string //set
    {
        return $this->nomeTitular;
    }
    
    private function validaNomeTitular(string $nome)
    {
        if (strlen($nome) < 5) {
            echo "Nome precisa ter pelo menos 5 caracteres". PHP_EOL;
            exit();
        }
    }
    
    public function exibeCpfTitular():string  //get
    {
        return $this->cpfTitular;
    } 

    public function exibeNumeroConta():int
    {
        return self::$numeroConta;
    }
}        