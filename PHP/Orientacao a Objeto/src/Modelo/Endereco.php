<?php

namespace Alura\Banco\Modelo;

class Endereco
{
    private $cidade;
    private $bairro;
    private $rua;
    private $numero;

    public function __construct(string $cidade, string $bairro, string $rua, string $numero)
    {
        $this->cidade = $cidade;
        $this->bairro = $bairro;
        $this->rua = $rua;
        $this->numero = $numero;
    }

    public function recuperaCidade(): string
    {
        return $this->cidade;
    }

    public function recuperaBairro(): string
    {
        return $this->bairro;
    }

    public function recuperaRua(): string
    {
        return $this->rua;
    }

    public function recuperaNumero(): string
    {
        return $this->numero;
    }

    public function __toString()  //exite todos os atributos do objeto
    {
        return "{$this->cidade}, {$this->bairro}, {$this->rua}, {$this->numero}";
    }

    public function __get(string $nomedoAtributo)  //exibe especificamente um atributo
    {
        $metodo = 'recupera'.ucfirst($nomedoAtributo);

        return $this->$metodo();
    }
}
