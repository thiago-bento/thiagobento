<?php

namespace Animal;

abstract class Animal
{

    protected $raca;
    protected $genero;
    protected $idade;
    protected $habitat;
    
 protected function __construct(string $raca, string $genero, string $idade, string $habitat)

 {
    $this->raca = $raca;
    $this->genero=$genero;
    $this->idade = $idade;
    $this->habitat = $habitat;
 }

 public function getRaca(): string
 {
     return $this->raca;
 }
 
  public function getGenero(): string
  {
      return $this->genero;
  }
  public function getIdade(): int
 {
     return $this->idade;
 }
 public function getHabita(): string
 {
     return $this->habitat;
 }

 public function __toString()  //exite todos os atributos do objeto
 {
     return "{$this->raca}, {$this->genero}, {$this->idade}, {$this->habitat}". PHP_EOL;
 }
}


