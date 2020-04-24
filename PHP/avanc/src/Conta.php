<?php

class Conta {

    private $titular;
    private $saldo;
    private static $numeroConta = 0;

    public function __construct(Titular $titular) // buscar Na Classe Titualar
    {
        $this->titular=$titular;             
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

    public function get_Saldo(): float //get
    {
         return $this->saldo;
    }

    public function recuperaNomeTitular():string
    {
        return $this->titular->recuperaNome();
    }


   
    public function exibeNumeroConta():int
    {
        return self::$numeroConta;
    }
}        