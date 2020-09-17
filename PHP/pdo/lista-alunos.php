<?php

use Alura\Pdo\Domain\Model\Student;

require_once 'vendor/autoload.php';

$caminho = __DIR__.'/banco.sqlite';
$pdo = new PDO ('sqlite:' . $caminho);

$statement = $pdo -> query ('select * from students');

$studentList = ($statement->fetchAll());
echo $studentList[11]['name'];