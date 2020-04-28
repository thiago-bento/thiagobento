<?php

namespace Alura\Banco\Service;

class ControladorDeBonificacoes
{
    private $totalBonificacoes = 0;

    public function adicionaBonificacao (Funcionario $funcionario)
    {
        $this->totalBonificacoes += $funcionario->calculabonificacao();
    }

    public function recuperaTotalBonificacoes() float
    {
        return $this->totalBonificacoes;
    }








}