<?php

$pnome = ($_POST['firstname']);
$unome = ($_POST['lastname']);
$pais = ($_POST['country']);
$subject = ($_POST['subject']);


echo " Olá! $pnome $unome do $pais, seja bem vindo.".'<br>';
echo "A descrição abaixo foi enviada".'<br>';
echo ":$subject";