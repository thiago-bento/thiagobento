<?php

namespace Alura\Buscador;

use GuzzleHttp\ClientInterface;
use Symfony\Component\DomCrawler\Crawler;

class Buscador
{

/**
 * @var ClientInterface
 */

 /**
 * @var Crawler
 */

private $httpClient;
private $crawler;

public function __construct(ClientInterface $httpClient, Crawler $crawler)
{
    $this->$httpClient = $httpClient;
    $this->crawler = $crawler;

}

public function buscar (string $url): array
{

}


}