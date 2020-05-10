<?php


function exibeMensagem(string $mensagem){
    echo $mensagem . '<br>';
}

function depositar (array $conta, float $valorADepositar){

    if ($valorADepositar >0){

        $conta['saldo'] += $valorADepositar;
    }else{

        exibeMensagem("Depositor precisam ser positivos");
    }

    return $conta;
}

function sacar(array $conta, float $valorASacar)
{
    if ($valorASacar > $conta['saldo']) {
        exibeMensagem("Você não tem saldo suficiente");
    } else {
        $conta['saldo'] -= $valorASacar;
    }

    return $conta;
}

function titularComLetrasMaiusculas (array &$conta){

        $conta ['titular'] = mb_strtoupper($conta ['titular']);
        echo $conta['titular'] . PHP_EOL;

}

function exibeConta(array $conta) {
    $html = "<li>Titular: $conta[titular]. Saldo: {$conta['saldo']}</li>";
}
