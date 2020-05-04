<?php

namespace MundoAnimal\Models\BichosTerra;

require_once '../Animal.php';
//require_once '../autoload.php';

use Animal\Animal;

Class BichosTerra extends Animal
{
    private $apelido;
    private $alimento;

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

$umUrso = new BichosTerra ('Usro Preto', 'Masculino', '10 anis', 'Floresta', 'ze comeia', 'carnivoro');

echo $umUrso. PHP_EOL;
echo $umUrso->getGenero();

