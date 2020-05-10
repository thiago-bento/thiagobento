<?php declare(strict_types=1);

namespace Alura;

use Services\ArrayUtils;

require 'autoload.php';
//require 'Services/ArraysUtils.php';


$correntistas = [
    'Giovanni',
    'João',
    'Maria',
    'Luis',
    'Luisa',
    'Rafael',
];

$saldos = [
    2000,
    3000,
    5986,
    9622,
    6965,
    90056,
];


$diferentes = array_combine($correntistas, $saldos);

$diferentes ["Marcio"] = 6000;

//var_dump($diferentes);

//  ArrayUtils::remover(12, $correntistas_e_compras);


