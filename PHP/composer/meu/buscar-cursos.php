<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

$cliente = new Client();

$resposta = $cliente->request('GET','https://www.alura.com.br/cursos-online-programacao/php');

$html = $resposta->getBody();


$crawler = new Crawler();

$crawler->addHtmlContent ($html);

$cursos = $crawler->filter('card-curso__nome');

foreach ($cursos as $cursos) {
    echo $curso->textContent. PHP_EOL;
}