<?php

namespace Alura\Cursos\Controller;

class FormularioInsercao implements InterfaceControladorRequisicao
{
    public function processaRequisicao(): void
    {
        $titulo = 'Cadastrar novo Curso';
        require __DIR__ . '/../../view/cursos/formulario.php';
    }
}
