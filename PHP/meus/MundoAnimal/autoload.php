<?php



spl_autoload_register(function (string $nomeCompletoDaClasse) {
    $caminhoArquivo = str_replace('Projetos//MEUS', 'MundoAnimal', $nomeCompletoDaClasse);
    $caminhoArquivo = str_replace('//', DIRECTORY_SEPARATOR, $caminhoArquivo);
    $caminhoArquivo .= '.php';

    if (file_exists($caminhoArquivo)) {
        require_once $caminhoArquivo;
    }
});