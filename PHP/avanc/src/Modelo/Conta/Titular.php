<?php

namespace Alura\Banco\Modelo\Conta;

use Alura\Banco\Modelo\Pessoa;
use Alura\Banco\Modelo\CPF;
use Alura\Banco\Modelo\Endereco;

class Titular extends Pessoa

{
    private $endereco;

        public function __construct(CPF $cpf, string $nome, Endereco $endereco)
        {
            parent::__construct($nome, $cpf);
            $this->endereco = $endereco;
        }

        private function validaNomeTitular(string $nomeTitular)
        {
            if (strlen($nomeTitular) < 5) {
                echo "Nome precisa ter pelo menos 5 caracteres";
                exit();
            }
        }

        public function getEndreco(): Endereco
        {
            return $this->endereco;
        }

}
