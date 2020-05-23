<?php

require_once 'excessao.php';

function funcao1()
{
    echo 'Entrei na função 1' . PHP_EOL;
    try {
    
        funcao2();
    
    }catch (DivisionByZeroError | RuntimeException $erroOuExcessao){
        //echo $erroOuExcessao->getMessage().PHP_EOL;
        //echo $erroOuExcessao->getLine().PHP_EOL;
        //echo $erroOuExcessao->getTraceAsString().PHP_EOL;
        echo funcaoLancaExpetion();
    }
    echo 'Saindo da função 1' . PHP_EOL;
}

function funcao2()
{
    echo 'Entrei na função 2' . PHP_EOL;
    
   // $divisao = intdiv (5,0);               //gera um DivisionByZeroError
    //$arrayFixo = new SplFixedArray(2); 
    //$arrayFixo [3] = 4;                     //Gera um expection
     // var_dump(debug_backtrace());

     throw new RuntimeException('Essa é a mensagem de excessão');
     echo 'Saindo da função 2' . PHP_EOL;
    
}

echo 'Iniciando o programa principal' . PHP_EOL;
funcao1();
echo 'Finalizando o programa principal' . PHP_EOL;
