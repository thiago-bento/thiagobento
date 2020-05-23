<?php

namespace MundoAnimal\Models;

use Animal\Animal;

//require_once 'Animal.php';
require_once 'autoload.php';



class BichosTerra extends Animal
{
    protected $apelido;
    protected $alimento;

    public function __construct(string $raca, string $genero, string $idade, string $habitat, string $apelido, string $alimento)
    {
        parent::__construct($raca, $genero, $idade, $habitat );
        $this->apelido = $apelido;
        $this->alimento = $alimento;
    }

    public function __toString()
    {
        return "{$this->raca}, {$this->genero}, {$this->idade}, {$this->habitat}, {$this->apelido}, {$this->alimento}";
    }

}


