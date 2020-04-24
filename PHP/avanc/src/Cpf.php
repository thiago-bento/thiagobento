<?php

class Cpf 
{
    private $cpf;

    function __construct (string $cpf):string 
    {

        $this->cpf = $cpf;

    }


    public function recuperaCpf(): string
{
    return $this->cpf;
}