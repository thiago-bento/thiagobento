<?php

$caminho = __DIR__.'banco.sqlite';

$pdo = new PDO ('sqlite:' . $caminho);
echo "Conectei";


$pdo -> exec ( 'CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, data_aniversario TEXT);');
