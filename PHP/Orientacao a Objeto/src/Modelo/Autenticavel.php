<?php

namespace Alura\Banco\Modelo;

interface Autenticavel
{
    public function podeAutenticar(string $senha): bool;
}


//uma Classe de interface é um classe onde todos  os seus metodos são abstratos