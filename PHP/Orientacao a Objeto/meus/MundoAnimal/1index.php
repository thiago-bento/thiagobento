<?php



use MundoAnimal\Models\BichosTerra;

//require_once 'Models/BichosTerra.php';
require_once 'autoload.php';



$umUrso = new BichosTerra ('Usro Preto', 'Masculino', '10 anis', 'Floresta', 'ze comeia', 'carnivoro');

echo $umUrso. PHP_EOL;

echo $umUrso->getGenero();
